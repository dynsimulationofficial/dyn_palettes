import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View industrial pallet, crate, box and packaging project examples from DYN Pallets for material handling, warehouse flow and export requirements.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  { title:"Warehouse pallet flow", label:"Industrial handling", image:"https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { title:"Stacked pallet systems", label:"Repeatable storage", image:"https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { title:"Freight movement", label:"Dispatch ready", image:"https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { title:"Wooden crate systems", label:"Protected storage", image:"https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
];

export default function GalleryPage() {
  return <>
    <PageHero kicker="GALLERY" title="Packaging systems in form." text="A visual overview of the pallet, box, crate and skid formats that shape our industrial packaging work." visual="crate" />
    <section className="cards-page gallery-photo-page light-surface">
      <div className="gallery-photo-grid">
        {galleryItems.map((item, i) => <article className={`gallery-photo-card ${i === 0 ? "gallery-photo-wide" : ""}`} key={item.title}>
          <div className="gallery-photo-bg" style={{backgroundImage:`linear-gradient(180deg,transparent 25%,rgba(8,9,8,.84) 100%),url('${item.image}')`}} />
          <div className="gallery-photo-meta"><span>{String(i+1).padStart(2,"0")} / FIELD VIEW</span><h2>{item.title}</h2><p>{item.label}</p></div>
        </article>)}
        <article className="gallery-tech-card"><ProductVisual type="pallet" /><footer><span>05 · Engineered pallet</span><span>Load-led structure</span></footer></article>
        <article className="gallery-tech-card"><ProductVisual type="crate" /><footer><span>06 · Crate system</span><span>Transit protection</span></footer></article>
      </div>
    </section>
    <QuoteBand />
  </>;
}
