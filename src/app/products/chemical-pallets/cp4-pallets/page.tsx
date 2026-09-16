import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp4-pallets", name: "CP4 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP4 pallet format for defined chemical and process-industry handling routes.", description: "CP4 pallets can be developed around chemical-industry cargo, handling method, load distribution and shipment route.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP4-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP4" }, { label: "Typical footprint", value: "1100 × 1300 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp4-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
