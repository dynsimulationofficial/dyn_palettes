import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "bolting-boxes";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Bolting Box Manufacturer | Heavy Machinery Packing Boxes | DYN Pallets",
  description:
    "Heavy-duty bolting boxes for machinery, export and reusable packing, including full bolting, nut bolting, plywood bolting and seaworthy box configurations.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
