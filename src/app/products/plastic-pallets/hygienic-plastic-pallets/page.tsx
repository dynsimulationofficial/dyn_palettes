import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "plastic-pallets" as const;
const productSlug = "hygienic-plastic-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Food & Pharma Hygienic Plastic Pallets | DYN Pallets",
  description:
    "Washable hygienic plastic pallets for food, pharma and cleanroom handling, with HDPE, closed deck, rackable, 4-way and 1200x1000 options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
