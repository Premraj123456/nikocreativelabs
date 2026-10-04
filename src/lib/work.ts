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

export const works: Work[] = [];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
