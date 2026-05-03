import { Hero } from "../components/sections/Hero";
import { ValueProps } from "../components/sections/ValueProps";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { ConditionsChips } from "../components/sections/ConditionsChips";
import { HowItWorks } from "../components/sections/HowItWorks";
// import { VideoGallery } from "../components/sections/VideoGallery"; // Uncomment when YouTube videos are ready
import { OurWorkGallery } from "../components/sections/OurWorkGallery";
import { MeetOurTeam } from "../components/sections/MeetOurTeam";
import { Testimonials } from "../components/sections/Testimonials";
import { LocationBlock } from "../components/sections/LocationBlock";
import { FAQSection } from "../components/sections/FAQSection";
import { BookingBanner } from "../components/sections/BookingBanner";
import { ServiceAreas } from "../components/sections/ServiceAreas";
import { Seo } from "../lib/seo";
import { localBusinessSchema, faqSchema } from "../lib/schema";
import { homeFaqs } from "../config/faqs";

export default function Home() {
  return (
    <>
      <Seo
        title="Physio Grade — Best Physiotherapy Centre in Palwal & Ballabgarh | Dr. Mukesh Kumar"
        description="Physio Grade Physiotherapy Centre in Palwal, Haryana — led by Dr. Mukesh Kumar (MPT, Sports Medicine) & Dr. Renu. Treating back pain, sciatica, knee pain, frozen shoulder, sports injuries & neuro conditions. Home visits in Palwal & Ballabgarh. Same-day appointments."
        path="/"
        keywords="Physio Grade, physiograde, physiotherapy Palwal, physiotherapist Palwal, physiotherapy centre Palwal, best physiotherapist Palwal, physiotherapy Ballabgarh, Dr Mukesh Kumar physiotherapist Palwal, back pain treatment Palwal, sciatica treatment Palwal, knee pain physiotherapy, frozen shoulder treatment, sports injury rehab Palwal, home visit physiotherapy Palwal, physio grade physiotherapy centre"
        jsonLd={[localBusinessSchema(), faqSchema(homeFaqs)]}
      />
      <Hero />
      <ValueProps />
      <ServicesGrid />
      <ConditionsChips />
      <HowItWorks />
      <OurWorkGallery />
      <MeetOurTeam />
      <Testimonials />
      <LocationBlock />
      <FAQSection />
      <ServiceAreas />
      <BookingBanner />
    </>
  );
}
