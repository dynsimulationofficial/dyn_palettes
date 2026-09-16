import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp7-pallets", name: "CP7 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP7 pallet format for chemical-industry storage, handling and freight.", description: "CP7 pallets can be configured around chemical-industry load, storage, handling and freight requirements.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP7-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP7" }, { label: "Typical footprint", value: "1100 × 1300 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp7-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
