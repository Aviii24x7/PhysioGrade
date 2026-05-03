import { certificationForms } from "../../config/team";

export function CertBadge({ abbr }: { abbr: string }) {
  const full = certificationForms[abbr];
  return (
    <div className="group/cert relative inline-block">
      <span className="block rounded-md border border-primary/20 bg-primary-tint px-2 py-0.5 text-xs font-bold text-primary-dark cursor-default select-none">
        {abbr}
      </span>
      {full && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2 w-max max-w-[180px] text-center rounded-xl bg-ink px-3 py-2 text-xs font-medium text-white shadow-lg
            opacity-0 scale-95 transition-all duration-150
            group-hover/cert:opacity-100 group-hover/cert:scale-100"
        >
          {full}
          {/* Arrow */}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink" />
        </div>
      )}
    </div>
  );
}
