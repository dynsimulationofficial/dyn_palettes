import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp3-pallets", name: "CP3 Pallets", eyebrow: "CP-SERIES PALLET", summary: "Square CP3 pallet format for selected chemical-industry loads.", description: "CP3 pallets can be configured around suitable chemical-industry loads, handling equipment and transport conditions.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP3-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP3" }, { label: "Typical footprint", value: "1140 × 1140 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp3-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
