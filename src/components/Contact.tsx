import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="font-sans font-bold tracking-tight text-white text-3xl md:text-4xl mb-4">
            Let's Build Something Meaningful Together
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4F8CFF] to-[#7C3AED] rounded-full" />
        </div>

        {/* Contact Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[#0F172A]/40 border border-white/8 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl text-center"
        >
          {/* Ambient background blur */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#4F8CFF]/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#7C3AED]/5 blur-2xl pointer-events-none" />

          <h3 className="font-sans font-extrabold text-white text-xl md:text-2xl mb-4">
            Let's get in touch!
          </h3>
          <p className="font-sans text-sm md:text-base text-[#9CA3AF] leading-relaxed max-w-xl mx-auto mb-10">
            Whether you're looking for a passionate educator, Flutter developer, technical mentor, or collaborator for innovative projects, I'd love to connect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {/* Email Contact */}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4F8CFF]/30 hover:bg-[#4F8CFF]/5 transition-colors duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={20} className="text-[#4F8CFF]" />
              </div>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-1">Email Contact</h4>
              <p className="font-sans text-xs md:text-sm text-[#9CA3AF] break-all group-hover:text-white transition-colors">
                {personalInfo.email}
              </p>
            </a>

            {/* Phone Contact */}
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/5 transition-colors duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={20} className="text-[#7C3AED]" />
              </div>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-1">Phone</h4>
              <p className="font-sans text-xs md:text-sm text-[#9CA3AF] group-hover:text-white transition-colors">
                {personalInfo.phone}
              </p>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5 transition-colors duration-300 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0 mb-4">
                <MapPin size={20} className="text-[#00E5FF]" />
              </div>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-1">Location</h4>
              <p className="font-sans text-xs md:text-sm text-[#9CA3AF]">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
