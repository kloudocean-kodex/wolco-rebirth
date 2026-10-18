"use client";

import { useState } from "react";
import { DesignImage } from "@/components/DesignImage";

const palettes = [
  { name: "White", detail: "Pale stone, crisp white joinery and a natural timber accent.", tones: ["#e9e5dd", "#b79770", "#d0c5b0"], materials: ["Pale stone tone", "Natural timber tone", "Warm white tone"], media: "wolco-wow-white", alt: "Generated WOLCO kitchen concept with a squared pale stone island, white cabinetry and a natural timber accent" },
  { name: "Cashmere", detail: "Warm stone, soft cashmere cabinetry and light timber grain.", tones: ["#c3b093", "#bb9670", "#c6bcad"], materials: ["Warm stone tone", "Light timber tone", "Cashmere tone"], media: "wolco-wow-cashmere", alt: "Generated WOLCO kitchen concept with a squared warm stone island, cashmere-toned cabinetry and light timber joinery" },
  { name: "Espresso", detail: "Deep timber, expressive stone and a restrained garnet accent.", tones: ["#887259", "#69472f", "#66362e"], materials: ["Deep stone tone", "Walnut timber tone", "Garnet tone"], media: "wolco-wow-espresso", alt: "Generated WOLCO kitchen concept with deep walnut-toned joinery, a squared stone island and garnet cabinetry" },
];

export function MaterialExplorer() {
  const [active, setActive] = useState(0);
  const palette = palettes[active];
  return <div className="material-explorer"><figure><DesignImage name={palette.media} alt={palette.alt} /><figcaption className="micro">Kitchen concept / Design visualisation</figcaption></figure><div className="material-explorer-panel"><span className="micro">An exploration of tone</span><div className="palette-intro" aria-live="polite" aria-atomic="true"><h3>{palette.name}</h3><p>{palette.detail}</p></div><div className="palette-swatches">{palette.tones.map((tone, i) => <div key={i}><span className={`palette-sample sample-${i}`} style={{ backgroundColor: tone }} aria-hidden="true"/><span>{palette.materials[i]}</span></div>)}</div><div className="palette-options" role="group" aria-label="Explore concept colour palettes">{palettes.map((item, i) => <button key={item.name} type="button" aria-pressed={active === i} onClick={() => setActive(i)}><span className="palette-dot" style={{ background: item.tones[1] }} aria-hidden="true"/><span>{item.name}</span><span aria-hidden="true">{active === i ? "−" : "+"}</span></button>)}</div><p className="fine-print">Mood and tone studies for inspiration. Explore available products and finishes at your WOLCO selection appointment.</p></div></div>;
}
