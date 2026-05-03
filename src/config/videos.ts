export type VideoCategory = "Exercises" | "Treatments" | "Patient Stories" | "Tips";

export type Video = {
  id: string; // YouTube video ID (the part after v= in the URL)
  title: string;
  description: string;
  durationLabel?: string; // optional pretty label e.g. "3:42"
  category: VideoCategory;
};

// TODO: Replace these with your own YouTube videos.
// To add a video: copy the YouTube URL, take the part after `v=` (or after youtu.be/),
// and add an entry below. Example: https://youtu.be/ABC123XYZ → id: "ABC123XYZ"
export const videos: Video[] = [
  {
    id: "ScMzIvxBSi4",
    title: "Sciatica Relief — 3 Exercises You Can Start Today",
    description: "Simple, evidence-based stretches that help calm sciatic nerve pain at home.",
    durationLabel: "5:12",
    category: "Exercises",
  },
  {
    id: "T_aGRRujpiE",
    title: "Frozen Shoulder Rehab — What Actually Works",
    description: "A walkthrough of the rehab approach we use for adhesive capsulitis at the clinic.",
    durationLabel: "6:48",
    category: "Treatments",
  },
  {
    id: "_kIryRztiQs",
    title: "Knee Pain in Older Adults — A Patient's Recovery Story",
    description: "How structured physiotherapy helped a 64-year-old patient avoid knee surgery.",
    durationLabel: "4:25",
    category: "Patient Stories",
  },
  {
    id: "B8WHKRzkCOY",
    title: "Cervical Spondylosis — Posture Tips for Office Workers",
    description: "Five posture and ergonomics fixes that prevent and reduce neck pain at the desk.",
    durationLabel: "7:02",
    category: "Tips",
  },
  {
    id: "j8uy2K9DSi8",
    title: "Stroke Rehab at Home — A Caregiver's Guide",
    description: "What home-visit neuro rehab looks like and how families can support recovery.",
    durationLabel: "8:14",
    category: "Treatments",
  },
  {
    id: "Tn3Ge0YQzS8",
    title: "Plantar Fasciitis — Heel Pain You Don't Have to Live With",
    description: "Why heel pain happens and a 4-step self-care routine to start with.",
    durationLabel: "5:50",
    category: "Exercises",
  },
];

export const videoCategories: VideoCategory[] = [
  "Exercises",
  "Treatments",
  "Patient Stories",
  "Tips",
];
