import { motion } from "motion/react";

const newsItems = [
  {
    title: "NDA 154 Batch Admissions Open",
    date: "April 15, 2026",
    category: "Admissions",
    image: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775542543/nda-faundation_tzxc09.jpg",
    desc: "Enroll now for the premier NDA foundation course. Limited seats available for the upcoming batch."
  },
  {
    title: "Annual Leadership Bootcamp 2026",
    date: "May 10, 2026",
    category: "Events",
    image: "https://res.cloudinary.com/dytoubgbw/image/upload/v1775624307/military-exercise-story_647_020816115010_pfclq7.jpg",
    desc: "A 7-day intensive leadership training program led by retired Special Forces officers."
  },
  {
    title: "Scholarship Test for SSB Aspirants",
    date: "June 05, 2026",
    category: "Scholarship",
    image: "https://www.trishuldefenceacademy.in/blog/wp-content/uploads/2021/09/aa5b2ea8-9797-49d8-9cc7-88893e4169de.jpg",
    desc: "Merit-based scholarships for deserving candidates aiming for the Indian Armed Forces."
  }
];

export default function News() {
  return (
    <section id="news" className="section-padding bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="label-uppercase text-gold mb-6 block">Academy Updates</span>
            <h2 className="section-heading text-white uppercase italic">Latest News</h2>
          </motion.div>
          <button className="btn-tesla-secondary py-3 px-10">VIEW ALL UPDATES</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-tesla overflow-hidden cursor-pointer relative flex flex-col h-full rounded-[12px]"
            >
              <div className="h-[200px] overflow-hidden relative w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 rounded-t-[12px]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                  }}
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-transparent/60 backdrop-blur-md rounded-sm text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {item.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="label-uppercase text-white/40 mb-4">{item.date}</div>
                <h3 className="font-bold text-white mb-4 group-hover:text-gold transition-colors duration-500 uppercase tracking-tighter italic leading-[1.3] text-[clamp(16px,1.5vw,20px)]">
                  {item.title}
                </h3>
                <p className="label-uppercase text-white/40 leading-relaxed mb-8 flex-grow card-description-mobile">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read More <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
