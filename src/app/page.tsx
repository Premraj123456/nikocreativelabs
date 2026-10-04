import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Offer } from "@/components/Offer";
import { WorkGrid } from "@/components/WorkGrid";
import { Process } from "@/components/Process";
import { About, Contact } from "@/components/AboutContact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Niko Creative Labs — 3D Websites That Stand Out | Delivered in 48 Hours",
  description:
    "Scroll-driven 3D websites from $5k. One offer, live in 48 hours. Watch the MERIDIAN demo.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Offer />
      <WorkGrid />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
