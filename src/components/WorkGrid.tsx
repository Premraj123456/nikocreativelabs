import { ArrowUpRight } from "lucide-react";
export function WorkGrid() {
  return (
    <section id="work" className="bg-paper">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">SELECTED WORK</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">Work.</h2>
          </div>
          <div className="font-mono text-[11px] text-muted"></div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <a href="#contact" className="group bg-ink text-paper border border-ink overflow-hidden hover:bg-black transition flex flex-col min-h-[340px]">
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="font-mono text-[10px] tracking-[0.08em] text-white/50">01 — OPEN SLOT</div>
              <h3 className="font-display text-[22px] leading-tight mt-4">Your project<br />goes here.</h3>
              <p className="font-mono text-[11px] leading-5 text-white/60 mt-3">One build at a time. Yours takes 48 hours. From $5k.</p>
              <div className="mt-6 flex items-center justify-between pt-3 border-t border-white/10">
                <span className="font-mono text-[10px] tracking-[0.08em] text-white/50">CLAIM THE SLOT</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] group-hover:gap-2 transition-all">Start <ArrowUpRight size={12} /></span>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-6 bg-surface border border-line p-4 flex flex-col md:flex-row justify-between gap-3 items-center">
          <span className="font-mono text-[11px] text-muted">First client site becomes the showpiece.</span>
          <a href="#contact" className="bg-ink text-paper font-mono text-[11px] px-4 py-2 hover:bg-black transition">Start your project →</a>
        </div>
      </div>
    </section>
  );
}
