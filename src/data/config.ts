export const siteConfig = {
  name: "DYN PALLETS",
  shortName: "DYN",
  tagline: "Industrial packaging, engineered to move.",
  email: "sales@dynpallets.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  location: "Maharashtra, India",
  serviceArea: "India · Export enquiries",
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
