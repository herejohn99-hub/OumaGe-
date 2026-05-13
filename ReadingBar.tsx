import { useEffect } from "react";

export default function ReadingBar() {
  useEffect(() => {
    const rb = document.getElementById("reading-bar");
    if (!rb) return;
    const onScroll = () => {
      const d = document.body.scrollHeight - window.innerHeight;
      rb.style.width = (d > 0 ? (window.scrollY / d) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="reading-bar" />;
}
