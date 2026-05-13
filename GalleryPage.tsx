import { useState } from "react";
import VideoModal from "../components/VideoModal";
import Lightbox from "../components/Lightbox";
import type { GalleryImage } from "../components/Lightbox";

const galleryImages: GalleryImage[] = [
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/Lx4dXNySxGDhApTTeTUWAP/IMG_0009.jpeg", title: "Professional Leadership Portrait", description: "A leadership moment captured during a professional engagement, showcasing dedication and vision.", categories: ["Leadership", "Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/49YwM4vvBhuobKy49b8GdR/79D12723-009A-402E-B80B-2423A56E2C2B_watermark.jpeg", title: "Team Collaboration Session", description: "Our diverse team working together on cross-border initiatives.", categories: ["Team", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nKhRb885DcC7eGxeW9Uisp/B5DFB85A-039D-4F65-B6F7-E3702F769DE7_watermark.jpeg", title: "Mentorship Moment", description: "Building strong relationships through mentorship and guidance.", categories: ["Team", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/9Ewej68yFggkWD9CBAvxDK/Image_2026-01-30_050238_958.jpg", title: "Cultural Event Presentation", description: "Presenting at a cultural event, bridging communities.", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", title: "Team in Traditional Attire", description: "Celebrating diversity with the team at a cultural celebration.", categories: ["Team", "Events"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/PbDSpyXBrXs9fFoTX93jt2/IMG_0056.jpeg", title: "Diverse Team Photo", description: "Embracing diversity as our greatest strength.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/jWM2eWyPam5kq94hEYTw7e/Image_2026-01-30_045954_964.jpg", title: "Team Building Activity", description: "Strengthening bonds through collaborative activities.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/bVPKaToHQWiZv3FY62kF4h/Image_2026-01-30_050209_892.jpg", title: "Entrepreneurial Moment", description: "Capturing the passion and drive behind our work.", categories: ["Leadership"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg", title: "Media Interview at Innovation Contest", description: "Media interview at the Kunming Innovation & Entrepreneurship Contest.", categories: ["Events", "Community"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg", title: "Team at Office", description: "Our dedicated team working together in the office environment.", categories: ["Team"] },
  { src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg", title: "Professional at CRCC Bangladesh Project", description: "Working on-site with China Railway Construction Corporation in Bangladesh.", categories: ["Leadership"] },
];

const videos = [
  { url: "https://www.youtube.com/embed/_uj7yAEc7cs", thumb: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop", title: "Strategic Considerations in Cross-Border M&A", category: "Business", desc: "Expert insights on strategic considerations in cross-border transactions." },
  { url: "https://www.youtube.com/embed/nJb0srmK8-Q", thumb: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop", title: "Digital Technology & Innovation in Education", category: "Community", desc: "How technology transforms community learning and development." },
  { url: "https://www.youtube.com/embed/PXp59FDQ_3o", thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop", title: "Preserving Learning in the Age of AI", category: "Innovation", desc: "Harvard discussion on innovation in education." },
];

export default function GalleryPage() {
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [videoFilter, setVideoFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModal, setVideoModal] = useState({ open: false, url: "" });

  const filteredImages = galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.categories.includes(galleryFilter));

  const filteredVideos = videoFilter === "all" ? videos : videos.filter((v) => v.category === videoFilter);

  return (
    <>
      {/* Video Portfolio */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="pill-label bg-indigo-100 text-indigo-700 mb-5">
              <i className="fas fa-video"></i>&nbsp;Video Portfolio
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Watch, Learn & Be Inspired
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From business strategy talks to educational content and community
              moments — a curated collection of videos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["all", "Business", "Community", "Innovation"].map((f) => (
              <button
                key={f}
                onClick={() => setVideoFilter(f)}
                className={`video-filter-btn px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${videoFilter === f ? "active bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((v) => (
              <div
                key={v.title}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setVideoModal({ open: true, url: v.url })}
              >
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <i className="fas fa-play text-white ml-0.5"></i>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                    {v.category}
                  </div>
                  <h3 className="text-white font-bold text-sm">{v.title}</h3>
                  <p className="text-slate-300 text-xs mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="pill-label bg-green-100 text-green-700 mb-5">
              <i className="fas fa-camera"></i>&nbsp;Photo Gallery
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Moments & Memories
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Scroll through highlights of professional engagements, community
              events, and personal milestones.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { key: "all", label: `All Photos (${galleryImages.length})`, icon: "fas fa-images" },
              { key: "Team", label: "Team", icon: "fas fa-users" },
              { key: "Events", label: "Events", icon: "fas fa-calendar-alt" },
              { key: "Leadership", label: "Leadership", icon: "fas fa-user-tie" },
              { key: "Community", label: "Community", icon: "fas fa-hands-helping" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setGalleryFilter(f.key)}
                className={`gallery-filter-btn px-5 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${galleryFilter === f.key ? "active bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"}`}
              >
                <i className={f.icon}></i>
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredImages.map((img, idx) => (
              <div
                key={img.src}
                className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-overlay"></div>
                <div className="gallery-caption">
                  <div className="font-bold text-white text-sm">
                    {img.title}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {img.categories.map((cat) => (
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

      <VideoModal
        videoUrl={videoModal.url}
        isOpen={videoModal.open}
        onClose={() => setVideoModal({ open: false, url: "" })}
      />
      <Lightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
