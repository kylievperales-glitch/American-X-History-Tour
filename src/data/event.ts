export type ParticipationWay = {
  id: string;
  label: string;
  description: string;
};

// Per brief section 15 & 22 — accessible to far more than competitive
// runners. Keep this list; do not imply competition in copy elsewhere.
export const PARTICIPATION_WAYS: ParticipationWay[] = [
  { id: "walk", label: "Walk", description: "Move through the route at your own pace." },
  { id: "run", label: "Run", description: "Cover the route as a run." },
  { id: "roll", label: "Roll", description: "Wheelchairs and adaptive mobility welcome." },
  { id: "ride", label: "Ride", description: "Cycle the route alongside other participants." },
  { id: "volunteer", label: "Volunteer", description: "Support the route, the stops, and the story." },
  { id: "cheer", label: "Cheer", description: "Show up for the community without covering the route." },
];

// Editable event logistics. Do not invent current-year details — every
// field below should be filled in or confirmed before publishing.
export const EVENT_DETAILS = {
  date: "[EVENT DATE]",
  startTime: "[START TIME]",
  startLocation: "[START LOCATION]",
  finishLocation: "[FINISH LOCATION]",
  shortOption: "[4-MILE OPTION DETAILS]",
  longOption: "[9-MILE OPTION DETAILS]",
  registrationUrl: "[REGISTRATION URL]",
  cost: "[COST / FREE / TBD]",
};

export const EVENT_INTRO =
  "The American X History Tour is a community walk, run, and bike experience connecting Muhammad Ali's Miami story with the city around him. The tour links the Historic Hampton House and Brownsville with sections of mainland Miami and Miami Beach, culminating near the site where Cassius Clay became heavyweight champion in 1964.";

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
