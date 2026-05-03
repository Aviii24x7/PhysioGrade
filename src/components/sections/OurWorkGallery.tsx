import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ZoomIn, Play } from "lucide-react";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" },
  }),
};

export function OurWorkGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Section
      eyebrow="Our Work"
      title="Real patients. Real results."
      subtitle="A glimpse into daily treatment sessions at Physio Grade, Palwal — from manual therapy to electrotherapy and guided exercise rehabilitation."
      centered
    >
      {/* ── Featured Before / After Case ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="mb-12 max-w-3xl mx-auto"
      >
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

        <p className="mt-3 text-center text-xs text-ink-muted">
          ✦ Patient consented to sharing these photos to inspire others with similar conditions.
        </p>
      </motion.div>

      {/* ── Photo Grid ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 mb-8">
        {photos.map((p, i) => (
          <motion.button
            key={i}
            type="button"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -4 }}
            onClick={() => setLightbox(p.src)}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 cursor-zoom-in shadow-card"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-soft">
                <ZoomIn className="h-5 w-5" aria-hidden />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* ── Video Grid ───────────────────────────────────────────── */}
      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        {videos.map((v, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-video shadow-card hover:shadow-soft transition-shadow duration-300"
          >
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
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/gallery" className="btn-primary group">
          View Full Gallery
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightbox && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            src={lightbox}
            alt="Enlarged clinic photo"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </Section>
  );
}
