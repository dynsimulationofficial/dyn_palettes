import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "plastic-pallets" as const;
const productSlug = "48x40-plastic-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "48x40 Plastic Pallets for Warehouse & GMA Use | DYN Pallets",
  description:
    "48x40 plastic pallets for warehouse, retail and racking applications, including HDPE, heavy-duty, black rackable, stackable, nestable and reusable options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
