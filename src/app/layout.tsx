import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AmbientEffects } from "@/components/Motion";
import { getSiteUrl } from "@/data/config";

const siteUrl = getSiteUrl();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  applicationName: "DYN PALLETS",
  title: {
    default: "DYN PALLETS | Industrial Wooden Pallets & Packaging Solutions",
    template: "%s | DYN PALLETS",
  },
  description:
    "DYN PALLETS supplies industrial wooden pallets, export pallets, heat treated pallets, wooden crates, plywood boxes and industrial packaging solutions for commercial and export requirements.",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: siteUrl
    ? {
        type: "website",
        url: siteUrl,
        siteName: "DYN PALLETS",
        title: "DYN PALLETS | Industrial Wooden Pallets & Packaging Solutions",
        description:
          "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and export logistics.",
        images: [{ url: `${siteUrl}/og-image-placeholder.svg`, width: 1200, height: 630, alt: "DYN PALLETS industrial packaging and export solutions" }],
      }
    : undefined,
  twitter: siteUrl
    ? {
        card: "summary_large_image",
        title: "DYN PALLETS | Industrial Wooden Pallets & Packaging Solutions",
        description:
          "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and industrial packing services for B2B supply chains.",
        images: [`${siteUrl}/og-image-placeholder.svg`],
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
  creator: "DYN PALLETS",
  publisher: "DYN PALLETS",
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DYN PALLETS",
    url: siteUrl || undefined,
    logo: siteUrl ? `${siteUrl}/icon.svg` : "/icon.svg",
    description:
      "Industrial wooden pallets, export pallets, wooden crates, plywood boxes and industrial packaging solutions for commercial and export requirements.",
    email: "sales@dynpallets.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DYN PALLETS",
    url: siteUrl || undefined,
    description:
      "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and international shipments.",
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <AmbientEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
