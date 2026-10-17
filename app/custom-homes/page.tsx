import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
export const metadata:Metadata={title:"Custom Homes Melbourne",description:"Explore a considered custom-home building journey with WOLCO Homes Melbourne. Start with your land, your lifestyle and your vision."};
const questions=[
 {n:"01",t:"The way you live",d:"The everyday rituals, the spaces you love, the ones you wish worked differently and how home should feel."},
 {n:"02",t:"The place you build",d:"Existing land, new land or a knockdown-rebuild site. Setbacks, orientation and local requirements inform the possibilities."},
 {n:"03",t:"The details that last",d:"Considered materials, thoughtful proportion and the interior selections that give the spaces their character."},
 {n:"04",t:"The path ahead",d:"Explore WOLCO's home-design conversations, proposal stage and World of Wolco selection appointments."},
];
export default function CustomHomes(){return <BuilderPage number="06" eyebrow="INDIVIDUALITY, BUILT IN" title="Made for" italic="your life." description="The difference between a house and your home begins with listening. Explore the ideas, site conditions and choices that shape a personalised building conversation.">
  <section className="w-subsection"><div className="w-subsection-head"><span className="micro">THE PERSONAL BUILDING BRIEF</span><h2>Not simply different.<br/><em>Distinctly yours.</em></h2><p>Bring your architectural inspiration, practical needs and questions. We will help you explore the options with WOLCO&apos;s team. Availability, variations and buildability are assessed for your actual project.</p></div><div className="w-subsection-grid">{questions.map(q=><article key={q.n}><span>{q.n}</span><h3>{q.t}</h3><p>{q.d}</p></article>)}</div><Link href="/contact/" className="route-button">START YOUR DESIGN CONVERSATION ↗</Link></section>
 </BuilderPage>}