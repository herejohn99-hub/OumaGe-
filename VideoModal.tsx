import { useEffect, useRef } from "react";

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, isOpen, onClose }: VideoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && iframeRef.current) {
      iframeRef.current.src = "";
    }
  }, [isOpen]);

  return (
    <div
      className={`video-modal ${isOpen ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-5xl w-full mx-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-slate-900">
            <iframe
              ref={iframeRef}
              width="100%"
              height="100%"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
            >
              <i className="fas fa-times mr-2"></i>Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
