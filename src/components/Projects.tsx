import React from "react";
import { motion } from "motion/react";
import { projectsData } from "../data";
import { Code2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4">
            Showcase Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#4F8CFF] rounded-full" />
        </div>

        {/* Projects Column */}
        <div className="flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch overflow-hidden bg-[#0F172A]/30 border border-white/8 rounded-[2rem] p-6 backdrop-blur-md hover:border-white/12 transition-colors duration-300 shadow-2xl"
            >
              {/* Image Column - Zoom on Hover */}
              <div className="col-span-1 md:col-span-5 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto min-h-[220px] bg-[#050816]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                {/* Custom Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#050816]/70 border border-white/10 backdrop-blur-md text-[10px] font-mono font-semibold tracking-wide uppercase text-[#00E5FF]">
                  <Code2 size={12} />
                  <span>{project.tags[0]}</span>
                </div>
              </div>

              {/* Text / Action Details Column */}
              <div className="col-span-1 md:col-span-7 flex flex-col justify-between py-2 text-left">
                <div>
                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-[#9CA3AF] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-white text-xl md:text-2xl mb-4 group-hover:text-[#4F8CFF] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-base text-[#9CA3AF] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>



              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
