import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type Props = {
  children: ReactNode;
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  bg?: "white" | "alt" | "tint" | "primary";
  className?: string;
};

const bgMap = {
  white: "bg-white",
  alt: "bg-surface-alt",
  tint: "bg-surface-tint",
  primary: "bg-primary text-white",
} as const;

export function Section({
  children,
  id,
  eyebrow,
  title,
  subtitle,
  centered,
  bg = "white",
  className,
}: Props) {
  return (
    <section id={id} className={cn("py-16 md:py-24", bgMap[bg], className)}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-10 md:mb-14", centered && "text-center mx-auto max-w-3xl")}>
            {eyebrow && (
              <span
                className={cn(
                  "eyebrow",
                  bg === "primary" && "text-white/80"
                )}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={cn(
                  "mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight",
                  bg === "primary" ? "text-white" : "text-ink"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-base md:text-lg leading-relaxed",
                  bg === "primary" ? "text-white/85" : "text-ink-soft"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
