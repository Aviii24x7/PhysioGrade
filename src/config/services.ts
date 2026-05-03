export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  longSummary: string;
  icon: string; // lucide-react icon name
  conditions: string[];
  techniques: string[];
  helps: string[];
  sessionFlow: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "back-and-neck-pain",
    shortTitle: "Back & Neck Pain",
    title: "Back & Neck Pain Physiotherapy",
    summary:
      "Targeted relief for sciatica, slipped disc, cervical spondylosis, and chronic lower back pain.",
    longSummary:
      "Most adults will experience back or neck pain at some point — but it doesn't have to become chronic. At Physio Grade, we identify the root cause (muscular, postural, disc-related, or nerve compression) and build a recovery plan that combines manual therapy, modern modalities, and corrective exercise to restore pain-free movement.",
    icon: "Activity",
    conditions: [
      "Sciatica",
      "Slipped Disc / Herniated Disc",
      "Cervical Spondylosis",
      "Lumbar Spondylosis",
      "Spinal Stenosis",
      "SI Joint Dysfunction",
      "Postural Pain",
      "Whiplash",
    ],
    techniques: [
      "Manual therapy & spinal mobilisation",
      "Cervical & lumbar traction",
      "IFT, TENS, ultrasound therapy",
      "Dry needling & myofascial release",
      "Core stabilisation & McKenzie exercises",
      "Posture correction & ergonomic advice",
    ],
    helps: [
      "Office workers with chronic back & neck strain",
      "Patients diagnosed with disc bulge or sciatica",
      "Anyone with stiffness, tingling, or radiating pain",
      "Post-spinal-surgery rehab",
    ],
    sessionFlow: [
      "Detailed assessment — history, posture, range of motion, and neurological screening to identify the true source of your pain.",
      "Hands-on treatment combined with electrotherapy and traction (where indicated) for fast symptom relief.",
      "Personalised home exercise program and posture cues so you stay pain-free between sessions.",
    ],
    faqs: [
      {
        q: "How many sessions will I need for sciatica or a slipped disc?",
        a: "Most patients feel meaningful relief in 4–6 sessions, with full recovery typically over 6–10 weeks depending on severity. We re-assess every 2 weeks to keep the plan honest.",
      },
      {
        q: "Can physiotherapy help me avoid spine surgery?",
        a: "In a large majority of disc and nerve-compression cases, structured physiotherapy resolves symptoms without surgery. We are transparent — if your scan and symptoms suggest surgery is the better option, we'll tell you.",
      },
      {
        q: "Should I rest or stay active with back pain?",
        a: "Strict bed rest beyond 1–2 days actually slows recovery. We guide you on safe, progressive movement that speeds healing.",
      },
    ],
  },
  {
    slug: "knee-and-joint-pain",
    shortTitle: "Knee & Joint Pain",
    title: "Knee Pain & Joint Care",
    summary:
      "Osteoarthritis, post-knee-replacement rehab, ACL/meniscus injuries, and everyday joint stiffness.",
    longSummary:
      "Knee, hip, and ankle pain limit the simplest things — climbing stairs, sitting cross-legged, walking to the market. We combine clinically proven exercise therapy with modern modalities to reduce pain, restore strength, and protect your joints for the long run.",
    icon: "Bone",
    conditions: [
      "Knee Osteoarthritis",
      "Post Knee Replacement (TKR)",
      "ACL / PCL Injury",
      "Meniscus Tear",
      "Patellofemoral Pain (Runner's Knee)",
      "Hip Osteoarthritis",
      "Ankle Sprain",
      "Plantar Fasciitis",
    ],
    techniques: [
      "Progressive loading & strength training",
      "Manual therapy for joint mobility",
      "Shockwave & laser therapy",
      "Kinesio taping",
      "Gait & balance retraining",
      "Cryotherapy & contrast therapy",
    ],
    helps: [
      "Adults with arthritic knee or hip pain",
      "Patients recovering from knee or hip replacement",
      "Athletes with ligament or meniscus injuries",
      "Anyone with chronic ankle instability",
    ],
    sessionFlow: [
      "Joint assessment — strength, range of motion, swelling, and gait analysis.",
      "Pain reduction via modalities, followed by progressive loading exercises tailored to your stage of recovery.",
      "Home program covering strength, balance, and joint-protection strategies.",
    ],
    faqs: [
      {
        q: "Can physio really help arthritis, or do I need knee replacement?",
        a: "Strong evidence shows targeted exercise therapy is as effective as surgery for many cases of mild-to-moderate knee osteoarthritis. We help you decide based on your scan, pain levels, and lifestyle goals.",
      },
      {
        q: "When should I start physiotherapy after knee replacement?",
        a: "Ideally within the first week. Early, guided rehab is the single biggest factor in regaining bend, strength, and walking comfortably.",
      },
      {
        q: "Do you treat ACL injuries non-surgically?",
        a: "Yes. Many partial ACL tears and even some complete tears (particularly in non-pivoting sports) recover with structured rehab. We work closely with orthopaedic surgeons when surgery is the right call.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    shortTitle: "Frozen Shoulder",
    title: "Frozen Shoulder & Shoulder Pain",
    summary:
      "Painful, stiff, or weak shoulders — including frozen shoulder, rotator cuff issues, and impingement.",
    longSummary:
      "Shoulder problems can make sleeping, dressing, and reaching overhead miserable. Frozen shoulder, rotator cuff tears, and impingement each need very different rehab approaches — getting that diagnosis right is half the battle.",
    icon: "Hand",
    conditions: [
      "Frozen Shoulder (Adhesive Capsulitis)",
      "Rotator Cuff Tendinopathy",
      "Rotator Cuff Tear",
      "Shoulder Impingement",
      "Shoulder Bursitis",
      "Shoulder Dislocation Recovery",
      "Calcific Tendinitis",
      "AC Joint Sprain",
    ],
    techniques: [
      "Capsular stretching & joint mobilisation",
      "Scapular stabilisation training",
      "Rotator cuff strengthening",
      "Ultrasound & shockwave therapy",
      "Dry needling for trigger points",
      "Heat therapy & manual therapy",
    ],
    helps: [
      "Diabetic patients (high frozen shoulder risk)",
      "People over 40 with progressive shoulder stiffness",
      "Athletes with overhead-sport injuries",
      "Post-operative shoulder rehab",
    ],
    sessionFlow: [
      "Assessment of shoulder range, strength, and which structures are involved.",
      "Hands-on mobilisation + modalities to reduce pain, paired with stage-appropriate exercises.",
      "Home stretches and strengthening to keep gains between sessions.",
    ],
    faqs: [
      {
        q: "How long does frozen shoulder take to recover?",
        a: "With consistent physiotherapy, most patients regain functional movement in 8–12 weeks. Without treatment, frozen shoulder can drag on for 18–24 months.",
      },
      {
        q: "Are cortisone injections needed?",
        a: "Sometimes — particularly in the painful 'freezing' phase. We coordinate with your orthopaedist when injections will speed your rehab.",
      },
      {
        q: "Will my shoulder mobility ever fully return?",
        a: "Yes, in the vast majority of frozen shoulder cases — provided you commit to your rehab consistently.",
      },
    ],
  },
  {
    slug: "sports-injury-rehab",
    shortTitle: "Sports Injury",
    title: "Sports Injury Rehabilitation",
    summary:
      "Return to sport stronger, with rehab designed around your sport and performance goals.",
    longSummary:
      "Whether you're a weekend cricketer, marathoner, gym-goer, or competitive athlete, we get you back to the activities you love — and reduce the chance of re-injury with sport-specific conditioning.",
    icon: "Dumbbell",
    conditions: [
      "Hamstring Strain",
      "Calf Strain",
      "Tennis & Golfer's Elbow",
      "Runner's Knee",
      "Shin Splints",
      "Stress Fractures",
      "Tendinopathies",
      "Ankle Sprains",
    ],
    techniques: [
      "Sports-specific strength & conditioning",
      "Soft tissue release & sports massage",
      "Kinesio taping & strapping",
      "Plyometric & agility training",
      "Shockwave therapy for tendon issues",
      "Return-to-play testing",
    ],
    helps: [
      "Recreational and competitive athletes",
      "Gym-goers with overuse injuries",
      "Runners with chronic niggles",
      "Anyone returning from a layoff",
    ],
    sessionFlow: [
      "Injury assessment + movement screen for compensations and weak links.",
      "Acute care for pain and swelling, followed by progressive loading specific to your sport.",
      "Performance-based return-to-play criteria — we discharge you when objective tests say you're ready.",
    ],
    faqs: [
      {
        q: "How soon can I return to sport after an injury?",
        a: "It depends on the injury — a mild ankle sprain may be 1–2 weeks; a hamstring strain 4–8 weeks; an ACL reconstruction 6–9 months. We use objective tests, not just calendar weeks.",
      },
      {
        q: "Do you offer pre-season conditioning?",
        a: "Yes. Pre-season screening + targeted strengthening is one of the highest-ROI things any athlete can do.",
      },
      {
        q: "Can you coordinate with my coach or trainer?",
        a: "Absolutely — and we encourage it. Better continuity = faster recovery + safer return to sport.",
      },
    ],
  },
  {
    slug: "post-surgery-rehab",
    shortTitle: "Post-Surgery Rehab",
    title: "Post-Surgery & Post-Fracture Rehabilitation",
    summary:
      "Structured recovery after orthopaedic surgery, fracture, or prolonged immobilisation.",
    longSummary:
      "What you do in the first 6 weeks after surgery determines your function for the next 60 years. We deliver evidence-based rehab protocols that align with your surgeon's plan — speeding healing, restoring strength, and helping you return to a full life.",
    icon: "HeartPulse",
    conditions: [
      "Post Knee Replacement (TKR)",
      "Post Hip Replacement (THR)",
      "Post ACL Reconstruction",
      "Post Spine Surgery (Discectomy / Fusion)",
      "Post Rotator Cuff Repair",
      "Post Fracture Fixation",
      "Post Tendon Repair",
      "Long-term Bedrest Recovery",
    ],
    techniques: [
      "Phased post-op rehab protocols",
      "Scar mobilisation",
      "Range-of-motion & strength progression",
      "Gait & weight-bearing training",
      "Hydrotherapy guidance (where applicable)",
      "Progressive loading & functional return",
    ],
    helps: [
      "Patients in their first 12 weeks after surgery",
      "Anyone with stiffness, weakness, or limp post-fracture",
      "Patients restoring function after long hospital stays",
    ],
    sessionFlow: [
      "Review of your operative notes and surgeon's restrictions, with a baseline assessment.",
      "Phase-appropriate rehab — protect → restore → strengthen → return — adjusted weekly.",
      "Functional milestones (stair climbing, full squat, jogging) tracked transparently.",
    ],
    faqs: [
      {
        q: "When should I start physiotherapy after surgery?",
        a: "For most orthopaedic surgeries, day 1–7. Early, guided movement prevents stiffness and speeds bone/tissue healing.",
      },
      {
        q: "Do you coordinate with my surgeon?",
        a: "Yes — we follow your surgeon's protocol and share progress notes when requested.",
      },
      {
        q: "Can you provide home-based post-surgery rehab?",
        a: "Yes. For early post-op recovery, home visits are often the safest and most convenient option.",
      },
    ],
  },
  {
    slug: "neuro-rehab",
    shortTitle: "Stroke & Neuro Rehab",
    title: "Stroke & Neurological Rehabilitation",
    summary:
      "Specialist rehab for stroke, Parkinson's, Bell's palsy, and other neurological conditions.",
    longSummary:
      "Neurological rehabilitation is about retraining the brain and body to work together. Our therapists use evidence-based neuro-rehab techniques (Bobath, PNF, motor relearning) to help patients regain independence in daily life.",
    icon: "Brain",
    conditions: [
      "Stroke / CVA",
      "Parkinson's Disease",
      "Bell's Palsy",
      "Spinal Cord Injury",
      "Multiple Sclerosis",
      "Cerebral Palsy (Pediatric)",
      "Peripheral Nerve Injuries",
      "Vertigo / BPPV",
    ],
    techniques: [
      "Bobath / NDT approach",
      "Motor relearning programmes",
      "PNF techniques",
      "Gait & balance retraining",
      "Functional electrical stimulation",
      "Vestibular rehabilitation",
    ],
    helps: [
      "Stroke survivors at any stage",
      "Patients with movement disorders",
      "Bell's palsy patients regaining facial control",
      "Family caregivers learning safe transfer techniques",
    ],
    sessionFlow: [
      "Neurological assessment — strength, tone, balance, coordination, and functional capacity.",
      "Task-specific training combined with hands-on facilitation, focusing on activities important to you.",
      "Caregiver coaching so progress continues every day at home.",
    ],
    faqs: [
      {
        q: "How early can stroke rehab begin?",
        a: "Within 24–48 hours of being medically stable. The first 3 months are the most critical window for recovery, and consistent rehab during this period dramatically improves outcomes.",
      },
      {
        q: "Do you offer neuro rehab at home?",
        a: "Yes — and for many neuro patients, home rehab is more practical and motivating. We bring assessment tools and exercise equipment to you.",
      },
      {
        q: "Can Parkinson's symptoms improve with physiotherapy?",
        a: "Absolutely. Specific approaches like LSVT BIG and amplitude-based training significantly improve mobility, balance, and quality of life.",
      },
    ],
  },
  {
    slug: "geriatric-physiotherapy",
    shortTitle: "Geriatric Physio",
    title: "Geriatric (Elderly) Physiotherapy",
    summary:
      "Mobility, balance, and pain management designed for older adults — at our clinic or your home.",
    longSummary:
      "Healthy ageing isn't an accident. We help elderly patients stay mobile, prevent falls, manage chronic pain, and recover from age-related conditions — building strength and confidence one session at a time.",
    icon: "Users",
    conditions: [
      "Falls & Balance Disorders",
      "Arthritis (multiple joints)",
      "Osteoporosis",
      "Post-Hospitalisation Weakness",
      "Dementia-related Mobility Loss",
      "Chronic Lower Back Pain",
      "Cardiac Rehabilitation",
      "Pulmonary Rehabilitation",
    ],
    techniques: [
      "Strength & balance training",
      "Fall prevention programmes",
      "Manual therapy & joint mobilisation",
      "Gait aid prescription & training",
      "Functional capacity training",
      "Caregiver education",
    ],
    helps: [
      "Elderly patients living alone or with family",
      "Those recovering from a hospital stay",
      "Anyone who has fallen or fears falling",
      "Patients with multiple chronic conditions",
    ],
    sessionFlow: [
      "Comprehensive assessment — strength, balance, mobility, fall risk, and home safety review.",
      "Gentle, progressive exercise tailored to your energy levels and capacity.",
      "Caregiver training so daily routines reinforce your progress.",
    ],
    faqs: [
      {
        q: "Is it ever too late to start physiotherapy?",
        a: "Never. Strength, balance, and mobility improvements are achievable at any age — including in the 80s and 90s.",
      },
      {
        q: "Can sessions be done at home for elderly patients?",
        a: "Yes — and we recommend it for patients who find clinic visits tiring or unsafe. Home physiotherapy is often more effective for this group.",
      },
      {
        q: "How can I prevent my parent from falling?",
        a: "A combination of strength training, balance exercises, home safety changes, and footwear advice cuts fall risk dramatically. We assess all of these together.",
      },
    ],
  },
  {
    slug: "home-visit-physiotherapy",
    shortTitle: "Home Visits",
    title: "Home-Visit Physiotherapy in Palwal",
    summary:
      "Expert physiotherapy delivered to your home — for post-surgery, neuro, geriatric, or bedridden patients.",
    longSummary:
      "When travelling to a clinic isn't practical, we come to you. Home physiotherapy in Palwal is delivered by the same licensed therapists, with portable equipment and the same standard of care you'd get at the clinic.",
    icon: "Home",
    conditions: [
      "Post-surgery early rehab",
      "Bedridden patient care",
      "Stroke & neuro rehab",
      "Geriatric mobility care",
      "Chest physiotherapy (post-COVID, pneumonia, ICU recovery)",
      "Fracture immobilisation phase",
      "Pediatric care",
      "Palliative comfort care",
    ],
    techniques: [
      "Portable IFT, TENS, and ultrasound units",
      "Manual therapy & exercise prescription",
      "Bed mobility & transfer training",
      "Chest physiotherapy & breathing exercises",
      "Caregiver training",
      "Home safety & ergonomic assessment",
    ],
    helps: [
      "Patients unable to travel to the clinic",
      "Early post-op cases",
      "Elderly patients living alone",
      "Anyone preferring private home sessions",
    ],
    sessionFlow: [
      "Phone consultation to confirm scope, schedule, and what to prepare at home.",
      "Therapist visits with portable equipment, conducts assessment, and starts treatment in the same session.",
      "Caregivers are coached on what to do between visits to maximise progress.",
    ],
    faqs: [
      {
        q: "Which areas of Palwal do you cover for home visits?",
        a: "We cover all of Palwal city and surrounding areas including Ballabgarh, Faridabad, Hodal, Hassanpur, and Hathin. Call us with your address to confirm.",
      },
      {
        q: "Is home physiotherapy more expensive than clinic visits?",
        a: "There's a small travel fee included, but for many patients it actually saves money (no transport, no caregiver day off). We'll quote transparently before the first visit.",
      },
      {
        q: "What equipment do you bring?",
        a: "Portable electrotherapy, exercise resistance bands, balance tools, and assessment equipment — enough to deliver clinic-quality care at home.",
      },
    ],
  },
];

export const additionalServices: { title: string; description: string }[] = [
  { title: "Pediatric Physiotherapy", description: "Cerebral palsy, developmental delay, torticollis, and clubfoot management." },
  { title: "Women's Health Physiotherapy", description: "Pre & post-natal care, pelvic floor rehab, urinary incontinence." },
  { title: "Posture & Ergonomics", description: "Workplace posture analysis and corrective programmes for desk workers." },
  { title: "Manual Therapy", description: "Hands-on mobilisation, manipulation, and soft-tissue techniques." },
  { title: "Dry Needling", description: "Targeted relief for muscle trigger points and chronic tightness." },
  { title: "Cupping Therapy", description: "Traditional cupping for pain relief and improved tissue mobility." },
  { title: "Electrotherapy (TENS / IFT / US)", description: "Modern modalities for pain modulation and tissue healing." },
  { title: "Cervical & Lumbar Traction", description: "Mechanical traction for disc-related neck and back pain." },
];

export const findService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
