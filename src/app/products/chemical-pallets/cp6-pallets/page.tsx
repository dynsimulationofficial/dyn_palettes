import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp6-pallets", name: "CP6 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP6 pallet format with application-led construction for chemical supply chains.", description: "CP6 pallets can be configured around chemical-industry storage, handling and freight requirements.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP6-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP6" }, { label: "Typical footprint", value: "1000 × 1200 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp6-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
