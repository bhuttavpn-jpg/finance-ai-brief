import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/lib/authors";
import { REVIEWER } from "@/lib/authors";

interface Props {
  author: Author;
  variant?: "header" | "card";
}

// Compact author block. Used in the article header (variant="header") and
// optionally as a standalone card lower in the page (variant="card").
export function AuthorBox({ author, variant = "header" }: Props) {
  const isCard = variant === "card";
  return (
    <div
      className={
        isCard
          ? "mt-10 flex items-start gap-4 rounded-lg border border-brand-100 bg-brand-50/40 p-5"
          : "mt-5 flex items-center gap-3"
      }
    >
      <Image
        src={author.photoUrl}
        alt={`${author.name} — ${author.title}`}
        width={isCard ? 72 : 48}
        height={isCard ? 72 : 48}
        className={
          isCard
            ? "h-[72px] w-[72px] flex-shrink-0 rounded-full border border-brand-100 object-cover"
            : "h-12 w-12 flex-shrink-0 rounded-full border border-brand-100 object-cover"
        }
      />
      <div className="min-w-0">
        <p className={isCard ? "text-sm text-ink-muted" : "text-xs text-ink-subtle"}>
          Written by
        </p>
        <p className={isCard ? "text-base font-medium text-brand-700" : "text-sm font-medium text-ink"}>
          <Link href={author.url} className="hover:underline">
            {author.name}
          </Link>
        </p>
        <p className={isCard ? "text-sm text-ink-muted" : "text-xs text-ink-muted"}>
          {author.title}
        </p>
        {isCard && <p className="mt-2 text-sm text-ink-muted">{author.shortBio}</p>}
        <p className={isCard ? "mt-2 text-xs text-ink-subtle" : "mt-0.5 text-[11px] text-ink-subtle"}>
          Reviewed by the{" "}
          <Link href={REVIEWER.url} className="hover:underline">
            {REVIEWER.displayName}
          </Link>
        </p>
      </div>
    </div>
  );
}
