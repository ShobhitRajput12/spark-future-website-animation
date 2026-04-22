import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  candidateName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional()
});

export default function Admissions() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/admissions/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert("Inquiry submitted successfully!");
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section id="admissions" className="pt-12 pb-[120px] lg:pt-24 lg:pb-[220px] px-5 lg:px-16 bg-transparent relative overflow-hidden border-t border-white/5 mb-0">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-tesla px-8 md:px-16 pb-4 md:pb-8 pt-2 md:pt-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="label-uppercase text-gold mb-4 block">Join the Elite</span>
              <h2 className="text-4xl md:text-[52px] font-bold tracking-tight text-white mb-6 leading-[1.1] uppercase italic">
                Your Journey to <br className="hidden sm:block" /> <span className="text-gold">Commissioned Rank</span> <br className="hidden sm:block" /> Starts Here
              </h2>
              <p className="label-uppercase text-white/50 mb-8 leading-relaxed card-description-mobile">
                Admissions are open for the 2026-27 academic session. Take the first step towards serving the nation with honor and pride.
              </p>
              
              <div className="space-y-8">
                {[
                  { num: "01", title: "Online Inquiry", desc: "Fill out the form to express your interest." },
                  { num: "02", title: "Counselling Session", desc: "Meet our retired officers for a career roadmap." },
                  { num: "03", title: "Entrance & PT Test", desc: "Qualify our internal assessment for final selection." }
                ].map((step, i) => (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 bg-white/10 text-gold rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <span className="font-bold text-base italic">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-tight text-base italic">{step.title}</h4>
                      <p className="label-uppercase text-white/40 card-description-mobile">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.02] px-6 md:px-10 pb-6 md:pb-10 pt-2 md:pt-4 border border-white/10 relative rounded-2xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-10 uppercase tracking-tighter italic">Inquiry Form</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-uppercase text-white/40">Candidate Name</label>
                    <input 
                      {...register("candidateName")}
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-xl text-sm" 
                      placeholder="Enter name" 
                    />
                    {errors.candidateName && <p className="text-red-500 label-uppercase font-bold">{errors.candidateName.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="label-uppercase text-white/40">Contact Number</label>
                    <input 
                      {...register("phone")}
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-xl text-sm" 
                      placeholder="Enter phone" 
                    />
                    {errors.phone && <p className="text-red-500 label-uppercase font-bold">{errors.phone.message as string}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-uppercase text-white/40">Email Address</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-xl text-sm" 
                    placeholder="Enter email" 
                  />
                  {errors.email && <p className="text-red-500 label-uppercase font-bold">{errors.email.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <label className="label-uppercase text-white/40">Program of Interest</label>
                  <select 
                    {...register("program")}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-xl appearance-none text-sm"
                  >
                    <option value="" className="bg-transparent">Select Program</option>
                    <option value="NDA Foundation" className="bg-transparent">NDA Foundation</option>
                    <option value="CDS / AFCAT" className="bg-transparent">CDS / AFCAT</option>
                    <option value="SSB Training" className="bg-transparent">SSB Training</option>
                  </select>
                  {errors.program && <p className="text-red-500 label-uppercase font-bold">{errors.program.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <label className="label-uppercase text-white/40">Message (Optional)</label>
                  <textarea 
                    {...register("message")}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-xl h-32 text-sm" 
                    placeholder="Your query..."
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="btn-tesla-primary w-full py-5 disabled:opacity-50"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
