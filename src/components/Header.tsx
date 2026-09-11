"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
] as const;

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="DYN Pallets home">
      <Image className="brand-logo" src="/dyn-mark.svg" alt="" width={39} height={39} unoptimized aria-hidden="true" />
      <span className="brand-type"><strong>DYN</strong><b>PALLETS</b></span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-shell final-header-shell">
        <Brand />

        <nav className="desktop-nav final-desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? "active" : ""}>{label}</Link>;
          })}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="header-enquire">Enquire now <ArrowUpRight size={16} /></Link>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </div>

      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <div className="drawer-head">
          <div className="brand brand-static"><Image className="brand-logo" src="/dyn-mark.svg" alt="" width={39} height={39} unoptimized /><span className="brand-type"><strong>DYN</strong><b>PALLETS</b></span></div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <div className="drawer-links">
          {links.map(([label, href], index) => <Link href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></Link>)}
        </div>
        <Link href="/contact" className="button button-primary drawer-enquire" onClick={() => setOpen(false)}>Enquire now <ArrowUpRight size={17} /></Link>
      </div>
    </header>
  );
}
