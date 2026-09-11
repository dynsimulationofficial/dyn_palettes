import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Boxes, Forklift, PackageCheck, Ruler, ShieldCheck, Ship, Weight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { QuoteBand } from "@/components/QuoteBand";
import { Reveal } from "@/components/Motion";
import { products } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse industrial wooden pallets, export pallets, heat treated pallets, plywood boxes and packaging formats designed around load, handling and shipment conditions.",
  alternates: { canonical: "/products" },
};

const productsImage = "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

const selectionFactors = [
  ["01", "Load", "Approximate static and dynamic weight, centre of gravity and concentrated load points.", Weight],
  ["02", "Handling", "Forklift direction, pallet-truck access, crane lifting, conveyor use and floor movement.", Forklift],
  ["03", "Footprint", "Cargo dimensions, overhang limits, rack compatibility and container utilisation.", Ruler],
  ["04", "Protection", "Open pallet, enclosed box, crate, barrier film, VCI or combined protection layers.", ShieldCheck],
  ["05", "Route", "Domestic dispatch, export freight, long storage, repeated handling or project cargo movement.", Ship],
  ["06", "Repeatability", "One-off project build or repeat specification for ongoing procurement and dispatch.", PackageCheck],
] as const;

const productFaqs = [
  ["Can you manufacture custom pallet sizes?", "Yes. Custom dimensions, entry direction, member sizes, deck spacing and reinforcement can be reviewed around the load and handling method."],
  ["Which pallet is best for export shipments?", "The right format depends on destination, cargo, load and shipment route. Export pallets, heat-treated pallets, wooden boxes and crates can all be appropriate depending on the requirement."],
  ["Do you supply both 2-way and 4-way pallets?", "Yes. Entry format can be selected around forklift access, warehouse flow, load path and the required construction style."],
  ["Can the packaging include treatment and securing?", "Yes. Product supply can be combined with heat treatment, fumigation where applicable, industrial packing, VCI, vacuum packing, lashing and chocking."],
] as const;

export default function ProductsPage() {
  return <>
    <PageHero
      kicker="PRODUCT RANGE"
      title="Built for every kind of load."
      text="From standard warehouse pallets to export crates and high-load machinery bases, choose a starting format and we’ll tune the build around your requirement."
      image={productsImage}
      imageLabel="WOODEN PALLET SYSTEMS"
      imageMeta="STANDARD · CUSTOM · EXPORT"
    />

    <section className="section product-overview-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">PRODUCT OVERVIEW</span><h2>One range.<br/><em>Different load conditions.</em></h2></div><p>Our product portfolio is organised by the way industrial cargo needs to move: open pallet handling, standardised footprints, high-load bases, enclosed protection and export-ready timber packaging.</p></Reveal>
      <div className="product-signal-grid">
        <div><strong>13</strong><span>Product formats</span><p>Pallet, box, crate and plastic routes.</p></div>
        <div><strong>2 / 4</strong><span>Entry options</span><p>Directional or flexible forklift access.</p></div>
        <div><strong>HT</strong><span>Export-ready route</span><p>Heat-treatment support where applicable.</p></div>
        <div><strong>Custom</strong><span>Load-led builds</span><p>Dimensions and structure tuned to requirement.</p></div>
      </div>
    </section>

    <section className="cards-page product-catalog-section"><div className="cards-shell">
      <Reveal className="cards-intro"><h2>13 industrial packaging formats.</h2><p>Each product can be adapted around size, entry direction, material, treatment, expected load and shipment conditions.</p></Reveal>
      <div className="catalog-grid">{products.map((product, i) => <Reveal key={product.slug} delay={(i%3)*35}><Link className="catalog-card" href={`/products/${product.slug}`}><span className="kicker">{String(i + 1).padStart(2, "0")} · {product.eyebrow}</span><ProductVisual type={product.visual} compact /><h3>{product.name}</h3><p>{product.summary}</p><footer><span>View details</span><ArrowUpRight size={16} /></footer></Link></Reveal>)}</div>
    </div></section>

    <section className="section choose-product-section light-surface">
      <Reveal className="section-heading split-heading"><div><span className="kicker">CHOOSING THE RIGHT FORMAT</span><h2>Start with the movement.<br/><em>Then choose the package.</em></h2></div><p>The strongest product choice comes from the operating condition, not only the dimensions. These six inputs help define the right build quickly.</p></Reveal>
      <div className="selection-factor-grid">
        {selectionFactors.map(([num,title,copy,Icon],i)=><Reveal key={num} delay={i*45}><div className="selection-factor-card"><div><span>{num}</span><Icon size={20}/></div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}
      </div>
    </section>

    <section className="section product-route-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">COMMON REQUIREMENT ROUTES</span><h2>Tell us what the load needs.<br/><em>We’ll narrow the range.</em></h2></div><p>You do not need to identify the exact product before enquiring. A few practical inputs are usually enough to route the requirement.</p></Reveal>
      <div className="product-route-grid">
        <div className="product-route-card"><span>WAREHOUSE FLOW</span><h3>Repeat movement and storage</h3><p>Wooden, pinewood, Euro, 2-way and 4-way pallets for recurring handling environments.</p><Link href="/products/wooden-pallets">Explore pallet routes <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card"><span>EXPORT FREIGHT</span><h3>Border-ready timber packaging</h3><p>Export and heat-treated pallets, wooden boxes and crates aligned to shipment conditions.</p><Link href="/products/export-pallets">Explore export routes <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card"><span>HIGH LOAD</span><h3>Machinery and dense cargo</h3><p>Heavy-duty pallets, skids and framed crates with load-focused structural members.</p><Link href="/products/heavy-duty-pallets">Explore high-load routes <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card"><span>CLEAN / MOISTURE-SENSITIVE</span><h3>Controlled handling environments</h3><p>Plastic pallets, plywood boxes and barrier protection routes for sensitive operations.</p><Link href="/products/plastic-pallets">Explore controlled routes <ArrowUpRight size={15}/></Link></div>
      </div>
      <Reveal className="product-custom-cta"><div><Boxes size={25}/><div><span className="kicker">CUSTOM REQUIREMENT</span><h3>Odd footprint, unusual lift points or a non-standard load?</h3><p>Share a drawing, photograph or approximate dimensions. We can review a custom pallet, skid, box or crate route.</p></div></div><Link href="/contact" className="button button-primary">Send your requirement <ArrowUpRight size={17}/></Link></Reveal>
    </section>

    <section className="section product-faq-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">PRODUCT QUESTIONS</span><h2>Useful answers<br/><em>before you specify.</em></h2></div><p>Common questions from procurement, warehouse and export teams comparing pallet and packaging formats.</p></Reveal>
      <div className="product-faq-grid">{productFaqs.map(([q,a],i)=><Reveal key={q} delay={i*40}><details><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details></Reveal>)}</div>
      <Reveal><Link href="/contact" className="wide-link textured-link"><span>Still not sure which product fits?</span><span>Share the load <ArrowRight size={17}/></span></Link></Reveal>
    </section>

    <QuoteBand />
  </>;
}
