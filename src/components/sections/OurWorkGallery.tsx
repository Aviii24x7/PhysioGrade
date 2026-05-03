import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, X } from "lucide-react";
import { Section } from "../ui/Section";

const photos = [
  { src: "/gallery/clinic-02.jpg", alt: "Physiotherapist performing manual foot therapy on a patient" },
  { src: "/gallery/clinic-09.jpg", alt: "Therapist guiding patient through exercise ball rehabilitation" },
  { src: "/gallery/clinic-05.jpg", alt: "Patient receiving IFT electrotherapy on lower back" },
  { src: "/gallery/clinic-07.jpg", alt: "Physiotherapy treatment session at Physio Grade clinic" },
  { src: "/gallery/clinic-08.jpg", alt: "Manual therapy treatment session" },
  { src: "/gallery/clinic-10.jpg", alt: "Physiotherapy session at Physio Grade Palwal" },
];

const videos = [
  { src: "/gallery/clinic-video-01.mp4", label: "Manual Therapy Session" },
  { src: "/gallery/clinic-video-03.mp4", label: "Rehabilitation Exercise" },
  { src: "/gallery/clinic-video-06.mp4", label: "Treatment in Progress" },
];

export function OurWorkGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Section
      eyebrow="Our Work"
      title="Real patients. Real results."
      subtitle="A glimpse into daily treatment sessions at Physio Grade, Palwal — from manual therapy to electrotherapy and guided exercise rehabilitation."
      centered
    >
      {/* Featured Before/After Case */}
      <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-primary-tint to-surface-tint shadow-soft">
        <div className="px-6 pt-6 pb-4 text-center">
          <span className="eyebrow">Featured Case</span>
          <h3 className="mt-2 text-2xl font-bold text-ink">Bell's Palsy Recovery</h3>
          <p className="mt-1 text-sm text-ink-soft">3 weeks of targeted facial physiotherapy at our clinic</p>
        </div>
        <div className="grid grid-cols-2 gap-0">
          <div className="relative">
            <div className="absolute top-3 left-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
              Before
            </div>
            <img
              src="/gallery/before-facial-palsy.jpg"
              alt="Patient before facial palsy physiotherapy treatment"
              className="h-64 w-full object-cover object-top sm:h-80 md:h-96"
            />
          </div>
          <div className="relative">
            <div className="absolute top-3 left-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
              After
            </div>
            <img
              src="/gallery/after-facial-palsy.jpg"
              alt="Patient after facial palsy physiotherapy treatment — smiling confidently"
              className="h-64 w-full object-cover object-top sm:h-80 md:h-96"
            />
          </div>
        </div>
        <div className="px-6 py-4 text-center text-sm text-ink-soft">
          ✦ Patient consented to sharing these photos to inspire others with similar conditions.
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 mb-8">
        {photos.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightbox(p.src)}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 cursor-zoom-in"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        {videos.map((v, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-video shadow-card">
            <video
              src={v.src}
              controls
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
              aria-label={v.label}
            >
              <source src={v.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 btn-primary"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged clinic photo"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
