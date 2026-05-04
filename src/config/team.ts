export const certificationForms: Record<string, string> = {
  CMT:    "Certified Manual Therapist",
  CDNT:   "Certified Dry Needling Therapist",
  CIASTM: "Certified Instrument Assisted Soft Tissue Mobilization",
  CCTP:   "Certified Cupping Therapy Practitioner",
};

export type Doctor = {
  name: string;
  suffix: string;
  role: string;
  photo: string; // TODO: replace with portrait photos when available
  accentColor: string;
  specializationBadge: string;
  specializations: string[];
  degrees: { label: string; detail: string }[];
  certifications: string[];
  shortBio: string;   // used on home page
  longBio: string;    // used on about page
  bookLabel: string;
};

export const team: Doctor[] = [
  {
    name: "Dr. Mukesh Kumar",
    suffix: "PT",
    role: "Founder & Lead Physiotherapist",
    photo: "/gallery/dr-mukesh.jpg",
    accentColor: "bg-primary",
    specializationBadge: "bg-primary-tint text-primary-dark",
    specializations: ["Sports Injury Rehab", "Musculoskeletal Physio", "Manual Therapy", "Spine Care"],
    degrees: [
      { label: "BPT", detail: "PGIMS, Rohtak" },
      { label: "MPT", detail: "Sports Medicine" },
    ],
    certifications: ["CMT", "CDNT", "CIASTM", "CCTP"],
    shortBio:
      "Dr. Mukesh Kumar holds a Master's in Sports Medicine and advanced manual therapy certifications. He combines hands-on precision with evidence-based protocols to deliver lasting recovery — not just temporary relief.",
    longBio:
      "Dr. Mukesh Kumar founded Physio Grade with a mission to bring genuine, evidence-based physiotherapy to Palwal. Armed with a Master's in Sports Medicine and advanced certifications in manual therapy (CMT, CIASTM), he blends hands-on skill with modern clinical science. Patients describe him as thorough, honest, and deeply invested in their recovery.",
    bookLabel: "Book with Dr. Mukesh",
  },
  {
    name: "Dr. Renu",
    suffix: "PT",
    role: "Physiotherapist",
    photo: "/gallery/dr-renu.jpg",
    accentColor: "bg-fuchsia-500",
    specializationBadge: "bg-fuchsia-50 text-fuchsia-700",
    specializations: ["Antenatal Physio", "Post-Natal Care", "Women's Health", "Pelvic Floor Rehab"],
    degrees: [
      { label: "BPT", detail: "KCGMC, Karnal" },
    ],
    certifications: ["CDNT", "CCTP"],
    shortBio:
      "Dr. Renu specialises in women's health physiotherapy — guiding patients through pregnancy, postpartum recovery, and pelvic floor rehabilitation with a calm, thorough, and highly personalised approach.",
    longBio:
      "Dr. Renu specialises in women's health physiotherapy — offering expert care through pregnancy, postpartum recovery, and pelvic floor rehabilitation. Her calm, compassionate approach makes her the preferred therapist for expectant and new mothers across Palwal. She also brings strong skills in general musculoskeletal and pain management.",
    bookLabel: "Book with Dr. Renu",
  },
];
