import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { featuredConditions, conditions } from "../../config/conditions";

export function ConditionsChips() {
  return (
    <Section
      eyebrow="Conditions We Treat"
      title="Helping people recover from over 40 conditions"
      subtitle="If your condition isn't listed, call us — chances are we treat it. We see new presentations every week."
      centered
      bg="alt"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.04 } } }}
        className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
      >
        {featuredConditions.map((name) => {
          const match = conditions.find((c) => c.name === name);
          const href = match ? `/services/${match.serviceSlug}` : "/conditions";
          return (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, scale: 0.88 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
            >
              <Link
                to={href}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-card
                  hover:border-primary hover:bg-primary hover:text-white hover:shadow-cta
                  transition-all duration-200"
              >
                {name}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/conditions"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          View all conditions we treat
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
