import type { Metadata } from "next";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { EventCTA } from "@/components/ui/EventCTA";
import { STORY_CHAPTERS } from "@/data/story";
import { CTA } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "Before he was Muhammad Ali — Cassius Clay's Miami training years, the city's segregation-era history, and the 1964 championship that changed everything.",
};

export default function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>The Story</Eyebrow>
            <h1 className="font-display mt-5 max-w-none text-balance text-4xl leading-[0.95] text-white sm:text-[4.15rem]">
              The Miami Chapter of a Champion&rsquo;s Story
            </h1>
            <p className="font-serif mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              Cassius Clay&rsquo;s connection to Miami ran through training gyms,
              segregated neighborhoods, a historic hotel, and the championship
              victory that made him heavyweight champion of the world.
            </p>
          </Reveal>
        </div>
      </section>

      {STORY_CHAPTERS.map((chapter, i) => {
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={cn(
              "scroll-mt-24 border-t border-charcoal-line py-20 sm:py-28",
              "bg-ink",
            )}
          >
            <div className="container-edit">
              <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
                <div className={cn(imageFirst && "md:order-2")}>
                  <Reveal>
                    <p className="font-display text-sm text-accent">
                      Chapter {chapter.number}
                    </p>
                    <h2 className="font-display mt-3 text-balance text-4xl leading-[0.95] text-white sm:text-5xl">
                      {chapter.title}
                    </h2>
                    <p className="mt-3 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                      {chapter.dateOrLocation}
                    </p>
                    {chapter.calloutLabel && (
                      <span className="mt-4 inline-block border border-accent px-3 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-accent">
                        {chapter.calloutLabel}
                      </span>
                    )}
                    <div className="mt-6 max-w-[58ch] space-y-4">
                      {chapter.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="font-serif text-base leading-relaxed text-muted-strong sm:text-lg"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.1} className={cn(imageFirst && "md:order-1")}>
                  <ArchiveImage
                    photo={chapter.image}
                    rotate={imageFirst ? 1.5 : -1.5}
                    className="mx-auto max-w-md md:max-w-none"
                  />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <EventCTA
        title="Walk Through This History."
        lede="Most of the chapters above are still places you can stand in today."
        primaryHref="/route"
        primaryLabel={CTA.route}
        secondaryHref="/timeline"
        secondaryLabel={CTA.timeline}
      />
    </>
  );
}
