# WOLCO HOMES — REDLINE V5: MotionSite-Inspired Architectural Cinema

**Research date:** 14 October 2026
**Audience:** WOLCO owners, project marketing, design, Next.js engineers, Lovable/Codex collaborators
**Status:** creative+engineering direction, not production authorisation.

## North star
WOLCO is a **Melbourne home builder**, not a Dubai/NYC/Miami property-resale agency. This is a premium custom-home design, knockdown-rebuild and building-journey site. Design towards a quiet architectural gallery punctuated by intentional scarlet-red typographic and motion moments. WOLCO's authentic work remains the hero.

## Verified reference audit
| Reference | What the actual seller's public listing says | What to use |
| --- | --- | --- |
| Modulux | Luxury modular kitchen template, cabinetry and finishes, smooth interactions. https://www.motionsite.ai/templates/modulux | WOW Studio material library, tactile close-ups and selective configurator. |
| Interazoo | Cinematic interior architecture, minimalist dark, tactile experience, smooth scroll. https://www.motionsite.ai/templates/interazoo | Interior chapters and spatial transitions. |
| Livarta Interiors | In MotionSite category as a hero-section concept; its individual page was not accessible to the research crawler. https://www.motionsite.ai/sections/livarta-interiors | Candidate interior-led hero; interaction claims require visual testing. |
| Aurelia | Ultra-luxury real estate template, glassmorphism, editorial type, advertised WebGL. https://www.motionsite.ai/templates/aurelia | Immersive architectural project transitions; WebGL only if it truly contributes. |
| Zenith Realty | Separate motionsites.ai library concept. https://motionsites.ai | Cinematic rhythm and scroll choreography. |
| The Modern House | https://themodernhouse.com/ | Confidence and quiet editorial layout. |
| 7D Group | https://konzept.ba/project/7d-group-website/ | The red/black/white cinematic visual language. |

MotionSite.ai and MotionSites.ai are distinct sites. The template pages describe prompts/source offers; they do **not** demonstrate production performance, CMS integration or business usability. Never claim the named demo artwork is licensed to WOLCO. Respect third-party copyrights, image rights, developer template licences, and font licences.

## LUXONN prompt critique
Keep: Next.js App Router, carefully scoped GSAP ScrollTrigger, optional Lenis, full-screen media, guided progress, editorial design, good responsive treatment.
Replace: gold/champagne with WOLCO-owned red; Bebas Neue with high-end serif + grotesk; floating glass sale-price cards with real design metadata; buy/sell/invest services with home building/knockdown-rebuild/WOW studio; global dark sections with calm editorial light/dark rhythm; fabricated statistics with sourced actual project proof.
Reject: unverified third-party DigitalOcean hero video; Unsplash as actual client work; all-page client component conversion; always-on video without pause; giant generic testimonial gradients; dummy enquiry forms.
The user also provided a NORTHLINE COMMERCIAL React/Vite prompt (uploaded support text) with gold/black office-property aesthetics. Borrow only production patterns, never its identity, synthetic testimonials, and invented financial statistics.

## Identity and typography
Working only (not WOLCO brand confirmation):
- architectural white `#F5F3EF`; near-black `#111112`; ink `#0B0B0C`; client-red TBD (`#B62231` exploration).
- WOLCO brand logo must use approved original vector; existing text-logo is provisional.
- Display candidates: Instrument Serif, Cormorant Garamond, editorial commercial type such as Canela/PP Editorial New **only after licence**. Keep a restrained italic for emotionally charged words.
- UI candidates: Manrope, Neue Haas Grotesk (licensed), or DM Sans. Technical labels: intentional uppercase but do not letter-space body copy.
- Responsive clamp scales; no text-bearing bitmap hero; no excessive backdrops and pill badges.
- Design density: 55–70% quiet ivory editorial, 20–35% black cinema and 5–12% purposeful red brand moments. These are visual compositional guidelines, not rigid percentages.

## WOLCO site map (proposal)
Home; Home Designs index; Home Design detail template (each collection/design); Custom Homes; Knockdown Rebuild; House & Land (only if active & verified); WOW Studio; Build Journey; Completed Projects index; Completed Project detail; About Wolco; Journal / Design Notes; Contact / Plan a Build; Privacy; 404; sitemap.
No fake IDX, no dummy locality cards. Authentic Victoria service areas, phone, legal entity and consent must be checked.

