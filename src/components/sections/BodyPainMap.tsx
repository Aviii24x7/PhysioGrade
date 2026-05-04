import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Images in /public/body-map/ — replace with properly licensed versions when available
import { Section } from "../ui/Section";

/* ── Zone definitions ──────────────────────────────────────── */
type Side = "front" | "back";

type Zone = {
  id: string;
  label: string;
  listSide: "left" | "right"; // which side of the layout this appears
  bodySide: Side;              // which body image to swap
  image: string;               // /body-map/xxx.png shown when active
  defaultImage: string;        // shown when nothing in this group is selected
  serviceSlug: string;
  conditions: string[];
  description: string;
};

const FRONT_DEFAULT = "/body-map/front-neck.png";
const BACK_DEFAULT  = "/body-map/back-hip.png";

const zones: Zone[] = [
  {
    id: "neck", label: "Neck Pain", listSide: "left", bodySide: "front",
    image: "/body-map/front-neck.png", defaultImage: FRONT_DEFAULT,
    serviceSlug: "back-and-neck-pain",
    conditions: ["Cervical Spondylosis", "Whiplash", "Neck Strain"],
    description: "Neck pain from posture, disc issues, or muscle tension — highly treatable.",
  },
  {
    id: "shoulder", label: "Shoulder Pain", listSide: "left", bodySide: "front",
    image: "/body-map/front-shoulder.png", defaultImage: FRONT_DEFAULT,
    serviceSlug: "frozen-shoulder",
    conditions: ["Frozen Shoulder", "Rotator Cuff Tear", "Shoulder Impingement"],
    description: "Frozen shoulder, rotator cuff injuries, and impingement — all highly treatable.",
  },
  {
    id: "knee", label: "Knee Pain", listSide: "left", bodySide: "front",
    image: "/body-map/front-knee.png", defaultImage: FRONT_DEFAULT,
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Knee Osteoarthritis", "ACL Injury", "Meniscus Tear"],
    description: "Arthritis, sports injuries, or post-surgery — we restore knee strength and stability.",
  },
  {
    id: "hand", label: "Wrist & Hand", listSide: "left", bodySide: "front",
    image: "/body-map/front-hand.png", defaultImage: FRONT_DEFAULT,
    serviceSlug: "sports-injury-rehab",
    conditions: ["Carpal Tunnel Syndrome", "Wrist Sprain", "De Quervain's"],
    description: "Wrist and hand pain affects daily tasks. Early treatment prevents chronic issues.",
  },
  {
    id: "foot", label: "Foot Pain", listSide: "left", bodySide: "front",
    image: "/body-map/front-foot.png", defaultImage: FRONT_DEFAULT,
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Plantar Fasciitis", "Ankle Sprain", "Achilles Tendinopathy"],
    description: "Foot pain limits every step. We treat the root cause for lasting recovery.",
  },
  {
    id: "hip", label: "Hip Pain", listSide: "right", bodySide: "back",
    image: "/body-map/back-hip.png", defaultImage: BACK_DEFAULT,
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Hip Osteoarthritis", "Trochanteric Bursitis", "Hip Impingement"],
    description: "Hip pain affects walking and stairs. We restore pain-free movement.",
  },
  {
    id: "elbow", label: "Elbow Pain", listSide: "right", bodySide: "back",
    image: "/body-map/back-elbow.png", defaultImage: BACK_DEFAULT,
    serviceSlug: "sports-injury-rehab",
    conditions: ["Tennis Elbow", "Golfer's Elbow", "Cubital Tunnel Syndrome"],
    description: "Common in athletes and desk workers — manual therapy gives lasting relief.",
  },
  {
    id: "ankle", label: "Ankle Pain", listSide: "right", bodySide: "back",
    image: "/body-map/back-ankle.png", defaultImage: BACK_DEFAULT,
    serviceSlug: "knee-and-joint-pain",
    conditions: ["Ankle Sprain", "Achilles Tendinopathy", "Ankle Instability"],
    description: "Recurring ankle sprains and instability need structured rehab to resolve fully.",
  },
  {
    id: "back", label: "Back Pain", listSide: "right", bodySide: "back",
    image: "/body-map/back-back.png", defaultImage: BACK_DEFAULT,
    serviceSlug: "back-and-neck-pain",
    conditions: ["Sciatica", "Slipped Disc", "Lumbar Spondylosis"],
    description: "Back pain is the #1 reason people visit a physiotherapist. Most cases resolve without surgery.",
  },
];

const leftZones  = zones.filter((z) => z.listSide === "left");
const rightZones = zones.filter((z) => z.listSide === "right");

