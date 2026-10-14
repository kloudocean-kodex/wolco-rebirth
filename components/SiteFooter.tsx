import Link from "next/link";
import {wolco} from "@/content/wolco";
export function SiteFooter(){
 return <footer className="site-footer">
  <div className="footer-word" aria-hidden="true">WOLCO<span className="footer-dot">.</span></div>
  <div className="footer-grid">
   <div><span className="footer-label">THE WOLCO EXPERIENCE</span><p>Considered architecture.<br/>Extraordinary living.</p></div>
   <div><span className="footer-label">DISCOVER</span><Link href="/home-designs/">Home designs</Link><Link href="/knockdown-rebuild/">Knockdown rebuild</Link><Link href="/world-of-wolco/">World of WOLCO</Link><Link href="/build-journey/">Build journey</Link></div>
   <div><span className="footer-label">LET&apos;S TALK</span><a href={wolco.phoneHref}>{wolco.phoneDisplay}</a><Link href="/contact/">Plan your home ↗</Link><p>9/28 Longford Road<br/>Epping VIC 3076</p></div>
  </div>
  <div className="footer-base"><span>© {new Date().getFullYear()} WOLCO HOMES</span><span>THE NEXT CHAPTER STARTS HERE.</span><span>CREATIVE REBUILD PREVIEW · NOT THE LIVE WEBSITE</span></div>
 </footer>;
}