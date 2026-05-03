import { GraduationCap, ClipboardList, Home, Zap } from "lucide-react";
import { Section } from "../ui/Section";

const values = [
  {
    icon: GraduationCap,
    title: "Licensed Physiotherapists",
    body: "BPT and MPT qualified therapists with years of clinical experience and continuous training.",
  },
  {
    icon: ClipboardList,
    title: "Personalised Recovery Plans",
    body: "Every patient gets a custom plan based on detailed assessment — no copy-paste protocols.",
  },
  {
    icon: Home,
    title: "Clinic + Home Visits",
    body: "Modern clinic in Palwal, plus home visits for post-surgery, elderly, and bedridden patients.",
  },
  {
    icon: Zap,
    title: "Same-Day Appointments",
    body: "Acute pain or injury? Call us — we hold slots open every day for urgent cases.",
  },
];

export function ValueProps() {
  return (
    <Section
      eyebrow="Why Physio Grade"
      title="Recovery you can trust, in your neighbourhood."
      subtitle="We combine modern physiotherapy with personalised, hands-on care. Every plan is built around your goals — not a generic checklist."
      centered
      bg="alt"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="card flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
              <v.icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
