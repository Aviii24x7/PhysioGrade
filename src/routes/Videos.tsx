import { useMemo, useState } from "react";
import { ExternalLink, Youtube } from "lucide-react";
import { Section } from "../components/ui/Section";
import { VideoCard } from "../components/ui/VideoCard";
import { BookingBanner } from "../components/sections/BookingBanner";
import { Seo } from "../lib/seo";
import { videos, videoCategories, type VideoCategory } from "../config/videos";
import { site } from "../config/site";
import { cn } from "../lib/cn";

export default function Videos() {
  const [active, setActive] = useState<VideoCategory | "All">("All");
  const filtered = useMemo(
    () => (active === "All" ? videos : videos.filter((v) => v.category === active)),
    [active]
  );

  return (
    <>
      <Seo
        title="Video Library — Physio Grade Palwal"
        description="Watch physiotherapy exercises, treatment walkthroughs, patient stories, and posture tips from the Physio Grade team."
        path="/videos"
      />

      <section className="bg-gradient-to-br from-surface-tint to-white">
        <div className="container-x py-16 md:py-20">
          <span className="eyebrow">Video Library</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-ink max-w-3xl">
            Exercises, treatments, and patient stories — on video.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Watch in place, or open any video on YouTube. Subscribe to our channel
            for new posture tips, exercise tutorials, and recovery walkthroughs every week.
          </p>
          <div className="mt-7">
            <a
              href={site.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white hover:bg-[#cc0000] min-h-[44px]"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              Visit our YouTube channel
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {(["All", ...videoCategories] as const).map((cat) => (
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

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center text-ink-soft">
            No videos in this category yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </Section>

      <BookingBanner />
    </>
  );
}
