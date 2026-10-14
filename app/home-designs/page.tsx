import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
import {collections} from "@/content/wolco";
export const metadata:Metadata={title:"Home Designs",description:"Explore WOLCO's Aurelia, Elevate and Simplex collections. Custom home designs, personalised around how you live."};
export default function Page(){return <BuilderPage number="01" eyebrow="THE HOME COLLECTIONS" title="Designs worth" italic="living in." description="A considered starting point, not the end of your imagination. Explore WOLCO's three home collections and enquire about real plans, facades and available specifications.">
 <section className="collections-grid">{collections.map((c,i)=><article className="collection-feature" key={c.slug}>
   <div className="collection-photo" style={{backgroundImage:`linear-gradient(0deg,rgba(10,9,9,.4),rgba(10,9,9,.05)),url('${c.image}')`}} role="img" aria-label="Illustrative architectural design mood image"/>
   <div className="collection-text"><span className="micro">{String(i+1).padStart(2,"0")} / WOLCO COLLECTION</span><h2>{c.name}</h2><p>{c.description}</p><Link className="route-button" href={`/home-designs/${c.slug}/`}>EXPLORE COLLECTION <span>↗</span></Link><span className="visual-source">{c.imageCredit}</span></div>
 </article>)}</section></BuilderPage>}