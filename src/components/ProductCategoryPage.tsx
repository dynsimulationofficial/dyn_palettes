import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/data/productCatalog";

const categoryHeroImages: Record<ProductCategory["slug"], string> = {
  "wooden-pallets": "/wooden-pallets-performance.webp",
  "chemical-pallets": "/wooden-pallets-performance.webp",
  "wooden-boxes-crates": "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&q=58&w=1800",
  "plastic-pallets": "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&q=58&w=1800",
};

export function ProductCategoryPage({ category }: { category: ProductCategory }) {
  const heroImage = categoryHeroImages[category.slug];

  return (
    <>
      <section className="catalog-category-hero texture-grid">
        <div className="catalog-category-copy">
          <nav className="catalog-breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><span>{category.name}</span></nav>
          <span className="kicker">{category.eyebrow}</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <Link href="/contact" className="button button-primary">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
        <div className="catalog-category-image-slot catalog-hero-photo" style={{ backgroundImage: `url('${heroImage}')` }} aria-label={`${category.name} image`}>
          <div className="catalog-hero-photo-overlay" />
          <div className="catalog-hero-photo-meta"><span>{category.eyebrow}</span><b>STATIC FIELD VIEW</b></div>
        </div>
      </section>

      <section className="section catalog-category-products light-surface">
        <div className="section-heading split-heading">
          <div><span className="kicker">{category.name.toUpperCase()}</span><h2>Choose the right format.</h2></div>
          <p>{category.summary} Compare the available formats by construction, material and application, then open the dedicated product page for specifications and enquiry.</p>
        </div>
        <div className="catalog-category-grid">
          {category.items.map((item, index) => (
            <Link href={`/products/${category.slug}/${item.slug}`} className="catalog-static-card" key={item.slug}>
              <div className="catalog-static-image catalog-static-image-photo" style={{ backgroundImage: `url('${heroImage}')` }}><span>PRODUCT FAMILY</span></div>
              <div className="catalog-static-body"><span className="kicker">{String(index + 1).padStart(2, "0")} · {item.eyebrow}</span><h3>{item.name}</h3><p>{item.summary}</p><footer><span>View product</span><ArrowUpRight size={15} /></footer></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
