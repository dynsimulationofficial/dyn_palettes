import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getCatalogProduct, getProductCategory } from "@/data/productCatalog";

const category = getProductCategory("wooden-pallets");
const product = getCatalogProduct("wooden-pallets", "stringer-pallets");

export const metadata: Metadata = {
  title: product ? `${product.name} | DYN Pallets` : "Product | DYN Pallets",
  description: product?.summary,
  alternates: { canonical: "/products/wooden-pallets/stringer-pallets" },
};

export default function Page() {
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
