"use client";
import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
export function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1160px] px-6 pt-10 md:pt-16 pb-10">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            NIKO CREATIVE LABS — HYDERABAD
          </div>
          <h1 className="font-display text-[38px] sm:text-[52px] md:text-[64px] leading-[0.9] tracking-[-0.04em] text-ink mt-4">
            Look like a<br />
            national brand<span className="text-brass">.</span>
          </h1>
          <p className="font-mono text-[11px] leading-6 text-muted mt-4 max-w-[560px]">
            Ad creatives for salons, skincare, builders and clinics. Delivered in 7 days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-[11px] tracking-[0.06em] px-6 py-3 hover:bg-black transition">Start your project <ArrowRight size={14} /></a>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 border border-line bg-white font-mono text-[11px] tracking-[0.06em] px-6 py-3 hover:bg-surface transition text-ink"><Play size={14} className="fill-ink" /> Watch showreel</button>
          </div>
          <div className="mt-6 flex gap-6 font-mono text-[10px] tracking-[0.1em] text-faint">
            <span>TRUSTED BY GLAM FACTOR</span><span>•</span><span>7-DAY DELIVERY</span>
          </div>
        </div>

        <div className="mt-8 md:mt-10 border border-line bg-white p-2 md:p-3">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0C] overflow-hidden group/video">
            <video autoPlay muted loop playsInline preload="metadata" poster="/brand/niko-monogram.svg" className="absolute inset-0 h-full w-full object-cover object-center">
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <button onClick={() => setOpen(true)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-paper text-ink flex items-center justify-center hover:scale-105 transition shadow-lg">
              <Play size={18} className="fill-ink ml-0.5" />
            </button>
            <div className="absolute bottom-0 inset-x-0 flex justify-between items-center px-3 py-2 bg-ink/60 backdrop-blur font-mono text-[10px] tracking-[0.08em] text-white/70">
              <span>BRAND 001 — NIKO CREATIVE LABS</span>
              <span className="hidden md:inline">12s brand • 15s MAISON NOIR in Work</span>
              <span className="bg-brass text-ink px-2 py-1 text-[10px] font-medium">PLAY BRAND</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-3 font-mono text-[10px] tracking-[0.08em] text-faint">
            <span>Salons • Skincare • Builders • Clinics</span>
            <span className="text-muted">Directed like film. Made for your customers.</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-[860px] bg-black border border-line p-2" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black overflow-hidden">
              <video autoPlay muted loop playsInline controls className="h-full w-full object-contain bg-black">
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-between items-center mt-2 font-mono text-[10px] tracking-[0.08em] text-faint">
              <span>REEL 001 — 12s • MAISON NOIR 30s available in /commercials</span>
              <button onClick={() => setOpen(false)} className="bg-paper text-ink px-3 py-1">CLOSE [X]</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
