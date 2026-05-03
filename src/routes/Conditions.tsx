import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Activity, Bone, Dumbbell, Brain, Users, HeartPulse, Baby, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import { conditions, conditionCategories, type ConditionCategory } from "../config/conditions";
import { cn } from "../lib/cn";

/* ── Category meta ────────────────────────────────────────────── */
type CategoryMeta = {
  icon: React.ElementType;
  bg: string;
  activeBg: string;
  text: string;
  dot: string;
  chipHover: string;
};

const meta: Record<ConditionCategory, CategoryMeta> = {
  "Spine":          { icon: Activity,    bg: "bg-teal-50   border-teal-200",   activeBg: "bg-teal-600   border-teal-600",   text: "text-teal-700",    dot: "bg-teal-500",    chipHover: "hover:bg-teal-600   hover:border-teal-600   hover:text-white hover:shadow-[0_4px_14px_rgba(13,148,136,0.35)]" },
  "Joints":         { icon: Bone,        bg: "bg-sky-50    border-sky-200",    activeBg: "bg-sky-600    border-sky-600",    text: "text-sky-700",     dot: "bg-sky-500",     chipHover: "hover:bg-sky-600    hover:border-sky-600    hover:text-white hover:shadow-[0_4px_14px_rgba(2,132,199,0.35)]" },
  "Sports":         { icon: Dumbbell,    bg: "bg-emerald-50 border-emerald-200",activeBg: "bg-emerald-600 border-emerald-600",text: "text-emerald-700",  dot: "bg-emerald-500", chipHover: "hover:bg-emerald-600 hover:border-emerald-600 hover:text-white hover:shadow-[0_4px_14px_rgba(5,150,105,0.35)]" },
  "Neuro":          { icon: Brain,       bg: "bg-violet-50  border-violet-200", activeBg: "bg-violet-600  border-violet-600", text: "text-violet-700",   dot: "bg-violet-500",  chipHover: "hover:bg-violet-600  hover:border-violet-600  hover:text-white hover:shadow-[0_4px_14px_rgba(124,58,237,0.35)]" },
  "Geriatric":      { icon: Users,       bg: "bg-amber-50  border-amber-200",  activeBg: "bg-amber-500  border-amber-500",  text: "text-amber-700",   dot: "bg-amber-500",   chipHover: "hover:bg-amber-500  hover:border-amber-500  hover:text-white hover:shadow-[0_4px_14px_rgba(245,158,11,0.35)]" },
  "Post-Surgery":   { icon: HeartPulse,  bg: "bg-slate-100  border-slate-200",  activeBg: "bg-slate-700  border-slate-700",  text: "text-slate-700",   dot: "bg-slate-500",   chipHover: "hover:bg-slate-700  hover:border-slate-700  hover:text-white hover:shadow-[0_4px_14px_rgba(51,65,85,0.35)]" },
  "Pediatric":      { icon: Baby,        bg: "bg-pink-50   border-pink-200",   activeBg: "bg-pink-600   border-pink-600",   text: "text-pink-700",    dot: "bg-pink-500",    chipHover: "hover:bg-pink-600   hover:border-pink-600   hover:text-white hover:shadow-[0_4px_14px_rgba(219,39,119,0.35)]" },
  "Women's Health": { icon: Heart,       bg: "bg-fuchsia-50 border-fuchsia-200",activeBg: "bg-fuchsia-600 border-fuchsia-600",text: "text-fuchsia-700",  dot: "bg-fuchsia-500", chipHover: "hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-white hover:shadow-[0_4px_14px_rgba(192,38,211,0.35)]" },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 6 },
  show:   (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, delay: i * 0.04 } }),
};

export default function Conditions() {
  const [query, setQuery]   = useState("");
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

  const isSearching = query.trim().length > 0;

  return (
    <>
      <Seo
        title="Conditions We Treat — Physio Grade Palwal"
        description="Spine, joints, sports injuries, neuro, geriatric, post-surgery, pediatric & women's health — see all conditions treated at Physio Grade in Palwal."
        path="/conditions"
      />

      {/* ── Page hero ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-surface-tint to-white pb-8 pt-16 md:pt-20">
        <div className="container-x">
          <span className="eyebrow">Conditions</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl max-w-2xl">
            What we treat at <span className="text-primary">Physio Grade</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-soft leading-relaxed">
            Over 40 conditions across 8 specialties. Search below or pick a category.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); if (e.target.value) setActive("All"); }}
              placeholder="e.g. sciatica, frozen shoulder, ACL..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-base placeholder:text-ink-muted shadow-card focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* ── Category selector ─────────────────────────── */}
      {!isSearching && (
        <div className="bg-white border-b border-slate-200 sticky top-[64px] md:top-[80px] z-20">
          <div className="container-x py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max md:flex-wrap md:min-w-0">
              {/* All */}
              <button
                type="button"
                onClick={() => setActive("All")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-all duration-200",
                  active === "All"
                    ? "bg-ink border-ink text-white"
                    : "bg-white border-slate-200 text-ink-soft hover:border-slate-400 hover:text-ink"
                )}
              >
                All
                <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold leading-none">
                  {active === "All" ? conditions.length : conditions.length}
                </span>
              </button>

              {conditionCategories.map((cat) => {
                const m = meta[cat];
                const count = conditions.filter((c) => c.category === cat).length;
                const Icon = m.icon;
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-all duration-200",
                      isActive
                        ? `${m.activeBg} text-white`
                        : `bg-white border-slate-200 ${m.text} hover:${m.bg}`
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {cat}
                    <span className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                      isActive ? "bg-white/25 text-white" : "bg-slate-100 text-ink-muted"
                    )}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── Conditions content ────────────────────────── */}
      <Section>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-14 text-center">
            <p className="text-ink-soft">
              No conditions matched <strong>"{query}"</strong>. Try a different keyword or{" "}
              <Link to="/contact" className="text-primary font-semibold hover:underline">call us directly</Link>.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={active + query}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
              className="space-y-16"
            >
              {Array.from(grouped.entries()).map(([category, items]) => {
                const m = meta[category];
                const Icon = m.icon;
                return (
                  <div key={category}>
                    {/* Category heading */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={cn("flex h-9 w-9 items-center justify-center rounded-xl text-white", m.dot)}>
                        <Icon className="h-4.5 w-4.5" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold text-ink leading-tight">{category}</h2>
                        <p className="text-xs text-ink-muted">{items.length} conditions · click any to see treatment</p>
                      </div>
                    </div>

                    {/* Chip cloud */}
                    <motion.div
                      variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-30px" }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {items.map((c, idx) => (
                        <motion.div key={c.name} custom={idx} variants={chipVariants}>
                          <Link
                            to={`/services/${c.serviceSlug}`}
                            className={cn(
                              "group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-card transition-all duration-200",
                              m.chipHover
                            )}
                          >
                            {c.name}
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </Section>

      <BookingBanner />
    </>
  );
}
