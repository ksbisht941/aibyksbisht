import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <FadeIn delay={0.1}>
        <div className="flex flex-col items-center gap-6">
          <h1
            className="font-black uppercase leading-none tracking-[-0.04em] text-[#151515] text-[100px] sm:text-[140px] md:text-[180px] relative"
            style={{ WebkitTextStroke: "2px #151515", color: "transparent" }}
          >
            404
          </h1>
          <p className="max-w-[400px] text-sm md:text-base font-medium text-black/60">
            Looks like you've wandered into the void. This page doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="group flex h-12 mt-4 items-center justify-center gap-2 rounded-full bg-[#171717] px-8 text-[13px] font-semibold text-white transition-all hover:bg-black hover:shadow-lg hover:shadow-black/10"
          >
            Back to Home
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
