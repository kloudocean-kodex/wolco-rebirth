import Link from "next/link";

export default function NotFound() { return <main id="main" className="not-found"><span className="micro">WOLCO / Page not found</span><h1>A different<br/><em>way home.</em></h1><p>This page could not be found. Continue exploring WOLCO from the beginning.</p><Link href="/" className="route-button">Return home <span aria-hidden="true">↗</span></Link></main>; }
