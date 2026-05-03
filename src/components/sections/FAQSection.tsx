import { Section } from "../ui/Section";
import { Accordion } from "../ui/Accordion";
import { homeFaqs } from "../../config/faqs";
import type { FAQ } from "../../config/faqs";

export function FAQSection({ items, title, eyebrow }: { items?: FAQ[]; title?: string; eyebrow?: string }) {
  const faqs = items ?? homeFaqs;
  return (
    <Section
      eyebrow={eyebrow ?? "Got Questions?"}
      title={title ?? "Frequently asked questions"}
      centered
    >
      <div className="mx-auto max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
