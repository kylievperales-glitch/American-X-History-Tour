"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { cn } from "@/lib/cn";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";
import { GALLERY_CATEGORIES } from "@/data/gallery";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory],
  );

  const openLightbox = (index: number, el: HTMLElement) => {
    triggerRef.current = el;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : Math.min(i + 1, filtered.length - 1)));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {(["All", ...GALLERY_CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={cn(
              "border px-4 py-2 font-sans text-xs uppercase tracking-[0.12em] transition-colors",
              activeCategory === cat
                ? "border-transparent bg-accent-fill text-black text-shadow-gold-button shine-gold-button"
                : "border-charcoal-line text-muted-strong hover:border-accent hover:text-accent",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={(e) => openLightbox(index, e.currentTarget)}
            className="mb-4 block w-full break-inside-avoid text-left"
          >
            <PhotoPlaceholder photo={item} className="w-full transition-opacity hover:opacity-90" />
            <p className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.1em] text-muted">
              {item.location} &middot; {item.year}
            </p>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 font-serif text-muted-strong">No images in this category yet.</p>
      )}

      {/* Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.subject} — enlarged view`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close enlarged image"
            className="absolute top-5 right-5 font-sans text-3xl leading-none text-white hover:text-accent"
          >
            ×
          </button>

          {lightboxIndex! > 0 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => setLightboxIndex((i) => (i === null ? i : Math.max(i - 1, 0)))}
              className="absolute left-3 top-1/2 -translate-y-1/2 font-display text-3xl text-white hover:text-accent sm:left-6"
            >
              ‹
            </button>
          )}
          {lightboxIndex! < filtered.length - 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                setLightboxIndex((i) => (i === null ? i : Math.min(i + 1, filtered.length - 1)))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 font-display text-3xl text-white hover:text-accent sm:right-6"
            >
              ›
            </button>
          )}

          <div className="max-h-full max-w-2xl">
            <PhotoPlaceholder photo={activeItem} className="max-h-[75vh] w-full" />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 font-sans text-xs uppercase tracking-[0.12em] text-muted-strong">
              <span>{activeItem.category}</span>
              <span>
                {activeItem.location} &middot; {activeItem.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
