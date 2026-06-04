// Weekly newsletter draft generator.
//
// Picks one "lead story" from siteConfig.articles deterministically per ISO
// week (so each cron firing produces a different article without storage),
// then asks Claude Haiku to write a ~200-word intro framed around it.
//
// Beehiiv's public API is read-only for posts, so this module just produces
// the draft content — the cron route logs it and returns it as JSON. Wire
// to email / Slack later if you want push delivery.

import Anthropic from "@anthropic-ai/sdk";
import { siteConfig } from "@/lib/site-config";

export type NewsletterDraft = {
  subject: string;
  intro: string;
  leadArticle: {
    slug: string;
    title: string;
    pillar: string;
    url: string;
  };
  generatedAt: string;
  isoWeek: number;
};

// ISO week number, 1–53. Used as a deterministic rotation index.
function isoWeek(d: Date): number {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  // Set to Thursday in the current week (ISO weeks are defined relative to Thursdays).
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function pickLeadArticle(now: Date) {
  const articles = siteConfig.articles;
  // Stable rotation: same week → same article, even across re-runs.
  const week = isoWeek(now);
  const index = (week + now.getUTCFullYear() * 53) % articles.length;
  const article = articles[index];
  return {
    article,
    week,
  };
}

const SYSTEM_PROMPT = `You write the weekly intro for Finbrief, a U.S. personal-finance newsletter. House voice: plain language, sentence case, second person, no jargon, no hype, no emojis. Open with a concrete observation about the topic — not "Hi everyone" or "This week we…". Keep it to 180–220 words, 3–4 short paragraphs. End with one line that invites the reader to open the linked article. Do not invent statistics. Do not promise outcomes. Do not include the article title or URL — those are added by the template.`;

export async function generateNewsletterDraft(opts: {
  now?: Date;
  client?: Anthropic;
}): Promise<NewsletterDraft> {
  const now = opts.now ?? new Date();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey && !opts.client) {
    throw new Error("ANTHROPIC_API_KEY is not set.");
  }
  const client = opts.client ?? new Anthropic({ apiKey });

  const { article, week } = pickLeadArticle(now);
  const url = `${siteConfig.url}/learn/${article.slug}`;

  const userPrompt = [
    `Lead story this week:`,
    `Title: ${article.title}`,
    `Pillar: ${article.pillar}`,
    `Keyword: ${article.keyword}`,
    `URL: ${url}`,
    ``,
    `Write the 180–220-word intro. Frame it around what the reader gets out of the article — one concrete insight, one tradeoff, and a reason this matters now in 2026. End with one short sentence pointing them at the article.`,
  ].join("\n");

  const resp = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 700,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const intro = resp.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();

  if (!intro) {
    throw new Error("Empty intro from model.");
  }

  return {
    subject: article.title,
    intro,
    leadArticle: {
      slug: article.slug,
      title: article.title,
      pillar: article.pillar,
      url,
    },
    generatedAt: now.toISOString(),
    isoWeek: week,
  };
}
