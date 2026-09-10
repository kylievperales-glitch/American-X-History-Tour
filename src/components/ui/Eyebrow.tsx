import { cn } from "@/lib/cn";

// Small gold kicker label used above headlines: dates, stop numbers, section
// numbers. This is one of the few places gold appears — keep it that way.
//
// `tone` picks which shade of gold stays readable at this small size: the
// vivid --color-accent clears 4.5:1 on dark backgrounds but not on paper,
// while the deep --color-accent-fill is the reverse — safe on paper, too
// dim on ink. Match `tone` to the section's background, not the text color.

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const colorClass = tone === "dark" ? "text-accent" : "text-accent-fill";
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.22em]",
        colorClass,
        className,
      )}
    >
      <span className={cn("h-px w-6", tone === "dark" ? "bg-accent" : "bg-accent-fill")} aria-hidden />
      {children}
    </div>
  );
}
