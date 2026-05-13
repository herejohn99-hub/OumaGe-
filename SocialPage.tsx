export default function SocialPage() {
  const platforms = [
    { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta", name: "Instagram", handle: "@oumage", followers: "2.4K" },
    { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube", name: "YouTube", handle: "@oumage", followers: "1.8K" },
    { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin", name: "LinkedIn", handle: "Ouma Ge", followers: "1.2K" },
    { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", bg: "badge-fb", name: "Facebook", handle: "Ouma Ge", followers: "3.1K" },
    { href: "https://www.tiktok.com/@oumage", icon: "fab fa-tiktok", bg: "badge-tiktok", name: "TikTok", handle: "@oumage", followers: "5.6K" },
    { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]", name: "WhatsApp", handle: "Chat Direct", followers: "Direct" },
  ];

  const posts = [
    { day: "Today", time: "· 2h ago", platform: "Instagram", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/fhsxWmGnpYgqQReYv67FpW/IMG_5845.jpeg", caption: "Proud moment at the Kunming Innovation &amp; Entrepreneurship Contest — representing Asical International and connecting with brilliant minds from across China! 🇨🇳✨", likes: 248, comments: 43 },
    { day: "Yesterday", time: "· 1d ago", platform: "YouTube", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/hDyGGCWxSu5favTxUUJhGC/IMG_5843.jpeg", caption: "Media interview at the Kunming Innovation Contest — sharing insights on cross-border business and cultural intelligence 🎤🌏", likes: 127, comments: 19 },
    { day: "2 days ago", time: "· 2d ago", platform: "LinkedIn", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/3kkFGWiAK9wpAfeX6C2jiw/IMG_5841.jpeg", caption: "Team meeting — planning the next scholarship cycle for 2026. Excited to help more students reach their dreams in China 🇨🇳📚", likes: 89, comments: 12 },
    { day: "3 days ago", time: "· 3d ago", platform: "Facebook", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/nhc5xDt4ebHBtJcBjDMhPp/IMG_5842.jpeg", caption: "On-site with CRCC Bangladesh — bridging nations through language and infrastructure 🌏🏗️", likes: 156, comments: 28 },
    { day: "4 days ago", time: "· 4d ago", platform: "Instagram", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/Lx4dXNySxGDhApTTeTUWAP/IMG_0009.jpeg", caption: "Every student's journey to China starts with one conversation. I'm here to make yours count ✨🎓", likes: 312, comments: 56 },
    { day: "5 days ago", time: "· 5d ago", platform: "TikTok", src: "https://cdn-ai.onspace.ai/onspace/project/uploads/gUXj4L3FzrwwRymhnjWT47/IMG_0221.jpeg", caption: "Celebrating cultural diversity — our strength is our differences 🌈🇨🇳", likes: 201, comments: 34 },
  ];

  const platformColor: Record<string, string> = {
    Instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
    YouTube: "bg-red-500",
    LinkedIn: "bg-blue-600",
    Facebook: "bg-blue-700",
    TikTok: "bg-slate-800",
    WhatsApp: "bg-green-500",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="pt-20 pb-12 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1a0a0a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, #ec4899 0%, transparent 50%), radial-gradient(circle at 70% 50%, #0ea5e9 0%, transparent 50%)",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-pink-300 text-sm font-bold mb-5">
            <i className="fas fa-hashtag"></i>Social Media Hub
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Connect &amp; Follow Ouma Ge
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">
            Stay updated across every platform — scholarships, business
            insights, and community moments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${p.bg} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <i className={`${p.icon} text-white text-2xl`}></i>
                </div>
                <span className="font-bold text-white">{p.name}</span>
                <span className="text-xs text-white/50">{p.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="pill-label bg-pink-100 text-pink-700 mb-5">
            <i className="fas fa-rss"></i>&nbsp;Latest Posts
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-4">
            Recent Posts & Updates
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Fresh content from across all platforms. Tap any post to view the
            full content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.src}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`${platformColor[post.platform]} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {post.platform}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 font-medium">
                    {post.day}
                  </span>
                  <span className="text-xs text-slate-400">{post.time}</span>
                </div>
                <p
                  className="text-sm text-slate-700 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: post.caption }}
                />
                <div className="flex items-center gap-4 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <i className="far fa-heart"></i>
                    {post.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-comment"></i>
                    {post.comments} comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <div
            className="inline-block rounded-2xl p-10 text-center max-w-3xl"
            style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Get Updates on Your Platform
            </h3>
            <p className="text-slate-300 mb-6">
              Follow for daily inspiration, scholarship tips, and behind-the-scenes content.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta" },
                { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube" },
                { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin" },
                { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", bg: "badge-fb" },
                { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 ${s.bg} text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity`}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
