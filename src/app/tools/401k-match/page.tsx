import type { Metadata } from "next";
import { MatchCalculator } from "@/components/tools/MatchCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "401(k) match calculator",
  description: "See exactly how much employer-match money you're capturing — and how much you're leaving on the table.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Invest</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">401(k) match calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Your employer match is free money. Figure out what you have to contribute to capture
        every dollar.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <MatchCalculator />
      </div>
    </div>
  );
}
