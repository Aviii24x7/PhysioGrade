import { Link } from "react-router-dom";
import { ExternalLink, Youtube } from "lucide-react";
import { Section } from "../ui/Section";
import { VideoCard } from "../ui/VideoCard";
import { videos } from "../../config/videos";
import { site } from "../../config/site";

export function VideoGallery({ limit = 6 }: { limit?: number }) {
  const list = videos.slice(0, limit);
  return (
    <Section
      eyebrow="Video Library"
      title="Watch & learn — exercises, treatments, and patient stories"
      subtitle="Educational videos from our team. Tap a thumbnail to play in place, or open the video on YouTube."
      centered
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link to="/videos" className="btn-ghost">
          View full video library
        </Link>
        <a
          href={site.youtubeChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white hover:bg-[#cc0000] min-h-[44px]"
        >
          <Youtube className="h-4 w-4" aria-hidden />
          Subscribe on YouTube
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </Section>
  );
}
