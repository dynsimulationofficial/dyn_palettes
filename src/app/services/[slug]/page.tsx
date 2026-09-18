import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExactServicePage } from "@/components/ExactServicePage";
import { getSiteUrl } from "@/data/config";
import { exactServiceContent } from "@/data/serviceExactContent";
import { services } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = exactServiceContent[slug];

  if (!page) {
    return { title: "Service Not Found", robots: { index: false, follow: false } };
  }

  const canonical = `/services/${slug}`;

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: "DYN Pallets",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = exactServiceContent[slug];
  if (!page) notFound();
  return <ExactServicePage page={page} siteUrl={getSiteUrl()} />;
}
