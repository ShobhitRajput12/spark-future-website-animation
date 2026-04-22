import { useState, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import BackgroundCanvas from "./components/BackgroundCanvas";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import WhyChooseUs from "./sections/WhyChooseUs";
import Stats from "./sections/Stats";
import Campus from "./sections/Campus";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import News from "./sections/News";
import Admissions from "./sections/Admissions";

// Pages
import AdminDashboard from "./pages/AdminDashboard";

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center w-full px-5 max-w-lg mx-auto"
      >
        <div className="w-20 h-20 bg-white text-black flex items-center justify-center text-3xl font-bold mb-8 italic rounded-sm shrink-0">
          S
        </div>
        <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 text-center w-full break-words">SPARK FUTURE LEADERS ACADEMY</h2>
        <p className="text-[10px] font-medium tracking-[0.3em] md:tracking-[0.5em] text-white/40 uppercase text-center">
          Forging Future Officers
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[2px] bg-gold/50"
      />
    </motion.div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || window.matchMedia("(hover: none)").matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .clickable, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[99998]"
        animate={{ 
          x: position.x - 20, 
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.5 }}
        style={{ pointerEvents: 'none' }}
      />
    </>
  );
}

function MainSite() {
  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />
      <main className="pt-0 mt-0">
        <Hero />
        <About />
        <Academics />
        <WhyChooseUs />
        <Stats />
        <Campus />
        <Achievements />
        <Testimonials />
        <News />
        <Admissions />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/admin") {
      setIsAdmin(true);
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => setLoading(false), 2500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden selection:bg-gold/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {isAdmin ? <AdminDashboard /> : <MainSite />}
    </div>
  );
}
