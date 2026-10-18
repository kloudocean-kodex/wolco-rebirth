import type { Metadata } from "next";
import Link from "next/link";
import { BuilderPage } from "@/components/BuilderPage";
import { DesignImage } from "@/components/DesignImage";
import { collections } from "@/content/wolco";

export const metadata: Metadata = { title: "Home designs", description: "Explore WOLCO's Aurelia, Elevate and Simplex home collections. Find a direction for the way you want to live." };
export default function Page() {
  return <BuilderPage number="01" eyebrow="The home collections" title="Your life." italic="Your starting point." description="A considered beginning, with room for your own story. Explore three WOLCO collections, then talk with the team about plans, facades and options for your site."><section className="collections-grid">{collections.map((collection, index) => <article className="collection-feature" key={collection.slug}><DesignImage name={collection.media} alt={collection.alt} className="collection-photo"/><div className="collection-text"><span className="micro">0{index + 1} / {collection.eyebrow}</span><h2>{collection.name}</h2><p>{collection.description}</p><Link className="text-link" href={`/home-designs/${collection.slug}/`}>Explore the collection <span aria-hidden="true">↗</span></Link><span className="visual-source">{collection.imageCredit}</span></div></article>)}</section></BuilderPage>;
}
