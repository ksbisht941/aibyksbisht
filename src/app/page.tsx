"use client";

import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ConnectSection } from "@/components/ConnectSection";
import { projects } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
};

const getYearsOfExperience = () => {
  const start = new Date(2019, 6); // July 2019
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const x1 = useTransform(smoothMouseX, [0, 1500], [15, -15]);
  const y1 = useTransform(smoothMouseY, [0, 900], [10, -10]);

  const x2 = useTransform(smoothMouseX, [0, 1500], [-20, 20]);
  const y2 = useTransform(smoothMouseY, [0, 900], [-10, 10]);

  const x3 = useTransform(smoothMouseX, [0, 1500], [12, -12]);
  const y3 = useTransform(smoothMouseY, [0, 900], [-15, 15]);

  const x4 = useTransform(smoothMouseX, [0, 1500], [-18, 18]);
  const y4 = useTransform(smoothMouseY, [0, 900], [12, -12]);

  const x5 = useTransform(smoothMouseX, [0, 1500], [25, -25]);
  const y5 = useTransform(smoothMouseY, [0, 900], [20, -20]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main>
      {/* Marquee */}
      <div className="sr-only">
        Core technologies: PyTorch, Python, AWS, Docker, MLOps, RAG, Next.js, Angular, PostgreSQL.
      </div>
      <div
        aria-hidden="true"
        className="marquee-viewport -mx-6 overflow-hidden py-1 sm:-mx-10 lg:-mx-14 2xl:-mx-16 mb-20"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, #0000 0, #000 5rem calc(100% - 5rem), #0000 100%)",
          maskImage: "linear-gradient(90deg, #0000 0, #000 5rem calc(100% - 5rem), #0000 100%)",
        }}
      >
        <div className="marquee-track flex min-w-max text-lg font-semibold tracking-[-0.045em] text-black/20 sm:text-2xl">
          <div className="flex shrink-0 gap-7 pr-7">
            {[
              "PyTorch",
              "Python",
              "AWS",
              "Docker",
              "MLOps",
              "RAG",
              "Next.js",
              "Angular",
              "PostgreSQL",
              "PyTorch",
              "Python",
              "AWS",
              "Docker",
              "MLOps",
              "RAG",
              "Next.js",
              "Angular",
              "PostgreSQL",
            ].map((tech, i) => (
              <span key={i} className="shrink-0">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 gap-7 pr-7" aria-hidden="true">
            {[
              "PyTorch",
              "Python",
              "AWS",
              "Docker",
              "MLOps",
              "RAG",
              "Next.js",
              "Angular",
              "PostgreSQL",
              "PyTorch",
              "Python",
              "AWS",
              "Docker",
              "MLOps",
              "RAG",
              "Next.js",
              "Angular",
              "PostgreSQL",
            ].map((tech, i) => (
              <span key={`dup-${i}`} className="shrink-0">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        id="about"
        className="flex min-h-[calc(100vh-200px)] items-center py-14 lg:py-16 relative"
      >
        <div className="w-full pb-[12vh]">
          <div className="relative max-w-[920px]">
            <FadeIn delay={0.1}>
              <div className="mb-6 flex flex-col gap-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  {mounted ? getGreeting() : "Hello"}— I&apos;m Kuldeep
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/70">
                  AI/ML Engineer
                </p>
              </div>
              <h1
                className="font-black uppercase leading-[1.01] tracking-[-0.04em] text-[#151515] text-[42px] sm:text-[56px] md:text-[68px] relative"
                style={{ WebkitTextStroke: "2px #ffffff", paintOrder: "stroke" }}
              >
                <span className="text-gradient-hover">{mounted ? getYearsOfExperience() : 7}+</span>
                <span> YEARS </span>
                <span className="relative z-10 font-medium normal-case italic tracking-[-0.02em] -ml-[0.25em] font-serif text-black/90">
                  architecting
                </span>
                <br />
                <span>AI SYSTEMS </span>
                <span className="relative z-10 font-medium normal-case italic tracking-[-0.02em] -ml-[0.25em] font-serif text-black/90">
                  for
                </span>
                <br />
                <span>ENTERPRISE </span>
                <span className="relative z-10 font-medium normal-case italic tracking-[-0.02em] -ml-[0.25em] font-serif text-black/90">
                  scale
                </span>
                <br />
                <span className="relative z-10 font-medium normal-case italic tracking-[-0.02em] font-serif text-black/90">
                  at
                </span>
                <span> V2F TECHNOLOGY </span>
              </h1>
              {/* Floating Colorful Stickers */}
              <FadeIn
                delay={0.8}
                className="absolute top-6 md:top-5 left-[50%] hidden sm:block z-20"
              >
                {mounted && (
                  <motion.div
                    aria-hidden="true"
                    className="relative overflow-hidden bg-[#cddc39] text-[#33691e] px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] border border-[#aab92a] shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)] rotate-6 tracking-wide after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_100%_20%,transparent_10px,rgba(255,255,255,0.4)_10px,rgba(255,255,255,0.4)_20px,transparent_20px,transparent_30px,rgba(255,255,255,0.15)_30px,rgba(255,255,255,0.15)_40px,transparent_40px)]"
                    style={{ x: x1, y: y1 }}
                  >
                    <span className="relative z-10">PYTORCH</span>
                  </motion.div>
                )}
              </FadeIn>
              <FadeIn
                delay={0.9}
                className="absolute top-[10%] right-8 md:right-24 hidden sm:block z-20"
              >
                {mounted && (
                  <motion.div
                    aria-hidden="true"
                    className="relative overflow-hidden bg-[#d1c4e9] text-[#311b92] px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] border border-[#b39ddb] shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)] -rotate-3 tracking-wide after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_0%_100%,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px,transparent_20px,transparent_30px,rgba(255,255,255,0.35)_30px,rgba(255,255,255,0.35)_40px,transparent_40px)]"
                    style={{ x: x2, y: y2 }}
                  >
                    <span className="relative z-10">TRANSFORMERS</span>
                  </motion.div>
                )}
              </FadeIn>
              <FadeIn
                delay={1.0}
                className="absolute top-[55%] right-2 md:right-52 hidden sm:block z-20"
              >
                {mounted && (
                  <motion.div
                    aria-hidden="true"
                    className="relative overflow-hidden bg-[#fff59d] text-[#f57f17] px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] border border-[#ffeb3b] shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)] rotate-12 tracking-wide after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_-50%,transparent_15px,rgba(255,255,255,0.3)_15px,rgba(255,255,255,0.3)_25px,transparent_25px,transparent_35px,rgba(255,255,255,0.1)_35px,rgba(255,255,255,0.1)_45px,transparent_45px)]"
                    style={{ x: x3, y: y3 }}
                  >
                    <span className="relative z-10">RAG ARCHITECT</span>
                  </motion.div>
                )}
              </FadeIn>
              <FadeIn
                delay={1.1}
                className="absolute -bottom-[10%] -left-6 md:-left-12 hidden sm:block z-20"
              >
                {mounted && (
                  <motion.div
                    aria-hidden="true"
                    className="relative overflow-hidden bg-[#4dd0e1] text-[#006064] px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] border border-[#26c6da] shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)] -rotate-12 tracking-wide after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_-20%_50%,transparent_15px,rgba(255,255,255,0.1)_15px,rgba(255,255,255,0.1)_25px,transparent_25px,transparent_35px,rgba(255,255,255,0.45)_35px,rgba(255,255,255,0.45)_45px,transparent_45px)]"
                    style={{ x: x4, y: y4 }}
                  >
                    <span className="relative z-10">CNNs</span>
                  </motion.div>
                )}
              </FadeIn>
              <FadeIn
                delay={1.2}
                className="absolute -bottom-6 md:-bottom-10 right-[20%] hidden sm:block z-20"
              >
                {mounted && (
                  <motion.div
                    aria-hidden="true"
                    className="relative overflow-hidden bg-[#ff8a80] text-[#b71c1c] px-4 py-1.5 rounded-full font-bold text-[10px] md:text-[13px] border border-[#ff5252] shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)] rotate-3 tracking-wide after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_120%_80%,transparent_10px,rgba(255,255,255,0.35)_10px,rgba(255,255,255,0.35)_20px,transparent_20px,transparent_30px,rgba(255,255,255,0.15)_30px,rgba(255,255,255,0.15)_40px,transparent_40px)]"
                    style={{ x: x5, y: y5 }}
                  >
                    <span className="relative z-10">FOUNDING ENGINEER</span>
                  </motion.div>
                )}
              </FadeIn>
              {/* <FadeIn delay={1.3} className="absolute top-[30%] -left-8 md:-left-16 hidden sm:block z-20">
                {mounted && (
                  <motion.div
                    className="bg-[#f8bbd0] text-[#880e4f] px-3 py-1 md:px-4 md:py-1.5 rounded-full font-bold text-[10px] md:text-sm border border-black/10 -rotate-6"
                    style={{ x: x6, y: y6 }}
                  >
                    LANGCHAIN
                  </motion.div>
                )}
              </FadeIn> */}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section id="work" className="py-10 lg:py-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
            Work
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
            Case studies
          </h2>
        </div>
        <div className="grid w-full gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))] lg:gap-6 2xl:gap-7">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={0.2 + i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <ExperienceSection />
      <ConnectSection />
    </main>
  );
}
