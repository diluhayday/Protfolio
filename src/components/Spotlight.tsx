import React, { useEffect, useRef } from "react";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = spotlightRef.current;
      if (el) {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(79, 140, 255, 0.04), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      id="cursor-spotlight"
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        background: `radial-gradient(600px circle at -1000px -1000px, rgba(79, 140, 255, 0.04), transparent 80%)`,
      }}
    />
  );
}
