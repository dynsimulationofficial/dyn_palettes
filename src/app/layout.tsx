import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteFx } from "@/components/SiteFx";
import { JsonLd } from "@/components/JsonLd";
import { getSiteUrl, siteConfig } from "@/data/config";
import { productCategories } from "@/data/products";
import { services } from "@/data/site";

const siteUrl = getSiteUrl();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  applicationName: "DYN Pallets",

  title: {
    default: "Industrial Wooden Pallets & Packaging | DYN Pallets",
    template: "%s | DYN Pallets",
  },

  description:
    "DYN Pallets supplies industrial wooden pallets, export pallets, heat treated pallets, wooden crates, plywood boxes and industrial packaging solutions for commercial and export requirements.",

  alternates: siteUrl
    ? {
        canonical: "/",
      }
    : undefined,

  // Images come from app/opengraph-image.tsx and app/twitter-image.tsx, which
  // render real PNGs. File-based metadata outranks this object, so listing
  // `images` here would be ignored anyway.
  openGraph: siteUrl
    ? {
        type: "website",
        url: siteUrl,
        siteName: "DYN Pallets",
        locale: "en_IN",
        title: "Industrial Wooden Pallets & Packaging | DYN Pallets",
        description:
          "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and export logistics.",
      }
    : undefined,

  twitter: siteUrl
    ? {
        card: "summary_large_image",
        title: "Industrial Wooden Pallets & Packaging | DYN Pallets",
        description:
          "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and industrial packing services for B2B supply chains.",
      }
    : undefined,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  creator: "DYN Pallets",
  publisher: "DYN Pallets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationId = `${siteUrl}/#organization`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,

    name: siteConfig.name,
    url: siteUrl || undefined,
    slogan: siteConfig.tagline,

    logo: {
      "@type": "ImageObject",
      url: siteUrl ? `${siteUrl}/icon.svg` : "/icon.svg",
      width: 64,
      height: 64,
    },
    image: siteUrl ? `${siteUrl}/opengraph-image` : undefined,

    description:
      "Industrial wooden pallets, export pallets, wooden crates, plywood boxes and industrial packaging solutions for commercial and export requirements.",

    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),

    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    // Supply is national, not just Mumbai: Search Console shows India at 76% of
    // impressions and the best position of any market.
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phoneHref.replace("tel:", ""),
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
    ],

    knowsAbout: [
      "Wooden pallets",
      "Export pallets",
      "Heat treated pallets",
      "CP-series chemical pallets",
      "Plastic pallets",
      "Wooden boxes and crates",
      "Industrial packing",
      "Container lashing and chocking",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Products and services",
      itemListElement: [
        ...productCategories.map((category) => ({
          "@type": "OfferCatalog",
          name: category.name,
          url: `${siteUrl}/products/${category.slug}`,
        })),
        ...services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name, url: `${siteUrl}/services/${service.slug}` },
        })),
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,

    name: siteConfig.name,
    url: siteUrl || undefined,
    inLanguage: "en",
    publisher: { "@id": organizationId },

    description:
      "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and international shipments.",
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1P63LV32N"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', 'G-Y1P63LV32N');
            `,
          }}
        />

        {/* Ahrefs Web Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ZV6HFdFBPvEYvZbychpr8w"
          async
        />
      </head>

      <body>
        {/* Structured Data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />

        {/* Website */}
        <Header />

        <main>{children}</main>

        <Footer />

        <SiteFx />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;

              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);

            })(window, document, "clarity", "script", "ylp32ta0wg");
          `}
        </Script>
      </body>
    </html>
  );
}