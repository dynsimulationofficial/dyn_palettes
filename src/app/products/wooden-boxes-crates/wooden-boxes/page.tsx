import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "wooden-boxes";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Wooden Boxes Manufacturer | Industrial Packing Boxes",
  description:
    "DYN Pallets manufactures custom wooden boxes, industrial wooden packing boxes, heavy-duty boxes and export wooden boxes with heat-treated and ISPM 15-ready options.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
