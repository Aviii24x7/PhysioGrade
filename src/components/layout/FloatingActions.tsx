import { CallButton } from "../ui/CallButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function FloatingActions() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 animate-fade-up"
      style={{ animationDelay: "0.8s" }}
    >
      <WhatsAppButton variant="float" />
      <CallButton variant="float" />
    </div>
  );
}
