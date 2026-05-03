import { useState } from "react";
import { X } from "lucide-react";
import { Seo } from "../lib/seo";
import { Section } from "../components/ui/Section";
import { BookingBanner } from "../components/sections/BookingBanner";

const photos = [
  { src: "/gallery/clinic-01.jpg", alt: "Physiotherapy manual therapy session at Physio Grade" },
  { src: "/gallery/clinic-02.jpg", alt: "Physiotherapist performing foot manual therapy" },
  { src: "/gallery/clinic-03.jpg", alt: "Treatment session at Physio Grade Palwal" },
  { src: "/gallery/clinic-04.jpg", alt: "Physiotherapy treatment in progress" },
  { src: "/gallery/clinic-05.jpg", alt: "Patient receiving IFT electrotherapy for lower back pain" },
  { src: "/gallery/clinic-06.jpg", alt: "Physiotherapy session with equipment" },
  { src: "/gallery/clinic-07.jpg", alt: "Manual therapy treatment session" },
  { src: "/gallery/clinic-08.jpg", alt: "Rehabilitation session at Physio Grade" },
  { src: "/gallery/clinic-09.jpg", alt: "Exercise ball rehabilitation guided by physiotherapist" },
  { src: "/gallery/clinic-10.jpg", alt: "Physiotherapy session at Physio Grade Palwal" },
];

const videos = [
  { src: "/gallery/clinic-video-01.mp4", label: "Treatment Session" },
  { src: "/gallery/clinic-video-02.mp4", label: "Manual Therapy" },
  { src: "/gallery/clinic-video-03.mp4", label: "Rehabilitation Exercise" },
  { src: "/gallery/clinic-video-04.mp4", label: "Physiotherapy in Action" },
  { src: "/gallery/clinic-video-05.mp4", label: "Guided Exercise" },
  { src: "/gallery/clinic-video-06.mp4", label: "Treatment in Progress" },
  { src: "/gallery/clinic-video-07.mp4", label: "Clinic Session" },
  { src: "/gallery/clinic-video-08.mp4", label: "Therapy Session" },
  { src: "/gallery/clinic-video-09.mp4", label: "Patient Rehabilitation" },
  { src: "/gallery/clinic-video-10.mp4", label: "Recovery Exercise" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <Seo
        title="Gallery — Our Work | Physio Grade Palwal"
        description="See real treatment sessions, patient recoveries, and before & after cases at Physio Grade Physiotherapy Centre in Palwal."
        path="/gallery"
      />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-surface-tint to-white py-14 md:py-20">
          <div className="container-x text-center">
            <span className="eyebrow">Our Work</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
              Real patients. Real results.
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-soft">
              A window into treatment sessions at Physio Grade — from manual therapy and electrotherapy
              to guided rehabilitation. Including a remarkable Bell's Palsy recovery case.
            </p>
          </div>
        </div>

        {/* Featured: Before & After */}
        <Section eyebrow="Featured Case" title="Bell's Palsy Recovery" centered bg="alt">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-ink-soft mb-8">
              This young patient came to us with facial palsy (Bell's Palsy) — a condition that causes
              sudden weakness or paralysis of the facial muscles. After <strong>3 weeks of targeted
              facial physiotherapy</strong>, including neuromuscular re-education and manual techniques,
              her facial movement and smile fully returned.
            </p>

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-red-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                    Before
                  </div>
                  <img
                    src="/gallery/before-facial-palsy.jpg"
                    alt="Patient before Bell's Palsy physiotherapy treatment"
                    className="h-72 w-full object-cover object-top sm:h-96"
                  />
                  <div className="bg-red-50 px-4 py-3 text-center">
                    <p className="text-sm font-semibold text-red-700">Before Treatment</p>
                    <p className="text-xs text-red-600">Facial drooping, reduced muscle control</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                    After
                  </div>
                  <img
                    src="/gallery/after-facial-palsy.jpg"
                    alt="Patient smiling confidently after Bell's Palsy physiotherapy treatment"
                    className="h-72 w-full object-cover object-top sm:h-96"
                  />
                  <div className="bg-primary-tint px-4 py-3 text-center">
                    <p className="text-sm font-semibold text-primary-dark">After 3 Weeks</p>
                    <p className="text-xs text-primary">Full facial movement restored ✓</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-ink-muted">
              ✦ Photos shared with patient's consent to help others with similar conditions seek timely treatment.
            </p>
          </div>
        </Section>

        {/* Photo Gallery */}
        <Section eyebrow="Photos" title="Inside Our Clinic" centered>
          <div className="columns-2 gap-3 sm:columns-3 md:columns-4 md:gap-4">
            {photos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(p.src)}
                className="group mb-3 md:mb-4 block w-full cursor-zoom-in overflow-hidden rounded-2xl"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Section>

        {/* Video Gallery */}
        <Section eyebrow="Videos" title="Treatment Sessions in Action" centered bg="alt">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl bg-slate-900 shadow-card">
                <video
                  src={v.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video object-cover"
                  aria-label={v.label}
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <figcaption className="px-4 py-2.5 text-sm font-medium text-white/70">
                  {v.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <BookingBanner />
      </main>

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
            aria-label="Close photo"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged clinic photo"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
