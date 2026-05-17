"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { NumberInput } from "@/components/ui/NumberInput";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { formatCurrency } from "@/lib/format";

export function LifeInsuranceCalculator({ source = "tool-life-insurance" }: { source?: string }) {
  const [income, setIncome] = useState(85_000);
  const [yearsToReplace, setYearsToReplace] = useState(10);
  const [debt, setDebt] = useState(20_000);
  const [mortgage, setMortgage] = useState(280_000);
  const [education, setEducation] = useState(75_000);
  const [existing, setExisting] = useState(50_000);

  // DIME method: Debt + Income (replaced for N years) + Mortgage + Education, minus existing coverage.
  const result = useMemo(() => {
    const incomeReplacement = income * yearsToReplace;
    const gross = debt + incomeReplacement + mortgage + education;
    const need = Math.max(0, gross - existing);
    return { incomeReplacement, gross, need };
  }, [income, yearsToReplace, debt, mortgage, education, existing]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
      <Card>
        <h2 className="text-lg font-medium text-brand-700">The DIME method</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Debt + Income (replaced for N years) + Mortgage + Education, minus what you
          already have.
        </p>
        <div className="mt-5 space-y-4">
          <NumberInput id="debt" label="Total non-mortgage debt" value={debt} onChange={setDebt} prefix="$" step={1000} min={0} hint="Credit cards, car loans, student loans, etc." />
          <NumberInput id="income" label="Annual income" value={income} onChange={setIncome} prefix="$" step={1000} min={0} />
          <NumberInput id="years" label="Years of income to replace" value={yearsToReplace} onChange={setYearsToReplace} step={1} min={1} max={40} hint="Common rules of thumb: 10 years if kids are out of the house; 15-20 if young kids." />
          <NumberInput id="mortgage" label="Mortgage balance" value={mortgage} onChange={setMortgage} prefix="$" step={5000} min={0} />
          <NumberInput id="education" label="Future education costs" value={education} onChange={setEducation} prefix="$" step={5000} min={0} hint="Roughly $75K-$150K per child for college." />
          <NumberInput id="existing" label="Existing coverage" value={existing} onChange={setExisting} prefix="$" step={10_000} min={0} hint="Include employer-provided group life insurance." />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-brand-700">How much you need</h2>

        <div className="mt-5 rounded-lg border border-brand-600 bg-brand-50 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Recommended face value</p>
          <p className="mt-2 text-3xl font-medium text-brand-700">{formatCurrency(result.need)}</p>
          <p className="mt-2 text-sm text-ink-muted">
            Of term life insurance, with a level term that matches your years-to-replace.
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <Row label="Income replacement" value={formatCurrency(result.incomeReplacement)} />
          <Row label="Total need before existing" value={formatCurrency(result.gross)} />
          <Row label="Existing coverage" value={formatCurrency(existing)} />
          <Row label="Net gap" value={formatCurrency(result.need)} bold />
        </dl>

        <div className="mt-6 rounded-lg bg-brand-50 p-4 text-sm text-ink">
          <p className="font-medium text-brand-700">Get a quote</p>
          <p className="mt-1 text-ink-muted">
            Term life is cheap when you&apos;re young and healthy. These three issue policies
            instantly (no medical exam for most applicants under 50).
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AffiliateButton partner="bestow" source={source} variant="primary">Quote with Bestow →</AffiliateButton>
            <AffiliateButton partner="ethos" source={source} variant="secondary">Quote with Ethos →</AffiliateButton>
            <AffiliateButton partner="ladder" source={source} variant="secondary">Quote with Ladder →</AffiliateButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Row({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between rounded-lg border border-brand-200 p-3">
      <dt className="text-ink-muted">{label}</dt>
      <dd className={bold ? "font-medium text-brand-700" : "text-brand-700"}>{value}</dd>
    </div>
  );
}
