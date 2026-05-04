import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";

type Zone = {
  id: string;
  label: string;
  side: "left" | "right";
  serviceSlug: string;
  conditions: string[];
  description: string;
  svgIds: string[]; // SVG element IDs to highlight
};

const zones: Zone[] = [
  {
    id: "neck",
    label: "Neck Pain",
    side: "left",
    serviceSlug: "back-and-neck-pain",
    conditions: ["Cervical Spondylosis", "Whiplash", "Neck Strain", "Cervical Disc Bulge"],
    description: "Neck pain is one of the most common complaints we see — often linked to posture, screens, and disc issues.",
    svgIds: ["z-neck"],
  },
  {
    id: "shoulder",
    label: "Shoulder Pain",
    side: "left",
    serviceSlug: "frozen-shoulder",
    conditions: ["Frozen Shoulder", "Rotator Cuff Tear", "Shoulder Impingement", "Bursitis"],
    description: "Shoulder problems range from stiffness and frozen shoulder to rotator cuff injuries — all highly treatable.",
    svgIds: ["z-l-shoulder", "z-r-shoulder"],
  },
  {
    id: "back",
    label: "Back Pain",
    side: "left",
    serviceSlug: "back-and-neck-pain",
    conditions: ["Sciatica", "Slipped Disc", "Lumbar Spondylosis", "SI Joint Pain"],
    description: "Back pain is the #1 reason people visit a physiotherapist. Most cases resolve without surgery.",
    svgIds: ["z-upper-torso", "z-lower-torso"],
  },
  {
    id: "knee",
    label: "Knee Pain",
    side: "left",
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Knee Osteoarthritis", "ACL Injury", "Meniscus Tear", "Runner's Knee"],
    description: "Whether it's arthritis, a sports injury, or post-surgery, we restore knee strength and stability.",
    svgIds: ["z-l-knee", "z-r-knee"],
  },
  {
    id: "hip",
    label: "Hip Pain",
    side: "right",
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Hip Osteoarthritis", "Trochanteric Bursitis", "Hip Impingement", "SI Joint Dysfunction"],
    description: "Hip pain affects walking, stairs, and sleep. We identify the source and restore pain-free movement.",
    svgIds: ["z-hip"],
  },
  {
    id: "elbow",
    label: "Elbow Pain",
    side: "right",
    serviceSlug: "sports-injury-rehab",
    conditions: ["Tennis Elbow", "Golfer's Elbow", "Cubital Tunnel Syndrome"],
    description: "Elbow pain is common in both athletes and desk workers. Manual therapy and exercises give lasting relief.",
    svgIds: ["z-l-elbow", "z-r-elbow"],
  },
  {
    id: "hand",
    label: "Wrist & Hand",
    side: "right",
    serviceSlug: "sports-injury-rehab",
    conditions: ["Carpal Tunnel Syndrome", "Wrist Sprain", "De Quervain's Tenosynovitis"],
    description: "Wrist and hand problems affect everything from typing to lifting. Early treatment prevents chronic issues.",
    svgIds: ["z-l-hand", "z-r-hand"],
  },
  {
    id: "ankle",
    label: "Ankle & Foot",
    side: "right",
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Plantar Fasciitis", "Ankle Sprain", "Achilles Tendinopathy"],
    description: "Foot and ankle pain can limit every step. We address the root cause for lasting, stable recovery.",
    svgIds: ["z-l-foot", "z-r-foot"],
  },
];

const leftZones  = zones.filter((z) => z.side === "left");
const rightZones = zones.filter((z) => z.side === "right");

/* ── SVG zone paths ─────────────────────────────────────────── */
function ZoneShape({ id, d, cx, cy, rx, ry, x, y, w, h, r = 0 }: {
  id: string; d?: string;
  cx?: number; cy?: number; rx?: number; ry?: number;
  x?: number; y?: number; w?: number; h?: number; r?: number;
}) {
  if (d) return <path id={id} d={d} />;
  if (cx !== undefined) return <ellipse id={id} cx={cx} cy={cy} rx={rx} ry={ry} />;
  return <rect id={id} x={x} y={y} width={w} height={h} rx={r} />;
}

