import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Send } from "lucide-react";
import { personalInfo } from "../data";
import resumePdf from "../assets/Dilip Resume.pdf";

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  const profileImgPath = new URL("../assets/images/passport_size.jpg", import.meta.url).href;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* Left Column - Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left">
          {/* Accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/8 backdrop-blur-md text-xs font-semibold text-[#4F8CFF] mb-6 w-fit shadow-[0_4px_12px_rgba(79,140,255,0.1)] hover:border-white/12 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            {personalInfo.name}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="font-sans font-extrabold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-[1.15]"
          >
            Empowering Education <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#00E5FF]">
              Through Technology
            </span>{" "}
            & Innovation
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="font-sans text-sm md:text-base text-[#9CA3AF] mb-8 max-w-xl leading-relaxed font-normal"
          >
            I'm a Computer Science Engineer, Lecturer, and Flutter Developer passionate about building impactful digital solutions while shaping the next generation of technology professionals. I combine technical expertise, teaching excellence, and leadership to deliver meaningful results in both academia and software development.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* View My Work Button */}
            <button
              onClick={onWorkClick}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] text-sm font-semibold text-white transition-all shadow-[0_4px_20px_rgba(79,140,255,0.3)] hover:shadow-[0_4px_30px_rgba(79,140,255,0.5)] hover:scale-[1.02] cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Get In Touch Button */}
            <button
              onClick={onContactClick}
              className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-sm font-semibold text-white transition-all hover:bg-white/10 backdrop-blur-md cursor-pointer"
            >
              <span>Get In Touch</span>
              <Send size={15} className="text-[#00E5FF]" />
            </button>

            {/* Download Resume Button */}
            <a
              href={resumePdf}
              download="Dilip_Resume.pdf"
              className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-sm font-semibold text-[#9CA3AF] hover:text-white transition-all hover:bg-white/10 backdrop-blur-md cursor-pointer"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Circular Profile Photo with Tech Rings */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center relative mt-8 md:mt-0">
          
          {/* Glow backdrop */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] opacity-[0.15] blur-[80px]" />

          {/* Outer Rotating Gradient Ring */}
          <motion.div
            className="absolute p-[2px] rounded-full bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#00E5FF] opacity-60"
            style={{ width: "290px", height: "290px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Rotating Ring (Opposite direction) */}
          <motion.div
            className="absolute p-[1.5px] rounded-full bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#4F8CFF] opacity-40"
            style={{ width: "276px", height: "276px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Profile Mask Wrapper */}
          <div 
            className="relative rounded-full overflow-hidden border-2 border-white/10 bg-[#0F172A]"
            style={{ width: "260px", height: "260px" }}
          >
            <img
              src={profileImgPath}
              alt="Vekariya Dilip Profile Image"
              className="w-full h-full object-cover scale-[1.05] transition-transform duration-700 hover:scale-[1.12]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
