import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
export const metadata:Metadata={title:"House & Land Enquiries Melbourne",description:"Talk with WOLCO Homes about your site, preferred home design and Melbourne house-and-land opportunities. Availability verified on enquiry."};
const pillars=[
 {n:"01",t:"Find the right setting",copy:"Your commute, community, orientation and land dimensions all influence how home can work for you."},
 {n:"02",t:"Explore a fitting home",copy:"The best starting design respects both your lifestyle and your block. WOLCO can discuss current home options."},
 {n:"03",t:"Confirm the real numbers",copy:"Land price, build quote, site costs and inclusions must be checked for the actual allotment, date and contract."},
];
export default function HouseAndLand(){return <BuilderPage number="07" eyebrow="THE PLACE, THEN THE POSSIBILITIES" title="A place to" italic="call yours." description="Explore home and land decisions together, with care. This page offers an enquiry path rather than displaying packages or prices that have not been verified with WOLCO.">
  <section className="w-subsection"><div className="w-subsection-head"><span className="micro">CONSIDER THE COMPLETE PICTURE</span><h2>First the place.<br/><em>Then the possibilities.</em></h2><p>Whether you&apos;re considering a new allotment or investigating a location in Melbourne, the land and home design should inform one another.</p></div><div className="w-subsection-grid">{pillars.map(q=><article key={q.n}><span>{q.n}</span><h3>{q.t}</h3><p>{q.copy}</p></article>)}</div><div className="w-subsection-action"><p>Current land availability, estate approvals, package inclusions and prices must be verified directly with WOLCO and the applicable land seller.</p><Link href="/contact/" className="route-button">ENQUIRE ABOUT HOUSE & LAND ↗</Link></div></section>
 </BuilderPage>}