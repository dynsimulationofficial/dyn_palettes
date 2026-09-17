import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "rubber-wood-boxes";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Rubber Wood Box Manufacturer | Industrial Shipping Boxes | DYN Pallets",
  description:
    "Custom rubber wood boxes for machinery, industrial packing and shipping, including heavy-duty, export, treatment-specific and seaworthy box configurations.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
