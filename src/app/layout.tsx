import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://nikocreativelabs.com"),
  title: {
    default: "Niko Creative Labs — 3D Websites That Stand Out",
    template: "%s — Niko Creative Labs",
  },
  description: "Scroll-driven 3D websites from $5k, delivered in 48 hours. One offer. Watch the MERIDIAN demo.",
  icons: { icon: "/brand/niko-monogram.svg", shortcut: "/brand/niko-monogram.svg", apple: "/brand/niko-monogram.svg" },
  openGraph: {
    title: "Niko Creative Labs — 3D Websites That Stand Out",
    description: "Scroll-driven 3D websites from $5k. Delivered in 48 hours.",
    siteName: "Niko Creative Labs",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}><body className="bg-paper text-ink">{children}</body></html>;
}
