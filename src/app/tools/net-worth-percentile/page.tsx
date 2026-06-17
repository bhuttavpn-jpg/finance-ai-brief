import type { Metadata } from "next";
import { NetWorthPercentile } from "@/components/tools/NetWorthPercentile";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Net worth percentile calculator (2026)",
  description:
    "See where your net worth ranks among U.S. households your age. Built from the Federal Reserve's 2022 Survey of Consumer Finances.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Invest</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Net worth percentile calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Enter your age, assets, and debts. See where you rank among U.S. households your
        age, based on the Federal Reserve&apos;s 2022 Survey of Consumer Finances.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <NetWorthPercentile />
      </div>
    </div>
  );
}
