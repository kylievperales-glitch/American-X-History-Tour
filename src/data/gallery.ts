import type { AspectRatio, PhotoRef } from "./types";

export type GalleryCategory =
  | "Archive"
  | "The Route"
  | "The Event"
  | "Miami Then"
  | "Miami Now"
  | "Community";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Archive",
  "The Route",
  "The Event",
  "Miami Then",
  "Miami Now",
  "Community",
];

export type GalleryItem = PhotoRef & {
  id: string;
  year: string;
  location: string;
  category: GalleryCategory;
};

// A rotation of aspect ratios keeps the masonry grid visually varied.
const ratios: AspectRatio[] = ["3:2", "4:5", "1:1", "16:9", "2:3"];

function ratioFor(index: number): AspectRatio {
  return ratios[index % ratios.length];
}

const seed: Array<{
  subject: string;
  category: GalleryCategory;
  year: string;
  location: string;
}> = [
  { subject: "Cassius Clay — Miami-era portrait", category: "Archive", year: "1961", location: "Miami, FL" },
  { subject: "5th Street Gym — training session", category: "Archive", year: "1962", location: "Miami Beach, FL" },
  { subject: "Historic Hampton House — exterior", category: "Archive", year: "1963", location: "Brownsville, Miami" },
  { subject: "Angelo Dundee corner work", category: "Archive", year: "1963", location: "Miami Beach, FL" },
  { subject: "Miami Beach Convention Center — fight night", category: "Archive", year: "1964", location: "Miami Beach, FL" },
  { subject: "Press conference following the title win", category: "Archive", year: "1964", location: "Miami Beach, FL" },
  { subject: "Hampton House — restored interior", category: "Miami Now", year: "Present", location: "Brownsville, Miami" },
  { subject: "Muhammad Ali Way signage", category: "Miami Now", year: "Present", location: "Miami Beach, FL" },
  { subject: "Wynwood street scene", category: "Miami Now", year: "Present", location: "Wynwood, Miami" },
  { subject: "MacArthur Causeway at sunrise", category: "Miami Now", year: "Present", location: "Miami" },
  { subject: "Brownsville neighborhood, mid-century", category: "Miami Then", year: "c. 1962", location: "Brownsville, Miami" },
  { subject: "Downtown Miami skyline, mid-century", category: "Miami Then", year: "c. 1963", location: "Miami, FL" },
  { subject: "Ocean Drive, mid-century", category: "Miami Then", year: "c. 1964", location: "Miami Beach, FL" },
  { subject: "Route map — Hampton House to Miami Beach", category: "The Route", year: "Present", location: "Miami" },
  { subject: "Route marker — Stop 01", category: "The Route", year: "Present", location: "Brownsville, Miami" },
  { subject: "Causeway crossing, wide shot", category: "The Route", year: "Present", location: "Miami" },
  { subject: "Finish line at Muhammad Ali Way", category: "The Route", year: "Present", location: "Miami Beach, FL" },
  { subject: "Sunrise gathering before the start", category: "The Event", year: "Present", location: "Brownsville, Miami" },
  { subject: "Participants walking the route", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Runners crossing the causeway", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Wheelchair participants on the route", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Volunteers at a water station", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Finish-line celebration", category: "The Event", year: "Present", location: "Miami Beach, FL" },
  { subject: "Cyclists on the route", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Community members cheering", category: "Community", year: "Present", location: "Miami" },
  { subject: "Local youth group at the Hampton House", category: "Community", year: "Present", location: "Brownsville, Miami" },
  { subject: "Family portrait at the finish", category: "Community", year: "Present", location: "Miami Beach, FL" },
  { subject: "Post-event gathering", category: "Community", year: "Present", location: "Miami" },
  { subject: "Rollerblade participants", category: "The Event", year: "Present", location: "Miami" },
  { subject: "Skyline view from the causeway", category: "Miami Now", year: "Present", location: "Miami" },
];

export const GALLERY_ITEMS: GalleryItem[] = seed.map((item, index) => ({
  id: `gallery-${index + 1}`,
  src: null,
  label: `GALLERY_${String(index + 1).padStart(2, "0")}`,
  subject: item.subject,
  aspect: ratioFor(index),
  alt: "[ALT TEXT TO ADD]",
  year: item.year,
  location: item.location,
  category: item.category,
}));
