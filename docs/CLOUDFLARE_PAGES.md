# Cloudflare Pages deployment — Wolco Rebirth

## Current preview / production-development branch

Use the REDLINE working branch until visual approval:

- Project name: `wolco-rebirth`
- Production branch: `feat/redline-rebirth`
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`
- Root directory: leave blank
- Environment variables: none required for the current static build

The repository's `next.config.ts` has `output: "export"`, so `next build` generates the `out/` directory Cloudflare Pages expects.

## Later production cutover

When the build is approved and merged:
1. Change Cloudflare's production branch from `feat/redline-rebirth` to `main`.
2. Keep the same framework preset / build command / output directory.
3. Add the final custom domain only after production QA.
