import { usePage } from "../App";

export default function Footer() {
  const { switchPage } = usePage();
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-30"></div>
                <img
                  src="https://cdn-ai.onspace.ai/onspace/project/uploads/6UA3dBD3YxsEfQYJGSo8Aj/mmexport1777416047301.jpg"
                  alt="Ouma Ge Logo"
                  className="relative h-14 w-14 object-cover rounded-full"
                  style={{ background: "#fff" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white leading-tight">
                  Ouma Ge
                </span>
                <span className="text-xs text-slate-400 tracking-widest">
                  欧玛 · 企业家
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Entrepreneur, CEO & Study Abroad Consultant. Empowering
              international students to build their future at China's top
              universities.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin" },
                { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", bg: "badge-fb" },
                { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta" },
                { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube" },
                { href: "https://www.tiktok.com/@oumage", icon: "fab fa-tiktok", bg: "badge-tiktok" },
                { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                  <i className={`${s.icon} text-white text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { label: "About Ouma Ge", page: "home" as const, color: "cyan" },
                { label: "Study in China", page: "scholarships" as const, color: "red" },
                { label: "Success Stories", page: "services" as const, color: "yellow" },
                { label: "Social Hub", page: "social" as const, color: "pink" },
                { label: "Photo Gallery", page: "gallery" as const, color: "cyan" },
                { label: "Apps & Software", page: "apps" as const, color: "green" },
                { label: "Blog & Insights", page: "apps" as const, color: "cyan" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => switchPage(link.page)}
                    className={`hover:text-${link.color}-400 transition-colors flex items-center gap-2`}
                  >
                    <i
                      className={`fas fa-angle-right text-xs text-${link.color}-600`}
                    ></i>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { label: "Scholarship Consulting", icon: "fas fa-graduation-cap", color: "red" },
                { label: "University Placement", icon: "fas fa-university", color: "cyan" },
                { label: "Business Consulting", icon: "fas fa-briefcase", color: "cyan" },
                { label: "Translation Services", icon: "fas fa-language", color: "purple" },
                { label: "International Trade", icon: "fas fa-globe", color: "cyan" },
                { label: "Free Consultation", icon: "fas fa-comments", color: "yellow" },
              ].map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => switchPage("contact")}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <i className={`${s.icon} text-xs text-${s.color}-500`}></i>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm mb-6">
              <li>
                <a
                  href="mailto:contact@oumage.com"
                  className="flex items-center hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-envelope text-cyan-400 text-xs"></i>
                  </div>
                  contact@oumage.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801747561098"
                  className="flex items-center hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fas fa-phone text-green-400 text-xs"></i>
                  </div>
                  +880 1747 561 098
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801747561098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-green-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fab fa-whatsapp text-green-400 text-xs"></i>
                  </div>
                  WhatsApp Direct
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-red-400 text-xs"></i>
                </div>
                Nanjing, China
              </li>
            </ul>
            <button
              onClick={() => switchPage("contact")}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-bold hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <i className="fas fa-rocket mr-2"></i>Free Consultation
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-slate-500 text-xs">
              <p>© 2026 Ouma Ge (欧玛). All rights reserved.</p>
              <span className="hidden sm:block">·</span>
              <p>Asical International BD Limited</p>
              <span className="hidden sm:block">·</span>
              <p>Nanjing, China</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-600 mr-2">Follow:</span>
              {[
                { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", hoverBg: "#0077B5" },
                { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", hoverBg: "#1877F2" },
                { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", hoverClass: "hover:text-pink-400" },
                { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", hoverBg: "#dc2626" },
                { href: "https://www.tiktok.com/@oumage", icon: "fab fa-tiktok", hoverBg: "#334155" },
                { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", hoverBg: "#25D366" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${s.hoverClass || ""} hover:text-white transition-all`}
                  style={s.hoverBg ? {} : {}}
                  onMouseEnter={(e) => {
                    if (s.hoverBg) (e.target as HTMLElement).style.background = s.hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    if (s.hoverBg) (e.target as HTMLElement).style.background = "#1e293b";
                  }}
                >
                  <i className={`${s.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
