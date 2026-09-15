import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Boxes, Forklift, Image as ImageIcon, PackageCheck, Ruler, ShieldCheck, Ship, Weight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { productCategories } from "@/data/productCatalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse wooden pallets, CP1-CP9 chemical pallets, wooden boxes and crates, and plastic pallet solutions from DYN Pallets.",
  alternates: { canonical: "/products" },
};

const productsImage = "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800";

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
      text="Browse four clear product categories, then choose the exact pallet, box or crate format required for your load and shipment route."
      image={productsImage}
      imageLabel="DYN PALLET SYSTEMS"
      imageMeta="PALLETS · BOXES · CRATES"
    />

    <section className="section product-overview-section light-surface">
      <div className="section-heading split-heading"><div><span className="kicker">PRODUCT OVERVIEW</span><h2>Four categories.<br/><em>Clear product routes.</em></h2></div><p>Products are now organised by category so buyers can move from a broad requirement to the exact pallet or packaging format without searching through an unstructured list.</p></div>
      <div className="product-signal-grid">
        <div><strong>4</strong><span>Main categories</span><p>Wooden, chemical, boxes & crates, plastic.</p></div>
        <div><strong>34</strong><span>Product routes</span><p>Dedicated linked pages across the product system.</p></div>
        <div><strong>CP1–9</strong><span>Chemical series</span><p>Individual CP-series product pages.</p></div>
        <div><strong>Custom</strong><span>Load-led builds</span><p>Dimensions and structure tuned to requirement.</p></div>
      </div>
    </section>

    <section className="cards-page product-catalog-section static-product-catalog"><div className="cards-shell">
      <div className="cards-intro"><h2>Browse by product category.</h2><p>Each category has its own landing page. Product cards use a separate static image area so final product photography can be added without changing the content layout.</p></div>
      <div className="product-category-hub-grid">
        {productCategories.map((category, index) => (
          <article className="product-category-hub-card" key={category.slug}>
            <div className="product-category-hub-image"><ImageIcon size={26}/><span>ADD CATEGORY IMAGE</span></div>
            <div className="product-category-hub-body">
              <span className="kicker">{String(index + 1).padStart(2,"0")} · {category.eyebrow}</span>
              <h3>{category.name}</h3>
              <p>{category.summary}</p>
              {category.items.length > 0 && <div className="product-category-preview-links">
                {category.items.slice(0, 6).map((item) => <Link key={item.slug} href={`/products/${category.slug}/${item.slug}`}>{item.name}<ArrowUpRight size={12}/></Link>)}
              </div>}
              <Link className="product-category-view-all" href={`/products/${category.slug}`}>{category.items.length ? "View all products" : "View product"}<ArrowRight size={15}/></Link>
            </div>
          </article>
        ))}
      </div>
    </div></section>

    <section className="section choose-product-section light-surface">
      <div className="section-heading split-heading"><div><span className="kicker">CHOOSING THE RIGHT FORMAT</span><h2>Start with the movement.<br/><em>Then choose the package.</em></h2></div><p>The strongest product choice comes from the operating condition, not only the dimensions. These six inputs help define the right build quickly.</p></div>
      <div className="selection-factor-grid">
        {selectionFactors.map(([num,title,copy,Icon])=><div className="selection-factor-card static-card" key={num}><div><span>{num}</span><Icon size={20}/></div><h3>{title}</h3><p>{copy}</p></div>)}
      </div>
    </section>

    <section className="section product-route-section">
      <div className="section-heading split-heading"><div><span className="kicker">COMMON REQUIREMENT ROUTES</span><h2>Tell us what the load needs.<br/><em>We’ll narrow the range.</em></h2></div><p>You do not need to identify the exact product before enquiring. A few practical inputs are usually enough to route the requirement.</p></div>
      <div className="product-route-grid">
        <div className="product-route-card static-card"><span>WAREHOUSE FLOW</span><h3>Repeat movement and storage</h3><p>Wooden, pinewood, Euro, 2-way and 4-way pallets for recurring handling environments.</p><Link href="/products/wooden-pallets">Explore wooden pallets <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card static-card"><span>CHEMICAL INDUSTRY</span><h3>CP-series requirements</h3><p>CP1 through CP9 pallet routes for chemical, process and petrochemical supply chains.</p><Link href="/products/chemical-pallets">Explore chemical pallets <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card static-card"><span>ENCLOSED PROTECTION</span><h3>Boxes and crates</h3><p>Wooden boxes, plywood boxes, crates, bolting boxes and pallet collars for protected movement.</p><Link href="/products/wooden-boxes-crates">Explore boxes & crates <ArrowUpRight size={15}/></Link></div>
        <div className="product-route-card static-card"><span>CLEAN / MOISTURE-SENSITIVE</span><h3>Plastic pallet route</h3><p>Reusable plastic pallet options for hygiene-sensitive and moisture-exposed operations.</p><Link href="/products/plastic-pallets">Explore plastic pallets <ArrowUpRight size={15}/></Link></div>
      </div>
      <div className="product-custom-cta static-card"><div><Boxes size={25}/><div><span className="kicker">CUSTOM REQUIREMENT</span><h3>Odd footprint, unusual lift points or a non-standard load?</h3><p>Share a drawing, photograph or approximate dimensions. We can review a custom pallet, skid, box or crate route.</p></div></div><Link href="/contact" className="button button-primary">Send your requirement <ArrowUpRight size={17}/></Link></div>
    </section>

    <section className="section product-faq-section light-surface">
      <div className="section-heading split-heading"><div><span className="kicker">PRODUCT QUESTIONS</span><h2>Useful answers<br/><em>before you specify.</em></h2></div><p>Common questions from procurement, warehouse and export teams comparing pallet and packaging formats.</p></div>
      <div className="product-faq-grid">{productFaqs.map(([q,a],i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
      <Link href="/contact" className="wide-link textured-link"><span>Still not sure which product fits?</span><span>Share the load <ArrowRight size={17}/></span></Link>
    </section>

    <QuoteBand />
  </>;
}
