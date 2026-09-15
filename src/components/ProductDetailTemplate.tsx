import Link from "next/link";
import { ArrowUpRight, Check, Image as ImageIcon } from "lucide-react";
import type { CatalogProduct, ProductCategory } from "@/data/productCatalog";

export function ProductDetailTemplate({
  category,
  product,
}: {
  category: ProductCategory;
  product: CatalogProduct;
}) {
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
        <div className="catalog-detail-image-slot" aria-label={`${product.name} image area`}>
          <ImageIcon size={28} />
          <span>PRODUCT IMAGE</span>
          <p>Add the final {product.name.toLowerCase()} image here.</p>
        </div>
      </section>

      <section className="section catalog-detail-overview light-surface">
        <div className="catalog-detail-layout">
          <div>
            <span className="kicker">OVERVIEW</span>
            <h2>Built around the requirement.</h2>
          </div>
          <div className="catalog-detail-prose">
            <p>{product.description}</p>
            <p>Share the approximate load, dimensions, handling method, quantity and shipment route so the construction can be reviewed for your application.</p>
          </div>
        </div>
        <div className="catalog-detail-specs">
          {product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}
        </div>
      </section>

      <section className="section catalog-detail-content">
        <div className="catalog-detail-two-col">
          <div>
            <span className="kicker">KEY FEATURES</span>
            <h2>Practical construction choices.</h2>
            <div className="catalog-detail-list">
              {product.features.map((feature) => <div key={feature}><Check size={16} /><span>{feature}</span></div>)}
            </div>
          </div>
          <div>
            <span className="kicker">COMMON APPLICATIONS</span>
            <h2>Where it fits.</h2>
            <div className="catalog-application-grid">
              {product.applications.map((application, index) => <div key={application}><span>{String(index + 1).padStart(2, "0")}</span><strong>{application}</strong></div>)}
            </div>
          </div>
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
