import Link from "next/link";
const notes=[
 {n:"01",location:"WOLLERT",date:"16 SEP 2026",stage:"THE FOUNDATION",description:"WOLCO publicly shared a slab-stage progress update for a new home in Wollert."},
 {n:"02",location:"KALKALLO",date:"01 SEP 2026",stage:"THE HANDOVER",description:"WOLCO publicly shared a home-handover update for a client in Kalkallo."},
];
export function ProjectArchive(){
 return <section id="projects" className="projects-recast surface-ivory">
   <div className="eyebrow row-between"><span>05 / ACTUAL BUILD MILESTONES</span><span>PUBLICLY SHARED BY WOLCO · 2026</span></div>
   <h2 className="display-lg">The work <em>behind</em><br/>the welcome home.</h2>
   <div className="projects-proof-grid">{notes.map(n=><article key={n.n}><div className="proof-stage-number">{n.n}</div><span className="micro">{n.date}</span><h3>{n.location}</h3><span className="micro red-copy">{n.stage}</span><p>{n.description}</p></article>)}</div>
   <p className="projects-disclosure">Authentic milestones documented in WOLCO public updates. Original client-owned project photography and complete case studies are being sourced. No unrelated images are presented as WOLCO-built homes.</p>
   <Link href="/contact/" className="text-link">START YOUR OWN BUILD ↗</Link>
 </section>;
}