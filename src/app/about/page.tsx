import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { EventCTA } from "@/components/ui/EventCTA";
import { SITE, CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About American X History, the Miami Athletic Association, and the mission behind the tour.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              Why This Xperience Exists
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <div className="container-edit max-w-3xl">
          <SectionIntro eyebrow="The Mission" title="History You Can Walk Through" className="max-w-none" />
          <p className="font-serif mt-6 text-lg leading-relaxed text-muted-strong">
            American X History connects people to Miami&rsquo;s past through
            movement, place, and community. Each Xperience draws from Muhammad
            Ali&rsquo;s Miami story while creating a new way to engage with that
            history today.
          </p>
        </div>
      </section>

      {/* Miami Athletic Association */}
      <section className="border-t border-charcoal-line bg-paper py-20 text-black sm:py-28">
        <div className="container-edit max-w-3xl">
          <SectionIntro
            tone="light"
            eyebrow="Produced By"
            title="Miami Athletic Association"
            className="max-w-none"
          />
          {/* [CONTENT TO VERIFY] — confirm this description with MAA. */}
          <p className="font-serif mt-6 text-lg leading-relaxed text-muted-on-light">
            The Miami Athletic Association is a membership-driven
            organization connecting marketing executives from sports and
            hospitality to produce and promote South Florida&rsquo;s year-round
            tourism.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-charcoal-line bg-ink py-20 sm:py-28">
        <div className="container-edit">
          <SectionIntro eyebrow="About The Founder" title="Kevin Krueger" className="max-w-none" />
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
            <ArchiveImage
              photo={{
                src: "/images/event/kevin-krueger-portrait.png",
                label: "ABOUT_FOUNDER_01",
                subject: "Portrait — Kevin Krueger",
                aspect: "4:5",
                alt: "Portrait of Kevin Krueger, founder of the Miami Athletic Association.",
              }}
            />
            {/* Founder bio not yet provided — showing name/title only. Add the
                bio as a font-serif paragraph below the title line when ready. */}
            <div>
              <p className="font-sans text-xs uppercase leading-relaxed tracking-[0.14em] text-muted">
                Founder, Miami Athletic Association
                <br />
                American X History Tour
              </p>
            </div>
          </div>
        </div>
      </section>

      <EventCTA
        title="Learn More."
        lede={`${SITE.fullName} is one project of the ${SITE.producedBy}.`}
        primaryHref="/story"
        primaryLabel={CTA.secondary}
        secondaryHref="/partners"
        secondaryLabel={CTA.partner}
      />
    </>
  );
}
