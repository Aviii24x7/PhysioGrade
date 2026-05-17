import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/layout/FloatingActions";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const ServicesIndex = lazy(() => import("./routes/ServicesIndex"));
const ServiceDetail = lazy(() => import("./routes/ServiceDetail"));
const Conditions = lazy(() => import("./routes/Conditions"));
const Videos = lazy(() => import("./routes/Videos"));
const Gallery = lazy(() => import("./routes/Gallery"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <ScrollToTop />
      Call @ 7206168859 <br /><hr />
      Mail @ chauhanavi737@gmail.com
      {/* <Header /> */}
      <main id="main" className="flex-1">
        {/* <Suspense fallback={<PageLoader />}> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* </Suspense> */}
      </main>
      {/* <Footer />
      <FloatingActions /> */}
    </div >
  );
}
