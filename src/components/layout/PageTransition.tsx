"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ROUTE_LABELS, SITE } from "@/data/site";

const subscribeNoop = () => () => {};

// Quick fade-to-black-and-back with a subtle page label (brief section 29).
// Overlay is pointer-events-none so it never blocks interaction — it's
// purely a visual beat, not something the user waits on. Skipped on the
// very first page load so there's no flash before the site has rendered.
//
// `hasMounted` uses useSyncExternalStore (server snapshot false, client
// snapshot true) instead of a `useState` + `useEffect` pair — the effect
// version works, but flips state *after* the first paint, forcing an extra
// render. This resolves to the right value in the same render the client
// commits, and never desyncs from the server-rendered HTML the way mutating
// a ref mid-render would.
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const label = ROUTE_LABELS[pathname] ?? SITE.name;

  const hasMounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);
  const isFirstRender = !hasMounted;

  return (
    <>
      {!isFirstRender && (
        <motion.div
          key={`overlay-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-ink"
          aria-hidden
        >
          <span className="font-display text-xs tracking-[0.3em] text-white/70 sm:text-sm">
            {label}
          </span>
        </motion.div>
      )}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
