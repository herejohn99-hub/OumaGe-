import { usePage } from "../App";

export default function BusinessPage() {
  const { switchPage } = usePage();
  return (
    <>
      {/* ═══════════════ BUSINESS CORPORATION ═══════════════ */}
      <section
        id="business-corp"
        className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, #22d3ee 0%, transparent 45%), radial-gradient(circle at 80% 80%, #818cf8 0%, transparent 40%)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-up">
            <div className="pill-label bg-cyan-500/20 text-cyan-300 mb-5">
              <i className="fas fa-briefcase"></i>&nbsp;Business Corporation
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Powering Cross-Border{" "}
              <span className="text-gradient">Business Growth</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              From China market entry to government-level negotiations — Asical
              International BD Limited bridges continents with expertise,
              language, and trusted relationships.
            </p>
          </div>

          {/* Stats */}
          <div className="fade-up grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { value: "50+", color: "text-cyan-400", label: "Business Clients" },
              { value: "20+", color: "text-indigo-400", label: "Countries Served" },
              { value: "500+", color: "text-yellow-400", label: "Interpretation Sessions" },
              { value: "5+", color: "text-green-400", label: "Years in Business" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div
                  className={`text-4xl font-extrabold ${s.color} font-display mb-1`}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <div className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "fas fa-door-open", gradient: "from-cyan-500 to-blue-600", hover: "hover:border-cyan-500/50", title: "China Market Entry", desc: "End-to-end support for foreign companies entering the Chinese market — from partner identification to regulatory navigation.", items: ["Market research & feasibility", "Local partner matchmaking", "Regulatory compliance guidance", "Business registration support"], checkColor: "text-cyan-400" },
              { icon: "fas fa-handshake", gradient: "from-indigo-500 to-purple-600", hover: "hover:border-indigo-500/50", title: "Strategic B2B Advisory", desc: "Helping companies forge high-value partnerships through cultural intelligence, language fluency, and on-the-ground networks.", items: ["Partnership brokerage", "Negotiation & deal-making", "Cross-cultural advisory", "Due diligence support"], checkColor: "text-indigo-400" },
              { icon: "fas fa-ship", gradient: "from-yellow-500 to-orange-600", hover: "hover:border-yellow-500/50", title: "International Trade & Import/Export", desc: "Facilitating smooth, compliant cross-border trade between China and South Asia, Africa, and the Middle East.", items: ["Supplier sourcing & vetting", "Trade documentation", "Logistics coordination", "Quality inspection"], checkColor: "text-yellow-400" },
              { icon: "fas fa-microphone", gradient: "from-green-500 to-teal-600", hover: "hover:border-green-500/50", title: "Government & Corporate Interpretation", desc: "High-stakes interpretation for government delegations, diplomatic visits, and Fortune 500 negotiations in Mandarin, English, Bengali, and Hindi.", items: ["Government delegation support", "Boardroom negotiations", "Conference interpretation", "Document translation"], checkColor: "text-green-400" },
              { icon: "fas fa-project-diagram", gradient: "from-pink-500 to-red-600", hover: "hover:border-pink-500/50", title: "Infrastructure & Project Liaison", desc: "Bridging Chinese engineering firms and international project stakeholders — drawing on direct CRCC Bangladesh experience.", items: ["Project communication", "Stakeholder management", "Local coordination", "Contract interpretation"], checkColor: "text-pink-400" },
              { special: true, icon: "fas fa-comments-dollar", gradient: "from-cyan-500 to-blue-600", title: "Free Business Consultation", desc: "Not sure which service fits your needs? Schedule a no-obligation discovery call to explore how we can accelerate your business goals." },
            ].map((card: any) => (
              <div
                key={card.title}
                className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 ${card.hover || ""} transition-all card-hover ${card.special ? "flex flex-col justify-between bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/30" : ""}`}
              >
                <div>
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <i className={`${card.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  {!card.special && card.items && (
                    <ul className="space-y-2 text-sm text-slate-300">
                      {card.items.map((item: string) => (
                        <li key={item} className="flex items-center">
                          <i className={`fas fa-check ${card.checkColor} mr-2 text-xs`}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {card.special && (
                  <button
                    onClick={() => switchPage("contact")}
                    className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg text-sm"
                  >
                    <i className="fas fa-calendar-check mr-2"></i>Book a
                    Discovery Call
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY PARTNER WITH US ═══════════════ */}
      <WhyPartnerSection />

      {/* ═══════════════ BUSINESS INQUIRY CTA ═══════════════ */}
      <section className="py-14 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-5">
            <i className="fas fa-briefcase mr-1"></i>Business Partnership
            Available
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to Grow Your Business in China &amp; Beyond?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a trade partner, cultural liaison, market entry
            advisor, or corporate interpreter — we're the bridge you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => switchPage("contact")}
              className="inline-flex items-center justify-center px-9 py-4 bg-white text-blue-700 rounded-full font-extrabold text-lg hover:bg-slate-100 transition-all shadow-2xl"
            >
              <i className="fas fa-calendar-check mr-2"></i>Book a Business
              Call
            </button>
            <a
              href="https://wa.me/8801747561098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 bg-slate-900/60 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-slate-900/80 transition-all shadow-2xl border border-white/20"
            >
              <i className="fab fa-whatsapp mr-2 text-green-400"></i>WhatsApp
              Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ BUSINESS VENTURES ═══════════════ */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Business Ventures
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leading innovative businesses and empowering communities across
              borders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-building text-white text-3xl"></i>
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                Asical International BD Limited
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>CEO & Founder</strong> | Leading a dynamic international
                trading and consulting firm connecting businesses across Asia
                and beyond.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mr-2 mt-1"></i>
                  International trade facilitation
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mr-2 mt-1"></i>
                  Cross-border business consulting
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mr-2 mt-1"></i>
                  Strategic partnerships development
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                OUMAS
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Community Leader</strong> | Building bridges between
                cultures and empowering communities through education and
                collaboration.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  Community development initiatives
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  Cultural exchange programs
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  Youth empowerment projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAREER JOURNEY ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Career Journey
            </h2>
            <p className="text-lg text-slate-600">
              A track record of leadership and impact across multiple ventures.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { num: "1", color: "cyan", gradient: "from-cyan-500 to-blue-600", date: "2020 - Present", title: "CEO & Founder", org: "Asical International BD Limited", desc: "Founded and scaled an international trading company, establishing strategic partnerships across Asia and facilitating cross-border business opportunities." },
              { num: "2", color: "purple", gradient: "from-purple-500 to-pink-600", date: "2019 - Present", title: "Community Leader", org: "OUMAS", desc: "Leading community initiatives that bridge cultural gaps and empower individuals through education, collaboration, and shared growth opportunities." },
              { num: "3", color: "red", gradient: "from-red-500 to-orange-600", date: "2021 - Present", title: "Study Abroad Consultant", org: "Independent Consultancy", desc: "Helping international students navigate Chinese university admissions and secure full scholarships, leveraging personal experience from Nanjing University." },
            ].map((item, idx) => (
              <div key={item.num} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg ${idx < 2 ? "timeline-dot" : ""}`}
                  >
                    {item.num}
                  </div>
                  {idx < 2 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 card-hover">
                  <div className={`text-${item.color}-600 font-bold text-sm mb-2`}>
                    {item.date}
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-3">{item.org}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EDUCATION ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Education
            </h2>
            <p className="text-lg text-slate-600">
              Academic foundation from China's leading institutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-graduation-cap", gradient: "from-red-500 to-red-600", border: "border-red-200", bg: "from-red-50 to-orange-50", name: "Nanjing University", cn: "南京大学", loc: "Nanjing, China", note: "One of China's most prestigious C9 League universities" },
              { icon: "fas fa-university", gradient: "from-blue-500 to-blue-600", border: "border-blue-200", bg: "from-blue-50 to-cyan-50", name: "Kunming University", cn: "昆明学院", loc: "Kunming, China", note: "Comprehensive university in Yunnan Province" },
              { icon: "fas fa-tree", gradient: "from-green-500 to-green-600", border: "border-green-200", bg: "from-green-50 to-teal-50", name: "Yunnan Forestry Technological College", cn: "云南林业职业技术学院", loc: "Kunming, China", note: "Specialized technical education" },
            ].map((edu) => (
              <div
                key={edu.name}
                className={`bg-gradient-to-br ${edu.bg} rounded-2xl p-6 border-2 ${edu.border} card-hover`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <i className={`${edu.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {edu.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{edu.cn}</p>
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {edu.loc}
                </div>
                <p className="text-xs text-slate-500">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <ServicesSection />

      {/* ═══════════════ TRANSLATION SERVICES ═══════════════ */}
      <TranslationSection />

      {/* ═══════════════ DUAL PILLARS IMPACT ═══════════════ */}
      <ImpactSection />
    </>
  );
}

function WhyPartnerSection() {
  const { switchPage } = usePage();
  const features = [
    { icon: "fas fa-language", gradient: "from-cyan-500 to-blue-600", title: "Fluent in 4 Languages", desc: "Mandarin, English, Bengali, and Hindi — eliminating communication risk at every stage of negotiation." },
    { icon: "fas fa-university", gradient: "from-indigo-500 to-purple-600", title: "Educated in China's C9 League", desc: "A Nanjing University education gives insider credibility and alumni networks across Chinese industry and government." },
    { icon: "fas fa-hard-hat", gradient: "from-yellow-500 to-orange-600", title: "Proven in High-Stakes Projects", desc: "Hands-on CRCC government infrastructure project work in Bangladesh provides real-world field credibility." },
    { icon: "fas fa-globe-asia", gradient: "from-green-500 to-teal-600", title: "20+ Countries Network", desc: "Established partner and client relationships across South Asia, Africa, and Southeast Asia — ready to activate for you." },
  ];

  const caseStudies = [
    { icon: "fas fa-hard-hat", gradient: "from-red-500 to-orange-500", tags: ["Infrastructure", "Government", "Interpretation"], title: "CRCC Bangladesh Infrastructure", meta: "China Railway Construction Corp · 2021–2023", desc: "Provided on-site interpretation and cross-cultural liaison for major railway and bridge construction projects in Bangladesh, facilitating communication between Chinese engineering teams and local government officials." },
    { icon: "fas fa-exchange-alt", gradient: "from-cyan-500 to-blue-600", tags: ["Trade", "B2B", "50+ Clients"], title: "Asia–Bangladesh Trade Facilitation", meta: "Asical International BD Limited · Ongoing", desc: "Structured import/export agreements connecting Chinese manufacturers with South Asian buyers — streamlining documentation, supplier vetting, and logistics for 50+ clients." },
    { icon: "fas fa-trophy", gradient: "from-indigo-500 to-purple-600", tags: ["Innovation", "Award", "Media Featured"], title: "Kunming Innovation & Entrepreneurship Contest", meta: "Kunming, Yunnan · 2023", desc: "Represented as finalist showcasing Asical International's cross-border business model to government officials, investors, and media." },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="fade-up">
            <div className="pill-label bg-indigo-50 text-indigo-700 mb-5">
              <i className="fas fa-star"></i>&nbsp;Why Partner With Us
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
              The Competitive Edge You{" "}
              <span className="text-gradient">Can't Find Elsewhere</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We sit at the intersection of culture, language, and business — a
              rare combination that delivers results where others struggle.
            </p>
            <div className="space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <i className={`${f.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">
                      {f.title}
                    </div>
                    <div className="text-slate-600 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => switchPage("contact")}
              className="inline-flex items-center mt-8 px-7 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full font-bold hover:from-slate-700 hover:to-slate-800 transition-all shadow-xl"
            >
              <i className="fas fa-calendar-check mr-2"></i>Book a Business Call
            </button>
          </div>
          <div className="fade-up space-y-5">
            <div className="section-badge bg-slate-100 text-slate-700 mb-3">
              <i className="fas fa-folder-open mr-2"></i>Business Case Studies
            </div>
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-7 shadow-lg border border-slate-200 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 bg-gradient-to-br ${cs.gradient} rounded-xl flex items-center justify-center`}
                  >
                    <i className={`${cs.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{cs.title}</div>
                    <div className="text-xs text-slate-500">{cs.meta}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {cs.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 bg-${
                        tag === "Infrastructure"
                          ? "red"
                          : tag === "Government"
                            ? "blue"
                            : tag === "Interpretation"
                              ? "green"
                              : tag === "Trade"
                                ? "cyan"
                                : tag === "B2B"
                                  ? "purple"
                                  : "yellow"
                      }-100 text-${
                        tag === "Infrastructure"
                          ? "red"
                          : tag === "Government"
                            ? "blue"
                            : tag === "Interpretation"
                              ? "green"
                              : tag === "Trade"
                                ? "cyan"
                                : tag === "B2B"
                                  ? "purple"
                                  : "yellow"
                      }-700 rounded-full text-xs font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: "fas fa-handshake", gradient: "from-cyan-500 to-blue-600", title: "Business Consulting", desc: "Strategic guidance for cross-border business opportunities and partnerships." },
    { icon: "fas fa-graduation-cap", gradient: "from-red-500 to-orange-600", title: "Study in China Consulting", desc: "Complete application support for Chinese university scholarships and admissions." },
    { icon: "fas fa-globe", gradient: "from-purple-500 to-pink-600", title: "International Trade", desc: "Facilitating import/export and connecting suppliers with global markets." },
    { icon: "fas fa-language", gradient: "from-green-500 to-teal-600", title: "Translation Services", desc: "Professional interpretation and translation in English, Chinese, Bengali, and Hindi." },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive services spanning business development, education
            consulting, and language solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center mb-4`}
              >
                <i className={`${s.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TranslationSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            <i className="fas fa-language text-cyan-500"></i> Translation
            Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Breaking language barriers with professional interpretation and
            translation across multiple languages.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { flag: "🇬🇧", name: "English", level: "Fluent" },
                { flag: "🇨🇳", name: "Chinese", level: "Fluent" },
                { flag: "🇧🇩", name: "Bengali", level: "Native" },
                { flag: "🇮🇳", name: "Hindi", level: "Professional" },
              ].map((l) => (
                <div key={l.name} className="bg-white rounded-xl p-4 shadow">
                  <div className="text-3xl mb-2">{l.flag}</div>
                  <div className="font-bold text-slate-900">{l.name}</div>
                  <div className="text-xs text-slate-500">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
              Services Offered
            </h3>
            <ul className="space-y-4">
              {[
                { icon: "fas fa-microphone", title: "Simultaneous Interpretation", desc: "Real-time interpretation for meetings and conferences" },
                { icon: "fas fa-file-alt", title: "Document Translation", desc: "Academic, business, and legal documents" },
                { icon: "fas fa-globe", title: "Localization Services", desc: "Cultural adaptation for international markets" },
              ].map((s) => (
                <li key={s.title} className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${s.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{s.title}</div>
                    <div className="text-sm text-slate-600">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-cyan-500 rounded-full text-sm font-bold mb-6">
              5+ Years Experience
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">
              Trusted by Government Delegations & Fortune 500 Companies
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Provided professional interpretation services for high-level
              government meetings, international business negotiations, and
              academic conferences across China and South Asia.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { value: "500+", label: "Interpretation Sessions" },
                { value: "1000+", label: "Documents Translated" },
                { value: "50+", label: "Corporate Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { switchPage } = usePage();
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-3">
            Two Pillars, One Mission
          </h2>
          <p className="text-slate-500">
            Education empowerment and business excellence — both driven by the
            same commitment to results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <h3 className="font-display font-bold text-xl">
                Education Consulting Impact
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "100+", label: "Students Placed" },
                { value: "95%", label: "Success Rate" },
                { value: "30+", label: "Partner Universities" },
                { value: "20+", label: "Countries" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/15 rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-extrabold">{s.value}</div>
                  <div className="text-white/80 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => switchPage("scholarships")}
              className="inline-flex items-center px-6 py-3 bg-white text-red-600 rounded-full font-bold text-sm hover:bg-slate-100 transition-all"
            >
              <i className="fas fa-arrow-right mr-2"></i>Explore Scholarships
            </button>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-cyan-900 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <i className="fas fa-briefcase text-cyan-400 text-xl"></i>
              </div>
              <h3 className="font-display font-bold text-xl">
                Business Corporation Impact
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "50+", label: "Business Clients" },
                { value: "500+", label: "Interpretation Sessions" },
                { value: "1000+", label: "Documents Translated" },
                { value: "4", label: "Languages Fluent" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-extrabold text-cyan-300">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => switchPage("business")}
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold text-sm transition-all"
            >
              <i className="fas fa-arrow-right mr-2"></i>Explore Business
              Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
