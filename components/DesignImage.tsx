import Image from "next/image";

export function DesignImage({ name, alt, className = "", priority = false, sizes = "(max-width: 760px) 100vw, 60vw" }: { name: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`design-image-frame ${className}`}><picture><source srcSet={`/media/${name}-640.webp 640w, /media/${name}-960.webp 960w, /media/${name}.webp 1600w`} sizes={sizes} type="image/webp"/><Image src={`/media/${name}.webp`} alt={alt} width={1600} height={900} className="design-photo" sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} unoptimized /></picture></div>;
}
