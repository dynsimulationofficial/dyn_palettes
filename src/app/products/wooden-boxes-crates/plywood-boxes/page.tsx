import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "plywood-boxes", name: "Plywood Boxes", eyebrow: "CLEAN ENCLOSED PACKAGING", summary: "Plywood boxes for clean, enclosed industrial and export protection.", description: "Plywood boxes pair timber framing with sheet enclosure for equipment that needs dimensional accuracy, cleaner surfaces and lower tare weight.", applications: ["Engineering equipment", "Industrial exports", "Protected storage"], features: ["Plywood panels", "Timber frame", "Custom sizing", "Treatment as applicable"], specs: [{ label: "Panels", value: "Plywood" }, { label: "Frame", value: "Timber" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "As applicable" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/plywood-boxes" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
