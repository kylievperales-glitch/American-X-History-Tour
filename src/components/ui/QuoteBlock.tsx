import type { Quote } from "@/data/quotes";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

// Deliberately rare component — quotes should advance the narrative, not
// decorate it (brief section 17). Renders "[QUOTE PLACEHOLDER]" text as-is
// until real, sourced quotations are supplied in /src/data/quotes.ts.

export function QuoteBlock({
  quote,
  tone = "dark",
  className,
}: {
  quote: Quote;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cn("relative max-w-3xl", className)}>
      <span
        aria-hidden
        className={cn(
          "font-display block text-7xl leading-none sm:text-8xl",
          tone === "dark" ? "text-metallic-gold" : "text-metallic-gold-on-light",
        )}
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "font-serif -mt-6 text-2xl leading-snug sm:text-3xl",
          tone === "dark" ? "text-white" : "text-black",
        )}
      >
        {quote.text}
      </blockquote>
      <footer
        className={cn(
          "mt-5 font-sans text-xs uppercase tracking-[0.16em]",
          tone === "dark" ? "text-muted-strong" : "text-muted-on-light",
        )}
      >
        <span className="text-accent">—</span> {quote.attribution}
        {quote.context && <span className="opacity-70"> · {quote.context}</span>}
      </footer>
    </Reveal>
  );
}
