export const siteConfig = {
  name: "DYN Pallets",
  shortName: "DYN",
  tagline: "Industrial packaging, engineered to move.",
  email: "Info@dynpallets.com",
  emailHref: "mailto:Info@dynpallets.com",
  phone: "+91 88501 39961",
  phoneHref: "tel:+918850139961",
  whatsapp: "918850139961",
  location: "Mumbai, Maharashtra, India",
  serviceArea: "Mumbai, Maharashtra, India",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

export const getSiteUrl = (): string => {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl || "";
  return rawUrl.replace(/\/+$/, "");
};

export const getAbsoluteUrl = (path = "/"): string => {
  const baseUrl = getSiteUrl();
  if (!baseUrl) return path;
  return new URL(path, `${baseUrl}/`).toString();
};
