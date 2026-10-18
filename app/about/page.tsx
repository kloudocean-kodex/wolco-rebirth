import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
import {DesignImage} from "@/components/DesignImage";
export const metadata:Metadata={title:"About WOLCO Homes Melbourne",description:"Discover WOLCO Homes' approach to considered home design, World of Wolco selection experience and the guided building journey."};
export default function About(){return <BuilderPage number="08" eyebrow="THE WOLCO APPROACH" title="Homes begin" italic="with people." description="The way you live comes first. Explore WOLCO's approach to home design, the World of Wolco selection experience and a guided path from the first proposal towards construction.">
 <figure className="route-visual"><DesignImage name="wolco-courtyard-gather" alt="Generated design visualisation of a courtyard kitchen with timber joinery and a squared stone island" sizes="90vw"/><figcaption className="micro">Design visualisation</figcaption></figure>
 <section className="w-subsection"><div className="w-subsection-head"><span className="micro">THE WOLCO PHILOSOPHY</span><h2>Every decision.<br/><em>With purpose.</em></h2><p>Design choices should have purpose. Materials should work together. And the path from the initial proposal to construction should feel understandable.</p></div>
 <div className="w-subsection-grid">
  <article><span>01 / DESIGN</span><h3>Architecture that belongs.</h3><p>Consider your site, your everyday life, and the details that make a space feel personal.</p></article>
  <article><span>02 / MATERIALS</span><h3>World of Wolco.</h3><p>WOLCO&apos;s WOW selection appointments bring interior and exterior decisions into a shared conversation.</p></article>
  <article><span>03 / PROCESS</span><h3>Clarity at each stage.</h3><p>The WOLCO 12-step pre-construction guide provides a published roadmap for important appointments and approvals.</p></article>
 </div>
 <div className="w-subsection-action"><Link href="/build-journey/" className="route-button">View the building journey <span aria-hidden="true">↗</span></Link></div>
 </section></BuilderPage>}
