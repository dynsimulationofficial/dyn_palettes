import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "stringer-pallets", name: "Stringer Pallets", eyebrow: "PROVEN STRUCTURAL FORMAT",
  summary: "Stringer pallet construction for dependable warehouse and shipping loads.",
  description: "Stringer pallets use longitudinal supporting members to create a practical, repairable and cost-efficient industrial pallet platform.",
  applications: ["Warehousing", "Manufacturing", "Shipping", "Industrial logistics"],
  features: ["Stringer construction", "2-way or partial 4-way entry", "Standard or custom sizing", "Pine or hardwood material"],
  specs: [{ label: "Construction", value: "Stringer" }, { label: "Entry", value: "2-way / partial 4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Material", value: "Pine / hardwood" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/stringer-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
