"use client";

import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollButton } from "@/components/ScrollButton";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: timelineScrollY } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  const dot1Bg = useTransform(timelineScrollY, [0, 0.05], ["rgba(0,0,0,0.2)", "#171717"]);
  const dot2Bg = useTransform(timelineScrollY, [0.25, 0.3], ["rgba(0,0,0,0.2)", "#171717"]);
  const dot3Bg = useTransform(timelineScrollY, [0.6, 0.65], ["rgba(0,0,0,0.2)", "#171717"]);
  const dot4Bg = useTransform(timelineScrollY, [0.85, 0.9], ["rgba(0,0,0,0.2)", "#171717"]);

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

  const x6 = useTransform(smoothMouseX, [0, 1500], [-25, 25]);
  const y6 = useTransform(smoothMouseY, [0, 900], [-20, 20]);

  useEffect(() => {
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
      <div className="sr-only">Core technologies: PyTorch, Python, AWS, Docker, MLOps, RAG, Next.js, Angular, PostgreSQL.</div>
      <div
        aria-hidden="true"
        className="marquee-viewport -mx-6 overflow-hidden py-1 sm:-mx-10 lg:-mx-14 2xl:-mx-16 mb-20"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, #0000 0, #000 5rem calc(100% - 5rem), #0000 100%)',
          maskImage: 'linear-gradient(90deg, #0000 0, #000 5rem calc(100% - 5rem), #0000 100%)'
        }}
      >
        <div className="marquee-track flex min-w-max text-lg font-semibold tracking-[-0.045em] text-black/20 sm:text-2xl">
          <div className="flex shrink-0 gap-7 pr-7">
            {["PyTorch", "Python", "AWS", "Docker", "MLOps", "RAG", "Next.js", "Angular", "PostgreSQL", "PyTorch", "Python", "AWS", "Docker", "MLOps", "RAG", "Next.js", "Angular", "PostgreSQL"].map((tech, i) => (
              <span key={i} className="shrink-0">{tech}</span>
            ))}
          </div>
          <div className="flex shrink-0 gap-7 pr-7" aria-hidden="true">
            {["PyTorch", "Python", "AWS", "Docker", "MLOps", "RAG", "Next.js", "Angular", "PostgreSQL", "PyTorch", "Python", "AWS", "Docker", "MLOps", "RAG", "Next.js", "Angular", "PostgreSQL"].map((tech, i) => (
              <span key={`dup-${i}`} className="shrink-0">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section id="about" className="flex min-h-[calc(100vh-200px)] items-center py-14 lg:py-16 relative">
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
                <span>7+ YEARS </span>
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
              <FadeIn delay={0.8} className="absolute top-6 md:top-5 left-[50%] hidden sm:block z-20">
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
              <FadeIn delay={0.9} className="absolute top-[10%] right-8 md:right-24 hidden sm:block z-20">
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
              <FadeIn delay={1.0} className="absolute top-[55%] right-2 md:right-52 hidden sm:block z-20">
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
              <FadeIn delay={1.1} className="absolute -bottom-[10%] -left-6 md:-left-12 hidden sm:block z-20">
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
              <FadeIn delay={1.2} className="absolute -bottom-6 md:-bottom-10 right-[20%] hidden sm:block z-20">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">Work</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Case studies</h2>
        </div>
        <div className="grid w-full gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))] lg:gap-6 2xl:gap-7">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={0.2 + i * 0.1}>
              <ProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-24 border-t border-[var(--sidebar-border)] mt-12">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">Experience</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Where I&apos;ve engineered</h2>
        </div>

        <div className="flex flex-col gap-8 max-w-[1030px]">
          <FadeIn delay={0.1}>
            <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[var(--sidebar-bg)] p-8 md:p-12">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">V2F Technology (Visa2Fly)</h3>
                <p className="text-lg font-semibold text-[#171717] mb-4">
                  AI/ML Engineer & Full-Stack Developer <span className="text-[var(--muted)] font-normal text-base md:text-lg">· Dec 2019 – Present · New Delhi</span>
                </p>
                <p className="text-[var(--muted)] leading-relaxed max-w-3xl">
                  A travel-tech startup simplifying visa and travel document processing. Joined as a founding technical hire; grew from building the first UI screens to leading mobile development and architecting AI-driven document/photo verification systems used in production.
                </p>
              </div>

              <div ref={timelineRef} className="space-y-12 ml-3 md:ml-4 pl-8 md:pl-10 relative">

                {/* Background Line */}
                <div className="absolute left-0 top-3 bottom-1 w-[2px] bg-black/5 -translate-x-1/2"></div>

                {/* Animated Highlight Line */}
                <motion.div
                  className="absolute left-0 top-3 bottom-1 w-[2px] bg-[#171717] -translate-x-1/2 origin-top"
                  style={{ scaleY: timelineScrollY }}
                />

                {/* React Native Developer */}
                <div className="relative">
                  <motion.div
                    className="absolute -left-[40px] md:-left-[48px] top-1.5 h-4 w-4 rounded-full border-4 border-[var(--sidebar-bg)] z-10"
                    style={{ backgroundColor: dot1Bg }}
                  />
                  <h4 className="text-xl font-bold tracking-tight text-[#171717]">React Native Developer <span className="text-base font-medium text-[var(--muted)] italic">— Full-time, On-site</span></h4>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-black/40 mb-4 mt-1.5">May 2025 – Present</p>
                  <p className="text-[15px] text-[#171717] mb-3 leading-relaxed">Leading development of Visa2Fly&apos;s mobile application, bridging product goals with technical execution to deliver the travel and visa experience.</p>
                  <ul className="list-disc list-outside ml-4 text-[15px] text-[var(--muted)] space-y-2 leading-relaxed">
                    <li>End-to-end ownership of key mobile features: real-time visa tracking, onboarding flow, payment integrations.</li>
                    <li>Collaborate with product and design to prioritize features based on user analytics and customer feedback.</li>
                    <li>Optimize app speed, reliability, and retention through iterative testing and feedback loops.</li>
                    <li>Act as the bridge between engineering, design, and product to keep business goals and user needs aligned.</li>
                  </ul>
                </div>

                {/* Senior Frontend Developer */}
                <div className="relative">
                  <motion.div
                    className="absolute -left-[40px] md:-left-[48px] top-1.5 h-4 w-4 rounded-full border-4 border-[var(--sidebar-bg)] z-10"
                    style={{ backgroundColor: dot2Bg }}
                  />
                  <h4 className="text-xl font-bold tracking-tight text-[#171717]">Senior Frontend Developer <span className="text-base font-medium text-[var(--muted)] italic">— Full-time, On-site</span></h4>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-black/40 mb-4 mt-1.5">Jan 2022 – Present</p>
                  <p className="text-[15px] text-[#171717] mb-3 leading-relaxed">Owned the frontend roadmap for Visa2Fly&apos;s B2C website and internal platforms, turning technical constraints into user-focused product decisions.</p>
                  <ul className="list-disc list-outside ml-4 text-[15px] text-[var(--muted)] space-y-2 leading-relaxed">
                    <li>Partnered with founders and product stakeholders on roadmap features that improved acquisition and retention.</li>
                    <li>Led UX/UI revamps based on analytics and user behavior, improving task completion and reducing bounce rate.</li>
                    <li>Designed internal dashboards for booking management, vendor tracking, and automated invoicing.</li>
                    <li>Mentored junior engineers and ran cross-team syncs to keep delivery velocity and priorities aligned.</li>
                    <li><strong className="text-[#171717] font-semibold">Impact:</strong> increased platform scalability by 50%, cut manual operational tasks by 40%.</li>
                  </ul>
                </div>

                {/* Frontend Developer */}
                <div className="relative">
                  <motion.div
                    className="absolute -left-[40px] md:-left-[48px] top-1.5 h-4 w-4 rounded-full border-4 border-[var(--sidebar-bg)] z-10"
                    style={{ backgroundColor: dot3Bg }}
                  />
                  <h4 className="text-xl font-bold tracking-tight text-[#171717]">Frontend Developer <span className="text-base font-medium text-[var(--muted)] italic">— Full-time, On-site</span></h4>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-black/40 mb-4 mt-1.5">Dec 2019 – Apr 2022</p>
                  <p className="text-[15px] text-[#171717] mb-3 leading-relaxed">Worked with product and design to evolve Visa2Fly&apos;s core platform from MVP to a scalable consumer product.</p>
                  <ul className="list-disc list-outside ml-4 text-[15px] text-[var(--muted)] space-y-2 leading-relaxed">
                    <li>Delivered user-facing modules for document uploads, visa status tracking, and partner integrations.</li>
                    <li>Used customer support and analytics feedback to improve usability and feature adoption.</li>
                    <li>Worked with backend and marketing teams to ship features supporting new product launches.</li>
                    <li><strong className="text-[#171717] font-semibold">Impact:</strong> helped take Visa2Fly from early prototype to a production B2C platform with thousands of active users.</li>
                  </ul>
                </div>

                {/* Web Developer Intern */}
                <div className="relative">
                  <motion.div
                    className="absolute -left-[40px] md:-left-[48px] top-1.5 h-4 w-4 rounded-full border-4 border-[var(--sidebar-bg)] z-10"
                    style={{ backgroundColor: dot4Bg }}
                  />
                  <h4 className="text-xl font-bold tracking-tight text-[#171717]">Web Developer <span className="text-base font-medium text-[var(--muted)] italic">— Internship, Hybrid</span></h4>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-black/40 mb-4 mt-1.5">Jul 2019 – Dec 2019</p>
                  <p className="text-[15px] text-[#171717] mb-3 leading-relaxed">Contributed to the company&apos;s first product build, working directly with the founding team.</p>
                  <ul className="list-disc list-outside ml-4 text-[15px] text-[var(--muted)] space-y-2 leading-relaxed">
                    <li>Supported MVP development; learned how business goals, design, and engineering align at a startup.</li>
                    <li>Built initial layouts and user flows from early customer pain points.</li>
                    <li><strong className="text-[#171717] font-semibold">Impact:</strong> built core UI components still in production; contributed to the company&apos;s first public launch.</li>
                  </ul>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* <FadeIn delay={0.2}>
            <div className="group relative flex flex-col md:flex-row md:items-center justify-between overflow-hidden rounded-[2rem] bg-[var(--sidebar-bg)] p-8 md:p-10 gap-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-[#171717]">NextLeap</h3>
                <p className="text-lg font-medium text-[var(--muted)] mb-2">Product Management Fellow <span className="italic">— Top Fellow</span></p>
                <p className="text-[15px] text-[var(--muted)] leading-relaxed max-w-3xl">Selected as Top Fellow in a Product Management fellowship focused on translating business requirements, market analysis, and product metrics into technical delivery — the foundation for how I now scope and prioritize ML initiatives like a product, not just a research exercise.</p>
              </div>
              <div className="md:ml-auto shrink-0">
                <span className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-black/60 shadow-sm">
                  2021 - 2022
                </span>
              </div>
            </div>
          </FadeIn> */}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="pt-24 pb-12 lg:pt-32 lg:pb-16 mt-12 border-t border-[var(--sidebar-border)]">
        <FadeIn delay={0.1}>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#888] mb-8">Contact</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.075em] sm:text-7xl mb-10">
            Let&apos;s connect if you want to dive deeper.
          </h2>
          <div className="flex flex-wrap gap-4 mb-32">
            <a href="mailto:ksbisht941@gmail.com" className="inline-flex items-center justify-center rounded-full bg-[#111] text-white px-8 py-3 text-[14px] font-semibold transition-transform hover:scale-105">
              Say Hi
            </a>
            <a href="https://www.linkedin.com/in/kuldeep-s-bisht/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white border border-black/10 text-[#111] px-8 py-3 text-[14px] font-semibold transition-all hover:bg-[#fafafa] hover:border-black/20 hover:scale-105">
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-[#888] font-medium">
            <p>© {new Date().getFullYear()} Kuldeep Singh Bisht</p>
            <p>AI / ML Engineer · Data Scientist · RAG Architect</p>
          </div>
        </FadeIn>
      </section>

      {/* Scroll Button */}
      <ScrollButton />
    </main>
  );
}
