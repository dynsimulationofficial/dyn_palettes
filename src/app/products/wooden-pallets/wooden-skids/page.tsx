import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "wooden-skids", name: "Wooden Skids", eyebrow: "MACHINERY TRANSPORT BASES",
  summary: "Wooden skid bases for machinery, fabricated equipment and project cargo.",
  description: "Wooden skids create a strong transport foundation for equipment that needs forklift access, mechanical securing and integration with crate or barrier protection.",
  applications: ["Machinery", "Fabricated equipment", "Project cargo", "Industrial exports"],
  features: ["Skid or machinery-base format", "Custom sizing", "Engineered load requirement", "Crate and barrier compatible"],
  specs: [{ label: "Format", value: "Skid / machinery base" }, { label: "Sizing", value: "Custom" }, { label: "Load", value: "Engineered to requirement" }, { label: "Protection", value: "Crate / barrier compatible" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/wooden-skids" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
