"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { Select } from "@/components/ui/Select";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency, formatPercent } from "@/lib/format";
import {
  computePaycheck,
  PAY_FREQUENCY_LABELS,
  type PayFrequency,
} from "@/lib/paycheck";
import { STATE_CODES, STATE_RULES_2026, type StateCode } from "@/lib/state-tax-2026";
import { FILING_STATUS_LABELS, type FilingStatus } from "@/lib/tax-brackets-2026";

const FILING_OPTIONS: ReadonlyArray<{ value: FilingStatus; label: string }> = [
  { value: "single", label: FILING_STATUS_LABELS.single },
  { value: "mfj", label: FILING_STATUS_LABELS.mfj },
  { value: "mfs", label: FILING_STATUS_LABELS.mfs },
  { value: "hoh", label: FILING_STATUS_LABELS.hoh },
];

const PAY_FREQ_OPTIONS: ReadonlyArray<{ value: PayFrequency; label: string }> = [
  { value: "biweekly", label: PAY_FREQUENCY_LABELS.biweekly },
  { value: "semimonthly", label: PAY_FREQUENCY_LABELS.semimonthly },
  { value: "monthly", label: PAY_FREQUENCY_LABELS.monthly },
  { value: "weekly", label: PAY_FREQUENCY_LABELS.weekly },
  { value: "annual", label: PAY_FREQUENCY_LABELS.annual },
];

const STATE_OPTIONS: ReadonlyArray<{ value: StateCode; label: string }> =
  STATE_CODES.map((c) => ({ value: c, label: STATE_RULES_2026[c].name }));

