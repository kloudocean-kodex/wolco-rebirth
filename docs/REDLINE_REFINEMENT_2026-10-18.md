# WOLCO / REDLINE refinement — 18 October 2026

This records implementation and source-level findings. It does not replace the root session's final deployed browser evidence or production sign-off.

## Source audit and resulting changes

| Finding | Refinement |
| --- | --- |
| `ExperienceNav` linked to six IDs absent from the active homepage. | Removed the broken global rail. The homepage has working chapter IDs and direct route links. |
| Header imitated the WOLCO logo in HTML/CSS. | Replaced it with the original WOLCO artwork, retaining its red lettering, yellow block and black HOMES line. Added the original icon. |
| Home, services and old components shared contradictory black/warm styles and repeated optical-size patches. | Replaced active global and home CSS with one considered parchment/stone/crimson editorial system, including every current service route. |
| The hero and legacy GSAP components could leave content invisible after navigation. | Server-rendered visible content; no hidden animation defaults. Native scrolling. No active GSAP/Lenis dependency. |
| Menu lacked a focus trap, and global scrolling ignored reduced-motion preferences. | Native modal dialog provides focus containment and Escape. Page scroll locks while open and restores on close. Reduced motion disables smooth scrolling and transitions. |
| Remote stock-image hotlinks, no responsive local media. | Four coherent generated visualisations, locally hosted at 640/960/1600px; semantic picture sources, descriptive alternatives, lazy below-fold images and explicit media captions. |
| Imagery was repeatedly described with developer/process disclaimers. | Short visualisation captions and one useful imagery page. No invented completed projects, room counts, prices, awards or reviews. |
| Material study was an abstract CSS room. | Tactile concept image plus three interactive tone studies with material samples and announced state. |
| Collapsing the last journey step showed 00/12. | Replaced custom accordion with native details/summary, preserving the published twelve-step chronology and all content without JavaScript. |
| Contact page exposed implementation blockers to visitors. | Clear call/maps/appointment paths, FAQs and an honest local enquiry-brief workflow. Validated brief → review/edit → text download or explicit email draft. Nothing is represented as submitted. |
| No custom recovery page and staging metadata referenced the production domain. | Branded 404, staging metadata/sitemap, and persistent noindex/nofollow. |

## Art direction and story

REDLINE remains distinct: the original crimson architectural line is the connective device. The sequence is arrival → how people live → three collection directions → the red thread → tactile choices → different building paths → the published journey → a quiet film moment → a personal conversation.

Cormorant Garamond and Manrope are self-hosted by Next's font pipeline. Warm parchment, restrained crimson, thin rules and considered spacing form the visual language. Mobile layouts are intentionally recomposed, with vertical collections, full-width photography, two-column process phases and a single-column enquiry review.

## Functional inventory

- Home + three collection details + collection index.
- Custom homes, knockdown rebuild, house & land, about, World of Wolco, building journey, contact, image notes and 404.
- Primary/footer/menu navigation; chapter link; all collection selection buttons and links.
- Three material tone selections on home and WOW page.
- Twelve native process disclosures and four native FAQ disclosures.
- Film play/pause, with no autoplay, no audio, preload disabled, pause offscreen and on hidden tab.
- Native required/email/length/pattern form validation; local review/edit/download; explicit mailto draft; telephone and Google Maps destinations.
- Details remain only in React component state. No localStorage, analytics, third-party form delivery or fabricated success.

## Verification completed in the implementation session

- Initial production build passed and generated all static routes.
- Two ESLint runs passed without warnings.
- `npm audit --omit=dev --json`: zero vulnerabilities.
- Full npm audit: five high findings, all from the ESLint development chain through `braces <=3.0.3`. Registry inspection returned `3.0.3` as the latest braces release. Do not blindly downgrade Next's ESLint package to 14.x; runtime/static output is unaffected by this development-only chain. Track a supported upstream fix.
- Reproducible package lock added. Next dev and production use separate build directories so browser QA can continue while production is rebuilt.

