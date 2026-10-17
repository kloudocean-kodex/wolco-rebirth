import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
export const metadata:Metadata={title:"About WOLCO Homes Melbourne",description:"Discover WOLCO Homes' approach to considered home design, World of Wolco selection experience and the guided building journey."};
export default function About(){return <BuilderPage number="08" eyebrow="BEYOND THE EXPECTED" title="More than" italic="a builder." description="We believe the making of a home deserves the same care as the home itself. This is the WOLCO design and building experience, from first conversation to handover.">
 <section className="w-subsection"><div className="w-subsection-head"><span className="micro">THE WOLCO PHILOSOPHY</span><h2>Homes begin<br/><em>with people.</em></h2><p>Design choices should have purpose. Materials should work together. And the path from the initial proposal to construction should feel understandable.</p></div>
 <div className="w-subsection-grid">
  <article><span>01 / DESIGN</span><h3>Architecture that belongs.</h3><p>Consider your site, your everyday life, and the details that make a space feel personal.</p></article>
  <article><span>02 / MATERIALS</span><h3>World of Wolco.</h3><p>WOLCO's WOW selection appointments bring interior and exterior decisions into a shared conversation.</p></article>
  <article><span>03 / PROCESS</span><h3>Clarity at each stage.</h3><p>The WOLCO 12-step pre-construction guide provides a published roadmap for important appointments and approvals.</p></article>
 </div>
 <div className="w-subsection-action"><Link href="/build-journey/" className="route-button">VIEW THE BUILDING JOURNEY ↗</Link></div>
 </section></BuilderPage>}