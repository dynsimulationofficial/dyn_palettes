import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteFx } from "@/components/SiteFx";
import { getSiteUrl } from "@/data/config";

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

  alternates: siteUrl ? { canonical: "/" } : undefined,

  openGraph: siteUrl
    ? {
        type: "website",
        url: siteUrl,
        siteName: "DYN Pallets",
        title: "Industrial Wooden Pallets & Packaging | DYN Pallets",
        description:
          "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and export logistics.",
        images: [
          {
            url: `${siteUrl}/og-image-placeholder.svg`,
            width: 1200,
            height: 630,
            alt: "DYN Pallets industrial packaging and export solutions",
          },
        ],
      }
    : undefined,

  twitter: siteUrl
    ? {
        card: "summary_large_image",
        title: "Industrial Wooden Pallets & Packaging | DYN Pallets",
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

  creator: "DYN Pallets",
  publisher: "DYN Pallets",
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DYN Pallets",
    url: siteUrl || undefined,
    logo: siteUrl ? `${siteUrl}/icon.svg` : "/icon.svg",
    description:
      "Industrial wooden pallets, export pallets, wooden crates, plywood boxes and industrial packaging solutions for commercial and export requirements.",
    email: "Info@dynpallets.com",
    telephone: "+918850139961",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DYN Pallets",
    url: siteUrl || undefined,
    description:
      "Industrial wooden pallets, export packaging, wooden crates, plywood boxes and packaging services for factories, warehouses and international shipments.",
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />

        <Header />

        <main>{children}</main>

        <Footer />
        <SiteFx />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1P63LV32N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-Y1P63LV32N');
          `}
        </Script>

        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ZV6HFdFBPvEYvZbychpr8w"
          strategy="afterInteractive"
        />

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