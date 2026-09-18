import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "plastic-pallets" as const;
const productSlug = "1200x1000-plastic-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "1200x1000 Plastic Pallets for Industrial Use | DYN Pallets",
  description:
    "1200x1000 plastic pallets for warehouse, racking, export and industrial handling, including HDPE, heavy-duty, 4-way, perforated and high-load options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
