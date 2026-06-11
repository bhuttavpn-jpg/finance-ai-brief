// Idempotent codemod: insert <RelatedByPillar /> into every article page
// just before </article>. Skips files that already reference the
// component. Pillar label is read from the existing `pillar="..."`
// ArticleHeader prop; slug is taken from the directory name.
//
// Usage: node scripts/add-related-by-pillar.mjs

import { promises as fs } from "node:fs";
import path from "node:path";

const learnDir = path.resolve("src/app/learn");
const dirents = await fs.readdir(learnDir, { withFileTypes: true });
const slugs = dirents.filter((d) => d.isDirectory()).map((d) => d.name);

let updated = 0;
let skipped = 0;
let failed = [];

for (const slug of slugs) {
  const file = path.join(learnDir, slug, "page.tsx");
  let src;
  try {
    src = await fs.readFile(file, "utf8");
  } catch {
    continue;
  }

  if (src.includes("RelatedByPillar")) {
    skipped++;
    continue;
  }

  const pillarMatch = src.match(/pillar="([^"]+)"/);
  if (!pillarMatch) {
    failed.push({ slug, reason: "no pillar literal (likely pillar hub)" });
    continue;
  }
  const pillar = pillarMatch[1];

  // 1. Add import after the existing ArticleHeader import (or anywhere
  //    sensible). Look for the FAQ import line as anchor — articles
  //    almost always import FAQ from the same content/ folder.
  if (!src.includes('from "@/components/content/RelatedByPillar"')) {
    const articleHeaderImportRe =
      /(import\s*\{\s*ArticleHeader\s*\}\s*from\s*["']@\/components\/content\/ArticleHeader["'];?)/;
    if (articleHeaderImportRe.test(src)) {
      src = src.replace(
        articleHeaderImportRe,
        `$1\nimport { RelatedByPillar } from "@/components/content/RelatedByPillar";`,
      );
    } else {
      // Fallback: insert after first import line.
      src = src.replace(
        /(^import .+?;)/m,
        `$1\nimport { RelatedByPillar } from "@/components/content/RelatedByPillar";`,
      );
    }
  }

  // 2. Insert component just before </article>. Use the first match.
  const closeRe = /(\s*)<\/article>/;
  if (!closeRe.test(src)) {
    failed.push({ slug, reason: "no </article> tag" });
    continue;
  }
  src = src.replace(
    closeRe,
    (_match, ws) =>
      `${ws}<RelatedByPillar pillar=${JSON.stringify(
        pillar,
      )} currentSlug=${JSON.stringify(slug)} />${ws}</article>`,
  );

  await fs.writeFile(file, src);
  updated++;
}

console.log(`✓ updated: ${updated}`);
console.log(`= skipped (already done): ${skipped}`);
if (failed.length) {
  console.log(`✗ failed: ${failed.length}`);
  for (const f of failed) console.log(`  - ${f.slug}: ${f.reason}`);
}
