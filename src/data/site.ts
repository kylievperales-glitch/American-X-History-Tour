// Global site configuration: navigation, CTA labels, metadata defaults.
// Edit this file to rename nav items, change the CTA copy, or update
// site-wide SEO defaults — nothing else in the codebase should hard-code these.

export const SITE = {
  name: "American X History",
  fullName: "American X History Tour of Miami",
  tagline: "The city was part of the story.",
  producedBy: "Miami Athletic Association",
  url: "https://www.americanxhistory.com", // [VERIFY] production domain
  defaultDescription:
    "Retrace Cassius Clay's Miami training journey — from the Historic Hampton House and Brownsville to Miami Beach and the 1964 heavyweight championship — through a modern community route you can experience today.",
};

export type NavItem = {
  label: string;
  href: string;
};

// "Experience" (/event) and "Gallery" (/gallery) are intentionally left out
// of primary nav by request — both pages still exist and are still
// reachable (Experience via the "Join the Tour" CTA and "Join the
// Experience" buttons site-wide; Gallery by direct link/URL), just not
// listed as top-level nav tabs.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/story" },
  { label: "Timeline", href: "/timeline" },
  { label: "The Route", href: "/route" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export const NAV_CTA: NavItem = { label: "Join the Tour", href: "/event" };

// Every real route's display label, for anything that needs to show a page
// name regardless of whether that page is in the primary nav (e.g. the
// page-transition overlay). Keep in sync with src/app/**/page.tsx routes.
export const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/story": "The Story",
  "/timeline": "Timeline",
  "/route": "The Route",
  "/event": "The Experience",
  "/gallery": "Gallery",
  "/partners": "Partners",
  "/about": "About",
};

// Reused across the site so button copy never drifts.
export const CTA = {
  primary: "Join the Experience",
  secondary: "Explore the Story",
  route: "View the Route",
  timeline: "Explore the Timeline",
  partner: "Become a Partner",
  fullTimeline: "Explore the Full Timeline",
  fullStory: "Read the Full Story",
} as const;
