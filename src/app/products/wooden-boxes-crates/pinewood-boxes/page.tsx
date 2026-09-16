import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "pinewood-boxes", name: "Pinewood Boxes", eyebrow: "EXPORT-FRIENDLY TIMBER BOX", summary: "Pinewood boxes for machinery, engineering products and seaworthy packing routes.", description: "Pinewood box construction provides a practical timber enclosure that can be configured around product weight, shipment route and export treatment needs.", applications: ["Machinery", "Engineering products", "Industrial exports", "Protected storage"], features: ["Pinewood construction", "Skid or pallet base", "Custom sizing", "Heat treatment available"], specs: [{ label: "Material", value: "Pinewood" }, { label: "Base", value: "Skid / pallet base" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "HT available" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/pinewood-boxes" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
