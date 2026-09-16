import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp9-pallets", name: "CP9 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP9 perimeter-base pallet format for selected chemical-industry requirements.", description: "CP9 pallets can be configured around selected chemical-industry cargo, perimeter-base requirements and transport conditions.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP9-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP9" }, { label: "Typical footprint", value: "1140 × 1140 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp9-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
