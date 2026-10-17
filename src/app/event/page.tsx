import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/Button";
import { ProgramSchedule } from "@/components/ui/ProgramSchedule";
import { EventCTA } from "@/components/ui/EventCTA";
import { PARTICIPATION_WAYS, EVENT_2027, EVENT_INTRO, PROGRAM_2027 } from "@/data/event";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "2027 Xperience",
  description:
    "The 2027 American X History Xperience — Sunday, February 28, 2027 in Miami Beach. A planned morning of movement, boxing, and Coffee & Conversation honoring Muhammad Ali.",
};

export default function EventPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>American X History {EVENT_2027.year}</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              The Xperience
            </h1>
            <p className="font-display mt-6 text-2xl tracking-[0.06em] text-white sm:text-4xl">
              {EVENT_2027.dateLong}
            </p>
            <p className="font-display text-metallic-gold mt-2 text-lg tracking-[0.2em] sm:text-2xl">
              {EVENT_2027.location}
            </p>
            <p className="font-serif mt-7 max-w-2xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              {EVENT_INTRO}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CTAButton href={EVENT_2027.registrationUrl}>{CTA.register}</CTAButton>
              <CTAButton href="/route" variant="secondary">
                {CTA.route}
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program */}
      <section className="border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <div className="container-edit">
          <SectionIntro eyebrow={`The ${EVENT_2027.year} Program`} title="Planned Program" />
          <ProgramSchedule slots={PROGRAM_2027} note={EVENT_2027.programNote} className="mt-12 max-w-4xl" />
        </div>
      </section>

      {/* Registration */}
      <section className="border-t border-charcoal-line bg-paper py-20 text-black sm:py-28">
        <div className="container-edit grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionIntro
            tone="light"
            eyebrow="Registration"
            title="Register / Check In With RunAdic"
            lede={`Registration and check-in for the ${EVENT_2027.year} American X History Xperience are handled through RunAdic.`}
            className="max-w-none"
          />
          <Reveal delay={0.1} className="lg:justify-self-end">
            <CTAButton href={EVENT_2027.registrationUrl} className="px-8 py-5 text-base">
              {CTA.register}
            </CTAButton>
          </Reveal>
        </div>
      </section>

      {/* Ways to participate — general American X History framing, not a
          confirmed list of 2027 formats (see PARTICIPATION_WAYS). */}
      <section className="border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <div className="container-edit">
          <SectionIntro
            eyebrow="Past And Current Ways To Participate"
            title="Walk. Run. Roll. Ride. Volunteer. Cheer."
            lede={`Across American X History Xperiences, people have shown up in many ways. The ${EVENT_2027.year} program is planned around a jog/walk — not every format is part of every year.`}
          />
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-charcoal-line bg-charcoal-line sm:grid-cols-3 lg:grid-cols-6">
            {PARTICIPATION_WAYS.map((way) => (
              <div key={way.id} className="flex flex-col gap-2 bg-ink p-6">
                <span className="font-display text-metallic-gold text-2xl">{way.label}</span>
                <span className="font-sans text-xs leading-snug text-muted">{way.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventCTA
        title="Join The Xperience."
        lede="Register, volunteer, or simply show up — every part of the tour matters."
        primaryHref={EVENT_2027.registrationUrl}
        primaryLabel={CTA.register}
        secondaryHref="/partners"
        secondaryLabel={CTA.partner}
      />
    </>
  );
}
