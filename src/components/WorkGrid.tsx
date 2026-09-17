import Link from "next/link";
import { works } from "@/lib/work";
import { ArrowUpRight } from "lucide-react";
export function WorkGrid() {
  return (
    <section id="work" className="bg-paper">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-faint">SELECTED WORK — [04] — 1 REAL + 3 CONCEPTS</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">Real work first. Concepts next.</h2>
          </div>
          <div className="font-mono text-[11px] text-muted">Your project becomes 05</div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {works.map((w, idx) => {
            const vid = w.slug === "glam-factor-sale" ? "/videos/glam-factor-sale.mp4" : idx === 1 ? "/videos/noir.mp4" : idx === 2 ? "/videos/echo.mp4" : "/videos/velvet.mp4";
            return (
            <Link key={w.slug} href={`/work/${w.slug}`} className="group bg-white border border-line overflow-hidden hover:border-ink/15 hover:shadow-sm transition flex flex-col">
              <div className="relative h-[220px] overflow-hidden bg-black">
                <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover">
                  <source src={vid} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2 left-2 font-mono text-[10px] tracking-[0.08em] text-white/70 bg-black/40 px-1.5 py-0.5">0{idx + 1} — {w.tag.toUpperCase()}</div>
                <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 gap-px bg-white/10 p-px">
                  {w.stats.map((s) => (
                    <div key={s.label} className="bg-ink/80 backdrop-blur px-2 py-2 text-center">
                      <div className="font-mono text-[8px] tracking-[0.08em] text-white/50">{s.label}</div>
                      <div className="font-mono text-[10px] text-white">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-[15px] leading-tight text-ink">{w.title}</h3>
                <p className="font-mono text-[11px] leading-5 text-muted mt-2 line-clamp-3 flex-1">{w.excerpt}</p>
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-line">
                  <span className="font-mono text-[10px] tracking-[0.08em] text-faint">{w.year}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink group-hover:gap-2 transition-all">View <ArrowUpRight size={12} /></span>
                </div>
              </div>
            </Link>
          );
          })}
        </div>

        <div className="mt-6 bg-surface border border-line p-4 flex flex-col md:flex-row justify-between gap-3 items-center">
          <span className="font-mono text-[11px] text-muted">01 real client (Glam Factor) + 03 concepts to show range. Your story replaces ours.</span>
          <a href="#contact" className="bg-ink text-paper font-mono text-[11px] px-4 py-2 hover:bg-black transition">START PROJECT →</a>
        </div>
      </div>
    </section>
  );
}
