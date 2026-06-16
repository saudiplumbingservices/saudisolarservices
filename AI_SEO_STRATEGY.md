# AI SEO & Generative Engine Optimization (GEO) Strategy - Miyar Technical Services

This document details the optimizations applied to [miyartechnicalservices.com](http://miyartechnicalservices.com) to rank highly in traditional search engines (Google, Bing) and maximize visibility inside AI Search platforms (Google AI Overviews, ChatGPT, Gemini, Perplexity).

This strategy compiles core insights from both Neil Patel's AI SEO analysis and the **Complete SEO & AI SEO Course for 2026**.

---

## 📈 Core Principles of AI SEO (GEO) in 2026

In 2026, search optimization has shifted from "Search Engine Optimization" to **"Search Everywhere Optimization"**. With up to 60% of searches ending without a user clicking a link (zero-click searches), sites must adapt to be citation-friendly and authority-rich.

### Key Factors for LLM Visibility:
1. **Traditional Infrastructure Matters:** AI engines crawl and index using the same web infrastructure. Bing's index powers ChatGPT and Perplexity, while Google's index powers Gemini. Standard crawling and indexing are prerequisites for AI visibility.
2. **The Freshness Bias:** LLMs weigh fresh data and active domains heavily. Content older than 18 months decays rapidly in AI citations.
3. **Intent and the Long-Tail (6+ Words):** Short queries trigger AI overviews 23% of the time, but detailed long-tail queries (questions of 6+ words) **trigger AI overviews 77% of the time**. 
4. **Linkable Assets / Free Tools:** High-authority websites attract backlink references naturally by hosting practical interactive tools, calculators, templates, or original data. LLMs heavily reference pages hosting these assets.
5. **High Conversion Rates:** Traffic originating from AI recommendations converts at **~9% (over 2x higher than normal SEO/email traffic)** because users are pre-qualified before arriving.

---

## 🛠️ Optimizations Applied to Miyar Technical Services

We have implemented the following core structural, schema, and interactive updates:

### 1. Freshness Bias Protection (June 2026 Alignment)
* Updated all blog publication dates and titles in [blogs.ts](file:///c:/Users/Latitude%207420/Downloads/saudisolarservices-main/src/data/blogs.ts) to **June 2026** to ensure active freshness signals for AI crawlers.

### 2. High-Intent FAQ Schema Integration
* Expanded the global JSON-LD FAQ schema in [SchemaMarkup.tsx](file:///c:/Users/Latitude%207420/Downloads/saudisolarservices-main/src/components/SchemaMarkup.tsx) to cover **9 detailed local-market questions**.
* Clear, direct answers were structured inside code blocks so LLMs can extract clean definitions instantly for queries about Riyadh climate loads, PPR pipes, leak detection tools, and SEC net metering regulations.

### 3. Interactive "Linkable Assets" (The SEO Moat)
To attract backlinks and drive high-intent transactional leads, we vibe-coded two custom interactive calculators:
* **Saudi AC Tonnage & Cooling Calculator:** Installed on the [AC Page](file:///c:/Users/Latitude%207420/Downloads/saudisolarservices-main/src/app/services/ac/page.tsx). Calculates the exact BTU/hr and AC Tonnage required for standard and top-floor rooms in Saudi Arabia, taking local climate heat zones and sun exposure factors into account.
* **Saudi Solar Savings & Payback Estimator:** Installed on the [Solar Page](file:///c:/Users/Latitude%207420/Downloads/saudisolarservices-main/src/app/services/solar/page.tsx). Sizers residential PV arrays, calculates panel count, estimates installation costs, and provides yearly savings and payback period estimations under the SEC Net Metering framework.
* Both calculators dynamically link to the main **Quote Form** at the bottom of the home page, passing custom pre-filled message parameters (e.g., system sizes/AC tons calculated by the user) to maximize conversion rates.

---

## 📅 30-Day AI SEO Action Plan for Miyar

Follow this simple, prioritized roadmap to build authority for your site:

### Week 1: Foundation Audit
* Verify indexing of **Money Pages** (AC, Plumbing, Solar pages).
* Monitor direct branded searches in Google Search Console (look for spikes in terms like *"Miyar"* or *"Miyar Technical Services"*).

### Week 2: Linkable Asset Outreach
* Promote your new **AC Tonnage Calculator** and **Solar Payback Estimator** to local Saudi property blogs, real estate forums, and community groups. These tools serve as high-quality backlink magnets.

### Week 3: Journalist Queries (Outreach)
* Set up a free account on **Source of Sources** or **Featured.com**.
* Spend 15 minutes a day responding to journalist questions about home maintenance, cooling tips, or energy savings to earn high-authority media backlinks.

### Week 4: Track AI Citations
* Run manual prompts on ChatGPT, Gemini, and Perplexity (e.g., *"What size AC do I need for a penthouse Majlis in Riyadh?"*) to see if the LLMs reference your tools or cite Miyar Technical Services in the answers.
