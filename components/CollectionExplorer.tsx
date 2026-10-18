"use client";

import { useState } from "react";
import Link from "next/link";
import { collections } from "@/content/wolco";
import { DesignImage } from "@/components/DesignImage";

export function CollectionExplorer() {
  const [selected, setSelected] = useState(0);
  const collection = collections[selected];
  return <div className="collection-explorer"><div className="collection-explorer-image"><DesignImage name={collection.media} alt={collection.alt} /><div className="collection-image-foot micro"><span>Concept inspiration</span><span>0{selected + 1} / 03</span></div></div><div className="collection-explorer-content"><div className="collection-options" role="group" aria-label="Choose a home collection">{collections.map((item, index) => <button key={item.slug} type="button" aria-pressed={index === selected} onClick={() => setSelected(index)}><span>0{index + 1}</span><strong>{item.name}</strong><b aria-hidden="true">{selected === index ? "↗" : "+"}</b></button>)}</div><div className="collection-description" aria-live="polite" aria-atomic="true"><span className="micro">{collection.eyebrow}</span><h3>{collection.headline}</h3><p>{collection.description}</p><Link href={`/home-designs/${collection.slug}/`} className="text-link">Explore {collection.name} <span aria-hidden="true">↗</span></Link></div><p className="fine-print">Explore your preferred direction with WOLCO. Current plans, facades and inclusions are available on enquiry.</p></div></div>;
}
