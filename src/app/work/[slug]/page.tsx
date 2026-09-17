import { notFound } from "next/navigation";
import Link from "next/link";
import { works, getWork } from "@/lib/work";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function generateStaticParams() { return works.map((w) => ({ slug: w.slug })); }

export default function WorkPage({ params }: { params: { slug: string } }) {
  const w = getWork(params.slug);
  if (!w) return notFound();
  return (
    <main className="bg-paper">
      <Header />
      <div className="mx-auto max-w-[960px] px-6 py-8">
        <Link href="/#work" className="font-mono text-[11px] tracking-[0.08em] hover:underline">← BACK TO CONTACT SHEET</Link>
        <div className="mt-6 border border-ink bg-paper">
          <div className="bg-ink text-paper px-4 py-3 flex justify-between font-mono text-[11px] tracking-[0.08em]">
            <span>{w.tag.toUpperCase()} — {w.status.toUpperCase()}</span>
            <span>{w.year}</span>
          </div>
          <div className={`h-[240px] border-b border-ink flex items-center justify-center text-center p-8 ${w.slug === "noir-watch" ? "bg-zinc-800 text-paper" : w.slug === "echo-short" ? "bg-indigo-950 text-paper" : "bg-zinc-700 text-paper"}`}>
            <div>
              <div className="font-display text-[32px]">{w.title}</div>
              <div className="font-mono text-[11px] tracking-[0.12em] text-paper/60 mt-2">{w.category} • {w.status.toUpperCase()}</div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {w.stats.map((s) => (
                <span key={s.label} className="border border-ink px-3 py-1 font-mono text-[10px] tracking-[0.08em]"><span className="font-medium">{s.value}</span> — {s.label}</span>
              ))}
            </div>
            <p className="font-mono text-[12px] leading-6 text-ink mt-6">{w.excerpt}</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-brass">CHALLENGE</div>
                <p className="font-mono text-[11px] leading-6 text-muted mt-2">{w.challenge}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-brass">SOLUTION</div>
                <p className="font-mono text-[11px] leading-6 text-muted mt-2">{w.solution}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-ink">
              <div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-faint">DELIVERABLES</div>
                <ul className="mt-2 space-y-1 font-mono text-[11px]">
                  {w.deliverables.map((d) => <li key={d} className="flex gap-2"><span>—</span>{d}</li>)}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-faint">STACK</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => <span key={s} className="border border-ink px-2 py-1 font-mono text-[10px]">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="mt-8 border border-ink bg-ink text-paper p-4 flex flex-wrap justify-between items-center gap-3">
              <div className="font-display text-[16px]">Your project becomes the next sheet.</div>
              <a href="/#contact" className="bg-paper text-ink font-mono text-[11px] px-4 py-2">START REQUISITION →</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
