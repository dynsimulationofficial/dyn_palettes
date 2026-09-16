import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp8-pallets", name: "CP8 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP8 square pallet format for suitable drums, containers and chemical loads.", description: "CP8 pallets can be reviewed around suitable drums, containers, chemical loads and handling conditions.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP8-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP8" }, { label: "Typical footprint", value: "1140 × 1140 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp8-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
