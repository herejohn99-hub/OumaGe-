import { useState, useEffect, useCallback, createContext, useContext } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ReadingBar from "./components/ReadingBar";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import BusinessPage from "./pages/BusinessPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import SocialPage from "./pages/SocialPage";
import AppsPage from "./pages/AppsPage";
import ContactPage from "./pages/ContactPage";

export type PageName = "home" | "scholarships" | "business" | "services" | "gallery" | "social" | "apps" | "contact";

interface PageContextType {
  currentPage: PageName;
  switchPage: (page: PageName) => void;
}

export const PageContext = createContext<PageContextType>({
  currentPage: "home",
  switchPage: () => {},
});

export function usePage() {
  return useContext(PageContext);
}

const tabs: { key: PageName; label: string; icon: string }[] = [
  { key: "home", label: "Home", icon: "fas fa-home" },
  { key: "scholarships", label: "Scholarships", icon: "fas fa-graduation-cap" },
  { key: "business", label: "Business", icon: "fas fa-briefcase" },
  { key: "services", label: "Services", icon: "fas fa-layer-group" },
  { key: "gallery", label: "Gallery", icon: "fas fa-images" },
  { key: "social", label: "Social", icon: "fas fa-hashtag" },
  { key: "apps", label: "Apps", icon: "fas fa-mobile-alt" },
  { key: "contact", label: "Contact", icon: "fas fa-envelope" },
];

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("home");

  const switchPage = useCallback((page: PageName) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Trigger fade-up animations on the new page
    setTimeout(() => {
      document.querySelectorAll(".fade-up").forEach((el) => {
        el.classList.remove("visible");
      });
      setTimeout(() => {
        document.querySelectorAll(".fade-up").forEach((el) => {
          el.classList.add("visible");
        });
      }, 60);
    }, 10);
  }, []);

  // Intersection observer for fade-up animations
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const fadeEls = document.querySelectorAll(".fade-up");
    fadeEls.forEach((el) => fadeObserver.observe(el));
    return () => fadeObserver.disconnect();
  }, [currentPage]);

  return (
    <PageContext.Provider value={{ currentPage, switchPage }}>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <ReadingBar />
        <Navbar />

        {/* Tab Navigation */}
        <div
          className="sticky z-40"
          style={{
            background: "rgba(5,13,26,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(34,197,94,0.15)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-hide">
            <div className="flex items-center min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`tab-btn ${currentPage === tab.key ? "active" : ""}`}
                  onClick={() => switchPage(tab.key)}
                >
                  <i className={`${tab.icon} mr-1`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main>
          <div
            className={`page-group ${currentPage === "home" ? "active" : ""}`}
          >
            <HomePage />
          </div>
          <div
            className={`page-group ${currentPage === "scholarships" ? "active" : ""}`}
          >
            <ScholarshipsPage />
          </div>
          <div
            className={`page-group ${currentPage === "business" ? "active" : ""}`}
          >
            <BusinessPage />
          </div>
          <div
            className={`page-group ${currentPage === "services" ? "active" : ""}`}
          >
            <ServicesPage />
          </div>
          <div
            className={`page-group ${currentPage === "gallery" ? "active" : ""}`}
          >
            <GalleryPage />
          </div>
          <div
            className={`page-group ${currentPage === "social" ? "active" : ""}`}
          >
            <SocialPage />
          </div>
          <div
            className={`page-group ${currentPage === "apps" ? "active" : ""}`}
          >
            <AppsPage />
          </div>
          <div
            className={`page-group ${currentPage === "contact" ? "active" : ""}`}
          >
            <ContactPage />
          </div>
        </main>

        {/* Pre-Footer CTA */}
        <PreFooterCTA />

        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </div>
    </PageContext.Provider>
  );
}

function PreFooterCTA() {
  const { switchPage } = usePage();
  return (
    <section
      className="py-14 sm:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1a0a0a 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, #ef4444 0%, transparent 40%), radial-gradient(circle at 80% 50%, #22d3ee 0%, transparent 40%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Free Consultation — No Obligation
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            One Team, Two Powerful Services
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Whether you're a student chasing a scholarship or a company entering
            China — we have the expertise to get you there.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Study in China
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Full scholarships · CSC application · 100+ students placed
            </p>
            <button
              onClick={() => switchPage("contact")}
              className="inline-flex items-center justify-center w-full px-7 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-base hover:from-red-400 hover:to-orange-400 transition-all shadow-xl"
            >
              <i className="fas fa-graduation-cap mr-2"></i>Apply for Scholarship
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-briefcase text-white text-2xl"></i>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Business Corporation
            </h3>
            <p className="text-white/70 text-sm mb-6">
              China market entry · B2B advisory · Trade facilitation · Corporate
              interpretation
            </p>
            <button
              onClick={() => switchPage("contact")}
              className="inline-flex items-center justify-center w-full px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl"
            >
              <i className="fas fa-handshake mr-2"></i>Start Business Partnership
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/8801747561098"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <i className="fab fa-whatsapp text-green-400"></i>Or reach us
            directly on WhatsApp · +880 1747 561 098
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
