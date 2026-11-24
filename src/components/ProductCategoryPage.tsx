import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";
import { categoryImages, getProductImage } from "@/data/productImages";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { getSiteUrl, siteConfig } from "@/data/config";

export function ProductCategoryPage({ category }: { category: ProductCategory }) {
  const heroImage = categoryImages[category.slug];
  const siteUrl = getSiteUrl();
  const categoryPath = `/products/${category.slug}`;

  const schema = [
    breadcrumbSchema(siteUrl, [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: category.name, path: categoryPath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: category.name,
      description: category.summary,
      numberOfItems: category.items.length,
      itemListElement: category.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteUrl}${categoryPath}/${item.slug}`,
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className="catalog-category-hero texture-grid">
        <div className="catalog-category-copy">
          <nav className="catalog-breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><span>{category.name}</span></nav>
          <span className="kicker">{category.eyebrow}</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <Link href="/contact" className="button button-primary">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
        <div className="catalog-category-image-slot catalog-hero-photo">
          <Image
            src={heroImage}
            alt={`${category.name} manufactured by ${siteConfig.name} for industrial handling, warehousing and export`}
            fill
            className="catalog-hero-photo-img"
            sizes="(max-width: 1100px) 100vw, 50vw"
            loading="eager"
            fetchPriority="high"
          />
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
            <Link href={`${categoryPath}/${item.slug}`} className="catalog-static-card" key={item.slug}>
              <div className="catalog-static-image catalog-static-image-photo">
                <Image
                  src={getProductImage(item.slug, category.slug)}
                  alt={`${item.name} — ${category.name.toLowerCase()} supplied by ${siteConfig.name}`}
                  fill
                  className="catalog-static-photo-img"
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 380px"
                />
                <span>PRODUCT FAMILY</span>
              </div>
              <div className="catalog-static-body"><span className="kicker">{String(index + 1).padStart(2, "0")} · {item.eyebrow}</span><h3>{item.name}</h3><p>{item.summary}</p><footer><span>View product</span><ArrowUpRight size={15} /></footer></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
