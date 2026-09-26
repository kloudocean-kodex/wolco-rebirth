"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const designs=[
  {
    number:"01",
    type:"AURELIA SERIES",
    title:"Elegance,\nconsidered.",
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85",
    meta:"LUXURIOUS HOMES · ELEGANCE · SOPHISTICATION",
    copy:"A refined Wolco collection built around comfort, proportion and considered detail."
  },
  {
    number:"02",
    type:"ELEVATE SERIES",
    title:"Modern living,\nraised.",
    image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85",
    meta:"MODERN DESIGN · REFINED LUXURY · SPACIOUS LAYOUTS",
    copy:"A contemporary series balancing sleek finishes, generous space and everyday function."
  },
  {
    number:"03",
    type:"SIMPLEX SERIES",
    title:"Simple by design.\nNever ordinary.",
    image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
    meta:"EFFICIENCY · PRACTICAL DESIGN · VALUE",
    copy:"Thoughtful, efficient layouts designed to keep quality and usability at the centre."
  }
];

export function HomeDesigns(){
  const root=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const mm=gsap.matchMedia();
    const ctx=gsap.context(()=>{mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)",()=>{
      if(!root.current||!track.current)return;
      const distance=()=>Math.max(0,track.current!.scrollWidth-window.innerWidth);
      gsap.to(track.current,{x:()=>-distance(),ease:"none",scrollTrigger:{trigger:root.current,start:"top top",end:()=>`+=${distance()+window.innerHeight*.72}`,scrub:.8,pin:true,invalidateOnRefresh:true}});
      gsap.utils.toArray<HTMLElement>(".design-panel").forEach((panel)=>{
        const image=panel.querySelector(".design-image");
        const copy=panel.querySelector(".design-copy");
        gsap.fromTo(image,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:panel,containerAnimation:ScrollTrigger.getById("designTrack")?.animation,start:"left right",end:"right left",scrub:true}});
        if(copy) gsap.from(copy,{opacity:0,y:18,duration:.8,scrollTrigger:{trigger:panel,start:"left 65%" }});
      });
    })},root);
    return()=>{mm.revert();ctx.revert()};
  },[]);
  return <section ref={root} id="designs" className="designs surface-black">
    <div className="section-head">
      <div className="eyebrow row-between"><span>02 / HOME COLLECTIONS</span><span>WOLCO SPECIFICATION SERIES</span></div>
      <h2 className="display-lg">Three ways to begin.<br/>One standard of intent.</h2>
    </div>
    <div ref={track} className="design-track">{designs.map(d=><article className="design-panel" key={d.number}>
      <div className="design-image" style={{backgroundImage:`url("${d.image}")`}}/><div className="design-overlay"/>
      <div className="design-number">{d.number}</div><div className="design-type">{d.type}</div>
      <div className="design-copy"><h3>{d.title.split("\n").map(l=><span key={l}>{l}<br/></span>)}</h3><p>{d.copy}</p></div>
      <div className="design-meta">{d.meta}</div><a href="#start" className="design-cta">EXPLORE THE SERIES <span>↗</span></a>
    </article>)}</div>
  </section>;
}
