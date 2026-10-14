import Link from "next/link";
import type {ReactNode} from "react";
export function BuilderPage({number,eyebrow,title,italic,description,children,theme="light"}:{number:string;eyebrow:string;title:string;italic?:string;description:string;children:ReactNode;theme?:"light"|"dark"}){
 return <div className={`builder-route ${theme==="dark"?"builder-dark":""}`}>
   <section className="builder-route-head">
    <div className="micro route-top"><span>WOLCO / {number}</span><span>MELBOURNE · VICTORIA</span></div>
    <span className="micro route-eyebrow">{eyebrow}</span>
    <h1 className="builder-route-title">{title}{italic&&<> <em>{italic}</em></>}</h1>
    <div className="route-head-foot"><p>{description}</p><Link className="route-back" href="/">← Back to WOLCO</Link></div>
   </section>
   {children}
   <section className="route-end"><span className="micro">WOLCO / START A CONVERSATION</span><h2>Extraordinary begins <em>with you.</em></h2><Link href="/contact/" className="route-button">PLAN YOUR HOME <span>↗</span></Link></section>
  </div>;
}
