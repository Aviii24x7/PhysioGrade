import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Navigation, CheckCircle2, Send } from "lucide-react";
import { Section } from "../components/ui/Section";
import { CallButton } from "../components/ui/CallButton";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Seo } from "../lib/seo";
import { site } from "../config/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Seo
        title="Contact & Book — Physio Grade Palwal"
        description="Book an appointment at Physio Grade Palwal. Call, WhatsApp, or send us a message. Same-day clinic and home-visit appointments available."
        path="/contact"
      />

      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink">
              Book your appointment.
            </h1>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Call or WhatsApp for the fastest response. You can also send us a
              message — we typically reply within an hour during clinic hours.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton variant="primary" />
            <WhatsAppButton variant="ghost" />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-1 text-sm text-ink-muted">
                We'll respond within an hour during clinic hours.
              </p>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    Thanks — we've got your message!
                  </h3>
                  <p className="mt-2 max-w-md text-ink-soft">
                    We'll be in touch shortly. For urgent care, please call or WhatsApp us.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <CallButton variant="primary" />
                    <WhatsAppButton variant="ghost" />
                  </div>
                </div>
              ) : (
                <form
                  action={`https://formsubmit.co/${site.email}`}
                  method="POST"
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    // Optimistic UI — formsubmit will still POST normally and redirect.
                    // We prevent default and submit via fetch so we can show our own
                    // confirmation without leaving the SPA.
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                    })
                      .catch(() => {/* swallow — form is the conversion path */ })
                      .finally(() => setSubmitted(true));
                  }}
                >
                  <input type="hidden" name="_subject" value="New booking request from Physio Grade website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" name="name" type="text" required />
                    <Field label="Phone number" name="phone" type="tel" required pattern="[0-9+\-\s]{10,}" />
                  </div>
                  <Field label="Email (optional)" name="email" type="email" />
                  <Field
                    label="What can we help with?"
                    name="message"
                    type="textarea"
                    placeholder="Briefly describe your condition or what you're looking for..."
                    required
                  />

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden />
                    Send message
                  </button>

                  <p className="text-xs text-ink-muted">
                    By submitting, you agree to be contacted by Physio Grade about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="card">
              <h3 className="font-display text-xl font-bold text-ink">Visit us</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Address</p>
                    <p className="mt-0.5 text-ink-soft">
                      {site.address.line1}<br />
                      {site.address.city}, {site.address.state} {site.address.pin}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Clock className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Hours</p>
                    <p className="mt-0.5 text-ink-soft">
                      Mon–Sat: {site.hours.mondayToSaturday}<br />
                      Sun: {site.hours.sunday}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Phone & WhatsApp</p>
                    <a href={`tel:${site.phone}`} className="mt-0.5 block text-primary hover:text-primary-hover">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <a href={`mailto:${site.email}`} className="mt-0.5 block text-primary hover:text-primary-hover">
                      {site.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={site.mapsEmbedSrc}
                  title="Physio Grade location map"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
  pattern,
  placeholder,
}: {
  label: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea";
  required?: boolean;
  pattern?: string;
  placeholder?: string;
}) {
  const baseCls =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={baseCls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
          className={baseCls}
        />
      )}
    </label>
  );
}
