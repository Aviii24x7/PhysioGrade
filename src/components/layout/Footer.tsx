import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Stethoscope, Instagram, Facebook, Youtube } from "lucide-react";
import { site } from "../../config/site";
import { services } from "../../config/services";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Stethoscope className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display font-extrabold text-lg">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {site.shortPitch}
            </p>
            {/* <div className="mt-5 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={site.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Youtube className="h-4 w-4" aria-hidden />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-white font-semibold hover:text-primary transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-white">About Us</Link></li>
              <li><Link to="/conditions" className="text-white/70 hover:text-white">Conditions Treated</Link></li>
              <li><Link to="/gallery" className="text-white/70 hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white">Book Appointment</Link></li>
              <li>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  {site.address.line1}<br />
                  {site.address.city}, {site.address.state} {site.address.pin}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  Mon–Sat: {site.hours.mondayToSaturday}<br />
                  Sun: {site.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Built with care for patients in Palwal & nearby.</p>
        </div>
      </div>
    </footer>
  );
}
