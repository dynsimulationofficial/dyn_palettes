import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/config";
import { services } from "@/data/site";
import { productRoutes as allProductRoutes } from "@/data/products";

/**
 * Evaluated once per build, so every entry in a given deploy carries the same
 * lastmod. Search Console previously reported no change signal at all for the
 * 63 sitemap URLs, which is why Discovery crawling stalled at 12%.
 */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/industries`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/custom-solutions`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productRouteEntries: MetadataRoute.Sitemap = allProductRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.split("/").filter(Boolean).length === 2 ? 0.82 : 0.76,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRouteEntries, ...serviceRoutes];
}
