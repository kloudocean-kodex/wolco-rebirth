"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { wolco } from "@/content/wolco";

const navigation = [
  ["Home designs", "/home-designs/"], ["Custom homes", "/custom-homes/"],
  ["Knockdown rebuild", "/knockdown-rebuild/"], ["World of Wolco", "/world-of-wolco/"],
  ["The building journey", "/build-journey/"], ["House & land", "/house-and-land/"],
  ["About WOLCO", "/about/"], ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isCurrentPage = (href: string) => pathname.replace(/\/+$/, "") === href.replace(/\/+$/, "");
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => dialog.current?.close();
  const restoreOpener = () => { setOpen(false); document.body.style.overflow = ""; opener.current?.focus({ preventScroll: true }); };
  useEffect(() => () => { document.body.style.overflow = ""; }, []);
  useEffect(() => { dialog.current?.close(); }, [pathname]);
  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) return;
    const element = event.currentTarget;
    const focusable = Array.from(element.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(item => item.getClientRects().length > 0 && window.getComputedStyle(item).visibility !== "hidden");
    if (!focusable.length) { event.preventDefault(); element.focus(); return; }
    const first = focusable[0], last = focusable[focusable.length - 1], active = document.activeElement;
    if (event.shiftKey && (active === first || active === element || !element.contains(active))) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (active === last || active === element || !element.contains(active))) { event.preventDefault(); first.focus(); }
  }
  return <>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="WOLCO Homes — home"><Image src="/brand/wolco-original-logo.webp" width={606} height={286} alt="WOLCO Homes" priority unoptimized /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{[["Home designs", "/home-designs/"], ["Our approach", "/about/"], ["WOW Studio", "/world-of-wolco/"]].map(([label, href]) => <Link key={href} href={href} aria-current={isCurrentPage(href) ? "page" : undefined}>{label}</Link>)}</nav>
      <div className="header-actions"><Link href="/contact/" className="header-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link><button ref={opener} className="menu-trigger" type="button" aria-label="Open navigation menu" aria-haspopup="dialog" aria-controls="site-menu" aria-expanded={open} onClick={() => { if (!dialog.current) return; dialog.current.showModal(); setOpen(true); document.body.style.overflow = "hidden"; }}><span>Menu</span><i aria-hidden="true"><b /><b /></i></button></div>
    </header>
    <dialog id="site-menu" ref={dialog} className="menu-dialog" aria-label="Site navigation" onKeyDown={trapFocus} onClose={restoreOpener} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="menu-top"><Link href="/" className="menu-home" onClick={close}>WOLCO / From line to life</Link><button className="menu-close" onClick={close} type="button" autoFocus>Close <span aria-hidden="true">×</span></button></div>
      <div className="menu-body"><nav className="menu-links" aria-label="All pages">{navigation.map(([label, href], i) => <Link href={href} key={href} onClick={close} aria-current={isCurrentPage(href) ? "page" : undefined}><small>{String(i + 1).padStart(2, "0")}</small><span>{label}</span><b aria-hidden="true">↗</b></Link>)}</nav><div className="menu-aside"><span className="micro">A considered beginning</span><p>Every home starts<br/>with <em>a conversation.</em></p><a href={wolco.phoneHref} onClick={close}>{wolco.phoneDisplay} ↗</a><span>Melbourne, Victoria</span></div></div>
    </dialog>
  </>;
}
