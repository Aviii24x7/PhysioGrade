import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import { Seo } from "../lib/seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — Physio Grade" path="/404" noIndex />
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container-x py-20 text-center">
          <p className="font-display text-7xl font-extrabold text-primary">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink">
            Page not found
          </h1>
          <p className="mt-3 max-w-md mx-auto text-ink-soft">
            Looks like the page you're looking for doesn't exist or has moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/" className="btn-primary">
              <HomeIcon className="h-4 w-4" aria-hidden />
              Back to home
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
