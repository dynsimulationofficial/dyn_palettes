import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { products, services } from "@/data/site";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-texture" aria-hidden="true" />
      <div className="footer-orb" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-lead">
          <span className="kicker">INDUSTRIAL PACKAGING, WITHOUT THE GUESSWORK.</span>
          <h2>Bring the load.<br /><em>We&apos;ll engineer the protection.</em></h2>
          <Link href="/contact" className="button button-light">Start a requirement <ArrowUpRight size={19} /></Link>
        </div>

        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="brand footer-brand"><Image className="brand-logo" src="/dyn-mark.svg" alt="" width={39} height={39} unoptimized /><span className="brand-type"><strong>DYN</strong><b>PALLETS</b></span></Link>
            <p>{siteConfig.tagline}</p>
            <div className="footer-contact-stack">
              <span><MapPin size={17} />{siteConfig.serviceArea}</span>
              <span><Phone size={17} />{siteConfig.phone}</span>
              <span><Mail size={17} />{siteConfig.email}</span>
            </div>
          </div>
          <div><h4>Products</h4>{products.slice(0, 6).map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}<Link className="footer-more" href="/products">All products <ArrowUpRight size={14} /></Link></div>
          <div><h4>Services</h4>{services.slice(0, 5).map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}<Link className="footer-more" href="/services">All services <ArrowUpRight size={14} /></Link></div>
          <div><h4>Navigate</h4><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/products">Products</Link><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact Us</Link></div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">DYN PALLETS</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} DYN PALLETS</span><span>Industrial packaging · Maharashtra, India</span><span>Designed for B2B procurement</span></div>
      </div>
    </footer>
  );
}
