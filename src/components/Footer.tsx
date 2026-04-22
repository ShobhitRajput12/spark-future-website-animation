import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="pt-4 pb-4 lg:pt-6 lg:pb-8 px-5 lg:px-16 bg-transparent relative z-10 text-white border-t border-white/5 mt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold text-black flex items-center justify-center font-bold text-2xl md:text-3xl italic">PR</div>
              <div className="text-base md:text-lg font-bold leading-tight tracking-tighter uppercase italic">
                Spark Future Leaders Academy
              </div>
            </div>
            <p className="text-[11px] md:text-[13px] font-bold uppercase tracking-widest text-white/40 leading-relaxed mb-6 max-w-md">
              The premier destination for NDA, CDS, and SSB aspirants. Forging future leaders for the Indian Armed Forces through discipline, courage, and excellence.
            </p>
            <div className="flex flex-wrap gap-6 mb-6">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a key={social} href="#" className="label-uppercase text-white/40 hover:text-gold transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-uppercase text-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {['About Academy', 'NDA Program', 'SSB Training', 'Admissions', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="label-uppercase text-white/40 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-uppercase text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="label-uppercase text-gold">A.</span>
                <p className="label-uppercase text-white/40 leading-snug card-description-mobile">
                  Road No. 25, Jubilee Hills, <br/> Hyderabad, Telangana 500033
                </p>
              </li>
              <li className="flex gap-4">
                <span className="label-uppercase text-gold">T.</span>
                <p className="label-uppercase text-white/40">+91 40 2354 8912</p>
              </li>
              <li className="flex gap-4">
                <span className="label-uppercase text-gold">E.</span>
                <p className="label-uppercase text-white/40">admissions@poracademy.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/20 label-uppercase text-[10px]">
            © 2026 Spark Future Leaders Academy. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-gold label-uppercase text-[10px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-gold label-uppercase text-[10px] transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
