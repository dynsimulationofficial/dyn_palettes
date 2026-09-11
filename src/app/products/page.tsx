import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { QuoteBand } from "@/components/QuoteBand";
import { products } from "@/data/site";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return <>
    <PageHero kicker="PRODUCT RANGE" title="Built for every kind of load." text="From standard warehouse pallets to export crates and high-load machinery bases, choose a starting format and we’ll tune the build around your requirement." />
    <section className="cards-page"><div className="cards-shell">
      <div className="cards-intro"><h2>13 industrial packaging formats.</h2><p>Each product can be adapted around size, entry direction, material, treatment, expected load and shipment conditions.</p></div>
      <div className="catalog-grid">{products.map((product, i) => <Link className="catalog-card" key={product.slug} href={`/products/${product.slug}`}><span className="kicker">{String(i + 1).padStart(2, "0")} · {product.eyebrow}</span><ProductVisual type={product.visual} compact /><h3>{product.name}</h3><p>{product.summary}</p><footer><span>View details</span><ArrowUpRight size={16} /></footer></Link>)}</div>
    </div></section>
    <QuoteBand />
  </>;
}
