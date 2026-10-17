"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { collections, preconstruction, wolco } from "@/content/wolco";

const scenes = [
 { title:"Limestone",line:"Quiet / tactile / luminous",wall:"#dfd7ca",stone:"#c5baa7",floor:"#a18e79",ink:"#6c6254",caption:"Soft mineral surfaces and sun-warmed neutrals." },
 { title:"Walnut",line:"Organic / layered / enduring",wall:"#c9b9a7",stone:"#e9dfd1",floor:"#76543e",ink:"#3b2b21",caption:"Rich natural timber, layered against light stone." },
 { title:"Monochrome",line:"Architectural / precise / calm",wall:"#dedbd5",stone:"#bdbebc",floor:"#545451",ink:"#252628",caption:"A restrained contrast of graphite and pale materials." },
];

export function WarmRebirth() {
 const root=useRef<HTMLElement>(null);
 const [current,setCurrent]=useState(0);
 const [material,setMaterial]=useState(0);
 const [step,setStep]=useState(0);
 const [motionOn,setMotionOn]=useState(false);
 useEffect(()=>{
   const query=window.matchMedia("(prefers-reduced-motion: reduce)");
   const update=()=>setMotionOn(!query.matches);
   update(); query.addEventListener("change",update);
   return()=>query.removeEventListener("change",update);
 },[]);
 useEffect(()=>{
   if(!motionOn || !root.current) return;
   const scope=gsap.context(()=>{
     gsap.fromTo(".w-hero-line",{scaleX:0},{scaleX:1,transformOrigin:"left",duration:1.55,ease:"power3.inOut"});
     gsap.fromTo(".w-hero-heading .w-line",{yPercent:110,opacity:0},{yPercent:0,opacity:1,stagger:.14,duration:1.2,ease:"power3.out",delay:.15});
     gsap.fromTo(".w-hero-image",{clipPath:"inset(13% 7% 12% 7%)",scale:1.045},{clipPath:"inset(0% 0% 0% 0%)",scale:1,duration:1.75,ease:"power3.inOut",delay:.25});
     const blocks=gsap.utils.toArray<HTMLElement>(".w-fade-in");
     blocks.forEach(block=>gsap.fromTo(block,{y:45,opacity:.15},{y:0,opacity:1,duration:1.0,ease:"power2.out",scrollTrigger:undefined,paused:true}).play());
   },root);
   return()=>scope.revert();
 },[motionOn]);
 const selected=collections[current],finish=scenes[material],selectedStep=preconstruction[step];
 return (
  <main id="main" className="w-home" ref={root}>
   <section className="w-hero" aria-labelledby="w-hero-title">
     <div className="w-hero-top"><span>WOLCO HOMES / MELBOURNE</span><span>DESIGN / BUILD / BELONG</span></div>
     <div className="w-hero-grid">
       <div className="w-hero-editorial">
         <div className="w-overline"><i/> A HOME MADE FOR YOUR LIFE</div>
         <h1 id="w-hero-title" className="w-hero-heading">
           <span className="w-mask"><span className="w-line">A new</span></span>
           <span className="w-mask"><span className="w-line"><em>perspective</em></span></span>
           <span className="w-mask"><span className="w-line">on home.</span></span>
         </h1>
         <p>More than walls and rooms. A place shaped around the moments, rituals and people that make life yours.</p>
         <div className="w-hero-actions"><Link href="/home-designs/" className="w-pill-primary">EXPLORE HOME DESIGNS <span>↗</span></Link><Link href="/contact/" className="w-underlink">START YOUR JOURNEY <span>↗</span></Link></div>
         <div className="w-hero-bottom"><span>01 / AN ARCHITECTURAL BEGINNING</span><span>SCROLL TO EXPLORE ↓</span></div>
       </div>
       <div className="w-hero-photo-wrap">
         <div className="w-hero-image" role="img" aria-label="Architectural mood photograph, not a verified WOLCO-built home"/>
         <div className="w-hero-photo-label"><span>ARCHITECTURAL ATMOSPHERE / VISUAL STUDY</span><span>001</span></div>
         <svg className="w-red-mark" viewBox="0 0 410 320" aria-hidden="true"><path d="M-20 228 H87 V155 H144 L235 83 H370 V228 H440"/><path d="M144 155 V228 M235 83 V228 M370 83 V228"/></svg>
       </div>
     </div>
     <div className="w-hero-line"/>
     <div className="w-hero-coda"><span>THE ART OF CONSIDERED LIVING</span><span>WOLCO / THE REBIRTH</span><span>DESIGNED FOR THE EVERYDAY. AND EVERYTHING BEYOND.</span></div>
   </section>

   <section className="w-manifesto w-section" aria-labelledby="w-statement">
     <div className="w-section-label"><span>01 / OUR WAY OF SEEING</span><span>WOLCO HOMES · VICTORIA</span></div>
     <div className="w-manifesto-body">
       <h2 id="w-statement" className="w-display">It&apos;s not just<br/>a house. <em>It&apos;s yours.</em></h2>
       <div className="w-side-editorial"><span className="w-rule-red"/><p className="w-quotation">“The most extraordinary spaces are the ones that feel entirely natural to live in.”</p><p>At WOLCO, a home begins with a conversation—how you live, the details that matter and the possibilities ahead. Home designs, the World of Wolco selection experience and a guided pre-construction journey come together in one considered path.</p><Link href="/build-journey/" className="w-underlink">EXPLORE HOW WE BUILD <span>↗</span></Link></div>
     </div>
     <div className="w-manifesto-foot"><span>PERSONAL IN THE MAKING.</span><span>ENDURING BY DESIGN.</span></div>
   </section>

   <section className="w-image-essay" aria-label="Architecture and everyday life editorial study">
     <div className="w-essay-image" role="img" aria-label="Illustrative warm interior architecture, not an actual WOLCO project"/>
     <div className="w-essay-note"><span>THE SPACES BETWEEN.</span><span>WHERE LIFE HAPPENS.</span></div>
     <div className="w-essay-overlay"><span>THE WOLCO EDIT / 01</span><p>Made for the<br/><em>way we live.</em></p></div>
   </section>

   <section className="w-collections w-section" id="w-collections" aria-labelledby="w-collections-title">
     <div className="w-section-label"><span>02 / HOME DESIGN COLLECTIONS</span><Link href="/home-designs/">ALL COLLECTIONS ↗</Link></div>
     <div className="w-section-intro"><h2 id="w-collections-title" className="w-display">Your story.<br/><em>Your space.</em></h2><p>Three starting points for an individual home. Explore the collection and speak with WOLCO about the actual plans, facades and specifications available for your block.</p></div>
     <div className="w-collection-layout">
       <div className="w-collection-photo" style={{backgroundImage:`linear-gradient(0deg,rgba(25,24,22,.27),transparent 60%),url("${selected.image}")`}} role="img" aria-label="Illustrative architectural mood photograph">
         <div className="w-collection-photo-info"><span>ILLUSTRATIVE ARCHITECTURAL PHOTOGRAPHY</span><span>0{current+1} / 03</span></div>
       </div>
       <div className="w-collection-info">
         <div className="w-collection-sup"><span>THE WOLCO COLLECTIONS</span><span>0{current+1} / 03</span></div>
         <h3>{selected.name}</h3><p className="w-collection-lede">{selected.headline}</p><p>{selected.description}</p>
         <Link className="w-underlink" href={`/home-designs/${selected.slug}/`}>EXPLORE {selected.name.toUpperCase()} <span>↗</span></Link>
         <div className="w-collection-switcher" role="group" aria-label="Choose a WOLCO home collection">
          {collections.map((c,i)=><button type="button" key={c.slug} onClick={()=>setCurrent(i)} aria-pressed={current===i} className={i===current?"selected":""}><span>0{i+1}</span><strong>{c.name}</strong><span aria-hidden="true">{i===current?"↗":"+"}</span></button>)}
         </div>
       </div>
     </div>
     <p className="w-provenance">Current photography is illustrative, not verified WOLCO construction. Product specifications are supplied by WOLCO on enquiry.</p>
   </section>

   <section className="w-crimson" aria-labelledby="w-crimson-title">
    <div className="w-crimson-top"><span>W / THE RED THREAD</span><span>NOT MADE TO BE ORDINARY.</span></div>
    <svg className="w-crimson-drawing" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true"><path d="M-50 395H192V250H352V350H508V125H765V220H964V110H1240 M192 250L285 165H508 M508 125L625 35H850L964 110"/></svg>
    <h2 id="w-crimson-title">Considered.<br/><em>Never ordinary.</em></h2>
    <div className="w-crimson-bottom"><span>WHERE PRECISION MEETS PERSONALITY.</span><span>WOLCO HOMES / FROM LINE TO LIFE</span></div>
   </section>

   <section className="w-materials w-section" aria-labelledby="w-materials-title">
     <div className="w-section-label"><span>03 / WORLD OF WOLCO</span><span>THE ART OF CHOICE</span></div>
     <div className="w-material-grid">
       <div className="w-material-copy"><h2 id="w-materials-title" className="w-display">The beauty<br/>is in the <em>details.</em></h2><p>Real living is tactile: the feel of timber, the calm of stone, the way warm light transforms a room. World of Wolco brings those decisions into one conversation.</p><p className="w-fine">Below is an interactive *concept palette* to explore mood and tone—not an inventory of currently available WOW Studio products.</p><Link href="/world-of-wolco/" className="w-underlink">DISCOVER THE WOW STUDIO <span>↗</span></Link></div>
       <div className="w-material-showcase">
         <div className="w-studio-scene" style={{background:`linear-gradient(128deg,${finish.wall} 0 44%,${finish.stone} 44% 70%,${finish.ink} 70%)`}}>
           <div className="w-scene-shadow"/><div className="w-scene-window"/><div className="w-scene-plinth" style={{background:finish.stone}}/><div className="w-scene-column" style={{background:finish.ink}}/><div className="w-scene-floor" style={{background:finish.floor}}/>
           <span className="w-scene-label">MATERIAL STUDY / 0{material+1}</span>
         </div>
         <div className="w-material-captions"><div><span>SCHEME / 0{material+1}</span><h3>{finish.title}</h3><p>{finish.caption}</p></div><span>{finish.line.toUpperCase()}</span></div>
         <div className="w-material-tabs" role="group" aria-label="Concept material palettes">
          {scenes.map((s,i)=><button key={s.title} className={material===i?"selected":""} aria-pressed={material===i} type="button" onClick={()=>setMaterial(i)}><span className="w-swatch" style={{background:s.floor}}/><span>{s.title}</span><span>0{i+1}</span></button>)}
         </div>
       </div>
     </div>
   </section>

   <section className="w-kdr" aria-labelledby="w-kdr-title">
     <div className="w-kdr-photo" role="img" aria-label="Illustrative contemporary residential architectural photograph"/><div className="w-kdr-content"><span className="w-mini-heading">04 / KNOCKDOWN REBUILD</span><h2 id="w-kdr-title">The place you love.<br/><em>Reimagined.</em></h2><p>Keep the neighbourhood, the familiar streets and the feeling of belonging. Discover what a completely new home could make possible on your existing land.</p><Link href="/knockdown-rebuild/" className="w-pill-primary">EXPLORE KNOCKDOWN REBUILD <span>↗</span></Link></div>
   </section>

   <section className="w-process w-section" id="w-process" aria-labelledby="w-process-title">
     <div className="w-section-label"><span>05 / THE JOURNEY</span><span>WOLCO'S 12 STEPS TO START BUILDING</span></div>
     <div className="w-process-intro"><h2 id="w-process-title" className="w-display">A clear path<br/><em>to something new.</em></h2><p>The greatest luxury is being guided with care. WOLCO&apos;s official 12-step pre-construction roadmap—from the first proposal to construction commencement—helps make the process tangible.</p></div>
     <div className="w-process-body">
       <div className="w-process-selected"><div className="w-process-stepnum">{String(step+1).padStart(2,"0")}<span>/ 12</span></div><span className="w-mini-heading">CURRENT MILESTONE</span><h3>{selectedStep.title}</h3><p>{selectedStep.detail}</p><span className="w-process-who">{selectedStep.who}</span><Link href="/build-journey/" className="w-underlink">EXPLORE THE FULL JOURNEY <span>↗</span></Link></div>
       <div className="w-process-list" role="group" aria-label="WOLCO twelve building milestones">
        {preconstruction.map((s,i)=><button key={s.title} type="button" aria-pressed={i===step} className={i===step?"selected":""} onClick={()=>setStep(i)}><span>{String(i+1).padStart(2,"0")}</span><span>{s.title}</span><span aria-hidden="true">{step===i?"↗":"+"}</span></button>)}
       </div>
     </div>
     <p className="w-provenance">Source: WOLCO “12 Easy Steps to Start Building”. Building and finance approvals may depend on land registration. Confirm all current terms with WOLCO.</p>
   </section>

   <section className="w-film" aria-labelledby="w-film-title">
     <div className="w-film-image" role="img" aria-label="Concept architectural photograph representing cinematic art direction"/>
     <div className="w-film-shade"/>
     <div className="w-film-content"><span>06 / THE ART OF ARRIVAL</span><h2 id="w-film-title">Architecture<br/>you can <em>feel.</em></h2><p>A home is more than a finished photograph. It&apos;s the light, the pause, the welcome and the life that unfolds within.</p><Link href="/contact/" className="w-film-link">BEGIN YOUR CONVERSATION ↗</Link></div>
     <div className="w-film-note">VISUAL MOOD STUDY / NOT A VERIFIED WOLCO PROJECT</div>
   </section>

   <section className="w-proof w-section" aria-labelledby="w-proof-title">
    <div className="w-section-label"><span>07 / THE WORK BEHIND THE WORK</span><span>REAL BUILDING MOMENTS</span></div>
    <div className="w-proof-intro"><h2 id="w-proof-title" className="w-display">From first lines<br/><em>to first memories.</em></h2><p>Exceptional projects deserve an honest story. These published WOLCO milestones will become richer project journals when original photography and customer approvals are available.</p></div>
    <div className="w-proof-grid">
     <article><span>01 / WOLLERT</span><strong>From plans<br/>to foundation.</strong><p>September 2026 · A public WOLCO update described a foundation-stage construction milestone.</p><Link href="/contact/">DISCUSS YOUR BUILD ↗</Link></article>
     <article><span>02 / KALKALLO</span><strong>From build<br/>to belonging.</strong><p>September 2026 · WOLCO shared a completed-home handover milestone.</p><Link href="/contact/">START YOUR STORY ↗</Link></article>
    </div>
   </section>

   <section className="w-contact" aria-labelledby="w-contact-title">
     <div className="w-section-label"><span>08 / THE NEXT CHAPTER</span><span>WOLCO HOMES / MELBOURNE</span></div>
     <div className="w-contact-grid"><h2 id="w-contact-title">Shall we make<br/>something <em>extraordinary?</em></h2><div><p>It begins with an idea, a block of land, or simply a feeling that it&apos;s time for a different home. Let&apos;s have that first conversation.</p><Link className="w-pill-primary" href="/contact/">PLAN YOUR HOME <span>↗</span></Link><a className="w-underlink" href={wolco.phoneHref}>OR CALL {wolco.phoneDisplay} <span>↗</span></a></div></div>
   </section>
  </main>
 );
}
