# WOLCO HOMES V8 — WARM ARCHITECTURAL REBIRTH

**18 October 2026 · Creative and engineering implementation. Staging preview, not approved production launch.**

## North star
Make a home-building experience feel like a beautifully curated architectural journal, not a black-and-gold real estate website. Visual rhythm: warm ivory and natural limestone, premium architectural photography and creative editorial typography, one decisive Wolco-crimson architectural interlude, then calm neutral projects and clear conversions. Never suggest fake awards, invented statistics, prices, floorplans, logos, testimonials, completed projects or consent.

## Source-led design exploration
- The Modern House: https://themodernhouse.com/ — confidence through curated architecture, editorial pacing and natural material photography.
- SOVA / Desire Studio: https://desirestudio.com.au/project/sova/ — quiet high-end residential project identity using muted tones.
- Coral Homes: https://coralhomes.com.au/design-collections/ — practical selection from builder collections.
- Arden Homes: https://ardenhomes.com.au/ — authentic facade variations, display homes, home plans, inclusions.
- User references: https://www.motionsite.ai/templates/modulux (tactile details), /interazoo (interior animation), /aurelia (cinematic transitions); https://motionsites.org/sites .
References guide art direction only; no replication of protected work.

## New code in this branch
- components/WarmRebirth.tsx: completely redesigned homepage as a coherent editorial narrative. Includes original line drawing, CSS material study, interactive collection tabs, exact official 12-step WOLCO chronology drawn from content/wolco.ts, KDR, build milestone journal, proven contact.
- app/warm-rebirth.css: full responsive art direction, careful large type scaling and warm palette.
- app/page.tsx and app/layout.tsx: activate new homepage and metadata.
- /custom-homes/, /house-and-land/, /about/ routes added and styled, alongside V6 /home-designs/, /home-designs/{slug}/, /world-of-wolco/, /knockdown-rebuild/, /build-journey/, /contact/.
- Menu, footer and sitemap updated for new builder routes.
- Staging NOINDEX remains until production data, legal approval and migration checks.

## Authentic assets FOUND, but withheld from PUBLIC repo until permission
Located in user's connected Dropbox:
1. /Logo/Wolco/ — original WOLCO raster logo. Actual identity is red/black with a small distinctive YELLOW block. Keep original trademark intact; confirm exact red and preferably source vector.
2. /2026/Sixth Vision/[private client shoot]/Final/Photo/Without logo — high-resolution professionally edited home interiors, facade, living and kitchen.
3. Same project Final/Drone and Final/Video — original drone and edited property video.
4. Final/Floorplan — original floorplan for that **specific** property only. NEVER present it as a standard Aurelia/Elevate/Simplex design.
Local **private review only** package prepared in ChatGPT: WOLCO_V8_PRIVATE_REAL_MEDIA_REVIEW.zip, with EXIF-stripped WebP images and a visible notice that rights/client permission need approval. Do not record private street address, homeowner identity or Dropbox public links in this repository.
Do not transfer original client media to public static hosting until WOLCO confirms website publication rights, Sixth Vision shoot licensing, and homeowner location/privacy consents.

## Business-specific source and conversion
- User-supplied "12 EASY STEPS TO START BUILDING.pdf" is the authority for titles/people/studio touchpoints; original source includes land-registration/finance caveat.
- WOLCO catalog collections (Aurelia/Elevate/Simplex) based on public welcome book https://fliphtml5.com/dysim/jyau/WELCOME_BOOK_%282%29/ ; exact approved current designs, specs and facade imagery are still missing.
- Genuine WOLCO phone number is an actual conversion route. CRM/email endpoint and consent are missing, therefore fake form submissions are intentionally not present.
- Actual domain https://wolcohomes.com.au/ still returned HTTP 406 to the available automated crawler. This is NOT an authoritative complete URL or SEO asset audit.

## Launch requirements — blockers
- Legal/current company registration approval, physical address and brand identity check.
- Full authorised original live-site crawl+redirects+canonical/SEO migration.
- WOLCO-approved original media and all applicable homeowner permission.
- Real home designs, measured floorplans, inclusions, status/prices, CRM form with end-to-end delivery and spam protection.
- Real device visual QA including iOS Safari and mobile, Lighthouse on deployed previews, accessibility and keyboard audits.
- Keep robots noindex on staging; only remove after documented approval.
- Cloudflare deployment destination auto-linked to GitHub is asserted by user but not independently visible to assistant; check actual preview URL and build logs.
- WOLCO V8 has NOT won an Awwwards/design award and should not claim one.

## QA 
GitHub Actions workflow on V8 feature branch: npm install; npm audit --omit=dev --audit-level=critical; lint; Next production build. Confirm most recent commit success before merging.

## Operational policy
Keep private client images out of public GitHub history until explicit consent. The V8 design is a substantial working staging rebuild, but not a certified final production replacement. Rollback by reverting the merge commit and retaining V6 before domain cutover.
