import { Link } from "react-router-dom";
import {
  Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import { services, additionalServices } from "../config/services";

const iconMap: Record<string, LucideIcon> = {
  Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
};

export default function ServicesIndex() {
  return (
    <>
      <Seo
        title="Physiotherapy Services in Palwal — Physio Grade"
        description="Specialist physiotherapy services in Palwal: back & neck pain, knee & joint, frozen shoulder, sports injury, post-surgery rehab, neuro & geriatric care, and home visits."
        path="/services"
      />

      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-20">
          <span className="eyebrow">Our Services</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink max-w-3xl">
            Physiotherapy services for every condition we treat.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
            From acute pain relief to long-term rehab, here's the full range of care
            we provide at our clinic and on home visits.
          </p>
        </div>
      </section>

      <Section title="Specialist treatments" eyebrow="Core Services">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Activity;
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group card flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-cta">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink leading-snug">{s.shortTitle}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="More We Offer"
        title="Additional therapies & specialties"
        bg="alt"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {additionalServices.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <h3 className="text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <BookingBanner />
    </>
  );
}
