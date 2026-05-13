import { useState, useEffect, useCallback } from "react";
import { usePage } from "../App";

export default function Navbar() {
  const { currentPage, switchPage } = usePage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback(
    (page: Parameters<typeof switchPage>[0]) => {
      switchPage(page);
      setMobileOpen(false);
    },
    [switchPage]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20 py-3">
          {/* Logo */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <img
                src="https://cdn-ai.onspace.ai/onspace/project/uploads/6UA3dBD3YxsEfQYJGSo8Aj/mmexport1777416047301.jpg"
                alt="Ouma Ge G-mark Logo"
                className="relative h-11 w-11 sm:h-12 sm:w-12 object-cover rounded-full shadow-lg"
                style={{ background: "#fff" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                Ouma Ge
              </span>
              <span
                className="text-xs font-semibold tracking-widest"
                style={{ color: "rgba(134,239,172,0.75)" }}
              >
                欧玛 · oumage.com
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => goTo("home")}
              className="nav-link px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              About
            </button>
            <button
              onClick={() => goTo("business")}
              className="nav-link px-3 py-2 font-semibold text-sm transition-colors"
              style={{ color: "#67e8f9" }}
            >
              <i className="fas fa-briefcase mr-1 text-xs"></i>Business
            </button>
            <button
              onClick={() => goTo("scholarships")}
              className="nav-link px-3 py-2 font-semibold text-sm transition-colors"
              style={{ color: "#fde68a" }}
            >
              <i className="fas fa-graduation-cap mr-1 text-xs"></i>
              Scholarships
            </button>
            <button
              onClick={() => goTo("services")}
              className="nav-link px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Stories
            </button>
            <button
              onClick={() => goTo("gallery")}
              className="nav-link px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => goTo("apps")}
              className="nav-link px-3 py-2 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Blog
            </button>
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={() => goTo("business")}
                className="px-4 py-2 text-white rounded-full font-bold text-xs transition-all shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                }}
              >
                <i className="fas fa-briefcase mr-1"></i>Business
              </button>
              <button
                onClick={() => goTo("contact")}
                className="px-4 py-2 text-white rounded-full font-bold text-xs transition-all shadow-lg glow-green"
                style={{
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                }}
              >
                <i className="fas fa-graduation-cap mr-1"></i>Apply Now
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => goTo("contact")}
              className="px-4 py-2 text-white rounded-full text-xs font-bold"
              style={{
                background: "linear-gradient(135deg,#22c55e,#16a34a)",
              }}
            >
              <i className="fas fa-graduation-cap mr-1"></i>Apply
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-5 space-y-1">
            {[
              { label: "About", icon: "fas fa-user", color: "cyan", page: "home" as const },
              { label: "Business Corp", icon: "fas fa-briefcase", color: "cyan", page: "business" as const },
              { label: "Study in China", icon: "fas fa-graduation-cap", color: "red", page: "scholarships" as const },
              { label: "Success Stories", icon: "fas fa-trophy", color: "yellow", page: "services" as const },
              { label: "Services", icon: "fas fa-briefcase", color: "purple", page: "services" as const },
              { label: "Social Hub", icon: "fas fa-hashtag", color: "pink", page: "social" as const },
              { label: "Gallery", icon: "fas fa-images", color: "blue", page: "gallery" as const },
              { label: "Blog", icon: "fas fa-newspaper", color: "green", page: "apps" as const },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => goTo(item.page)}
                className={`flex items-center w-full py-3 px-4 rounded-xl font-medium transition-all ${
                  currentPage === item.page
                    ? "text-white bg-white/10"
                    : `text-${item.color}-300 hover:text-white hover:bg-white/5`
                }`}
              >
                <i className={`${item.icon} w-5 mr-3 text-${item.color}-400`}></i>
                {item.label}
              </button>
            ))}
            <div className="pt-3 pb-1 space-y-2">
              <button
                onClick={() => goTo("contact")}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold transition-all"
              >
                <i className="fas fa-graduation-cap mr-2"></i>Apply for Scholarship
              </button>
              <button
                onClick={() => goTo("contact")}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold transition-all"
              >
                <i className="fas fa-briefcase mr-2"></i>Business Partnership
              </button>
            </div>
            <div className="pt-3 flex items-center justify-center gap-3 border-t border-white/10">
              {[
                { icon: "fab fa-linkedin", bg: "#0077B5" },
                { icon: "fab fa-facebook-f", bg: "#1877F2" },
                { icon: "fab fa-instagram", bg: "badge-insta" },
                { icon: "fab fa-youtube", bg: "#FF0000" },
                { icon: "fab fa-whatsapp", bg: "#25D366" },
              ].map((s) => (
                <span
                  key={s.icon}
                  className={`w-10 h-10 ${s.bg === "badge-insta" ? "badge-insta" : ""} rounded-full flex items-center justify-center text-white`}
                  style={s.bg !== "badge-insta" ? { background: s.bg } : {}}
                >
                  <i className={s.icon}></i>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
