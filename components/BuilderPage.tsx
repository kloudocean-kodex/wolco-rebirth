import Link from "next/link";
import type { ReactNode } from "react";

export function BuilderPage({ number, eyebrow, title, italic, description, children, showConversation = true }: { number: string; eyebrow: string; title: string; italic?: string; description: string; children: ReactNode; theme?: "light" | "dark"; showConversation?: boolean }) {
  return <main id="main" className="builder-route">
    <section className="builder-route-head"><div className="route-top micro"><Link href="/">WOLCO / From line to life</Link><span>{number} / {eyebrow}</span></div><h1 className="builder-route-title">{title}{italic && <><br/><em>{italic}</em></>}</h1><div className="route-head-foot"><p>{description}</p><span className="route-coordinate micro">Considered living.<br/>Melbourne, Victoria.</span></div></section>{children}
    {showConversation && <section className="route-end"><span className="micro">Your next chapter</span><h2>It begins with<br/><em>a conversation.</em></h2><Link href="/contact/" className="route-button">Plan your home <span aria-hidden="true">↗</span></Link></section>}
  </main>;
}
