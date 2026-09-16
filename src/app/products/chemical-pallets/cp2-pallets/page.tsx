import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp2-pallets", name: "CP2 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP2 pallet format for chemical and industrial material movement.", description: "CP2 pallets can be reviewed around chemical-industry load conditions, container handling and shipment requirements.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP2-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP2" }, { label: "Typical footprint", value: "800 × 1200 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp2-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