/* ── Human body SVG ─────────────────────────────────────────── */
function BodySVG({ activeZoneIds, hoveredZoneIds, onZoneClick, onZoneHover, onZoneLeave }: {
  activeZoneIds: string[];
  hoveredZoneIds: string[];
  onZoneClick: (zoneId: string) => void;
  onZoneHover: (zoneId: string) => void;
  onZoneLeave: () => void;
}) {
  const isHighlighted = (id: string) => activeZoneIds.includes(id) || hoveredZoneIds.includes(id);
  const isActive = (id: string) => activeZoneIds.includes(id);

  const zoneGroups: { ids: string[]; zone: Zone }[] = zones.map((z) => ({
    ids: z.svgIds,
    zone: z,
  }));

  const zoneStyle = (ids: string[]) => {
    const active = ids.some(isActive);
    const hovered = ids.some(isHighlighted) && !active;
    if (active) return { fill: "rgba(14,124,123,0.22)", stroke: "#0E7C7B", strokeWidth: 1.5 };
    if (hovered) return { fill: "rgba(14,124,123,0.12)", stroke: "#0E7C7B", strokeWidth: 1 };
    return { fill: "rgba(14,124,123,0)", stroke: "transparent", strokeWidth: 0 };
  };

  /* Body shapes data — viewBox 240 × 510 */
  const bodyParts = [
    // head
    { type: "circle" as const, cx: 120, cy: 40, r: 32 },
    // neck
    { type: "rect" as const, x: 112, y: 71, w: 16, h: 20, r: 5 },
    // left shoulder
    { type: "ellipse" as const, cx: 72, cy: 108, rx: 26, ry: 13 },
    // right shoulder
    { type: "ellipse" as const, cx: 168, cy: 108, rx: 26, ry: 13 },
    // upper torso
    { type: "rect" as const, x: 85, y: 93, w: 70, h: 88, r: 8 },
    // lower torso
    { type: "rect" as const, x: 88, y: 178, w: 64, h: 62, r: 7 },
    // hips
    { type: "rect" as const, x: 76, y: 236, w: 88, h: 48, r: 10 },
    // left upper arm
    { type: "rect" as const, x: 50, y: 95, w: 18, h: 74, r: 7 },
    // right upper arm
    { type: "rect" as const, x: 172, y: 95, w: 18, h: 74, r: 7 },
    // left elbow blob
    { type: "ellipse" as const, cx: 59, cy: 178, rx: 14, ry: 12 },
    // right elbow blob
    { type: "ellipse" as const, cx: 181, cy: 178, rx: 14, ry: 12 },
    // left forearm
    { type: "rect" as const, x: 44, y: 184, w: 16, h: 68, r: 6 },
    // right forearm
    { type: "rect" as const, x: 180, y: 184, w: 16, h: 68, r: 6 },
    // left hand
    { type: "ellipse" as const, cx: 52, cy: 264, rx: 14, ry: 20 },
    // right hand
    { type: "ellipse" as const, cx: 188, cy: 264, rx: 14, ry: 20 },
    // left thigh
    { type: "rect" as const, x: 80, y: 280, w: 36, h: 74, r: 8 },
    // right thigh
    { type: "rect" as const, x: 124, y: 280, w: 36, h: 74, r: 8 },
    // left knee
    { type: "ellipse" as const, cx: 98, cy: 360, rx: 20, ry: 15 },
    // right knee
    { type: "ellipse" as const, cx: 142, cy: 360, rx: 20, ry: 15 },
    // left calf
    { type: "rect" as const, x: 83, y: 372, w: 30, h: 72, r: 7 },
    // right calf
    { type: "rect" as const, x: 127, y: 372, w: 30, h: 72, r: 7 },
    // left foot
    { type: "ellipse" as const, cx: 97, cy: 454, rx: 24, ry: 12 },
    // right foot
    { type: "ellipse" as const, cx: 143, cy: 454, rx: 24, ry: 12 },
  ];

  /* Clickable overlay zones */
  const overlayZones = [
    { id: "z-neck",       type: "ellipse", cx: 120, cy: 82, rx: 18, ry: 16 },
    { id: "z-l-shoulder", type: "ellipse", cx: 68, cy: 108, rx: 28, ry: 20 },
    { id: "z-r-shoulder", type: "ellipse", cx: 172, cy: 108, rx: 28, ry: 20 },
    { id: "z-upper-torso",type: "rect",    x: 82, y: 88,  w: 76, h: 95, r: 8 },
    { id: "z-lower-torso",type: "rect",    x: 85, y: 175, w: 70, h: 72, r: 7 },
    { id: "z-hip",        type: "rect",    x: 74, y: 232, w: 92, h: 56, r: 10 },
    { id: "z-l-elbow",    type: "ellipse", cx: 58, cy: 178, rx: 20, ry: 18 },
    { id: "z-r-elbow",    type: "ellipse", cx: 182, cy: 178, rx: 20, ry: 18 },
    { id: "z-l-hand",     type: "ellipse", cx: 52, cy: 264, rx: 20, ry: 26 },
    { id: "z-r-hand",     type: "ellipse", cx: 188, cy: 264, rx: 20, ry: 26 },
    { id: "z-l-knee",     type: "ellipse", cx: 98, cy: 360, rx: 24, ry: 22 },
    { id: "z-r-knee",     type: "ellipse", cx: 142, cy: 360, rx: 24, ry: 22 },
    { id: "z-l-foot",     type: "ellipse", cx: 97, cy: 452, rx: 28, ry: 20 },
    { id: "z-r-foot",     type: "ellipse", cx: 143, cy: 452, rx: 28, ry: 20 },
  ];

  return (
    <svg
      viewBox="0 0 240 480"
      className="w-full max-w-[220px] mx-auto select-none"
      aria-label="Interactive body diagram — click a zone to see what we treat"
    >
      {/* Body parts (decorative) */}
      <g fill="#F0FDFC" stroke="#94A3B8" strokeWidth="1">
        {bodyParts.map((p, i) => {
          if (p.type === "circle")  return <circle key={i} cx={p.cx} cy={p.cy} r={p.r} />;
          if (p.type === "ellipse") return <ellipse key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry} />;
          return <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx={p.r} />;
        })}
      </g>

      {/* Interactive overlay zones */}
      {zoneGroups.map(({ ids, zone }) =>
        overlayZones
          .filter((oz) => ids.includes(oz.id))
          .map((oz) => {
            const style = zoneStyle(ids);
            const baseProps = {
              key: oz.id,
              id: oz.id,
              fill: style.fill,
              stroke: style.stroke,
              strokeWidth: style.strokeWidth,
              style: { cursor: "pointer", transition: "fill 0.2s, stroke 0.2s" },
              onClick: () => onZoneClick(zone.id),
              onMouseEnter: () => onZoneHover(zone.id),
              onMouseLeave: onZoneLeave,
            };
            if (oz.type === "ellipse") return <ellipse {...baseProps} cx={oz.cx} cy={oz.cy} rx={oz.rx} ry={oz.ry} />;
            return <rect {...baseProps} x={oz.x} y={oz.y} width={oz.w} height={oz.h} rx={oz.r ?? 6} />;
          })
      )}

      {/* Pulse rings on active zones */}
      {zoneGroups.map(({ ids, zone }) =>
        ids.some(isActive)
          ? overlayZones
              .filter((oz) => ids.includes(oz.id))
              .map((oz) =>
                oz.type === "ellipse" ? (
                  <ellipse
                    key={`pulse-${oz.id}`}
                    cx={oz.cx} cy={oz.cy} rx={(oz.rx ?? 20) + 4} ry={(oz.ry ?? 20) + 4}
                    fill="none"
                    stroke="#0E7C7B"
                    strokeWidth="1.5"
                    opacity="0.4"
                    style={{ animation: "pulse-ring 1.5s ease-out infinite" }}
                  />
                ) : (
                  <rect
                    key={`pulse-${oz.id}`}
                    x={(oz.x ?? 0) - 4} y={(oz.y ?? 0) - 4}
                    width={(oz.w ?? 40) + 8} height={(oz.h ?? 40) + 8}
                    rx={(oz.r ?? 6) + 2}
                    fill="none"
                    stroke="#0E7C7B"
                    strokeWidth="1.5"
                    opacity="0.4"
                    style={{ animation: "pulse-ring 1.5s ease-out infinite" }}
                  />
                )
              )
          : null
      )}
    </svg>
  );
}

