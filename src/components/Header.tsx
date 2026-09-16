"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navServices } from "@/data/site";
import { productCategories } from "@/data/products";

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="DYN Pallets home">
      <Image className="brand-logo" src="/dyn-mark.svg" alt="" width={39} height={39} unoptimized aria-hidden="true" />
      <span className="brand-type"><strong>DYN</strong><b>PALLETS</b></span>
    </Link>
  );
}

type MegaMenuName = "products" | "services";

function ProductMegaMenu({ onPointerEnter }: { onPointerEnter: () => void }) {
  return (
    <div className="nav-mega-panel nav-products-panel" onPointerEnter={onPointerEnter}>
      <div className="nav-product-intro">
        <span>PRODUCT SYSTEMS</span>
        <h3>Packaging built around the load.</h3>
        <p>Browse pallet, chemical, box and crate categories. Every route links directly to its own product page.</p>
        <Link href="/products">View all products <ArrowRight size={15} /></Link>
      </div>

      <div className="nav-product-columns">
        {productCategories.map((category) => {
          const links = category.slug === "wooden-pallets"
            ? category.items.slice(0, 10)
            : category.slug === "chemical-pallets"
              ? category.items.slice(0, 9)
              : category.items;

          return (
            <div className="nav-product-column" key={category.slug}>
              <Link className="nav-product-category" href={`/products/${category.slug}`}>
                <span>{category.eyebrow}</span>
                <strong>{category.name}</strong>
                <ArrowUpRight size={14} />
              </Link>

              <div className="nav-product-list">
                {category.slug === "chemical-pallets" && (
                  <Link href="/products/chemical-pallets"><span>00</span><b>Chemical Pallets Overview</b></Link>
                )}
                {links.map((item, index) => (
                  <Link href={`/products/${category.slug}/${item.slug}`} key={item.slug}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <b>{item.name}</b>
                  </Link>
                ))}
                {category.slug === "plastic-pallets" && (
                  <p>Clean, reusable pallet formats for hygiene-sensitive and moisture-exposed handling.</p>
                )}
              </div>

              <Link className="nav-product-more" href={`/products/${category.slug}`}>
                {category.slug === "plastic-pallets" ? "View product" : "More products"} <ArrowRight size={13} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesMegaMenu({ onPointerEnter }: { onPointerEnter: () => void }) {
  return (
    <div className="nav-mega-panel nav-services-panel" onPointerEnter={onPointerEnter}>
      <div className="nav-mega-intro">
        <span>PACKING + EXPORT</span>
        <h3>Protection beyond the pallet.</h3>
        <p>Treatment, industrial packing, corrosion protection and cargo securing organised as clear service routes.</p>
        <Link href="/services">View all services <ArrowRight size={15} /></Link>
      </div>
      <div className="nav-mega-links">
        {navServices.map((item, index) => (
          <Link href={`/services/${item.slug}`} key={item.slug}>
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
  const [openMega, setOpenMega] = useState<MegaMenuName | null>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const cancelMegaClose = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = null;
  };
  const showMega = (menu: MegaMenuName) => {
    cancelMegaClose();
    setOpenMega(menu);
  };
  const hideMegaSoon = () => {
    cancelMegaClose();
    megaCloseTimer.current = setTimeout(() => setOpenMega(null), 350);
  };

  return (
    <header className="site-header">
      <div className="header-shell final-header-shell">
        <Brand />

        <nav className="desktop-nav final-desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={active("/") ? "active" : ""}>Home</Link>
          <Link href="/about" className={active("/about") ? "active" : ""}>About Us</Link>

          <div
            className={`nav-mega ${active("/products") ? "active" : ""} ${openMega === "products" ? "is-open" : ""}`}
            onPointerEnter={() => showMega("products")}
            onPointerLeave={hideMegaSoon}
          >
            <Link href="/products">Products</Link>
            <ProductMegaMenu onPointerEnter={cancelMegaClose} />
          </div>

          <div
            className={`nav-mega ${active("/services") ? "active" : ""} ${openMega === "services" ? "is-open" : ""}`}
            onPointerEnter={() => showMega("services")}
            onPointerLeave={hideMegaSoon}
          >
            <Link href="/services">Services</Link>
            <ServicesMegaMenu onPointerEnter={cancelMegaClose} />
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
          <Link href="/" onClick={() => setOpen(false)}><span>01</span>Home<ArrowUpRight size={18} /></Link>
          <Link href="/about" onClick={() => setOpen(false)}><span>02</span>About Us<ArrowUpRight size={18} /></Link>
          <Link href="/products" onClick={() => setOpen(false)}><span>03</span>Products<ArrowUpRight size={18} /></Link>
          <div className="drawer-product-links">
            {productCategories.map((category) => <Link href={`/products/${category.slug}`} key={category.slug} onClick={() => setOpen(false)}>{category.name}<ArrowUpRight size={14}/></Link>)}
          </div>
          <Link href="/services" onClick={() => setOpen(false)}><span>04</span>Services<ArrowUpRight size={18} /></Link>
          <Link href="/gallery" onClick={() => setOpen(false)}><span>05</span>Gallery<ArrowUpRight size={18} /></Link>
          <Link href="/contact" onClick={() => setOpen(false)}><span>06</span>Contact Us<ArrowUpRight size={18} /></Link>
        </div>
        <Link href="/contact" className="button button-primary drawer-enquire" onClick={() => setOpen(false)}>Enquire now <ArrowUpRight size={17} /></Link>
      </div>
    </header>
  );
}
