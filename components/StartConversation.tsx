import Link from "next/link";
import {wolco} from "@/content/wolco";
export function StartConversation(){
 return <section id="start" className="start surface-black section-pad">
  <div className="redline-start" aria-hidden="true"/><div className="eyebrow">08 / BEGIN THE CONVERSATION</div>
  <h2 className="display-xl">Extraordinary<br/>starts <em>here.</em></h2>
  <div className="start-conversation">
    <p className="lede">Every home begins with a conversation. Tell us what you want life to feel like.</p>
    <div><Link className="start-real-cta" href="/contact/">DISCUSS YOUR HOME <span aria-hidden="true">↗</span></Link>
    <a className="start-phone" href={wolco.phoneHref}>OR CALL {wolco.phoneDisplay}</a></div>
  </div>
 </section>;
}