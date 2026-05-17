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
  FILING_STATUS_LABELS,
  type FilingStatus,
} from "@/lib/tax-brackets-2026";

const FILING_OPTIONS: ReadonlyArray<{ value: FilingStatus; label: string }> = [
  { value: "single", label: FILING_STATUS_LABELS.single },
  { value: "mfj", label: FILING_STATUS_LABELS.mfj },
  { value: "mfs", label: FILING_STATUS_LABELS.mfs },
  { value: "hoh", label: FILING_STATUS_LABELS.hoh },
];

export function TaxBracketCalculator({ source = "tool-tax-bracket" }: { source?: string }) {
  const [grossIncome, setGrossIncome] = useState(100_000);
  const [status, setStatus] = useState<FilingStatus>("single");
  const [useStandardDeduction, setUseStandardDeduction] = useState(true);
  const [itemized, setItemized] = useState(0);

  const result = useMemo(() => {
    const deduction = useStandardDeduction
      ? STANDARD_DEDUCTION_2026[status]
      : Math.max(0, itemized);
    const taxable = Math.max(0, grossIncome - deduction);
    return { ...computeFederalTax(taxable, status), taxable, deduction };
  }, [grossIncome, status, useStandardDeduction, itemized]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your situation</h2>
        <div className="mt-5 space-y-4">
          <Select
            id="status"
            label="Filing status"
            value={status}
            options={FILING_OPTIONS}
            onChange={setStatus}
          />
          <NumberInput id="gross" label="Gross taxable income" value={grossIncome} onChange={setGrossIncome} prefix="$" step={1000} min={0} hint="Wages + interest + dividends, before any deduction." />
          <div className="rounded-lg bg-brand-50 p-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={useStandardDeduction}
                onChange={() => setUseStandardDeduction(true)}
              />
              <span>Standard deduction (<strong>{formatCurrency(STANDARD_DEDUCTION_2026[status])}</strong>)</span>
            </label>
            <label className="mt-2 flex items-center gap-2">
              <input
                type="radio"
                checked={!useStandardDeduction}
                onChange={() => setUseStandardDeduction(false)}
              />
              <span>Itemize</span>
            </label>
            {!useStandardDeduction && (
              <div className="mt-3">
                <NumberInput id="itemized" label="Itemized total" value={itemized} onChange={setItemized} prefix="$" step={100} min={0} />
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your tax for 2026</h2>
        <dl className="mt-5 grid grid-cols-3 gap-3">
          <Stat label="Federal tax" value={formatCurrency(result.tax)} tone="brand" />
          <Stat label="Marginal rate" value={formatPercent(result.marginalRate, 0)} />
          <Stat label="Effective rate" value={formatPercent(result.effectiveRate, 1)} />
        </dl>

        <p className="mt-4 text-sm text-ink-muted">
          Taxable income after the {useStandardDeduction ? "standard" : "itemized"} deduction:{" "}
          <strong className="text-ink">{formatCurrency(result.taxable)}</strong>.
        </p>

        <h3 className="mt-6 text-sm font-medium text-brand-700">Per-bracket breakdown</h3>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-brand-200 text-left text-ink-muted">
                <th className="py-2 pr-3">Bracket</th>
                <th className="py-2 pr-3">Rate</th>
                <th className="py-2 text-right">Tax in bracket</th>
              </tr>
            </thead>
            <tbody className="text-ink">
              {result.brackets.map((b, i) => (
                <tr key={i} className={`border-b border-brand-100 ${b.tax > 0 ? "" : "text-ink-subtle"}`}>
                  <td className="py-2 pr-3">
                    {formatCurrency(b.lower)} – {b.upper === Infinity ? "above" : formatCurrency(b.upper)}
                  </td>
                  <td className="py-2 pr-3">{formatPercent(b.rate, 0)}</td>
                  <td className="py-2 text-right">{formatCurrency(b.tax)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Ready to file?</p>
          <p className="mt-1 text-ink-muted">
            These three handle simple-to-complex returns. FreeTaxUSA is free for federal
            regardless of income.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="freetaxusa" source={source} variant="primary">FreeTaxUSA →</AffiliateButton>
            <AffiliateButton partner="turbotax" source={source} variant="secondary">TurboTax →</AffiliateButton>
            <AffiliateButton partner="taxact" source={source} variant="secondary">TaxAct →</AffiliateButton>
          </div>
        </div>

        <p className="mt-4 text-xs text-ink-subtle">
          Estimates only. Does not account for credits (child tax credit, EITC, etc.), AMT,
          NIIT, FICA, or state tax.
        </p>
      </Card>
    </div>
  );
}

function Stat({ label, value, tone = "default" }:
  { label: string; value: string; tone?: "default" | "brand" }) {
  const toneClass = tone === "brand"
    ? "border-brand-600 bg-brand-50 text-brand-700"
    : "border-brand-200 bg-white text-brand-700";
  return (
    <div className={`rounded-lg border p-3 ${toneClass}`}>
      <dt className="text-xs font-medium text-ink-muted">{label}</dt>
      <dd className="mt-1 text-lg font-medium">{value}</dd>
    </div>
  );
}