/* ── Condition list item ───────────────────────────────────── */
function ZoneItem({ zone, isActive, onSelect }: {
  zone: Zone; isActive: boolean; onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(zone.id)}
        aria-pressed={isActive}
        className={`flex w-full items-center gap-3 py-2.5 text-left transition-colors duration-150 group ${
          isActive ? "text-primary" : "text-ink-soft hover:text-ink"
        }`}
      >
        {/* Circle check icon */}
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          isActive
            ? "border-primary bg-primary"
            : "border-slate-300 group-hover:border-primary/50"
        }`}>
          {isActive && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />}
        </span>
        <span className={`text-sm font-semibold transition-colors ${isActive ? "text-primary" : ""}`}>
          {zone.label}
        </span>
      </button>
    </li>
  );
}

/* ── Body image panel — instant swap, no fade ──────────────── */
function BodyPanel({ side, selectedZone }: { side: Side; selectedZone: Zone | undefined }) {
  const img = selectedZone ? selectedZone.image : (side === "front" ? FRONT_DEFAULT : BACK_DEFAULT);

  return (
    <div className="w-full max-w-[200px] mx-auto">
      <img
        src={img}
        alt={side === "front" ? "Front anatomical body view" : "Back anatomical body view"}
        className="w-full h-auto select-none"
        draggable={false}
      />
    </div>
  );
}

/* ── Main component ────────────────────────────────────────── */
export function BodyPainMap() {
  // Front and back selections are independent — can both be active simultaneously
  const [frontSelected, setFrontSelected] = useState<string | null>(null);
  const [backSelected,  setBackSelected]  = useState<string | null>(null);

  const toggle = (id: string) => {
    const zone = zones.find((z) => z.id === id);
    if (!zone) return;
    if (zone.bodySide === "front") setFrontSelected((p) => (p === id ? null : id));
    else                            setBackSelected((p)  => (p === id ? null : id));
  };

  const frontZone = zones.find((z) => z.id === frontSelected);
  const backZone  = zones.find((z) => z.id === backSelected);

  // Info panel shows whichever was clicked most recently — track last
  const [lastSide, setLastSide] = useState<Side | null>(null);
  const toggleWithSide = (id: string) => {
    const zone = zones.find((z) => z.id === id);
    if (!zone) return;
    toggle(id);
    setLastSide(zone.bodySide);
  };
  const activeZone = lastSide === "back" ? backZone : (frontZone ?? backZone);

  return (
    <Section
      eyebrow="Find Your Treatment"
      title={<>Where does it <span className="text-primary">hurt?</span></>}
      subtitle="Select a condition to see how we treat it."
      centered
      bg="alt"
    >
      {/* ── Mobile: 2-col list → bodies → panel ─────────────────── */}
      <div className="lg:hidden flex flex-col gap-4">
        {/* Conditions in 2 columns — no box */}
        <div className="grid grid-cols-2 gap-x-6">
          <ul className="divide-y divide-slate-100">
            {leftZones.map((z) => (
              <ZoneItem key={z.id} zone={z} isActive={frontSelected === z.id} onSelect={toggleWithSide} />
            ))}
          </ul>
          <ul className="divide-y divide-slate-100">
            {rightZones.map((z) => (
              <ZoneItem key={z.id} zone={z} isActive={backSelected === z.id} onSelect={toggleWithSide} />
            ))}
          </ul>
        </div>

        {/* Bodies side by side */}
        <div className="flex items-end justify-center gap-2">
          <BodyPanel side="front" selectedZone={frontZone} />
          <BodyPanel side="back"  selectedZone={backZone} />
        </div>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          {activeZone && (
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-primary/20 bg-white p-4 shadow-card text-center"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{activeZone.label}</p>
              <p className="text-sm text-ink-soft mb-3 leading-relaxed">{activeZone.description}</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {activeZone.conditions.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              <Link to={`/services/${activeZone.serviceSlug}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-hover transition-colors shadow-cta">
                See how we treat it <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Desktop: left list | bodies | right list ─────────────── */}
      <div className="hidden lg:flex lg:items-start lg:gap-4">
        <div className="w-44 shrink-0 pt-12">
          <ul className="divide-y divide-slate-100">
            {leftZones.map((z) => (
              <ZoneItem key={z.id} zone={z} isActive={frontSelected === z.id} onSelect={toggleWithSide} />
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="flex w-full items-end justify-center gap-4">
            <BodyPanel side="front" selectedZone={frontZone} />
            <BodyPanel side="back"  selectedZone={backZone} />
          </div>

          <AnimatePresence mode="wait">
            {activeZone ? (
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md rounded-2xl border border-primary/20 bg-white p-4 shadow-card text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{activeZone.label}</p>
                <p className="text-sm text-ink-soft mb-3 leading-relaxed">{activeZone.description}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                  {activeZone.conditions.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
                <Link to={`/services/${activeZone.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-hover transition-colors shadow-cta">
                  See how we treat it <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ) : (
              <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-xs text-ink-muted pt-1">
                ← Select a condition to see treatment details
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="w-44 shrink-0 pt-12">
          <ul className="divide-y divide-slate-100">
            {rightZones.map((z) => (
              <ZoneItem key={z.id} zone={z} isActive={backSelected === z.id} onSelect={toggleWithSide} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
