"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function CinematicFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) element.pause(); }, { threshold: 0.05 });
    const visibility = () => { if (document.hidden) element.pause(); };
    observer.observe(element);
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  async function toggle() {
    if (!video.current) return;
    if (playing) { video.current.pause(); return; }
    try { await video.current.play(); setUnavailable(false); } catch (error) { if (!(error instanceof DOMException && error.name === "AbortError")) setUnavailable(true); }
  }
  return <section className="rl-film" aria-labelledby="film-title"><video ref={video} muted loop playsInline preload="none" poster="/media/wolco-project-journey-v2-poster.webp" aria-label="Silent web edit of WOLCO-supplied Cookes Road project footage" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setUnavailable(true)}><source src="/media/wolco-project-journey-v2.mp4" type="video/mp4" /></video><div className="film-shade"/><div className="film-top micro"><span>The spaces between</span><Link href="/visual-studies/">WOLCO project footage</Link></div><div className="film-copy"><span className="micro">An invitation to slow down</span><h2 id="film-title">Room to breathe.<br/><em>Space to belong.</em></h2><p>A welcome at the door.<br/>A place to gather within.</p><div className="film-actions"><button className="film-control" type="button" onClick={toggle} aria-label={playing ? "Pause WOLCO project film" : "Play WOLCO project film"} aria-pressed={playing}><span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>{playing ? "Pause the moment" : "Play the moment"}</button><a className="film-full-link" href="/media/wolco-project-journey-v2.mp4" target="_blank" rel="noopener noreferrer">View the full film <span aria-hidden="true">↗</span><span className="sr-only"> (opens full-frame video in a new tab)</span></a></div><span role="status" className="film-status">{unavailable ? "The film is unavailable. You can still explore the visual study." : "Cookes Road / WOLCO project footage / Silent web edit"}</span></div></section>;
}
