import { CallButton } from "../ui/CallButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function BookingBanner({
  title = "Ready to book your session?",
  subtitle = "Same-day appointments available. Call or WhatsApp us — we'll guide you on what's best for your condition.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-x relative py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-white/85 leading-relaxed">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <CallButton
              variant="primary"
              className="bg-white text-primary hover:bg-white/90 shadow-card"
            />
            <WhatsAppButton variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
