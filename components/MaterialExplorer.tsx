"use client";

import { useState } from "react";
import { DesignImage } from "@/components/DesignImage";

const palettes = [
  { name: "Quiet warmth", detail: "Pale stone. Natural oak. A soft bronze accent.", tones: ["#ddd2be", "#ab8965", "#75614c"], materials: ["Limestone tone", "Natural oak tone", "Soft bronze tone"] },
  { name: "Earth & texture", detail: "Warm mineral shades with deeper timber and earthy detail.", tones: ["#bbaa92", "#76523c", "#977668"], materials: ["Mineral tone", "Walnut tone", "Clay tone"] },
  { name: "Light & shade", detail: "A lighter foundation. Darker timber. A considered contrast.", tones: ["#ede8de", "#6c6559", "#353631"], materials: ["Chalk tone", "Smoked oak tone", "Graphite tone"] },
];

export function MaterialExplorer() {
  const [active, setActive] = useState(0);
  const palette = palettes[active];
  return <div className="material-explorer"><figure><DesignImage name="generated-materials" alt="Design visualisation of a tactile arrangement of limestone, oak, fabric and bronze material samples" /><figcaption className="micro">Concept material study / Design visualisation</figcaption></figure><div className="material-explorer-panel"><span className="micro">An exploration of tone</span><div className="palette-intro" aria-live="polite" aria-atomic="true"><h3>{palette.name}</h3><p>{palette.detail}</p></div><div className="palette-swatches">{palette.tones.map((tone, i) => <div key={i}><span className={`palette-sample sample-${i}`} style={{ backgroundColor: tone }} aria-hidden="true"/><span>{palette.materials[i]}</span></div>)}</div><div className="palette-options" role="group" aria-label="Explore concept colour palettes">{palettes.map((item, i) => <button key={item.name} type="button" aria-pressed={active === i} onClick={() => setActive(i)}><span className="palette-dot" style={{ background: item.tones[1] }} aria-hidden="true"/><span>{item.name}</span><span aria-hidden="true">{active === i ? "−" : "+"}</span></button>)}</div><p className="fine-print">Mood and tone studies for inspiration. Explore available products and finishes at your WOLCO selection appointment.</p></div></div>;
}
