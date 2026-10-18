import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections } from "@/content/wolco";
import { DesignImage } from "@/components/DesignImage";

export function generateStaticParams() { return collections.map(collection => ({ slug: collection.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const collection = collections.find(item => item.slug === slug); return { title: collection ? `${collection.name} collection` : "Home designs", description: collection?.description }; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find(item => item.slug === slug);
  if (!collection) notFound();
  return <main id="main" className="builder-route"><section className="collection-detail-hero"><DesignImage name={collection.media} alt={collection.alt} priority sizes="100vw"/><div className="collection-detail-copy"><span className="micro">WOLCO / {collection.eyebrow}</span><h1>{collection.name}<br/><em>Collection.</em></h1><p>{collection.headline}</p><span className="visual-source">{collection.imageCredit}</span></div></section><section className="detail-content"><div><span className="micro">A direction to make your own</span><h2>Make space<br/>for <em>your story.</em></h2></div><div><p>{collection.description}</p><p>Start with your site, your wish list and the way you live. Ask the WOLCO team for the current {collection.name} plans, facade choices and inclusions, and explore how they relate to your block.</p><p className="fine-print">The imagery sets a design direction. It does not depict a confirmed {collection.name} plan or a completed WOLCO build.</p><Link className="route-button" href="/contact/">Discuss {collection.name} <span aria-hidden="true">↗</span></Link><Link className="route-back" href="/home-designs/">← View all collections</Link></div></section><section className="detail-topics" aria-label="Plan your collection conversation">{[{title:"Your site",copy:"Bring the address or block dimensions, orientation and any information about the land."},{title:"Your way of living",copy:"Think about the rooms, daily routines and future needs your home should support."},{title:"Your personal details",copy:"Explore facade direction, materials and finishes with the team at World of Wolco."}].map((item,index)=><article key={item.title}><span className="micro">0{index+1} / Consider</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</section></main>;
}
