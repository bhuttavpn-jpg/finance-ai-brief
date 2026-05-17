export interface QA { q: string; a: string }

export function FAQ({ items, heading = "Frequently asked questions" }: { items: QA[]; heading?: string }) {
  return (
    <section className="not-prose mt-12">
      <h2 className="text-2xl font-medium text-brand-700">{heading}</h2>
      <dl className="mt-5 divide-y divide-brand-200 rounded-xl border border-brand-200 bg-white">
        {items.map((qa, i) => (
          <div key={i} className="p-5">
            <dt className="text-base font-medium text-brand-700">{qa.q}</dt>
            <dd className="mt-2 text-base text-ink">{qa.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
