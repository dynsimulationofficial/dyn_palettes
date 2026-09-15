import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { products } from "@/data/site";

export const metadata = { title: "Catalogue" };

export default function CataloguePage() {
  return <>
    <PageHero kicker="CATALOGUE" title="A fast map of the range." text="Review the core product families, then send the exact size, quantity, load and delivery location for a commercial quote." visual="pallet" />
    <section className="cards-page light-surface"><div className="catalogue-panel"><div><span className="kicker">DYN PALLETS · PRODUCT CATALOGUE</span><h2>13 product families. One requirement-led process.</h2><p>This online catalogue is structured as a procurement guide rather than a fixed price list. Industrial packaging is quoted against the confirmed requirement.</p><Link href="/contact" className="button button-primary">Request catalogue + quote <ArrowUpRight size={18} /></Link></div><div className="catalogue-sheet"><div className="brand"><span className="brand-mark"><i/><i/><i/></span><span className="brand-type"><strong>DYN</strong><b>PALLETS</b></span></div><h3>Industrial Packaging Systems</h3><p>Product overview · 2026</p><div className="sheet-lines">{products.slice(0,7).map(p => <span key={p.slug}>{p.name}</span>)}</div></div></div></section>
  </>;
}
