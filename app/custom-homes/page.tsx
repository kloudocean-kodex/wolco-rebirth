import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
import {DesignImage} from "@/components/DesignImage";
export const metadata:Metadata={title:"Custom Homes Melbourne",description:"Explore a considered custom-home building journey with WOLCO Homes Melbourne. Start with your land, your lifestyle and your vision."};
const questions=[
 {n:"01",t:"The way you live",d:"The everyday rituals, the spaces you love, the ones you wish worked differently and how home should feel."},
 {n:"02",t:"The place you build",d:"Existing land, new land or a knockdown-rebuild site. Setbacks, orientation and local requirements inform the possibilities."},
 {n:"03",t:"The details that last",d:"Considered materials, thoughtful proportion and the interior selections that give the spaces their character."},
 {n:"04",t:"The path ahead",d:"Explore WOLCO's home-design conversations, proposal stage and World of Wolco selection appointments."},
];
export default function CustomHomes(){return <BuilderPage number="06" eyebrow="INDIVIDUALITY, BUILT IN" title="Made for" italic="your life." description="The difference between a house and your home begins with listening. Explore the ideas, site conditions and choices that shape a personalised building conversation.">
  <figure className="route-visual"><DesignImage name="generated-living" alt="Design visualisation of a calm living room with warm natural materials and garden views" sizes="90vw"/><figcaption className="micro">Design visualisation</figcaption></figure>
  <section className="w-subsection"><div className="w-subsection-head"><span className="micro">THE PERSONAL BUILDING BRIEF</span><h2>A personal brief.<br/><em>A considered home.</em></h2><p>Bring your architectural inspiration, practical needs and questions. Explore the possibilities with WOLCO&apos;s team, with every variation and design decision considered for your actual project.</p></div><div className="w-subsection-grid grid-four">{questions.map(q=><article key={q.n}><span>{q.n}</span><h3>{q.t}</h3><p>{q.d}</p></article>)}</div><Link href="/contact/" className="route-button">Start your design conversation <span aria-hidden="true">↗</span></Link></section>
 </BuilderPage>}
