# SEO Audit: neonhealth.com

## Executive Summary

Neon Health is an AI-powered patient access platform (healthcare SaaS) built on **Framer**. The site is small (16 pages in sitemap) and appears to be early-stage with limited indexed pages. The biggest SEO concerns are:

1. **Extremely low index coverage** - only ~4 pages appear indexed despite 16 in the sitemap
2. **Client-side rendering (Framer)** limits crawlability of content
3. **Duplicate/missing title tags** across all pages
4. **No structured data (schema markup)** on any page
5. **No meta descriptions** detected on any page

**Overall Health:** Needs significant work. The foundation (HTTPS, responsive, robots.txt, sitemap) is present, but on-page SEO and technical SEO execution are weak.

---

## Technical SEO Findings

### 1. Client-Side Rendering (Framer) - Impact: HIGH

- **Issue:** The site is built entirely with Framer, which renders content via JavaScript. Multiple fetch attempts returned mostly CSS/JS with minimal readable HTML content. Googlebot can render JS, but it adds a crawl delay and reduces reliability.
- **Evidence:** All page fetches returned CSS-heavy markup with no visible H1-H6 tags, body text, or semantic HTML in the initial HTML payload.
- **Fix:** Ensure Framer's SSR/prerendering is enabled. Test with Google's Rich Results Test and "View Rendered Page" in Search Console to verify Googlebot sees all content. Consider migrating critical landing pages to a framework with server-side rendering (Next.js, etc.) for long-term SEO.
- **Priority:** HIGH

### 2. Very Low Index Coverage - Impact: HIGH

