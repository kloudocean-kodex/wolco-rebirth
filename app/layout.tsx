import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RedlineProgress } from "@/components/RedlineProgress";
import { ExperienceNav } from "@/components/ExperienceNav";

const display = Cormorant_Garamond({subsets:["latin"],variable:"--font-display",weight:["400","500","600"],display:"swap"});
const sans = Manrope({subsets:["latin"],variable:"--font-sans",display:"swap"});

export const metadata: Metadata = {
  metadataBase: new URL("https://wolcohomes.com.au"),
  title:{default:"Wolco Homes — From Line to Life",template:"%s — Wolco Homes"},
  description:"Custom homes, knockdown rebuilds and house & land experiences in Melbourne. Designed with intent. Built around you.",
  openGraph:{title:"Wolco Homes — From Line to Life",description:"A new cinematic digital experience for Wolco Homes, Melbourne.",type:"website",locale:"en_AU"}
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>
    <SmoothScroll><a className="skip-link" href="#main">Skip to content</a><RedlineProgress /><ExperienceNav /><SiteHeader />{children}<SiteFooter /></SmoothScroll>
  </body></html>;
}
