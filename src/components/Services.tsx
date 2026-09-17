import { Globe, Film, Clapperboard, TrendingUp } from "lucide-react";
export function Services() {
  const s = [
    { icon: Clapperboard, n: "01", t: "Commercials", d: "15s and 30s films for Reels, YouTube and Meta. Made to raise trust — and prices.", spec: "15s / 30s" },
    { icon: Globe, n: "02", t: "Websites", d: "A page that matches your film — only with a commercial.", spec: "With film only" },
    { icon: TrendingUp, n: "03", t: "6-8 / month Content", d: "6-8 new ad creatives a month. Same brand, always fresh.", spec: "6-8 / month" },
    { icon: Film, n: "04", t: "Short Films", d: "Festival and brand stories. A few a year.", spec: "By brief" },
  ];
  return (
    <section id="services" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">WHAT WE DO</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">Ad creatives — one studio.</h2>
          </div>
          <p className="font-mono text-[11px] leading-5 text-muted max-w-[360px]">Single films, or fresh creatives every month.</p>
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
          <span className="font-mono text-[11px]">Need creatives that sell?</span>
          <a href="#contact" className="bg-paper text-ink font-mono text-[11px] px-4 py-2 hover:bg-white transition font-medium shrink-0">Enquire →</a>
        </div>
      </div>
    </section>
  );
}
