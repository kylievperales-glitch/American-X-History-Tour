import type { ContentStatus, PhotoRef } from "./types";

export type RouteStopData = {
  number: string;
  id: string;
  name: string;
  era: string;
  location: string;
  description: string;
  whyItMatters?: string;
  // Optional — omit when no archival photo exists yet (e.g. a site with
  // only a modern photo available). RouteStop renders a single full-width
  // photo instead of the then/now pair when only one of the two is set.
  archivalImage?: PhotoRef;
  modernImage: PhotoRef;
  relatedTimelineId?: string;
  status: ContentStatus;
};

// The 2027 route — known anchor points only. The exact ~1-mile path through
// Miami Beach has not been finalized; do not add street names here until it
// is. Rendered as a stylized (non-geographic) diagram on /route and /.
export type RouteAnchor = { label: string; detail: string };

export const ROUTE_2027_ANCHORS: RouteAnchor[] = [
  { label: "Gather", detail: "Miami Beach / Convention Center area" },
  { label: "~1-Mile Jog / Walk", detail: "Circuitous Miami Beach route — exact path to be finalized" },
  { label: "Muhammad Ali Way", detail: "Finish / group photo" },
  { label: "Rum Room", detail: "Boxing lesson + Coffee & Conversation" },
];

// PAST XPERIENCES — the longer route used by previous editions, from the
// Hampton House to Miami Beach. Shown on /route under "Past Xperiences",
// not as the current route. Kevin Krueger's materials describe roughly
// four- and nine-mile options — exact mile markers per stop are not
// confirmed. [VERIFY HISTORICAL DETAIL]
export const ROUTE_STOPS: RouteStopData[] = [
  {
    number: "01",
    id: "hampton-house",
    name: "Historic Hampton House",
    era: "1960s",
    location: "Brownsville, Miami",
    description:
      "A cornerstone of Black social and cultural life during segregation, and part of the wider story of where Black travelers and residents could stay and gather in Miami.",
    archivalImage: {
      src: "/images/locations/hampton-house-1960s.png",
      label: "ROUTE_01_ARCHIVAL",
      subject: "Archival — Historic Hampton House exterior",
      aspect: "4:5",
      alt: "The Hampton House Motel & Villas sign outside the building, 1960s, black-and-white photograph.",
      objectPosition: "30% 35%",
    },
    modernImage: {
      src: "/images/locations/hampton-house-today.png",
      label: "ROUTE_01_TODAY",
      subject: "Modern — Historic Hampton House, restored",
      aspect: "4:5",
      alt: "The Historic Hampton House Cultural Center sign outside the restored building today, with palm trees against a blue sky.",
      objectPosition: "75% 50%",
    },
    relatedTimelineId: "hampton-house-era",
    status: "verified",
  },
  {
    number: "02",
    id: "brownsville",
    name: "Brownsville",
    era: "1960s",
    location: "Brownsville, Miami",
    description:
      "The Brownsville neighborhood where Clay lived during his Miami years, and a community central to his life outside the ring.",
    archivalImage: {
      src: "/images/archive/brownsville-street-1960s.png",
      label: "ROUTE_02_ARCHIVAL",
      subject: "Archival — Brownsville street scene, early 1960s",
      aspect: "3:2",
      alt: "A Brownsville street scene, early 1960s, black-and-white photograph, with storefronts and parked cars.",
    },
    modernImage: {
      src: "/images/locations/brownsville-today.png",
      label: "ROUTE_02_TODAY",
      subject: "Modern — Brownsville today",
      aspect: "3:2",
      alt: "Aerial view of the Brownsville neighborhood today, with tree-lined streets and the Miami skyline in the distance.",
    },
    status: "verified",
  },
  {
    number: "03",
    id: "clay-residence",
    name: "Clay's Brownsville Home",
    era: "1960s",
    location: "Brownsville, Miami",
    description: "The residence connected to Clay's time living in Miami.",
    modernImage: {
      src: "/images/locations/brownsville-home-today.png",
      label: "ROUTE_03_TODAY",
      subject: "Modern — residence site today",
      aspect: "16:9",
      alt: "A home in the Brownsville neighborhood today, believed to be connected to Clay's residence during his Miami years.",
    },
    status: "verified",
  },
  {
    number: "04",
    id: "wynwood",
    name: "Wynwood / Miami",
    era: "Today",
    location: "Wynwood, Miami",
    description:
      // [CONTENT TO VERIFY] — confirm before expanding this description.
      "Past routes carried participants through Wynwood and central Miami, connecting the historical stops to the contemporary city.",
    archivalImage: {
      src: "/images/archive/wynwood-streetscape-1960s.png",
      label: "ROUTE_04_ARCHIVAL",
      subject: "Archival — Miami streetscape, 1960s",
      aspect: "3:2",
      alt: "A Wynwood-area streetscape in Miami, 1960s, black-and-white photograph, with storefronts and a pedestrian crossing the street.",
    },
    modernImage: {
      src: "/images/locations/wynwood-today.png",
      label: "ROUTE_04_TODAY",
      subject: "Modern — Wynwood today",
      aspect: "3:2",
      alt: "Wynwood Walls today, with colorful street art murals, palm trees, and pedestrians along the street.",
    },
    status: "content-review",
  },
  {
    number: "05",
    id: "causeway",
    name: "Venetian Causeway Crossing",
    era: "Today",
    location: "Venetian Causeway, Miami",
    description:
      "The crossing from Miami to Miami Beach — a physical and symbolic transition point on past routes, and one of their most visually striking stretches.",
    archivalImage: {
      src: "/images/archive/venetian-causeway-1960s.jpg",
      label: "ROUTE_05_ARCHIVAL",
      subject: "Archival — causeway, mid-century",
      aspect: "3:2",
      alt: "Aerial view of the Venetian Causeway looking east from 15th Street, Miami, mid-century, black-and-white photograph.",
    },
    modernImage: {
      src: "/images/locations/venetian-causeway-today.png",
      label: "ROUTE_05_TODAY",
      subject: "Modern — Venetian Causeway today",
      aspect: "4:5",
      alt: "Aerial view of the Venetian Causeway today, with the Miami skyline in the background.",
    },
    status: "verified",
  },
  {
    number: "06",
    id: "convention-center",
    name: "Miami Beach Convention Center / Muhammad Ali Way",
    era: "1964",
    location: "Miami Beach, Florida",
    description:
      "The site of the February 25, 1964 championship fight, and the finish of past routes — where the story's central moment took place.",
    archivalImage: {
      src: "/images/archive/convention-center-1960s.png",
      label: "ROUTE_07_ARCHIVAL",
      subject: "Archival — Miami Beach Convention Center, 1964",
      aspect: "3:2",
      alt: "The Miami Beach Convention Hall exterior, 1960s, black-and-white photograph.",
    },
    modernImage: {
      src: "/images/locations/convention-center-today.png",
      label: "ROUTE_07_TODAY",
      subject: "Modern — Miami Beach Convention Center today",
      aspect: "3:2",
      alt: "The Miami Beach Convention Center exterior today, with palm trees at dusk.",
    },
    relatedTimelineId: "1964-fight",
    status: "verified",
  },
];

// Past-edition distances, kept for reference only — not shown publicly
// until verified. [VERIFY HISTORICAL DETAIL]
export const PAST_ROUTE_DISTANCES = {
  short: "4 miles",
  long: "9 miles",
};
