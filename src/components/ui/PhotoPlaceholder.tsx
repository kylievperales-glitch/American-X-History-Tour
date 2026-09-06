import Image from "next/image";
import { cn } from "@/lib/cn";
import type { PhotoRef } from "@/data/types";

// Renders a real photo once PhotoRef.src is set; otherwise renders a clearly
// labeled placeholder describing exactly what belongs in the slot. This is
// the ONLY place image slots are drawn — swap real assets in by editing the
// relevant /src/data/*.ts file, never by touching this component.

const ASPECT_CLASS: Record<PhotoRef["aspect"], string> = {
  "3:2": "aspect-[3/2]",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-[16/9]",
  "1:1": "aspect-square",
  "2:3": "aspect-[2/3]",
  "9:16": "aspect-[9/16]",
};

type Props = {
  photo: PhotoRef;
  className?: string;
  rotate?: number; // degrees, for collage compositions (-3 to 3 recommended)
  priority?: boolean;
};

export function PhotoPlaceholder({ photo, className, rotate, priority }: Props) {
  if (photo.src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          ASPECT_CLASS[photo.aspect],
          className,
        )}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          className="object-cover"
          style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden border border-charcoal-line bg-charcoal p-4",
        ASPECT_CLASS[photo.aspect],
        className,
      )}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      role="img"
      aria-label={`Photo placeholder: ${photo.subject}`}
    >
      {/* diagonal hatch texture, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px)",
          color: "var(--color-muted)",
        }}
      />
      {/* role="img" above already gives this whole block one accessible
          name via aria-label — the visual text below is aria-hidden so
          screen readers don't announce it a second time. */}
      <div aria-hidden className="relative flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-strong">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        Photo Placeholder
      </div>
      <div aria-hidden className="relative">
        <p className="font-serif text-sm leading-snug text-white/80 sm:text-base">
          {photo.subject}
        </p>
        <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.14em] text-muted">
          {photo.aspect} &middot; {photo.label}
        </p>
      </div>
    </div>
  );
}
