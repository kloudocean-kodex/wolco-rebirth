"use client";
import {useState} from "react";
import {preconstruction} from "@/content/wolco";
export function StepsJourney({compact=false}:{compact?:boolean}){
 const [active,setActive]=useState(0);
 return <div className={compact?"steps-wrap is-compact":"steps-wrap"}>
   <div className="steps-overview"><span className="micro">PRE-CONSTRUCTION · 12 MOMENTS</span><p>Every extraordinary home begins with considered decisions. Discover the steps before construction.</p><div className="steps-count"><strong>{String(active+1).padStart(2,"0")}</strong><span>/ 12</span></div></div>
   <div className="steps-list">
    {preconstruction.map((s,i)=><article className={active===i?"step is-active":"step"} key={s.title}>
      <button type="button" aria-expanded={active===i} aria-controls={`step-panel-${i}`} onClick={()=>setActive(active===i?-1:i)}>
       <span className="step-number">{String(i+1).padStart(2,"0")}</span><span className="step-title">{s.title}</span><span className="step-toggle" aria-hidden="true">{active===i?"−":"+"}</span>
      </button>
      <div id={`step-panel-${i}`} className="step-panel" hidden={active!==i}><p className="step-sub">{s.subtitle}</p><p>{s.detail}</p><span className="micro">{s.who}</span></div>
    </article>)}
   </div>
   <p className="steps-disclaimer">Source: WOLCO’s “12 Easy Steps to Start Building”. Actual steps, timeframes, fees and approval requirements depend on your individual building agreement and land registration. Confirm details with WOLCO before proceeding.</p>
 </div>;
}
