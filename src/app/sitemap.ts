import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/editorial-standards`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/author/jahanzeb-nawaz`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
  // Pillar hub pages — high priority; they're the topic-cluster homes.
  for (const p of siteConfig.pillars) {
    entries.push({
      url: `${base}/learn/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }
  for (const t of siteConfig.tools) {
    entries.push({
      url: `${base}/tools/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const a of siteConfig.articles) {
    entries.push({
      url: `${base}/learn/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return entries;
}
