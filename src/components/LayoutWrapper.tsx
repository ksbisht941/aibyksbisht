'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from "@/components/Sidebar";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ReactNode } from 'react';

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Check if we are in the blog module
  const isBlog = pathname?.startsWith('/blog');

  if (isBlog) {
    return (
      <div className="min-h-screen text-[var(--foreground)] relative z-10">
        <div className="min-w-0 px-6 pb-5 pt-2 sm:px-10 lg:px-14 lg:pb-9 lg:pt-3 2xl:px-16">
          <div className="mx-auto w-full max-w-[1280px]">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-cursor-wrapper">
      <CustomCursor />
      <ParticlesBackground />
      <div className="min-h-screen md:grid md:grid-cols-[324px_1fr] text-[var(--foreground)] relative z-10">
        <Sidebar />
        <div className="min-w-0 px-6 pb-5 pt-2 sm:px-10 lg:px-14 lg:pb-9 lg:pt-3 2xl:px-16">
          <div className="mx-auto w-full max-w-[1280px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
