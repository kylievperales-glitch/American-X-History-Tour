import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { RouteStop } from "@/components/ui/RouteStop";
import { EventCTA } from "@/components/ui/EventCTA";
import { ROUTE_STOPS, ROUTE_DISTANCES } from "@/data/route";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "The Route",
  description:
    "A stylized guide to the American X History Tour route — from the Historic Hampton House in Brownsville, across the causeway, to Miami Beach.",
};

export default function RoutePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>From Brownsville To Miami Beach</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              Tour Through History
            </h1>
            <p className="font-serif mt-6 max-w-xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              The route connects places that shaped the story — from the
              Historic Hampton House to the site of the 1964 championship in
              Miami Beach.
            </p>
            <p className="mt-5 font-sans text-xs uppercase tracking-[0.14em] text-muted">
              {ROUTE_DISTANCES.short} option &middot; {ROUTE_DISTANCES.long} option
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stylized route diagram */}
      <section className="border-t border-charcoal-line bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <Reveal>
            <div className="overflow-x-auto pb-4">
              <div className="flex min-w-[900px] items-start gap-1">
                {ROUTE_STOPS.map((stop, i) => (
                  <a
                    key={stop.id}
                    href={`#${stop.id}`}
                    className="group flex flex-1 flex-col items-center gap-3 text-center"
                  >
                    <div className="flex w-full items-center">
                      <span
                        className={`h-px flex-1 bg-charcoal-line ${i === 0 ? "opacity-0" : ""}`}
                        aria-hidden
                      />
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent bg-ink font-display text-sm text-accent transition-colors group-hover:bg-accent-fill group-hover:text-white">
                        {stop.number}
                      </span>
                      <span
                        className={`h-px flex-1 bg-charcoal-line ${
                          i === ROUTE_STOPS.length - 1 ? "opacity-0" : ""
                        }`}
                        aria-hidden
                      />
                    </div>
                    <span className="max-w-[120px] font-sans text-[10px] uppercase tracking-[0.1em] text-muted-strong group-hover:text-accent">
                      {stop.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Route stops */}
      <section className="bg-ink pb-8">
        <div className="container-edit">
          {ROUTE_STOPS.map((stop, i) => (
            <RouteStop key={stop.id} stop={stop} isLast={i === ROUTE_STOPS.length - 1} />
          ))}
        </div>
      </section>

      <EventCTA
        title="Ready To Follow The Route?"
        lede="Experience these stops in person on the American X History Tour."
        primaryHref="/event"
        primaryLabel={CTA.primary}
        secondaryHref="/timeline"
        secondaryLabel={CTA.timeline}
      />
    </>
  );
}
