import { usePage } from "../App";

export default function HomePage() {
  const { switchPage } = usePage();
  return (
    <>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        id="hero"
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "62vh" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn-ai.onspace.ai/onspace/project/uploads/fhsxWmGnpYgqQReYv67FpW/IMG_5845.jpeg"
            alt="Ouma Ge at Kunming Innovation Contest"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
        <div className="hero-overlay absolute inset-0"></div>
        <div
          className="absolute top-20 right-16 w-80 h-80 rounded-full pointer-events-none blur-3xl"
          style={{ background: "rgba(34,197,94,0.09)" }}
        ></div>
        <div
          className="absolute bottom-32 left-8 w-56 h-56 rounded-full pointer-events-none blur-3xl"
          style={{ background: "rgba(14,165,233,0.09)" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{
            background: "linear-gradient(to top,#050d1a,transparent)",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
          <div className="max-w-2xl">
            <div className="fade-up mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border backdrop-blur-md"
                style={{
                  background: "rgba(34,197,94,0.13)",
                  borderColor: "rgba(34,197,94,0.32)",
                  color: "#86efac",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#22c55e" }}
                ></span>
                Available for Free Consultation
              </span>
            </div>
            <div className="fade-up mb-4">
              <h1
                className="font-display font-extrabold text-white leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)" }}
              >
                Ouma Ge
                <span
                  className="block font-light tracking-[0.15em] mt-1.5"
                  style={{
                    fontSize: "clamp(0.9rem,1.8vw,1.35rem)",
                    color: "rgba(134,239,172,0.78)",
                  }}
                >
                  欧玛 &nbsp;·&nbsp; Entrepreneur &amp; Global Consultant
                </span>
              </h1>
            </div>
            <div className="fade-up mb-6">
              <p
                className="font-display font-semibold text-gradient leading-tight"
                style={{ fontSize: "clamp(1.1rem,2.4vw,1.65rem)" }}
              >
                Bridging Education &amp; Business Across Borders
              </p>
            </div>
            <div className="fade-up flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => switchPage("scholarships")}
                className="inline-flex items-center justify-center px-7 py-3.5 text-white rounded-full font-bold text-base transition-all shadow-xl glow-green"
                style={{
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                }}
              >
                <i className="fas fa-graduation-cap mr-2"></i>Full Scholarships
              </button>
              <button
                onClick={() => switchPage("business")}
                className="inline-flex items-center justify-center px-7 py-3.5 text-white rounded-full font-bold text-base transition-all shadow-xl"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                }}
              >
                <i className="fas fa-briefcase mr-2"></i>Business Services
              </button>
              <button
                onClick={() => switchPage("contact")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-base transition-all backdrop-blur-md border"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.22)",
                  color: "#fff",
                }}
              >
                <i className="fas fa-comments mr-2"></i>Free Consult
              </button>
            </div>
            <div className="fade-up flex flex-wrap gap-5 sm:gap-8">
              <div className="text-center">
                <div
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "2rem" }}
                >
                  100<span style={{ color: "#22c55e" }}>+</span>
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(148,163,184,0.85)" }}
                >
                  Students Placed
                </div>
              </div>
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "rgba(255,255,255,0.15)" }}
              ></div>
              <div className="text-center">
                <div
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "2rem" }}
                >
                  95<span style={{ color: "#22c55e" }}>%</span>
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(148,163,184,0.85)" }}
                >
                  Success Rate
                </div>
              </div>
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "rgba(255,255,255,0.15)" }}
              ></div>
              <div className="text-center">
                <div
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "2rem" }}
                >
                  50<span style={{ color: "#0ea5e9" }}>+</span>
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(148,163,184,0.85)" }}
                >
                  Universities
                </div>
              </div>
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "rgba(255,255,255,0.15)" }}
              ></div>
              <div className="text-center">
                <div
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "2rem" }}
                >
                  5<span style={{ color: "#f59e0b" }}>+</span>
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(148,163,184,0.85)" }}
                >
                  Yrs Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 hidden lg:flex items-center gap-6">
            {[
              { icon: "fas fa-shield-alt", color: "text-green-400", text: "Verified Consultant" },
              { icon: "fas fa-university", color: "text-yellow-400", text: "Nanjing University Graduate" },
              { icon: "fas fa-globe", color: "text-cyan-400", text: "20+ Countries Served" },
              { icon: "fab fa-whatsapp", color: "text-green-400", text: "24/7 WhatsApp Support" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/15"
              >
                <i className={`${b.icon} ${b.color} text-sm`}></i>
                <span className="text-white text-xs font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a href="#trust-bar" style={{ color: "rgba(255,255,255,0.38)" }} className="hover:opacity-70 transition-opacity">
            <i className="fas fa-chevron-down text-lg"></i>
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* DUAL SERVICE ENTRY */}
      <section className="py-10 border-b" style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => switchPage("scholarships")}
              className="group relative overflow-hidden rounded-3xl p-8 flex items-center gap-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
              style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <i className="fas fa-graduation-cap text-white text-4xl"></i>
              </div>
              <div className="relative z-10">
                <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                  Education Consulting
                </div>
                <h3 className="font-display font-extrabold text-white text-2xl mb-1">
                  Study in China
                </h3>
                <p className="text-white/85 text-sm">
                  Full scholarships · 100+ students placed · 95% success
                </p>
                <span className="inline-flex items-center mt-3 text-white font-bold text-sm gap-2">
                  Get Free Consultation{" "}
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
            </button>
            <button
              onClick={() => switchPage("business")}
              className="group relative overflow-hidden rounded-3xl p-8 flex items-center gap-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
              style={{ background: "linear-gradient(135deg,#050d1a,#0d2040)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(14,165,233,0.18), transparent 60%)",
                }}
              ></div>
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                <i className="fas fa-briefcase text-cyan-400 text-4xl"></i>
              </div>
              <div className="relative z-10">
                <div className="text-cyan-400/90 text-xs font-bold uppercase tracking-widest mb-1">
                  Business Corporation
                </div>
                <h3 className="font-display font-extrabold text-white text-2xl mb-1">
                  Partner With Us
                </h3>
                <p className="text-slate-300 text-sm">
                  B2B advisory · Trade facilitation · China market entry
                </p>
                <span className="inline-flex items-center mt-3 text-cyan-400 font-bold text-sm gap-2">
                  Explore Business Services{" "}
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════ PERSONAL STORY ═══════════════ */}
      <section id="about-story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative fade-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-72">
                    <img
                      src="https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg"
                      alt="Ouma Ge media interview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-xl h-40 sm:h-48">
                    <img
                      src="https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg"
                      alt="Office consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-xl h-40 sm:h-48">
                    <img
                      src="https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg"
                      alt="CRCC Bangladesh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-72">
                    <img
                      src="https://cdn-ai.onspace.ai/onspace/project/uploads/bVPKaToHQWiZv3FY62kF4h/Image_2026-01-30_050209_892.jpg"
                      alt="Ouma Ge professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    Nanjing University Graduate
                  </div>
                  <div className="text-xs text-slate-500">
                    C9 League · China's Top University
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-up mt-8 lg:mt-0">
              <div className="section-badge bg-cyan-50 text-cyan-700 mb-5">
                <i className="fas fa-user mr-2"></i>Personal Story
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                I Walked the Same Path
                <br />
                <span className="text-gradient">You're About to Take</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My name is <strong className="text-slate-900">Ouma Ge (欧玛)</strong>. I
                  arrived in China as a foreign student with big dreams and
                  little knowledge of what lay ahead. Through persistence, hard
                  work, and the right guidance, I earned my degree from{" "}
                  <strong className="text-slate-900">Nanjing University</strong>{" "}
                  — one of China's elite C9 League institutions.
                </p>
                <p>
                  Today, as CEO of{" "}
                  <strong className="text-slate-900">
                    Asical International BD Limited
                  </strong>{" "}
                  and leader of the <strong className="text-slate-900">OUMAS community</strong>,
                  I channel every lesson I learned to help the next generation
                  of international students secure{" "}
                  <span className="text-red-600 font-bold">full scholarships</span>{" "}
                  and thrive in China.
                </p>
                <p>
                  I've also served as a professional interpreter between Chinese
                  corporations and South Asian governments — including project
                  work with{" "}
                  <strong className="text-slate-900">
                    China Railway Construction Bridge Engineering Bureau (CRCC)
                  </strong>{" "}
                  in Bangladesh — bringing real-world language and business
                  expertise to every consultation.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "fas fa-map-marker-alt", color: "text-red-500", title: "Based in Nanjing", desc: "China · Available globally" },
                  { icon: "fas fa-language", color: "text-cyan-500", title: "4 Languages", desc: "English · Chinese · Bengali · Hindi" },
                  { icon: "fas fa-clock", color: "text-indigo-500", title: "5+ Years", desc: "Consulting experience in China" },
                  { icon: "fas fa-globe", color: "text-green-500", title: "20+ Countries", desc: "Students from across the globe" },
                ].map((c) => (
                  <div key={c.title} className="grad-border rounded-2xl p-5">
                    <i className={`${c.icon} ${c.color} text-2xl mb-2`}></i>
                    <div className="font-bold text-slate-900">{c.title}</div>
                    <div className="text-xs text-slate-500">{c.desc}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => switchPage("contact")}
                className="inline-flex items-center mt-8 px-7 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full font-bold hover:from-slate-700 hover:to-slate-800 transition-all shadow-xl"
              >
                <i className="fas fa-handshake mr-2"></i>Work with Ouma Ge
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustBar() {
  const items = [
    { icon: "fas fa-university", color: "text-cyan-400", text: "Nanjing University Graduate" },
    { icon: "fas fa-briefcase", color: "text-blue-400", text: "CEO · Asical International BD Ltd" },
    { icon: "fas fa-star", color: "text-yellow-400", text: "CSC Scholarship Expert" },
    { icon: "fas fa-hard-hat", color: "text-orange-400", text: "CRCC Bangladesh Infrastructure Partner" },
    { icon: "fas fa-users", color: "text-green-400", text: "100+ Students Placed" },
    { icon: "fas fa-ship", color: "text-cyan-400", text: "Import / Export Trade Facilitation" },
    { icon: "fas fa-language", color: "text-purple-400", text: "4 Languages Fluent" },
    { icon: "fas fa-award", color: "text-orange-400", text: "95% Scholarship Success Rate" },
    { icon: "fas fa-handshake", color: "text-pink-400", text: "50+ Business Partnerships" },
    { icon: "fas fa-globe", color: "text-green-400", text: "20+ Countries Served" },
  ];
  const doubled = [...items, ...items];

  return (
    <section
      id="trust-bar"
      className="py-4 overflow-hidden border-y"
      style={{
        background: "#050d1a",
        borderColor: "rgba(34,197,94,0.12)",
      }}
    >
      <div className="marquee-track inline-flex gap-16 text-slate-400 text-sm font-medium">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <i className={`${item.icon} ${item.color}`}></i>
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
