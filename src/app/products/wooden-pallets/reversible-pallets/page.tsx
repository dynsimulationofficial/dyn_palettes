import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "reversible-pallets", name: "Reversible Pallets", eyebrow: "DECKING ON BOTH FACES",
  summary: "Reversible pallet builds for selected industrial handling and load conditions.",
  description: "Reversible pallet construction provides usable deck surfaces on both faces where the handling system and load application benefit from that format.",
  applications: ["Industrial handling", "Warehouse movement", "Storage", "Specialised shipping"],
  features: ["Reversible decking", "Application-led entry", "Custom sizing", "Selected timber construction"],
  specs: [{ label: "Deck", value: "Reversible" }, { label: "Entry", value: "Application-led" }, { label: "Sizing", value: "Custom" }, { label: "Material", value: "Selected timber" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/reversible-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
