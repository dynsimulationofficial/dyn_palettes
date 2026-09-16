import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "wooden-crates", name: "Wooden Crates", eyebrow: "OPEN OR CLOSED FRAMING", summary: "Wooden crates for machinery, assemblies and irregular industrial cargo.", description: "Crate systems provide structural protection while allowing inspection, ventilation and flexible securing for large or irregular cargo.", applications: ["Machinery", "Engineering assemblies", "Project cargo", "Industrial exports"], features: ["Open or closed framing", "Heavy skid base", "Forklift or crane planning", "Custom sizing"], specs: [{ label: "Style", value: "Open / closed" }, { label: "Base", value: "Heavy skid" }, { label: "Lifting", value: "Forklift / crane planning" }, { label: "Sizing", value: "Custom" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/wooden-crates" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
