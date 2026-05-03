import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import { Section } from "../ui/Section";
import { CallButton } from "../ui/CallButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { site } from "../../config/site";

export function LocationBlock() {
  return (
    <Section
      eyebrow="Visit Us"
      title={<>Find <span className="text-primary">Physio Grade</span> in Palwal</>}
      centered
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Map — fully interactive iframe, button opens Maps */}
        <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card relative">
          <div className="aspect-[4/3] w-full bg-slate-100">
            <iframe
              src={site.mapsEmbedSrc}
              title="Physio Grade location on map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          {/* Floating "Open in Maps" button — doesn't block iframe interaction */}
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-soft border border-slate-200 hover:border-primary hover:text-primary transition-colors z-10"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Open in Maps
          </a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="card flex-1">
            <h3 className="font-display text-xl font-bold text-ink">{site.legalName}</h3>

            <ul className="mt-5 space-y-4 text-sm">
              {/* Address — links to Google Maps */}
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-ink">Address</p>
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-ink-soft hover:text-primary transition-colors leading-relaxed"
                  >
                    {site.address.line1}<br />
                    {site.address.city}, {site.address.state} {site.address.pin}
                    <ExternalLink className="ml-1 inline h-3 w-3 text-primary" aria-hidden />
                  </a>
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
                  <p className="font-semibold text-ink">Phone</p>
                  <a href={`tel:${site.phone}`} className="mt-0.5 block text-primary hover:text-primary-hover">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <CallButton variant="primary" />
            <WhatsAppButton variant="ghost" />
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-ink-soft border border-slate-200 hover:bg-surface-alt"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
