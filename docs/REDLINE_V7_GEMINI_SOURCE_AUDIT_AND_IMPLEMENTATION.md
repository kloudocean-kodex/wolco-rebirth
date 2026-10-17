# WOLCO REDLINE V7 — Gemini Source Audit and Editorial Improvement Roadmap

Date: 2026-10-18. Review status: source-based audit and separate creative preview; NOT released.

## Examined
User-uploaded `wolco_homes_rebirth.tsx` contains 4,304 lines and roughly 173 KB, plus the Gemini conversation document and WOLCO's 12-step construction PDF.

## Critical verified source-code findings
1. **Non-functioning form**: `Contact.handleSubmit` checks only name/email then calls `setIsSubmitted(true)`. It sends **no request, email, or CRM message**, but displays a success promise. Do not merge.
2. **Unverified commercial data**: Nine home designs have precise and unsupported `priceFrom` values ($319,900 to $865,000); there are four named house-and-land packages with advertised prices and title/eligibility/status assertions. Do not publish without client data and current dated terms.
3. **Possible fabricated customer endorsements**: `TESTIMONIALS_DATA` claims named homeowners MARCUS & ELENA VANCE and ARJUN & PRIYA PATEL and links to stock Unsplash avatars. Remove until written permissions and original reviews available.
4. **False plan specificity**: `FloorplanModal` uses a shared generic 480-by-350 SVG footprint with placeholder rooms for multiple designs and a CSS mirror toggle. This is NOT an authentic architect-approved plan.
5. **Assets**: Many Unsplash images and MotionSite LUXONN external MP4/poster are used, not genuine WOLCO project evidence. Rights and provenance unverified.
6. **Monolithic client architecture**: One React client `App` with global GSAP CDN scripts, custom scrolling, legal-dialog copy and modal state. Refactor to Next.js App Router routes, server components and client animation islands.
7. **Legal and security**: Generic popup privacy/terms cannot substitute for client counsel-approved policies; no real consent, endpoint or spam protection is implemented.
8. **Accuracy**: WOLCO's own one-page 12-step source establishes step headings, consultant roles, WOW Studio touchpoints and a title-registration caveat. Gemini adds specific engineering actions and contractual promises not demonstrated by that PDF.

## V7 independent preview
Created a polished **standalone browser-reviewable** editorial visual lab in this conversation (not yet transferred to the GitHub production application): modern architectural paper and black rhythm, bolder red manifesto, giant serif typography, synthetic image + 6-second short original film marked concept-only, collection switcher for Aurelia/Elevate/Simplex, conceptual material palette, verified-titles 12-step accordion, real phone link and contact honesty.

Smoke-tested desktop 1440, tablet 768, mobile 390, JavaScript-free errors in completed checks, responsive mobile collection overflow fixed from 434 to 390px, live control interaction verified. No claim of a real iPhone Safari or Lighthouse pass.

## Recommended site development
P0 source-of-truth client asset audit and media rights, current catalogue and genuine vector/PDF plans, sales-approved prices, full current site crawl and redirect mapping.
P1 bring V7 visual system into the **existing Next.js** repo, not an unstructured mega component; build real home-catalogue routes and comparison.
P2 integrate fully working WOLCO CRM form, accessibility, WCAG, build-region flows and client-owned responsive motion/video.
P3 verify complete legal/SEO/performance and release via safe branch, with rollback and sign-off.

Source research:
- https://www.motionsite.ai/templates/modulux
- https://www.motionsite.ai/templates/interazoo
- https://www.motionsite.ai/templates/aurelia
- https://themodernhouse.com/
- https://fliphtml5.com/dysim/jyau/WELCOME_BOOK_%282%29/
- https://abr.business.gov.au/ABN/View?id=47679260345

**Production guardrail:** Do NOT replace WOLCO's verified business claims with generated user data, copy stock photos as real homes, merge an unverified prototype form or publish private test pages to search.
