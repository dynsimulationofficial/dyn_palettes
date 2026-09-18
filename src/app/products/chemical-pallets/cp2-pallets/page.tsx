import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "chemical-pallets" as const;
const productSlug = "cp2-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "CP2 1200x800 Pallets & 3 Runner Chemical Pallets | DYN Pallets",
  description:
    "CP2 wooden pallets in 1200x800 mm 3-runner format for chemical-industry, industrial and export use, with pinewood, heat-treated and ISPM 15 options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
