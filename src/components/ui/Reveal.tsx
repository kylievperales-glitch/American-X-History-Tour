"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Shared scroll-in fade-up used across every page. Kept to one easing curve
// and one distance so motion feels like one system, not per-section tweaks.
// Respects prefers-reduced-motion via globals.css's blanket override.

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      className={className}
      // Content stays fully opaque no matter what — only position animates.
      // Text must never depend on IntersectionObserver timing to become
      // readable (fast scrolling, slow devices, and automated rendering can
      // all miss or outrun a scroll-triggered fade).
      initial={{ opacity: 1, y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
