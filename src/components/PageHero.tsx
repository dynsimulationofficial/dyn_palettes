import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProductVisual } from "./ProductVisual";

export function PageHero({
  kicker,
  title,
  text,
  back,
  visual = "pallet",
  image,
  imageLabel = "INDUSTRIAL PACKAGING",
  imageMeta = "LOAD · HANDLING · TRANSIT",
}: {
  kicker: string;
  title: string;
  text: string;
  back?: { href: string; label: string };
  visual?: "pallet" | "box" | "crate" | "plastic";
  image?: string;
  imageLabel?: string;
  imageMeta?: string;
}) {
  return (
    <section className={`page-hero texture-grid ${image ? "page-hero-photo-mode" : ""}`}>
      <div className="page-hero-copy">
        {back && <Link className="back-link" href={back.href}><ArrowLeft size={14} /> {back.label}</Link>}
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions"><Link href="/contact" className="button button-primary">Get a quote <ArrowUpRight size={18} /></Link><Link href="/catalogue" className="text-link">View catalogue <ArrowUpRight size={15} /></Link></div>
      </div>

      {image ? (
        <div className="page-hero-photo" aria-label={imageLabel}>
          <div className="page-hero-photo-bg" style={{ backgroundImage: `url('${image}')` }} />
          <div className="page-hero-photo-grid" />
          <div className="page-hero-photo-corners"><i/><i/><i/><i/></div>
          <div className="page-hero-photo-top"><span><i /> DYN / FIELD VIEW</span><b>LIVE MATERIAL ROUTE</b></div>
          <div className="page-hero-photo-bottom"><span>{imageLabel}</span><b>{imageMeta}</b></div>
        </div>
      ) : (
        <ProductVisual type={visual} />
      )}
    </section>
  );
}
