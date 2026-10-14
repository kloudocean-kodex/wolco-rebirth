import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {collections} from "@/content/wolco";
export function generateStaticParams(){return collections.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=collections.find(c=>c.slug===slug);return {title:c?`${c.name} Home Designs`:"Home Designs",description:c?.description};}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const c=collections.find(c=>c.slug===slug);if(!c)notFound();
 return <main id="main" className="builder-route"><section className="collection-detail-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(9,8,8,.8),rgba(9,8,8,.08)),url('${c.image}')`}}>
 <span className="micro">{c.eyebrow} / WOLCO HOMES</span><h1>{c.name}<br/><em>Collection.</em></h1><p>{c.headline}</p><span className="visual-source">{c.imageCredit}</span></section>
 <section className="detail-content"><div><span className="micro">DESIGNED AROUND YOU</span><h2>Make space for <em>your story.</em></h2></div><div><p>{c.description}</p><p>Floorplans, home dimensions, facade variants, room counts and current inclusions must be obtained from WOLCO's approved collection catalogue. We intentionally do not invent these specifications.</p><Link className="route-button" href="/contact/">ENQUIRE ABOUT {c.name.toUpperCase()} <span>↗</span></Link><Link className="route-back" href="/home-designs/">← All collections</Link></div></section></main>;
}