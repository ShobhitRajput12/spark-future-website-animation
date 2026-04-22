import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-uppercase text-gold mb-6 block">Our Mission</span>
          <h2 className="section-heading mb-8 text-white italic uppercase">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Building the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gold"
            >
              Next Generation
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              of Officers
            </motion.span>
          </h2>
          <p className="italic text-[20px] text-white/65 max-w-[600px] mb-12 leading-relaxed">
            "We don't prepare you for an exam. We prepare you for a life of honor."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 glass-tesla group relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Discipline</h3>
              <p className="label-uppercase text-white/40 card-description-mobile">The foundation of every great leader.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 glass-tesla group relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Courage</h3>
              <p className="label-uppercase text-white/40 card-description-mobile">Facing challenges with unwavering resolve.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 glass-tesla group relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">LEADERSHIP</h3>
              <p className="label-uppercase text-white/40 card-description-mobile">Built into every drill.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 glass-tesla group relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">NATION</h3>
              <p className="label-uppercase text-white/40 card-description-mobile">Service above self.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:mt-0"
        >
          <div style={{
            width: '100%',
            height: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2px',
            backgroundColor: 'rgba(255,255,255,0.05)'
          }}>
            <img
              src="https://res.cloudinary.com/dytoubgbw/image/upload/v1775711636/wmremove-transformed_1_rwviww.jpg"
              alt="Training 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
            <img
              src="https://res.cloudinary.com/dytoubgbw/image/upload/v1775712347/gettyimages-2232763027-1024x1024_warril.jpg"
              alt="Training 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
            <img
              src="https://res.cloudinary.com/dytoubgbw/image/upload/v1775712321/gettyimages-143715558-1024x1024_a9ifdr.jpg"
              alt="Training 3"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
            <img
              src="https://res.cloudinary.com/dytoubgbw/image/upload/v1775712329/gettyimages-2232763190-1024x1024_wb5caz.jpg"
              alt="Training 4"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              zIndex: 10
            }}>
              <p style={{
                color: '#C9A84C',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                ACADEMY TRAINING
              </p>
              <p style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '1.4'
              }}>
                "Service Before Self"
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                marginTop: '4px'
              }}>
                Col. Vikram Singh (Retd.)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
