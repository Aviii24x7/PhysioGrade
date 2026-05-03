import { site } from "../config/site";

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: site.legalName,
  alternateName: site.name,
  description: site.shortPitch,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/og-image.jpg`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coords.lat,
    longitude: site.coords.lng,
  },
  hasMap: site.mapsLink,
  openingHours: site.hours.schemaOpenHours,
  areaServed: [
    { "@type": "City", name: "Palwal" },
    { "@type": "City", name: "Hodal" },
    { "@type": "City", name: "Hassanpur" },
    { "@type": "City", name: "Hathin" },
    { "@type": "City", name: "Ballabgarh" },
    { "@type": "City", name: "Faridabad" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  sameAs: [site.socials.instagram, site.socials.facebook, site.youtubeChannel],
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});
