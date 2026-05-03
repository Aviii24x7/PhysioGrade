import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "../ui/Section";
import { testimonials } from "../../config/testimonials";
import { cn } from "../../lib/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  });

  // Show 1 on mobile, 3 on desktop — for desktop we show window of 3 starting at index
  const current = testimonials[index];
  const desktopWindow = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <Section
      eyebrow="Patient Stories"
      title="What our patients say"
      subtitle="Real recoveries from real people across Palwal and nearby. (Replace with your verified Google reviews.)"
      centered
      bg="alt"
    >
      {/* Desktop: 3-card carousel */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {desktopWindow.map((t, i) => (
          <article
            key={`${t.name}-${i}`}
            className="card flex flex-col"
            aria-label={`Review by ${t.name}`}
          >
            <Quote className="h-7 w-7 text-primary/40" aria-hidden />
            <div className="mt-3 flex gap-1">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">"{t.body}"</p>
            <div className="mt-5 pt-5 border-t border-slate-200">
              <p className="font-bold text-ink">{t.name}</p>
              <p className="text-xs text-ink-muted">
                {t.treatment}{t.area ? ` · ${t.area}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile: single card with arrows */}
      <div className="md:hidden">
        <article className="card">
          <Quote className="h-7 w-7 text-primary/40" aria-hidden />
          <div className="mt-3 flex gap-1">
            {Array.from({ length: current.rating }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">"{current.body}"</p>
          <div className="mt-5 pt-5 border-t border-slate-200">
            <p className="font-bold text-ink">{current.name}</p>
            <p className="text-xs text-ink-muted">
              {current.treatment}{current.area ? ` · ${current.area}` : ""}
            </p>
          </div>
        </article>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft hover:bg-primary-tint hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-primary" : "w-2 bg-slate-300"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft hover:bg-primary-tint hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </Section>
  );
}
