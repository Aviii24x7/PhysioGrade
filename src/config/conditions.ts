export type ConditionCategory =
  | "Spine"
  | "Joints"
  | "Sports"
  | "Neuro"
  | "Geriatric"
  | "Post-Surgery"
  | "Pediatric"
  | "Women's Health";

export type Condition = {
  name: string;
  category: ConditionCategory;
  // Slug of the service that best treats this condition
  serviceSlug: string;
};

export const conditions: Condition[] = [
  // Spine
  { name: "Sciatica", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Slipped Disc", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Cervical Spondylosis", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Lumbar Spondylosis", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Spinal Stenosis", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "SI Joint Dysfunction", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Postural Pain", category: "Spine", serviceSlug: "back-and-neck-pain" },
  { name: "Whiplash", category: "Spine", serviceSlug: "back-and-neck-pain" },

  // Joints
  { name: "Knee Osteoarthritis", category: "Joints", serviceSlug: "knee-and-joint-pain" },
  { name: "Hip Osteoarthritis", category: "Joints", serviceSlug: "knee-and-joint-pain" },
  { name: "Frozen Shoulder", category: "Joints", serviceSlug: "frozen-shoulder" },
  { name: "Rotator Cuff Injury", category: "Joints", serviceSlug: "frozen-shoulder" },
  { name: "Shoulder Impingement", category: "Joints", serviceSlug: "frozen-shoulder" },
  { name: "Tennis Elbow", category: "Joints", serviceSlug: "sports-injury-rehab" },
  { name: "Golfer's Elbow", category: "Joints", serviceSlug: "sports-injury-rehab" },
  { name: "Carpal Tunnel Syndrome", category: "Joints", serviceSlug: "sports-injury-rehab" },
  { name: "Plantar Fasciitis", category: "Joints", serviceSlug: "knee-and-joint-pain" },

  // Sports
  { name: "ACL Injury", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Meniscus Tear", category: "Sports", serviceSlug: "knee-and-joint-pain" },
  { name: "Hamstring Strain", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Calf Strain", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Ankle Sprain", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Runner's Knee", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Shin Splints", category: "Sports", serviceSlug: "sports-injury-rehab" },
  { name: "Tendinopathies", category: "Sports", serviceSlug: "sports-injury-rehab" },

  // Neuro
  { name: "Stroke / CVA", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Parkinson's Disease", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Bell's Palsy", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Spinal Cord Injury", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Multiple Sclerosis", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Vertigo / BPPV", category: "Neuro", serviceSlug: "neuro-rehab" },
  { name: "Peripheral Nerve Injury", category: "Neuro", serviceSlug: "neuro-rehab" },

  // Geriatric
  { name: "Falls & Balance Disorders", category: "Geriatric", serviceSlug: "geriatric-physiotherapy" },
  { name: "Osteoporosis", category: "Geriatric", serviceSlug: "geriatric-physiotherapy" },
  { name: "Post-Hospitalisation Weakness", category: "Geriatric", serviceSlug: "geriatric-physiotherapy" },
  { name: "Dementia-related Mobility Loss", category: "Geriatric", serviceSlug: "geriatric-physiotherapy" },

  // Post-Surgery
  { name: "Post Knee Replacement", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },
  { name: "Post Hip Replacement", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },
  { name: "Post ACL Reconstruction", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },
  { name: "Post Spine Surgery", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },
  { name: "Post Fracture Rehab", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },
  { name: "Post Rotator Cuff Repair", category: "Post-Surgery", serviceSlug: "post-surgery-rehab" },

  // Pediatric
  { name: "Cerebral Palsy", category: "Pediatric", serviceSlug: "neuro-rehab" },
  { name: "Developmental Delay", category: "Pediatric", serviceSlug: "neuro-rehab" },
  { name: "Torticollis", category: "Pediatric", serviceSlug: "neuro-rehab" },

  // Women's Health
  { name: "Pre & Post-Natal Care", category: "Women's Health", serviceSlug: "back-and-neck-pain" },
  { name: "Pelvic Floor Dysfunction", category: "Women's Health", serviceSlug: "back-and-neck-pain" },
  { name: "Urinary Incontinence", category: "Women's Health", serviceSlug: "back-and-neck-pain" },
];

export const conditionCategories: ConditionCategory[] = [
  "Spine",
  "Joints",
  "Sports",
  "Neuro",
  "Geriatric",
  "Post-Surgery",
  "Pediatric",
  "Women's Health",
];

// Curated list shown on home page (most-searched conditions)
export const featuredConditions: string[] = [
  "Sciatica",
  "Slipped Disc",
  "Cervical Spondylosis",
  "Frozen Shoulder",
  "Knee Osteoarthritis",
  "Tennis Elbow",
  "Plantar Fasciitis",
  "ACL Injury",
  "Stroke / CVA",
  "Parkinson's Disease",
  "Bell's Palsy",
  "Vertigo / BPPV",
  "Post Knee Replacement",
  "Post Spine Surgery",
  "Sports Injuries",
  "Falls & Balance Disorders",
  "Postural Pain",
  "Rotator Cuff Injury",
  "Hamstring Strain",
  "Ankle Sprain",
  "Spinal Cord Injury",
  "Pediatric Care",
  "Pre & Post-Natal Care",
  "Pelvic Floor Dysfunction",
];
