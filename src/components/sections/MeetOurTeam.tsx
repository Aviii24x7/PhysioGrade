import { Link } from "react-router-dom";
import { GraduationCap, Award, Phone } from "lucide-react";
import { Section } from "../ui/Section";
import { site } from "../../config/site";

const team = [
  {
    name: "Dr. Mukesh Kumar",
    suffix: "(PT)",
    image: "/gallery/clinic-09.jpg",
    degrees: ["BPT — PGIMS, Rohtak", "MPT — Sports Medicine"],
    certifications: ["CMT", "CDNT", "CIASTM", "CCTP"],
    specialization: "Sports Injury & Musculoskeletal Rehabilitation",
    bio: "With a Master's in Sports Medicine and advanced certifications in manual therapy, Dr. Mukesh Kumar brings evidence-based precision to every treatment. He leads the clinic with a patient-first approach that combines hands-on skill with modern physiotherapy science.",
  },
  {
    name: "Dr. Renu",
    suffix: "(PT)",
    image: "/gallery/clinic-07.jpg",
    degrees: ["BPT — KCGMC, Karnal"],
    certifications: ["CDNT", "CCTP"],
    specialization: "Antenatal & Post-Natal Physiotherapy",
    bio: "Dr. Renu specialises in women's health physiotherapy — offering expert care through pregnancy, postpartum recovery, and pelvic floor rehabilitation. Her gentle, thorough approach makes her the go-to therapist for expectant and new mothers in Palwal.",
  },
];

export function MeetOurTeam() {
  return (
    <Section
      eyebrow="Our Physiotherapists"
      title="Meet the team behind your recovery"
      subtitle="Licensed, experienced, and genuinely invested in getting you back to full health."
      centered
      bg="alt"
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {team.map((doc) => (
          <article key={doc.name} className="card flex flex-col overflow-hidden p-0">
            {/* Photo */}
            <div className="relative h-56 w-full overflow-hidden bg-primary-tint">
              <img
                src={doc.image}
                alt={`${doc.name} — Physiotherapist at Physio Grade Palwal`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-xl font-extrabold text-white leading-tight">
                  {doc.name}
                  <span className="ml-1.5 text-sm font-semibold text-white/80">{doc.suffix}</span>
                </p>
                <p className="mt-0.5 text-xs font-medium text-primary-hover">{doc.specialization}</p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 p-5">
              <p className="text-sm leading-relaxed text-ink-soft">{doc.bio}</p>

              <div className="space-y-3">
                <div className="flex gap-2.5">
                  <GraduationCap className="h-4 w-4 shrink-0 mt-0.5 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-muted mb-1">Education</p>
                    {doc.degrees.map((d) => (
                      <p key={d} className="text-sm text-ink-soft">{d}</p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Award className="h-4 w-4 shrink-0 mt-0.5 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-muted mb-1">Certifications</p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.certifications.map((c) => (
                        <span key={c} className="chip">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${site.phone}`}
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Book with {doc.name.split(" ")[1]}
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-muted">
        Have a question about which therapist suits your condition?{" "}
        <a href={`tel:${site.phone}`} className="font-semibold text-primary hover:underline">
          Just call us.
        </a>
      </p>
    </Section>
  );
}
