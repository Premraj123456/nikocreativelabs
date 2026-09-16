import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { Process } from "@/components/Process";
import { About, Contact } from "@/components/AboutContact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Niko Creative Labs — AI-Native Studio for Websites, Films & Commercials",
  description:
    "AI-native studio with human taste. High-end websites, AI films, ad commercials and full growth engines. 7-day sprints, custom quotes.",
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
