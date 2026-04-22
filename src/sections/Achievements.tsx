import { motion } from "motion/react";

const row1Cadets = [
  { name: "CADET RAHUL SHARMA", course: "NDA 152 | AIR 45", detail: "Rank: #1 | 2024", rank: "#1" },
  { name: "CADET PRIYA VERMA", course: "AFCAT 1/2024", detail: "Flying Branch | 2024", rank: "#2" },
  { name: "CADET ADITYA DAS", course: "CDS 2023", detail: "IMA Dehradun | 2023", rank: "#3" },
  { name: "CADET SNEHA REDDY", course: "SSB Recommended", detail: "Indian Navy | 2024", rank: "#4" },
  { name: "CADET VIKRAM SINGH", course: "NDA 151 | AIR 12", detail: "Rank: #1 | 2023", rank: "#5" },
  { name: "CADET ARJUN MEHTA", course: "CDS 2024", detail: "OTA Chennai | 2024", rank: "#6" },
];

const row2Cadets = [
  { name: "CADET NEHA SHARMA", course: "AFCAT 2024", detail: "Air Force Selected | 2024", rank: "#1" },
  { name: "CADET ROHAN VERMA", course: "SSB Cleared", detail: "Army Selection | 2023", rank: "#2" },
  { name: "CADET ANJALI RAO", course: "NDA 153", detail: "Navy Cadet | 2024", rank: "#3" },
  { name: "CADET KARAN SINGH", course: "CDS 2023", detail: "Air Force | 2023", rank: "#4" },
  { name: "CADET MEERA PATEL", course: "SSB Recommended", detail: "OTA Selected | 2024", rank: "#5" },
  { name: "CADET AMIT KUMAR", course: "NDA 150 | AIR 8", detail: "Rank: #1 | 2022", rank: "#6" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-transparent overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-uppercase text-gold mb-6 block">Wall of Honor</span>
          <h2 className="section-heading text-white uppercase italic">Cadet Success</h2>
        </motion.div>
        <button className="btn-tesla-secondary py-3 px-10">VIEW ALL SELECTIONS</button>
      </div>

      <div className="space-y-8">
        {/* Row 1: Scrolls Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-left">
            {[...row1Cadets, ...row1Cadets].map((cadet, i) => (
              <div key={`row1-${i}`} className="min-w-[280px] max-w-[280px] p-6 rounded-[16px] bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gold text-black font-[800] px-[10px] py-[4px] rounded-[6px] text-xs">
                    {cadet.rank}
                  </div>
                </div>
                <h3 className="text-[16px] font-[700] text-white whitespace-nowrap mb-1 uppercase tracking-tight">
                  {cadet.name}
                </h3>
                <p className="text-[11px] text-gold tracking-[0.1em] uppercase mb-2">
                  {cadet.course}
                </p>
                <p className="text-[12px] text-white/50 uppercase card-description-mobile">
                  {cadet.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-right">
            {[...row2Cadets, ...row2Cadets].map((cadet, i) => (
              <div key={`row2-${i}`} className="min-w-[280px] max-w-[280px] p-6 rounded-[16px] bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gold text-black font-[800] px-[10px] py-[4px] rounded-[6px] text-xs">
                    {cadet.rank}
                  </div>
                </div>
                <h3 className="text-[16px] font-[700] text-white whitespace-nowrap mb-1 uppercase tracking-tight">
                  {cadet.name}
                </h3>
                <p className="text-[11px] text-gold tracking-[0.1em] uppercase mb-2">
                  {cadet.course}
                </p>
                <p className="text-[12px] text-white/50 uppercase card-description-mobile">
                  {cadet.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
