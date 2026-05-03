export type Testimonial = {
  name: string;
  reviewCount?: string;
  badge?: string;
  rating: number;
  body: string;
  treatment: string;
  timeAgo: string;
  featured?: boolean;
};

// Real Google reviews from Physio Grade's Google Business Profile.
export const testimonials: Testimonial[] = [
  {
    name: "Siddharth Jain",
    reviewCount: "200+ reviews",
    badge: "Local Guide",
    rating: 5,
    treatment: "Neck & Cervical Pain",
    timeAgo: "2 weeks ago",
    featured: true,
    body: "I had neck and cervical pain and got wonderful physio treatment here. Both Dr. Mukesh and Dr. Renu are very skilled in their field — Dr. Mukesh is excellent with physiotherapy and Dr. Renu is outstanding in needle treatment. I got relief through a combination of both. Definitely recommend to everyone seeking physio support.",
  },
  {
    name: "Harshappy",
    reviewCount: "4 reviews",
    rating: 5,
    treatment: "Post Knee Replacement (Home Visit)",
    timeAgo: "5 months ago",
    body: "Dr. Mukesh provided excellent home visit therapy after my mother's TKR (knee replacement) surgery. He was highly professional and very helpful in managing her pain and quickly getting her back on her feet. The home service made recovery so much easier. Highly recommend!",
  },
  {
    name: "Ashok Kumar",
    reviewCount: "2 reviews",
    rating: 5,
    treatment: "Brain Haemorrhage Recovery",
    timeAgo: "1 year ago",
    body: "I suffered a brain haemorrhage and was on a ventilator for 3 months. After initial physiotherapy at Sarvodaya Hospital, I continued my recovery at Physio Grade. Thanks to their dedicated treatment and consistent sessions, I went from being completely bedridden to walking again. I am deeply grateful to the entire team.",
  },
  {
    name: "Rahul Kumar",
    reviewCount: "4 reviews",
    rating: 5,
    treatment: "General Physiotherapy",
    timeAgo: "5 months ago",
    body: "Physio Grade is the best physiotherapy centre in Palwal district. Treatment is done using modern machines and the doctors are highly knowledgeable. The results speak for themselves — truly impressive.",
  },
  {
    name: "Ravinder K",
    reviewCount: "6 reviews",
    rating: 5,
    treatment: "Back & Leg Pain",
    timeAgo: "1 year ago",
    body: "Amazing physiotherapy centre — very good experience of pain relief. I got therapy for my back and leg pain and the improvement was noticeable within just a few sessions. Great team and a clean, comfortable clinic.",
  },
  {
    name: "Karan Kholi",
    rating: 5,
    treatment: "General Consultation",
    timeAgo: "1 year ago",
    body: "Good, experienced doctors. The clinic has a professional and welcoming environment. Felt well cared for throughout my treatment.",
  },
];
