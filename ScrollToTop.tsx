import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const st = document.getElementById("scroll-top");
    if (!st) return;
    const onScroll = () => {
      if (window.scrollY > 400) st.classList.add("show");
      else st.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    st.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="scroll-top"
      className="fixed bottom-24 right-5 z-40 w-11 h-11 text-white rounded-full shadow-xl flex items-center justify-center transition-all"
      style={{ background: "#0d1b2e" }}
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up text-sm"></i>
    </button>
  );
}
