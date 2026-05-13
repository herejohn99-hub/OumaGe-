import { useEffect, useState } from "react";

export interface GalleryImage {
  src: string;
  title: string;
  description: string;
  categories: string[];
}

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft")
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      else if (e.key === "ArrowRight")
        setCurrentIndex((i) => (i + 1) % images.length);
      else if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const image = images[currentIndex];

  return (
    <div
      className="lightbox active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-6xl w-full mx-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image.src}
            alt={image.title}
            className="w-full max-h-[70vh] object-contain"
          />
          <div className="p-6">
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              {image.title}
            </h3>
            <p className="text-slate-600 mb-4">{image.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {image.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold"
                >
                  <i className="fas fa-tag mr-1"></i>
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + images.length) % images.length
                    )
                  }
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
                >
                  <i className="fas fa-chevron-left mr-2"></i>Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % images.length)
                  }
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
                >
                  Next<i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                <i className="fas fa-times mr-2"></i>Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