## Home experience choreography (desktop/motion-capable)
1. 0-3 sec reveal: warm off-white WOLCO masthead, architectural red hairline; brief restrained stagger of line+text. No extended loader.
2. Hero: an **owned** exterior film if approved, else extremely high quality WOLCO photograph; cinematic fullbleed, architectural drawing path traces and transitions to photograph. Two CTA paths: Explore Home Designs / Discuss Your Home.
3. Manifesto: quiet warm-white spread with actual craftsmanship narrative, large title, short evidence.
4. Collections: numbered editorial design atlas, individual full-bleed photographs, floorplans/spec data. GSAP desktop horizontal narrative with mobile native vertical or horizontal accessible fallback.
5. WOW Studio: from Modulux/Interazoo — actual premium material closeups (cabinetry, stone, flooring, tapware), tactile selection with **real** available finishes. Avoid mock configurator which falsely implies price/material availability.
6. Brand red chapter: single scarlet architectural statement, dark text or white based on contrast; no giant spinning icons.
7. Build journey: actual pre-site/on-site/post-site sequence, milestones, contextual FAQs.
8. KDR proof: authorised same-site before/after, true storytelling. Never mix unrelated stock before/after photographs.
9. Completed homes: full-bleed case studies with location generalized as client approves, details and actual construction footage.
10. Contact: deliberate, quick working lead flow, phone/email, state of property, time frame, project type; server delivery + consent.
11. Footer: accurate contact, legal entity and service-area navigation, sitemap, editorial minimalism.

## Video/media implementation
- Place **only client-approved** footage in a controlled first-party/CDN location.
- Server-provide poster still with correct dimensions; show poster first, use video as progressive enhancement.
- Default muted/playsInline; never auto-play audio. Provide accessible pause/play control.
- Disable optional autoplay if prefers-reduced-motion or Save-Data.
- Use H.264 MP4 or suitable streaming with device tests, a reasonable source budget, and mobile-specific clips/crops.
- Do not use `https://strvid.nyc3.cdn.digitaloceanspaces.com/...` as production dependency without explicit licence and asset ingest.
- Existing V5 implementation accepts `NEXT_PUBLIC_WOLCO_APPROVED_HERO_VIDEO` for optional approved hero film. Leave unset until media signed off.

## Stack: defend existing foundation
Next.js 16, React 19, TypeScript, GSAP/ScrollTrigger and Lenis **already in repository**. Keep App Router Server Components where possible. Use scoped `gsap.context()` or `@gsap/react` with cleanup in client islands. Add Motion/react only when design/state micro-interactions demand it. Do not load 3 animation frameworks for the same outcome. Next/image and responsive AVIF/WebP for real photograph collections. CMS implementation to be selected based on editor workflows (Sanity/Payload/WordPress Headless evaluated after asset inventory). Deployment on isolated staging (Cloudflare target as previously explored; Vercel preview is also possible if authorised). Protect live SEO URLs with mapped redirects.

## Concrete motion strategy
- Hero: SVG path draw + clip path reveal + custom stagger typography.
- Home Designs: optional pinned story, but keep keyboard-navigable native list.
- Project detail: interruptible image transitions on UI interactions; avoid scrolljacking.
- Material chooser: short (150–300 ms) state transitions with good contrast and real button hit targets.
- Contact: motion used to orient, never to impede.
- Prefers-reduced-motion: all content available without animation and no extra waiting.
- Phone width 320–430: single-column designed composition, no shrinking massive desktop headlines blindly.

## Nonnegotiable acceptance
1. Client media provenance; no false project claims, fake reviews, invented builds, or stock before/after.
2. All top-level menus, design pages and enquiries FUNCTION end-to-end; no action=#.
3. Actual original logo and correct registered legal entity.
4. Field performance: LCP <=2.5s; INP <=200ms; CLS <=0.1 at p75; no layout jank from GSAP.
5. Tested 320/390/768/1024/1440/1920+ plus real iPhone Safari and Android Chrome.
6. WCAG-aligned keyboard, focus, contrast, labels and reduced-motion coverage.
7. Crawl original approved content; preserve legitimate SEO, redirects and canonicals.
8. Staging preview reviewed before merge/publishing; rollback and asset backup defined.
9. Synthetic-generated concept imagery never represented as a WOLCO completed residence.

## Build order
**Phase A**: collect owned media / originals; source audit; brand lock; nav/sitemap.
**Phase B**: design tokens, original photographic hero, authentic project pages.
**Phase C**: WOW, detailed home atlas, KDR proof and CMS.
**Phase D**: GSAP choreography, conversion workflow, motion QA.
**Phase E**: production quality + performance + compliance + client approval; only then publish.

## Sources (verified 2026-10-14)
- https://www.motionsite.ai/templates/modulux
- https://www.motionsite.ai/templates/interazoo
- https://www.motionsite.ai/sections/livarta-interiors (individual page not retrievable)
- https://www.motionsite.ai/templates/aurelia
- https://www.motionsite.ai/category/real-estate
- https://motionsites.ai/
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://github.com/greensock/gsap-skills/blob/main/skills/gsap-react/SKILL.md
- https://web.dev/articles/vitals
- https://fliphtml5.com/dysim/jyau/WELCOME_BOOK_%282%29/
