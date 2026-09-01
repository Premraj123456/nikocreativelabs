import type { MetadataRoute } from "next";
import { works } from "@/lib/work";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nikocreativelabs.com";
  return [
    { url: base, lastModified: new Date() },
    ...works.map((w) => ({ url: `${base}/work/${w.slug}`, lastModified: new Date() })),
  ];
}
