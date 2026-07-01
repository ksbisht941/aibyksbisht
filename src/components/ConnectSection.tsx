import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function ConnectSection() {
  return (
    <section id="connect" className="py-20 lg:py-32 border-t border-[var(--sidebar-border)] mt-12">
      <FadeIn>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl mb-6 text-black/90">
            Let&apos;s build something{" "}
            <span className="italic font-serif text-black/70">extraordinary</span> together.
          </h2>
          <p className="text-[15px] leading-relaxed text-black/60 mb-10 max-w-lg">
            I&apos;m currently open for new opportunities. Whether you have a question or just want
            to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:kuldeep@example.com"
              className="group flex h-12 items-center gap-2 rounded-full bg-[#171717] px-6 text-[13px] font-semibold text-white transition-all hover:bg-black hover:shadow-lg hover:shadow-black/10"
            >
              Send an email
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://linkedin.com/in/ksbisht941"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-6 text-[13px] font-semibold text-[#171717] transition-all hover:border-black/20 hover:bg-[#fcfcfc] hover:shadow-sm"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 text-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/60" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
