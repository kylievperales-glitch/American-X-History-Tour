import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

// Standardized section header used at the top of nearly every major section
// across every page — keeps headline scale/spacing/rhythm consistent.

export function SectionIntro({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "font-display mt-4 text-balance text-4xl leading-[0.95] sm:text-5xl md:text-6xl",
          tone === "dark" ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "font-serif mt-5 text-lg leading-relaxed sm:text-xl",
            tone === "dark" ? "text-muted-strong" : "text-muted-on-light",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
