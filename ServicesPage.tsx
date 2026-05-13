import { useState } from "react";
import VideoModal from "../components/VideoModal";
import Lightbox from "../components/Lightbox";
import type { GalleryImage } from "../components/Lightbox";

const galleryData: GalleryImage[] = [
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/Lx4dXNySxGDhApTTeTUWAP/IMG_0009.jpeg", title: "Professional Portrait", description: "Leadership moment captured during a professional engagement.", categories: ["Leadership", "Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/49YwM4vvBhuobKy49b8GdR/79D12723-009A-402E-B80B-2423A56E2C2B_watermark.jpeg", title: "Team Unity", description: "Our diverse team working together towards common goals.", categories: ["Team", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nKhRb885DcC7eGxeW9Uisp/B5DFB85A-039D-4F65-B6F7-E3702F769DE7_watermark.jpeg", title: "Mentorship", description: "Building strong relationships through mentorship and guidance.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/9Ewej68yFggkWD9CBAvxDK/Image_2026-01-30_050238_958.jpg", title: "Cultural Exchange", description: "Facilitating meaningful cultural exchanges and understanding.", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", title: "Cultural Celebration", description: "Celebrating diversity and cultural heritage with the team.", categories: ["Team", "Events"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/PbDSpyXBrXs9fFoTX93jt2/IMG_0056.jpeg", title: "Team Diversity", description: "Embracing diversity as our strength.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/jWM2eWyPam5kq94hEYTw7e/Image_2026-01-30_045954_964.jpg", title: "Team Building", description: "Strengthening bonds through collaborative activities.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/bVPKaToHQWiZv3FY62kF4h/Image_2026-01-30_050209_892.jpg", title: "Entrepreneurial Spirit", description: "Capturing the passion and drive that fuels innovation.", categories: ["Leadership"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg", title: "Innovation Contest Interview", description: "Media interview at the Kunming Innovation and Entrepreneurship Contest.", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg", title: "Office Team", description: "Our dedicated team working together in the office environment.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg", title: "CRCC Bangladesh Project", description: "Professional work with China Railway Construction Corporation in Bangladesh.", categories: ["Leadership"] },
];

