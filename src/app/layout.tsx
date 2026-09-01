import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
export const metadata: Metadata = {
  title: {
    default: "Niko Creative Labs — AI Brand Commercials That Actually Convert",
    template: "%s — Niko Creative Labs",
  },
  description: "Your product deserves better than phone footage. AI-produced brand commercials, human-directed. See the difference. Free scorecard.",
  icons: { icon: "/brand/niko-monogram.svg", shortcut: "/brand/niko-monogram.svg", apple: "/brand/niko-monogram.svg" },
  openGraph: {
    title: "Niko Creative Labs — AI Brand Commercials",
    description: "AI-produced brand commercials for DTC founders. Not slop. Real creative direction, AI production.",
    siteName: "Niko Creative Labs",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}><body className="bg-paper text-ink">{children}</body></html>;
}
