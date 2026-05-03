import { GraduationCap, Heart, Award, Users, Phone } from "lucide-react";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import { site } from "../config/site";

const philosophy = [
  {
    icon: Heart,
    title: "Patient-first care",
    body: "Every plan starts with listening — to your symptoms, your goals, and your daily life.",
  },
  {
    icon: GraduationCap,
    title: "Evidence-based",
    body: "We follow the latest physiotherapy research, not outdated habits or guesswork.",
  },
  {
    icon: Award,
    title: "Measurable progress",
    body: "We track outcomes objectively — strength, range of motion, function — so you can see real change.",
  },
  {
    icon: Users,
    title: "Family-friendly",
    body: "We treat patients of all ages, with compassionate care that respects every individual.",
  },
];

const team = [
  {
    name: "Dr. Mukesh Kumar",
    suffix: "PT",
    role: "Founder & Lead Physiotherapist",
    image: "/gallery/clinic-09.jpg",
    imagePosition: "object-top",
    degrees: [
      { label: "BPT", detail: "PGIMS, Rohtak" },
      { label: "MPT", detail: "Sports Medicine" },
    ],
    certifications: ["CMT", "CDNT", "CIASTM", "CCTP"],
    specializations: ["Sports Injury Rehabilitation", "Musculoskeletal Physiotherapy", "Manual Therapy", "Spine Care"],
    bio: "Dr. Mukesh Kumar founded Physio Grade with a mission to bring genuine, evidence-based physiotherapy to Palwal. Armed with a Master's in Sports Medicine and advanced certifications in manual therapy (CMT, CIASTM), he blends hands-on skill with modern clinical science. Patients describe him as thorough, honest, and deeply invested in their recovery.",
  },
  {
    name: "Dr. Renu",
    suffix: "PT",
    role: "Physiotherapist",
    image: "/gallery/clinic-07.jpg",
    imagePosition: "object-center",
    degrees: [
      { label: "BPT", detail: "KCGMC, Karnal" },
    ],
    certifications: ["CDNT", "CCTP"],
    specializations: ["Antenatal Physiotherapy", "Post-Natal Physiotherapy", "Women's Health", "Pelvic Floor Rehab"],
    bio: "Dr. Renu specialises in women's health physiotherapy — offering expert care through pregnancy, postpartum recovery, and pelvic floor rehabilitation. Her calm, compassionate approach makes her the preferred therapist for expectant and new mothers across Palwal and surrounding areas. She also brings strong skills in general musculoskeletal and pain management.",
  },
];

const clinicPhotos = [
  { src: "/gallery/clinic-02.jpg", alt: "Physiotherapist performing manual therapy" },
  { src: "/gallery/clinic-05.jpg", alt: "Patient receiving electrotherapy treatment" },
  { src: "/gallery/clinic-09.jpg", alt: "Exercise rehabilitation session with physio ball" },
  { src: "/gallery/clinic-10.jpg", alt: "Physio Grade clinic treatment session" },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Physio Grade — Palwal's Trusted Physiotherapy Clinic"
        description="Meet Dr. Mukesh Kumar (MPT, Sports Medicine) and Dr. Renu (BPT, KCGMC) — the licensed physiotherapists behind Physio Grade in Palwal."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">About Physio Grade</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink">
              Palwal's friendly, modern physiotherapy clinic.
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {site.clinicTagline}
            </p>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Physio Grade was founded with a simple goal — to bring clinic-grade,
              evidence-based physiotherapy to Palwal and nearby communities. Led by
              a team of licensed physiotherapists, we treat everything from acute
              sports injuries to post-surgery rehab, neuro conditions, and women's
              health — at our clinic or your home.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <Section
        eyebrow="Our Philosophy"
        title="Care that's clinical, personal, and grounded in evidence."
        centered
        bg="alt"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p) => (
            <div key={p.title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                <p.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet the team */}
      <Section
        eyebrow="Meet Your Physiotherapists"
        title="The experts behind your recovery"
        subtitle="Both doctors are licensed, continuously trained, and genuinely invested in your long-term health — not just your next session."
        centered
      >
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((doc) => (
            <article key={doc.name} className="card overflow-hidden p-0 flex flex-col">
              {/* Photo */}
              <div className="relative h-64 w-full overflow-hidden bg-primary-tint">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role} at Physio Grade Palwal`}
                  className={`h-full w-full object-cover ${doc.imagePosition}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-2xl font-extrabold text-white leading-tight">
                    {doc.name}
                    <span className="ml-1.5 text-sm font-semibold opacity-75">({doc.suffix})</span>
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-primary-hover">{doc.role}</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-5 p-6">
                <p className="text-sm leading-relaxed text-ink-soft">{doc.bio}</p>

                {/* Degrees */}
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1.5">Education</p>
                    <div className="space-y-0.5">
                      {doc.degrees.map((d) => (
                        <p key={d.label} className="text-sm text-ink-soft">
                          <span className="font-semibold text-ink">{d.label}</span> — {d.detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1.5">Certifications</p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.certifications.map((c) => (
                        <span key={c} className="chip">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="flex gap-3">
                  <Users className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1.5">Specialises In</p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specializations.map((s) => (
                        <span key={s} className="inline-flex items-center rounded-full border border-primary/20 bg-white px-2.5 py-1 text-xs font-medium text-primary-dark">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${site.phone}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Book a session
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Clinic photos — real photos */}
      <Section eyebrow="Inside the Clinic" title="A well-equipped space in the heart of Palwal." centered bg="alt">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {clinicPhotos.map((p, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <BookingBanner
        title="Visit our Palwal clinic — or have us visit you."
        subtitle="Same-day appointments available. Call or WhatsApp now to book."
      />
    </>
  );
}
