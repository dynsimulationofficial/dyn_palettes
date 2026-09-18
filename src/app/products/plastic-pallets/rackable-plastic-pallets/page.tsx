import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "plastic-pallets" as const;
const productSlug = "rackable-plastic-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Rackable Plastic Pallet Manufacturer | DYN Pallets",
  description:
    "Rackable plastic pallets for warehouse racking, including HDPE, heavy-duty, solid top, steel reinforced, 4-way, 48x40 and 1200x1000 options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
