import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getCatalogProduct, getProductCategory } from "@/data/productCatalog";

const category = getProductCategory("chemical-pallets");
const product = getCatalogProduct("chemical-pallets", "cp9-pallets");

export const metadata: Metadata = {
  title: product ? `${product.name} | DYN Pallets` : "Product | DYN Pallets",
  description: product?.summary,
  alternates: { canonical: "/products/chemical-pallets/cp9-pallets" },
};

export default function Page() {
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
