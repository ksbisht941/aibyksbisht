"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Use raw motion values for instant tracking, or very tight springs for smoothness
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Tighter spring for less lag
  const springConfig = { damping: 30, stiffness: 400, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;

      // Treat cards as links too
      const isLink = target.closest('a, button, [data-cursor="view"], [data-cursor="link"]');

      if (isLink) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || typeof window === "undefined") return null;

  const variants = {
    default: { width: 12, height: 12 },
    link: { width: 40, height: 40 },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white text-black overflow-hidden -translate-x-1/2 -translate-y-1/2"
        variants={variants}
        animate={cursorState}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.1 }}
      />
    </motion.div>
  );
}
