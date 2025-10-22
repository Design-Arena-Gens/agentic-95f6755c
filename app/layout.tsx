import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Build Your First App | Beginner's Playbook",
  description:
    "A complete, beginner-friendly roadmap for planning, designing, coding, and shipping your first application without the overwhelm.",
  openGraph: {
    title: "Build Your First App | Beginner's Playbook",
    description:
      "Step-by-step guidance, checklists, and resources to go from idea to shipped app as a beginner developer.",
    url: "https://agentic-95f6755c.vercel.app",
    siteName: "Beginner App Playbook",
    type: "website"
  },
  metadataBase: new URL("https://agentic-95f6755c.vercel.app"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed bottom-6 right-6 hidden md:block text-xs text-slate-400">
          <Link
            href="#top"
            className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 font-medium uppercase tracking-wider transition hover:border-primary-500 hover:text-primary-300"
          >
            Back to top
          </Link>
        </div>
      </body>
    </html>
  );
}