Final changes require a fresh lint/build and the root session's desktop/mobile browser and deployed-route verification. Those results belong in the release evidence, not inferred from the source build.

## Asset and launch boundary

Only original public brand artwork and the newly generated concept assets were copied into this repository. No private Dropbox shoot, address-bearing homeowner media or unapproved floorplans were published.

The existing sourced phone/address and collection labels remain; final business/legal terms, actual home specifications, original project media and an end-to-end lead endpoint are production responsibilities. This is a fully functional design preview, not an assertion of an approved production migration. Keep noindex until the final content/rights/legal/migration approval and release checks.

The final film has now been replaced with the inspected genuine Gemini-generated architectural video. The original still-based motion study MP4 and poster were removed from deployed assets. A user-initiated hero background reuses the same genuine film without an initial video download. Both playback placements provide pause controls and pause offscreen/on hidden tab. Film notes and provenance were updated.

## Expanded pre-release pass

The active13-route source and rendered export were reviewed again. Removed a house-and-land metadata promise of verification and repeated about-page headline wording. The knockdown introduction now gives a concrete site conversation rather than a speculative assurance. No prices, measured floorplans, testimonials, awards, completed-project claims, developer placeholder wording or remote image sources are present in the active presentation.

True Cormorant Garamond italic font files are now requested for editorial emphasis, rather than relying on a browser-synthesised slant. Responsive source inspection covered key boundaries from320 to1920px, added min-width protections to grid children, and confirmed that document overflow is not simply hidden. This is CSS/source inspection; visual rendering remains a separate root Edge gate.

The enquiry brief fails closed before hydration: its native fieldset is disabled in server HTML and a no-JavaScript direct-contact fallback is present. This prevents a no-JavaScript browser from accidentally submitting personal fields in a default native form request. Download wording now states that the brief is ready to save, without claiming a completed browser download.

Menu highlighting normalises trailing slashes and closes on route changes. Film promise aborts caused by pausing/offscreen changes no longer display a false unavailable message. The hero loading control also has a bounded fallback.

The final lower chapter currently uses the inspected genuine19.42-second Arrival → Gather edit from two Gemini-generated clips; the hero keeps the genuine10-second exterior clip. No material or living moving footage is claimed by this build. These names/provenance may change only when further genuine clips are actually received and inspected.

A Next16.4 development-only Turbopack font resolver failure appeared after adding true italic styles. The production build remained successful. The broken development server was stopped; browser QA was moved to an immutable copy of the exact exported site at localhost3202 with byte-range support and a real404. The initial development failure is preserved in dev-font-error-diagnostic.json; the production-export HTTP evidence is separate.

Latest implementation checks: lint and production build pass; static export16HTML/31referenced assets/zero issues; all13content routes return200; unknown routes return404; both genuine MP4s return206for byte-range requests; all16deployed media files match the inspected shared source assets byte-for-byte. Evidence is under docs/implementation-evidence. These checks do not assert final Cloudflare/browser acceptance.

### Browser-discovered collection sizing defect

The root's actual Edge checks found collection-index overflow at320/390px despite the earlier source-only grid inspection. The mobile image's1.1aspect ratio and400px minimum height implied a440px width within an automatic grid track. Source refinement now sets zero-minimum grid tracks, explicit100% bounded photo width and a mobile height without an aspect-ratio constraint. No document overflow hiding was added. This fix requires a refreshed exported snapshot and the root's breakpoint recheck; CSS inference is not browser evidence.

The root also measured a muted-text contrast ratio of4.34on the possibilities background. Muted ink is now#5c5d53, calculated4.98on that surface and5.13–6.45across the other solid neutral surfaces. Enquiry control boundaries now exceed3:1against their actual paper fill. Root's refreshed browser accessibility check remains required.
