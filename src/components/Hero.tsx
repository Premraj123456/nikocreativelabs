import { ArrowRight, ArrowUpRight } from "lucide-react";
export function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1160px] px-6 pt-10 md:pt-16 pb-10">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            NIKO CREATIVE LABS — 3D WEBSITES
          </div>
          <h1 className="font-display text-[38px] sm:text-[52px] md:text-[64px] leading-[0.9] tracking-[-0.04em] text-ink mt-4">
            3D websites<br />
            that stand out<span className="text-brass">.</span>
          </h1>
          <p className="font-mono text-[11px] leading-6 text-muted mt-4 max-w-[560px]">
            One thing: a scroll-driven 3D site built around what you sell. Live 48 hours after you say go.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-[11px] tracking-[0.06em] px-6 py-3 hover:bg-black transition">Start your project <ArrowRight size={14} /></a>
            <a href="/meridian" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-line bg-white font-mono text-[11px] tracking-[0.06em] px-6 py-3 hover:bg-surface transition text-ink">Walk the MERIDIAN site <ArrowUpRight size={14} /></a>
          </div>
          <div className="mt-6 flex gap-6 font-mono text-[10px] tracking-[0.1em] text-faint">
            <span>FROM $5K</span><span>•</span><span>48-HR DELIVERY</span>
          </div>
        </div>

        <div className="mt-8 md:mt-10 border border-line bg-white p-2 md:p-3">
          <a href="/meridian" target="_blank" rel="noopener" className="relative block aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0C] overflow-hidden group/site">
            <img src="/meridian-poster.jpg" alt="MERIDIAN — live 3D website demo" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-paper text-ink font-mono text-[11px] tracking-[0.06em] px-6 py-3 group-hover/site:scale-105 transition shadow-lg">
              OPEN THE LIVE SITE <ArrowUpRight size={14} />
            </span>
            <div className="absolute bottom-0 inset-x-0 flex justify-between items-center px-3 py-2 bg-ink/60 backdrop-blur font-mono text-[10px] tracking-[0.08em] text-white/70">
              <span>MERIDIAN — PRIVATE ESTATES, LIVE 3D SITE</span>
              <span className="hidden md:inline">Scroll flies the camera • Dubai · Miami · Marbella</span>
              <span className="bg-brass text-ink px-2 py-1 text-[10px] font-medium">CLICK TO ENTER</span>
            </div>
          </a>
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-3 font-mono text-[10px] tracking-[0.08em] text-faint">
            <span>Not a video. A working site — go scroll it. Pool → door → bedroom.</span>
            <span className="text-muted">Yours can work like this. Nothing else on the menu.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
