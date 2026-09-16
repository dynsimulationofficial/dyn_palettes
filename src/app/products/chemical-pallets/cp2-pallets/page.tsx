import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "chemical-pallets" as const;
const productSlug = "cp2-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: `${product.name} for Industrial Use | DYN Pallets`,
  description: product.summary,
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
