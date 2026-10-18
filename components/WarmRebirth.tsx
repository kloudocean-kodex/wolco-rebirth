import Link from "next/link";
import { DesignImage } from "@/components/DesignImage";
import { CollectionExplorer } from "@/components/CollectionExplorer";
import { MaterialExplorer } from "@/components/MaterialExplorer";
import { CinematicFilm } from "@/components/CinematicFilm";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";
import { wolco } from "@/content/wolco";

export function WarmRebirth() {
  return <main id="main" className="redline-home">
    <section className="rl-hero" aria-labelledby="hero-title">
      <DesignImage name="wolco-courtyard-arrival" alt="Generated design visualisation of a brick courtyard home with a charcoal pitched roof, timber entry and native planting" priority sizes="100vw" />
      <HeroAtmosphere />
      <div className="rl-hero-shade" />
      <div className="rl-hero-top micro"><span>WOLCO Homes / Melbourne</span><span>A considered approach to home</span></div>
      <div className="rl-hero-copy"><span className="micro">The art of coming home</span><h1 id="hero-title">From line<br/><em>to life.</em></h1><p>Thoughtful spaces. Personal details.<br/>A home that feels entirely yours.</p><Link className="button button-light" href="/home-designs/">Discover your home <span aria-hidden="true">↗</span></Link></div>
      <svg className="hero-redline" viewBox="0 0 650 320" aria-hidden="true"><path d="M0 257H122V147H241L352 64H553V257H650M241 147V257M352 64V257M553 64V257" /></svg>
      <div className="rl-hero-bottom micro"><a href="#the-beginning">A new perspective <span aria-hidden="true">↓</span></a><Link href="/visual-studies/">Design visualisation</Link><span>01 / 05</span></div>
    </section>

    <section className="rl-beginning section-space" id="the-beginning" aria-labelledby="beginning-title">
      <div className="section-index micro"><span>01 / The beginning</span><span>Life informs the lines</span></div>
      <div className="beginning-grid"><div><h2 id="beginning-title" className="display">A home begins<br/>long before<br/><em>the first brick.</em></h2><div className="beginning-copy"><span className="red-rule"/><p>It begins with the way you live. The morning light you love. The people you make room for. The small details that make every day feel right.</p><p>At WOLCO, those conversations shape a considered path through home design, personal selections and the steps towards building.</p><Link className="text-link" href="/about/">Our approach <span aria-hidden="true">↗</span></Link></div></div><figure className="beginning-figure"><DesignImage name="wolco-courtyard-gather" alt="Generated design visualisation of a squared stone kitchen island, timber cabinetry and a brick-framed courtyard" /><figcaption><span>Everyday rituals. Considered spaces.</span><span>Design visualisation</span></figcaption></figure></div>
    </section>

    <section className="rl-collections section-space" id="collections" aria-labelledby="collections-title">
      <div className="section-index micro"><span>02 / The home collections</span><Link href="/home-designs/">View all collections ↗</Link></div>
      <div className="section-intro"><h2 id="collections-title" className="display">A starting point.<br/><em>Your own story.</em></h2><p>Three collections. A shared belief in considered living. Find a direction that speaks to you, then explore the plans and possibilities with WOLCO.</p></div>
      <CollectionExplorer />
    </section>

    <section className="rl-red-thread" aria-labelledby="red-thread-title"><div className="section-index micro"><span>The WOLCO red thread</span><span>From line to life</span></div><svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-50 410H197V232H389L527 131H894V410H1490M389 232V410M527 131V410M894 131V410M197 232L333 131H527M527 131L652 38H1036V410" /></svg><h2 id="red-thread-title">Considered in every line.<br/><em>Personal in every detail.</em></h2><div className="micro red-thread-bottom"><span>Design. Build. Belong.</span><Link href="/build-journey/">Discover the journey ↗</Link></div></section>

    <section className="rl-materials section-space" id="world-of-wolco" aria-labelledby="materials-title"><div className="section-index micro"><span>03 / World of Wolco</span><span>The art of choice</span></div><div className="section-intro"><h2 id="materials-title" className="display">Feel the<br/><em>difference.</em></h2><div><p>The warmth of timber. The quiet of stone. A room brought together by light. World of Wolco is where individual choices become a home with its own character.</p><Link className="text-link" href="/world-of-wolco/">Step inside WOW Studio <span aria-hidden="true">↗</span></Link></div></div><MaterialExplorer /></section>

    <section className="rl-possibilities" aria-labelledby="possibilities-title"><figure><DesignImage name="wolco-courtyard-dwell" alt="Generated design visualisation of a gabled timber-ceiling living room with a brick hearth, garnet sofa and garden courtyard" /><figcaption className="micro">Design visualisation</figcaption></figure><div className="possibilities-copy"><span className="micro">A home, on your terms</span><h2 id="possibilities-title" className="display">New possibilities.<br/><em>Familiar belonging.</em></h2><p>A new block. A new beginning. Or a fresh perspective on the place you already love. Explore the path that fits your life.</p><div className="service-links"><Link href="/custom-homes/"><span>01</span>Custom homes<b aria-hidden="true">↗</b></Link><Link href="/knockdown-rebuild/"><span>02</span>Knockdown rebuild<b aria-hidden="true">↗</b></Link><Link href="/house-and-land/"><span>03</span>House & land<b aria-hidden="true">↗</b></Link></div></div></section>

    <section className="rl-journey section-space" id="the-journey" aria-labelledby="journey-title"><div className="section-index micro"><span>04 / The building journey</span><span>Clarity at every stage</span></div><div className="journey-intro"><h2 id="journey-title" className="display">From an idea.<br/><em>Towards your home.</em></h2><div><p>A meaningful journey is made of clear next steps. WOLCO&apos;s twelve-step pre-construction guide connects the first proposal, your selections and the approvals ahead.</p><Link className="text-link" href="/build-journey/">Explore the twelve steps <span aria-hidden="true">↗</span></Link></div></div><div className="journey-phases">{[{n:"01",title:"Discover",copy:"Your lifestyle, your site and the first detailed proposal."},{n:"02",title:"Shape",copy:"Plan presentations, your agreement and personal selections."},{n:"03",title:"Prepare",copy:"Developer, building and finance approvals, as applicable."},{n:"04",title:"Begin",copy:"With the requirements in place, construction can commence."}].map(phase=><article key={phase.n}><span className="micro">{phase.n} /</span><span className="phase-dot" aria-hidden="true"/><h3>{phase.title}</h3><p>{phase.copy}</p></article>)}</div></section>

    <CinematicFilm />

    <section className="rl-contact section-space" id="begin" aria-labelledby="contact-title"><div className="section-index micro"><span>05 / Your next chapter</span><span>Let&apos;s make it personal</span></div><div className="contact-editorial"><h2 id="contact-title">What does<br/><em>home mean<br/>to you?</em></h2><div><span className="red-rule"/><p>An idea. A block of land. A new way of living. Bring what you have in mind, and let&apos;s begin.</p><Link className="button" href="/contact/">Start a conversation <span aria-hidden="true">↗</span></Link><a className="contact-number" href={wolco.phoneHref}>{wolco.phoneDisplay} <span aria-hidden="true">↗</span></a></div></div></section>
  </main>;
}
