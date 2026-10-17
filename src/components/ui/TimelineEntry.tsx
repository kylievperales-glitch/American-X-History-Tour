import Link from "next/link";
import type { TimelineEntry as TimelineEntryData } from "@/data/timeline";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { cn } from "@/lib/cn";

// Used on /timeline (variant="full", expandable via native <details> for
// built-in keyboard + screen reader support) and as the homepage teaser
// (variant="teaser", compact, no expansion). Gold dot marks every entry —
// the one place gold repeats down the page, everything else stays grayscale.

export function TimelineEntry({
  entry,
  variant = "full",
  className,
}: {
  entry: TimelineEntryData;
  variant?: "full" | "teaser";
  className?: string;
}) {
  if (variant === "teaser") {
    return (
      <div className={cn("relative pl-8", className)}>
        <span
          aria-hidden
          className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full bg-accent"
        />
        {entry.date && <p className="font-display text-sm text-muted-strong">{entry.date}</p>}
        <p className="font-serif mt-1 text-lg text-white">{entry.title}</p>
      </div>
    );
  }

  return (
    <details className={cn("group relative border-t border-charcoal-line py-8 pl-8", className)}>
      <span
        aria-hidden
        className="absolute top-[2.6rem] left-0 h-3 w-3 -translate-y-1/2 rounded-full bg-accent transition-transform group-open:scale-125"
      />
      <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-4 gap-y-1 [&::-webkit-details-marker]:hidden">
        {entry.date && (
          <span className="font-display text-metallic-gold text-lg sm:text-xl">{entry.date}</span>
        )}
        <span className="font-serif text-xl text-white sm:text-2xl">{entry.title}</span>
        {entry.location && (
          <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted">
            {entry.location}
          </span>
        )}
        <span
          aria-hidden
          className="ml-auto font-sans text-2xl text-muted-strong transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_320px]">
        <p className="font-serif max-w-[60ch] text-base leading-relaxed text-muted-strong">
          {entry.summary}
        </p>
        {entry.image && (
          <PhotoPlaceholder photo={entry.image} className="w-full sm:justify-self-end" />
        )}
      </div>
      {entry.relatedRouteStopId && (
        <Link
          href={`/route#${entry.relatedRouteStopId}`}
          className="mt-4 inline-block font-sans text-xs uppercase tracking-[0.14em] text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
        >
          See on route →
        </Link>
      )}
    </details>
  );
}
