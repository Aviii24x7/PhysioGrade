import { Phone, GraduationCap, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { CertBadge } from "../ui/CertBadge";
import { site } from "../../config/site";
import { team } from "../../config/team";

export function MeetOurTeam() {
  return (
    <Section
      eyebrow="Our Physiotherapists"
      title={<>The experts behind <span className="text-primary">your recovery</span></>}
      subtitle="Licensed, continuously trained, and genuinely invested in your long-term health — not just the next session."
      centered
      bg="alt"
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
            {/* Accent bar */}
            <div className={`h-1 w-full ${doc.accentColor}`} />

            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 sm:aspect-auto sm:h-auto sm:w-52 sm:shrink-0">
                <img
                  src={doc.photo}
                  alt={`${doc.name} — ${doc.role} at Physio Grade Palwal`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                {/* Name + role */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                      {doc.name}
                    </h3>
                    <span className="text-sm font-semibold text-ink-muted">({doc.suffix})</span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-ink-muted">{doc.role}</p>

                  {/* Specialization tags */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {doc.specializations.map((s) => (
                      <span key={s} className={`rounded-full px-2.5 py-1 text-xs font-semibold ${doc.specializationBadge}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm leading-relaxed text-ink-soft">{doc.shortBio}</p>

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

                {/* CTA — stacks on mobile, inline on desktop */}
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
  );
}
