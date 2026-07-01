import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kuldeep Singh Bisht - AI/ML Engineer",
  description: "Portfolio of Kuldeep Singh Bisht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <ParticlesBackground />
        <div className="min-h-screen md:grid md:grid-cols-[324px_1fr] text-[var(--foreground)] relative z-10">
          <Sidebar />
          <div className="min-w-0 px-6 pb-5 pt-2 sm:px-10 lg:px-14 lg:pb-9 lg:pt-3 2xl:px-16">
            <div className="mx-auto w-full max-w-[1280px]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
