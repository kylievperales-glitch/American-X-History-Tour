import { Spotlight } from "./Spotlight";
import { CTAButton } from "./Button";
import { Reveal } from "./Reveal";
import { CTA } from "@/data/site";

// Recurring dark CTA band with the spotlight motif — used at the close of
// most pages so the "join / explore / partner" ask feels like one system.

export function EventCTA({
  title,
  lede,
  primaryHref = "/event",
  primaryLabel = CTA.primary,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  lede?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <Spotlight />
      <div className="container-edit relative text-center">
        <Reveal>
          <h2 className="font-display text-balance text-4xl leading-[0.95] text-white sm:text-6xl">
            {title}
          </h2>
          {lede && (
            <p className="font-serif mx-auto mt-5 max-w-xl text-lg text-muted-strong">{lede}</p>
          )}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
            {secondaryHref && secondaryLabel && (
              <CTAButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
