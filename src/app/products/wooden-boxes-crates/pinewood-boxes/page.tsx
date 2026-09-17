import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "pinewood-boxes";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Pinewood Box Manufacturer | Machinery & Export Packing | DYN Pallets",
  description:
    "Custom pinewood boxes for machinery, industrial packing and export shipping, including heavy-duty, heat-treated, ISPM 15-ready and seaworthy configurations.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
