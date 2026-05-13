import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "scholarship",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:contact@oumage.com?subject=${encodeURIComponent(formData.subject === "scholarship" ? "Scholarship Consultation" : formData.subject === "business" ? "Business Partnership" : "General Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="pt-16 pb-12 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #050d1a 0%, #0d2040 50%, #0d2c1a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, #22c55e 0%, transparent 45%), radial-gradient(circle at 70% 50%, #0ea5e9 0%, transparent 45%)",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-300 text-sm font-bold mb-5">
            <i className="fas fa-envelope"></i>Get in Touch
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Whether you're interested in studying in China, exploring business
            opportunities, or just want to connect — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                Contact Information
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Feel free to reach out through any of these channels. I typically
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "fas fa-envelope",
                  iconBg: "bg-cyan-100",
                  iconColor: "text-cyan-600",
                  label: "Email",
                  value: "contact@oumage.com",
                  href: "mailto:contact@oumage.com",
                },
                {
                  icon: "fas fa-phone",
                  iconBg: "bg-green-100",
                  iconColor: "text-green-600",
                  label: "Phone",
                  value: "+880 1747 561 098",
                  href: "tel:+8801747561098",
                },
                {
                  icon: "fab fa-whatsapp",
                  iconBg: "bg-green-100",
                  iconColor: "text-green-600",
                  label: "WhatsApp",
                  value: "+880 1747 561 098",
                  href: "https://wa.me/8801747561098",
                },
                {
                  icon: "fas fa-map-marker-alt",
                  iconBg: "bg-red-100",
                  iconColor: "text-red-600",
                  label: "Location",
                  value: "Nanjing, China",
                  href: null,
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`${c.icon} ${c.iconColor}`}></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-900">
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Follow Me</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { href: "https://www.instagram.com/oumage", icon: "fab fa-instagram", bg: "badge-insta" },
                  { href: "https://www.youtube.com/@oumage", icon: "fab fa-youtube", bg: "badge-youtube" },
                  { href: "https://www.linkedin.com/in/oumage", icon: "fab fa-linkedin-in", bg: "badge-linkedin" },
                  { href: "https://www.facebook.com/oumage", icon: "fab fa-facebook-f", bg: "badge-fb" },
                  { href: "https://www.tiktok.com/@oumage", icon: "fab fa-tiktok", bg: "badge-tiktok" },
                  { href: "https://wa.me/8801747561098", icon: "fab fa-whatsapp", bg: "bg-[#25D366]" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center py-3 ${s.bg} rounded-xl text-white hover:opacity-90 transition-opacity`}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-bolt text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Quick Response
                  </div>
                  <div className="text-xs text-slate-500">
                    I typically reply within 24 hours
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/8801747561098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-all"
              >
                <i className="fab fa-whatsapp"></i>Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10">
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                    >
                      <option value="scholarship">
                        🎓 Study in China Scholarship
                      </option>
                      <option value="business">
                        💼 Business Partnership
                      </option>
                      <option value="translation">
                        🌐 Translation Services
                      </option>
                      <option value="consulting">
                        📚 General Consulting
                      </option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-slate-900"
                    placeholder="Tell me about your goals, questions, or how I can help you..."
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-base hover:from-green-400 hover:to-green-500 transition-all shadow-lg"
                  >
                    <i className="fas fa-paper-plane"></i>Send Message
                  </button>
                  <a
                    href="https://wa.me/8801747561098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-base hover:bg-[#128C7E] transition-all shadow-lg"
                  >
                    <i className="fab fa-whatsapp"></i>WhatsApp Direct
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Quick answers to common questions.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does the scholarship application process take?", a: "The entire process typically takes 3-6 months from initial consultation to receiving your admission letter. CSC scholarship results are usually announced between June and July for September intake." },
              { q: "Do I need to know Chinese to study in China?", a: "Not necessarily! Many universities offer English-taught programs at the Master's and PhD levels. However, learning basic Chinese will greatly enhance your experience." },
              { q: "What documents do I need for the CSC scholarship?", a: "You'll need your passport, academic transcripts, degree certificates, recommendation letters, study plan, health certificate, and a non-criminal record. I guide you through each step." },
              { q: "Can you help with business partnerships in China?", a: "Absolutely! I specialize in connecting international businesses with Chinese partners, facilitating trade, and providing interpretation services for negotiations." },
              { q: "What languages do you provide interpretation in?", a: "I offer professional interpretation in Mandarin Chinese, English, Bengali, and Hindi — covering the major languages of business in Asia." },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-slate-900 pr-4">
                    {faq.q}
                  </h3>
                  <i className="fas fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
