import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Lt. Karan Malhotra",
    role: "NDA 150 Course",
    text: "The discipline and leadership skills I learned here were instrumental in my selection for the NDA. The mentors are true role models.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Mrs. Sunita Sharma",
    role: "Parent of Cadet Aryan",
    text: "As a parent, I am amazed by the transformation in my son. He is more focused, disciplined, and confident than ever before.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Capt. Anjali Singh",
    role: "AFCAT Selected",
    text: "The SSB interview training is world-class. The mock interviews and psychological testing gave me the edge I needed to clear the board.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-uppercase text-gold mb-6 block">Success Stories</span>
            <h2 className="section-heading text-white mb-8 uppercase italic">Cadet & Parent Trust</h2>
          </motion.div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="testimonial-swiper max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="p-12 md:p-20 glass-tesla relative text-center group">
                <div className="text-8xl text-gold/10 absolute top-10 left-10 font-serif">“</div>
                <p className="text-xl md:text-3xl italic text-white/60 mb-12 leading-relaxed font-light uppercase tracking-tighter card-description-mobile">
                  {t.text}
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter italic">{t.name}</h4>
                  <p className="label-uppercase text-gold">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
