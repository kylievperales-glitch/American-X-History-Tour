export type ParticipationWay = {
  id: string;
  label: string;
  description: string;
};

// Per brief section 15 & 22 — accessible to far more than competitive
// runners. Keep this list; do not imply competition in copy elsewhere.
// These are general American X History ways to take part across past and
// current Xperiences — not every mode (e.g. Ride) is part of every year's
// program, so always present this list with that framing.
export const PARTICIPATION_WAYS: ParticipationWay[] = [
  { id: "walk", label: "Walk", description: "Move through the route at your own pace." },
  { id: "run", label: "Run", description: "Cover the route as a run." },
  { id: "roll", label: "Roll", description: "Wheelchairs and adaptive mobility welcome." },
  { id: "ride", label: "Ride", description: "Cycle the route alongside other participants." },
  { id: "volunteer", label: "Volunteer", description: "Support the route, the stops, and the story." },
  { id: "cheer", label: "Cheer", description: "Show up for the community without covering the route." },
];

// The current (2027) Xperience. Update this block each year — every page
// that mentions the date, location, or registration link reads from here.
export const EVENT_2027 = {
  year: "2027",
  weekday: "Sunday",
  dateLong: "Sunday, February 28, 2027",
  dateShort: "February 28, 2027",
  location: "Miami Beach, Florida",
  registrationUrl: "https://app.runadic.com/speedy-laps/event/365",
  programNote: "Programming is still being finalized and may change before February 28.",
};

export const EVENT_INTRO =
  "American X History returns to Miami Beach in 2027 for a morning honoring Muhammad Ali through movement, boxing, conversation, and community.";

// Program status labels. Only confirmed items may omit `status` — anything
// tentative MUST carry one so it renders with a visible "Planned" or
// "Possible" tag and is never mistaken for a confirmed part of the day.
export type ProgramStatus = "planned" | "possible";

export type ProgramSlot = {
  time: string;
  items: { title: string; detail?: string }[];
  status?: ProgramStatus;
};

export const PROGRAM_STATUS_LABEL: Record<ProgramStatus, string> = {
  planned: "Planned · Subject to confirmation",
  possible: "Possible · Not yet confirmed",
};

// The planned 2027 program. The whole schedule is presented under a
// "Planned Program" heading with EVENT_2027.programNote beneath it.
export const PROGRAM_2027: ProgramSlot[] = [
  { time: "7:00 AM", items: [{ title: "Gather" }] },
  {
    time: "7:00–8:00 AM",
    items: [
      {
        title: "Approximately one-mile jog / walk",
        detail: "A Miami Beach route — exact path to be finalized.",
      },
    ],
  },
  {
    time: "After the route",
    items: [
      { title: "Group photo at Muhammad Ali Way" },
      { title: "Approximately 30-minute light boxing lesson", detail: "At or near the Rum Room." },
    ],
  },
  { time: "8:00 AM", items: [{ title: "Coffee & Conversation at Rum Room" }] },
  { time: "9:00 AM", status: "planned", items: [{ title: "Mayoral proclamation" }] },
  {
    time: "Possible additions",
    status: "possible",
    items: [
      { title: "Miami Beach Convention Center Hall of Fame Tour" },
      { title: "Surfcomber Hotel pool gathering", detail: "Around 10:00 AM." },
    ],
  },
];

import type { PhotoRef } from "./types";

// Photo slots for past runnings of the event, shown on the homepage. Add a
// real year and photo to each entry as it becomes available — the label
// stays a visible placeholder until `src` is set.
export const PAST_EVENT_PHOTOS: { photo: PhotoRef; year: string }[] = [
  {
    year: "2021",
    photo: {
      src: "/images/event/past-event-2021.jpg",
      label: "HOME_PAST_EVENT_01",
      subject: "Past event — 2021 runners passing a mural",
      aspect: "4:5",
      alt: "Runners passing a colorful mural during the 2021 American X History Tour.",
      objectPosition: "44% 50%",
    },
  },
  {
    year: "2022",
    photo: {
      src: "/images/event/past-event-2022-a.jpg",
      label: "HOME_PAST_EVENT_02",
      subject: "Past event — 2022 group photo at the Historic Hampton House",
      aspect: "4:5",
      alt: "Group photo of participants in front of the Historic Hampton House Cultural Center sign, 2022 American X History Tour.",
    },
  },
  {
    year: "2022",
    photo: {
      src: "/images/event/past-event-2022-b.jpg",
      label: "HOME_PAST_EVENT_03",
      subject: "Past event — 2022 group photo at Muhammad Ali Way",
      aspect: "4:5",
      alt: "Group photo of participants at the Convention Center Dr / Muhammad Ali Way intersection, 2022 American X History Tour.",
    },
  },
  {
    year: "2024",
    photo: {
      src: "/images/event/past-event-2024-a.png",
      label: "HOME_PAST_EVENT_04",
      subject: "Past event — 2024 group photo at Miami Beach Convention Center",
      aspect: "4:5",
      alt: "Group photo of participants at the Miami Beach Convention Center, 2024 American X History Tour.",
    },
  },
  {
    year: "2024",
    photo: {
      src: "/images/event/past-event-2024-b.png",
      label: "HOME_PAST_EVENT_05",
      subject: "Past event — 2024 group photos in Brownsville",
      aspect: "4:5",
      alt: "Group photos of participants in the Brownsville neighborhood, 2024 American X History Tour.",
    },
  },
  {
    year: "2024",
    photo: {
      src: "/images/event/past-event-2024-c.png",
      label: "HOME_PAST_EVENT_06",
      subject: "Past event — 2024 bike ride along the bay",
      aspect: "4:5",
      alt: "Participants biking along the bay with the Miami skyline behind them, 2024 American X History Tour.",
    },
  },
  {
    year: "2024",
    photo: {
      src: "/images/event/past-event-2024-d.png",
      label: "HOME_PAST_EVENT_07",
      subject: "Past event — 2024 group at the Historic Hampton House pool",
      aspect: "4:5",
      alt: "Overhead view of participants gathered at the Historic Hampton House pool courtyard, 2024 American X History Tour.",
    },
  },
  {
    year: "2024",
    photo: {
      src: "/images/event/past-event-2024-e.png",
      label: "HOME_PAST_EVENT_08",
      subject: "Past event — 2024 South Beach Boxing event",
      aspect: "4:5",
      alt: "Two participants posing at a South Beach Boxing gym event during the American X History Tour.",
    },
  },
];