- **Issue:** A `site:neonhealth.com` search returns only ~4 results, despite 16 URLs in the sitemap. Blog posts, FAQs, careers, and legal pages appear unindexed.
- **Evidence:** Google search returned only: homepage, /demo/, trust.neonhealth.com, and one blog post (which isn't even in the current sitemap).
- **Fix:** Submit sitemap in Google Search Console, check the Coverage/Indexing report for errors. Ensure all pages are crawlable and render correctly. The `/demo/` page uses `www.neonhealth.com` while others use `neonhealth.com` - this inconsistency needs resolving.
- **Priority:** CRITICAL

### 3. www vs. non-www Inconsistency - Impact: HIGH

- **Issue:** The site serves content on both `neonhealth.com` and `www.neonhealth.com`. The sitemap references `neonhealth.com`, but Google has indexed `www.neonhealth.com/demo/` and `www.neonhealth.com/blog/future-healthcare-administration/`.
- **Evidence:** Google site: search shows both domains indexed. The sitemap only lists non-www URLs.
- **Fix:** Pick one canonical domain (recommend non-www to match sitemap). Set up 301 redirects from www to non-www (or vice versa). Add canonical tags pointing to the preferred version. Verify both properties in Search Console.
- **Priority:** CRITICAL

### 4. Robots.txt - Impact: LOW (OK)

- **Issue:** None - robots.txt is correctly configured.
- **Evidence:** `User-agent: * / Allow: / / Sitemap: https://neonhealth.com/sitemap.xml`
- **Status:** PASS

### 5. XML Sitemap - Impact: MEDIUM

- **Issue:** Sitemap exists and is accessible but lacks `<lastmod>` dates, and contains only 16 URLs. A blog post found in Google (`/blog/future-healthcare-administration/`) is **not** in the sitemap.
- **Fix:** Add `<lastmod>` dates to all sitemap entries. Ensure all indexable pages are included. Add the missing blog post URL. Remove any non-indexable pages (if /invite-only is gated, consider excluding it).
- **Priority:** MEDIUM

### 6. No Structured Data - Impact: MEDIUM

- **Issue:** No JSON-LD schema markup detected on any page. Missing Organization, WebSite, Article/BlogPosting, and FAQPage schemas.
- **Fix:** Add at minimum: `Organization` schema on homepage, `BlogPosting` schema on each blog post (with author, datePublished, dateModified), `FAQPage` schema on /faqs.
- **Priority:** MEDIUM

---

## On-Page SEO Findings

### 7. Duplicate Title Tags - Impact: HIGH

- **Issue:** Every page tested returns the same title: "Neon Health | AI-powered patient access". Only the blog article had a unique title.
- **Evidence:** Homepage, /blog, /careers, /faqs, /schedule all returned the identical title.
- **Fix:** Create unique, keyword-targeted titles for every page:
  - `/careers` ->"Careers at Neon Health | Join Our Healthcare AI Team"
  - `/blog` ->"Blog | Healthcare AI & Patient Access Insights | Neon Health"
  - `/faqs` ->"Frequently Asked Questions | Neon Health"
  - `/schedule` ->"Schedule a Demo | Neon Health"
- **Priority:** HIGH

### 8. Missing Meta Descriptions - Impact: MEDIUM

- **Issue:** No meta descriptions detected on any page. Google will auto-generate snippets, but they'll likely be poor quality given the JS-rendered content.
- **Fix:** Write unique, compelling meta descriptions (150-160 chars) for every page with clear value propositions and CTAs.
- **Priority:** MEDIUM

### 9. Heading Structure Unverifiable - Impact: MEDIUM

- **Issue:** Due to Framer's client-side rendering, H1-H6 tags could not be verified in the raw HTML. If Framer is using `<div>` with CSS styling instead of semantic heading tags, this is a significant SEO issue.
- **Fix:** Inspect the rendered DOM in Chrome DevTools to confirm proper `<h1>` through `<h6>` tags are used. Each page should have exactly one `<h1>`. Verify with Google's Rich Results Test or Mobile-Friendly Test (which shows rendered HTML).
- **Priority:** MEDIUM

### 10. Missing Canonical Tags - Impact: HIGH

- **Issue:** No canonical tags were detected. Combined with the www/non-www issue, this means Google is likely seeing duplicate content.
- **Fix:** Add self-referencing canonical tags to every page. Ensure they point to the preferred (non-www) version.
- **Priority:** HIGH

### 11. Missing Open Graph / Social Tags - Impact: LOW

- **Issue:** No Open Graph or Twitter Card meta tags detected.
- **Fix:** Add OG tags (title, description, image, url, type) and Twitter Card tags to all pages. Especially important for blog posts shared on social.
- **Priority:** LOW

---

## Content Findings

### 12. Blog is Thin (6 posts) - Impact: MEDIUM

- **Issue:** Only 6 blog posts in the sitemap, focused on healthcare policy topics. For a healthcare AI SaaS, this is a missed opportunity for organic traffic.
- **Fix:** Develop a content strategy targeting keywords related to: benefit verification, prior authorization automation, patient access workflows, financial assistance programs, care management automation. Aim for at least 2-4 posts per month targeting specific long-tail keywords.
- **Priority:** MEDIUM (long-term)

### 13. No Author/Date Information on Blog Posts - Impact: MEDIUM

- **Issue:** Blog posts lack visible author attribution and publication dates, which are important E-E-A-T signals in healthcare (YMYL) content.
- **Fix:** Add author bios with healthcare/AI credentials. Display publication and last-updated dates. This is especially important in the healthcare space where Google applies YMYL (Your Money Your Life) scrutiny.
- **Priority:** MEDIUM

### 14. Missing Comparison/Alternative Pages - Impact: LOW

- **Issue:** No "vs" or comparison pages targeting competitor search terms (e.g., "Neon Health vs [competitor]", "best patient access automation").
- **Fix:** Create comparison and category pages for product-aware search terms. These are high-intent pages for SaaS.
- **Priority:** LOW (long-term)

---

## Prioritized Action Plan

### Critical (Fix Immediately)

1. **Resolve www vs. non-www** - Set up 301 redirects, pick one canonical domain
2. **Add canonical tags** to every page pointing to preferred domain
3. **Investigate index coverage** in Search Console - find out why ~12 pages aren't indexed

### High Impact

4. **Create unique title tags** for every page with target keywords
5. **Verify Framer SSR/prerendering** is enabled - test rendered output with Google tools
6. **Add meta descriptions** to all pages

### Medium Impact

7. **Add structured data** - Organization, BlogPosting, FAQPage schemas
8. **Fix sitemap** - add lastmod dates, include all indexable pages, remove missing URLs
9. **Add author/date info** to blog posts (critical for healthcare YMYL)
10. **Verify heading hierarchy** in rendered DOM

### Quick Wins

11. **Add Open Graph tags** for social sharing
12. **Submit sitemap** to both Google and Bing Search Console

### Long-Term

13. **Content strategy** - target patient access, benefit verification, prior auth keywords
14. **Comparison pages** for product-qualified traffic
15. **Consider SSR migration** if Framer rendering issues persist
