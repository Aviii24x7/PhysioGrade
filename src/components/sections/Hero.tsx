import { Star, MapPin, Clock, ShieldCheck } from "lucide-react";
import { CallButton } from "../ui/CallButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { site } from "../../config/site";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-tint via-white to-white">
      {/* Decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-card">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Trusted Physiotherapy Care in Palwal
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Expert Physiotherapy in Palwal —{" "}
            <span className="text-primary">Pain Relief That Lasts.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Personalised recovery plans for back pain, sports injuries, frozen shoulder,
            post-surgery rehab, and neuro care. Visit our modern clinic — or book a
            home visit anywhere in Palwal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton variant="primary" />
            <WhatsAppButton variant="ghost" />
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Patient Rating
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-lg font-bold text-ink">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                {site.rating.value}
                <span className="text-sm font-medium text-ink-muted">
                  ({site.rating.count}+)
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Same-day
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-lg font-bold text-ink">
                <Clock className="h-4 w-4 text-primary" aria-hidden />
                Booking
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Home Visits
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-lg font-bold text-ink">
                <MapPin className="h-4 w-4 text-primary" aria-hidden />
                Available
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5 animate-scale-in">
          <div className="relative rounded-3xl bg-white p-2 shadow-soft border border-slate-200/50">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-tint to-surface-tint">
              <img
                src="https://plus.unsplash.com/premium_photo-1661721502335-c7481df36f38?auto=format&fit=crop&w=1200&q=80"
                alt="Specialist physiotherapist treating a patient on a massage bed in a rehabilitation centre"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Floating quick-info card */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-right-6 sm:w-72 rounded-2xl bg-white p-4 shadow-soft border border-slate-200/70">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Licensed Physiotherapists</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                    BPT/MPT-qualified team using evidence-based techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
