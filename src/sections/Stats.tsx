import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "NDA SELECTIONS", value: 500, suffix: "+" },
  { label: "SSB SUCCESS RATE", value: 98, suffix: "%" },
  { label: "RETIRED OFFICERS", value: 25, suffix: "+" },
  { label: "YEARS OF LEGACY", value: 25, suffix: "+" }
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const target = `.stat-val-${i}`;
        gsap.fromTo(target, 
          { textContent: 0 },
          {
            textContent: stat.value,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: target,
              start: "top 90%",
              once: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-transparent relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 text-center text-white relative z-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 tracking-[-0.04em] flex items-center justify-center text-gold italic">
              <span className={`stat-val-${i}`}>{stat.value}</span>
              <span>{stat.suffix}</span>
            </div>
            <div className="label-uppercase text-white/40 group-hover:text-gold transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Text */}
      <motion.div 
        animate={{ 
          x: ["-50%", "-48%", "-50%"],
          y: ["-50%", "-52%", "-50%"]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap uppercase italic tracking-tighter"
      >
        DISCIPLINE
      </motion.div>
    </section>
  );
}
