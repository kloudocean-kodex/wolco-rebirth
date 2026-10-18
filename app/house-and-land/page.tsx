import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
import {DesignImage} from "@/components/DesignImage";
export const metadata:Metadata={title:"House & Land Enquiries Melbourne",description:"Talk with WOLCO Homes about your site, preferred home design and Melbourne house-and-land opportunities. Discuss current availability directly with WOLCO."};
const pillars=[
 {n:"01",t:"Find the right setting",copy:"Your commute, community, orientation and land dimensions all influence how home can work for you."},
 {n:"02",t:"Explore a fitting home",copy:"The best starting design respects both your lifestyle and your block. WOLCO can discuss current home options."},
 {n:"03",t:"Understand the complete cost",copy:"Consider the land price, build quote, site costs and inclusions together, with the details confirmed for your actual allotment and agreement."},
];
export default function HouseAndLand(){return <BuilderPage number="07" eyebrow="THE PLACE, THEN THE POSSIBILITIES" title="A place to" italic="call yours." description="A neighbourhood to belong to. A block that suits your plans. A home that makes the most of both. Explore the land and design decisions together with WOLCO.">
  <figure className="route-visual"><DesignImage name="generated-exterior-dusk" alt="Design visualisation of a warm stone and timber home set among soft native landscaping" sizes="90vw"/><figcaption className="micro">Design visualisation</figcaption></figure>
  <section className="w-subsection"><div className="w-subsection-head"><span className="micro">CONSIDER THE COMPLETE PICTURE</span><h2>First the place.<br/><em>Then the possibilities.</em></h2><p>Whether you&apos;re considering a new allotment or investigating a location in Melbourne, the land and home design should inform one another.</p></div><div className="w-subsection-grid">{pillars.map(q=><article key={q.n}><span>{q.n}</span><h3>{q.t}</h3><p>{q.copy}</p></article>)}</div><div className="w-subsection-action"><p>Ask WOLCO and the applicable land seller to confirm current availability, estate requirements, inclusions and prices for your preferred allotment.</p><Link href="/contact/" className="route-button">Explore house & land <span aria-hidden="true">↗</span></Link></div></section>
 </BuilderPage>}
