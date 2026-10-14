# WOLCO HOMES REDLINE V6 — Audited Staging Delivery
Date: 14 October 2026. Status: preview-ready development, not final public production.

## Verified source and authenticity
WOLCO's origin at https://wolcohomes.com.au/ returns HTTP 406 to the automated crawler. Therefore a complete existing-site audit, all redirects, its CMS assets, and its SEO inventory are NOT verified; HTTP 406 does not mean the site is down for visitors.
WOLCO's public business posts show slab-down in Wollert (16 September 2026) and Kalkallo handover (1 September 2026): https://www.findglocal.com/AU/Melbourne/645448795312135/WOLCO-HOMES
WOLCO's customer booklet: https://fliphtml5.com/dysim/jyau/WELCOME_BOOK_%282%29/ . WOLCO's phone number: 1300 16 36 66; public address 9/28 Longford Road, Epping VIC 3076.
The user supplied the 12 EASY STEPS TO START BUILDING PDF. Its 12 pre-construction steps are faithfully transcribed into content/wolco.ts and rendered as an accessible interactive accordion.

## The 12 steps
01 Request your detailed proposal (New Home Consultant, WOW Studio).
02 Accept the proposal with acceptance fee.
03 New home appointment.
04 Walk-through and external open studio appointment.
05 Plan presentation appointment.
06 HIA building agreement.
07 External selections and internal open studio appointment.
08 Internal selections appointment.
09 Developer and building authorities approvals.
10 Electrical selections appointment.
11 Finance approval and authority to commence construction (ACC).
12 Construction commences.
Land registration, finance and approvals may alter the precise chronology; client must approve current terms.

## Audited competitor learnings
- Coral Homes https://coralhomes.com.au/home-designs/ : clear segmented design browsing and knockdown-rebuild pathways.
- Boutique Homes https://www.boutiquehomes.com.au/home-designs/ : real searchable catalogue, floorplans, compare/favourites and clean conversion.
- Arden Homes https://ardenhomes.com.au/ : facades/floorplans, favourites and comparable specifications, strong assurance section.
- SHRI Homes https://www.shrihomes.com.au/home-designs/ : consultative, land-and-budget-aware custom-build narrative.
WOLCO should exceed them in cinema and editorial identity without losing functional floorplans, clear trust, mobile usability and enquiries.

## Design research
Modulux https://www.motionsite.ai/templates/modulux for materials.
Interazoo https://www.motionsite.ai/templates/interazoo for interior architectural cinema.
Aurelia https://www.motionsite.ai/templates/aurelia for immersive project storytelling.
Livarta https://www.motionsite.ai/sections/livarta-interiors/ for hero exploration (interaction not independently audited).
MotionSites gallery https://motionsites.org/sites for visual patterns, not production-level code assumptions.
7D Group https://konzept.ba/project/7d-group-website/ for deliberate red, black, white.
The Modern House https://themodernhouse.com/ for editorial restraint.

## Implemented on the V6 branch
Next.js 16.4.0 + React 19 + TypeScript + GSAP/ScrollTrigger + Lenis. Working Home Designs / Aurelia / Elevate / Simplex routes; dedicated Knockdown Rebuild, World of Wolco, 12-step Build Journey, Contact; source-grounded authentic WOLCO milestone notes, real phone CTA and published Epping address. The prior dummy lead form and fictitious stock-photo WOLCO project archive were replaced. Responsive editorial grids and redline motion system. Optional approved-only video component is present but not populated. Stage is explicitly noindex / robots disallow. GitHub Actions checks npm audit (critical), lint, Next build.

## Media register
- Official logo and exact brand red: require owner-approved original.
- Hero and collection images: still illustrative third-party mood imagery, NOT a verified WOLCO-built home. Replace with approved original media.
- WOW materials and actual availability: use owner verified photography and catalogue.
- Floorplans, specs, real KDR same-site before/after: must import from WOLCO originals.
- Actual videos: shoot/approve/license, create poster and mobile renditions.
- WOLCO six-second creative concept film: synthetic generated visuals, downloadable from this ChatGPT conversation; NOT part of official client portfolio.
- Lead handling: secure CRM/email integration and consent must be configured. For now only direct phone/contact path works; no fake submission.
- Reviews/legal entity: require explicit verification. No fabricated awards, years or 5-star statistics.

## Production requirements before replacing wolcohomes.com.au
Complete authorised crawl and redirects; genuine owned visual assets; real home catalogue with floorplan detail; original legal company identity; server-side CRM form; iOS/Android/Safari/Chrome QA; Core Web Vitals and WCAG accessibility; sitemap/canonical changes; backup and rollback. Remove preview robots noindex only AFTER launch sign-off.

## Deployment
Next.js output export with trailingSlash is configured for Cloudflare Pages Static HTML Export (npm run build; output out). Documentation: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
Direct Cloudflare account/branch preview connection has NOT been independently validated through an available connector. Verify any Pages preview URL before calling it live. Do not confuse a Vercel preview (Git source auth missing) with Cloudflare.

**Honest verdict:** substantial, functioning staging code; quality gates passing as of the last tested commit; not a final 100% production replacement because original assets and CRM/SEO migration are still unavailable.