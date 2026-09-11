import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { products } from "@/data/site";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  return <>
    <PageHero kicker={product.eyebrow} title={product.name} text={product.summary} back={{ href: "/products", label: "All products" }} visual={product.visual} />
    <section className="content-section"><div className="content-shell">
      <div className="content-grid"><h2>Designed around the real handling condition.</h2><div><p className="lead">{product.description}</p><p>Share the footprint, quantity, expected static or dynamic load, handling equipment and delivery location. For export requirements, add the destination country and any treatment requirement already specified by your customer or freight partner.</p></div></div>
      <div className="spec-grid">{product.specs.map(s => <div className="spec" key={s.label}><small>{s.label}</small><strong>{s.value}</strong></div>)}</div>
      <div className="list-columns"><div className="list-block"><h3>Key build options</h3><ul className="check-list">{product.features.map(x => <li key={x}>{x}</li>)}</ul></div><div className="list-block"><h3>Typical applications</h3><ul className="check-list">{product.applications.map(x => <li key={x}>{x}</li>)}</ul></div></div>
    </div></section>
    <QuoteBand title={`Need a quote for ${product.name.toLowerCase()}?`} text="Send the size, quantity, load and delivery location. Add a drawing or reference image if you have one." />
  </>;
}
