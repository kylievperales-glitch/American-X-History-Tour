import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { CollageStaggeredThree, CollageOverlapDate } from "@/components/ui/EditorialCollage";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { TimelineEntry } from "@/components/ui/TimelineEntry";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTAButton } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { Reveal } from "@/components/ui/Reveal";
import { EventCTA } from "@/components/ui/EventCTA";
import { TIMELINE, HOME_TIMELINE_IDS } from "@/data/timeline";
import { ROUTE_STOPS, ROUTE_2027_ANCHORS } from "@/data/route";
import { PARTICIPATION_WAYS, PAST_EVENT_PHOTOS, EVENT_2027 } from "@/data/event";
import { CTA, SITE } from "@/data/site";

const homeTimeline = HOME_TIMELINE_IDS.map((id) => TIMELINE.find((e) => e.id === id)!).filter(
  Boolean,
);

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <Spotlight />
        <div className="container-edit relative grid w-full grid-cols-1 items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>{SITE.producedBy}</Eyebrow>
            <h1 className="font-display mt-5 text-balance text-[15vw] leading-[0.88] text-white sm:text-7xl md:text-8xl lg:text-[6.2vw]">
              American X
              <br />
              History
            </h1>
            <p className="font-display text-metallic-gold mt-1 text-2xl tracking-[0.2em] sm:text-3xl">
              Tour of Miami
            </p>
            <p className="font-serif mt-7 max-w-md text-lg leading-relaxed text-muted-strong sm:text-xl">
              Miami. 1964. A champion. A changing city. A story you can still
              Xperience today.
            </p>
            <p className="font-serif mt-5 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              The American X History Tour is a community Xperience exploring
              Muhammad Ali&rsquo;s Miami story through movement, history, and
              the city connected to it.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CTAButton href="/story">{CTA.secondary}</CTAButton>
              <CTAButton href="/event" variant="secondary">
                {CTA.primary}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <PhotoPlaceholder
              photo={{
                src: "/images/hero/hero-01.png",
                label: "HERO_01",
                subject: "Archival Cassius Clay — Miami-era boxing portrait",
                aspect: "1:1",
                alt: "Muhammad Ali, then Cassius Clay, in a boxing stance with gloves raised, black-and-white portrait.",
              }}
              className="mx-auto w-full max-w-md"
              priority
            />
          </Reveal>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-muted" />
        </div>
      </section>

      {/* ============ 2027 XPERIENCE ============ */}
      <section className="relative overflow-hidden border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -right-6 -bottom-10 select-none text-[38vw] leading-none text-charcoal sm:-bottom-16 lg:text-[24vw]"
        >
          {EVENT_2027.year}
        </span>
        <div className="container-edit relative grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow>American X History {EVENT_2027.year}</Eyebrow>
            <h2 className="font-display mt-5 text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              {EVENT_2027.weekday},
              <br />
              {EVENT_2027.dateShort}
            </h2>
            <p className="font-display text-metallic-gold mt-3 text-xl tracking-[0.2em] sm:text-2xl">
              {EVENT_2027.location}
            </p>
            <p className="font-serif mt-7 max-w-xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              Stay tuned for the {EVENT_2027.year} American X History Xperience — a
              morning of movement, boxing, conversation, and Miami history
              honoring Muhammad Ali&rsquo;s connection to the city.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CTAButton href="/event">{CTA.currentEvent}</CTAButton>
              <CTAButton href={EVENT_2027.registrationUrl} variant="secondary">
                {CTA.register}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
              The Itinerary
            </p>
            <ol className="mt-5 space-y-5 border-l border-accent-dim pl-6">
              {ROUTE_2027_ANCHORS.map((anchor, i) => (
                <li key={anchor.label} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-2 -left-[29px] h-[9px] w-[9px] rounded-full bg-accent"
                  />
                  <p className="font-display text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-display text-xl text-white">{anchor.label}</p>
                  <p className="font-sans text-xs text-muted">{anchor.detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 font-sans text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              {EVENT_2027.programNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 1964 ============ */}
      <section className="bg-paper py-24 text-black sm:py-32">
        <div className="container-edit grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-display text-[9rem] leading-[0.8] text-black sm:text-[11rem]">
              1964
            </p>
            <p className="font-display text-metallic-gold-on-light text-2xl tracking-[0.14em] sm:text-3xl">
              Miami Beach
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-lg leading-relaxed text-muted-on-light sm:text-xl">
              On February 25, 1964, the center of the boxing world was Miami
              Beach. Cassius Clay entered as the underdog against heavyweight
              champion Sonny Liston — and left as champion himself, at the
              Miami Beach Convention Center.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <ArchiveImage
                photo={{
                  src: "/images/archive/clay-vs-liston.png",
                  label: "HOME_1964_01",
                  subject: "Archival — Clay vs. Liston, ringside",
                  aspect: "3:2",
                  alt: "Cassius Clay exchanges punches with Sonny Liston in the ring, black-and-white photograph.",
                }}
                location="Miami Beach"
                year="1964"
              />
              <ArchiveImage
                photo={{
                  src: "/images/archive/convention-center-1960s.png",
                  label: "HOME_1964_02",
                  subject: "Archival — Miami Beach Convention Center exterior",
                  aspect: "3:2",
                  alt: "The Miami Beach Convention Hall exterior, 1960s, black-and-white photograph.",
                }}
                location="Miami Beach"
                year="1964"
              />
            </div>
            <Link
              href="/story"
              className="mt-7 inline-block font-sans text-xs uppercase tracking-[0.14em] text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
            >
              {CTA.fullStory} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ THIS HAPPENED HERE ============ */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit">
          <SectionIntro
            eyebrow="The City Was Part Of The Story"
            title="This Happened Here."
            lede="Across Miami neighborhoods, landmarks, and gathering places that remain part of the city today."
          />
          <div className="mt-14">
            <CollageStaggeredThree
              items={[
                {
                  photo: {
                    src: "/images/locations/hampton-house-1960s.png",
                    label: "HOME_COLLAGE_01",
                    subject: "Archival — Historic Hampton House",
                    aspect: "4:5",
                    alt: "The Hampton House Motel & Villas sign, 1960s, black-and-white photograph.",
                  },
                  caption: "Hampton House — Brownsville",
                },
                {
                  photo: {
                    src: "/images/archive/5th-street-gym-training.png",
                    label: "HOME_COLLAGE_02",
                    subject: "Archival — 5th Street Gym training session",
                    aspect: "4:5",
                    alt: "Muhammad Ali training on a heavy bag at the 5th Street Gym with onlookers in the background, black-and-white photograph.",
                  },
                  caption: "5th Street Gym — Miami Beach",
                },
                {
                  photo: {
                    src: "/images/event/past-event-2022-a.jpg",
                    label: "HOME_COLLAGE_03",
                    subject: "Modern — event participants at the Historic Hampton House",
                    aspect: "4:5",
                    alt: "Group photo of participants in front of the Historic Hampton House Cultural Center sign, American X History Tour.",
                  },
                  caption: "Hampton House — Today",
                },
              ]}
            />
          </div>

          <div className="mt-20 grid grid-cols-1 items-end gap-10 sm:grid-cols-2 sm:gap-14">
            <CollageOverlapDate
              date="1960s"
              backCaption="Hampton House — Brownsville"
              back={{
                src: "/images/archive/hampton-house-wide-exterior.png",
                label: "HOME_COLLAGE_04",
                subject: "Archival — Historic Hampton House, wide exterior",
                aspect: "3:2",
                alt: "The Hampton House pool and courtyard, 1960s, black-and-white photograph, with guests seated poolside.",
              }}
              frontCaption="Hampton House Lounge"
              front={{
                src: "/images/locations/hampton-house-lounge.png",
                label: "HOME_COLLAGE_05",
                subject: "Archival — Hampton House lounge, detail",
                aspect: "3:2",
                alt: "Muhammad Ali surrounded by a group at the Hampton House lounge, black-and-white photograph.",
              }}
            />
            <PhotoStrip
              photo={{
                src: "/images/archive/convention-center-marquee.png",
                label: "HOME_COLLAGE_06",
                subject: "Archival — Miami Beach Convention Center marquee",
                aspect: "3:2",
                alt: "The Miami Beach Convention Hall marquee and entrance, 1960s, black-and-white photograph.",
              }}
              caption="Miami Beach Convention Center"
              date="1964"
              className="mx-auto max-w-[220px] sm:mx-0 sm:max-w-none"
            />
          </div>

          <p className="mt-16 font-sans text-xs uppercase tracking-[0.14em] text-muted">
            <Link href="/story" className="underline decoration-1 underline-offset-4 hover:text-accent">
              Read the story
            </Link>
            <span className="mx-2">·</span>
            <Link
              href="/route#past-xperiences"
              className="underline decoration-1 underline-offset-4 hover:text-accent"
            >
              See past routes
            </Link>
          </p>
        </div>
      </section>

      {/* ============ MINI TIMELINE ============ */}
      <section className="bg-ink pb-24 sm:pb-32">
        <div className="container-edit">
          <SectionIntro eyebrow="1964 → Today" title="Follow the Timeline" />
          <div className="mt-12 max-w-xl space-y-8">
            {homeTimeline.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} variant="teaser" />
            ))}
          </div>
          <Link
            href="/timeline"
            className="mt-10 inline-block font-sans text-xs uppercase tracking-[0.14em] text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
          >
            {CTA.fullTimeline} →
          </Link>
        </div>
      </section>

      {/* ============ PAST ROUTE TEASER ============ */}
      <section className="bg-paper py-24 text-black sm:py-32">
        <div className="container-edit">
          <SectionIntro
            tone="light"
            eyebrow="Past Xperiences"
            title="From Brownsville to Miami Beach"
            lede="Previous editions of the American X History Tour connected the Historic Hampton House, Brownsville, mainland Miami, and Miami Beach through longer walk, run, and bike routes."
          />
          <div className="mt-14 overflow-x-auto pb-4">
            <div className="flex min-w-[720px] items-center gap-2">
              {ROUTE_STOPS.map((stop, i) => (
                <div key={stop.id} className="flex flex-1 items-center gap-2">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-fill font-sans text-xs font-medium text-white">
                      {stop.number}
                    </span>
                    <span className="max-w-[110px] font-sans text-[10px] uppercase tracking-[0.1em] text-muted-on-light">
                      {stop.name}
                    </span>
                  </div>
                  {i < ROUTE_STOPS.length - 1 && (
                    <span className="h-px flex-1 bg-paper-line" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
          <CTAButton href="/route#past-xperiences" className="mt-10">
            {CTA.pastRoutes}
          </CTAButton>

          <div className="mt-20">
            <Eyebrow tone="light" className="mb-4">Past Xperiences</Eyebrow>
            <h3 className="font-display text-2xl text-black sm:text-3xl">
              Six Years of American X History
            </h3>
            <p className="font-serif mt-2 max-w-prose text-muted-on-light">
              A look back at previous American X History Xperiences across Miami.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {PAST_EVENT_PHOTOS.map((entry) => (
                <div key={entry.photo.label}>
                  <PhotoPlaceholder photo={entry.photo} className="w-full" />
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.14em] text-muted-on-light">
                    {entry.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ PARTICIPATION ============ */}
          <div className="mt-24 sm:mt-32">
            <SectionIntro
              tone="light"
              eyebrow="Ways To Participate"
              title="You Do Not Have To Be A Runner."
              lede="Walk, run, roll, ride, volunteer, or cheer — every way of showing up is part of the Xperience."
            />
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-paper-line bg-paper-line sm:grid-cols-3 lg:grid-cols-6">
              {PARTICIPATION_WAYS.map((way) => (
                <div key={way.id} className="flex flex-col gap-2 bg-paper p-6">
                  <span className="font-display text-metallic-gold-on-light text-2xl">{way.label}</span>
                  <span className="font-sans text-xs leading-snug text-muted-on-light">
                    {way.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <EventCTA
        title="Xperience It Yourself."
        lede="The neighborhoods, landmarks, and history are still here to explore."
        primaryHref="/event"
        primaryLabel={CTA.primary}
        secondaryHref="/route"
        secondaryLabel={CTA.route}
      />
    </>
  );
}
