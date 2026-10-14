import type {MetadataRoute} from "next";
/** STAGING ONLY: fail closed until original redirects, assets, copy and legal identity pass sign-off. */
export const dynamic="force-static";
export default function robots():MetadataRoute.Robots{
 return {rules:{userAgent:"*",disallow:"/"},sitemap:undefined};
}
