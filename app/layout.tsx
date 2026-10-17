import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./warm-rebirth.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RedlineProgress } from "@/components/RedlineProgress";
import { ExperienceNav } from "@/components/ExperienceNav";

const display = Cormorant_Garamond({subsets:["latin"],variable:"--font-display",weight:["400","500","600"],display:"swap"});
const sans = Manrope({subsets:["latin"],variable:"--font-sans",display:"swap"});

export const metadata: Metadata = {
  metadataBase: new URL("https://wolcohomes.com.au"),
  title:{default:"WOLCO Homes — A New Perspective on Home",template:"%s — WOLCO Homes"},
  description:"Explore WOLCO Homes Melbourne — considered home designs, knockdown rebuild and the World of Wolco selection experience. A home shaped around your life.",
  robots:{index:false,follow:false},
  openGraph:{title:"WOLCO Homes — A New Perspective on Home",description:"A considered architectural home-building experience in Melbourne.",type:"website",locale:"en_AU"}
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>
    <SmoothScroll><a className="skip-link" href="#main">Skip to content</a><RedlineProgress /><ExperienceNav /><SiteHeader />{children}<SiteFooter /></SmoothScroll>
  </body></html>;
}
