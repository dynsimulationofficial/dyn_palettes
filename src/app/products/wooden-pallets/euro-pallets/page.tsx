import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "euro-pallets",
  name: "Euro Pallets",
  eyebrow: "STANDARDISED MATERIAL FLOW",
  summary: "Euro-format wooden pallets for standardised handling and storage footprints.",
  description: "Euro pallet formats support businesses that rely on consistent dimensions and predictable forklift handling across storage and transport networks.",
  applications: ["Warehousing", "Distribution", "Manufacturing", "Export logistics"],
  features: ["Euro / EPAL-style requirement", "4-way handling", "Block pallet construction", "Heat treatment available"],
  specs: [{ label: "Format", value: "Euro / EPAL-style requirement" }, { label: "Entry", value: "4-way" }, { label: "Construction", value: "Block pallet" }, { label: "Treatment", value: "HT available" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`,
  description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/euro-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
