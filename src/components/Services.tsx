import { Globe, Film, Clapperboard, TrendingUp } from "lucide-react";
export function Services() {
  const s = [
    { icon: Clapperboard, n: "01", t: "Ad Commercials", d: "15s / 30s ads that make you look like a national brand. Master + cut-downs for Reels, Meta, YouTube.", spec: "15s / 30s • 7-day delivery" },
    { icon: Globe, n: "02", t: "High-End Websites", d: "Premium landing pages that match your ad. Built to convert visitors to calls/bookings. Best with a commercial.", spec: "Landing + SEO • with ad" },
    { icon: TrendingUp, n: "03", t: "Monthly Content Engine", d: "8 fresh creatives a month from one shoot. Stay premium without shooting every week.", spec: "8 / month • retainer" },
    { icon: Film, n: "04", t: "Films & Shorts", d: "Story-first shorts for festivals and brand stories. Limited slots — ask if it's fit.", spec: "By brief • limited" },
  ];
  return (
    <section id="services" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">SERVICES — [04] — FROM RS 49K • 7-DAY DELIVERY</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">One core: ads that sell.</h2>
          </div>
          <p className="font-mono text-[11px] leading-5 text-muted max-w-[360px]">Start with a commercial. Add a page. Stay on retainer. Films by brief only.</p>
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
