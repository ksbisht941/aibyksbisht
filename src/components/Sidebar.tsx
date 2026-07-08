"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export function Sidebar() {
  return (
    <aside className="m-3 overflow-hidden rounded-[1.75rem] border border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] px-5 py-5 transition-colors duration-500 sm:px-7 md:sticky md:top-3 md:flex md:h-[calc(100vh-1.5rem)] md:flex-col md:justify-between md:px-7 md:py-8">
      <div>
        <nav className="flex items-center justify-between gap-4 text-sm font-medium">
          <Link href="/" className="block">
            <AnimatedLogo />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="mailto:ksbisht941@gmail.com"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium transition hover:-translate-y-0.5 bg-black/5 text-black/60 hover:bg-black/10 hover:text-black"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                aria-hidden="true"
              ></span>
              Available to connect
            </a>
          </div>
        </nav>

        <ul className="hidden md:flex group/list mt-6 flex-wrap gap-3 md:mt-10 md:flex-col md:flex-nowrap md:gap-0 md:space-y-1">
          {[
            { name: "About", href: "#about" },
            { name: "Work", href: "#work" },
            { name: "Experience", href: "#experience" },
            { name: "Connect", href: "#connect" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  // Optionally update URL hash without jumping
                  window.history.pushState(null, "", item.href);
                }}
                className="group flex items-center gap-3 py-[7px] transition-opacity duration-300 opacity-60 group-hover/list:opacity-40 hover:!opacity-100"
              >
                <span className="relative whitespace-nowrap text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 group-hover:translate-x-0.5 text-black">
                  {item.name}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute -bottom-[3px] left-0 h-[7px] w-full origin-left overflow-visible transition-all duration-500 ease-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  >
                    <path
                      d="M2 7C16 3 30 10 46 6 62 2 78 9 98 5"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
                <span className="ml-auto flex shrink-0 items-center leading-none transition-all duration-300 translate-x-1 text-transparent group-hover:translate-x-0 group-hover:text-[#3b82f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-8 md:mt-0">
        <div className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-4">
          <a
            href="https://drive.google.com/file/d/1R7eeENX-EpzAkzRdBnwCu1NpQhrE99ws/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label="About Me (opens in a new tab)"
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition text-black/45 hover:text-black"
          >
            About Me
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/kuldeep-s-bisht/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition text-black/45 hover:text-black"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/ksbisht941"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition text-black/45 hover:text-black"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
        <p className="hidden text-[11px] leading-5 md:block text-black/35">
          © {new Date().getFullYear()}
          <br />
          Kuldeep Singh Bisht
        </p>
      </div>
    </aside>
  );
}
