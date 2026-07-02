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

import { PostHogProvider } from "@/providers/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibyksbisht.web.app/"),
  title: {
    default: "Kuldeep Singh Bisht | AI/ML Engineer",
    template: "%s | Kuldeep Singh Bisht",
  },
  description:
    "Portfolio of Kuldeep Singh Bisht, an AI/ML Engineer specializing in PyTorch, MLOps, and scalable AI systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "PyTorch",
    "MLOps",
    "Freelance AI Developer",
    "Next.js",
    "Kuldeep Singh Bisht",
  ],
  authors: [{ name: "Kuldeep Singh Bisht" }],
  creator: "Kuldeep Singh Bisht",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kuldeep Singh Bisht | AI/ML Engineer",
    description:
      "Portfolio of Kuldeep Singh Bisht, an AI/ML Engineer specializing in PyTorch, MLOps, and scalable AI systems.",
    siteName: "Kuldeep Singh Bisht Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Singh Bisht | AI/ML Engineer",
    description:
      "Portfolio of Kuldeep Singh Bisht, an AI/ML Engineer specializing in PyTorch, MLOps, and scalable AI systems.",
    creator: "@ksbisht941",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kuldeep Singh Bisht",
  jobTitle: "AI/ML Engineer",
  url: "https://aibyksbisht.web.app/",
  sameAs: [
    "https://github.com/ksbisht941",
    "https://www.linkedin.com/in/kuldeep-s-bisht/",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "V2F TECHNOLOGY",
  },
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PostHogProvider>
          <CustomCursor />
          <ParticlesBackground />
          <div className="min-h-screen md:grid md:grid-cols-[324px_1fr] text-[var(--foreground)] relative z-10">
            <Sidebar />
            <div className="min-w-0 px-6 pb-5 pt-2 sm:px-10 lg:px-14 lg:pb-9 lg:pt-3 2xl:px-16">
              <div className="mx-auto w-full max-w-[1280px]">{children}</div>
            </div>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
