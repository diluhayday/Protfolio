import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Background from "./components/Background";
import Spotlight from "./components/Spotlight";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track the scroll progress for a sleek indicator bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle active navigation tracking during scroll via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "education", "experience", "projects", "contact"];
    const activeObservers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.2, // Trigger when 20% of section is visible
          rootMargin: "-15% 0px -45% 0px" // Adjusted to prioritize current active visual focus
        }
      );
      observer.observe(element);
      return { element, observer };
    });

    return () => {
      activeObservers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050816] selection:bg-[#4F8CFF]/20 selection:text-white">
      {/* 1. Sleek Scroll Progress Bar Indicator */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F8CFF] via-[#7C3AED] to-[#00E5FF] origin-left z-50 shadow-[0_0_8px_rgba(0,229,255,0.4)]"
        style={{ scaleX }}
      />

      {/* 2. Custom Cursor Light Spotlight */}
      <Spotlight />

      {/* 3. Premium Animated Mesh and Aurora Background */}
      <Background />

      {/* 4. Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 5. Main Sections Content Container */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onContactClick={() => handleScrollTo("#contact")}
          onWorkClick={() => handleScrollTo("#projects")}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
