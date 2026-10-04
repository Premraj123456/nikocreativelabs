import { Box } from "lucide-react";
export function Offer() {
  return (
    <section id="offer" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">THE OFFER</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">One thing. Done well.</h2>
          </div>
          <p className="font-mono text-[11px] leading-5 text-muted max-w-[360px]">No packages. No add-ons. Your 3D website, live 48 hours after you say go.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 bg-ink text-paper p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="h-8 w-8 border border-white/15 flex items-center justify-center"><Box size={14} /></span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-white/50">01 / ONLY</span>
            </div>
            <h3 className="font-display text-[24px] md:text-[30px] text-paper mt-4 leading-tight">3D Website</h3>
            <p className="font-mono text-[11px] leading-5 text-white/60 mt-2">A scroll-driven 3D site built around your brand. Phone + desktop. Copy kept plain. Domain hooked up, live in 48 hours.</p>
            <ul className="mt-5 space-y-1.5">
              {["Scroll-driven 3D experience", "Mobile + desktop", "Launch + domain hookup", "Live in 48 hours"].map((b) => (
                <li key={b} className="font-mono text-[10px] leading-4 text-white/70 flex gap-2"><span className="text-brass">—</span>{b}</li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.06em] text-white/60">FROM <span className="text-paper font-display text-[20px]">$5,000</span></span>
              <a href="#contact" className="bg-paper text-ink font-mono text-[11px] px-5 py-2.5 hover:bg-white transition font-medium">Enquire →</a>
            </div>
          </div>
          <div className="md:col-span-5 bg-white border border-line p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.12em] text-faint">NOT ON THE MENU</div>
              <ul className="mt-4 space-y-1.5">
                {["Ad creatives", "Monthly content", "Logos & branding", "Apps & software"].map((b) => (
                  <li key={b} className="font-mono text-[11px] leading-5 text-faint flex gap-2"><span>×</span>{b}</li>
                ))}
              </ul>
            </div>
            <p className="font-mono text-[11px] leading-5 text-muted mt-6">Need ads or content? Look elsewhere. Need a site buyers remember? That&apos;s us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
