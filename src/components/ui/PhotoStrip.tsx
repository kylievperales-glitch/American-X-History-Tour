import type { PhotoRef } from "@/data/types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { cn } from "@/lib/cn";

// A single narrow vertical photo with a caption underneath — the "torn
// document" caption strip referenced in brief section 6. Used as a small
// accent element alongside larger collage moments.

export function PhotoStrip({
  photo,
  caption,
  date,
  rotate = -1,
  className,
}: {
  photo: PhotoRef;
  caption?: string;
  date?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-[220px]", className)}>
      <PhotoPlaceholder photo={photo} rotate={rotate} className="w-full border-2 border-white/10" />
      {(caption || date) && (
        <div className="mt-2 flex items-baseline justify-between gap-2 border-t border-charcoal-line pt-2">
          {caption && (
            <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted-strong">
              {caption}
            </p>
          )}
          {date && <p className="font-display text-xs text-accent">{date}</p>}
        </div>
      )}
    </div>
  );
}
