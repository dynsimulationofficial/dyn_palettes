import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const fallbackImages = {
  pallet: "/wooden-pallets-performance.webp",
  box: "https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&fm=webp&q=58&w=1800",
  crate: "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&q=58&w=1800",
  plastic: "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&q=58&w=1800",
} as const;

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
  const resolvedImage = image || fallbackImages[visual];

  return (
    <section className="page-hero texture-grid page-hero-photo-mode">
      <div className="page-hero-copy">
        {back && <Link className="back-link" href={back.href}><ArrowLeft size={14} /> {back.label}</Link>}
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions"><Link href="/contact" className="button button-primary">Get a quote <ArrowUpRight size={18} /></Link><Link href="/products" className="text-link">Browse products <ArrowUpRight size={15} /></Link></div>
      </div>

      <div className="page-hero-photo page-hero-photo-static" aria-label={imageLabel}>
        <div className="page-hero-photo-bg" style={{ backgroundImage: `url('${resolvedImage}')` }} />
        <div className="page-hero-photo-grid" />
        <div className="page-hero-photo-corners"><i/><i/><i/><i/></div>
        <div className="page-hero-photo-top"><span><i /> DYN / FIELD VIEW</span><b>PACKAGING SYSTEM</b></div>
        <div className="page-hero-photo-bottom"><span>{imageLabel}</span><b>{imageMeta}</b></div>
      </div>
    </section>
  );
}
