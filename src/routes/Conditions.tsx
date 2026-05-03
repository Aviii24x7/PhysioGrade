import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import {
  conditions,
  conditionCategories,
  type ConditionCategory,
} from "../config/conditions";
import { cn } from "../lib/cn";

export default function Conditions() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<ConditionCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conditions.filter((c) => {
      if (active !== "All" && c.category !== active) return false;
      if (q && !c.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, active]);

  const grouped = useMemo(() => {
    const map = new Map<ConditionCategory, typeof filtered>();
    for (const c of filtered) {
      const arr = map.get(c.category) ?? [];
      arr.push(c);
      map.set(c.category, arr);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <Seo
        title="Conditions We Treat — Physio Grade Palwal"
        description="A full list of conditions we treat at Physio Grade Palwal: spine, joints, sports injuries, neuro, geriatric, post-surgery, pediatric, and women's health."
        path="/conditions"
      />

      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-20">
          <span className="eyebrow">Conditions</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink max-w-3xl">
            What we treat at Physio Grade.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Search by name or filter by category. Don't see your condition? Call us —
            our team treats many more.
          </p>
        </div>
      </section>

      <Section>
        {/* Search + filter chips */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search conditions (e.g., sciatica, frozen shoulder, ACL)..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-base placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Search conditions"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...conditionCategories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors min-h-[40px]",
                  active === cat
                    ? "bg-primary text-white border-primary shadow-cta"
                    : "bg-white text-ink-soft border-slate-200 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
            <p className="text-ink-soft">
              No conditions matched your search. Try a different keyword, or{" "}
              <Link to="/contact" className="text-primary font-semibold hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-display text-2xl font-bold text-ink">{category}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((c) => (
                    <Link
                      key={c.name}
                      to={`/services/${c.serviceSlug}`}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-ink-soft shadow-card transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                    >
                      <span>{c.name}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-all group-hover:text-primary group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <BookingBanner />
    </>
  );
}
