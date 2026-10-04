import { ArrowRight } from "lucide-react";
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
          </div>
          <div className="mt-6 flex gap-6 font-mono text-[10px] tracking-[0.1em] text-faint">
            <span>FROM $5K</span><span>•</span><span>48-HR DELIVERY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
