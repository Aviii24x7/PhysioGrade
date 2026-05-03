import { Link, useParams, Navigate } from "react-router-dom";
import {
  ChevronRight, Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
  Check, type LucideIcon,
} from "lucide-react";
import { Section } from "../components/ui/Section";
import { Accordion } from "../components/ui/Accordion";
import { BookingBanner } from "../components/sections/BookingBanner";
import { CallButton } from "../components/ui/CallButton";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Seo } from "../lib/seo";
import { faqSchema, breadcrumbSchema } from "../lib/schema";
import { findService, services } from "../config/services";
import { site } from "../config/site";

const iconMap: Record<string, LucideIcon> = {
  Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? findService(slug) : undefined;
  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] ?? Activity;

  return (
    <>
      <Seo
        title={`${service.title} in Palwal & Ballabgarh — Physio Grade`}
        description={`${service.summary} Expert physiotherapy for ${service.shortTitle.toLowerCase()} in Palwal & Ballabgarh, Haryana. Clinic visits and home visits available. Book at Physio Grade — ${service.slug.includes('home') ? 'Palwal' : 'near HUDA Chowk, Palwal'}.`}
        path={`/services/${service.slug}`}
        jsonLd={[
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: service.shortTitle, url: `${site.url}/services/${service.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb + hero */}
      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-ink-muted">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link to="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-ink">{service.shortTitle}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-cta">
              <Icon className="h-8 w-8" aria-hidden />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-ink">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-ink-soft leading-relaxed">
                {service.summary}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CallButton variant="primary" />
                <WhatsAppButton variant="ghost" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long summary */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-soft">{service.longSummary}</p>
        </div>
      </Section>

      {/* Conditions */}
      <Section eyebrow="Conditions covered" title={`${service.shortTitle} — what we treat`} bg="alt">
        <div className="mx-auto max-w-4xl flex flex-wrap gap-2.5">
          {service.conditions.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-card"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* What a session looks like */}
      <Section eyebrow="What to Expect" title="What a session looks like" centered>
        <div className="mx-auto max-w-3xl space-y-5">
          {service.sessionFlow.map((step, i) => (
            <div key={i} className="flex gap-4 card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                {i + 1}
              </div>
              <p className="text-ink-soft leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Techniques + Helps (two columns) */}
      <Section bg="alt">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card">
            <span className="eyebrow">Techniques Used</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              Modern, evidence-based methods
            </h3>
            <ul className="mt-5 space-y-3">
              {service.techniques.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <span className="text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="eyebrow">Who This Helps</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              Is this right for me?
            </h3>
            <ul className="mt-5 space-y-3">
              {service.helps.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <span className="text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title={`Common questions about ${service.shortTitle.toLowerCase()}`} centered>
        <div className="mx-auto max-w-3xl">
          <Accordion items={service.faqs} />
        </div>
      </Section>

      {/* Other services */}
      <Section eyebrow="Explore More" title="Other services we offer" bg="alt">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 4)
            .map((s) => {
              const I = iconMap[s.icon] ?? Activity;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <I className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-bold text-ink">{s.shortTitle}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
        </div>
      </Section>

      <BookingBanner
        title={`Ready to start your ${service.shortTitle.toLowerCase()} recovery?`}
      />
    </>
  );
}
