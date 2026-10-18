# WOLCO / REDLINE

**From line to life.** An architectural design preview for WOLCO Homes, Melbourne.

The experience connects considered home design, personal material choices and WOLCO's published pre-construction journey. Original WOLCO branding, a coherent set of generated design visualisations and restrained crimson linework bring the story together.

## Run and verify

Node 20.9 or newer is required.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm audit --omit=dev
```

`npm run build` creates a static export in `out/`. This can be hosted on Cloudflare Pages. Development uses `.next-dev/`; production builds use `.next/` so browser review and builds can run independently.

## Experience

- Thirteen content routes, including three collection details, and a branded 404.
- Native modal menu, keyboard access and reduced-motion support.
- Responsive local WebP images in 640, 960 and 1600px versions.
- Interactive collection and material studies.
- Twelve native journey disclosures and contact FAQs.
- A silent, explicitly controlled WOLCO project film, plus a separate generated courtyard arrival clip.
- Local enquiry brief with validation, review, editing, download and an explicit email draft. The preview does not submit leads.

## Content and release boundary

Architectural images are new WOLCO-exclusive concept visualisations, not completed WOLCO builds or confirmed collection plans. The primary film is a silent edit of genuine WOLCO-supplied Cookes Road project footage. The arrival clip is a separate generated concept. Their purpose is explained at `/visual-studies/` and recorded in `docs/asset-provenance/exclusive-v2/`.

Staging remains `noindex,nofollow`. Final business/legal terms, media rights, catalogue specifications, the actual receiving lead system, migration redirects and client release approval remain distinct production requirements.

See [the refinement audit](docs/REDLINE_REFINEMENT_2026-10-18.md) for source findings, implementation and verification boundaries. Historical art-direction notes are retained for context; they do not override the current implementation or final release evidence.
