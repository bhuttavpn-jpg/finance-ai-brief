import type { Metadata } from "next";
import { BudgetCalculator } from "@/components/tools/BudgetCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "50/30/20 budget calculator",
  description: "Enter your take-home pay and see your needs / wants / savings split. With a recommendation for where to park the savings.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Budget</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">50/30/20 budget calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        50% of take-home goes to needs, 30% to wants, 20% to savings. The classic starting
        allocation — adjust if rent eats more than 50% or you&apos;re paying off high-interest debt.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <BudgetCalculator />
      </div>
    </div>
  );
}
