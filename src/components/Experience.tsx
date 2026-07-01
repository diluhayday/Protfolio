import React from "react";
import { motion } from "motion/react";
import { experienceData } from "../data";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Timeline Connector Line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#4F8CFF] via-[#7C3AED] to-transparent opacity-30 pointer-events-none" />

          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-14 md:pl-20 group">
                
                {/* Glowing Timeline Node containing Briefcase icon */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-8 z-10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#090F1E] border border-[#4F8CFF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(79,140,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] group-hover:border-[#00E5FF] transition-all duration-300">
                    <Briefcase size={18} className="text-[#4F8CFF] md:w-5 md:h-5" />
                  </div>
                  {/* Subtle Aurora pulse background glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] opacity-20 blur-sm -z-10 animate-pulse" />
                </motion.div>

                {/* Timeline Card Column */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {/* Glass Card */}
                  <div className="relative overflow-hidden bg-[#0F172A]/40 border border-white/8 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-white/12 transition-colors duration-300 group">
                    
                    {/* Ambient background blur */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#4F8CFF]/5 blur-xl pointer-events-none" />

                    {/* Company Name */}
                    <h3 className="font-sans font-extrabold text-[#4F8CFF] text-xl md:text-2xl tracking-tight mb-1.5">
                      {item.company}
                    </h3>

                    {/* Role/Post Title & Date */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                      <p className="text-sm md:text-base font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                        {item.role}
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs font-medium text-[#9CA3AF]">
                        <Calendar size={11} />
                        {item.duration}
                      </span>
                    </div>

                    {/* Timeline Highlights */}
                    <div className="space-y-3 mb-6">
                      {item.highlights.map((hl, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs md:text-sm text-[#9CA3AF] leading-relaxed">
                          <ChevronRight size={14} className="text-[#7C3AED] shrink-0 mt-1" />
                          <p>{hl}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech/Tag chips */}
                    <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono tracking-wider uppercase text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
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
