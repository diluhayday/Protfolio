import React from "react";
import { Code, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer id="footer" className="relative mt-16 pb-12 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Glass Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left mb-12">
          {/* Column 1: Brand details */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#4F8CFF] flex items-center justify-center">
                <Code size={15} className="text-white" />
              </div>
              <span className="font-sans font-extrabold text-white text-base tracking-tight">{personalInfo.name}</span>
            </div>
            <p className="font-sans text-xs md:text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Computer Science Engineer, Lecturer, and Flutter Developer passionate about building impactful digital solutions while shaping the next generation of technology professionals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="font-sans text-xs md:text-sm text-[#9CA3AF] hover:text-[#00E5FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Coordinates */}
          <div className="col-span-1 md:col-span-4 space-y-3">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Contact Coordinates</h4>
            <div className="space-y-2.5 text-xs md:text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#4F8CFF]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#00E5FF]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[#9CA3AF]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-wider">
            Built with <span className="text-[#4F8CFF]">Vite</span> • <span className="text-[#7C3AED]">TypeScript</span> • <span className="text-[#00E5FF]">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
