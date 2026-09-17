import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "wooden-crates";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Wooden Crate Manufacturer | Heavy Machinery Shipping Crates | DYN Pallets",
  description:
    "Custom wooden shipping crates for machinery, heavy equipment and export cargo, including heavy-duty, heat-treated, ISPM 15-ready and seaworthy crate designs.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
