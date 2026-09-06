import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { TimelineEntry } from "@/components/ui/TimelineEntry";
import { EventCTA } from "@/components/ui/EventCTA";
import { TIMELINE } from "@/data/timeline";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Key moments connecting Cassius Clay, Miami, the 1964 championship, and the American X History Tour — from 1960 to today.",
};

export default function TimelinePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>1964 → Today</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              The Timeline
            </h1>
            <p className="font-serif mt-6 max-w-xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              Not a full biography — the moments that connect Clay, Miami,
              and the route you can walk today. Select any entry to read
              more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-24 sm:pb-32">
        <div className="container-edit">
          <div className="mx-auto max-w-3xl">
            {TIMELINE.map((entry) => (
              <div key={entry.id} id={entry.id} className="scroll-mt-24">
                <TimelineEntry entry={entry} variant="full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventCTA
        title="See Where It Happened."
        lede="Several chapters of this timeline connect directly to places participants encounter along the tour."
        primaryHref="/route"
        primaryLabel={CTA.route}
        secondaryHref="/story"
        secondaryLabel={CTA.secondary}
      />
    </>
  );
}
