import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/Button";
import { RouteStop } from "@/components/ui/RouteStop";
import { RouteAnchors } from "@/components/ui/RouteAnchors";
import { ProgramSchedule } from "@/components/ui/ProgramSchedule";
import { EventCTA } from "@/components/ui/EventCTA";
import { ROUTE_STOPS, ROUTE_2027_ANCHORS } from "@/data/route";
import { EVENT_2027, PROGRAM_2027 } from "@/data/event";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "The Route",
  description:
    "The 2027 American X History route in Miami Beach, finishing at Muhammad Ali Way — plus the past routes that connected the Historic Hampton House and Brownsville to Miami Beach.",
};

export default function RoutePage() {
  return (
    <>
      {/* ============ SECTION A — 2027 ROUTE ============ */}
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>The {EVENT_2027.year} Route</Eyebrow>
            <h1 className="font-display mt-5 max-w-4xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              Miami Beach — {EVENT_2027.dateShort}
            </h1>
            <p className="font-serif mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              The {EVENT_2027.year} American X History Xperience is planned around a
              shorter approximately one-mile jog/walk in Miami Beach, finishing at
              Muhammad Ali Way before returning to the Rum Room for boxing and
              conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2027 route summary — anchor points only, no street-level path */}
      <section className="border-t border-charcoal-line bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <Reveal>
            <RouteAnchors anchors={ROUTE_2027_ANCHORS} />
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="relative mt-14 flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-dashed border-charcoal-line bg-charcoal px-6 text-center sm:aspect-[21/9]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-charcoal-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-charcoal-line) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                backgroundPosition: "center",
              }}
            >
              <span className="bg-charcoal px-3 font-sans text-[10px] uppercase tracking-[0.2em] text-accent">
                {EVENT_2027.year} Route Map
              </span>
              <span className="font-display bg-charcoal px-3 text-3xl text-white sm:text-4xl">
                Final Path Coming Soon
              </span>
              <span className="font-serif max-w-md bg-charcoal px-3 text-sm text-muted-strong">
                The exact one-mile path through Miami Beach is still being
                finalized.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2027 program */}
      <section className="border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <div className="container-edit">
          <SectionIntro eyebrow={`The ${EVENT_2027.year} Program`} title="Planned Program" />
          <ProgramSchedule slots={PROGRAM_2027} note={EVENT_2027.programNote} className="mt-12 max-w-4xl" />
          <CTAButton href={EVENT_2027.registrationUrl} className="mt-10">
            {CTA.register}
          </CTAButton>
        </div>
      </section>

      {/* ============ SECTION B — PAST XPERIENCES ============ */}
      <section
        id="past-xperiences"
        className="scroll-mt-24 border-t border-charcoal-line bg-ink-soft py-20 sm:py-28"
      >
        <div className="container-edit">
          <SectionIntro
            eyebrow="Past Xperiences"
            title="Previous Routes Through Miami"
            lede="Previous editions of American X History connected Brownsville, mainland Miami, and Miami Beach through longer routes tied to Muhammad Ali’s Miami story. Route distances varied from year to year."
          />

          {/* Stylized past-route diagram */}
          <Reveal>
            <div className="mt-14 overflow-x-auto pb-4">
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

      {/* Past route stops */}
      <section className="bg-ink-soft pb-8">
        <div className="container-edit">
          {ROUTE_STOPS.map((stop, i) => (
            <RouteStop key={stop.id} stop={stop} isLast={i === ROUTE_STOPS.length - 1} />
          ))}
        </div>
      </section>

      <EventCTA
        title={`Ready For The ${EVENT_2027.year} Xperience?`}
        lede="Join the next American X History Xperience in Miami Beach."
        primaryHref="/event"
        primaryLabel={CTA.primary}
        secondaryHref={EVENT_2027.registrationUrl}
        secondaryLabel={CTA.register}
      />
    </>
  );
}
