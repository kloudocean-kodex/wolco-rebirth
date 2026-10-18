"use client";

import { useEffect, useRef, useState } from "react";

/** The still is the initial hero. The film is fetched only after a visitor requests it. */
export function HeroAtmosphere() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pending, setPending] = useState(false);
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
    const element = video.current;
    if (!element || pending) return;
    if (playing) { element.pause(); return; }
    setPending(true); setUnavailable(false);
    if (!element.getAttribute("src")) element.src = "/media/generated-exterior-film.mp4";
    const timeout = window.setTimeout(() => { element.pause(); setPending(false); setUnavailable(true); }, 15000);
    try { await element.play(); } catch (error) { if (!(error instanceof DOMException && error.name === "AbortError")) setUnavailable(true); } finally { window.clearTimeout(timeout); setPending(false); }
  }
  return <><video ref={video} className={`hero-film-video ${loaded ? "is-ready" : ""}`} muted loop playsInline preload="none" aria-hidden="true" onPlaying={() => { setLoaded(true); setPlaying(true); setPending(false); }} onPause={() => setPlaying(false)} onError={() => { setUnavailable(true); setPending(false); }} /><div className="hero-film-choice"><button className="hero-film-control" type="button" disabled={pending} onClick={toggle} aria-pressed={playing} aria-label={playing ? "Pause arrival film" : "Play arrival film"}><span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>{pending ? "Loading the moment…" : playing ? "Pause arrival film" : "Play arrival film"}</button><span className="hero-film-status" role="status">{unavailable ? "The still visualisation is available." : "Generated architectural film"}</span></div></>;
}
