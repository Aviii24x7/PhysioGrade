import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Stethoscope } from "lucide-react";
import { site } from "../../config/site";
import { CallButton } from "../ui/CallButton";
import { cn } from "../../lib/cn";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/60"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label={`${site.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-cta group-hover:bg-primary-hover transition-colors">
            <Stethoscope className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-ink text-lg tracking-tight">
              {site.name}
            </span>
            <span className="text-[11px] font-medium text-ink-muted uppercase tracking-wider">
              Physiotherapy · Palwal
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-tint text-primary"
                    : "text-ink-soft hover:text-primary hover:bg-primary-tint/60"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton variant="compact" label={site.phoneDisplay} className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-ink hover:bg-surface-alt"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-slate-200 bg-white",
          open ? "max-h-[80vh]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  isActive ? "bg-primary-tint text-primary" : "text-ink hover:bg-surface-alt"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-200">
            <CallButton variant="primary" className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
