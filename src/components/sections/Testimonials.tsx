import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { testimonials } from "../../config/testimonials";
import { cn } from "../../lib/cn";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  featured = false,
}: {
  t: (typeof testimonials)[0];
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border p-5 shadow-card transition-all duration-300",
        featured
          ? "border-primary/30 bg-gradient-to-br from-primary-tint to-white shadow-soft"
          : "border-slate-200 bg-white hover:shadow-soft hover:-translate-y-0.5"
      )}
      aria-label={`Review by ${t.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
          {t.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="font-bold text-ink text-sm leading-tight">{t.name}</p>
            {t.badge && (
              <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent-dark">
                <BadgeCheck className="h-3 w-3" aria-hidden />
                {t.badge}
              </span>
            )}
          </div>
          {t.reviewCount && (
            <p className="text-[11px] text-ink-muted">{t.reviewCount}</p>
          )}
        </div>
        {/* Google G logo */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      {/* Stars + time */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <StarRow count={t.rating} />
        <span className="text-[11px] text-ink-muted">{t.timeAgo}</span>
      </div>

      {/* Body */}
      <div className="mt-3 flex-1">
        <Quote className="h-5 w-5 text-primary/30 mb-1" aria-hidden />
        <p className="text-sm leading-relaxed text-ink-soft">"{t.body}"</p>
      </div>

      {/* Treatment tag */}
      <div className="mt-4 pt-3 border-t border-slate-200/70">
        <span className="chip text-[11px]">{t.treatment}</span>
      </div>
    </article>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % rest.length);
  const prev = () => setIndex((i) => (i - 1 + rest.length) % rest.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  });

  const desktopSlice = [
    rest[index],
    rest[(index + 1) % rest.length],
    rest[(index + 2) % rest.length],
  ];

  return (
    <Section
      eyebrow="Google Reviews"
      title="What our patients say"
      subtitle="Real reviews from real patients in Palwal and nearby — verified on Google."
      centered
      bg="alt"
    >
      {/* Featured review — full width */}
      <div className="mb-6">
        <TestimonialCard t={featured} featured />
      </div>

      {/* Carousel — 3 cards desktop, 1 mobile */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {desktopSlice.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>

      {/* Mobile single card */}
      <div className="md:hidden">
        <TestimonialCard t={rest[index]} />
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft hover:bg-primary-tint hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {rest.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-5 bg-primary" : "w-2 bg-slate-300"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft hover:bg-primary-tint hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Google rating summary */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://maps.app.goo.gl/tBnksXE1e7oYbVhJ7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-card hover:shadow-soft transition-shadow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <div className="flex items-center gap-1.5">
            <StarRow count={5} />
            <span className="text-sm font-bold text-ink">4.9</span>
            <span className="text-sm text-ink-muted">· See all reviews on Google</span>
          </div>
        </a>
      </div>
    </Section>
  );
}
