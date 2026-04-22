import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const words = "FORGE YOUR DESTINY".split(" ");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-transparent pb-0 pt-[48px] md:pt-0">
      {/* Transparent Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

      <div className="relative z-20 text-center px-5 sm:px-6 max-w-7xl w-full mx-auto mt-0">
        <div className="flex flex-col items-center gap-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="label-uppercase text-gold mb-4 md:mb-6 tracking-[4px] md:tracking-[0.4em] text-[10px] md:text-xs mt-[18px] md:mt-0 leading-[1.3] text-center"
          >
            <span className="block md:inline">Elite Leadership Training</span>
            <span className="block md:inline md:ml-2">Since 1999</span>
          </motion.div>

          <h1 className="hero-heading text-white mt-[10px] mb-2 md:mb-4 flex flex-wrap justify-center gap-x-4 italic uppercase">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + (i * 0.15),
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="sub-heading text-white/80 mb-2 md:mb-4 max-w-3xl font-medium"
          >
            Spark Future Leaders Academy
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="body-text text-white/60 mb-6 md:mb-4 max-w-2xl font-medium uppercase tracking-[0.15em]"
          >
            India's Premier Defence Academy — NDA | CDS | SSB
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center gap-6 mb-8 md:mb-12"
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 glass-tesla border border-gold/20 rounded-full">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border border-gold/30 bg-white shrink-0">
                <img 
                  src="https://res.cloudinary.com/dytoubgbw/image/upload/v1775549605/logo_qiajma.jpg" 
                  alt="P Obul Reddy Public School Logo" 
                  className="w-full h-full object-cover scale-[1.4] contrast-[1.1] brightness-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">Trusted by P Obul Reddy Public School</div>
                <div className="text-[8px] md:text-[9px] text-gold font-medium uppercase tracking-widest">Partner Institution</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-tesla-primary min-w-[240px]"
            >
              JOIN NDA PROGRAM
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-tesla-secondary min-w-[240px]"
            >
              APPLY FOR SSB TRAINING
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-16 left-0 w-full z-20 hidden lg:flex justify-center gap-12 xl:gap-16 px-6">
        {['RETIRED DEFENCE MENTORS', 'SSB MOCK ROOMS', 'OBSTACLE COURSE', 'PSYCHOLOGY TESTING'].map((badge, i) => (
          <motion.span 
            key={badge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + (i * 0.1) }}
            className="text-[8px] xl:text-[9px] font-bold tracking-[0.3em] xl:tracking-[0.4em] text-white/30 uppercase border-b border-white/5 pb-2 hover:text-gold transition-colors cursor-default whitespace-nowrap"
          >
            {badge}
          </motion.span>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="label-uppercase text-white/40 text-[9px]"
        >
          Scroll to Explore
        </motion.span>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          className="text-white/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
