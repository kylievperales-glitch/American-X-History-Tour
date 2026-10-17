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
    "Muhammad Ali's Miami story — the Historic Hampton House, Brownsville, and the 1964 heavyweight championship in Miami Beach — told through movement and community. The 2027 American X History Xperience takes place Sunday, February 28, 2027 in Miami Beach.",
};

export type NavItem = {
  label: string;
  href: string;
};

// The current-event page (/event) and "Gallery" (/gallery) are intentionally
// left out of the primary nav list by request — both pages still exist and
// are still reachable (/event via the "2027 Xperience" nav CTA and "Join the
// Xperience" buttons site-wide; Gallery by direct link/URL).
//
// Brand rule: event/brand uses of "experience" are always spelled
// "Xperience" / "Xperiences".
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/story" },
  { label: "Timeline", href: "/timeline" },
  { label: "The Route", href: "/route" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

// Points at the current event page. Update the label each year.
export const NAV_CTA: NavItem = { label: "2027 Xperience", href: "/event" };

// Every real route's display label, for anything that needs to show a page
// name regardless of whether that page is in the primary nav (e.g. the
// page-transition overlay). Keep in sync with src/app/**/page.tsx routes.
export const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/story": "The Story",
  "/timeline": "Timeline",
  "/route": "The Route",
  "/event": "2027 Xperience",
  "/gallery": "Gallery",
  "/partners": "Partners",
  "/about": "About",
};

// Reused across the site so button copy never drifts.
export const CTA = {
  primary: "Join the Xperience",
  currentEvent: "View the 2027 Xperience",
  register: "Register with RunAdic",
  pastRoutes: "Explore Past Routes",
  secondary: "Explore the Story",
  route: "View the Route",
  timeline: "Explore the Timeline",
  partner: "Become a Partner",
  fullTimeline: "Explore the Full Timeline",
  fullStory: "Read the Full Story",
} as const;
