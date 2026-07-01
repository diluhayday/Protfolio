import React from "react";
import { motion } from "motion/react";
import { skillsData } from "../data";
import { Code2, GraduationCap, Briefcase, Languages } from "lucide-react";

export default function Skills() {
  // Map icon name string to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="text-[#4F8CFF]" size={20} />;
      case "GraduationCap":
        return <GraduationCap className="text-[#00E5FF]" size={20} />;
      case "Briefcase":
        return <Briefcase className="text-[#7C3AED]" size={20} />;
      case "Languages":
        return <Languages className="text-white" size={20} />;
      default:
        return <Code2 className="text-[#4F8CFF]" size={20} />;
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4">
            Technical & Professional Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4F8CFF] to-[#00E5FF] rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(79, 140, 255, 0.08)" }}
              className="relative overflow-hidden bg-[#0F172A]/40 border border-white/8 rounded-3xl p-8 backdrop-blur-md transition-colors duration-300 group flex flex-col justify-between"
            >
              {/* Subtle Ambient Aurora Border Glow effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4F8CFF]/0 via-[#7C3AED]/0 to-[#00E5FF]/0 group-hover:from-[#4F8CFF]/5 group-hover:to-[#00E5FF]/5 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#4F8CFF]/0 via-[#7C3AED]/50 to-[#00E5FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:scale-105 group-hover:border-[#00E5FF]/20 transition-all duration-300">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="font-sans font-extrabold text-white text-lg md:text-xl tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-white/10 text-xs text-[#9CA3AF] hover:text-white transition-all font-sans font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Soft visual anchor glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-[#4F8CFF]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
