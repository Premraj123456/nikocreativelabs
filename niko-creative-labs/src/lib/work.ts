export type Work = {
  slug: string;
  title: string;
  category: "Ad Commercial" | "AI Film" | "Website + Engine";
  tag: string;
  excerpt: string;
  year: string;
  status: "Concept — Speculative";
  color: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  stack: string[];
};

export const works: Work[] = [
  {
    slug: "noir-watch",
    title: "N°01 — MAISON NOIR",
    category: "Ad Commercial",
    tag: "15s $1M Spot — LIVE",
    excerpt: "Live 15s $1M commercial — MAISON NOIR. 4 HARD CUTs, driving 72bpm cello → brass release at 11s, brand pay-off NOIR letter-by-letter. Not generated. Directed.",
    year: "2026 — Live",
    status: "Concept — Speculative",
    color: "from-amber-900/20 via-neutral-900 to-black",
    stats: [
      { label: "Runtime", value: "15s" },
      { label: "Pay-off", value: "$1M" },
      { label: "Pipeline", value: "Seedance 2.5" },
    ],
    challenge:
      "Luxury watch commercials die on macro texture — brushed steel, sapphire reflection, 1Hz physics. Traditional shoot: $80k+ phantom. Client had $4k and 10 days. Last scene was generic — no CTA, no text animation, no music build/release.",
    solution:
      "We directed one 15s prompt with timed HARD CUTs at 0.0/3.5/7.5/11.0s, optics 12°/29°/47° locked, single 5600K key + 3200K rim. Music: 72bpm cello 18%→45%→78%→88% brass hit at 11.0s with release. Pay-off: NOIR letter-by-letter 11.2-12.0s with glint chime at 11.6s, PRECISION, UNINTERRUPTED. fade 12.2s, MAISON NOIR — LAB 001 at 13.5s. Voice {Precision, uninterrupted.} at 11.8s. Watermark cropped 4% via ffmpeg. Result is $1M — brand, music, type animation, not just watch beauty.",
    deliverables: ["15s master 16:9 (live in /videos/noir.mp4) + 9:16 + 1:1", "1 Seedance 2.5 prompt with 4 HARD CUTs (commercials/n01-precision/prompt-15s-premium.md)", "Brass hit + glint chime + VO", "Cut-downs for Meta/TikTok with pay-off holds"],
    stack: ["Seedance 2.5 720p 15s", "Timed HARD CUTs", "72bpm Build→Release", "Brass Logotype Pay-off", "Auteur"],
  },
  {
    slug: "echo-short",
    title: "ECHO — The Last Transmission",
    category: "AI Film",
    tag: "3 Min Short Film",
    excerpt: "A filmmaker had a festival script and zero crew. We built a world where signal is memory — and made AI disappear.",
    year: "2026 — Concept",
    status: "Concept — Speculative",
    color: "from-indigo-900/20 via-slate-900 to-black",
    stats: [
      { label: "Runtime", value: "3:12" },
      { label: "Shots", value: "18 cuts" },
      { label: "Character Lock", value: "100%" },
    ],
    challenge:
      "Short films need continuity — same face, same coat, same scar across 18 cuts. Most AI films break on shot 3. Filmmaker had storyboards but no way to keep the protagonist intact without reshoots.",
    solution:
      "We ingested 12 reference frames into Auteur, locked performance (female 27, 168cm, tired eyes, restrained), location map (abandoned relay station FG: rust console MG: signal tower BG: snow haze 18%), and first-frame geometry per cut. Camera never cuts on its own — we timed HARD CUTs at 0.0s, 11.4s, 24.1s. The film feels shot, not generated.",
    deliverables: ["3:12 festival cut (2.39:1)", "18 shot prompts + continuity bible", "Poster + behind-the-scenes breakdown", "Dialogue {EN} + subtitles 【 】"],
    stack: ["Seedance 2.5", "Auteur Continuity", "Timed Cuts", "29° / 63° Optics", "Performance Lock"],
  },
  {
    slug: "velvet-skincare",
    title: "VELVET — D2C Skincare",
    category: "Website + Engine",
    tag: "Website + Marketing Engine",
    excerpt: "A D2C skincare brand had product, no presence. We built the site that sells and the engine that scales.",
    year: "2026 — Concept",
    status: "Concept — Speculative",
    color: "from-rose-900/20 via-neutral-900 to-black",
    stats: [
      { label: "Site", value: "0.7s LCP" },
      { label: "Engine", value: "Funnel + Ads" },
      { label: "Stack", value: "Next.js 14" },
    ],
    challenge:
      "Beauty is cinematic or it's invisible. Template Shopify screams dropship. Brand needed editorial luxury (like Aesop) + performance: 0.8s load, SEO, and a marketing engine that runs without a 5-person team.",
    solution:
      "We designed a high-end editorial site (Instrument Serif + glass + grain) on Next.js 14, filmed product macros with Seedance for hero, and wired the engine: lead magnet → email sequence → ad creatives (3x 15s spots from same asset bank) → analytics. One shoot, infinite distribution.",
    deliverables: ["Next.js editorial site (600px content, table-safe emails)", "3x 15s ad variants", "Email sequence (5) + lead magnet", "Analytics dashboard"],
    stack: ["Next.js 14", "Tailwind", "Seedance Product Macros", "Resend", "Marketing Engine"],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
