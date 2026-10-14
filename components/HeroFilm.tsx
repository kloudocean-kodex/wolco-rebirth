"use client";

/**
 * MotionSite-inspired, but WOLCO-owned-media-only film.
 * Progressive enhancement: the existing photographic hero remains visible
 * when there is no approved film, on reduced-motion devices, or with Save-Data.
 * Never use example/demo video URLs from third-party templates in production.
 */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

function subscribeMotionPreferences(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function browserPermitsFilm() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;
  return !reduced && !saveData;
}
function serverPermitsFilm() { return false; }

export function HeroFilm({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const eligible = useSyncExternalStore(subscribeMotionPreferences, browserPermitsFilm, serverPermitsFilm);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  const safeSrc = src.startsWith("/") || src.startsWith("https://") ? src : "";

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
