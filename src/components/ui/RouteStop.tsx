import Link from "next/link";
import type { RouteStopData } from "@/data/route";
import type { AspectRatio } from "@/data/types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Eyebrow } from "./Eyebrow";

// Numeric width/height ratio per aspect, used to size the archival/modern
// photo columns proportionally so a mismatched pair (e.g. a portrait
// archival next to a landscape modern shot) still renders at equal height
// instead of a fixed 50/50 split leaving one photo much taller.
const ASPECT_RATIO: Record<AspectRatio, number> = {
  "3:2": 3 / 2,
  "4:5": 4 / 5,
  "16:9": 16 / 9,
  "1:1": 1,
  "2:3": 2 / 3,
  "9:16": 9 / 16,
};

export function RouteStop({ stop, isLast }: { stop: RouteStopData; isLast?: boolean }) {
  return (
    <article id={stop.id} className="scroll-mt-28 border-t border-charcoal-line py-14 sm:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[120px_1fr]">
        <div>
          <span className="font-display text-6xl leading-none text-accent sm:text-7xl">
            {stop.number}
          </span>
        </div>
        <div>
          <Eyebrow>{stop.era}</Eyebrow>
          <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">{stop.name}</h2>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.14em] text-muted">
            {stop.location}
          </p>
          <p className="font-serif mt-5 max-w-[60ch] text-base leading-relaxed text-muted-strong sm:text-lg">
            {stop.description}
          </p>

          {stop.whyItMatters && (
            <div className="mt-6 max-w-[55ch] border-l-2 border-accent pl-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-accent">
                Why It Matters
              </p>
              <p className="font-serif mt-2 text-sm leading-relaxed text-muted-strong">
                {stop.whyItMatters}
              </p>
            </div>
          )}

          {stop.archivalImage ? (
            <div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[var(--archival-w)_var(--modern-w)]"
              style={
                {
                  "--archival-w": `${ASPECT_RATIO[stop.archivalImage.aspect]}fr`,
                  "--modern-w": `${ASPECT_RATIO[stop.modernImage.aspect]}fr`,
                } as React.CSSProperties
              }
            >
              <PhotoPlaceholder photo={stop.archivalImage} className="w-full" />
              <PhotoPlaceholder photo={stop.modernImage} className="w-full" />
            </div>
          ) : (
            <div className="mt-8">
              <PhotoPlaceholder photo={stop.modernImage} className="w-full" />
            </div>
          )}

          {stop.relatedTimelineId && (
            <Link
              href={`/timeline#${stop.relatedTimelineId}`}
              className="mt-5 inline-block font-sans text-xs uppercase tracking-[0.14em] text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
            >
              See on timeline →
            </Link>
          )}

          {!isLast && (
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.14em] text-muted">
              Continue to next stop ↓
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
