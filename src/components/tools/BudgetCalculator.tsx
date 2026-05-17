"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency } from "@/lib/format";

export function BudgetCalculator({ source = "tool-budget-50-30-20" }: { source?: string }) {
  const [takeHome, setTakeHome] = useState(5000);

  const result = useMemo(() => {
    const needs = takeHome * 0.5;
    const wants = takeHome * 0.3;
    const savings = takeHome * 0.2;
    return { needs, wants, savings };
  }, [takeHome]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your numbers</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Enter your monthly take-home pay (after taxes, 401(k), and benefits).
        </p>
        <div className="mt-5 space-y-4">
          <NumberInput
            id="take-home"
            label="Monthly take-home pay"
            value={takeHome}
            onChange={setTakeHome}
            prefix="$"
            step={50}
            min={0}
            hint="If you're paid biweekly, multiply one paycheck by 2.17 to get a monthly average."
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">Your 50/30/20 split</h2>
        <p className="mt-1 text-sm text-ink-muted">
          A starting allocation. Adjust if rent eats more than 50% of needs or if you&apos;re
          paying down high-interest debt.
        </p>
        <dl className="mt-5 grid grid-cols-3 gap-2 text-sm">
          <Bucket label="Needs" pct="50%" value={result.needs} tone="brand" />
          <Bucket label="Wants" pct="30%" value={result.wants} tone="muted" />
          <Bucket label="Savings" pct="20%" value={result.savings} tone="success" />
        </dl>

        <Bar needs={result.needs} wants={result.wants} savings={result.savings} total={takeHome} />

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Where to park the 20% savings</p>
          <p className="mt-1 text-ink-muted">
            Send the savings portion to a high-yield savings account so it actually earns interest.
            Top accounts today pay around 4–5% APY (your bank&apos;s default account pays
            about 0.4%).
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="marcus" source={source} variant="primary">
              Open Marcus →
            </AffiliateButton>
            <AffiliateButton partner="ally" source={source} variant="secondary">
              Open Ally →
            </AffiliateButton>
            <AffiliateButton partner="sofi-money" source={source} variant="secondary">
              Open SoFi Money →
            </AffiliateButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Bucket({ label, pct, value, tone }:
  { label: string; pct: string; value: number; tone: "brand" | "muted" | "success" }) {
  const toneClass = {
    brand: "bg-brand-600 text-white",
    muted: "bg-brand-200 text-brand-700",
    success: "bg-emerald-600 text-white",
  }[tone];
  return (
    <div className="rounded-lg border border-brand-200 p-3">
      <dt className="flex items-center gap-2 text-xs font-medium text-ink-muted">
        <span className={`inline-flex h-5 items-center rounded px-1.5 text-[10px] font-medium ${toneClass}`}>
          {pct}
        </span>
        {label}
      </dt>
      <dd className="mt-2 text-lg font-medium text-brand-700">{formatCurrency(value)}</dd>
    </div>
  );
}

function Bar({ needs, wants, savings, total }:
  { needs: number; wants: number; savings: number; total: number }) {
  if (total <= 0) return null;
  return (
    <div className="mt-5">
      <div className="flex h-3 w-full overflow-hidden rounded-full border border-brand-200">
        <span style={{ width: `${(needs / total) * 100}%` }} className="bg-brand-600" />
        <span style={{ width: `${(wants / total) * 100}%` }} className="bg-brand-200" />
        <span style={{ width: `${(savings / total) * 100}%` }} className="bg-emerald-600" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-ink-muted">
        <span>$0</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
