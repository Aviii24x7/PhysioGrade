export const site = {
  name: "Physio Grade",
  legalName: "Physio Grade Physiotherapy Centre",
  tagline: "Expert Physiotherapy in Palwal",
  clinicTagline: "Satisfying Solution for Muscles and Joints",
  shortPitch:
    "Pain relief, sports rehab, and home-visit physiotherapy delivered by licensed physiotherapists in the heart of Palwal.",
  // E.164 format for tel: links (no spaces, no dashes)
  phone: "+919050919288",
  phoneDisplay: "+91 90509 19288",
  // wa.me requires the number with country code, no '+'
  whatsapp: "919050919288",
  whatsappMessage:
    "Hi, I'd like to book a physiotherapy session at Physio Grade.",
  email: "9050919288mukki@gmail.com",
  address: {
    line1: "HUDA Chowk, HUDA Sector-2",
    line2: "Palwal Rural",
    city: "Palwal",
    state: "Haryana",
    pin: "121102",
    country: "India",
    // Full address as it appears on Google Business Profile — keep in sync
    gmb: "huda chowk, HUDA Sector-2, Palwal, Palwalrural, Haryana 121102",
  },
  hours: {
    mondayToSaturday: "9:00 AM – 8:00 PM",
    sunday: "By appointment",
    // Used for JSON-LD openingHours (ISO 8601 day codes)
    schemaOpenHours: ["Mo-Sa 09:00-20:00"],
  },
  // Get this from Google Maps → Share → Embed → copy iframe `src` attribute.
  // Default falls back to a generic Palwal map; replace with the actual clinic embed.
  mapsEmbedSrc:
    "https://www.google.com/maps?q=28.158471,77.3222568&hl=en&z=17&output=embed",
  mapsLink: "https://maps.app.goo.gl/tBnksXE1e7oYbVhJ7",
  coords: { lat: 28.158471, lng: 77.3222568 },
  socials: {
    instagram: "https://instagram.com/physiograde",
    facebook: "https://facebook.com/physiograde",
  },
  // TODO: replace with real channel URL
  youtubeChannel: "https://www.youtube.com/results?search_query=physio+grade+palwal",
  rating: { value: 4.9, count: 120 },
  url: "https://physiograde.in",
} as const;