const galleryItemsData = [
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/Lx4dXNySxGDhApTTeTUWAP/IMG_0009.jpeg", title: "Professional Portrait", categories: ["Leadership", "Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/49YwM4vvBhuobKy49b8GdR/79D12723-009A-402E-B80B-2423A56E2C2B_watermark.jpeg", title: "Team Unity", categories: ["Team", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nKhRb885DcC7eGxeW9Uisp/B5DFB85A-039D-4F65-B6F7-E3702F769DE7_watermark.jpeg", title: "Mentorship", categories: ["Team", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/9Ewej68yFggkWD9CBAvxDK/Image_2026-01-30_050238_958.jpg", title: "Cultural Exchange", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", title: "Cultural Celebration", categories: ["Team", "Events"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/PbDSpyXBrXs9fFoTX93jt2/IMG_0056.jpeg", title: "Team Diversity", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/jWM2eWyPam5kq94hEYTw7e/Image_2026-01-30_045954_964.jpg", title: "Team Building", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/bVPKaToHQWiZv3FY62kF4h/Image_2026-01-30_050209_892.jpg", title: "Entrepreneurial Spirit", categories: ["Leadership"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg", title: "Innovation Contest Interview", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg", title: "Office Team", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg", title: "CRCC Bangladesh Project", categories: ["Leadership"] },
];

export default function ServicesPage() {
  const [videoModal, setVideoModal] = useState({ open: false, url: "" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoFilter, setVideoFilter] = useState("all");
  const [galleryFilter, setGalleryFilter] = useState("all");

  const videos = [
    { category: "business", url: "https://www.youtube.com/embed/_uj7yAEc7cs", thumb: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop", badge: "bg-cyan-100 text-cyan-700", title: "Strategic Considerations in Cross-Border M&A", desc: "Expert insights on strategic considerations and challenges in cross-border transactions." },
    { category: "community", url: "https://www.youtube.com/embed/nJb0srmK8-Q", thumb: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop", badge: "bg-purple-100 text-purple-700", title: "Digital Technology & Innovation in Education", desc: "Exploring how technology transforms community learning and development." },
    { category: "innovation", url: "https://www.youtube.com/embed/PXp59FDQ_3o", thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop", badge: "bg-green-100 text-green-700", title: "Preserving Learning in the Age of AI", desc: "Harvard discussion on innovation in education and preserving critical thinking skills." },
  ];

  const filteredVideos = videoFilter === "all" ? videos : videos.filter((v) => v.category === videoFilter);
  const filteredGallery = galleryFilter === "all" ? galleryItemsData : galleryItemsData.filter((g) => g.categories.includes(galleryFilter));

  return (
    <>
      {/* Achievements */}
      <AchievementsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Video Portfolio */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Video Portfolio
            </h2>
            <p className="text-lg text-slate-600">
              Insights, experiences, and highlights from my journey.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: "all", label: "All Videos" },
              { key: "business", label: "Business" },
              { key: "community", label: "Community" },
              { key: "innovation", label: "Innovation" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setVideoFilter(f.key)}
                className={`video-filter-btn px-6 py-3 rounded-full font-semibold transition-all ${videoFilter === f.key ? "active bg-slate-900 text-white" : "bg-white text-slate-900 hover:bg-slate-100"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((v) => (
              <div
                key={v.title}
                className="video-item bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => setVideoModal({ open: true, url: v.url })}
              >
                <div className="aspect-video bg-slate-900 relative group">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="fas fa-play text-white ml-1"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 ${v.badge} rounded-full text-xs font-semibold mb-3 capitalize`}>
                    {v.category}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-slate-600">
              Moments from team events, professional engagements, and community
              initiatives.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: "all", label: `All Photos`, count: 11, icon: "fas fa-images" },
              { key: "team", label: "Team", icon: "fas fa-users" },
              { key: "events", label: "Events", icon: "fas fa-calendar-alt" },
              { key: "leadership", label: "Leadership", icon: "fas fa-user-tie" },
              { key: "community", label: "Community", icon: "fas fa-hands-helping" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setGalleryFilter(f.key)}
                className={`gallery-filter-btn px-6 py-3 rounded-full font-semibold transition-all ${galleryFilter === f.key ? "active bg-slate-900 text-white" : "bg-white text-slate-900 hover:bg-slate-100 border border-slate-200"}`}
              >
                <i className={`${f.icon} mr-2`}></i>
                {f.label} {f.key === "all" ? `(${f.count})` : ""}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredGallery.map((item) => (
              <div
                key={item.src}
                className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  setLightboxIndex(galleryData.findIndex((g) => g.src === item.src));
                  setLightboxOpen(true);
                }}
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-overlay"></div>
                <div className="gallery-caption">
                  <div className="font-bold text-white text-sm">
                    {item.title}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {item.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 bg-white/20 rounded text-xs text-white"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Hub */}
      <SocialHubSection />

      {/* Apps */}
      <AppsSection />

      {/* Video Modal */}
      <VideoModal
        videoUrl={videoModal.url}
        isOpen={videoModal.open}
        onClose={() => setVideoModal({ open: false, url: "" })}
      />

      {/* Lightbox */}
      <Lightbox
        images={galleryData}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

function AchievementsSection() {
  const stats = [
    { icon: "fas fa-users", gradient: "from-cyan-500 to-blue-600", color: "text-cyan-400", value: "100+", label: "Students Placed" },
    { icon: "fas fa-handshake", gradient: "from-purple-500 to-pink-600", color: "text-purple-400", value: "50+", label: "Business Partnerships" },
    { icon: "fas fa-language", gradient: "from-red-500 to-orange-600", color: "text-red-400", value: "500+", label: "Interpretation Sessions" },
    { icon: "fas fa-percent", gradient: "from-green-500 to-teal-600", color: "text-green-400", value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Achievements & Impact
          </h2>
          <p className="text-lg text-slate-300">
            Making a measurable difference across communities and businesses.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${s.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}
              >
                <i className={`${s.icon} text-white text-3xl`}></i>
              </div>
              <div className={`text-5xl font-bold ${s.color} mb-2 stat-number`}>
                {s.value}
              </div>
              <div className="text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { initials: "AK", gradient: "from-cyan-500 to-blue-600", name: "Ahmed Khan", role: "Student, Bangladesh", text: "Ouma's guidance was instrumental in helping me secure a CSC scholarship to Nanjing University. His insights from personal experience made all the difference!" },
    { initials: "RJ", gradient: "from-purple-500 to-pink-600", name: "Rajesh Joshi", role: "CEO, Import Co.", text: "Professional interpretation services during our business negotiations in China. Ouma's cultural understanding and language skills were invaluable." },
    { initials: "SP", gradient: "from-red-500 to-orange-600", name: "Sita Patel", role: "Student, India", text: "From application to visa, Ouma supported me every step of the way. Now I'm studying at Peking University with full scholarship!" },
    { initials: "MO", gradient: "from-green-500 to-teal-600", name: "Michael Osei", role: "Entrepreneur, Ghana", text: "Excellent business consulting services. Ouma helped us establish valuable partnerships in China and navigate the market effectively." },
    { initials: "LC", gradient: "from-blue-500 to-indigo-600", name: "Linda Chen", role: "Director, Tech Corp", text: "Professional document translation for our company's expansion into China. Accurate, timely, and culturally appropriate. Highly recommend!" },
    { initials: "DM", gradient: "from-yellow-500 to-orange-600", name: "Dr. Maria Santos", role: "Government Official", text: "Ouma provided exceptional interpretation during our government delegation's visit to China. His professionalism and accuracy were outstanding." },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-slate-600">
            Testimonials from satisfied clients and partners.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className="fas fa-star text-yellow-400"
                  ></i>
                ))}
              </div>
              <p className="text-slate-600 italic mb-4 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold mr-3`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialHubSection() {
  const platforms = [
    { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta", name: "Instagram", handle: "@oumage", hoverBorder: "hover:border-pink-300", hoverBg: "hover:bg-pink-50" },
    { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube", name: "YouTube", handle: "@oumage", hoverBorder: "hover:border-red-300", hoverBg: "hover:bg-red-50" },
    { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin", name: "LinkedIn", handle: "Ouma Ge", hoverBorder: "hover:border-blue-300", hoverBg: "hover:bg-blue-50" },
    { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", bg: "badge-fb", name: "Facebook", handle: "Ouma Ge", hoverBorder: "hover:border-blue-400", hoverBg: "hover:bg-blue-50" },
    { href: "https://www.tiktok.com/@oumage", icon: "fab fa-tiktok", bg: "badge-tiktok", name: "TikTok", handle: "@oumage", hoverBorder: "hover:border-slate-400", hoverBg: "hover:bg-slate-50" },
    { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]", name: "WhatsApp", handle: "Chat Direct", hoverBorder: "hover:border-green-300", hoverBg: "hover:bg-green-50" },
  ];

  return (
    <section id="social-hub" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="pill-label bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 mb-5">
            <i className="fas fa-hashtag"></i>Social Media Hub
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Follow My Journey
            <span className="block text-gradient">
              Across Every Platform
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Behind-the-scenes content, student success moments, business
            insights, and community highlights — all in one place.
          </p>
        </div>

        <div className="fade-up mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-slate-100 ${p.hoverBorder} ${p.hoverBg} transition-all shadow-sm hover-lift`}
              >
                <div
                  className={`w-12 h-12 ${p.bg} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <i className={`${p.icon} text-white text-xl`}></i>
                </div>
                <span className="font-bold text-xs text-slate-700">
                  {p.name}
                </span>
                <span className="text-xs text-slate-400">{p.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Feed */}
        <SocialFeed />

        {/* CTA */}
        <div className="fade-up bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, #818cf8 0%, transparent 60%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-2">
                Stay Connected. Never Miss an Update.
              </h3>
              <p className="text-slate-400 max-w-xl">
                Follow on your preferred platform for daily scholarship tips,
                student success stories, business insights, and behind-the-scenes
                moments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              {[
                { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta" },
                { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube" },
                { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin" },
                { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 ${s.bg} text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity`}
                >
                  <i className={s.icon}></i>
                  {s.bg === "badge-insta" ? "Instagram" : s.bg === "badge-youtube" ? "YouTube" : s.bg === "badge-linkedin" ? "LinkedIn" : "WhatsApp"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialFeed() {
  const posts = [
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/fhsxWmGnpYgqQReYv67FpW/IMG_5845.jpeg", badge: "badge-insta", badgeIcon: "fab fa-instagram", span: "col-span-2 row-span-2", h: "320px", caption: "Proud moment at the Kunming Innovation &amp; Entrepreneurship Contest" },
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg", badge: "badge-youtube", badgeIcon: "fab fa-youtube", span: "", h: "176px", caption: "Media interview — sharing insights on international business 🎤" },
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg", badge: "badge-linkedin", badgeIcon: "fab fa-linkedin-in", span: "", h: "176px", caption: "Team meeting — planning next scholarship cycle 🇨🇳" },
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg", badge: "badge-fb", badgeIcon: "fab fa-facebook-f", span: "", h: "176px", caption: "On-site with CRCC Bangladesh — bridging nations through language 🌏" },
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/Lx4dXNySxGDhApTTeTUWAP/IMG_0009.jpeg", badge: "badge-insta", badgeIcon: "fab fa-instagram", span: "", h: "176px", caption: "Every student's journey to China starts with one conversation ✨" },
    { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", badge: "badge-tiktok", badgeIcon: "fab fa-tiktok", span: "", h: "176px", caption: "Celebrating cultural diversity — our strength is our differences 🌈" },
  ];

  return (
    <div className="fade-up mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-bold text-xl text-slate-900">
          <i className="fas fa-rss text-pink-500 mr-2"></i>Latest Posts &
          Moments
        </h3>
        <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          Live social feed - Updated regularly
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className={`social-post ${post.span} bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100`}
          >
            <div
              className="post-media relative overflow-hidden"
              style={{ height: post.h }}
            >
              <img
                src={post.src}
                alt="Post"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`${post.badge} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}
                >
                  <i className={post.badgeIcon}></i>
                  {post.span ? " Instagram" : ""}
                </span>
              </div>
              {post.span && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p
                    className="text-white text-sm font-semibold"
                    dangerouslySetInnerHTML={{ __html: post.caption }}
                  />
                </div>
              )}
            </div>
            {!post.span && (
              <div className="p-3">
                <p
                  className="text-xs text-slate-700 font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: post.caption }}
                />
                <div className="flex items-center gap-3 text-slate-400">
                  <button className="flex items-center gap-1 text-xs hover:text-red-500 transition-colors">
                    <i className="far fa-heart"></i>
                    <span>{[248, 127, 89, 156, 312, 201][idx]}</span>
                  </button>
                </div>
              </div>
            )}
            {post.span && (
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://cdn-ai.onspace.ai/onspace/project/uploads/6UA3dBD3YxsEfQYJGSo8Aj/mmexport1777416047301.jpg"
                    alt="Ouma Ge"
                    className="w-8 h-8 rounded-full object-cover bg-white border border-slate-200"
                  />
                  <div>
                    <span className="font-bold text-sm text-slate-900">
                      oumage
                    </span>
                    <span className="text-xs text-slate-400 ml-2">· 2h ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-slate-500">
                  <button className="flex items-center gap-1.5 text-sm hover:text-red-500 transition-colors">
                    <i className="far fa-heart"></i>
                    <span>248</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm hover:text-blue-500 transition-colors">
                    <i className="far fa-comment"></i>
                    <span>43</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm hover:text-green-500 transition-colors">
                    <i className="fas fa-share-nodes"></i>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AppsSection() {
  return (
    <section
      id="apps"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, #22c55e 0%, transparent 45%), radial-gradient(circle at 85% 30%, #0ea5e9 0%, transparent 40%)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(34,197,94,0.12)",
              color: "#86efac",
              border: "1px solid rgba(34,197,94,0.22)",
            }}
          >
            <i className="fas fa-rocket mr-1"></i>Apps &amp; Software
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            My <span className="text-gradient">Apps &amp; Products</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Software tools and applications I've built to solve real-world
            problems. More products launching soon.
          </p>
        </div>

        {/* Featured App: Gege Wallet */}
        <div className="fade-up mb-10">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg,#0d2040 0%,#0a1628 60%,#0d2c1a 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(34,197,94,0.07)" }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(14,165,233,0.07)" }}
            ></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border border-green-500/30"
                    style={{
                      background:
                        "linear-gradient(135deg,#16a34a,#22c55e)",
                    }}
                  >
                    <i className="fas fa-wallet text-white text-2xl"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold text-2xl text-white">
                        GeGe Wallet
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          background: "rgba(34,197,94,0.2)",
                          color: "#86efac",
                          border: "1px solid rgba(34,197,94,0.3)",
                        }}
                      >
                        LIVE
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Smart Personal Finance &amp; Budget Tracker
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                  GeGe Wallet is a powerful personal finance management web app
                  designed for Bangladesh. Track income and expenses, manage
                  budgets, visualize spending patterns, and take full control of
                  your financial life — all in one clean, intuitive dashboard.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: "fas fa-chart-pie", color: "text-green-400", title: "Budget Tracking", desc: "Income & expenses" },
                    { icon: "fas fa-taka-sign", color: "text-yellow-400", title: "BDT Support", desc: "Bangladesh Taka" },
                    { icon: "fas fa-mobile-alt", color: "text-cyan-400", title: "PWA App", desc: "Install on any device" },
                    { icon: "fas fa-shield-alt", color: "text-blue-400", title: "Secure & Private", desc: "Your data is safe" },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/10"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <i
                        className={`${f.icon} ${f.color} text-lg flex-shrink-0`}
                      ></i>
                      <div>
                        <div className="text-white text-xs font-bold">
                          {f.title}
                        </div>
                        <div className="text-slate-500 text-xs">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://gege-wallet.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-bold text-sm shadow-xl transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg,#22c55e,#16a34a)",
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i>Open Web App
                  </a>
                  <a
                    href="https://gege-wallet.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border border-white/20 hover:bg-white/10"
                    style={{
                      color: "#fff",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <i className="fas fa-download"></i>Install App
                  </a>
                </div>
                <p className="text-slate-500 text-xs mt-3">
                  <i className="fas fa-info-circle mr-1"></i>Available as a
                  Progressive Web App (PWA) — install directly from your browser
                  on iOS, Android, or Desktop.
                </p>
              </div>
              <div
                className="relative flex items-end justify-center lg:justify-end p-8 sm:p-12 lg:pr-0 overflow-hidden"
                style={{ background: "rgba(0,0,0,0.15)" }}
              >
                <div className="relative w-full max-w-xs lg:max-w-sm">
                  <div
                    className="rounded-t-2xl px-4 py-3 flex items-center gap-2"
                    style={{
                      background: "#1e293b",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderBottom: "none",
                    }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                    </div>
                    <div
                      className="flex-1 mx-2 px-3 py-1 rounded-md text-xs text-slate-400 text-center"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      gege-wallet.web.app
                    </div>
                  </div>
                  <div
                    className="rounded-b-2xl overflow-hidden border border-white/8"
                    style={{ borderTop: "none" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=700&fit=crop"
                      alt="GeGe Wallet"
                      className="w-full object-cover"
                      style={{ maxHeight: "380px" }}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background:
                          "linear-gradient(to top, #0a1628, transparent)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Apps */}
        <div className="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-display font-bold text-lg text-white">
              <i className="fas fa-plus-circle text-green-400 mr-2"></i>More
              Apps Coming Soon
            </h3>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.08)" }}
            ></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "fas fa-graduation-cap", title: "Scholarship Tracker", desc: "CSC application manager & scholarship deadline tracker for students." },
              { icon: "fas fa-language", title: "Chinese Language App", desc: "Learn Mandarin Chinese with lessons tailored for South Asian learners." },
              { icon: "fas fa-briefcase", title: "Business CRM Tool", desc: "Client management & deal-tracking tool for cross-border business teams." },
            ].map((app) => (
              <div
                key={app.title}
                className="rounded-2xl p-6 border border-white/8 flex items-start gap-4"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <i className={`${app.icon} text-slate-500 text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-sm">
                      {app.title}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        background: "rgba(251,191,36,0.15)",
                        color: "#fbbf24",
                      }}
                    >
                      Soon
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up mt-10 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <i className="fas fa-bell text-green-400"></i>
            <span className="text-slate-300 text-sm">
              Want early access to new apps?
            </span>
            <button
              className="px-5 py-2 rounded-full text-white font-bold text-sm transition-all"
              style={{
                background: "linear-gradient(135deg,#22c55e,#16a34a)",
              }}
            >
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
