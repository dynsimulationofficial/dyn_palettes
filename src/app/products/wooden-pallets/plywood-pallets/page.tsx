import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "plywood-pallets", name: "Plywood Pallets", eyebrow: "CONSISTENT ENGINEERED PANELS",
  summary: "Plywood pallet formats for selected clean and weight-conscious applications.",
  description: "Plywood pallet construction can be considered where dimensional consistency, lower tare weight and a clean engineered finish are useful.",
  applications: ["Clean handling", "Warehousing", "Manufacturing", "Export logistics"],
  features: ["Plywood and timber members", "2-way or 4-way entry", "Custom sizing", "Domestic or export use"],
  specs: [{ label: "Material", value: "Plywood + timber members" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Custom" }, { label: "Use", value: "Domestic / export" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/plywood-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
