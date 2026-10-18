import Link from "next/link";
import Image from "next/image";
import { wolco } from "@/content/wolco";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main"><div className="footer-brand"><Link href="/" aria-label="WOLCO Homes — home"><Image src="/brand/wolco-original-logo.webp" width={606} height={286} alt="WOLCO Homes" unoptimized /></Link><p>From the first line.<br/>To a life that feels like yours.</p><span className="micro">Melbourne, Victoria</span></div>
      <nav aria-label="Footer — discover"><span className="footer-label">Discover</span><Link href="/home-designs/">Home designs</Link><Link href="/custom-homes/">Custom homes</Link><Link href="/knockdown-rebuild/">Knockdown rebuild</Link><Link href="/house-and-land/">House & land</Link></nav>
      <nav aria-label="Footer — WOLCO"><span className="footer-label">The experience</span><Link href="/world-of-wolco/">World of Wolco</Link><Link href="/build-journey/">The building journey</Link><Link href="/about/">About WOLCO</Link><Link href="/visual-studies/">About the imagery</Link></nav>
      <div className="footer-contact"><span className="footer-label">Begin here</span><a href={wolco.phoneHref}>{wolco.phoneDisplay} ↗</a><p>{wolco.address[0]}<br/>{wolco.address[1]}</p><Link href="/contact/">Plan a conversation ↗</Link></div>
    </div>
    <div className="footer-signoff" aria-hidden="true">From line <em>to life.</em><svg viewBox="0 0 320 70"><path d="M0 55H62V30H112L155 5H244V55H320M112 30V55M155 5V55M244 5V55" /></svg></div>
    <div className="footer-base"><span>© {new Date().getFullYear()} WOLCO Homes</span><span>Design preview</span><Link href="/visual-studies/">Design visualisations · Learn more ↗</Link></div>
  </footer>;
}
