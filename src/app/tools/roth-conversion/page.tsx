import type { Metadata } from "next";
import { RothConversionCalculator } from "@/components/tools/RothConversionCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Roth conversion calculator 2026",
  description:
    "Enter your income, conversion amount, and expected retirement bracket to see the exact tax bill today, your Roth vs. Traditional balance at retirement, and whether converting makes financial sense.",
  alternates: { canonical: "https://finbrief.space/learn/roth-conversion-calculator" },
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Save tax</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Roth conversion calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        See the exact tax you&apos;ll owe on a conversion today vs. the tax you&apos;d pay on the same money in retirement — and whether converting pencils out.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <RothConversionCalculator />
      </div>
    </div>
  );
}
