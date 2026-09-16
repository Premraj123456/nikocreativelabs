"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export function Header() {
  const [o, setO] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-[1160px] px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/brand/niko-monogram.svg" alt="Niko" width={32} height={32} className="h-8 w-8 border border-line" />
          <span className="font-display text-[14px] tracking-[0.08em] text-ink">NIKO</span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.12em] text-muted border-l border-line pl-3 ml-1">CREATIVE LABS</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.08em] text-muted">
          <a href="#services" className="hover:text-ink transition">Services</a>
          <a href="#work" className="hover:text-ink transition">Work</a>
          <a href="#process" className="hover:text-ink transition">Process</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917036024586" className="font-mono text-[11px] tracking-[0.06em] text-ink border border-line px-4 py-2 hover:bg-surface transition">+91 70360 24586</a>
          <a href="#contact" className="bg-ink text-paper font-mono text-[11px] tracking-[0.06em] px-5 py-2 hover:bg-black transition">START PROJECT</a>
        </div>
        <button onClick={() => setO(!o)} className="md:hidden p-2 border border-line text-ink">{o ? <X size={16} /> : <Menu size={16} />}</button>
      </div>
      {o && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-4 space-y-1 font-mono text-[13px]">
          <a href="#services" onClick={() => setO(false)} className="block py-3 border-b border-line">Services</a>
          <a href="#work" onClick={() => setO(false)} className="block py-3 border-b border-line">Work</a>
          <a href="#process" onClick={() => setO(false)} className="block py-3 border-b border-line">Process</a>
          <a href="#contact" onClick={() => setO(false)} className="block bg-ink text-paper text-center py-3 mt-3">START PROJECT</a>
          <a href="tel:+917036024586" className="block border border-line text-center py-3">+91 70360 24586</a>
        </div>
      )}
    </header>
  );
}
