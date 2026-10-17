import type { RouteAnchor } from "@/data/route";
import { cn } from "@/lib/cn";

// Stylized, non-geographic summary of the 2027 route: known anchor points
// only, joined by a dashed line because the exact path isn't final.
// Horizontal from md up, vertical on phones.

export function RouteAnchors({
  anchors,
  className,
}: {
  anchors: RouteAnchor[];
  className?: string;
}) {
  return (
    <ol className={cn("grid grid-cols-1 gap-0 md:grid-cols-4", className)}>
      {anchors.map((anchor, i) => {
        const isFirst = i === 0;
        const isLast = i === anchors.length - 1;
        return (
          <li
            key={anchor.label}
            className="relative flex gap-5 pb-10 md:flex-col md:items-center md:gap-4 md:pb-0 md:text-center"
          >
            {/* connectors: vertical on mobile, horizontal on md+ */}
            {!isLast && (
              <span
                aria-hidden
                className="absolute top-11 bottom-0 left-[21px] border-l border-dashed border-accent-dim md:hidden"
              />
            )}
            <span aria-hidden className="hidden w-full items-center md:flex">
              <span
                className={cn("flex-1 border-t border-dashed border-accent-dim", isFirst && "opacity-0")}
              />
              <span className="h-11 w-11 shrink-0" />
              <span
                className={cn("flex-1 border-t border-dashed border-accent-dim", isLast && "opacity-0")}
              />
            </span>
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent bg-ink font-display text-sm text-accent md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:px-3">
              <p className="font-display text-xl text-white sm:text-2xl">{anchor.label}</p>
              <p className="mt-1 font-sans text-xs uppercase leading-relaxed tracking-[0.1em] text-muted">
                {anchor.detail}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
