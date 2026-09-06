import type { ContentStatus, PhotoRef } from "./types";

export type StoryChapter = {
  number: string;
  id: string;
  title: string;
  dateOrLocation: string;
  paragraphs: string[];
  image: PhotoRef;
  calloutLabel?: string;
  status: ContentStatus;
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    number: "01",
    id: "coming-to-miami",
    title: "Coming to Miami",
    dateOrLocation: "Early 1960s — Miami, Florida",
    paragraphs: [
      "Before he was Muhammad Ali, he was a young fighter from Louisville building a career far from home.",
      "After winning Olympic gold and turning professional in 1960, Cassius Clay made Miami an important base for his emerging boxing career. Here, he trained under Angelo Dundee at the 5th Street Gym as he worked his way toward a heavyweight title shot.",
      "But the Miami Clay encountered was also deeply segregated. His years here place the story of his rise in boxing alongside a broader history of race, access, and daily life in South Florida.",
    ],
    image: {
      src: "/images/archive/ali-beatles-5th-street-gym.png",
      label: "STORY_01",
      subject: "Archival — Cassius Clay with The Beatles at the 5th Street Gym, 1964",
      aspect: "3:2",
      alt: "Cassius Clay play-acting a punch on The Beatles at the 5th Street Gym in Miami Beach, February 1964, black-and-white photograph.",
    },
    status: "verified",
  },
  {
    number: "02",
    id: "5th-street-gym",
    title: "The 5th Street Gym",
    dateOrLocation: "Miami Beach, Florida",
    paragraphs: [
      "The 5th Street Gym became Clay's Miami training home under trainer Angelo Dundee. There, Clay trained and prepared during the years leading to his first heavyweight championship. The original gym no longer stands at its historic location; the 5th Street Gym name was later revived elsewhere in Miami Beach.",
    ],
    image: {
      src: "/images/archive/5th-street-gym-training-crowd.png",
      label: "STORY_02",
      subject: "Archival — 5th Street Gym, training session",
      aspect: "4:5",
      alt: "Cassius Clay hitting a heavy bag at the 5th Street Gym as a crowd and photographers look on, black-and-white photograph.",
      objectPosition: "40% 50%",
    },
    status: "verified",
  },
  {
    number: "03",
    id: "divided-city",
    title: "A Divided City",
    dateOrLocation: "Brownsville, Miami",
    paragraphs: [
      "Miami in the early 1960s was a segregated city. Where Black visitors and residents could stay, eat, and gather was shaped by law and custom, not choice.",
      "The Hampton House was a Green Book hotel and one of Miami's most important Black social and cultural gathering places during segregation. It welcomed Black travelers and prominent guests who were excluded from many accommodations elsewhere in the area.",
      "After defeating Sonny Liston in 1964, Clay celebrated at the Hampton House, where he was photographed with Malcolm X and supporters. That connection makes the Hampton House more than historical context to the tour — it is part of Clay's own Miami story.",
    ],
    image: {
      src: "/images/archive/hampton-house-guests-1960s.png",
      label: "STORY_03",
      subject: "Archival — Historic Hampton House exterior",
      aspect: "4:5",
      alt: "Guests standing beneath the Hampton House Motel & Villas sign, 1960s, black-and-white photograph.",
      objectPosition: "62% 45%",
    },
    calloutLabel: "HAMPTON HOUSE",
    status: "verified",
  },
  {
    number: "04",
    id: "february-1964",
    title: "February 25, 1964",
    dateOrLocation: "Miami Beach Convention Center",
    paragraphs: [
      "On February 25, 1964, the center of the boxing world was Miami Beach. Clay entered as an underdog against heavyweight champion Sonny Liston.",
      "By the end of the fight, he was heavyweight champion of the world — and Miami Beach was where it happened.",
    ],
    image: {
      src: "/images/archive/clay-vs-liston.png",
      label: "STORY_04",
      subject: "Archival — Clay vs. Liston, ringside",
      aspect: "3:2",
      alt: "Cassius Clay exchanges punches with Sonny Liston in the ring, black-and-white photograph.",
    },
    calloutLabel: "1964",
    status: "verified",
  },
  {
    number: "05",
    id: "clay-to-ali",
    title: "Cassius Clay → Muhammad Ali",
    dateOrLocation: "1964",
    paragraphs: [
      "The morning after defeating Sonny Liston, Clay confirmed that he had joined the Nation of Islam. He then traveled to New York, where, with Malcolm X at his side, he announced that he would be known as \"Cassius X,\" rejecting the surname Clay. On March 6, 1964, Nation of Islam leader Elijah Muhammad announced in a radio address that the new heavyweight champion had been given the name Muhammad Ali.",
    ],
    image: {
      src: "/images/archive/name-change-newspaper-1964.png",
      label: "STORY_05",
      subject: "Archival — newspaper clipping, name change announcement",
      aspect: "4:5",
      alt: "Newspaper clipping headlined 'Cassius Clay Is Given Name Of Muhammad Ali,' 1964.",
      objectPosition: "50% 0%",
    },
    status: "verified",
  },
  {
    number: "06",
    id: "legacy",
    title: "The Legacy",
    dateOrLocation: "1964 — Today",
    paragraphs: [
      "Ali's cultural and historical significance extended well beyond boxing over the decades that followed. Miami's role in that story is often overlooked.",
    ],
    image: {
      src: "/images/archive/ali-legacy-exhibition.webp",
      label: "STORY_06",
      subject: "Archival — Muhammad Ali at a later public appearance",
      aspect: "3:2",
      alt: "Muhammad Ali standing in a boxing ring, seen from behind, addressing a crowd of onlookers including children.",
    },
    status: "verified",
  },
  {
    number: "07",
    id: "story-continues",
    title: "The Story Continues",
    dateOrLocation: "Today — Miami, Florida",
    paragraphs: [
      "The American X History Tour lets people physically move through the places where this history happened — from the Hampton House to Miami Beach.",
      "The route connects places that shaped the story.",
    ],
    image: {
      src: "/images/event/past-event-2022-a.jpg",
      label: "STORY_07",
      subject: "Modern — event participants on the route",
      aspect: "16:9",
      alt: "Group photo of participants in front of the Historic Hampton House Cultural Center sign, American X History Tour.",
      objectPosition: "50% 55%",
    },
    status: "placeholder-copy",
  },
];
