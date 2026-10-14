# WOLCO / REDLINE V4 — Editorial Creative Lab, Lovable Research and Production Plan

**12 October 2026 · Research + concept · Not production approved**

## What was and was not reviewed
- User provided a receipt-gated Lovable preview. The research/browser environment returned a restricted fetch response; screenshots or a public URL are required for visual review. No claims are made about the unseen Lovable output.
- Verified 7D Group studio case study: https://konzept.ba/project/7d-group-website/ — described by agency as cinematic, editorial, black/white and one decisive red. Adopt art direction, not their assets/design.
- Verified The Agency 2024 Red Paper by Sara Reitenbach: https://www.rbhcreative.com/work/the-agencys-2024-red-paper — black, white, tan, classic Agency Red in narrative print design.
- Inspiration: https://themodernhouse.com/ , https://www.rtedgar.com/ , https://www.333southwabash.com/ , https://www.awwwards.com/websites/real-estate/ .
- All claims about sites are scoped to observed publications; do not invent awards, technology or licensing status.

## The builder-specific visual thesis
WOLCO sells custom-built homes and knockdown/rebuild confidence. **Do not build an MLS/IDX property brokerage clone.** Our narrative is DESIGN INTENT → HOME COLLECTIONS → WOW MATERIALS → KNOCKDOWN/REBUILD → ACTUAL BUILD STORIES → QUALIFIED ENQUIRY.

Editorial balance: warm architectural white #F5F3EF, obsidian #111112, and provisional Wolco red #A11B27, supplemented with selected scarlet brand chapters. The 5% accent rule is advisory, not universal: allow occasional bold red editorial chapters, not continuous red UI clutter. Obtain authentic logo SVG and approved colour value before production.

Typographic direction: oversized elegant display serif, crisp Swiss/modern sans, monospaced metadata used sparingly. Test Instrument Serif + Manrope/DM Sans, then commercial options only with appropriate licence. No unauthorised redistribution of premium fonts.

## Preview artifacts created outside the repository
A standalone responsive **V4 Design Lab** ZIP was produced in the current ChatGPT work session. It contains:
- index.html, styles.css, main.js; three palette options: Editorial / Noir / Scarlet
- interactive Home Collection chapter and WOW finishes
- red full-bleed manifesto chapter
- editorial story spread, accessible menu, keyboard-friendly controls and concept-film dialog
- two NEW generated, typography-free architecture image plates (NOT Wolco built homes)
- concept six-second motion clip, asset register and production notes

Automated browser smoke test completed using an inlined-data copy in Chromium:
1440px desktop, 768px tablet and 390px mobile; no JS page errors, no horizontal overflow. Tested palette switching, collection interaction, dialog opening and closing, mobile menu. These are prototype smoke tests; they do NOT constitute production device, Lighthouse, WCAG or Safari QA.

The new creative kit **does not modify the production homepage**. To publish the preview use an isolated authorised staging deployment; do not merge automatically.

## How to use Lovable constructively
1. If user grants an accessible public demo link or connected GitHub repository, capture its desktop and mobile layouts, font usage, UX flows, asset origins, bundle and real motion behaviour.
2. Score against REDLINE on brand fidelity, hero clarity, responsive polish, conversion, real builder information, motion performance and accessibility.
3. Adopt superior patterns; avoid blindly copying source code, asset licenses or creating conflicting production frameworks.
4. Keep the existing Next.js + GitHub source as canonical until a genuine engineering benchmark proves otherwise.

## Actual release gates
1. Full authorized origin inventory: URL crawl, redirect mappings, SEO metadata, form analytics, media export and content backups.
2. WOLCO original media: real facades, floorplans and elevation rights, material selection photos, completed projects, construction journey. Generated media NEVER labelled as completed client construction.
3. Genuine Home Designs, House & Land, KDR, WOW Studio content models and edit permissions.
4. Production lead form: server-side input validation, captcha/honeypot or rate limit, explicit consent, delivery observability, spam resistance, error/success states; never fake success.
5. Accessibility: keyboard, reduced motion, focus, readable contrast, semantic headings and actual mobile parity.
6. Performance targets: aim for LCP <=2.5s, INP <=200ms, CLS <=0.1 on the 75th percentile of real-user field traffic; monitor image/video weight separately.
7. Engineering and hosting: Cloudflare recommended vinext for **new** Next.js apps on Workers as of Aug 2026; the current established Next.js application should undergo a compatibility spike rather than blindly migrating. Official reference: https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/
8. Complete route/schema/canonical inventory, structured data grounded in fact, robots, 301 redirects, 404 UX, sitemap, OG.
9. Regression check in Chrome, Edge, Firefox and Safari iOS. Published only after explicit sign-off + reliable rollback.

## Immediate priorities
- Obtain originals or approved access. Live https://wolcohomes.com.au/ returned HTTP 406 to automated research, NOT proof the site is down.
- Avoid spending on WebGL or custom fancy page transitions until real content and lead conversion are working.
- Configure, validate and run strict prelaunch checks; the prototype is EXPECTED to fail strict prelaunch until all assets and endpoints are legitimate.

## Current code audit evidence
Current code on feat/redline-rebirth contains hard-coded images.unsplash.com references in HomeDesigns and WowStudio, and the StartConversation component explicitly uses a prototype form action="#". This is a development placeholder, not an operational lead form. See the script at scripts/verify-prelaunch.mjs.
