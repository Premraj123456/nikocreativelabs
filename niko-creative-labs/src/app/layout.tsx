import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
export const metadata: Metadata = {
  title: "Niko Creative Labs — AI-Native Studio. High-End Websites, Films, Commercials.",
  description: "We design high-end websites, direct realistic AI films & commercials, and build marketing engines for brands & filmmakers. Hyderabad → Global. Custom quote only.",
  icons: { icon: "/brand/niko-monogram.svg", shortcut: "/brand/niko-monogram.svg", apple: "/brand/niko-monogram.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}><body className="bg-paper text-ink">{children}</body></html>;
}
