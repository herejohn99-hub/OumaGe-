export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/8801747561098"
      target="_blank"
      rel="noopener noreferrer"
      id="float-contact"
      className="float-cta fixed bottom-6 right-5 z-40 flex items-center gap-2.5 text-white px-5 py-3 rounded-full shadow-2xl transition-all"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-xl"></i>
      <span className="font-bold text-sm hidden sm:inline">WhatsApp</span>
    </a>
  );
}
