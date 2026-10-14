import type {Metadata} from "next";
import Link from "next/link";
import {BuilderPage} from "@/components/BuilderPage";
export const metadata:Metadata={title:"WOW Studio | World of Wolco",description:"Discover World of Wolco, the selection experience for finishes, cabinetry, tapware, flooring and other home details."};
const elements=[
 {n:"01",title:"Surfaces",desc:"Benchtops, stone, surfaces and the way light reveals every texture.",img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=82"},
 {n:"02",title:"Cabinetry",desc:"Profiles, joinery and considered spatial storage.",img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1300&q=82"},
 {n:"03",title:"Interior finishes",desc:"Flooring, tapware, lighting and interior selections in harmony.",img:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=82"},
];
export default function Page(){return <BuilderPage number="03" eyebrow="WORLD OF WOLCO / WOW STUDIO" title="The art of" italic="every detail." description="A dedicated place to bring the home's materials, surfaces and interior language together. The most exciting decisions deserve to be experienced, not just selected from a catalogue.">
 <section className="material-gallery">{elements.map(e=><article className="material-entry" key={e.n}><div style={{backgroundImage:`url('${e.img}')`}} className="material-image" role="img" aria-label="Interior material mood photography"/><div><span className="micro">{e.n} / MATERIAL EXPLORATION</span><h2>{e.title}</h2><p>{e.desc}</p><small>Illustrative mood photography. Current WOLCO selections subject to confirmation.</small></div></article>)}</section>
 <section className="editorial-quote"><span className="micro">WORLD OF WOLCO</span><h2>Not just what a home <em>looks like.</em><br/>How it <em>feels.</em></h2><Link className="route-button" href="/contact/">ASK ABOUT WOW STUDIO <span>↗</span></Link></section></BuilderPage>}