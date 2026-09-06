import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { EventCTA } from "@/components/ui/EventCTA";
import { ORGANIZER, PARTNERS, SPONSORSHIP_CONTACT } from "@/data/partners";
import { CTA } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The American X History Tour of Miami is produced by the Miami Athletic Association, in partnership with RunAdic and The Historic Hampton House.",
};

// Logos are brand marks, not archival photography — real color, no
// grayscale treatment, and `object-contain` (never `object-cover`) so a
// logo is never cropped. Rendered on a light card regardless of whether
// the source file has a transparent background, so it reads as an
// intentional logo tile against the site's dark sections either way.
//
// The card's own aspect ratio matches the source file's real dimensions
// (via `logoAspect`, a plain CSS aspect-ratio value like "970 / 972") —
// forcing every logo into the same generic box shape, regardless of
// whether the logo itself is square or wide, left uneven dead space
// around it. Falls back to a generic 3:2 box only for the still-empty
// placeholder state, where there's no real image to size against yet.
function LogoBox({
  name,
  logoSrc,
  logoAspect,
  className,
}: {
  name: string;
  logoSrc?: string | null;
  logoAspect?: string;
  className?: string;
}) {
  if (logoSrc) {
    return (
      <div
        className={cn("relative w-full bg-white p-6", className)}
        style={{ aspectRatio: logoAspect ?? "3 / 2" }}
      >
        <Image src={logoSrc} alt={`${name} logo`} fill className="object-contain p-4" />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex aspect-[3/2] w-full flex-col items-center justify-center gap-2 border border-charcoal-line bg-charcoal p-4 text-center",
        className,
      )}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted">
        Logo Placeholder
      </span>
      <span className="font-serif text-sm text-muted-strong">{name}</span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Spotlight />
        <div className="container-edit relative">
          <Reveal>
            <Eyebrow>Partners</Eyebrow>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-7xl">
              Produced In Partnership
            </h1>
            <p className="font-serif mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              The American X History Tour is produced by the Miami Athletic
              Association, in partnership with RunAdic and The Historic
              Hampton House.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Produced by */}
      <section className="border-t border-charcoal-line bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <SectionIntro eyebrow="Produced By" title={ORGANIZER.name} className="max-w-none" />
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <LogoBox
              name={ORGANIZER.name}
              logoSrc={ORGANIZER.logoSrc}
              logoAspect={ORGANIZER.logoAspect}
              className="max-w-[220px]"
            />
            <p className="font-serif max-w-[50ch] text-base leading-relaxed text-muted-strong">
              {ORGANIZER.role}{" "}
              <Link
                href="/about"
                className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
              >
                Learn more about the Miami Athletic Association →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-charcoal-line bg-ink py-16 sm:py-20">
        <div className="container-edit">
          <SectionIntro eyebrow="In Partnership With" title="Partners" className="max-w-none" />
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="flex flex-col gap-5">
                <LogoBox
                  name={partner.name}
                  logoSrc={partner.logoSrc}
                  logoAspect={partner.logoAspect}
                  className={partner.logoMaxWidth ?? "max-w-[280px]"}
                />
                <div>
                  <p className="font-display text-xl text-white">{partner.name}</p>
                  <p className="font-serif mt-2 max-w-[45ch] text-base leading-relaxed text-muted-strong">
                    {partner.role}
                  </p>
                  {partner.href && partner.linkLabel && (
                    <Link
                      href={partner.href}
                      className="mt-3 inline-block font-sans text-xs uppercase tracking-[0.14em] text-accent underline decoration-1 underline-offset-4 hover:text-accent-bright"
                    >
                      {partner.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="border-t border-charcoal-line bg-paper py-20 text-black sm:py-28">
        <div className="container-edit">
          <SectionIntro
            tone="light"
            eyebrow="Grow With Us"
            title="Interested in Partnering?"
            lede="The American X History Tour is a growing community experience. If your organization wants to be part of connecting Miami's history to the neighborhoods it happened in, reach out below."
          />
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 font-sans text-sm text-muted-on-light">
            <p>Contact: {SPONSORSHIP_CONTACT.email}</p>
          </div>
        </div>
      </section>

      <EventCTA
        title="Ready To Join The Story?"
        lede="Reach out using the contact details above to start the conversation."
        primaryHref="/about"
        primaryLabel="About Miami Athletic Association"
        secondaryHref="/event"
        secondaryLabel={CTA.primary}
      />
    </>
  );
}
