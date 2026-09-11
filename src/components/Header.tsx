"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navProducts, navServices } from "@/data/site";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
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

function MegaMenu({ type }: { type: "products" | "services" }) {
  const isProducts = type === "products";
  const items = isProducts ? navProducts : navServices;
  const href = isProducts ? "/products" : "/services";
  const title = isProducts ? "Packaging built around the load." : "Protection beyond the pallet.";
  const copy = isProducts
    ? "Explore standard and custom pallet, box and crate routes — then tune the build around load, handling and shipment conditions."
    : "Treatment, industrial packing, corrosion protection and cargo securing organised as clear service routes.";

  return (
    <div className={`nav-mega-panel ${isProducts ? "nav-products-panel" : "nav-services-panel"}`}>
      <div className="nav-mega-intro">
        <span>{isProducts ? "PRODUCT SYSTEMS" : "PACKING + EXPORT"}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        <Link href={href}>View all {type} <ArrowRight size={15} /></Link>
      </div>
      <div className="nav-mega-links">
        {items.map((item, index) => (
          <Link href={`${href}/${item.slug}`} key={item.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{item.name}</b>
            <ArrowUpRight size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-shell final-header-shell">
        <Brand />

        <nav className="desktop-nav final-desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={active("/") ? "active" : ""}>Home</Link>
          <Link href="/about" className={active("/about") ? "active" : ""}>About Us</Link>

          <div className={`nav-mega ${active("/products") ? "active" : ""}`}>
            <Link href="/products">Products</Link>
            <MegaMenu type="products" />
          </div>

          <div className={`nav-mega ${active("/services") ? "active" : ""}`}>
            <Link href="/services">Services</Link>
            <MegaMenu type="services" />
          </div>

          <Link href="/gallery" className={active("/gallery") ? "active" : ""}>Gallery</Link>
          <Link href="/contact" className={active("/contact") ? "active" : ""}>Contact Us</Link>
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
          {[
            ["Home", "/"], ["About Us", "/about"], ["Products", "/products"], ["Services", "/services"], ["Gallery", "/gallery"], ["Contact Us", "/contact"],
          ].map(([label, href], index) => <Link href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></Link>)}
        </div>
        <Link href="/contact" className="button button-primary drawer-enquire" onClick={() => setOpen(false)}>Enquire now <ArrowUpRight size={17} /></Link>
      </div>
    </header>
  );
}
