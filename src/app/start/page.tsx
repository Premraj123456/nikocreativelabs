import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pick Your Business — Free Ad Hooks — Niko Creative Labs",
  description: "Free ad-hook packs for Hyderabad businesses. Pick your niche, get hooks tonight, post tomorrow.",
};

const NICHES = [
  {
    href: "/salon",
    live: true,
    title: "Salons",
    desc: "7 hooks that filled 11 chairs last weekend. Telugu + Hindi + English. Free PDF.",
  },
  {
    href: "#",
    live: false,
    title: "Clinics",
    desc: "Patient-trust hooks + before/after scripts. Coming next.",
  },
  {
    href: "#",
    live: false,
    title: "Jewellery",
    desc: "Festival-drop angles that sell without discounting. Coming next.",
  },
  {
    href: "#",
    live: false,
    title: "Builders",
    desc: "Site-visit hooks + walkthrough template. Coming next.",
  },
];

export default function StartHub() {
  return (
    <main className="min-h-screen bg-[#FCFCF9] text-[#1A1A1A] font-sans">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] font-bold mb-4">
          What business do you run?
        </h1>
        <p className="text-lg leading-relaxed mb-10">
          Pick yours. Get free hooks tonight, post tomorrow morning. Telugu + Hindi + English, as Hyderabad speaks.
        </p>

        <div className="space-y-4">
          {NICHES.map((n) => (
            <a
              key={n.title}
              href={n.href}
              className={`block border-2 p-6 transition-colors ${
                n.live
                  ? "border-[#1A1A1A] hover:bg-[#eee]"
                  : "border-[#ddd] opacity-60 pointer-events-none"
              }`}
            >
              <p className="font-bold text-lg mb-1">
                {n.title}{" "}
                <span className="text-sm font-normal text-[#666]">
                  {n.live ? "— live, free PDF →" : "— coming soon"}
                </span>
              </p>
              <p className="text-sm text-[#555]">{n.desc}</p>
            </a>
          ))}
        </div>

        <p className="text-xs text-[#999] mt-16">
          Niko Creative Labs — Hyderabad. Questions? <a href="https://wa.me/917036024586" className="underline">WhatsApp +91 70360 24586</a>.
        </p>
      </div>
    </main>
  );
}
