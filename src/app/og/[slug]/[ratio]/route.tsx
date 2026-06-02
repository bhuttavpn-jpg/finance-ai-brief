import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

const RATIOS = {
  "16x9": { width: 1200, height: 630 },
  "4x3": { width: 1200, height: 900 },
  "1x1": { width: 1200, height: 1200 },
} as const;

type Ratio = keyof typeof RATIOS;

function isRatio(value: string): value is Ratio {
  return value === "16x9" || value === "4x3" || value === "1x1";
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string; ratio: string }> },
) {
  const { slug, ratio } = await ctx.params;

  if (!isRatio(ratio)) {
    return new Response("Not found", { status: 404 });
  }

  const article = siteConfig.articles.find((a) => a.slug === slug);
  const title = article?.title ?? siteConfig.tagline;
  const pillar = article?.pillar ?? siteConfig.name;
  const size = RATIOS[ratio];

  // Padding and font scaling adapt to the canvas so the title reads cleanly
  // at every aspect ratio. 16x9 is the canonical hero; 4x3 and 1x1 are
  // taller, so we get a larger title and breathing room around it.
  const padding = ratio === "1x1" ? 96 : 80;
  const titleSize = ratio === "16x9" ? 68 : ratio === "4x3" ? 76 : 84;
  const titleMaxWidth = size.width - padding * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1F3A5F",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #2C4F7C 0%, transparent 45%)",
          color: "#FFFFFF",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
          padding,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFFFFF",
              color: "#1F3A5F",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {siteConfig.shortName}
          </div>
          <div style={{ marginLeft: 20, fontSize: 34, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#9FB3CC",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 24,
            }}
          >
            {pillar}
          </div>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: titleMaxWidth,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9FB3CC" }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
