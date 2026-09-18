import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "chemical-pallets" as const;
const productSlug = "cp5-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "CP5 760x1140 Pallets with IPPC Export Options | DYN Pallets",
  description:
    "CP5 wooden pallets in 760x1140 mm format for chemical and industrial handling, with 3-runner, 4-way, heat-treated, IPPC and ISPM 15 export options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
