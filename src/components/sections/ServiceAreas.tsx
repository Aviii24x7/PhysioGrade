import { MapPin, Phone } from "lucide-react";
import { site } from "../../config/site";

const primaryAreas = [
  { name: "Palwal City", note: "Clinic + Home visits" },
  { name: "Palwal Rural", note: "Clinic + visits" },
];

const secondaryAreas = [
  { name: "Ballabgarh", note: "Home visits" },
  { name: "Sikri", note: "Home visits" },
  { name: "Faridabad", note: "Home visits" },
  { name: "Hodal", note: "Home visits" },
  { name: "Sohna", note: "Home visits" },
  { name: "Chhainsa", note: "Home visits" },
  { name: "Hathin", note: "Home visits" },
  { name: "Hasanpur", note: "Home visits" },
  { name: "Jewar", note: "Home visits" },
  { name: "Tappal", note: "Home visits" },
  { name: "Kosi Kalan", note: "Home visits" },
  { name: "Mohna", note: "Home visits" },
  { name: "Nuh", note: "Home visits" },
];

export function ServiceAreas() {
  return (
    <section className="bg-ink py-12 md:py-16" aria-label="Areas we serve">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-1 mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-white/50">Where We Serve</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Physiotherapy in Palwal, Ballabgarh &amp; Nearby...
            </h2>
            <p className="mt-2 text-sm text-white/55 max-w-lg leading-relaxed">
              Visit our clinic at HUDA Chowk, Palwal — or we come to you. Same-day home visits
              available across Palwal and Ballabgarh.
            </p>
          </div>
          <a
            href={`tel:${site.phone}`}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/25 transition-colors shrink-0"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>

        {/* Primary — Palwal */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary-hover mb-2.5">
            Primary service area
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {primaryAreas.map((a) => (
              <div key={a.name} className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2.5 hover:bg-white/10 transition-colors">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary-hover" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{a.name}</p>
                  <p className="text-[10px] text-white/45 mt-0.5">{a.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary — Ballabgarh / Faridabad */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2.5">
            Also serving
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {secondaryAreas.map((a) => (
              <div key={a.name} className="flex items-start gap-2 rounded-xl bg-white/[0.04] px-3 py-2.5">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-white/30" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-white/70 leading-tight">{a.name}</p>
                  <p className="text-[10px] text-white/35 mt-0.5">{a.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAP — exact match with Google Business Profile */}
        <p className="mt-8 text-[11px] text-white/30 border-t border-white/10 pt-4 leading-relaxed">
          {site.legalName} · huda chowk, HUDA Sector-2, Palwal, Palwalrural, Haryana 121102 · {site.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
