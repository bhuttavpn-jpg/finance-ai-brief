import type { Metadata } from "next";
import { RothComparator } from "@/components/tools/RothComparator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Roth vs. Traditional IRA comparator",
  description: "Compare after-tax outcomes side by side based on your bracket today and in retirement.",
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Invest</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Roth vs. Traditional IRA</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Whichever bracket you expect to be in <em>then</em> versus <em>now</em> drives the answer.
        Run your scenario.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <RothComparator />
      </div>
    </div>
  );
}
