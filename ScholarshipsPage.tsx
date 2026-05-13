import { useState } from "react";
import { usePage } from "../App";

export default function ScholarshipsPage() {
  const { switchPage } = usePage();
  return (
    <>
      {/* ═══════════════ STUDY IN CHINA ═══════════════ */}
      <section
        id="study-china"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-6 py-2 bg-red-500 text-white rounded-full font-bold text-sm mb-4 shadow-lg">
              <i className="fas fa-star mr-2"></i>FEATURED SERVICE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-2 mb-4">
              🎓 Study in China with Full Scholarship
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              As a graduate of <strong className="text-red-600">Nanjing University</strong>,
              I know exactly what it takes to succeed in Chinese universities.
              Let me guide you through the{" "}
              <strong>Chinese Government Scholarship (CSC)</strong> application
              process and help you secure{" "}
              <strong className="text-red-600">100% funded education</strong>{" "}
              at China's most prestigious institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: "fas fa-dollar-sign",
                gradient: "from-red-500 to-red-600",
                border: "border-red-200 hover:border-red-400",
                title: "100% Full Scholarships",
                desc: "Access Chinese Government Scholarships (CSC) covering tuition, accommodation, living allowance, and insurance.",
                items: [
                  { icon: "fas fa-check-circle", color: "text-green-500", text: "Tuition: Fully Covered" },
                  { icon: "fas fa-check-circle", color: "text-green-500", text: "Stipend: 2,500-3,500 RMB/month" },
                  { icon: "fas fa-check-circle", color: "text-green-500", text: "Housing: Free Campus Dorm" },
                  { icon: "fas fa-check-circle", color: "text-green-500", text: "Insurance: Medical Coverage" },
                ],
              },
              {
                icon: "fas fa-university",
                gradient: "from-yellow-500 to-yellow-600",
                border: "border-yellow-200 hover:border-yellow-400",
                title: "Top Chinese Universities",
                desc: "Study at prestigious institutions like Peking University, Tsinghua, Nanjing University, and more!",
                items: [
                  { icon: "fas fa-star", color: "text-yellow-500", text: "C9 League Universities" },
                  { icon: "fas fa-star", color: "text-yellow-500", text: "Project 985/211 Schools" },
                  { icon: "fas fa-star", color: "text-yellow-500", text: "Double First-Class Universities" },
                  { icon: "fas fa-star", color: "text-yellow-500", text: "English-Taught Programs Available" },
                ],
              },
              {
                icon: "fas fa-hands-helping",
                gradient: "from-orange-500 to-orange-600",
                border: "border-orange-200 hover:border-orange-400",
                title: "Complete Support System",
                desc: "From application to arrival, I provide end-to-end support based on my personal experience studying in China.",
                items: [
                  { icon: "fas fa-check", color: "text-orange-500", text: "University Selection & Matching" },
                  { icon: "fas fa-check", color: "text-orange-500", text: "Document Preparation & Review" },
                  { icon: "fas fa-check", color: "text-orange-500", text: "Visa Assistance & Processing" },
                  { icon: "fas fa-check", color: "text-orange-500", text: "Pre-departure Orientation" },
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${card.border} transition-all card-hover`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <i className={`${card.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {card.desc}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {card.items.map((item) => (
                    <li key={item.text} className="flex items-center">
                      <i className={`${item.icon} ${item.color} mr-2`}></i>
                      <strong>{item.text.split(":")[0]}:</strong>
                      {item.text.split(":")[1] || ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <i className="fas fa-rocket text-6xl mb-6 opacity-90"></i>
              <h3 className="font-display font-bold text-3xl sm:text-4xl mb-4">
                Ready to Study in China with Full Scholarship?
              </h3>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Start your journey to world-class education today.{" "}
                <strong>Free initial consultation available!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => switchPage("contact")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-lg"
                >
                  <i className="fas fa-comments mr-2"></i>Get Free Consultation
                </button>
                <button
                  onClick={() => switchPage("apps")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                >
                  <i className="fas fa-book mr-2"></i>Read Our Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SCHOLARSHIP PROGRAMS ═══════════════ */}
      <ScholarshipPrograms />

      {/* ═══════════════ PARTNER UNIVERSITIES ═══════════════ */}
      <PartnerUniversities />

      {/* ═══════════════ SUCCESS STORIES ═══════════════ */}
      <SuccessStories />

      {/* ═══════════════ APPLICATION PROCESS ═══════════════ */}
      <ApplicationProcess />
    </>
  );
}

function ScholarshipPrograms() {
  const programs = [
    { icon: "fas fa-flag", gradient: "from-red-500 to-red-600", border: "border-red-200", bg: "from-red-50 to-orange-50", title: "Chinese Government Scholarship (CSC)", desc: "The most prestigious scholarship covering all expenses for Bachelor's, Master's, and PhD programs.", items: ["Full tuition waiver", "Monthly stipend: 2,500-3,500 RMB", "Free accommodation", "Medical insurance"], checkColor: "text-red-500" },
    { icon: "fas fa-map-marked-alt", gradient: "from-blue-500 to-blue-600", border: "border-blue-200", bg: "from-blue-50 to-indigo-50", title: "Provincial Government Scholarships", desc: "Scholarships offered by individual provinces like Beijing, Shanghai, Jiangsu, and Zhejiang.", items: ["Full or partial tuition coverage", "Living allowance", "Accommodation support", "Province-specific benefits"], checkColor: "text-blue-500" },
    { icon: "fas fa-university", gradient: "from-purple-500 to-purple-600", border: "border-purple-200", bg: "from-purple-50 to-pink-50", title: "University Scholarships", desc: "Individual universities offer their own scholarships to attract talented international students.", items: ["Varies by university", "Merit-based selection", "Program-specific benefits", "Renewable annually"], checkColor: "text-purple-500" },
    { icon: "fas fa-book-reader", gradient: "from-green-500 to-green-600", border: "border-green-200", bg: "from-green-50 to-teal-50", title: "Confucius Institute Scholarship", desc: "Scholarships for students learning Chinese language and culture, including degree and non-degree programs.", items: ["Language study programs", "Cultural immersion", "4-week to 4-year programs", "Full or partial funding"], checkColor: "text-green-500" },
    { icon: "fas fa-handshake", gradient: "from-yellow-500 to-yellow-600", border: "border-yellow-200", bg: "from-yellow-50 to-orange-50", title: "Bilateral Scholarships", desc: "Scholarships under agreements between China and other countries.", items: ["Country-specific programs", "Government-to-government", "Diplomatic relations benefit", "Priority processing"], checkColor: "text-yellow-600" },
    { icon: "fas fa-briefcase", gradient: "from-cyan-500 to-cyan-600", border: "border-cyan-200", bg: "from-cyan-50 to-blue-50", title: "MOFCOM Scholarship", desc: "Ministry of Commerce scholarship for students from developing countries to study business and economics.", items: ["Focus on developing nations", "Business & economics", "Master's programs", "Full funding package"], checkColor: "text-cyan-500" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-sm mb-4 shadow-lg">
            <i className="fas fa-certificate mr-2"></i>SCHOLARSHIP PROGRAMS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Types of Scholarships Available
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Multiple scholarship options to suit different academic levels and
            fields of study.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`bg-gradient-to-br ${p.bg} rounded-3xl p-8 border-2 ${p.border} hover:border-opacity-80 transition-all card-hover`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${p.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <i className={`${p.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <i className={`fas fa-check-circle ${p.checkColor} mr-2`}></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scholarship Calendar */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-cyan-500 rounded-full font-bold text-sm mb-4">
              <i className="fas fa-calendar-alt mr-2"></i>IMPORTANT DATES
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Scholarship Application Calendar
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Mark these critical dates and plan your application timeline
              accordingly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-sun text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-white">
                    Spring Intake (September)
                  </h4>
                  <p className="text-cyan-400 font-semibold">Main Admission Season</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: "CSC Scholarship", date: "Application: January 15 - March 31", note: "Results: June - July" },
                  { name: "University Scholarships", date: "Application: December - April", note: "Varies by university" },
                  { name: "Provincial Scholarships", date: "Application: January - April", note: "Varies by province" },
                ].map((s) => (
                  <div key={s.name} className="flex items-start">
                    <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                    <div>
                      <div className="font-bold text-white">{s.name}</div>
                      <div className="text-slate-300 text-sm">{s.date}</div>
                      <div className="text-slate-400 text-xs mt-1">{s.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-leaf text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-white">
                    Fall Intake (March)
                  </h4>
                  <p className="text-purple-400 font-semibold">
                    Limited Programs
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-blue-400 mt-1 mr-3"></i>
                  <div>
                    <div className="font-bold text-white">
                      Selected Universities
                    </div>
                    <div className="text-slate-300 text-sm">
                      Application: August - October
                    </div>
                    <div className="text-slate-400 text-xs mt-1">
                      Limited scholarship availability
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-blue-400 mt-1 mr-3"></i>
                  <div>
                    <div className="font-bold text-white">
                      Language Programs
                    </div>
                    <div className="text-slate-300 text-sm">
                      Application: Rolling admission
                    </div>
                    <div className="text-slate-400 text-xs mt-1">
                      Year-round opportunities
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-yellow-400 mt-0.5 mr-3"></i>
                  <div className="text-sm text-yellow-200">
                    <strong className="text-yellow-300">Pro Tip:</strong> Most
                    scholarships start in September. Plan to apply for the
                    Spring intake for the best opportunities!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => {}}
              className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold text-lg transition-all shadow-lg"
            >
              <i className="fas fa-calendar-check mr-2"></i>Get Personalized Timeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerUniversities() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-sm mb-4 shadow-lg">
            <i className="fas fa-university mr-2"></i>PARTNER UNIVERSITIES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            50+ Chinese Universities Offering Scholarships
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            We partner with top-tier Chinese universities across all major
            cities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* C9 League */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-crown text-white text-xl"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                C9 League
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              China's Ivy League - The 9 most prestigious universities
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {["Peking University (北京大学)", "Tsinghua University (清华大学)", "Fudan University (复旦大学)", "Shanghai Jiao Tong (上海交通大学)", "Zhejiang University (浙江大学)", "Nanjing University (南京大学)", "USTC (中国科学技术大学)", "Harbin Institute of Technology", "Xi'an Jiaotong University"].map((u) => (
                <li key={u} className="flex items-center">
                  <i className="fas fa-star text-yellow-500 mr-2 text-xs"></i>
                  {u}
                </li>
              ))}
            </ul>
          </div>

          {/* Top 985/211 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-award text-white text-xl"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Top 985/211
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Elite Project 985 & 211 Universities
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {["Beijing Normal University", "Wuhan University", "Sun Yat-sen University", "Tongji University", "Sichuan University", "Tianjin University", "Southeast University", "Renmin University of China", "+ 20 more universities"].map((u) => (
                <li key={u} className="flex items-start">
                  <i className="fas fa-circle text-blue-500 mr-2 text-xs mt-1"></i>
                  {u}
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-microscope text-white text-xl"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Specialized
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Top specialized institutions by field
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                { field: "Medicine", schools: "Peking Union, Capital Medical" },
                { field: "Engineering", schools: "Beihang University" },
                { field: "Business", schools: "UIBE, Shanghai Finance" },
                { field: "Language", schools: "Beijing Language & Culture" },
                { field: "Agriculture", schools: "China Agricultural University" },
                { field: "Arts", schools: "Central Academy of Fine Arts" },
                { field: "Law", schools: "China University of Political Science" },
              ].map((s) => (
                <li key={s.field} className="flex items-start">
                  <i className="fas fa-circle text-purple-500 mr-2 text-xs mt-1"></i>
                  <strong>{s.field}:</strong>&nbsp;{s.schools}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Complete University List */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h3 className="font-display font-bold text-2xl text-slate-900 mb-8 text-center">
            <i className="fas fa-list-ul text-cyan-500 mr-3"></i>Complete
            University List by Region
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { color: "red", city: "Beijing (北京)", count: "15", uni: ["Peking University | 北京大学", "Tsinghua University | 清华大学", "Beijing Normal University | 北京师范大学", "Renmin University | 人民大学", "Beijing Institute of Technology", "Beihang University (BUAA)", "Beijing Language & Culture University", "+ 8 more Beijing universities"] },
              { color: "blue", city: "Shanghai (上海)", count: "10", uni: ["Fudan University | 复旦大学", "Shanghai Jiao Tong University | 上海交通大学", "Tongji University | 同济大学", "East China Normal University", "Shanghai University of Finance", "+ 5 more Shanghai universities"] },
              { color: "purple", city: "Jiangsu (江苏)", count: "8", uni: ["Nanjing University | 南京大学", "Southeast University | 东南大学", "Soochow University", "Nanjing Normal University", "+ 4 more Jiangsu universities"] },
              { color: "cyan", city: "Other Regions", count: "17+", uni: ["Zhejiang University | 浙江大学", "Wuhan University | 武汉大学", "Sichuan University | 四川大学", "Xiamen University | 厦门大学", "Yunnan University", "+ Many more nationwide"] },
            ].map((region) => (
              <div key={region.city}>
                <div className={`flex items-center mb-4 pb-3 border-b-2 border-${region.color}-200`}>
                  <i className={`fas fa-map-marker-alt text-${region.color}-500 text-xl mr-3`}></i>
                  <h4 className="font-bold text-lg text-slate-900">
                    {region.city} - {region.count} Universities
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                  {region.uni.map((u) => (
                    <div key={u} className="flex items-center">
                      <i className={`fas fa-angle-right text-${region.color}-500 mr-2`}></i>
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <i className="fas fa-lightbulb text-4xl text-cyan-600 mr-4"></i>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Need Help Choosing?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    I'll help you select the perfect university based on your
                    field, budget, and career goals.
                  </p>
                </div>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:shadow-xl transition-all whitespace-nowrap">
                <i className="fas fa-comment-dots mr-2"></i>Get Expert Guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const { switchPage } = usePage();
  const [videoModal, setVideoModal] = useState({ open: false, url: "" });

  const stories = [
    { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop", initials: "AR", bg: "from-blue-500 to-blue-600", name: "Ahmed Rahman", flag: "🇧🇩", country: "Bangladesh", uni: "Peking University", program: "Computer Science (Master's)", scholarship: "CSC Full Scholarship", year: "2024", quote: "I was completely lost with the CSC application process until I found Ouma. His guidance was invaluable. Within 3 months, I received my admission letter from Peking University with a full scholarship!", video: "https://www.youtube.com/embed/fhK2kwq7y_Q", tags: [{ label: "C9 League", bg: "bg-blue-100", text: "text-blue-700" }, { label: "100% Funded", bg: "bg-green-100", text: "text-green-700" }, { label: "Master's Degree", bg: "bg-orange-100", text: "text-orange-700" }] },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop", initials: "PS", bg: "from-purple-500 to-pink-600", name: "Priya Singh", flag: "🇮🇳", country: "India", uni: "Tsinghua University", program: "International Business (MBA)", scholarship: "CSC Full Scholarship", year: "2023", quote: "Today, I'm studying at Tsinghua University — China's MIT — with zero tuition fees and a monthly stipend! Ouma's experience as a Nanjing University graduate really shows in his guidance.", video: "", tags: [{ label: "C9 League", bg: "bg-blue-100", text: "text-blue-700" }, { label: "MBA Program", bg: "bg-purple-100", text: "text-purple-700" }] },
    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop", initials: "CM", bg: "from-green-500 to-teal-600", name: "Carlos Martinez", flag: "🇨🇴", country: "Colombia", uni: "Nanjing University", program: "Mechanical Engineering (PhD)", scholarship: "CSC Full Scholarship", year: "2025", quote: "Ouma helped me secure admission to his alma mater, Nanjing University. His insider knowledge made all the difference. Now I'm pursuing my doctorate with full funding!", video: "", tags: [{ label: "PhD Scholarship", bg: "bg-green-100", text: "text-green-700" }, { label: "Research Funding", bg: "bg-purple-100", text: "text-purple-700" }] },
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop", initials: "FA", bg: "from-orange-500 to-red-600", name: "Fatima Al-Mahmoud", flag: "🇪🇬", country: "Egypt", uni: "Zhejiang University", program: "Medicine (MBBS)", scholarship: "University Scholarship", year: "2024", quote: "Ouma secured a full university scholarship covering my 6-year MBBS degree at Zhejiang University. I'm now living my dream of becoming a doctor!", video: "", tags: [{ label: "MBBS Program", bg: "bg-red-100", text: "text-red-700" }, { label: "Full Tuition Waiver", bg: "bg-green-100", text: "text-green-700" }] },
  ];

  return (
    <section
      id="success-stories"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-sm mb-4 shadow-lg">
            <i className="fas fa-trophy mr-2"></i>SUCCESS STORIES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            🎓 Students Who Made It to China
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Real students, real scholarships, real success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100+", color: "text-blue-600", label: "Students Placed" },
            { value: "95%", color: "text-green-600", label: "Success Rate" },
            { value: "30+", color: "text-purple-600", label: "Universities" },
            { value: "20+", color: "text-orange-600", label: "Countries" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className={`text-4xl font-bold ${s.color} mb-2`}>
                {s.value}
              </div>
              <div className="text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Stories */}
        <div className="space-y-12">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
            >
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2">
                  <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${story.bg} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {story.initials}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-slate-900">
                        {story.name}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        <i className="fas fa-flag mr-1"></i>
                        {story.country}
                      </p>
                    </div>
                    {story.video && (
                      <div className="ml-auto">
                        <button
                          onClick={() =>
                            setVideoModal({ open: true, url: story.video })
                          }
                          className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all"
                        >
                          <i className="fas fa-play ml-0.5"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: "fas fa-university", color: "text-red-600", bg: "bg-red-100", label: "University", value: story.uni },
                      { icon: "fas fa-book", color: "text-blue-600", bg: "bg-blue-100", label: "Program", value: story.program },
                      { icon: "fas fa-award", color: "text-yellow-600", bg: "bg-yellow-100", label: "Scholarship", value: story.scholarship },
                      { icon: "fas fa-calendar", color: "text-green-600", bg: "bg-green-100", label: "Admission Year", value: story.year },
                    ].map((d) => (
                      <div key={d.label} className="flex items-start">
                        <div
                          className={`w-10 h-10 ${d.bg} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}
                        >
                          <i className={`${d.icon} ${d.color}`}></i>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {d.label}
                          </div>
                          <div className="text-slate-600 text-sm">
                            {d.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 mb-4">
                    <div className="flex items-start mb-3">
                      <i className="fas fa-quote-left text-blue-500 text-2xl mr-3 mt-1"></i>
                      <p className="text-slate-700 leading-relaxed italic">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-3 py-1 ${tag.bg} ${tag.text} rounded-full text-xs font-semibold`}
                      >
                        <i className="fas fa-star mr-1"></i>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <i className="fas fa-rocket text-6xl mb-6 opacity-90"></i>
            <h3 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Your Success Story Starts Here
            </h3>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join 100+ students who've transformed their lives through Chinese
              education. <strong>Free consultation available!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => switchPage("contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-lg"
              >
                <i className="fas fa-comments mr-2"></i>Start Your Journey
              </button>
              <button
                onClick={() => switchPage("scholarships")}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
              >
                <i className="fas fa-info-circle mr-2"></i>Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModal.open && (
        <div
          className="video-modal active"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setVideoModal({ open: false, url: "" });
          }}
        >
          <div className="max-w-5xl w-full mx-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoModal.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setVideoModal({ open: false, url: "" })}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
                >
                  <i className="fas fa-times mr-2"></i>Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ApplicationProcess() {
  const steps = [
    { icon: "fas fa-comments", gradient: "from-cyan-500 to-cyan-600", num: "1", title: "Free Consult", desc: "Discuss goals, background & ideal program" },
    { icon: "fas fa-university", gradient: "from-blue-500 to-blue-600", num: "2", title: "University Match", desc: "Select the right universities & programs" },
    { icon: "fas fa-file-alt", gradient: "from-indigo-500 to-indigo-600", num: "3", title: "Documents", desc: "Prepare & review all required papers" },
    { icon: "fas fa-laptop-code", gradient: "from-purple-500 to-purple-600", num: "4", title: "CSC Apply", desc: "Submit scholarship application via portal" },
    { icon: "fas fa-passport", gradient: "from-orange-500 to-orange-600", num: "5", title: "Visa & Travel", desc: "Visa application & pre-departure prep" },
    { icon: "fas fa-plane-arrival", gradient: "from-green-500 to-green-600", num: "6", title: "Land in China!", desc: "Arrive & settle with on-ground support" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="section-badge bg-cyan-500/20 text-cyan-300 mb-5">
            <i className="fas fa-route mr-2"></i>Application Journey
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            How We Get You to China in{" "}
            <span className="text-gradient">6 Steps</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A proven, guided process from first consultation to landing at your
            dream university.
          </p>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 opacity-30"
            style={{
              background:
                "linear-gradient(to right, #22d3ee, #6366f1, #22c55e)",
            }}
          ></div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="fade-up flex flex-col items-center text-center group"
              >
                <div className="relative mb-5">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
                  >
                    <i className={`${step.icon} text-white text-xl`}></i>
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-slate-900 rounded-full text-xs font-black flex items-center justify-center shadow">
                    {step.num}
                  </span>
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center fade-up">
          <button className="inline-flex items-center px-9 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl glow-cyan">
            <i className="fas fa-rocket mr-2"></i>Start My Application Journey
          </button>
        </div>
      </div>
    </section>
  );
}
