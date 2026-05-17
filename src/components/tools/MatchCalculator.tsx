"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency } from "@/lib/format";

export function MatchCalculator({ source = "tool-401k-match" }: { source?: string }) {
  const [salary, setSalary] = useState(80_000);
  const [yourContribPct, setYourContribPct] = useState(6);
  const [matchPct, setMatchPct] = useState(100);            // employer matches 100% of...
  const [matchUpToPct, setMatchUpToPct] = useState(6);      // ...the first 6% of salary

  const result = useMemo(() => {
    const yourContrib = (salary * yourContribPct) / 100;
    const matchedBase = Math.min(yourContribPct, matchUpToPct);
    const employerContrib = (salary * matchedBase * matchPct) / 10_000;
    const totalAnnual = yourContrib + employerContrib;
    const leavingOnTable = Math.max(0, (salary * matchUpToPct) / 100 - (salary * Math.min(yourContribPct, matchUpToPct)) / 100) * (matchPct / 100);
    return { yourContrib, employerContrib, totalAnnual, leavingOnTable };
  }, [salary, yourContribPct, matchPct, matchUpToPct]);

  const fullyMatched = yourContribPct >= matchUpToPct;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your numbers</h2>
        <div className="mt-5 space-y-4">
          <NumberInput id="salary" label="Annual salary" value={salary} onChange={setSalary} prefix="$" step={1000} min={0} />
          <NumberInput id="your-pct" label="Your contribution rate" value={yourContribPct} onChange={setYourContribPct} suffix="%" step={0.5} min={0} max={100} />
          <div className="rounded-lg bg-brand-50 p-4 text-sm">
            <p className="font-medium text-brand-700">Employer match formula</p>
            <p className="mt-1 text-ink-muted">
              A common formula is &quot;100% match on the first 6%.&quot; Tweak below if yours is different.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <NumberInput id="match-pct" label="Match rate" value={matchPct} onChange={setMatchPct} suffix="%" step={5} min={0} max={200} />
              <NumberInput id="match-up-to" label="Up to" value={matchUpToPct} onChange={setMatchUpToPct} suffix="% of salary" step={0.5} min={0} max={100} />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">Result</h2>
        <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Stat label="You contribute" value={formatCurrency(result.yourContrib)} />
          <Stat label="Employer adds" value={formatCurrency(result.employerContrib)} tone="success" />
          <Stat label="Total per year" value={formatCurrency(result.totalAnnual)} tone="brand" />
        </dl>

        {!fullyMatched && (
          <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-medium">You&apos;re leaving free money on the table</p>
            <p className="mt-1">
              Bumping your contribution from {yourContribPct}% to {matchUpToPct}% would add about{" "}
              <strong>{formatCurrency(result.leavingOnTable)}</strong> in employer match each
              year — money you have to be contributing to receive.
            </p>
          </div>
        )}

        {fullyMatched && (
          <div className="mt-5 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
            <p className="font-medium">You&apos;re capturing the full match.</p>
            <p className="mt-1">
              Once the match is maxed, the next dollar usually belongs in a Roth IRA before
              you go back to the 401(k).
            </p>
          </div>
        )}

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Where to open a Roth IRA</p>
          <p className="mt-1 text-ink-muted">
            All three offer free Roth IRAs with no account minimums.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={source} variant="primary">Open Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={source} variant="secondary">Open Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={source} variant="secondary">Open Vanguard →</AffiliateButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Stat({ label, value, tone = "default" }:
  { label: string; value: string; tone?: "default" | "brand" | "success" }) {
  const toneClass = {
    default: "border-brand-200 bg-white text-brand-700",
    brand: "border-brand-600 bg-brand-50 text-brand-700",
    success: "border-emerald-300 bg-emerald-50 text-emerald-900",
  }[tone];
  return (
    <div className={`rounded-lg border p-4 ${toneClass}`}>
      <dt className="text-xs font-medium text-ink-muted">{label}</dt>
      <dd className="mt-2 text-xl font-medium">{value}</dd>
    </div>
  );
}
