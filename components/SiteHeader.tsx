"use client";
import { useEffect,useState } from "react";
const nav=[["HOME DESIGNS","#designs"],["HOUSE & LAND","#projects"],["WOW STUDIO","#wow"],["OUR PROCESS","#journey"]];
export function SiteHeader(){
  const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>60);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
  useEffect(()=>{document.documentElement.style.overflow=open?"hidden":"";return()=>{document.documentElement.style.overflow=""}},[open]);
  return <>
    <header className={`site-header ${scrolled?"is-scrolled":""}`}>
      <a className="brand" href="#top" aria-label="Wolco Homes home"><span className="brand-mark">W</span><span className="brand-word">WOLCO</span></a>
      <nav className="desktop-nav" aria-label="Primary">{nav.map(([l,h])=><a key={l} href={h}>{l}</a>)}</nav>
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="site-menu" onClick={()=>setOpen(v=>!v)}><span>{open?"CLOSE":"MENU"}</span><i aria-hidden="true"/></button>
    </header>
    <div id="site-menu" className={`menu-overlay ${open?"is-open":""}`} aria-hidden={!open}>
      <div className="menu-index">WOLCO / NAVIGATION</div>
      <nav className="menu-links" aria-label="Menu">
        {nav.map(([l,h],i)=><a key={l} href={h} onClick={()=>setOpen(false)}><small>0{i+1}</small><span>{l}</span></a>)}
        <a href="#start" onClick={()=>setOpen(false)}><small>05</small><span>START A CONVERSATION</span></a>
      </nav>
      <div className="menu-foot"><span>EPPING · VICTORIA</span><span>FROM LINE TO LIFE.</span></div>
    </div>
  </>;
}
