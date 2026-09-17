import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { Process } from "@/components/Process";
import { About, Contact } from "@/components/AboutContact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Niko Creative Labs — Ads That Make You Look National | 15s/30s Commercials",
  description:
    "Premium 15s/30s commercials, high-end websites and monthly content engines. 7-day delivery from Rs 49k. For salons, D2C, builders, clinics.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WorkGrid />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
