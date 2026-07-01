"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export function ScrollButton() {
  const [currentSection, setCurrentSection] = useState<"hero" | "work" | "experience">("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const workEl = document.getElementById("work");
      const expEl = document.getElementById("experience");

      // Calculate offset slightly before the actual section hits the top
      const offset = window.innerHeight / 2;

      const workTop = workEl ? workEl.offsetTop - offset : Infinity;
      const expTop = expEl ? expEl.offsetTop - offset : Infinity;

      if (scrollY >= expTop) {
        setCurrentSection("experience");
      } else if (scrollY >= workTop) {
        setCurrentSection("work");
      } else {
        setCurrentSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (currentSection === "hero") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else if (currentSection === "work") {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getLabel = () => {
    if (currentSection === "hero") return "Case studies";
    if (currentSection === "work") return "Experience";
    return "Back to top";
  };

  const Icon = currentSection === "experience" ? ArrowUp : ArrowDown;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onClick={handleClick}
      data-cursor="view"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 text-[13px] font-medium text-[#111] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] cursor-none"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentSection}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {getLabel()}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection === "experience" ? "up" : "down"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="h-3.5 w-3.5 opacity-60" strokeWidth={2.5} />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
