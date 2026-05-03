import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { featuredConditions } from "../../config/conditions";

export function ConditionsChips() {
  return (
    <Section
      eyebrow="Conditions We Treat"
      title="Helping people recover from over 40 conditions"
      subtitle="If your condition isn't listed, call us — chances are we treat it. We see new presentations every week."
      centered
      bg="alt"
    >
      <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
        {featuredConditions.map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-card"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/conditions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          View all conditions we treat
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
