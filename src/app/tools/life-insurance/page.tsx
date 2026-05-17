import type { Metadata } from "next";
import { LifeInsuranceCalculator } from "@/components/tools/LifeInsuranceCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "How much life insurance do you need? (DIME calculator)",
  description: "DIME method: Debt + Income + Mortgage + Education. Get a face value in 30 seconds.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Protect</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Life insurance need calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Most people are either underinsured or overpaying for whole-life policies they don&apos;t
        need. The DIME method gets you to the right face value of term in a minute.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <LifeInsuranceCalculator />
      </div>
    </div>
  );
}
