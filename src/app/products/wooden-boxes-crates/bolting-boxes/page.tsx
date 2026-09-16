import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "bolting-boxes", name: "Bolting Boxes", eyebrow: "SERVICEABLE HEAVY ENCLOSURE", summary: "Bolted wooden boxes for equipment that may need controlled opening or reassembly.", description: "Bolting boxes use mechanical fasteners in selected structural areas to support robust protection and practical access during industrial handling.", applications: ["Heavy equipment", "Project cargo", "Industrial exports", "Protected storage"], features: ["Bolted or screwed closure", "Timber frame", "Custom sizing", "Heavy cargo use"], specs: [{ label: "Closure", value: "Bolted / screwed" }, { label: "Frame", value: "Timber" }, { label: "Sizing", value: "Custom" }, { label: "Use", value: "Heavy / project cargo" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/bolting-boxes" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
