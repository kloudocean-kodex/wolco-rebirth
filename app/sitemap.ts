import type {MetadataRoute} from "next";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
 const root="https://wolco-rebirth.pages.dev";
 const slugs=["/","/home-designs/","/home-designs/aurelia/","/home-designs/elevate/","/home-designs/simplex/","/knockdown-rebuild/","/custom-homes/","/house-and-land/","/about/","/world-of-wolco/","/build-journey/","/contact/","/visual-studies/"];
 return slugs.map((p,i)=>({url:root+p,lastModified:new Date("2026-10-18"),changeFrequency:i===0?"weekly" as const:"monthly" as const,priority:i===0?1:i<5?.8:.7}));
}
