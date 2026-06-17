"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency } from "@/lib/format";
import {
  ageBracketLabel,
  ageToBracket,
  breakpointsByBracket,
  medianFor,
  percentileFor,
} from "@/lib/net-worth-percentiles";

export function NetWorthPercentile({ source = "tool-net-worth-percentile" }: { source?: string }) {
  const [age, setAge] = useState(35);
  const [assets, setAssets] = useState(150_000);
  const [debts, setDebts] = useState(50_000);

  const result = useMemo(() => {
    const netWorth = assets - debts;
    const bracket = ageToBracket(age);
    const percentile = percentileFor(age, netWorth);
    const median = medianFor(age);
    const aheadOf = Math.round(percentile);
    return { netWorth, bracket, percentile, median, aheadOf };
  }, [age, assets, debts]);

  const bp = breakpointsByBracket[result.bracket];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your numbers</h2>
        <div className="mt-5 space-y-4">
          <NumberInput id="age" label="Your age" value={age} onChange={setAge} step={1} min={18} max={100} />
          <NumberInput id="assets" label="Total assets" value={assets} onChange={setAssets} prefix="$" step={5000} min={0} />
          <p className="hint">
            Cash + investments + retirement accounts + home equity + car value + everything else you own.
          </p>
          <NumberInput id="debts" label="Total debts" value={debts} onChange={setDebts} prefix="$" step={1000} min={0} />
          <p className="hint">
            Mortgage balance + student loans + credit cards + auto loans + any other debt.
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your percentile</h2>
        <div className="mt-5 rounded-lg border border-brand-600 bg-brand-50 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            Net worth — {ageBracketLabel[result.bracket]} cohort
          </p>
          <p className="mt-2 text-3xl font-medium text-brand-700">
            {formatCurrency(result.netWorth)}
          </p>
          <p className="mt-4 text-sm text-ink-muted">You&apos;re ahead of approximately</p>
          <p className="text-2xl font-medium text-brand-700">
            {result.aheadOf}% of U.S. households your age
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            The median for {ageBracketLabel[result.bracket]} is{" "}
            <strong className="text-brand-700">{formatCurrency(result.median)}</strong>.
            {result.netWorth >= result.median
              ? ` You're ahead of the median by ${formatCurrency(result.netWorth - result.median)}.`
              : ` You're behind the median by ${formatCurrency(result.median - result.netWorth)}.`}
          </p>
        </div>

        <details className="mt-5 rounded-lg bg-brand-50 p-4 text-sm">
          <summary className="cursor-pointer font-medium text-brand-700">
            Cohort breakpoints
          </summary>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="text-left text-ink-muted">
                <th className="py-1">Percentile</th>
                <th className="py-1">Net worth</th>
              </tr>
            </thead>
            <tbody>
              {bp.map(([p, v]) => (
                <tr key={p} className="border-t border-brand-100">
                  <td className="py-1.5">{p}th</td>
                  <td className="py-1.5">{formatCurrency(v)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-ink-muted">
            Source: 2022 Federal Reserve Survey of Consumer Finances. Within-cohort
            breakpoints are interpolated from SCF percentile tables. Updated when
            2025 SCF releases (~Oct 2026).
          </p>
        </details>

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">
            {result.percentile < 50 ? "Building net worth from here" : "Compounding what you have"}
          </p>
          <p className="mt-1 text-ink-muted">
            {result.percentile < 50
              ? "The biggest levers at this stage are a high-yield emergency fund and a 401(k) match. Park cash where it earns; never leave employer match on the table."
              : "Past the median, the move is tax-efficient investing — Roth conversions, tax-loss harvesting, and asset location across taxable vs. tax-advantaged accounts."}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.percentile < 50 ? (
              <>
                <AffiliateButton partner="sofi-money" source={source} variant="primary">Open SoFi HYSA →</AffiliateButton>
                <AffiliateButton partner="fidelity" source={source} variant="secondary">Open Fidelity →</AffiliateButton>
              </>
            ) : (
              <>
                <AffiliateButton partner="fidelity" source={source} variant="primary">Open Fidelity →</AffiliateButton>
                <AffiliateButton partner="schwab" source={source} variant="secondary">Open Schwab →</AffiliateButton>
                <AffiliateButton partner="vanguard" source={source} variant="secondary">Open Vanguard →</AffiliateButton>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
