import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import type { Video } from "../../config/videos";

// Lite YouTube embed pattern: render a thumbnail until clicked, then swap
// to a real iframe. Skips loading YouTube's heavy embed JS on initial page
// load, which dramatically improves performance on pages with multiple videos.
export function VideoCard({ video }: { video: Video }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
      <div className="relative aspect-video w-full bg-slate-900">
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${video.title}`}
            className="group/btn absolute inset-0 h-full w-full"
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/btn:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-cta transition-transform duration-300 group-hover/btn:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" aria-hidden />
              </div>
            </div>
            {video.durationLabel && (
              <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-xs font-semibold text-white">
                {video.durationLabel}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="chip self-start">{video.category}</span>
        <h3 className="text-lg font-bold leading-snug text-ink">{video.title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed">{video.description}</p>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          Watch on YouTube
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </article>
  );
}
