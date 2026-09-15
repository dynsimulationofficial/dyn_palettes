import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Plastic Pallets | DYN Pallets",
  description: "Plastic pallet options for hygiene-sensitive, moisture-exposed and repeat-use handling environments.",
  alternates: { canonical: "/products/plastic-pallets" },
};

export default function PlasticPalletsPage() {
  return <>
    <section className="catalog-detail-hero texture-grid">
      <div className="catalog-detail-copy">
        <nav className="catalog-breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><span>Plastic Pallets</span></nav>
        <span className="kicker">HYGIENE + REUSE</span>
        <h1>Plastic Pallets</h1>
        <p>Plastic pallet options for clean, moisture-sensitive and repeat-use handling environments.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-primary">Request a quote <ArrowUpRight size={18}/></Link></div>
      </div>
      <div className="catalog-detail-image-slot catalog-hero-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&q=58&w=1800')" }} aria-label="Plastic pallets image"><div className="catalog-hero-photo-overlay"/><div className="catalog-hero-photo-meta"><span>PLASTIC PALLETS</span><b>STATIC PRODUCT VIEW</b></div></div>
    </section>
    <section className="section catalog-detail-overview light-surface">
      <div className="catalog-detail-layout"><div><span className="kicker">OVERVIEW</span><h2>Clean handling without timber.</h2></div><div className="catalog-detail-prose"><p>Plastic pallets are a practical fit where washability, moisture resistance and consistent molded dimensions are important to the handling process.</p><p>Share the load, dimensions, racking requirement and repeat-use conditions so the suitable pallet format can be reviewed.</p></div></div>
      <div className="catalog-detail-specs"><div><span>Material</span><strong>Industrial polymer</strong></div><div><span>Entry</span><strong>Model dependent</strong></div><div><span>Type</span><strong>Nestable / rackable options</strong></div><div><span>Sizing</span><strong>Standard formats</strong></div></div>
    </section>
    <section className="section catalog-detail-content"><div className="catalog-detail-two-col"><div><span className="kicker">KEY FEATURES</span><h2>Built for repeat handling.</h2><div className="catalog-detail-list">{["Washable surfaces","Moisture resistant","Consistent molded dimensions","Reusable formats"].map((x)=><div key={x}><Check size={16}/><span>{x}</span></div>)}</div></div><div><span className="kicker">COMMON APPLICATIONS</span><h2>Where it fits.</h2><div className="catalog-application-grid">{["Pharmaceutical","Food handling","Cold chain","Clean warehousing"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div></div></section>
  </>;
}
