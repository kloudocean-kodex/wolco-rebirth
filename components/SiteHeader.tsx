"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
const nav=[["HOME DESIGNS","/home-designs/"],["CUSTOM HOMES","/custom-homes/"],["KNOCKDOWN REBUILD","/knockdown-rebuild/"],["WOW STUDIO","/world-of-wolco/"],["THE JOURNEY","/build-journey/"]];
export function SiteHeader(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>45);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 return <>
  <header className={`site-header ${scrolled?"is-scrolled":""} ${open?"menu-open":""}`}>
   <Link className="brand" href="/" onClick={()=>setOpen(false)} aria-label="WOLCO HOMES home"><span className="brand-mark" aria-hidden="true">W</span><span className="brand-word">WOLCO<span className="brand-small">HOMES</span></span></Link>
   <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([l,h])=><Link key={l} href={h}>{l}</Link>)}</nav>
   <div className="header-actions"><Link href="/contact/" className="header-contact">LET&apos;S BUILD <span>↗</span></Link>
   <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="site-menu" onClick={()=>setOpen(v=>!v)}><span>{open?"CLOSE":"MENU"}</span><i aria-hidden="true"/></button></div>
  </header>
  <div id="site-menu" className={`menu-overlay ${open?"is-open":""}`} aria-hidden={!open} inert={!open}>
   <div className="menu-index">WOLCO / NAVIGATION / MELBOURNE</div>
   <nav className="menu-links" aria-label="Full site navigation">
    {[["HOME","/"],...nav,["HOUSE & LAND","/house-and-land/"],["ABOUT WOLCO","/about/"],["CONTACT","/contact/"]].map(([l,h],i)=><Link key={l} href={h} onClick={()=>setOpen(false)}><small>{String(i+1).padStart(2,"0")}</small><span>{l}</span></Link>)}
   </nav>
   <div className="menu-foot"><span>EPPING · VICTORIA</span><span>WE DON&apos;T BUILD ORDINARY.</span></div>
  </div>
 </>;
}