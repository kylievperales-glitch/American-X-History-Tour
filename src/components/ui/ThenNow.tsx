"use client";

import { useState } from "react";
import type { PhotoRef } from "@/data/types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Eyebrow } from "./Eyebrow";

// Then/Now comparison (brief section 14). Desktop: drag a slider to reveal
// archival vs. present-day. Mobile: the two images stack — dragging a
// slider on a touchscreen next to route content isn't worth the friction.

export function ThenNow({
  archival,
  modern,
  label,
}: {
  archival: PhotoRef;
  modern: PhotoRef;
  label?: string;
}) {
  const [percent, setPercent] = useState(50);

  return (
    <div className="w-full">
      {label && <Eyebrow className="mb-4">{label}</Eyebrow>}

      {/* Desktop / tablet: draggable comparison. `modern` is the full-bleed
          base layer; `archival` is clipped to reveal only its left portion
          (0 to `percent`%) — so dragging right grows the "Then" side from
          the left, matching the Then/Now label positions below. Swapping
          which photo is the base vs. the clipped overlay flips which side
          the reveal grows from; get this backwards and the labels end up
          pointing at the wrong photo. */}
      <div className="relative hidden aspect-[3/2] w-full overflow-hidden sm:block">
        <PhotoPlaceholder photo={modern} className="absolute inset-0 h-full w-full" />
        <div
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <PhotoPlaceholder photo={archival} className="h-full w-full" />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-accent"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-fill text-white">
            <span aria-hidden className="text-xs">
              ↔
            </span>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          aria-label={`Comparison slider between ${archival.subject} and ${modern.subject}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <span className="absolute top-3 left-3 bg-ink/70 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-white">
          Then
        </span>
        <span className="absolute top-3 right-3 bg-ink/70 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-white">
          Now
        </span>
      </div>

      {/* Mobile: stacked */}
      <div className="grid grid-cols-1 gap-3 sm:hidden">
        <div className="relative">
          <PhotoPlaceholder photo={archival} className="w-full" />
          <span className="absolute top-3 left-3 bg-ink/70 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-white">
            Then
          </span>
        </div>
        <div className="relative">
          <PhotoPlaceholder photo={modern} className="w-full" />
          <span className="absolute top-3 left-3 bg-ink/70 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-white">
            Now
          </span>
        </div>
      </div>
    </div>
  );
}
