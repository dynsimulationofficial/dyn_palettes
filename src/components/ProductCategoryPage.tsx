import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import type { ProductCategory } from "@/data/productCatalog";

export function ProductCategoryPage({ category }: { category: ProductCategory }) {
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
        <div className="catalog-category-image-slot">
          <ImageIcon size={30} />
          <span>CATEGORY IMAGE</span>
          <p>Reserved for your {category.name.toLowerCase()} image.</p>
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
              <div className="catalog-static-image"><ImageIcon size={22} /><span>IMAGE</span></div>
              <div className="catalog-static-body"><span className="kicker">{String(index + 1).padStart(2, "0")} · {item.eyebrow}</span><h3>{item.name}</h3><p>{item.summary}</p><footer><span>View product</span><ArrowUpRight size={15} /></footer></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
