import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { getProductCategory } from "@/data/productCatalog";

const category = getProductCategory("chemical-pallets");

export const metadata: Metadata = {
  title: "Chemical Pallets | CP1–CP9 | DYN Pallets",
  description: "Browse CP1 to CP9 chemical pallet formats for chemical, petrochemical and industrial handling requirements.",
  alternates: { canonical: "/products/chemical-pallets" },
};

export default function ChemicalPalletsPage() {
  if (!category) notFound();
  return <ProductCategoryPage category={category} />;
}
