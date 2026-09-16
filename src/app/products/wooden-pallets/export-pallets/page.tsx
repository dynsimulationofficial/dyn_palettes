import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "export-pallets",
  name: "Export Pallets",
  eyebrow: "BUILT FOR SHIPMENT ROUTES",
  summary: "Export wooden pallets developed around cargo, destination and treatment needs.",
  description: "Export pallets are configured around destination, shipment route, load and applicable timber packaging requirements.",
  applications: ["International shipping", "Container freight", "Export packaging", "Industrial logistics"],
  features: ["Standard or custom sizing", "ISPM-15 route available", "Destination-led treatment planning", "Marking as required"],
  specs: [{ label: "Use", value: "International shipping" }, { label: "Sizing", value: "Standard / custom" }, { label: "Treatment", value: "ISPM-15 route available" }, { label: "Marking", value: "As required" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`,
  description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/export-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
