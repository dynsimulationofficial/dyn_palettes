import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProductVisual } from "./ProductVisual";

export function PageHero({ kicker, title, text, back, visual = "pallet" }: { kicker: string; title: string; text: string; back?: { href: string; label: string }; visual?: "pallet" | "box" | "crate" | "plastic" }) {
  return (
    <section className="page-hero texture-grid">
      <div className="page-hero-copy">
        {back && <Link className="back-link" href={back.href}><ArrowLeft size={14} /> {back.label}</Link>}
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions"><Link href="/contact" className="button button-primary">Get a quote <ArrowUpRight size={18} /></Link><Link href="/catalogue" className="text-link">View catalogue <ArrowUpRight size={15} /></Link></div>
      </div>
      <ProductVisual type={visual} />
    </section>
  );
}
