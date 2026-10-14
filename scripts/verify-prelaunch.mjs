/**
 * WOLCO REDLINE readiness guard.
 * Reports blockers without failing an ordinary prototype build.
 * Strict production checks: node scripts/verify-prelaunch.mjs --strict
 * This is not a replacement for manual content, browser and security QA.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const strict = process.argv.includes("--strict") || process.env.WOLCO_PRODUCTION_GATE === "1";
const issues = [];
const repoRoot = process.cwd();
const files = [
  "components/HomeDesigns.tsx",
  "components/WowStudio.tsx",
  "components/ProjectArchive.tsx",
  "components/RedlineHero.tsx",
  "components/StartConversation.tsx",
];
const push = (level, source, description) => issues.push({ level, source, description });
for (const file of files) {
  const abs = resolve(repoRoot, file);
  if (!existsSync(abs)) { push("blocking", file, "Missing expected component"); continue; }
  const body = readFileSync(abs, "utf8");
  if (/images\.unsplash\.com/.test(body)) push("blocking", file, "Prototype stock-image hotlinks require approved media replacement");
  if (/action=["']#["']/.test(body)) push("blocking", file, "Form posts to # instead of validated live CRM endpoint");
  if (/prototype\s+form|temporary\s+imagery|placeholder\s+phone/i.test(body)) push("review", file, "Explicit prototype disclosure/placeholder requires content approval");
}
const requirements = [
  ["content/wolco-approved-assets.json", "Media rights and project provenance manifest not yet checked in"],
  ["content/wolco-verified-projects.json", "Verified completed project/story dataset missing"],
  ["content/wolco-home-designs.json", "Approved Home Designs and floorplan data missing"],
  ["docs/LAUNCH_SIGNOFF.md", "Signed launch checklist and rollback decision missing"],
];
for (const [file, message] of requirements) {
  if (!existsSync(resolve(repoRoot,file))) push("blocking",file,message);
}
if (!process.env.WOLCO_CONTACT_ENDPOINT) push("blocking", "environment", "WOLCO_CONTACT_ENDPOINT is not configured in this QA environment");
const blocked = issues.filter(x=>x.level==="blocking");
console.log(JSON.stringify({ project:"WOLCO REDLINE", mode: strict?"production-strict":"prototype-report", blockers:blocked.length, issues },null,2));
if(strict && blocked.length) { console.error("PRELAUNCH BLOCKED: resolve all blockers before production."); process.exitCode = 1; }
