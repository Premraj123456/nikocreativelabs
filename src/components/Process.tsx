export function Process() {
  const steps = [
    { n: "01", t: "Direct", d: "We agree the story, the shots and the offer — before anything is filmed.", b: ["Story + script", "Shot list + look", "Offer + CTA locked"] },
    { n: "02", t: "Craft", d: "We shoot, cut and grade. You receive a master film plus vertical cuts.", b: ["15s / 30s master", "9:16 + 1:1 cuts", "Grade + VO + captions"] },
    { n: "03", t: "Launch", d: "Your film, page and posting kit — ready to run, seven days later.", b: ["Ad + page live", "Posting kit", "Live day 7"] },
  ];
  return (
    <section id="process" className="bg-white border-y border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-14">
        <div className="max-w-[720px]">
          <div className="font-mono text-[11px] tracking-[0.14em] text-faint">HOW WE WORK</div>
          <h2 className="font-display text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-ink mt-2">Three steps, seven days.</h2>
          <p className="font-mono text-[11px] leading-6 text-muted mt-3">No chaos, no endless revisions. You always know what happens next.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6 relative">
          <div className="hidden md:block absolute top-[28px] left-[14%] right-[14%] h-px bg-line" />
          {steps.map((s) => (
            <div key={s.n} className="relative bg-paper border border-line p-6">
              <div className="h-7 w-7 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-[10px] relative z-10">{s.n}</div>
              <h3 className="font-display text-[16px] text-ink mt-4">{s.t}</h3>
              <p className="font-mono text-[11px] leading-5 text-muted mt-2">{s.d}</p>
              <ul className="mt-4 space-y-1.5">
                {s.b.map((b) => (
                  <li key={b} className="font-mono text-[10px] leading-4 text-faint flex gap-2"><span className="text-brass">—</span>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-ink text-paper px-5 py-4 flex flex-col md:flex-row justify-between gap-3 items-center">
          <span className="font-mono text-[11px] tracking-[0.06em]">If it does not look premium, we have not finished.</span>
          <span className="font-mono text-[10px] tracking-[0.08em] border border-white/15 px-2 py-1">NIKO CREATIVE LABS</span>
        </div>
      </div>
    </section>
  );
}
