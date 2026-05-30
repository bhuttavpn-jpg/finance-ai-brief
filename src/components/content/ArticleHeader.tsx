import { AuthorBox } from "./AuthorBox";
import { getAuthorByName, getAuthor, DEFAULT_AUTHOR } from "@/lib/authors";

interface Props {
  title: string;
  subtitle?: string;
  pillar: string;
  publishedAt: string;
  updatedAt: string;
  author?: string;       // Author display name. Looked up in the authors registry.
  reviewer?: string;     // Retained for back-compat. New articles can omit it.
  readingTime?: string;
}

export function ArticleHeader({
  title, subtitle, pillar, publishedAt, updatedAt, author, readingTime,
}: Props) {
  const resolvedAuthor =
    (author ? getAuthorByName(author) : undefined) ?? getAuthor(DEFAULT_AUTHOR);

  return (
    <header className="not-prose mb-8">
      <p className="text-xs font-medium uppercase tracking-wide text-brand-600">{pillar}</p>
      <h1 className="mt-2 text-3xl font-medium text-brand-700 sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-lg text-ink-muted">{subtitle}</p>}
      <AuthorBox author={resolvedAuthor} variant="header" />
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-subtle">
        <span>Updated {formatDate(updatedAt)}</span>
        {readingTime && <span>· {readingTime}</span>}
        {publishedAt !== updatedAt && (
          <span>· Originally published {formatDate(publishedAt)}</span>
        )}
      </div>
    </header>
  );
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}
