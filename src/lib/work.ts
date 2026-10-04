export type Work = {
  slug: string;
  title: string;
  category: "3D Website";
  tag: string;
  excerpt: string;
  year: string;
  status: "Live Demo" | "Client — Live";
  color: string;
  poster: string;
  demo: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  stack: string[];
};

export const works: Work[] = [
  {
    slug: "meridian-estates",
    title: "MERIDIAN — Private Estates",
    category: "3D Website",
    tag: "3D website — LIVE DEMO",
    excerpt: "A scroll-driven 3D site for luxury estates. Your scroll flies the camera: pool, door, bedroom. Dubai, Miami, Marbella.",
    year: "2026 — Demo",
    status: "Live Demo",
    color: "from-amber-900/20 via-neutral-900 to-black",
    poster: "/meridian-poster.jpg",
    demo: "/meridian",
    stats: [
      { label: "Delivery", value: "48 hrs" },
      { label: "Price", value: "From $5k" },
      { label: "Format", value: "Scroll 3D" },
    ],
    challenge:
      "Estate developers sell place, but their sites read like brochures. Buyers never feel the villa, so the site does no selling.",
    solution:
      "One continuous 3D walkthrough wired to the scroll. The visitor flies the camera themselves — pool to bedroom — then lands on the viewing form.",
    deliverables: ["Scroll-driven 3D site (this page pattern)", "3D walkthrough wired to scroll", "Viewing-request form", "Domain hookup"],
    stack: ["Three.js", "Scroll camera", "48-hr build", "Resend form"],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
