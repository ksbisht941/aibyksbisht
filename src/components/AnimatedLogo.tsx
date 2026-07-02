"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <div
      className="relative flex items-center justify-center w-8 h-8 overflow-visible text-black dark:text-white"
      aria-label="Logo"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <motion.path
          d="M 12 32 L 12 8 L 12 20 L 28 8 L 17 16.25 L 28 32"
          fill="transparent"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        />
        {/* We can also have a faint background of the K so it's always visible */}
        <path
          d="M 12 32 L 12 8 L 12 20 L 28 8 L 17 16.25 L 28 32"
          fill="transparent"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="opacity-10"
        />
      </svg>
    </div>
  );
}
