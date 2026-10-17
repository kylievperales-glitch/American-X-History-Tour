import type { ContentStatus, PhotoRef } from "./types";

export type TimelineEra =
  | "Before Miami"
  | "Training in Miami"
  | "1964"
  | "Transformation"
  | "Legacy"
  | "Today";

export type TimelineEntry = {
  id: string;
  date: string; // display string, e.g. "FEB 25, 1964" — keep loose, not a Date
  title: string;
  era: TimelineEra;
  location?: string;
  summary: string; // 2-4 sentences, shown when the entry expands
  image?: PhotoRef;
  relatedRouteStopId?: string;
  status: ContentStatus;
};

// Full timeline, used on /timeline. A shorter hand-picked subset drives the
// homepage teaser — see HOME_TIMELINE_IDS below.
export const TIMELINE: TimelineEntry[] = [
  {
    id: "1960-olympics",
    date: "1960",
    title: "Olympic Gold",
    era: "Before Miami",
    location: "Rome, Italy",
    summary:
      "Cassius Clay wins the light heavyweight gold medal at the 1960 Rome Olympics, the achievement that first brought him national attention.",
    image: {
      src: "/images/archive/rome-olympics-1960.png",
      label: "TIMELINE_01",
      subject: "Archival — Cassius Clay, 1960 Olympics",
      aspect: "4:5",
      alt: "Cassius Clay on the medal podium at the 1960 Rome Olympics, black-and-white photograph.",
      objectPosition: "58% 25%",
    },
    status: "verified",
  },
  {
    id: "early60s-miami",
    date: "Early 1960s",
    title: "Clay Comes to Miami",
    era: "Training in Miami",
    location: "Miami, Florida",
    summary:
      "Clay relocates to Miami to train under Angelo Dundee at the 5th Street Gym, beginning the period that would shape both his career and his connection to the city.",
    image: {
      src: "/images/archive/5th-street-gym-training-crowd.png",
      label: "TIMELINE_02",
      subject: "Archival — Clay training at the 5th Street Gym",
      aspect: "3:2",
      alt: "Cassius Clay hitting a heavy bag at the 5th Street Gym as a crowd and photographers look on, black-and-white photograph.",
    },
    status: "verified",
  },
  {
    id: "5th-street-training",
    date: "Early 1960s",
    title: "Training at the 5th Street Gym",
    era: "Training in Miami",
    location: "Miami Beach, Florida",
    summary:
      "Angelo Dundee's 5th Street Gym becomes Clay's training home, where his style and preparation for a title shot take shape.",
    image: {
      src: "/images/archive/5th-street-gym-training.png",
      label: "TIMELINE_03",
      subject: "Archival — 5th Street Gym training session",
      aspect: "4:5",
      alt: "Muhammad Ali training on a heavy bag at the 5th Street Gym with onlookers in the background, black-and-white photograph.",
    },
    status: "verified",
  },
  {
    id: "hampton-house-era",
    date: "Early 1960s",
    title: "A Divided City",
    era: "Training in Miami",
    location: "Brownsville / Historic Hampton House, Miami",
    summary:
      "Segregation shaped where Black visitors and residents could stay, eat, and gather in Miami. The Historic Hampton House, part of the Green Book network, became an important center of Black social and cultural life during this period. After defeating Sonny Liston in 1964, Clay celebrated his championship victory at the Hampton House, further tying the site to his Miami story.",
    image: {
      src: "/images/archive/hampton-house-wide-exterior.png",
      label: "TIMELINE_04",
      subject: "Archival — Historic Hampton House exterior",
      aspect: "4:5",
      alt: "The Hampton House pool and courtyard, 1960s, black-and-white photograph, with guests seated poolside.",
      objectPosition: "35% 55%",
    },
    relatedRouteStopId: "hampton-house",
    status: "verified",
  },
  {
    id: "1964-fight",
    date: "FEB 25, 1964",
    title: "Clay vs. Liston",
    era: "1964",
    location: "Miami Beach Convention Center",
    summary:
      "Entering as an underdog, Cassius Clay defeats heavyweight champion Sonny Liston at the Miami Beach Convention Center to become heavyweight champion of the world.",
    image: {
      src: "/images/archive/clay-vs-liston.png",
      label: "TIMELINE_05",
      subject: "Archival — Clay vs. Liston, ringside",
      aspect: "3:2",
      alt: "Cassius Clay exchanges punches with Sonny Liston in the ring, black-and-white photograph.",
    },
    relatedRouteStopId: "convention-center",
    status: "verified",
  },
  {
    id: "name-change",
    date: "1964",
    title: "Cassius Clay Becomes Muhammad Ali",
    era: "Transformation",
    location: "Miami, Florida",
    summary:
      "On March 6, 1964, Nation of Islam leader Elijah Muhammad announced in a radio address that the new heavyweight champion had been given the name Muhammad Ali.",
    image: {
      src: "/images/archive/name-change-newspaper-1964.png",
      label: "TIMELINE_06",
      subject: "Archival — newspaper clipping, name change announcement",
      aspect: "4:5",
      alt: "Newspaper clipping headlined 'Cassius Clay Is Given Name Of Muhammad Ali,' 1964.",
      objectPosition: "50% 0%",
    },
    status: "verified",
  },
  {
    id: "hampton-house-preservation",
    date: "2015",
    title: "Preserving the Hampton House",
    era: "Legacy",
    location: "Brownsville, Miami",
    summary:
      "The Historic Hampton House is preserved and restored as a cultural landmark, safeguarding its role in Miami's civil-rights and cultural history.",
    image: {
      src: "/images/archive/hampton-house-restoration-project.jpg",
      label: "TIMELINE_07",
      subject: "Modern — Historic Hampton House, restored",
      aspect: "3:2",
      alt: "Miami-Dade County restoration project sign for the Historic Hampton House, with project team members standing in front of the building.",
    },
    relatedRouteStopId: "hampton-house",
    status: "verified",
  },
  {
    id: "american-x-history-launch",
    // Launch year not yet confirmed — leave empty (the date is hidden when
    // blank) rather than showing a placeholder publicly.
    date: "",
    title: "The American X History Tour Begins",
    era: "Today",
    location: "Miami, Florida",
    summary:
      "The Miami Athletic Association launches the American X History Tour, inviting the public to physically retrace this history through Miami's neighborhoods and onto Miami Beach.",
    image: {
      src: "/images/event/timeline-launch-event.jpg",
      label: "TIMELINE_08",
      subject: "Modern — event participants at the Historic Hampton House",
      aspect: "4:5",
      alt: "Overhead view of participants gathered around the Hampton House logo, American X History Tour.",
    },
    status: "content-review",
  },
  {
    id: "today",
    date: "Today",
    title: "Xperience the Journey",
    era: "Today",
    location: "Miami, Florida",
    summary:
      "The route, the neighborhoods, and much of the story remain walkable today — a living connection between Miami's past and its present.",
    image: {
      src: "/images/archive/5th-street-gym-colorized.png",
      label: "TIMELINE_09",
      subject: "Cassius Clay at the 5th Street Gym",
      aspect: "4:5",
      alt: "Colorized photo of a young Cassius Clay flexing in front of the 5th Street Gym sign.",
    },
    status: "placeholder-copy",
  },
  {
    id: "2027-xperience",
    date: "2027",
    title: "American X History Returns",
    era: "Today",
    location: "Miami Beach, Florida",
    summary:
      "The next American X History Xperience is planned for February 28, 2027 in Miami Beach, with a shorter community jog/walk, a Muhammad Ali Way finish, boxing, and Coffee & Conversation. Programming is still being finalized.",
    status: "content-review",
  },
];

// Curated subset for the homepage mini-timeline (brief section 12).
export const HOME_TIMELINE_IDS = [
  "1960-olympics",
  "early60s-miami",
  "1964-fight",
  "name-change",
  "today",
  "2027-xperience",
];
