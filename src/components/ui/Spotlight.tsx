import { cn } from "@/lib/cn";

// The cinematic light-cone motif. Use sparingly — hero, quotes, major CTAs —
// per brief section 7. `tone="gold"` should be used even more sparingly than
// the default warm-white cone.

export function Spotlight({
  tone = "white",
  className,
}: {
  tone?: "white" | "gold";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(tone === "white" ? "spotlight" : "spotlight-gold", className)}
    />
  );
}
