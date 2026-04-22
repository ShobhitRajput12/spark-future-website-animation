import { motion } from "motion/react";

const programs = [
  {
    title: "NDA Foundation",
    age: "Grade 11-12",
    desc: "Comprehensive preparation for the National Defence Academy entrance exam alongside schooling.",
    features: ["UPSC Syllabus Coverage", "Weekly Mock Tests", "Physical Drills"],
    image: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775541481/ht-pune_2bffccde-d678-11e7-ad30-e18a56154311_sl5cpf.avif"
  },
  {
    title: "CDS & AFCAT",
    age: "Graduates",
    desc: "Targeted coaching for Combined Defence Services and Air Force Common Admission Test.",
    features: ["SSB Interview Prep", "Current Affairs", "Leadership Labs"],
    image: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775541599/army-900x500_gcdhn9.jpg"
  },
  {
    title: "SSB Interview Training",
    age: "All Aspirants",
    desc: "Intensive 14-day psychological grooming and GTO task training by retired board members.",
    features: ["Psychology Testing", "GTO Ground Tasks", "Mock Interviews"],
    image: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775541604/Passing-Out-Parade-NDA_l1tikn.avif"
  }
];

export default function Academics() {
  return (
    <section id="academics" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="label-uppercase text-gold mb-6 block">Our Training</span>
            <h2 className="section-heading text-white uppercase italic">Elite Programs</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="label-uppercase text-white/40 max-w-sm mb-2 leading-relaxed"
          >
            Specialized training modules designed to transform aspirants into commissioned officers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-tesla overflow-hidden flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 px-4 py-1 bg-transparent/60 backdrop-blur-md rounded-sm text-white label-uppercase">
                  {program.age}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight italic">{program.title}</h3>
                <p className="body-text mb-8 flex-grow card-description-mobile">
                  {program.desc}
                </p>
                <div className="hidden md:block space-y-3 mb-10">
                  {program.features.map(f => (
                    <div key={f} className="flex items-center gap-3 label-uppercase text-white/60">
                      <div className="w-1.5 h-1.5 rounded-none bg-gold"></div>
                      {f}
                    </div>
                  ))}
                </div>
                <button className="btn-tesla-secondary w-full py-3">
                  View Batch Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
