import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useTransform, useReducedMotion, motion } from "motion/react";

const TOTAL_FRAMES = 210;
const MOBILE_STEP = 2; // Skip every other frame on mobile/low-end
const DESKTOP_STEP = 1;
const PRELOAD_RADIUS = 5; // Load current ±5 frames

function getFrameSrc(frameNumber: number) {
  return `/frames/ezgif-frame-${String(frameNumber).padStart(3, "0")}.jpg`;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingRef = useRef<Set<number>>(new Set());
  const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });
  
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [fallbackMode, setFallbackMode] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  
  const fallbackImageRef = useRef<HTMLImageElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Presentation values from existing code
  const parallaxY = useTransform(smoothProgress, [0, 1], [0, 0]);
  const cinematicScale = useTransform(smoothProgress, [0, 1], [1.08, 1]);

  // Device capability detection
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (typeof navigator !== "undefined" && navigator.hardwareConcurrency) {
        if (navigator.hardwareConcurrency <= 2) {
          setFallbackMode(true);
        } else if (navigator.hardwareConcurrency <= 4) {
          setIsLowEndDevice(true);
        }
      }
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const step = isMobile || isLowEndDevice ? MOBILE_STEP : DESKTOP_STEP;
  const maxFrames = Math.floor(TOTAL_FRAMES / step);

  const loadImage = useCallback((index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (imagesRef.current.has(index)) {
        resolve(imagesRef.current.get(index)!);
        return;
      }
      if (loadingRef.current.has(index)) {
        reject(new Error("Already loading"));
        return;
      }
      
      loadingRef.current.add(index);
      const img = new Image();
      const realFrameNumber = Math.min(index * step + 1, TOTAL_FRAMES);
      img.src = getFrameSrc(realFrameNumber);
      
      img.onload = () => {
        imagesRef.current.set(index, img);
        loadingRef.current.delete(index);
        resolve(img);
      };
      img.onerror = (e) => {
        loadingRef.current.delete(index);
        reject(e);
      };
    });
  }, [step]);

  // Render logic with object-fit: cover (best for full screen backgrounds)
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let imgToDraw = imagesRef.current.get(index);
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      imgToDraw = fallbackImageRef.current;
    }
    if (!imgToDraw) return; // Wait until loaded

    const { width, height, dpr } = viewportRef.current;
    
    // Resize check
    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const hRatio = width / imgToDraw.width;
    const vRatio = height / imgToDraw.height;
    const ratio = Math.max(hRatio, vRatio); // Use Math.max for cover
    
    const centerShift_x = (width - imgToDraw.width * ratio) / 2;
    const centerShift_y = (height - imgToDraw.height * ratio) / 2;

    // Fast clear
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, width, height);
    
    ctx.drawImage(
      imgToDraw,
      0, 0, imgToDraw.width, imgToDraw.height,
      centerShift_x, centerShift_y, imgToDraw.width * ratio, imgToDraw.height * ratio
    );
  }, []);

  // Window resize handler
  useEffect(() => {
    const updateCanvasSize = () => {
      viewportRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio || 1
      };
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  // Initial load
  useEffect(() => {
    let isMounted = true;
    const loadFallback = async () => {
      const img = new Image();
      img.src = getFrameSrc(1);
      img.onload = () => {
        if (!isMounted) return;
        fallbackImageRef.current = img;
        renderFrame(0);
      };
    };
    loadFallback();

    if (prefersReducedMotion || fallbackMode) return;

    const initialLoad = async () => {
      const promises = [];
      for (let i = 0; i <= PRELOAD_RADIUS; i++) {
        promises.push(loadImage(i).catch(() => null));
      }
      await Promise.all(promises);
      if (isMounted) {
        setInitialLoadDone(true);
        renderFrame(0);
      }
    };
    initialLoad();

    return () => { isMounted = false; };
  }, [loadImage, renderFrame, prefersReducedMotion, fallbackMode]);

  const loadNearbyFrames = useCallback((currentIndex: number) => {
    const loadTasks = () => {
      const start = Math.max(0, currentIndex - PRELOAD_RADIUS);
      const end = Math.min(maxFrames - 1, currentIndex + PRELOAD_RADIUS);
      for (let i = start; i <= end; i++) {
        if (!imagesRef.current.has(i)) {
          loadImage(i).catch(() => {});
        }
      }
    };

    if (typeof window.requestIdleCallback !== "undefined") {
      window.requestIdleCallback(loadTasks);
    } else {
      setTimeout(loadTasks, 0);
    }
  }, [loadImage, maxFrames]);

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, maxFrames - 1]);

  useEffect(() => {
    if (prefersReducedMotion || fallbackMode || !initialLoadDone) return;

    let animationFrameId: number;
    let lastRenderedIndex = -1;

    const render = () => {
      const safeIndex = Math.max(0, Math.min(maxFrames - 1, Math.floor(frameIndex.get())));
      
      if (safeIndex !== lastRenderedIndex) {
        lastRenderedIndex = safeIndex;
        renderFrame(safeIndex);
        loadNearbyFrames(safeIndex);
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndex, renderFrame, loadNearbyFrames, prefersReducedMotion, fallbackMode, initialLoadDone, maxFrames]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      if (prefersReducedMotion || fallbackMode || !initialLoadDone) {
        renderFrame(0);
      } else {
        renderFrame(Math.round(frameIndex.get()));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, renderFrame, prefersReducedMotion, fallbackMode, initialLoadDone]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020617]">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? false : { scale: 1.1 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={prefersReducedMotion ? undefined : { duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={prefersReducedMotion ? undefined : { y: parallaxY, scale: cinematicScale }}
      >
        {!initialLoadDone && !fallbackMode && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 blur-xl transition-opacity duration-1000"
            style={{ backgroundImage: `url(${getFrameSrc(1)})` }}
          />
        )}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-50 mix-blend-screen" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.8))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
    </div>
  );
}
