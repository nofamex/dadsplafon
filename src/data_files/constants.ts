import ogImageSrc from "@images/logo-sp.png";

export const SITE = {
  title: "SUMBER PLAFON",
  tagline: "Pusat Produk PVC dengan merek merek terpercaya",
  description: "Pusat Produk PVC dengan merek merek terpercaya",
  description_short: "Pusat Produk PVC dengan merek merek terpercaya",
  url: "https://screwfast.uk",
  author: "OFMX",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Pusat Produk PVC dengan merek merek terpercaya`,
  description: "Pusat Produk PVC dengan merek merek terpercaya",
  image: ogImageSrc,
};
