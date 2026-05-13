import { useState } from "react";

const blogPosts = [
  { image: "https://cdn-ai.onspace.ai/onspace/project/uploads/9Ewej68yFggkWD9CBAvxDK/Image_2026-01-30_050238_958.jpg", category: "Entrepreneurship", catColor: "bg-indigo-100 text-indigo-700", readTime: "5 min", title: "Building Global Business Networks That Last", desc: "Proven strategies for high-value international relationships across cultures." },
  { image: "https://cdn-ai.onspace.ai/onspace/project/uploads/nKhRb885DcC7eGxeW9Uisp/B5DFB85A-039D-4F65-B6F7-E3702F769DE7_watermark.jpeg", category: "Leadership", catColor: "bg-sky-100 text-sky-700", readTime: "6 min", title: "5 Leadership Principles for Cross-Border Teams", desc: "How to lead diverse, multicultural teams with clarity and measurable impact." },
  { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop", category: "Communication", catColor: "bg-green-100 text-green-700", readTime: "7 min", title: "Mastering Cross-Cultural Business Communication", desc: "Essential language & cultural intelligence for China's business landscape." },
  { image: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", category: "Community", catColor: "bg-amber-100 text-amber-700", readTime: "8 min", title: "Creating Lasting Community Impact Through Business", desc: "Build socially responsible businesses that create real, measurable impact." },
  { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop", category: "Education", catColor: "bg-red-100 text-red-700", readTime: "12 min", title: "Top 10 Chinese Universities for International Students 2026", desc: "Rankings, scholarship availability & insider tips for China's elite universities." },
  { image: "https://cdn-ai.onspace.ai/onspace/project/uploads/49YwM4vvBhuobKy49b8GdR/79D12723-009A-402E-B80B-2423A56E2C2B_watermark.jpeg", category: "Strategy", catColor: "bg-cyan-100 text-cyan-700", readTime: "9 min", title: "Strategic Partnerships: The China Playbook", desc: "A proven framework for building partnerships with Chinese companies & institutions." },
];

export default function AppsPage() {
  const [showApps, setShowApps] = useState(true);

  const upcomingApps = [
    { icon: "fas fa-graduation-cap", title: "Scholarship Tracker", status: "Soon", desc: "CSC application manager & scholarship deadline tracker for students." },
    { icon: "fas fa-language", title: "Chinese Language App", status: "Soon", desc: "Learn Mandarin Chinese with lessons tailored for South Asian learners." },
    { icon: "fas fa-briefcase", title: "Business CRM Tool", status: "Soon", desc: "Client management & deal-tracking tool for cross-border business teams." },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Toggle Tabs */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0">
            <button
              onClick={() => setShowApps(true)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-all ${showApps ? "border-green-500 text-green-700" : "border-transparent text-slate-500 hover:text-slate-700"}`}
            >
              <i className="fas fa-mobile-alt"></i>Apps &amp; Products
            </button>
            <button
              onClick={() => setShowApps(false)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-all ${!showApps ? "border-green-500 text-green-700" : "border-transparent text-slate-500 hover:text-slate-700"}`}
            >
              <i className="fas fa-newspaper"></i>Blog &amp; Insights
            </button>
          </div>
        </div>
      </div>

      {showApps ? (
        <>
          {/* Apps Section */}
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-up">
              <div className="pill-label bg-green-100 text-green-700 mb-5">
                <i className="fas fa-rocket"></i>&nbsp;Apps &amp; Software
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
                My <span className="text-gradient">Apps &amp; Products</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Software tools and applications I've built to solve real-world
                problems. More products launching soon.
              </p>
            </div>

            {/* Featured App */}
            <div className="fade-up mb-12">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 sm:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <i className="fas fa-wallet text-white text-2xl"></i>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-2xl text-slate-900">
                            GeGe Wallet
                          </h3>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                            LIVE
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm">
                          Smart Personal Finance &amp; Budget Tracker
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      A powerful personal finance management web app designed
                      for Bangladesh. Track income and expenses, manage budgets,
                      visualize spending patterns — all in one clean dashboard.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {[
                        { icon: "fas fa-chart-pie", title: "Budget Tracking" },
                        { icon: "fas fa-taka-sign", title: "BDT Support" },
                        { icon: "fas fa-mobile-alt", title: "PWA App" },
                        { icon: "fas fa-shield-alt", title: "Secure & Private" },
                      ].map((f) => (
                        <div
                          key={f.title}
                          className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50"
                        >
                          <i className={`${f.icon} text-green-500`}></i>
                          <span className="text-sm font-medium text-slate-700">
                            {f.title}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://gege-wallet.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-sm hover:from-green-400 hover:to-green-500 transition-all shadow-lg"
                      >
                        <i className="fas fa-external-link-alt"></i>Open Web
                        App
                      </a>
                      <a
                        href="https://gege-wallet.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 border border-slate-200 rounded-full font-bold text-sm text-slate-700 hover:bg-slate-50 transition-all"
                      >
                        <i className="fas fa-download"></i>Install
                      </a>
                    </div>
                  </div>
                  <div className="relative bg-slate-100 flex items-center justify-center p-8">
                    <div className="max-w-xs w-full">
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                          </div>
                          <div className="flex-1 text-center text-xs text-slate-400">
                            gege-wallet.web.app
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=700&fit=crop"
                          alt="GeGe Wallet Preview"
                          className="w-full"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Apps */}
            <div className="fade-up">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
                <i className="fas fa-plus-circle text-green-500 mr-2"></i>More
                Apps Coming Soon
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingApps.map((app) => (
                  <div
                    key={app.title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-4">
                      <i className={`${app.icon} text-slate-400 text-2xl`}></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {app.title}
                      </h4>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                        {app.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Blog Section */}
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Blog */}
            <div className="fade-up mb-16">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 overflow-hidden" style={{ maxHeight: "360px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop"
                      alt="CSC Scholarship Guide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                        <i className="fas fa-star mr-1"></i>Featured
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                        Education
                      </span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3" style={{ lineHeight: "1.25" }}>
                      The Complete Guide to Winning CSC Scholarships in 2026
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      From eligibility requirements to insider application
                      strategies — everything you need to secure 100% funded
                      education at China's top universities.
                    </p>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-400">
                      <span>
                        <i className="fas fa-user-edit mr-1"></i>Ouma Ge
                      </span>
                      <span>·</span>
                      <span>
                        <i className="fas fa-calendar mr-1"></i>March 2026
                      </span>
                      <span>·</span>
                      <span>
                        <i className="fas fa-clock mr-1"></i>10 min
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-sm w-fit shadow-lg">
                      Read Full Guide{" "}
                      <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="blog-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100"
                >
                  <div className="overflow-hidden" style={{ height: "185px" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-img w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${post.catColor}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        <i className="fas fa-clock mr-1"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base mb-2 text-slate-900">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">
                      {post.desc}
                    </p>
                    <button className="inline-flex items-center text-sm font-semibold gap-1 text-green-600 hover:text-green-700">
                      Read More{" "}
                      <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
