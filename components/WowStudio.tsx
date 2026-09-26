"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const materials=[
["STONE","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"],
["TIMBER","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85"],
["LIGHT","https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"]];
export function WowStudio(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{const ctx=gsap.context(()=>{
    gsap.from(".material-card",{y:80,opacity:0,stagger:.15,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".materials-grid",start:"top 75%"}});
    gsap.from(".wow-quote span",{yPercent:120,stagger:.08,duration:.9,ease:"power4.out",scrollTrigger:{trigger:".wow-quote",start:"top 80%"}});
  },root);return()=>ctx.revert()},[]);
  return <section ref={root} id="wow" className="wow section-pad surface-ivory">
    <div className="eyebrow row-between"><span>03 / WORLD OF WOLCO</span><span>SELECTION STUDIO · EPPING</span></div>
    <div className="wow-intro"><h2 className="display-xl wow-quote"><span>Touch.</span><br/><span>Compare.</span><br/><span className="accent">Make it yours.</span></h2><p className="lede">The WOW Studio turns decisions into a tactile design experience. Materials, finishes and details are brought together in one place so your home feels considered before it is built.</p></div>
    <div className="materials-grid">{materials.map(([name,image],i)=><article className="material-card" key={name}><div className="material-img" style={{backgroundImage:`url("${image}")`}}/><div className="material-caption"><span>0{i+1}</span><strong>{name}</strong></div></article>)}</div>
    <div className="wow-bottom"><p>NOT A CATALOGUE.<br/>A PLACE TO SEE YOUR HOME COME TOGETHER.</p><a className="text-link" href="#start">Book a WOW Studio visit</a></div>
  </section>;
}
