"use client";

import { Project } from "@/lib/data";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      id={project.id}
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} (opens in a new tab)`}
      data-cursor="view"
      className="glow-card group relative block w-full overflow-visible rounded-[1.25rem] cursor-none transition duration-500"
    >
      <div className="absolute -inset-1 rounded-[1.4rem] bg-[var(--card-hover)] opacity-0 blur-lg transition duration-500 group-hover:opacity-10"></div>

      <div className="relative overflow-hidden rounded-[1.25rem] bg-[#111] shadow-[0_6px_28px_rgba(35,29,16,0.035)] transition duration-300 h-full border border-white/10">
        <div className="relative aspect-[4/5] overflow-hidden flex flex-col justify-end">
          {/* Background Thumbnail */}
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>

          {/* Content overlayed at bottom */}
          <div className="relative z-1 p-6 md:p-8 flex flex-col justify-end h-full">
            <div className="mt-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3 drop-shadow-md">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-[11px] font-semibold text-white/90 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
