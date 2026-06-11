"use client";

// 2026 Roth IRA contribution-limit calculator.
//
// Inputs: filing status, MAGI, age (for catch-up). Output: max
// contribution allowed under the 2026 MAGI phase-outs from
// IR-2025-111. Uses the standard pro-rata formula:
//
//   if MAGI <= phaseStart      → full limit
//   if MAGI >= phaseEnd        → $0
//   else                       → limit * (phaseEnd - MAGI) / (phaseEnd - phaseStart)
//                                rounded down to nearest $10 per IRS rules
//
// Catch-up: $1,100 if age >= 50, bringing limit from $7,500 to $8,600.

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { Select } from "@/components/ui/Select";
import { formatCurrency } from "@/lib/format";

type FilingStatus = "single" | "mfj" | "mfs";

const PHASE_OUTS_2026: Record<FilingStatus, { start: number; end: number }> = {
  // Single + HoH
  single: { start: 150_000, end: 165_000 },
  // Married filing jointly + qualifying widow(er)
  mfj: { start: 236_000, end: 246_000 },
  // Married filing separately (living with spouse at any time during year)
  mfs: { start: 0, end: 10_000 },
};

const LIMIT_UNDER_50 = 7_500;
const CATCH_UP = 1_100;

function computeMax(magi: number, status: FilingStatus, age: number): number {
  const limit = age >= 50 ? LIMIT_UNDER_50 + CATCH_UP : LIMIT_UNDER_50;
  const { start, end } = PHASE_OUTS_2026[status];

  if (magi <= start) return limit;
  if (magi >= end) return 0;

  const proRata = (limit * (end - magi)) / (end - start);
  // IRS Pub. 590-A: round down to the nearest $10, with a $200 minimum
  // for anyone in the phase-out range (so long as they have earned income).
  const rounded = Math.floor(proRata / 10) * 10;
  return Math.max(200, rounded);
}

export function RothContributionCalculator({ source = "roth-contribution-calculator" }: { source?: string }) {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [magi, setMagi] = useState<number>(80_000);
  const [age, setAge] = useState<number>(30);

  const result = useMemo(() => {
    const max = computeMax(magi, status, age);
    const limit = age >= 50 ? LIMIT_UNDER_50 + CATCH_UP : LIMIT_UNDER_50;
    const { start, end } = PHASE_OUTS_2026[status];
    const verdict =
      max === limit
        ? "full"
        : max === 0
        ? "blocked"
        : "partial";
    return { max, limit, start, end, verdict };
  }, [magi, status, age]);

  return (
    <Card className="not-prose my-8">
      <h3 className="text-xl font-medium text-brand-700">
        Your 2026 Roth IRA contribution limit
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Direct Roth contributions phase out at higher incomes. Plug yours in to
        see what you can put in directly — and whether you need a backdoor Roth.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <Select
          id="roth-calc-status"
          label="Filing status"
          value={status}
          onChange={(v) => setStatus(v as FilingStatus)}
          options={[
            { value: "single", label: "Single / Head of household" },
            { value: "mfj", label: "Married filing jointly" },
            { value: "mfs", label: "Married filing separately (living with spouse)" },
          ]}
        />
        <NumberInput
          id="roth-calc-magi"
          label="Modified AGI"
          value={magi}
          onChange={setMagi}
          prefix="$"
          step={1000}
          min={0}
        />
        <NumberInput
          id="roth-calc-age"
          label="Your age (end of 2026)"
          value={age}
          onChange={setAge}
          step={1}
          min={0}
          max={120}
        />
      </div>

      <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50/40 p-5">
        <p className="text-sm uppercase tracking-wide text-brand-600">Result</p>
        <p className="mt-2 text-3xl font-medium text-brand-700">
          {formatCurrency(result.max)}
          <span className="ml-2 text-base text-ink-muted">/ year</span>
        </p>

        {result.verdict === "full" && (
          <p className="mt-3 text-sm text-ink">
            You can contribute the full limit of {formatCurrency(result.limit)}{" "}
            directly to a Roth IRA in 2026.
            {age >= 50 && " That includes the $1,100 age-50+ catch-up."}
          </p>
        )}

        {result.verdict === "partial" && (
          <p className="mt-3 text-sm text-ink">
            You're inside the phase-out range ({formatCurrency(result.start)} –{" "}
            {formatCurrency(result.end)}). Your direct contribution is reduced
            pro-rata. The remaining{" "}
            <strong>{formatCurrency(result.limit - result.max)}</strong> can usually be
            contributed via the{" "}
            <a href="/learn/backdoor-roth-ira-guide" className="underline">
              backdoor Roth method
            </a>{" "}
            if you have no pre-tax IRA balance.
          </p>
        )}

        {result.verdict === "blocked" && (
          <p className="mt-3 text-sm text-ink">
            Your MAGI is above the {formatCurrency(result.end)} phase-out
            ceiling for your filing status. Direct Roth contributions aren't
            allowed — but the{" "}
            <a href="/learn/backdoor-roth-ira-guide" className="underline">
              backdoor Roth
            </a>{" "}
            (and{" "}
            <a href="/learn/mega-backdoor-roth-guide" className="underline">
              mega backdoor Roth
            </a>
            ) are still on the table.
          </p>
        )}
      </div>

      <p className="mt-4 text-xs text-ink-subtle">
        Sources: 2026 limits and phase-outs from IR-2025-111 (Nov 13, 2025) and
        IRS Publication 590-A. Hidden assumption: you (or your spouse, if MFJ)
        have at least {formatCurrency(result.max)} of earned income for the year.
        Pro-rata amounts rounded down to the nearest $10 with a $200 minimum.
      </p>

      {/* source prop reserved for future analytics — kept on signature so
          consumers don't need to refactor when we wire it up. */}
      <span hidden data-source={source} />
    </Card>
  );
}
