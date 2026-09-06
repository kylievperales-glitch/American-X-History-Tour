import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/Button";
import { EventCTA } from "@/components/ui/EventCTA";
import { PARTICIPATION_WAYS, EVENT_DETAILS, EVENT_INTRO } from "@/data/event";
import { ROUTE_DISTANCES } from "@/data/route";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "What it means to take part in the American X History Tour — ways to participate, the route options, and current event details.",
};

const infoRows: Array<{ label: string; value: string }> = [
  { label: "Date", value: EVENT_DETAILS.date },
  { label: "Start Time", value: EVENT_DETAILS.startTime },
  { label: "Start Location", value: EVENT_DETAILS.startLocation },
  { label: "Finish", value: EVENT_DETAILS.finishLocation },
  { label: `${ROUTE_DISTANCES.short} Option`, value: EVENT_DETAILS.shortOption },
  { label: `${ROUTE_DISTANCES.long} Option`, value: EVENT_DETAILS.longOption },
  { label: "Registration", value: EVENT_DETAILS.registrationUrl },
  { label: "Cost", value: EVENT_DETAILS.cost },
];

export default function EventPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>What Is American X History?</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              The Experience
            </h1>
            <p className="font-serif mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              {EVENT_INTRO}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ways to participate */}
      <section className="border-t border-charcoal-line bg-paper py-20 text-black sm:py-28">
        <div className="container-edit">
          <SectionIntro tone="light" eyebrow="Ways To Participate" title="Walk. Run. Roll. Ride. Volunteer. Cheer." />
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-paper-line bg-paper-line sm:grid-cols-3 lg:grid-cols-6">
            {PARTICIPATION_WAYS.map((way) => (
              <div key={way.id} className="flex flex-col gap-2 bg-paper p-6">
                <span className="font-display text-2xl text-accent">{way.label}</span>
                <span className="font-sans text-xs leading-snug text-muted-on-light">
                  {way.description}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/route">{CTA.route}</CTAButton>
            <CTAButton href="/timeline" variant="secondary">
              {CTA.timeline}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Event information */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="container-edit">
          <SectionIntro eyebrow="Event Information" title="Logistics" />
          <dl className="mt-12 max-w-2xl divide-y divide-charcoal-line border-y border-charcoal-line">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-4"
              >
                <dt className="font-sans text-xs uppercase tracking-[0.14em] text-muted">
                  {row.label}
                </dt>
                <dd className="font-serif text-base text-muted-strong">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <EventCTA
        title="Join The Experience."
        lede="Register, volunteer, or simply show up — every part of the tour matters."
        primaryHref={EVENT_DETAILS.registrationUrl === "[REGISTRATION URL]" ? "/event" : EVENT_DETAILS.registrationUrl}
        primaryLabel={CTA.primary}
        secondaryHref="/partners"
        secondaryLabel={CTA.partner}
      />
    </>
  );
}
