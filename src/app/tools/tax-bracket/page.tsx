import type { Metadata } from "next";
import { TaxBracketCalculator } from "@/components/tools/TaxBracketCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Marginal tax rate calculator (2026)",
  description: "Estimate your 2026 federal income tax, marginal rate, and effective rate — with a per-bracket breakdown.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Tax</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Marginal tax rate calculator (2026)</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Federal income tax for tax year 2026, by bracket. See where every dollar lands.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <TaxBracketCalculator />
      </div>
    </div>
  );
}
