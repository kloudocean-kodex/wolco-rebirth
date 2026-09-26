"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const steps=[["01","DISCOVER","Your site, your priorities, your way of living."],["02","DESIGN","A plan resolved around proportion, light and function."],["03","PERSONALISE","Finishes and details selected through the WOW Studio."],["04","PRE-SITE","Documentation, approvals and preparation made clear."],["05","BUILD","A transparent construction journey from slab to completion."],["06","HANDOVER","A finished home, ready for the life it was designed for."]];
export function BuildJourney(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{const ctx=gsap.context(()=>{
    gsap.fromTo(".journey-progress",{scaleY:0},{scaleY:1,ease:"none",scrollTrigger:{trigger:root.current,start:"top center",end:"bottom center",scrub:true}});
    gsap.utils.toArray<HTMLElement>(".journey-step").forEach(step=>gsap.from(step,{opacity:.22,y:36,scrollTrigger:{trigger:step,start:"top 72%",end:"top 48%",scrub:true}}));
  },root);return()=>ctx.revert()},[]);
  return <section ref={root} id="journey" className="journey section-pad surface-black">
    <div className="journey-title"><div className="eyebrow">04 / THE BUILD JOURNEY</div><h2 className="display-xl">Process,<br/><em>made visible.</em></h2></div>
    <div className="journey-body"><div className="journey-rail"><div className="journey-progress"/></div>{steps.map(([n,t,c])=><article className="journey-step" key={n}><span className="journey-num">{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
  </section>;
}
