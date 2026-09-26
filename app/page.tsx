import { RedlineHero } from "@/components/RedlineHero";
import { HomeDesigns } from "@/components/HomeDesigns";
import { WowStudio } from "@/components/WowStudio";
import { BuildJourney } from "@/components/BuildJourney";
import { ProjectArchive } from "@/components/ProjectArchive";
import { KnockdownRebuild } from "@/components/KnockdownRebuild";
import { BuildMap } from "@/components/BuildMap";
import { StartConversation } from "@/components/StartConversation";
import { ProofStrip } from "@/components/ProofStrip";
import { JsonLd } from "@/components/JsonLd";

export default function Home(){
  return <main id="main"><JsonLd />
    <RedlineHero />
    <section className="manifesto section-pad surface-ivory" aria-labelledby="manifesto-title">
      <div className="eyebrow row-between"><span>WOLCO / MELBOURNE</span><span>DESIGN · BUILD · LIVE</span></div>
      <div className="manifesto-grid">
        <h2 id="manifesto-title" className="display-xl">We don&apos;t build<br/>ordinary.</h2>
        <div className="manifesto-copy">
          <p className="lede">A home begins long before construction. It begins with a line, a conversation, a way you want to live.</p>
          <p>Wolco brings design, personalisation and construction into one considered journey — from the first sketch to the moment the keys are yours.</p>
          <a href="#designs" className="text-link">Explore the collection</a>
        </div>
      </div>
    </section>
    <ProofStrip /><HomeDesigns /><WowStudio /><BuildJourney /><ProjectArchive /><KnockdownRebuild /><BuildMap /><StartConversation />
  </main>;
}
