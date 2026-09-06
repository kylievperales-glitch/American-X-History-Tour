import type { PhotoRef } from "@/data/types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { cn } from "@/lib/cn";

// Documented photography, not decoration (brief section 35). Wraps
// PhotoPlaceholder in a <figure> with a small editorial caption line —
// location, year, credit — for use anywhere a photo needs to read as
// sourced history rather than a generic image slot.

export function ArchiveImage({
  photo,
  location,
  year,
  rotate,
  className,
}: {
  photo: PhotoRef;
  location?: string;
  year?: string;
  rotate?: number;
  className?: string;
}) {
  const captionLine = [location, year].filter(Boolean).join(" — ");
  return (
    <figure className={cn("w-full", className)}>
      <PhotoPlaceholder photo={photo} rotate={rotate} className="w-full" />
      {(captionLine || photo.credit) && (
        <figcaption className="mt-2.5 flex items-baseline justify-between gap-3 font-sans text-[10px] uppercase tracking-[0.12em] text-muted">
          {captionLine && <span>{captionLine}</span>}
          {photo.credit && <span className="text-muted/70">{photo.credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
