import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 lg:py-24 border-t border-[var(--sidebar-border)] mt-12"
    >
      <div className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
          Experience
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
          Where I&apos;ve engineered
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 w-full max-w-[1030px]">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.id} delay={0.1 + i * 0.1} className="h-full">
            <div className="group h-full flex flex-col relative overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-black/[0.1] hover:shadow-[0_14px_36px_rgba(35,29,16,0.07)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-black/5 relative">
                    <Image
                      src="/logo/visa2fly-logo.jpeg"
                      alt="Visa2Fly Logo"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171717]">{exp.company}</h3>
                    <p className="text-[13px] font-medium text-black/60">{exp.role}</p>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40">
                    {exp.period}
                  </p>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-black/60 mb-6 flex-grow relative z-10">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#f6f6f6] border border-black/5 px-3 py-1 text-[11px] font-semibold text-black/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
