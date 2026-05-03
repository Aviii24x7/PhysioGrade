import { Search, Stethoscope, TrendingUp } from "lucide-react";
import { Section } from "../ui/Section";

const steps = [
  {
    icon: Search,
    title: "1. Assess",
    body: "Detailed history, physical exam, and goal-setting. We identify the root cause of your pain — not just the symptom.",
  },
  {
    icon: Stethoscope,
    title: "2. Treat",
    body: "Hands-on therapy plus modern modalities, paired with progressive exercises matched to your stage of recovery.",
  },
  {
    icon: TrendingUp,
    title: "3. Recover",
    body: "Track your progress with measurable milestones, and walk away with the skills to stay pain-free for the long term.",
  },
];

export function HowItWorks() {
  return (
    <Section
      eyebrow="How It Works"
      title="A clear, three-step path back to pain-free movement"
      centered
    >
      <div className="grid gap-6 md:grid-cols-3 relative">
        {/* connector line on desktop */}
        <div
          aria-hidden
          className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
        />
        {steps.map((s) => (
          <div key={s.title} className="relative text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-white shadow-cta">
              <s.icon className="h-10 w-10" aria-hidden />
            </div>
            <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-3 max-w-sm mx-auto text-sm leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
