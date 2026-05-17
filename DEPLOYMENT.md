# Finbrief Deployment Guide

Your Next.js codebase is **ready to deploy**. This guide walks you through connecting to Vercel and pointing your finbrief.space domain.

## ✅ What's Complete

- Next.js 16.2.6 (latest, security patches)
- 5 interactive financial tools (budget, tax, retirement, insurance)
- 2 starter articles with schema markup & affiliate disclosure
- Branded icons (favicon, apple-icon, OG image)
- Server-side affiliate redirect (/go/[partner])
- Sitemap, robots.txt, SEO metadata

## 📋 Pre-Deployment Checklist

- [x] Build passes locally
- [x] All routes compile
- [x] Author set to "Finbrief Editor"
- [x] Affiliate URLs set to institution homepages (will replace with real affiliate links later)
- [x] Domain: finbrief.space (hosted on Hostinger)
- [ ] GitHub repo created
- [ ] Connected to Vercel
- [ ] Hostinger DNS updated

---

## 🚀 Deploy in 5 Steps

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `finbrief` (or your preferred name)
3. **Description:** "A U.S. personal-finance platform for budgeting, investing, and tax optimization"
4. **Public** or **Private** — your choice
5. Click **Create repository**

### Step 2: Push Code to GitHub

In your terminal, from the `finance-platform/` directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/finbrief.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub handle.

### Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and **sign in** (or create an account)
2. Click **Add New Project**
3. Select **Import Git Repository**
4. Find your `finbrief` repo and **Import**
5. Vercel will auto-detect Next.js. Click **Deploy**.

**⏳ Deployment takes ~2–3 minutes.**

### Step 4: Set Environment Variables in Vercel

After deployment, go to **Project Settings → Environment Variables** and add all from `.env.example`:

```
NEXT_PUBLIC_SITE_URL=https://finbrief.space
NEXT_PUBLIC_SITE_NAME=Finbrief
NEXT_PUBLIC_GA_ID=     # Optional
NEXT_PUBLIC_POSTHOG_KEY=  # Optional
AFFILIATE_MARCUS=https://www.marcus.com/
AFFILIATE_ALLY=https://www.ally.com/
... (all 25 affiliate partners from .env.example)
```

You can copy-paste the entire `.env.example` contents. Save and redeploy.

### Step 5: Point finbrief.space to Vercel

**From Hostinger Dashboard:**

1. Go to **Domains → finbrief.space → DNS Records**
2. Delete any existing A/CNAME records pointing to the old site
3. Add a **CNAME record**:
   - **Type:** CNAME
   - **Name:** (leave blank or enter `www`)
   - **Target:** `cname.vercel-dns.com.`
4. Add an **A record** (for the root domain):
   - **Type:** A
   - **Name:** (leave blank)
   - **Value:** `76.76.19.165`

Alternatively, Vercel shows you the exact DNS records needed after you add the domain. See **Vercel → Project Settings → Domains → Add Domain** and follow their steps.

**⏳ DNS propagation takes 15 minutes to 48 hours. Check progress at [whatsmydns.net](https://whatsmydns.net).**

---

## 🔄 After You Deploy

### Update Affiliate URLs Later

When you apply to affiliate programs and get approved:

1. Edit `.env.local` or `.env.production` locally
2. Update each `AFFILIATE_*` URL with the real tracked link
3. Push to GitHub
4. Vercel auto-redeploys
5. Or manually update in Vercel dashboard **Settings → Environment Variables**

### Monitor Deployment

- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
  - View build logs, failed deploys, analytics
  - Redeploy any commit with one click
- **Site Health:**
  - Sitemap: `https://finbrief.space/sitemap.xml`
  - OG image: `https://finbrief.space/opengraph-image`

### Adding More Content

To add articles and tools:

1. Create new page files in `src/app/learn/` or `src/app/tools/`
2. Follow the conventions in CLAUDE.md (author, reviewer, JSON-LD schema)
3. Push to GitHub → auto-deploys to Vercel

---

## ⚠️ Important Before Going Live

### Affiliate Links

Your affiliate redirect route (`/go/[partner]`) is live and waiting. When you get approved for affiliate programs:
1. Swap institution URLs for real affiliate links
2. The `/go/marcus?s=article-slug` redirect will append `?subid=article-slug` for partner postback

### Content & Compliance

- **Author:** Currently "Finbrief Editor" — hire a credentialed writer later if needed
- **Reviewer:** Placeholder "Certified Financial Planner (CFP®)" — get a real CFP on retainer before scaling
- **FTC Disclosure:** Baked into every article. ✅
- **YMYL:** All articles cite primary sources (IRS, FDIC, etc.)
- **Legal entity:** Get an LLC before affiliate revenue crosses $1K

---

## 🆘 Troubleshooting

**Build fails on Vercel?**
- Check **Deployment → Logs** for errors
- Verify all env vars are set in Vercel dashboard
- Make sure `.env.local` is **not** committed to GitHub

**Domain not pointing to Vercel?**
- Use [whatsmydns.net](https://whatsmydns.net) to check DNS propagation
- Make sure old DNS records are deleted from Hostinger
- Allow 24–48 hours for full propagation

**Affiliate redirect 302s to the wrong place?**
- Test locally: `AFFILIATE_MARCUS=https://example.com/test npm run dev`
- Hit `/go/marcus?s=test` and check the redirect target
- Verify env vars in Vercel dashboard match what you intended

---

## 📧 Next Steps

1. **Push to GitHub** (Step 2 above)
2. **Deploy to Vercel** (Step 3 above)
3. **Set env vars** (Step 4 above)
4. **Update DNS at Hostinger** (Step 5 above)
5. **Wait for DNS propagation** (15 min to 48 hours)
6. **Test finbrief.space** — see your live site

---

*Questions? Refer to CLAUDE.md for the project roadmap and phase breakdown.*
