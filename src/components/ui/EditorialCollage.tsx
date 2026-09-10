import type { PhotoRef } from "@/data/types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

// Art-directed collage moments (brief section 6 & 34). Four fixed templates
// rather than an open-ended positioning engine — keeps every collage on the
// site looking intentional instead of scrapbook-random. Each template
// recomposes to a simple stack on mobile.

export type CollageCaption = { text: string; sublabel?: string };

type BaseProps = { className?: string };

/** Layout A — one oversized image + two smaller stacked images. */
export function CollageHugePlusTwo({
  hero,
  heroCaption,
  small,
  className,
}: BaseProps & {
  hero: PhotoRef;
  heroCaption?: CollageCaption;
  small: [PhotoRef, PhotoRef];
}) {
  return (
    <Reveal className={cn("grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5", className)}>
      <div className="relative md:col-span-3">
        <PhotoPlaceholder photo={hero} className="w-full" rotate={-1} />
        {heroCaption && (
          <div className="absolute bottom-4 left-4 bg-ink/75 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.16em] text-white">
            {heroCaption.text}
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-1">
        <PhotoPlaceholder photo={small[0]} className="w-full" rotate={2} />
        <PhotoPlaceholder photo={small[1]} className="w-full self-end" rotate={-2} />
      </div>
    </Reveal>
  );
}

/** Layout B — three staggered portraits with location labels. */
export function CollageStaggeredThree({
  items,
  className,
}: BaseProps & {
  items: [
    { photo: PhotoRef; caption: string },
    { photo: PhotoRef; caption: string },
    { photo: PhotoRef; caption: string },
  ];
}) {
  const offsets = ["md:mt-0", "md:mt-10", "md:mt-4"];
  const rotations = [-2, 1.5, -1];
  return (
    <Reveal className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
      {items.map((item, i) => (
        <div key={item.caption} className={cn("relative", offsets[i])}>
          <PhotoPlaceholder photo={item.photo} className="w-full" rotate={rotations[i]} />
          <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.16em] text-muted-strong">
            {item.caption}
          </p>
        </div>
      ))}
    </Reveal>
  );
}

/** Layout C — vertical photo + a big date/quote mark + small landscape. */
export function CollageVerticalWithMark({
  vertical,
  mark,
  landscape,
  className,
}: BaseProps & {
  vertical: PhotoRef;
  mark: string; // short date or phrase, rendered huge
  landscape: PhotoRef;
}) {
  return (
    <Reveal
      className={cn(
        "grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8",
        className,
      )}
    >
      <PhotoPlaceholder photo={vertical} className="w-full" rotate={-1.5} />
      <div className="font-display text-metallic-gold text-center text-6xl leading-none sm:text-7xl md:text-8xl">
        {mark}
      </div>
      <PhotoPlaceholder photo={landscape} className="w-full self-end" rotate={1.5} />
    </Reveal>
  );
}

/**
 * Layout D — two overlapping archival photos with a date annotation.
 *
 * `front` is clamped to `bottom-0` (never a negative offset) inside an
 * inner box that reserves extra height via `pb-[32%]`. That guarantees
 * front's own bottom edge never extends past the inner box, no matter its
 * aspect ratio — so the captions, as normal-flow content directly after
 * that box, can never collide with it. (An earlier version tried to
 * reserve space by guessing a fixed padding on the whole component while
 * `front` hung past the box on a negative offset — that broke as soon as
 * a real photo's rendered height didn't match the guess.)
 */
export function CollageOverlapDate({
  back,
  front,
  date,
  frontCaption,
  backCaption,
  className,
}: BaseProps & {
  back: PhotoRef;
  front: PhotoRef;
  date: string;
  frontCaption?: string;
  backCaption?: string;
}) {
  return (
    <Reveal className={cn("mx-auto w-full max-w-md md:max-w-lg", className)}>
      <div className="relative pb-[32%]">
        <div className="relative">
          <PhotoPlaceholder photo={back} className="w-full" rotate={2} />
          {backCaption && (
            <p className="absolute -bottom-11 right-2 max-w-[40%] text-right font-sans text-[10px] uppercase tracking-[0.16em] text-muted-strong">
              {backCaption}
            </p>
          )}
        </div>
        <div className="absolute -left-6 bottom-0 w-2/3 sm:-left-10">
          <PhotoPlaceholder photo={front} className="w-full" rotate={-3} />
        </div>
        <div className="font-display text-metallic-gold absolute -top-5 -right-2 text-2xl sm:-right-6 sm:text-3xl">
          {date}
        </div>
      </div>
      {frontCaption && (
        <div className="mt-5 -ml-6 space-y-1 font-sans text-[11px] uppercase tracking-[0.16em] text-muted-strong sm:-ml-10">
          <p>{frontCaption}</p>
        </div>
      )}
    </Reveal>
  );
}
