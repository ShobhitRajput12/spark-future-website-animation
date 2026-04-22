import { motion } from "motion/react";

const images = [
  {
    url: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775624303/Indian-Army-Successfully-Conducts-Major-Training-Exercise-in-Punjab-Along-Western-Borders_hjeeki.webp",
    label: "MORNING DRILLS",
    caption: "PARADE GROUND"
  },
  {
    url: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775624762/Day-in-the-Life-of-an-Indian-Army-Soldier-officers-mess-daily-routine_r8k7u2.webp",
    label: "PHYSICAL TRAINING",
    caption: "CADET TRAINING"
  },
  {
    url: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775541947/National-Defence-Academy-Army-Training_mdgoal.jpg",
    label: "TRAINING DRILLS",
    caption: "SSB TRAINING"
  },
  {
    url: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775541951/nda_wsaryw.jpg",
    label: "LEADERSHIP",
    caption: "LEADERSHIP DRILLS"
  }
];

export default function Campus() {
  return (
    <section id="campus" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-uppercase text-gold mb-6 block">Life at Academy</span>
            <h2 className="section-heading text-white mb-8 uppercase italic">Training Gallery</h2>
            <p className="label-uppercase text-white/40 max-w-2xl mx-auto leading-relaxed">
              A glimpse into the rigorous training and disciplined life of our future officers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-[16px] shadow-lg border border-white/10"
              style={{ height: '400px' }}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <p className="label-uppercase text-gold mb-2">{img.label}</p>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter italic">{img.caption}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
