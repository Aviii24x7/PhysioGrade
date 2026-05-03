import { GraduationCap, Heart, Award, Users } from "lucide-react";
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

export default function About() {
  return (
    <>
      <Seo
        title="About Physio Grade — Palwal's Trusted Physiotherapy Clinic"
        description="Meet the team behind Physio Grade. Licensed physiotherapists serving Palwal with evidence-based care for pain, sports rehab, post-surgery, and neuro recovery."
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
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Physio Grade was founded with a simple goal — to bring clinic-grade,
              evidence-based physiotherapy to Palwal and nearby communities. Whether
              you're recovering from surgery, managing chronic pain, or returning to
              sport, we're here to help you move better and live without pain.
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

      {/* Meet the team — TODO swap with real details */}
      <Section
        eyebrow="Meet Your Physiotherapist"
        title="Led by experienced, licensed physiotherapists in Palwal."
        centered
      >
        <div className="mx-auto max-w-3xl">
          <article className="card grid gap-6 md:grid-cols-[200px,1fr] md:items-center">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-primary-tint">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                alt="Physiotherapist portrait placeholder"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                {/* TODO: Replace with founder/lead physiotherapist name */}
                Dr. [Founder Name], BPT, MPT
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Founder & Lead Physiotherapist
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                {/* TODO: Replace with actual bio */}
                With years of clinical experience treating musculoskeletal, sports,
                and neurological conditions, our lead physiotherapist combines
                hands-on expertise with the latest evidence-based protocols. The
                team at Physio Grade is committed to delivering care that's both
                effective and compassionate — every patient, every session.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip">Manual Therapy</span>
                <span className="chip">Sports Rehab</span>
                <span className="chip">Spine Care</span>
                <span className="chip">Neuro Rehab</span>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* Clinic photos placeholder */}
      <Section eyebrow="Inside the Clinic" title="A modern, calm, well-equipped space." centered bg="alt">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
            >
              <img
                src={src}
                alt={`${site.name} clinic photo ${i + 1} placeholder`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          Replace these placeholders with your real clinic photos in <code>/public/images/</code>.
        </p>
      </Section>

      <BookingBanner
        title="Visit our Palwal clinic — or have us visit you."
        subtitle="Same-day appointments available. Call or WhatsApp now to book."
      />
    </>
  );
}
