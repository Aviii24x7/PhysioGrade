import { Phone } from "lucide-react";
import { site } from "../../config/site";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost" | "float" | "compact";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  compact:
    "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary-tint min-h-[36px]",
  float:
    "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-cta hover:bg-primary-hover transition-colors",
};

type Props = {
  variant?: Variant;
  label?: string;
  className?: string;
};

export function CallButton({ variant = "primary", label, className }: Props) {
  const isFloat = variant === "float";
  return (
    <a
      href={`tel:${site.phone}`}
      className={cn(variants[variant], className)}
      aria-label={isFloat ? `Call ${site.name}` : undefined}
    >
      <Phone className={isFloat ? "h-6 w-6" : "h-4 w-4"} aria-hidden />
      {!isFloat && (label ?? `Call ${site.phoneDisplay}`)}
    </a>
  );
}
