export type Testimonial = {
  name: string;
  age?: number;
  area?: string;
  rating: number; // 1–5
  body: string;
  treatment: string;
};

// TODO: Replace these placeholders with real Google reviews after launch.
// Pull names + quotes from your Google Business Profile (with reviewer permission).
export const testimonials: Testimonial[] = [
  {
    name: "Rajeev Sharma",
    age: 56,
    area: "Palwal",
    rating: 5,
    treatment: "Knee Pain (Osteoarthritis)",
    body: "I was struggling to climb stairs for almost a year. After 8 sessions at Physio Grade, my knees feel stronger than they have in a decade. The therapists actually listen and explain everything.",
  },
  {
    name: "Pooja Verma",
    age: 34,
    area: "Hodal",
    rating: 5,
    treatment: "Slipped Disc",
    body: "I was scared I'd need surgery for my slipped disc. The team here designed a recovery plan I could follow even with my work schedule. Pain-free and back to normal life now.",
  },
  {
    name: "Mr. Ahuja",
    age: 72,
    area: "Palwal",
    rating: 5,
    treatment: "Post-Stroke Rehab (Home Visit)",
    body: "My father was bedridden after a stroke. The home-visit physiotherapy made all the difference — he's now walking with a stick and his confidence is back. Caring, professional team.",
  },
  {
    name: "Aman Singh",
    age: 27,
    area: "Faridabad",
    rating: 5,
    treatment: "Sports Injury (Hamstring)",
    body: "Pulled my hamstring badly during a cricket match. The therapists got me back on the field in 5 weeks with a proper rehab plan. Zero re-injuries since.",
  },
  {
    name: "Sunita Devi",
    age: 48,
    area: "Palwal",
    rating: 5,
    treatment: "Frozen Shoulder",
    body: "I couldn't even lift my arm to comb my hair. Within 6 weeks the stiffness had reduced dramatically. They are patient, methodical, and they truly care.",
  },
  {
    name: "Vikram Yadav",
    age: 41,
    area: "Hassanpur",
    rating: 5,
    treatment: "Cervical Spondylosis",
    body: "Years of desk work had wrecked my neck. The combination of manual therapy and posture training they gave me has been life-changing. Highly recommended.",
  },
];
