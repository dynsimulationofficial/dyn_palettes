import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/", "/_next/"],
    },
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
    host: siteUrl || undefined,
  };
}
