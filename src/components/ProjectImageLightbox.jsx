import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, Minimize2, X } from "lucide-react";

export const ProjectImageLightbox = ({ image, lang, onClose }) => {
  const [isFullView, setIsFullView] = useState(false);

  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        className={`relative flex flex-col ${
          isFullView ? "h-full w-full" : "max-h-[90vh] w-full max-w-6xl"
        }`}
      >
        <div className="mb-3 flex shrink-0 justify-end gap-2">
          <button
            type="button"
            onClick={() => setIsFullView((current) => !current)}
            aria-label={
              isFullView
                ? lang === "en"
                  ? "Exit full view"
                  : "Keluar dari tampilan penuh"
                : lang === "en"
                  ? "Full view"
                  : "Tampilan penuh"
            }
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
          >
            {isFullView ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
            {isFullView
              ? lang === "en"
                ? "Exit full view"
                : "Keluar tampilan penuh"
              : lang === "en"
                ? "Full view"
                : "Lihat penuh"}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === "en" ? "Close image" : "Tutup gambar"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <img
          src={image.src}
          alt={image.alt}
          className={`min-h-0 w-full rounded-xl object-contain ${
            isFullView ? "flex-1" : "max-h-[calc(90vh-4rem)]"
          }`}
        />
      </div>
    </div>,
    document.body,
  );
};
