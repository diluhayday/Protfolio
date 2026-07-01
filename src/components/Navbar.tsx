import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap, Code, Compass } from "lucide-react";
import { personalInfo } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${
          scrolled ? "top-6" : "top-4"
        }`}
      >
        <div
          id="navbar-glass"
          className="w-full bg-[#0F172A]/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/8 shadow-[0_8px_32px_0_rgba(15,23,42,0.37)] flex items-center justify-between transition-all duration-300 hover:border-white/12"
          style={{
            boxShadow: scrolled ? "0 0 20px rgba(79, 140, 255, 0.15), 0 8px 32px 0 rgba(15, 23, 42, 0.37)" : ""
          }}
        >
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#hero");
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#4F8CFF] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Code size={16} className="text-white" />
            </div>
            <span className="font-sans font-bold tracking-tight text-white text-sm md:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00E5FF] transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                  className="relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full"
                  style={{
                    color: active ? "#FFFFFF" : "#9CA3AF"
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="hover:text-white transition-colors">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-[#9CA3AF] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const active = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-[#4F8CFF]/10 to-[#7C3AED]/10 border-white/10 text-white"
                        : "border-transparent text-[#9CA3AF] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
