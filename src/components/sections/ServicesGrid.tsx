import { Link } from "react-router-dom";
import {
  Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import { Section } from "../ui/Section";
import { services } from "../../config/services";

const iconMap: Record<string, LucideIcon> = {
  Activity, Bone, Hand, Dumbbell, HeartPulse, Brain, Users, Home,
};

export function ServicesGrid() {
  return (
    <Section
      eyebrow="What We Treat"
      title="Specialist physiotherapy services for every stage of recovery"
      subtitle="From acute pain to long-term rehab, our therapists cover the full range of musculoskeletal, sports, neurological, and post-surgery care."
      centered
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Activity;
          return (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group card flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-cta">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink leading-snug">
                {s.shortTitle}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {s.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
