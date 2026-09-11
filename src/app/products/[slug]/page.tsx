import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Forklift, PackageCheck, Ruler, Ship } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { products } from "@/data/site";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  const related = products.filter(p => p.slug !== product.slug).slice(0, 3);

  return <>
    <PageHero kicker={product.eyebrow} title={product.name} text={product.summary} back={{ href: "/products", label: "All products" }} visual={product.visual} />
    <section className="content-section"><div className="content-shell">
      <div className="content-grid"><h2>Designed around the real handling condition.</h2><div><p className="lead">{product.description}</p><p>Share the footprint, quantity, expected static or dynamic load, handling equipment and delivery location. For export requirements, add the destination country and any treatment requirement already specified by your customer or freight partner.</p></div></div>
      <div className="spec-grid">{product.specs.map(s => <div className="spec" key={s.label}><small>{s.label}</small><strong>{s.value}</strong></div>)}</div>
      <div className="list-columns"><div className="list-block"><h3>Key build options</h3><ul className="check-list">{product.features.map(x => <li key={x}>{x}</li>)}</ul></div><div className="list-block"><h3>Typical applications</h3><ul className="check-list">{product.applications.map(x => <li key={x}>{x}</li>)}</ul></div></div>
    </div></section>

    <section className="section detail-decision-section">
      <div className="section-heading split-heading"><div><span className="kicker">WHAT DEFINES THE BUILD</span><h2>Four inputs shape<br/><em>the final specification.</em></h2></div><p>The same product name can require a very different construction once load, lift access, route and protection requirements change.</p></div>
      <div className="detail-decision-grid">
        <div><Ruler size={20}/><span>01</span><h3>Dimensions</h3><p>Cargo footprint, height, overhang limits and any rack or container constraints.</p></div>
        <div><Forklift size={20}/><span>02</span><h3>Handling</h3><p>Forklift direction, pallet-truck use, crane handling or repeated warehouse movement.</p></div>
        <div><Ship size={20}/><span>03</span><h3>Shipment route</h3><p>Domestic dispatch, export freight, storage duration and treatment requirements.</p></div>
        <div><PackageCheck size={20}/><span>04</span><h3>Protection level</h3><p>Open pallet, enclosure, blocking, barrier materials or combined packing support.</p></div>
      </div>
    </section>

    <section className="section detail-enquiry-section light-surface">
      <div className="detail-enquiry-panel">
        <div><span className="kicker">FASTEST WAY TO QUOTE</span><h2>Send the practical inputs first.</h2><p>You do not need a finished technical specification. The following information gives us a clear starting point for review.</p></div>
        <div className="detail-input-list">{["Overall dimensions","Approximate load","Required quantity","Handling method","Delivery location","Destination country for export","Drawing or reference photo","Any treatment requirement"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b></div>)}</div>
      </div>
    </section>

    <section className="section related-section">
      <div className="section-heading split-heading"><div><span className="kicker">RELATED PRODUCT ROUTES</span><h2>Compare adjacent<br/><em>packaging options.</em></h2></div><p>If the load or shipment condition changes, a different pallet, box or crate route may be more appropriate.</p></div>
      <div className="related-link-grid">{related.map((item,i)=><Link key={item.slug} href={`/products/${item.slug}`}><span>{String(i+1).padStart(2,"0")}</span><div><small>{item.eyebrow}</small><h3>{item.name}</h3><p>{item.summary}</p></div><ArrowUpRight size={18}/></Link>)}</div>
    </section>

    <QuoteBand title={`Need a quote for ${product.name.toLowerCase()}?`} text="Send the size, quantity, load and delivery location. Add a drawing or reference image if you have one." />
  </>;
}
