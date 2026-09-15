import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { CatalogProduct, ProductCategory } from "@/data/productCatalog";

const categoryHeroImages: Record<ProductCategory["slug"], string> = {
  "wooden-pallets": "/wooden-pallets-performance.webp",
  "chemical-pallets": "/wooden-pallets-performance.webp",
  "wooden-boxes-crates": "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&q=58&w=1800",
  "plastic-pallets": "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&q=58&w=1800",
};

export function ProductDetailTemplate({
  category,
  product,
}: {
  category: ProductCategory;
  product: CatalogProduct;
}) {
  const heroImage = categoryHeroImages[category.slug];

  return (
    <>
      <section className="catalog-detail-hero texture-grid">
        <div className="catalog-detail-copy">
          <nav className="catalog-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/products">Products</Link><span>/</span>
            <Link href={`/products/${category.slug}`}>{category.name}</Link><span>/</span>
            <span>{product.name}</span>
          </nav>
          <span className="kicker">{product.eyebrow}</span>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">Request a quote <ArrowUpRight size={18} /></Link>
            <Link href={`/products/${category.slug}`} className="button button-ghost">Back to {category.name}</Link>
          </div>
        </div>
        <div className="catalog-detail-image-slot catalog-hero-photo" style={{ backgroundImage: `url('${heroImage}')` }} aria-label={`${product.name} image`}>
          <div className="catalog-hero-photo-overlay" />
          <div className="catalog-hero-photo-meta"><span>{product.name}</span><b>STATIC PRODUCT VIEW</b></div>
        </div>
      </section>

      <section className="section catalog-detail-overview light-surface">
        <div className="catalog-detail-layout">
          <div><span className="kicker">OVERVIEW</span><h2>Built around the requirement.</h2></div>
          <div className="catalog-detail-prose"><p>{product.description}</p><p>Share the approximate load, dimensions, handling method, quantity and shipment route so the construction can be reviewed for your application.</p></div>
        </div>
        <div className="catalog-detail-specs">{product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
      </section>

      <section className="section catalog-detail-content">
        <div className="catalog-detail-two-col">
          <div><span className="kicker">KEY FEATURES</span><h2>Practical construction choices.</h2><div className="catalog-detail-list">{product.features.map((feature) => <div key={feature}><Check size={16} /><span>{feature}</span></div>)}</div></div>
          <div><span className="kicker">COMMON APPLICATIONS</span><h2>Where it fits.</h2><div className="catalog-application-grid">{product.applications.map((application, index) => <div key={application}><span>{String(index + 1).padStart(2, "0")}</span><strong>{application}</strong></div>)}</div></div>
        </div>
      </section>

      <section className="section catalog-detail-cta light-surface">
        <div className="catalog-detail-cta-box">
          <div><span className="kicker">SEND YOUR REQUIREMENT</span><h2>Need {product.name.toLowerCase()}?</h2><p>Send dimensions, load, quantity and destination. DYN Pallets can review the suitable build and treatment route.</p></div>
          <Link href="/contact" className="button button-primary">Get a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
