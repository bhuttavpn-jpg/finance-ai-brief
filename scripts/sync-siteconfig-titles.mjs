// Sync siteConfig.articles[].title with the actual `const title` in
// each article's page.tsx. The page.tsx is the source of truth (it
// drives the H1, SERP title, JSON-LD headline). siteConfig.articles
// titles are used by listing/related components and the sitemap.
//
// Idempotent: only writes if a mismatch is found.
//
// Usage: node scripts/sync-siteconfig-titles.mjs

import { promises as fs } from "node:fs";
import path from "node:path";

const learnDir = path.resolve("src/app/learn");
const configPath = path.resolve("src/lib/site-config.ts");
let config = await fs.readFile(configPath, "utf8");

const dirents = await fs.readdir(learnDir, { withFileTypes: true });
const slugs = dirents.filter((d) => d.isDirectory()).map((d) => d.name);

let updated = 0;
let skipped = 0;
let failed = [];

for (const slug of slugs) {
  const file = path.join(learnDir, slug, "page.tsx");
  let pageSrc;
  try {
    pageSrc = await fs.readFile(file, "utf8");
  } catch {
    continue;
  }

  const titleMatch = pageSrc.match(/^const title = "(.+?)";$/m);
  if (!titleMatch) {
    failed.push({ slug, reason: "no const title in page.tsx" });
    continue;
  }
  const pageTitle = titleMatch[1];

  // Find this slug's entry in site-config and grab its current title.
  const entryRe = new RegExp(
    `(slug:\\s*"${slug.replace(/[-/\\^$*+?.()|[\\]{}]/g, "\\$&")}",\\s*\\n\\s*title:\\s*)"(.+?)"`,
    "m",
  );
  const entryMatch = config.match(entryRe);
  if (!entryMatch) {
    failed.push({ slug, reason: "no site-config entry" });
    continue;
  }
  const configTitle = entryMatch[2];
  if (configTitle === pageTitle) {
    skipped++;
    continue;
  }

  // Use function form of replace — string form interprets $1/$& in
  // the replacement and corrupts titles that contain "$" (e.g. "$1,000").
  config = config.replace(entryRe, (_match, prefix) => `${prefix}${JSON.stringify(pageTitle)}`);
  console.log(`✓ ${slug}\n    was: ${configTitle}\n    now: ${pageTitle}`);
  updated++;
}

if (updated > 0) await fs.writeFile(configPath, config);

console.log(`\n✓ updated: ${updated}`);
console.log(`= in sync: ${skipped}`);
if (failed.length) {
  console.log(`! failed: ${failed.length}`);
  for (const f of failed) console.log(`  - ${f.slug}: ${f.reason}`);
}
