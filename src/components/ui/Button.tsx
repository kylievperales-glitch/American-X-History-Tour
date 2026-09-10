import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-accent-fill text-black text-shadow-gold-button shine-gold-button hover:bg-accent-fill-bright border border-transparent",
  secondary:
    "bg-transparent text-current border border-current/40 hover:border-current",
  ghost:
    "bg-transparent text-current px-0 border-0 underline decoration-1 underline-offset-4 decoration-current/40 hover:decoration-accent hover:text-accent",
};

export function CTAButton({ href, children, variant = "primary", className }: Props) {
  const isGhost = variant === "ghost";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200",
        !isGhost && "px-6 py-3.5",
        VARIANT_CLASS[variant],
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
