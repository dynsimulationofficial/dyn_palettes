import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp1-pallets", name: "CP1 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP1 pallet format for chemical-industry handling and transport requirements.", description: "CP1 pallets can be configured around chemical-industry load, container, handling and treatment requirements.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP1-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP1" }, { label: "Typical footprint", value: "1000 × 1200 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp1-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
