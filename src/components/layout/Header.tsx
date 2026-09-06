"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, NAV_CTA, SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes. Adjusted during
  // render (React's recommended pattern for "reset state when a prop
  // changes") rather than in an effect, so there's no extra render pass
  // after navigation before the menu disappears.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Prevent background scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-line bg-ink/90 backdrop-blur-sm">
      <div className="container-edit flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-base tracking-[0.08em] text-white sm:text-lg">
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative font-sans text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted-strong hover:text-white",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" aria-hidden />
                )}
              </Link>
            );
          })}
          <Link
            href={NAV_CTA.href}
            className="border border-accent-fill bg-accent-fill px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-fill-bright"
          >
            {NAV_CTA.label}
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-white transition-transform duration-200",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-white transition-transform duration-200",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-ink px-6 py-10 sm:top-20 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "font-display block py-3.5 text-4xl",
                        isActive ? "text-accent" : "text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <Link
              href={NAV_CTA.href}
              className="mt-8 block border border-accent-fill bg-accent-fill px-6 py-4 text-center font-sans text-sm font-medium uppercase tracking-[0.14em] text-white"
            >
              {NAV_CTA.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
