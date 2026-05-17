interface Props {
  title: string;
  subtitle?: string;
  pillar: string;
  publishedAt: string;
  updatedAt: string;
  author?: string;
  reviewer?: string;
  readingTime?: string;
}

export function ArticleHeader({
  title, subtitle, pillar, publishedAt, updatedAt, author, reviewer, readingTime,
}: Props) {
  return (
    <header className="not-prose mb-8">
      <p className="text-xs font-medium uppercase tracking-wide text-brand-600">{pillar}</p>
      <h1 className="mt-2 text-3xl font-medium text-brand-700 sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-lg text-ink-muted">{subtitle}</p>}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
        {author && <span>By {author}</span>}
        {reviewer && <span>· Reviewed by {reviewer}</span>}
        <span>· Updated {formatDate(updatedAt)}</span>
        {readingTime && <span>· {readingTime}</span>}
      </div>
      {publishedAt !== updatedAt && (
        <p className="mt-1 text-xs text-ink-subtle">
          Originally published {formatDate(publishedAt)}
        </p>
      )}
    </header>
  );
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}
