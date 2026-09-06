import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { EventCTA } from "@/components/ui/EventCTA";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GALLERY_ITEMS } from "@/data/gallery";
import { CTA } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Archival photography, the modern route, and the American X History Tour community — browsable by category.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>Archive · Route · Event · Community</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              Gallery
            </h1>
            <p className="font-serif mt-6 max-w-xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              Archival photography, the modern route, and the community that
              carries this story forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-charcoal-line bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </section>

      <EventCTA
        title="Be Part Of The Next Gallery."
        lede="Photography from every edition of the tour lives here."
        primaryHref="/event"
        primaryLabel={CTA.primary}
      />
    </>
  );
}