/* ── Zone list item ─────────────────────────────────────────── */
function ZoneListItem({ zone, isActive, isHovered, onClick, onMouseEnter, onMouseLeave }: {
  zone: Zone;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group w-full flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-left transition-all duration-200 ${
        isActive
          ? "bg-primary text-white shadow-cta"
          : isHovered
          ? "bg-primary-tint text-primary-dark"
          : "bg-white text-ink-soft hover:bg-primary-tint hover:text-primary border border-slate-200"
      }`}
      aria-pressed={isActive}
    >
      <span
        className={`h-2 w-2 rounded-full shrink-0 transition-colors ${
          isActive ? "bg-white" : isHovered ? "bg-primary" : "bg-slate-300"
        }`}
      />
      {zone.label}
    </button>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export function BodyPainMap() {
  const [selected, setSelected]     = useState<string | null>(null);
  const [hovered, setHovered]       = useState<string | null>(null);

  const selectedZone = zones.find((z) => z.id === selected);
  const hoveredZone  = zones.find((z) => z.id === hovered);

  const activeZoneIds = selectedZone ? selectedZone.svgIds : [];
  const hoveredZoneIds = hoveredZone && !selected ? hoveredZone.svgIds : [];

  const handleZoneClick = (zoneId: string) => setSelected((prev) => (prev === zoneId ? null : zoneId));
  const handleZoneHover = (zoneId: string) => setHovered(zoneId);
  const handleZoneLeave = () => setHovered(null);

  return (
    <Section
      eyebrow="Find Your Treatment"
      title={<>Where does it <span className="text-primary">hurt?</span></>}
      subtitle="Click any body area or condition — we'll show you exactly what we treat and how we can help."
      centered
    >
      {/* Pulse animation keyframe */}
      <style>{`
        @keyframes pulse-ring {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.35); }
        }
      `}</style>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-4">
        {/* Left list */}
        <div className="flex flex-row flex-wrap justify-center gap-2 lg:flex-col lg:w-44 lg:shrink-0">
          {leftZones.map((z) => (
            <ZoneListItem
              key={z.id}
              zone={z}
              isActive={selected === z.id}
              isHovered={hovered === z.id && selected !== z.id}
              onClick={() => handleZoneClick(z.id)}
              onMouseEnter={() => handleZoneHover(z.id)}
              onMouseLeave={handleZoneLeave}
            />
          ))}
        </div>

        {/* Body SVG */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <BodySVG
            activeZoneIds={activeZoneIds}
            hoveredZoneIds={hoveredZoneIds}
            onZoneClick={handleZoneClick}
            onZoneHover={handleZoneHover}
            onZoneLeave={handleZoneLeave}
          />

          {/* Prompt when nothing selected */}
          {!selected && !hovered && (
            <p className="text-xs text-ink-muted flex items-center gap-1">
              <ChevronDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
              Tap a body area or a condition
            </p>
          )}

          {/* Info panel */}
          <AnimatePresence mode="wait">
            {selectedZone && (
              <motion.div
                key={selectedZone.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-sm rounded-2xl border border-primary/20 bg-primary-tint p-4 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {selectedZone.label}
                </p>
                <p className="text-sm text-ink-soft mb-3 leading-relaxed">
                  {selectedZone.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {selectedZone.conditions.map((c) => (
                    <span key={c} className="rounded-full bg-white border border-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary-dark">
                      {c}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/services/${selectedZone.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover transition-colors shadow-cta"
                >
                  See how we treat {selectedZone.label.toLowerCase()}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right list */}
        <div className="flex flex-row flex-wrap justify-center gap-2 lg:flex-col lg:w-44 lg:shrink-0">
          {rightZones.map((z) => (
            <ZoneListItem
              key={z.id}
              zone={z}
              isActive={selected === z.id}
              isHovered={hovered === z.id && selected !== z.id}
              onClick={() => handleZoneClick(z.id)}
              onMouseEnter={() => handleZoneHover(z.id)}
              onMouseLeave={handleZoneLeave}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