export function PaycheckCalculator({ source = "tool-paycheck" }: { source?: string }) {
  const [annualGross, setAnnualGross] = useState(85_000);
  const [state, setState] = useState<StateCode>("TX");
  const [filing, setFiling] = useState<FilingStatus>("single");
  const [payFrequency, setPayFrequency] = useState<PayFrequency>("biweekly");
  const [traditional401kPct, setTraditional401kPct] = useState(6);
  const [roth401kPct, setRoth401kPct] = useState(0);
  const [hsaAnnual, setHsaAnnual] = useState(0);
  const [healthPremiumAnnual, setHealthPremiumAnnual] = useState(2_400);

  const result = useMemo(
    () =>
      computePaycheck({
        annualGross, filing, state, payFrequency,
        traditional401kPct, roth401kPct, hsaAnnual, healthPremiumAnnual,
      }),
    [annualGross, filing, state, payFrequency, traditional401kPct, roth401kPct, hsaAnnual, healthPremiumAnnual],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your paycheck inputs</h2>
        <div className="mt-5 space-y-4">
          <NumberInput
            id="gross"
            label="Annual gross salary"
            value={annualGross}
            onChange={setAnnualGross}
            prefix="$"
            step={1000}
            min={0}
            hint="Pre-tax wages, before any deductions."
          />
          <Select id="state" label="State of residence" value={state} options={STATE_OPTIONS} onChange={setState} />
          <Select id="filing" label="Filing status" value={filing} options={FILING_OPTIONS} onChange={setFiling} />
          <Select id="freq" label="Pay frequency" value={payFrequency} options={PAY_FREQ_OPTIONS} onChange={setPayFrequency} />

          <div className="rounded-lg bg-brand-50 p-3 text-sm">
            <p className="font-medium text-brand-700">Pre-tax deductions (annual)</p>
            <div className="mt-3 space-y-3">
              <NumberInput
                id="trad401k"
                label="Traditional 401(k) — % of gross"
                value={traditional401kPct}
                onChange={setTraditional401kPct}
                suffix="%"
                step={1}
                min={0}
                max={100}
                hint="Reduces federal taxable income; still subject to FICA."
              />
              <NumberInput
                id="roth401k"
                label="Roth 401(k) — % of gross"
                value={roth401kPct}
                onChange={setRoth401kPct}
                suffix="%"
                step={1}
                min={0}
                max={100}
                hint="Post-tax; reduces take-home but not taxable wages."
              />
              <NumberInput
                id="hsa"
                label="HSA contribution"
                value={hsaAnnual}
                onChange={setHsaAnnual}
                prefix="$"
                step={100}
                min={0}
                hint="Pre-tax for federal + FICA + most states (not CA, NJ)."
              />
              <NumberInput
                id="health"
                label="Health insurance premium (Section 125)"
                value={healthPremiumAnnual}
                onChange={setHealthPremiumAnnual}
                prefix="$"
                step={100}
                min={0}
                hint="Pre-tax payroll deduction for federal + FICA + most states."
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your 2026 paycheck</h2>

        <dl className="mt-5 grid grid-cols-2 gap-3">
          <Stat label={`Net per period (${result.periods}/yr)`} value={formatCurrency(result.netPayPerPeriod)} tone="brand" />
          <Stat label="Net annual" value={formatCurrency(result.netPayAnnual)} tone="brand" />
          <Stat label="Take-home %" value={formatPercent(result.takeHomePct, 1)} />
          <Stat label="Total tax %" value={formatPercent(result.effectiveTaxRate, 1)} />
        </dl>

        <h3 className="mt-6 text-sm font-medium text-brand-700">Annual breakdown</h3>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-brand-100">
              <Row label="Gross wages" value={formatCurrency(result.annualGross)} bold />
              <Row label="− Traditional 401(k) + HSA + health premium" value={`−${formatCurrency(result.annualGross - result.federalTaxableWages)}`} />
              <Row label="Federal taxable wages (before std deduction)" value={formatCurrency(result.federalTaxableWages)} muted />
              <Row label="Federal income tax" value={`−${formatCurrency(result.federalIncomeTaxAnnual)}`} />
              <Row label="Social Security (6.2%)" value={`−${formatCurrency(result.socialSecurityAnnual)}`} />
              <Row label="Medicare (1.45%)" value={`−${formatCurrency(result.medicareAnnual)}`} />
              {result.additionalMedicareAnnual > 0 && (
                <Row label="Additional Medicare (0.9%)" value={`−${formatCurrency(result.additionalMedicareAnnual)}`} />
              )}
              <Row label={`${STATE_RULES_2026[state].name} income tax`} value={`−${formatCurrency(result.stateIncomeTaxAnnual)}`} />
              <Row label="Roth 401(k) (post-tax)" value={`−${formatCurrency(result.annualGross * (roth401kPct / 100))}`} />
              <Row label="Net annual take-home" value={formatCurrency(result.netPayAnnual)} bold />
            </tbody>
          </table>
        </div>

        {result.notes.length > 0 && (
          <div className="mt-5 rounded-lg border border-brand-200 bg-brand-50 p-3 text-xs text-ink-muted">
            <p className="font-medium text-brand-700">State + local notes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {result.notes.map((n, i) => (<li key={i}>{n}</li>))}
            </ul>
          </div>
        )}

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Want to shelter more?</p>
          <p className="mt-1 text-ink-muted">
            Open a Traditional IRA, Roth IRA, or HSA in minutes and start cutting your taxable wages.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={source} variant="primary">Open Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={source} variant="secondary">Open Schwab →</AffiliateButton>
            <AffiliateButton partner="fidelity-hsa" source={source} variant="secondary">Fidelity HSA →</AffiliateButton>
          </div>
        </div>

        <p className="mt-4 text-xs text-ink-subtle">
          Estimates only. Federal uses 2026 brackets (IR-2025-103); FICA SS wage base
          ${" "}{(183_600).toLocaleString()}{" "}(2026 estimate). State tax uses the most recent
          enacted 2026 rates per state DOR; some states are mid phase-down — verify before
          filing. Does NOT model city/county/school-district local tax. Does NOT model
          credits (CTC, EITC), AMT, NIIT, or supplemental withholding methods.
        </p>
      </Card>
    </div>
  );
}

function Stat({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "brand" }) {
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

function Row({ label, value, bold = false, muted = false }: { label: string; value: string; bold?: boolean; muted?: boolean }) {
  const cls = bold ? "font-semibold text-brand-700" : muted ? "text-ink-subtle" : "text-ink";
  return (
    <tr className={cls}>
      <td className="py-2 pr-3">{label}</td>
      <td className="py-2 text-right tabular-nums">{value}</td>
    </tr>
  );
}
