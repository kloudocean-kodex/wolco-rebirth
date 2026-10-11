# WOLCO / REDLINE V3 — Editorial Rebirth Research and Production Gate

Date: 2026-10-12. Status: research-backed creative direction; NOT production ready.

## Strategic correction
Wolco Homes is a Melbourne custom-home builder, not a resale-property brokerage. Design for custom homes, knockdown/rebuild, collections, WOW Studio and an evidence-based build journey. Do not add IDX-like property listings.

## Reference direction
- MotionSites Zenith Realty: https://motionsites.ai/ — choreographed motion reference only.
- The Modern House: https://themodernhouse.com/ — editorial pacing.
- RT Edgar: https://www.rtedgar.com/ — prestige storytelling.
- WHITEFOX: https://www.whitefoxrealestate.com.au/ — confident brand voice.
- Carolwood Estates: https://carolwoodre.com/ — oxblood and restraint.
- 1428 Brickell: https://1428brickell.com/ — immersive architecture.
- Ronas red/black/white concept: https://dribbble.com/shots/27108491-Luxury-Real-Estate-Agency-Website-UI-Design
- Casa Ana architecture concept: https://dribbble.com/shots/24828751-Architecture-Website-for-Luxury-Real-Estate

Do not copy protected layouts or imagery. Use these as inspiration.

## Visual system
Primary: architectural white #F5F3EF, near-black #111112; restrained working red #A11B27 (PROVISIONAL — confirm exact original client logo colour). Favour white editorial breathing room over entirely black scrolling. The REDLINE architectural datum is the transition motif. Display typography Instrument Serif/Cormorant Garamond, body DM Sans/Manrope initially; client-approved commercial fonts may replace them where correctly licensed.

## Storyboard
1. WHITE PORTAL → RED architectural datum → real completed-home photograph.
2. Manifesto "We don't build ordinary" + precision editorial typography.
3. True home-design atlas with real plan widths, areas, floors, facades and series.
4. Interactive WOW World of Wolco using actual material photographs.
5. KDR real before-and-after case studies.
6. Real pre-site → on-site → post-site timeline.
7. Actual built project narratives and approved videos.
8. High-confidence site inspection / planning conversation with working CRM.

## Source code findings from feat/redline-rebirth
Reviewed README, docs/ART_DIRECTION.md, docs/CONTENT_SOURCES.md, package.json, app/page.tsx, app/layout.tsx, RedlineHero.tsx, HomeDesigns.tsx, WowStudio.tsx, StartConversation.tsx. Current stack: Next.js 16/React 19, GSAP, ScrollTrigger, Lenis. Current page has impressive prototyping components but HomeDesigns and WOW use hard-coded Unsplash media; home designs are hard-coded; public/ contains only _headers; contact form has action="#" and is intentionally non-functional. Initial branch is not production ready.

## Origin / provenance
The live site https://wolcohomes.com.au/ returned HTTP 406 to the research crawler. Do NOT claim this means the site is unavailable to clients; a complete site crawl/asset backup has not occurred. Require authorised WP/admin/hosting export or allowlisted access. Copy no third-party photography into the client's official portfolio.

Wolco's public booklet: https://fliphtml5.com/dysim/jyau/WELCOME_BOOK_%282%29/
Public WOLCO account content: https://www.findglocal.com/AU/Melbourne/645448795312135/WOLCO-HOMES
Verify builder legal footer with client directly: WOLCO GROUP VIC PTY LTD and WOLCO HOMES VIC name surfaced in ABN search, but a separate QLD WOLCO HOMES PTY LTD also exists; do not mix their registrations.
- https://abr.business.gov.au/ABN/View?id=47679260345
- https://abr.business.gov.au/ABN/View?id=84681824582

## Implementation priorities
P0 original SVG logo, exact colours, verified media rights and approved facade photos; actual 3-series designs/floorplans; real CRM / consent / contact; URL/SEO inventory + redirects; business/legal details.
P1 add real collection/detail/project/KDR/WOW content models and lead conversion.
P2 real hero film/edit, responsive WebP/AVIF, GSAP line animation, accessible transition choreography, optional WebGL only if justified.
P3 actual browser QA and CWV, security, accessibility, SEO and go-live rollback.

Guardrails: non-fabricated case studies, no production placeholders, reduced motion, colour contrast, mobile parity and actual lead-delivery tests.

Official engineering sources:
- GSAP: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP text: https://gsap.com/docs/v3/Plugins/SplitText/
- Lenis: https://motion.dev/docs/lenis
- View Transitions: https://developer.chrome.com/docs/web-platform/view-transitions/
- Cloudflare media: https://developers.cloudflare.com/stream/transform-videos/
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Google local business schema: https://developers.google.com/search/docs/appearance/structured-data/local-business

This is an isolated research branch. Do not merge or deploy without client review.