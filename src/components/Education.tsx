import React from "react";
import { motion } from "motion/react";
import { educationData } from "../data";
import { GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Absolute background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-[#4F8CFF]/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "48px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-sm md:text-base text-[#9CA3AF] max-w-lg leading-relaxed font-normal"
          >
            A timeline of academic qualifications and core foundation in engineering and technology.
          </motion.p>
        </div>

        {/* Education Timeline Connector Container */}
        <div className="relative mt-12">
          {/* Vertical Timeline Connector Line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#4F8CFF] via-[#7C3AED] to-transparent opacity-30 pointer-events-none" />

          {/* Timeline Cards Gap / Spacing */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-14 md:pl-20">
                
                {/* Glowing Timeline Node containing GraduationCap icon */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-8 z-10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#090F1E] border border-[#7C3AED]/40 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] group-hover:border-[#00E5FF] transition-all duration-300">
                    <GraduationCap size={18} className="text-[#00E5FF] md:w-5 md:h-5" />
                  </div>
                  {/* Subtle Aurora pulse background glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] opacity-20 blur-sm -z-10 animate-pulse" />
                </motion.div>

                {/* Glassmorphism 2.0 Card with Thin Gradient Border Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3 }}
                  className="relative p-[1px] rounded-[24px] bg-gradient-to-r from-white/12 via-white/5 to-white/12 hover:from-[#4F8CFF]/25 hover:via-[#7C3AED]/15 hover:to-[#00E5FF]/25 transition-all duration-500 shadow-xl group hover:shadow-[0_0_40px_rgba(79,140,255,0.15)]"
                >
                  <div className="relative bg-[#090F1E]/80 backdrop-blur-2xl rounded-[23px] p-6 md:p-8 overflow-hidden h-full">
                    {/* Soft Aurora gradient highlights inside card */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-[#7C3AED]/5 to-[#00E5FF]/5 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#4F8CFF]/3 blur-2xl pointer-events-none" />

                    {/* Degree & Duration Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div className="space-y-1">
                        <h3 className="font-sans font-extrabold text-white text-lg md:text-xl lg:text-2xl tracking-tight leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00E5FF] transition-colors duration-300">
                          {item.degree}
                        </h3>
                      </div>

                      {/* Duration Badge */}
                      <div className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/8 text-xs font-mono font-medium text-[#E2E8F0] w-fit self-start sm:self-center h-fit">
                        <Calendar size={13} className="text-[#4F8CFF]" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Institution and University Details */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2.5 text-[#E2E8F0] text-sm md:text-base font-medium">
                        <Building2 size={16} className="text-[#7C3AED] shrink-0" />
                        <span>{item.institute}</span>
                      </div>

                      {item.university && (
                        <div className="flex items-center gap-2.5 text-[#9CA3AF] text-xs md:text-sm">
                          <MapPin size={14} className="text-[#4F8CFF] shrink-0" />
                          <span>{item.university}</span>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
