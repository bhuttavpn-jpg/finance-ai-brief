// One-shot codemod: inject BreadcrumbList JSON-LD into every article page.
//
// For each src/app/learn/<slug>/page.tsx:
//   1. Skip if breadcrumbJsonLd is already referenced.
//   2. Read the `pillar="..."` literal from the ArticleHeader JSX prop.
//   3. Add `breadcrumbJsonLd` to the existing JsonLd import.
//   4. Insert `<JsonLd data={breadcrumbJsonLd({ url, title, pillar: "..." })} />`
//      directly after the `<JsonLd data={articleJsonLd({...})} />` block.
//
// All 92 articles share the same shape (verified manually) so the regex
// approach is safe. Skipped files are logged.
//
// Usage: node scripts/add-breadcrumb-jsonld.mjs

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
    continue; // no page.tsx in this dir
  }

  if (src.includes("breadcrumbJsonLd")) {
    skipped++;
    continue;
  }

  const pillarMatch = src.match(/pillar="([^"]+)"/);
  if (!pillarMatch) {
    failed.push({ slug, reason: "no pillar literal" });
    continue;
  }
  const pillar = pillarMatch[1];

  // 1. Add breadcrumbJsonLd to the JsonLd import.
  const importRe =
    /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/seo\/JsonLd["'];?/;
  const importMatch = src.match(importRe);
  if (!importMatch) {
    failed.push({ slug, reason: "no JsonLd import" });
    continue;
  }
  const newImport = importMatch[0].replace(
    importRe,
    (_, inner) => {
      const names = inner.split(",").map((s) => s.trim()).filter(Boolean);
      if (!names.includes("breadcrumbJsonLd")) names.push("breadcrumbJsonLd");
      return `import { ${names.join(", ")} } from "@/components/seo/JsonLd";`;
    },
  );
  src = src.replace(importRe, newImport);

  // 2. Insert the breadcrumb JsonLd block after the articleJsonLd block.
  // Pattern matches a JsonLd whose data prop wraps articleJsonLd(...).
  const articleBlockRe =
    /(<JsonLd[\s\n]+data=\{articleJsonLd\(\{[\s\S]*?\}\)\}[\s\n]*\/>)/;
  if (!articleBlockRe.test(src)) {
    failed.push({ slug, reason: "no articleJsonLd block" });
    continue;
  }
  const insertion = `\n      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: ${JSON.stringify(
    pillar,
  )} })} />`;
  src = src.replace(articleBlockRe, `$1${insertion}`);

  await fs.writeFile(file, src);
  updated++;
}

console.log(`✓ updated: ${updated}`);
console.log(`= skipped (already done): ${skipped}`);
if (failed.length) {
  console.log(`✗ failed: ${failed.length}`);
  for (const f of failed) console.log(`  - ${f.slug}: ${f.reason}`);
}
