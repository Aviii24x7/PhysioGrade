import { site } from "../config/site";

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Physiotherapy", "MedicalBusiness", "LocalBusiness"],
  name: site.legalName,
  alternateName: ["Physio Grade", "PhysioGrade", "Physio Grade Palwal"],
  slogan: site.clinicTagline,
  description: "Physio Grade is Palwal's trusted physiotherapy centre led by Dr. Mukesh Kumar (MPT Sports Medicine) and Dr. Renu (BPT). We treat back pain, sciatica, frozen shoulder, sports injuries, knee pain, stroke rehab, and more. Clinic and home visits available across Palwal, Ballabgarh, Faridabad, Haryana.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/og-image.jpg`,
  logo: `${site.url}/favicon.svg`,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Card",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Palwal" },
    { "@type": "City", name: "Ballabgarh" },
    { "@type": "City", name: "Faridabad" },
  ],
  employee: [
    {
      "@type": "Physician",
      name: "Dr. Mukesh Kumar",
      jobTitle: "Physiotherapist & Founder",
      description: "BPT (PGIMS Rohtak), MPT (Sports Medicine). Certified Manual Therapist (CMT), Certified Dry Needling Therapist (CDNT), CIASTM, CCTP.",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "BPT — PGIMS, Rohtak" },
        { "@type": "EducationalOccupationalCredential", name: "MPT — Sports Medicine" },
        { "@type": "EducationalOccupationalCredential", name: "CMT — Certified Manual Therapist" },
      ],
    },
    {
      "@type": "Physician",
      name: "Dr. Renu",
      jobTitle: "Physiotherapist",
      description: "BPT (KCGMC Karnal). Specialist in Antenatal and Post-Natal Physiotherapy, Women's Health, Pelvic Floor Rehabilitation. CDNT, CCTP.",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "BPT — KCGMC, Karnal" },
        { "@type": "EducationalOccupationalCredential", name: "CDNT — Certified Dry Needling Therapist" },
      ],
    },
  ],
  knowsAbout: [
    "Physiotherapy", "Back Pain", "Sciatica", "Slipped Disc", "Cervical Spondylosis",
    "Frozen Shoulder", "Knee Pain", "Osteoarthritis", "ACL Injury", "Sports Injury",
    "Stroke Rehabilitation", "Bell's Palsy", "Neuro Rehabilitation", "Home Visit Physiotherapy",
    "Post Surgery Rehabilitation", "Geriatric Physiotherapy", "Women's Health Physiotherapy",
    "Dry Needling", "Manual Therapy", "IFT", "TENS", "Electrotherapy",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    site.mapsLink,
    site.socials.instagram,
    site.socials.facebook,
  ],
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name,
  description,
  url,
  provider: {
    "@type": "LocalBusiness",
    name: "Physio Grade Physiotherapy Centre",
    address: { "@type": "PostalAddress", addressLocality: "Palwal", addressRegion: "Haryana" },
  },
  areaServed: { "@type": "City", name: "Palwal" },
});
