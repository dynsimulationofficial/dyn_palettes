import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/config";
import { services } from "@/data/site";
import { productRoutes as allProductRoutes } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/gallery`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/industries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/custom-solutions`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productRouteEntries: MetadataRoute.Sitemap = allProductRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route.split("/").filter(Boolean).length === 2 ? 0.82 : 0.76,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRouteEntries, ...serviceRoutes];
}
