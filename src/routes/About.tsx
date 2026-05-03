import { GraduationCap, Heart, Award, Users, Phone, BadgeCheck } from "lucide-react";
import { CertBadge } from "../components/ui/CertBadge";
import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import { site } from "../config/site";
import { team } from "../config/team";

const philosophy = [
  { icon: Heart,         title: "Patient-first care",    body: "Every plan starts with listening — to your symptoms, your goals, and your daily life." },
  { icon: GraduationCap, title: "Evidence-based",        body: "We follow the latest physiotherapy research, not outdated habits or guesswork." },
  { icon: Award,         title: "Measurable progress",   body: "We track outcomes objectively — strength, range of motion, function — so you can see real change." },
  { icon: Users,         title: "Family-friendly",       body: "We treat patients of all ages, with compassionate care that respects every individual." },
];

const clinicPhotos = [
  { src: "/gallery/clinic-02.jpg", alt: "Physiotherapist performing manual therapy" },
  { src: "/gallery/clinic-05.jpg", alt: "Patient receiving electrotherapy treatment" },
  { src: "/gallery/clinic-09.jpg", alt: "Exercise rehabilitation with physio ball" },
  { src: "/gallery/clinic-10.jpg", alt: "Treatment session at Physio Grade" },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Physio Grade | Dr. Mukesh Kumar & Dr. Renu — Physiotherapists in Palwal"
        description="Meet the team at Physio Grade: Dr. Mukesh Kumar (BPT, MPT Sports Medicine, CMT, CIASTM) and Dr. Renu (BPT KCGMC, specialist in Antenatal & Post-Natal Physiotherapy). Serving Palwal, Ballabgarh & Faridabad."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">About Physio Grade</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink">
              Palwal's friendly, modern<br />physiotherapy clinic.
            </h1>
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">
              {site.clinicTagline}
            </p>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Physio Grade was founded with a simple goal — to bring clinic-grade,
              evidence-based physiotherapy to Palwal and nearby communities. From
              acute sports injuries to post-surgery rehab, neurological conditions,
              and women's health — at our clinic or your home.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <Section eyebrow="Our Philosophy" title="Care that's clinical, personal, and grounded in evidence." centered bg="alt">
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

      {/* Meet the team — same horizontal card design as home page */}
      <Section
        eyebrow="Meet Your Physiotherapists"
        title={<>The experts behind <span className="text-primary">your recovery</span></>}
        subtitle="Licensed, continuously trained, and genuinely invested in your long-term health — not just your next session."
        centered
      >
        <div className="mx-auto max-w-5xl space-y-5">
          {team.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              <div className={`h-1 w-full ${doc.accentColor}`} />

              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="h-48 w-full overflow-hidden bg-slate-100 sm:h-auto sm:w-56 sm:shrink-0">
                  <img
                    src={doc.photo}
                    alt={`${doc.name} — ${doc.role} at Physio Grade Palwal (placeholder)`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-7">
                  {/* Name + role + tags */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">{doc.name}</h2>
                      <span className="text-sm font-semibold text-ink-muted">({doc.suffix})</span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-ink-muted">{doc.role}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {doc.specializations.map((s) => (
                        <span key={s} className={`rounded-full px-2.5 py-1 text-xs font-semibold ${doc.specializationBadge}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-prose">{doc.longBio}</p>
                  </div>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    <div className="flex gap-2 items-start">
                      <GraduationCap className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-1">Education</p>
                        {doc.degrees.map((d) => (
                          <p key={d.label} className="text-sm leading-snug text-ink-soft">
                            <span className="font-semibold text-ink">{d.label}</span>
                            <span className="text-ink-muted"> · {d.detail}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <BadgeCheck className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-1">Certifications</p>
                        <div className="flex flex-wrap gap-1.5">
                          {doc.certifications.map((c) => (
                            <CertBadge key={c} abbr={c} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-slate-100 pt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <a
                      href={`tel:${site.phone}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors shadow-cta w-full sm:w-auto"
                    >
                      <Phone className="h-4 w-4 shrink-0" aria-hidden />
                      {doc.bookLabel}
                    </a>
                    <span className="text-center text-xs text-ink-muted sm:text-left">{site.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Clinic photos */}
      <Section eyebrow="Inside the Clinic" title="A well-equipped space in the heart of Palwal." centered bg="alt">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {clinicPhotos.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
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
