"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const designs=[
{number:"01",type:"SINGLE STOREY",title:"Quiet confidence,\nall on one level.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85",meta:"DESIGNED FOR FLOW · LIGHT · EVERYDAY LIFE"},
{number:"02",type:"DOUBLE STOREY",title:"More space.\nMore possibility.",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85",meta:"ARCHITECTURE THAT GROWS WITH YOU"},
{number:"03",type:"CUSTOM / KDR",title:"Your site.\nEntirely reimagined.",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",meta:"FROM BRIEF TO BESPOKE HOME"}];
export function HomeDesigns(){
  const root=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const mm=gsap.matchMedia();
    const ctx=gsap.context(()=>{mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)",()=>{
      if(!root.current||!track.current)return;
      const distance=()=>Math.max(0,track.current!.scrollWidth-window.innerWidth);
      gsap.to(track.current,{x:()=>-distance(),ease:"none",scrollTrigger:{trigger:root.current,start:"top top",end:()=>`+=${distance()+window.innerHeight*.7}`,scrub:.8,pin:true,invalidateOnRefresh:true}});
    })},root);
    return()=>{mm.revert();ctx.revert()};
  },[]);
  return <section ref={root} id="designs" className="designs surface-black">
    <div className="section-head"><div className="eyebrow"><span>02 / HOME DESIGNS</span></div><h2 className="display-lg">A collection shaped<br/>around how you live.</h2></div>
    <div ref={track} className="design-track">{designs.map(d=><article className="design-panel" key={d.number}>
      <div className="design-image" style={{backgroundImage:`url("${d.image}")`}}/><div className="design-overlay"/>
      <div className="design-number">{d.number}</div><div className="design-type">{d.type}</div>
      <h3>{d.title.split("\n").map(l=><span key={l}>{l}<br/></span>)}</h3>
      <div className="design-meta">{d.meta}</div><a href="#start" className="design-cta">EXPLORE <span>↗</span></a>
    </article>)}</div>
  </section>;
}
