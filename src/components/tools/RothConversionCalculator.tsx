"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { Select } from "@/components/ui/Select";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency, formatPercent } from "@/lib/format";
import {
  computeFederalTax,
  STANDARD_DEDUCTION_2026,
  type FilingStatus,
} from "@/lib/tax-brackets-2026";

const RETIREMENT_RATES = [10, 12, 22, 24, 32, 35, 37] as const;

const STATUS_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "mfj",    label: "Married filing jointly" },
  { value: "mfs",    label: "Married filing separately" },
  { value: "hoh",    label: "Head of household" },
];

export function RothConversionCalculator({ source = "tool-roth-conversion" }: { source?: string }) {
  const [balance, setBalance]       = useState(250_000);
  const [convert, setConvert]       = useState(50_000);
  const [income, setIncome]         = useState(120_000);
  const [status, setStatus]         = useState<string>("single");
  const [years, setYears]           = useState(20);
  const [growth, setGrowth]         = useState(7);
  const [retireBracket, setRetireBracket] = useState<string>("22");

  const result = useMemo(() => {
    const fs = status as FilingStatus;
    const std = STANDARD_DEDUCTION_2026[fs];
    const taxableBase = Math.max(0, income - std);
    const taxableWithConversion = Math.max(0, income + convert - std);

    const taxBefore = computeFederalTax(taxableBase, fs);
    const taxAfter  = computeFederalTax(taxableWithConversion, fs);

    const conversionTax   = taxAfter.tax - taxBefore.tax;         // $ owed on conversion
    const effectiveRate   = convert > 0 ? conversionTax / convert : 0;
    const marginalOnTop   = taxAfter.marginalRate;                 // top bracket hit
    const retireRate      = Number(retireBracket) / 100;
    const r               = growth / 100;

    // Future value of the converted amount
    const fvFactor = Math.pow(1 + r, years);
    const rothFV   = convert * fvFactor;                           // tax-free
    const tradFV   = convert * fvFactor * (1 - retireRate);       // after retirement tax
    const netBenefit = rothFV - tradFV - conversionTax * fvFactor;
    // netBenefit > 0 means Roth wins (paying tax today is cheaper than paying later)

    // Breakeven years: how many years until Roth recoupment of today's tax
    // Roth advantage at year T: convert×(1+r)^T × retireRate − conversionTax×(1+r)^T = 0 never
    // Simpler: years until (rothFV_T − tradFV_T) > conversionTax
    // i.e., convert×(1+r)^T × retireRate > conversionTax
    // T > log(conversionTax / (convert × retireRate)) / log(1+r)
    let breakeven = 0;
    if (convert > 0 && retireRate > 0 && effectiveRate < retireRate) {
      const ratio = conversionTax / (convert * retireRate);
      if (ratio > 0 && ratio < 1) {
        breakeven = 0; // Already worthwhile immediately
      } else if (ratio >= 1) {
        breakeven = Math.ceil(Math.log(ratio) / Math.log(1 + r));
      }
    }

    const verdict: "convert" | "partial" | "skip" =
      effectiveRate === 0
        ? "convert"
        : effectiveRate < retireRate
          ? "convert"
          : effectiveRate < retireRate + 0.05
            ? "partial"
            : "skip";

    return {
      conversionTax,
      effectiveRate,
      marginalOnTop,
      retireRate,
      rothFV,
      tradFV,
      netBenefit,
      breakeven,
      verdict,
      taxBefore,
      taxAfter,
    };
  }, [balance, convert, income, status, years, growth, retireBracket]);

  const verdictText = {
    convert: "Converting makes sense.",
    partial: "Converting might make sense — run the numbers on a smaller amount.",
    skip: "Skipping the conversion saves money.",
  }[result.verdict];

  const verdictColor = {
    convert: "text-green-700",
    partial: "text-amber-700",
    skip: "text-red-700",
  }[result.verdict];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.3fr]">
      {/* Inputs */}
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your situation</h2>
        <div className="mt-5 space-y-4">
          <NumberInput
            id="balance"
            label="Traditional IRA / 401(k) balance"
            value={balance}
            onChange={setBalance}
            prefix="$"
            step={10_000}
            min={0}
            max={5_000_000}
            hint="Total pre-tax retirement balance."
          />
          <NumberInput
            id="convert"
            label="Amount to convert this year"
            value={convert}
            onChange={setConvert}
            prefix="$"
            step={5_000}
            min={0}
            max={1_000_000}
            hint="The portion you move from Traditional → Roth."
          />
          <NumberInput
            id="income"
            label="Other income this year (before deductions)"
            value={income}
            onChange={setIncome}
            prefix="$"
            step={5_000}
            min={0}
            max={2_000_000}
            hint="W-2 wages, self-employment, etc. Does not include the conversion."
          />
          <Select
            id="status"
            label="Filing status"
            value={status}
            options={STATUS_OPTIONS}
            onChange={setStatus}
          />
          <NumberInput
            id="years"
            label="Years until you start withdrawing"
            value={years}
            onChange={setYears}
            step={1}
            min={1}
            max={50}
          />
          <NumberInput
            id="growth"
            label="Expected annual return"
            value={growth}
            onChange={setGrowth}
            suffix="%"
            step={0.5}
            min={0}
            max={20}
          />
          <Select
            id="retire"
            label="Expected marginal bracket in retirement"
            value={retireBracket}
            options={RETIREMENT_RATES.map((b) => ({ value: String(b), label: `${b}%` }))}
            onChange={setRetireBracket}
          />
        </div>
      </Card>

      {/* Results */}
      <div className="flex flex-col gap-6">
        {/* Verdict card */}
        <Card>
          <p className={`text-sm font-semibold uppercase tracking-wide ${verdictColor}`}>
            {result.verdict === "convert" ? "✓ Convert" : result.verdict === "partial" ? "⚠ Consider" : "✗ Skip"}
          </p>
          <p className="mt-1 text-lg font-medium text-brand-700">{verdictText}</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Stat
              label="Tax on conversion today"
              value={formatCurrency(result.conversionTax)}
              sub={`Effective rate on conversion: ${formatPercent(result.effectiveRate, 1)}`}
            />
            <Stat
              label="Tax owed in retirement (if you wait)"
              value={formatCurrency(result.tradFV > 0 ? (result.rothFV - result.tradFV) : 0)}
              sub={`At ${retireBracket}% on ${formatCurrency(result.rothFV)}`}
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <Stat
              label={`Roth balance in ${years} yrs`}
              value={formatCurrency(result.rothFV)}
              sub="Tax-free at withdrawal"
              highlight
            />
            <Stat
              label={`Traditional after-tax in ${years} yrs`}
              value={formatCurrency(result.tradFV)}
              sub={`After ${retireBracket}% retirement tax`}
            />
          </div>

          <div className={`mt-4 rounded-lg p-4 text-sm ${result.netBenefit >= 0 ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            {result.netBenefit >= 0 ? (
              <p>
                <strong>Converting saves {formatCurrency(result.netBenefit)}</strong> in inflation-adjusted future dollars compared to staying in Traditional and paying {retireBracket}% in retirement.
              </p>
            ) : (
              <p>
                <strong>Staying in Traditional saves {formatCurrency(Math.abs(result.netBenefit))}</strong> — your current effective rate on the conversion ({formatPercent(result.effectiveRate, 1)}) exceeds your expected retirement rate ({retireBracket}%).
              </p>
            )}
          </div>
        </Card>

        {/* Tax bracket impact */}
        <Card>
          <h2 className="text-lg font-medium text-brand-700">Bracket impact</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs text-ink-muted">Marginal bracket without conversion</p>
              <p className="mt-1 text-xl font-medium text-brand-700">{formatPercent(result.taxBefore.marginalRate, 0)}</p>
            </div>
            <div>
              <p className="text-xs text-ink-muted">Marginal bracket with conversion</p>
              <p className={`mt-1 text-xl font-medium ${result.taxAfter.marginalRate > result.taxBefore.marginalRate ? "text-amber-700" : "text-brand-700"}`}>
                {formatPercent(result.taxAfter.marginalRate, 0)}
                {result.taxAfter.marginalRate > result.taxBefore.marginalRate && (
                  <span className="ml-2 text-xs font-normal text-amber-600">bracket jump ↑</span>
                )}
              </p>
            </div>
          </div>
          {result.taxAfter.marginalRate > result.taxBefore.marginalRate && (
            <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
              This conversion crosses a bracket boundary. Consider converting only up to the top of your current {formatPercent(result.taxBefore.marginalRate, 0)} bracket to avoid the higher rate.
            </p>
          )}
          <p className="mt-3 text-xs text-ink-subtle">
            Uses 2026 federal brackets + standard deduction. Does not model state income tax or the effect of RMDs on future taxable income.
          </p>
        </Card>

        {/* CTA */}
        <Card>
          <p className="font-medium text-brand-700">Open a Roth IRA to receive the conversion</p>
          <p className="mt-1 text-sm text-ink-muted">
            All three offer free Roth IRAs with no minimums for conversions.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={source} variant="primary">Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={source} variant="secondary">Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={source} variant="secondary">Vanguard →</AffiliateButton>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, highlight = false }: {
  label: string; value: string; sub?: string; highlight?: boolean;
}) {
  return (
    <div className={`rounded-lg border p-3 ${highlight ? "border-brand-600 bg-brand-50" : "border-brand-100 bg-white"}`}>
      <p className="text-xs text-ink-muted">{label}</p>
      <p className={`mt-1 text-xl font-medium ${highlight ? "text-brand-700" : "text-ink"}`}>{value}</p>
      {sub && <p className="mt-0.5 text-xs text-ink-subtle">{sub}</p>}
    </div>
  );
}
