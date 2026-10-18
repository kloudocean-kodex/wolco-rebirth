import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./warm-rebirth.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const display = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-normal.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-display", display: "swap", adjustFontFallback: "Times New Roman",
});
const sans = localFont({ src: "./fonts/manrope-latin-variable.woff2", weight: "200 800", variable: "--font-sans", display: "swap", adjustFontFallback: "Arial" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wolco-rebirth.pages.dev"),
  title: { default: "WOLCO Homes — From line to life", template: "%s — WOLCO Homes" },
  description: "A considered approach to home. Explore WOLCO home designs, World of Wolco and a guided building journey in Melbourne.",
  robots: { index: false, follow: false },
  openGraph: { title: "WOLCO Homes — From line to life", description: "A considered approach to home, from the first conversation to the way you live.", type: "website", locale: "en_AU", images: [{ url: "/media/generated-exterior-dusk.webp", width: 1600, height: 900, alt: "WOLCO architectural design visualisation" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-AU" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />{children}<SiteFooter />
  </body></html>;
}
