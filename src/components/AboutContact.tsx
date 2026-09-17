"use client";
import { useState } from "react";
export function About() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1160px] px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-line p-6 md:p-7">
            <div className="font-mono text-[11px] tracking-[0.12em] text-faint">ABOUT — NIKO LABS</div>
            <h2 className="font-display text-[26px] leading-none tracking-[-0.02em] text-ink mt-2">Ads that make you<br />look national.</h2>
            <p className="font-mono text-[11px] leading-6 text-muted mt-3">Niko is a commercial studio. We make 15s/30s ads, premium pages and monthly content that raise prices and bookings. <span className="text-ink">For salons, D2C, builders, clinics.</span></p>
            <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-center">
              <div className="border border-line bg-surface p-3"><div className="font-display text-[13px] text-ink">FROM 49K</div><div className="text-[10px] tracking-[0.08em] text-faint">Starting</div></div>
              <div className="border border-line bg-surface p-3"><div className="font-display text-[13px] text-ink">7 DAYS</div><div className="text-[10px] tracking-[0.08em] text-faint">Delivery</div></div>
              <div className="bg-ink text-paper p-3"><div className="font-display text-[13px]">4 SLOTS</div><div className="text-[10px] tracking-[0.08em] text-white/60">Per month</div></div>
            </div>
          </div>
          <div className="bg-ink text-paper p-6 md:p-7 border border-ink">
            <div className="font-mono text-[10px] tracking-[0.12em] text-white/50">WHY US</div>
            <div className="mt-4 space-y-3 font-mono text-[11px] leading-5">
              <div><span className="text-paper">DIRECTING &gt; PROMPTING.</span> <span className="text-white/60">We block like a set, not a slot machine.</span></div>
              <div><span className="text-paper">PHYSICS &gt; PRETTY.</span> <span className="text-white/60">Weight, reflection, skin — what AI fakes, we obsess over.</span></div>
              <div><span className="text-paper">ENGINE &gt; ASSET.</span> <span className="text-white/60">A film without funnel is art. With one, it&apos;s growth.</span></div>
            </div>
            <div className="mt-6 border border-white/10 bg-white/5 p-3 font-mono text-[10px] leading-4 text-white/60">Auteur + Seedance 2.5 • Direction, not generation • Hyderabad → Global • Lab 001</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  const [s, setS] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [m, setM] = useState("");
  const [ph, setPh] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const p: any = Object.fromEntries(fd.entries());
    p.needs = fd.getAll("needs");
    if (p.website) return;
    setS("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Failed");
      setS("sent");
      setPh(typeof p.phone === "string" ? p.phone : "");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) { setS("error"); setM(err.message || "Failed"); }
  }
  return (
    <section id="contact" className="bg-paper border-t border-line">
      <div className="mx-auto max-w-[1160px] px-6 py-10">
        <div className="bg-white border border-line grid md:grid-cols-12 overflow-hidden">
          <div className="md:col-span-5 p-6 md:p-8 bg-surface border-b md:border-b-0 md:border-r border-line">
            <div className="font-mono text-[11px] tracking-[0.12em] text-faint">REQUISITION — LAB 001</div>
            <h2 className="font-display text-[28px] leading-none tracking-[-0.02em] text-ink mt-3">Let&apos;s power<br />your brand.</h2>
            <p className="font-mono text-[11px] leading-5 text-muted mt-3">15s/30s ad, premium page, or monthly content. Reply in 24h. From Rs 49k.</p>
            <div className="mt-6 space-y-2">
              <a href="tel:+917036024586" className="flex justify-between items-center bg-ink text-paper px-4 py-3 font-mono text-[11px] hover:bg-black transition"><span>CALL — LAB LINE</span><span className="font-medium">+91 70360 24586</span></a>
              <a href="mailto:hello@nikocreativelabs.com" className="flex justify-between items-center border border-line bg-white px-4 py-3 font-mono text-[11px] hover:bg-surface transition"><span className="text-muted">EMAIL</span><span className="text-ink font-medium">hello@nikocreativelabs.com</span></a>
            </div>
            <div className="mt-4 bg-white border border-line p-3 font-mono text-[10px] leading-5 text-muted">We power brands & films that need video at core. If your story lives on screen — product, service, short, ad — we&apos;re your lab.</div>
          </div>
          <form onSubmit={onSubmit} className="md:col-span-7 p-6 md:p-8 bg-white">
            <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid md:grid-cols-2 gap-3">
              <label className="font-mono text-[10px] tracking-[0.08em] text-faint">NAME *<input name="name" required placeholder="FULL NAME" className="mt-1 w-full border border-line bg-paper px-3 py-3 font-mono text-[11px] text-ink placeholder:text-faint focus:outline-none focus:border-ink" /></label>
              <label className="font-mono text-[10px] tracking-[0.08em] text-faint">BRAND / FILM<input name="brand" placeholder="PROJECT NAME" className="mt-1 w-full border border-line bg-paper px-3 py-3 font-mono text-[11px] text-ink placeholder:text-faint focus:outline-none focus:border-ink" /></label>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <label className="font-mono text-[10px] tracking-[0.08em] text-faint">EMAIL *<input name="email" type="email" required placeholder="YOU@BRAND.COM" className="mt-1 w-full border border-line bg-paper px-3 py-3 font-mono text-[11px] text-ink placeholder:text-faint focus:outline-none focus:border-ink" /></label>
              <label className="font-mono text-[10px] tracking-[0.08em] text-faint">PHONE<input name="phone" placeholder="+91 ..." className="mt-1 w-full border border-line bg-paper px-3 py-3 font-mono text-[11px] text-ink placeholder:text-faint focus:outline-none focus:border-ink" /></label>
            </div>
            <div className="mt-4">
              <div className="font-mono text-[10px] tracking-[0.08em] text-faint">I NEED</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["High-End Website", "AI Film / Short", "Ad Commercial", "Full Engine"].map((n) => (
                  <label key={n} className="cursor-pointer"><input type="checkbox" name="needs" value={n} className="peer sr-only" /><span className="block border border-line bg-surface px-3 py-2.5 text-center font-mono text-[11px] text-ink peer-checked:bg-ink peer-checked:text-paper peer-checked:border-ink transition">[ ] {n}</span></label>
                ))}
              </div>
            </div>
            <label className="block mt-4 font-mono text-[10px] tracking-[0.08em] text-faint">BRIEF *<textarea name="brief" rows={4} required placeholder="WHAT ARE YOU BUILDING?" className="mt-1 w-full border border-line bg-paper px-3 py-3 font-mono text-[11px] text-ink placeholder:text-faint focus:outline-none focus:border-ink resize-none" /></label>
            <button disabled={s === "sending" || s === "sent"} className="mt-4 w-full bg-ink text-paper font-mono text-[11px] tracking-[0.08em] py-3 hover:bg-black disabled:opacity-60 transition font-medium">{s === "sending" ? "TRANSMITTING..." : s === "sent" ? "SENT — WE'LL CALL IN 24H" : "SEND REQUISITION →"}</button>
            {s === "sent" && <p className="mt-2 text-center font-mono text-[11px] text-green-600">Received — {ph ? <>we&apos;ll call {ph} in 24h.</> : <>we&apos;ll be in touch in 24h.</>}</p>}
            {s === "error" && <p className="mt-2 text-center font-mono text-[11px] text-red-600">{m}</p>}
            <p className="mt-2 text-center font-mono text-[10px] text-faint">Or email directly: hello@nikocreativelabs.com</p>
          </form>
        </div>
      </div>
    </section>
  );
}
