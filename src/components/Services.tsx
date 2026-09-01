import { Globe, Film, Clapperboard, TrendingUp } from "lucide-react";
export function Services() {
  const s = [
    { icon: Globe, n: "01", t: "High-End Websites", d: "Editorial luxury that sells. Next.js 14, 0.7s LCP, cinematic macros. Not a template — a gallery that converts.", spec: "Next.js • 0.7s • SEO" },
    { icon: Film, n: "02", t: "AI Films & Shorts", d: "Character-locked, shot-by-shot. 18-cut continuity, 2.39:1. Festival-ready, not prompt roulette.", spec: "50 refs • 30s • 720p" },
    { icon: Clapperboard, n: "03", t: "Ad Commercials", d: "15s / 30s, 16:9 + 9:16 + 1:1. Macro texture, physics, grade. Super Bowl feel, startup budget.", spec: "Master + cut-downs + VO" },
    { icon: TrendingUp, n: "04", t: "Marketing Engines", d: "Lead magnet → emails → ads → analytics. One shoot, infinite distribution. Live day 7.", spec: "Funnel → Scale" },
  ];
  return (
    <section id="services" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">SERVICES — [04] — CUSTOM QUOTE ONLY</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">We do video-driven growth.</h2>
          </div>
          <p className="font-mono text-[11px] leading-5 text-muted max-w-[360px]">Pick one pillar or take the stack. Every asset is re-cut, re-used, re-scaled. Direction, not generation.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.map((it) => (
            <div key={it.n} className="bg-white border border-line p-6 hover:border-ink/20 hover:shadow-sm transition group">
              <div className="flex items-center justify-between">
                <span className="h-8 w-8 border border-line flex items-center justify-center bg-surface group-hover:bg-ink group-hover:text-paper transition"><it.icon size={14} /></span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-faint">{it.n}</span>
              </div>
              <h3 className="font-display text-[16px] text-ink mt-4 leading-tight">{it.t}</h3>
              <p className="font-mono text-[11px] leading-5 text-muted mt-2">{it.d}</p>
              <div className="mt-4 pt-3 border-t border-line font-mono text-[10px] tracking-[0.08em] text-faint">{it.spec}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-ink text-paper px-5 py-4">
          <span className="font-mono text-[11px]">If it needs video at its core — we power it. Brands, films, shorts, ads.</span>
          <a href="#contact" className="bg-paper text-ink font-mono text-[11px] px-4 py-2 hover:bg-white transition font-medium shrink-0">REQUISITION →</a>
        </div>
      </div>
    </section>
  );
}
