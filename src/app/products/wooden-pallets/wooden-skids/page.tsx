import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "wooden-skids";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Wooden Skids for Sale | Heavy Duty Machinery Skids | DYN Pallets",
  },
  description:
    "DYN Pallets supplies wooden skids for machinery, industrial handling, shipping and export. Get custom, heavy-duty, heat-treated and ISPM 15 skid options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
