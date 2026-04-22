import { motion } from "motion/react";

const features = [
  {
    title: "Retired Defence Mentors",
    desc: "Training led by retired Colonels, Brigadiers, and SSB psychologists with decades of experience.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: "Daily PT & Drills",
    desc: "Rigorous physical training, morning drills, and endurance building to meet military standards.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
  },
  {
    title: "Mock SSB Rooms",
    desc: "Simulated SSB interview environments including GTO grounds and psychological testing labs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  {
    title: "Hostel Discipline",
    desc: "A strictly regulated residential environment that mirrors life in a military academy.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-uppercase text-gold mb-6 block">The Academy Edge</span>
            <h2 className="section-heading mb-12 text-white uppercase italic">
              Officer Grade <br className="hidden sm:block" /> <span className="text-gold">Grooming</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 glass-tesla group relative overflow-hidden"
                >
                  <div className="w-12 h-12 bg-white/10 text-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white italic">{feature.title}</h3>
                  <p className="label-uppercase text-white/40 leading-relaxed card-description-mobile">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10"
            >
              <iframe
                src="https://www.youtube.com/embed/dhYGhDOJXcw?rel=0&modestbranding=1&controls=1&showinfo=0&color=white&autoplay=0&enablejsapi=1"
                className="w-full aspect-video border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                title="Academy Training Drills"
              ></iframe>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 glass-tesla z-20 flex flex-col items-center justify-center text-center p-4"
            >
              <span className="text-3xl font-bold text-gold">98%</span>
              <span className="label-uppercase opacity-60">SSB Success</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
