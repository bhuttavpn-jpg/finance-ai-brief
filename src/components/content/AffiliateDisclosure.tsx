export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-lg border border-brand-200 bg-brand-50 p-3 text-xs text-ink-muted ${className}`}
      role="note"
    >
      <strong className="font-medium text-brand-700">Advertiser disclosure: </strong>
      Some of the offers on this page are from partners that compensate us when you take action.
      That helps fund our independent research. Our recommendations are based on a published
      methodology and are not influenced by commission rates. See our{" "}
      <a href="/about#disclosure" className="text-brand-700">full disclosure</a>.
    </aside>
  );
}
