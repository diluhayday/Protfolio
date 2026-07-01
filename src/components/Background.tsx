import React from "react";
import { motion } from "motion/react";

export default function Background() {
  return (
    <div id="bg-container" className="fixed inset-0 -z-50 bg-[#050816] overflow-hidden">
      {/* Dynamic Grid Overlay */}
      <div 
        id="bg-grid" 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Radial Vignette */}
      <div 
        id="bg-vignette" 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_85%)]"
      />

      {/* Animated Floating Mesh Gradient Orb 1 (Primary Blue) */}
      <motion.div
        id="orb-primary"
        className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-[#4F8CFF] opacity-[0.08] blur-[110px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Floating Mesh Gradient Orb 2 (Secondary Violet) */}
      <motion.div
        id="orb-secondary"
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-[#7C3AED] opacity-[0.08] blur-[130px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Floating Mesh Gradient Orb 3 (Highlight Cyan) */}
      <motion.div
        id="orb-highlight"
        className="absolute top-1/2 left-2/3 w-[25rem] h-[25rem] rounded-full bg-[#00E5FF] opacity-[0.04] blur-[90px]"
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora Waves in Header */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#7C3AED]/5 to-transparent blur-2xl" />

      {/* Subtle Noise Texture Overlay */}
      <div 
        id="bg-noise" 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Micro Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = Math.random() * 15 + 15;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-[0.1]"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
