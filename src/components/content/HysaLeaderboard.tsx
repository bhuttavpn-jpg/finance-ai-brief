// Static HYSA leaderboard. Today's rate data is hard-coded; the live
// scraper (Phase 4 Tier 1 in Operations Playbook) will eventually
// replace `RATES` with JSON read from disk. Component contract is
// stable so the swap is invisible to the article.
//
// Order: highest APY first. "Our take" is one-line editorial — keep
// it short; longer commentary belongs in the article body below.

import { siteConfig } from "@/lib/site-config";

type Row = {
  bank: string;
  apy: number; // Annual percentage yield, e.g. 5.0 means 5.00%
  minDeposit: number; // 0 = none
  monthlyFee: number;
  take: string;
  /** Partner key in siteConfig.partners — when present, render CTA */
  partner?: string;
};

// Rates verified 2026-06-09. Update via the live scraper once shipped;
// until then this gets a manual touch on the article-refresh cron's
// weekly digest.
const LAST_UPDATED = "June 9, 2026";

const RATES: Row[] = [
  { bank: "SoFi Checking & Savings", apy: 4.6, minDeposit: 0, monthlyFee: 0, take: "Highest APY with direct deposit + $300 signup bonus.", partner: "sofi-money" },
  { bank: "Marcus by Goldman Sachs", apy: 4.4, minDeposit: 0, monthlyFee: 0, take: "Most reliable rate floor in down cycles.", partner: "marcus" },
  { bank: "Ally Online Savings", apy: 4.35, minDeposit: 0, monthlyFee: 0, take: "Best app + automatic 'buckets' for sinking funds.", partner: "ally" },
  { bank: "Discover Online Savings", apy: 4.3, minDeposit: 0, monthlyFee: 0, take: "No-frills HYSA from a major bank — fast transfers.", partner: "discover-it" },
  { bank: "CIT Bank Platinum Savings", apy: 4.55, minDeposit: 5000, monthlyFee: 0, take: "Beats most rates if you can park $5K+.", partner: "cit" },
  { bank: "American Express HYSA", apy: 4.25, minDeposit: 0, monthlyFee: 0, take: "Solid rate from a brand you already trust." },
  { bank: "Synchrony High Yield Savings", apy: 4.4, minDeposit: 0, monthlyFee: 0, take: "ATM card included — unusual for HYSAs." },
  { bank: "Capital One 360 Performance Savings", apy: 4.2, minDeposit: 0, monthlyFee: 0, take: "Best if you want branch access alongside online rate.", partner: "capital-one" },
  { bank: "Citizens Access Online Savings", apy: 4.35, minDeposit: 0.01, monthlyFee: 0, take: "Strong rate, weaker app." },
  { bank: "Bask Bank Interest Savings", apy: 4.5, minDeposit: 0, monthlyFee: 0, take: "Lesser-known bank with an aggressive rate; FDIC-insured via Texas Capital." },
];

function formatApy(apy: number): string {
  return apy.toFixed(2) + "%";
}

function formatMin(amount: number): string {
  if (amount === 0) return "None";
  if (amount < 1) return "$0.01";
  return "$" + amount.toLocaleString("en-US");
}

export function HysaLeaderboard() {
  const sorted = [...RATES].sort((a, b) => b.apy - a.apy);

  return (
    <section className="not-prose my-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-medium text-brand-700">
          Best HYSA rates today
        </h2>
        <p className="text-xs text-ink-subtle">Updated {LAST_UPDATED}</p>
      </div>
      <p className="mt-2 text-sm text-ink-muted">
        APYs sourced from each bank's published rate page. All accounts are
        FDIC-insured. Sorted by APY, highest first.
      </p>

      <div className="mt-5 overflow-x-auto rounded-xl border border-brand-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-brand-50 text-left text-xs uppercase tracking-wide text-brand-700">
            <tr>
              <th className="px-4 py-3 font-medium">Bank</th>
              <th className="px-4 py-3 font-medium">APY</th>
              <th className="px-4 py-3 font-medium">Min deposit</th>
              <th className="px-4 py-3 font-medium">Monthly fee</th>
              <th className="px-4 py-3 font-medium">Our take</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100 text-ink">
            {sorted.map((row, i) => (
              <tr key={row.bank} className={i === 0 ? "bg-brand-50/40" : ""}>
                <td className="px-4 py-3 font-medium text-brand-700">{row.bank}</td>
                <td className="px-4 py-3 font-medium tabular-nums">{formatApy(row.apy)}</td>
                <td className="px-4 py-3 tabular-nums">{formatMin(row.minDeposit)}</td>
                <td className="px-4 py-3 tabular-nums">{row.monthlyFee === 0 ? "$0" : "$" + row.monthlyFee}</td>
                <td className="px-4 py-3 text-ink-muted">{row.take}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-ink-subtle">
        Methodology: we track 14 online and traditional banks weekly. We exclude
        rates that require relationship balances, brokerage account funding, or
        promotional periods under 6 months. APYs change frequently — verify on
        the bank's site before opening an account. See{" "}
        <a href={`${siteConfig.url}/editorial-standards`} className="underline">our editorial standards</a> for full methodology.
      </p>
    </section>
  );
}
