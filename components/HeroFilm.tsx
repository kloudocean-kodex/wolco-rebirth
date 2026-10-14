"use client";

/**
 * MotionSite-inspired, but WOLCO-owned-media-only film.
 * Progressive enhancement: the existing photographic hero remains visible
 * when there is no approved film, on reduced-motion devices, or with Save-Data.
 * Never use example/demo video URLs from third-party templates in production.
 */
import { useEffect, useRef, useState } from "react";

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

export function HeroFilm({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [eligible, setEligible] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  const safeSrc = src.startsWith("/") || src.startsWith("https://") ? src : "";

  useEffect(() => {
    if (!safeSrc) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;
      setEligible(!reduced.matches && !saveData);
    };
    update();
    reduced.addEventListener("change", update);
    return () => reduced.removeEventListener("change", update);
  }, [safeSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!eligible) {
      video.pause();
      return;
    }
    void video.play().catch(() => setPlaying(false));
    return () => video.pause();
  }, [eligible, safeSrc]);

  if (!safeSrc || !eligible) return null;

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => setPlaying(false));
    } else video.pause();
  }

  return (
    <>
      <video
        ref={videoRef}
        className={`hero-film${ready ? " is-ready" : ""}`}
        src={safeSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => { setReady(false); setPlaying(false); }}
      />
      {ready && (
        <button
          className="hero-film-toggle"
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background film" : "Play background film"}
          aria-pressed={playing}
        >
          {playing ? "PAUSE FILM" : "PLAY FILM"}
        </button>
      )}
    </>
  );
}
