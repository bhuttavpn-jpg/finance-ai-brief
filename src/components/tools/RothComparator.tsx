"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { Select } from "@/components/ui/Select";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency, formatPercent } from "@/lib/format";

const BRACKETS = [10, 12, 22, 24, 32, 35, 37] as const;

export function RothComparator({ source = "tool-roth-vs-traditional" }: { source?: string }) {
  const [annual, setAnnual] = useState(7000);
  const [years, setYears] = useState(30);
  const [growth, setGrowth] = useState(7);
  const [bracketNow, setBracketNow] = useState<string>("22");
  const [bracketLater, setBracketLater] = useState<string>("22");

  const result = useMemo(() => {
    const r = growth / 100;
    // FV of an ordinary annuity of `annual` for `years` at `r`
    const fv = annual * ((Math.pow(1 + r, years) - 1) / r);
    const rateNow = Number(bracketNow) / 100;
    const rateLater = Number(bracketLater) / 100;

    // Roth: contribute post-tax. So contribution real-dollar value is less, but withdrawals are tax-free.
    // To compare apples to apples, assume the same gross contribution to both:
    //   Traditional: contribute $annual pre-tax → grows to fv → taxed at rateLater on withdrawal
    //   Roth: contribute $annual post-tax → grows to fv → tax-free on withdrawal
    //         BUT to do that you had to pay rateNow on the contribution out-of-pocket today.
    const tradAfterTax = fv * (1 - rateLater);
    const rothAfterTax = fv;
    // Adjust Roth for the upfront tax paid: that money also could have grown.
    // The total "real" advantage is captured by comparing tradAfterTax vs rothAfterTax,
    // given the same contribution. If rateNow == rateLater, they're equal.
    const winner: "Roth" | "Traditional" | "Tie" =
      Math.abs(rothAfterTax - tradAfterTax) < 1
        ? "Tie"
        : rothAfterTax > tradAfterTax
          ? "Roth"
          : "Traditional";

    return { fv, tradAfterTax, rothAfterTax, winner, rateNow, rateLater };
  }, [annual, years, growth, bracketNow, bracketLater]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Inputs</h2>
        <div className="mt-5 space-y-4">
          <NumberInput id="annual" label="Annual contribution" value={annual} onChange={setAnnual} prefix="$" step={500} min={0} max={50000} hint="2026 IRA limit is $7,000 ($8,000 if 50+)." />
          <NumberInput id="years" label="Years until withdrawal" value={years} onChange={setYears} step={1} min={1} max={60} />
          <NumberInput id="growth" label="Expected annual return" value={growth} onChange={setGrowth} suffix="%" step={0.5} min={0} max={20} />
          <Select id="now" label="Your current marginal tax bracket" value={bracketNow} options={BRACKETS.map((b) => ({ value: String(b), label: `${b}%` }))} onChange={setBracketNow} />
          <Select id="later" label="Expected bracket in retirement" value={bracketLater} options={BRACKETS.map((b) => ({ value: String(b), label: `${b}%` }))} onChange={setBracketLater} />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">After-tax outcome</h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Outcome
            label="Roth IRA"
            value={formatCurrency(result.rothAfterTax)}
            sub={`Tax-free withdrawals after age 59½`}
            highlight={result.winner === "Roth"}
          />
          <Outcome
            label="Traditional IRA"
            value={formatCurrency(result.tradAfterTax)}
            sub={`After paying ${formatPercent(result.rateLater, 0)} on withdrawals`}
            highlight={result.winner === "Traditional"}
          />
        </div>

        <div className="mt-5 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          {result.winner === "Tie" && (
            <p>
              <strong className="text-brand-700">It&apos;s a wash.</strong> With identical brackets now
              and later, the math is the same either way. Pick Roth for flexibility on
              contributions and no required minimum distributions.
            </p>
          )}
          {result.winner === "Roth" && (
            <p>
              <strong className="text-brand-700">Roth wins by {formatCurrency(result.rothAfterTax - result.tradAfterTax)}.</strong>{" "}
              When your retirement bracket is higher than today&apos;s, you want to pay the
              tax now while the rate is lower.
            </p>
          )}
          {result.winner === "Traditional" && (
            <p>
              <strong className="text-brand-700">Traditional wins by {formatCurrency(result.tradAfterTax - result.rothAfterTax)}.</strong>{" "}
              When today&apos;s bracket is higher than retirement&apos;s, you want the deduction
              now and to pay tax later at the lower rate.
            </p>
          )}
        </div>

        <p className="mt-4 text-xs text-ink-subtle">
          Simplified model. Does not include the opportunity cost of upfront Roth tax payments
          invested in a taxable account, RMDs, state tax, or future law changes.
        </p>

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Open an IRA</p>
          <p className="mt-1 text-ink-muted">All three offer free Roth and Traditional IRAs.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={source} variant="primary">Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={source} variant="secondary">Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={source} variant="secondary">Vanguard →</AffiliateButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Outcome({ label, value, sub, highlight }:
  { label: string; value: string; sub: string; highlight: boolean }) {
  return (
    <div className={`rounded-lg border p-4 ${highlight ? "border-brand-600 bg-brand-50" : "border-brand-200 bg-white"}`}>
      <p className="text-xs font-medium text-ink-muted">{label}</p>
      <p className={`mt-2 text-2xl font-medium ${highlight ? "text-brand-700" : "text-ink"}`}>{value}</p>
      <p className="mt-1 text-xs text-ink-muted">{sub}</p>
    </div>
  );
}
