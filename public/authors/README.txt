Drop the author headshot here as `jahanzeb-nawaz.jpg`.

Requirements:
- Square aspect ratio (1:1). The site crops to a circle, so a non-square image
  will display fine but waste bytes.
- 600x600 pixels is plenty. Anything larger is overkill — next/image resizes
  on the fly.
- JPEG with quality ~80, ideally under 80KB. PNG is fine too if you keep it
  optimized.
- Plain or neutral background. Don't use a stock photo of someone else, and
  don't use an AI-generated image of "you" (reverse image search and
  AI-watermark detection will surface either one).

Once the file is at public/authors/jahanzeb-nawaz.jpg, every article, the
About page, and the /author/jahanzeb-nawaz page will pick it up automatically
(referenced via the photoUrl field in src/lib/authors.ts).
