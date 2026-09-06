// Shared content types. Keep presentation components dumb — they render
// whatever shape these types describe — so content can be edited here
// without touching JSX.

export type AspectRatio = "3:2" | "4:5" | "16:9" | "1:1" | "2:3" | "9:16";

// Describes an image slot that has not been filled with a final asset yet.
// `src: null` renders the visual PhotoPlaceholder component. Once a real
// photo exists, set `src` to its path under /public/images/... and the
// placeholder automatically stops rendering (see PhotoPlaceholder.tsx).
export type PhotoRef = {
  src: string | null;
  label: string; // short slot id, e.g. "HERO_01" — matches the README image guide
  subject: string; // suggested image content, shown inside the placeholder
  aspect: AspectRatio;
  alt: string; // fill in real alt text when the final photo is added
  credit?: string;
  objectPosition?: string; // e.g. "center 30%" — notes for cropping once real
};

export type ContentStatus = "content-review" | "verified" | "placeholder-copy";
