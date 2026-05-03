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
import { Seo } from "../lib/seo";
import { localBusinessSchema, faqSchema } from "../lib/schema";
import { homeFaqs } from "../config/faqs";

export default function Home() {
  return (
    <>
      <Seo
        title="Physio Grade — Expert Physiotherapy in Palwal"
        description="Physio Grade is Palwal's trusted physiotherapy clinic for back pain, sports injury, frozen shoulder, post-surgery rehab, neuro care & home visits. Book same-day."
        path="/"
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
      <BookingBanner />
    </>
  );
}
