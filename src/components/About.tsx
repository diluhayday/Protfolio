import React from "react";
import { motion } from "motion/react";
import { myStory } from "../data";
import { Award, BookOpen, Users, Compass, CheckCircle2 } from "lucide-react";

export default function About() {
  const achievementsList = [
    "GTU Endorsed Faculty",
    "Lecturer at HJD Institute of Technical Education and Research",
    "Teaching Data Structures",
    "Teaching Software Engineering",
    "Teaching Python",
    "Teaching Artificial Intelligence",
    "Sports Head",
    "Academic Administration",
    "GTU Portal Management"
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4">
            A Bridge Between Academia & Industry
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: My Story Card with Integrated Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between bg-[#0F172A]/40 border border-white/8 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-white/12 transition-colors duration-300 group"
          >
            <div className="mb-10">
              <h3 className="font-sans font-extrabold text-white text-xl md:text-2xl mb-6 flex items-center gap-2">
                <Compass className="text-[#4F8CFF]" size={20} />
                My Story
              </h3>
              
              <div className="flex flex-col gap-4 text-sm md:text-base text-[#9CA3AF] leading-relaxed font-normal text-justify">
                {myStory.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Integrated Minimal Statistics Strip (with thin divider above) */}
            <div>
              <div className="border-t border-white/8 pt-6 mt-4 grid grid-cols-2 gap-4">
                {myStory.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-left">
                    <span className="font-sans font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#00E5FF] bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs text-[#9CA3AF] font-medium tracking-wide uppercase mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-[#0F172A]/40 border border-white/8 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-white/12 transition-colors duration-300 group"
          >
            <h3 className="font-sans font-extrabold text-white text-xl md:text-2xl mb-2 flex items-center gap-2">
              <Award className="text-[#7C3AED]" size={22} />
              Achievements
            </h3>
            <p className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-8">
              Professional Credentials & Engagements
            </p>

            {/* Interactive Grid of Achievements list bullets */}
            <div className="flex flex-col gap-4">
              {achievementsList.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-[#00E5FF]" />
                  </div>
                  <span className="font-sans text-sm text-[#E2E8F0] leading-relaxed font-normal">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
