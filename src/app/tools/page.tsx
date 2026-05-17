import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free personal finance tools",
  description: "Five calculators that give you a personalized answer in under a minute.",
};

const TOOL_BLURBS: Record<string, string> = {
  "budget-50-30-20": "Plug in your take-home pay and see your needs / wants / savings split.",
  "401k-match": "See exactly how much free money your employer match is leaving on the table.",
  "tax-bracket": "Estimate your 2026 federal tax with a per-bracket breakdown.",
  "roth-vs-traditional": "Compare after-tax outcomes side by side based on your bracket today vs. retirement.",
  "life-insurance": "Apply the DIME method to size your coverage in 30 seconds.",
};

export default function ToolsIndex() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tools</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Five tools, real answers</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Every tool gives you a number you can act on, plus a clear next step.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.tools.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="card group block no-underline transition hover:border-brand-600"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-brand-600">{t.pillar}</p>
            <p className="mt-2 text-lg font-medium text-brand-700">{t.label}</p>
            <p className="mt-2 text-sm text-ink-muted">{TOOL_BLURBS[t.slug]}</p>
            <p className="mt-4 text-sm font-medium text-brand-700 group-hover:underline">
              Open the tool →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
