# American X History — Tour of Miami

A multi-page Next.js site for the American X History Tour of Miami, produced
through the Miami Athletic Association. This README is written for whoever
edits the site next — it explains where content lives, how to swap in real
photography, and how to deploy.

## Running the site

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint      # ESLint
```

Requires Node 20.9+ (this project was built on Next.js 16 with Turbopack).

## Site map

| Route        | Page                                    |
| ------------ | ---------------------------------------- |
| `/`          | Home — trailer for the whole site        |
| `/story`     | The Story — 7-chapter narrative          |
| `/timeline`  | Interactive timeline                     |
| `/route`     | The Route — stop-by-stop guide           |
| `/event`     | The Experience — participation & logistics |
| `/gallery`   | Gallery — filterable photo grid + lightbox |
| `/partners`  | Partners / sponsorship tiers             |
| `/about`     | About American X History & the Miami Athletic Association |

Each is a real file under `src/app/<route>/page.tsx` — actual Next.js App
Router pages, not scroll-anchors on one long homepage.

## Where content lives

All editable copy and structured content lives in `src/data/*.ts`, separate
from the JSX that renders it. Edit these files — you shouldn't need to touch
component code to update text, dates, or add a stop/photo/partner.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Site name, tagline, nav items, CTA button labels |
| `src/data/story.ts` | The Story page's 7 chapters |
| `src/data/timeline.ts` | Every timeline entry (`/timeline` and the homepage teaser pull from the same list — see `HOME_TIMELINE_IDS`) |
| `src/data/route.ts` | Route stops, in order, plus the 4-mile/9-mile distance labels |
| `src/data/event.ts` | Ways to participate + the editable event logistics block (date, start/finish, registration URL, cost) |
| `src/data/gallery.ts` | Every gallery image — subject, category, year, location |
| `src/data/partners.ts` | Partner tiers and entries, sponsorship contact info |
| `src/data/quotes.ts` | Pull quotes — every entry stays a visible `[QUOTE PLACEHOLDER]` until you add a real, sourced quotation |

**Do not invent facts.** Anything marked `[CONTENT TO VERIFY]`, `[DATE TO
VERIFY]`, or `[VERIFY HISTORICAL DETAIL]` in these files is a placeholder
for content that needs a source before it goes live — search each data file
for those tags before publishing.

## Replacing photo placeholders

Every image slot on the site is a `PhotoRef` object (see
`src/data/types.ts`):

```ts
{
  src: null,                          // ← set this to add the real photo
  label: "HERO_01",                   // slot id, matches this guide
  subject: "Cassius Clay — Miami-era boxing portrait",
  aspect: "4:5",
  alt: "[ALT TEXT TO ADD]",           // ← write real alt text when you add the photo
  credit: undefined,                  // optional photo credit
  objectPosition: undefined,          // optional crop hint, e.g. "center 30%"
}
```

To swap in a real photo:

1. Add the image file to the matching folder under `public/images/` (see
   structure below).
2. Set `src` to that path, e.g. `"/images/hero/hero-01.jpg"`.
3. Write real `alt` text — this is required for accessibility and currently
   holds a `[ALT TEXT TO ADD]` placeholder.

As soon as `src` is non-null, `PhotoPlaceholder` (`src/components/ui/PhotoPlaceholder.tsx`)
automatically renders the real photo instead of the placeholder box — no
other code changes needed.

### Image folders

```
public/images/
  hero/        Homepage hero art
  archive/     Archival/historical photography (1960s–1964)
  locations/   Route stop photography (both archival + modern pairs)
  event/       Modern event photography (participants, volunteers, etc.)
  gallery/     Gallery page images
  partners/    Partner/sponsor logos
  og/          Social share preview image (see below)
```

### Recommended sizes

| Slot type | Aspect | Minimum resolution |
| --- | --- | --- |
| Hero (`HERO_01`) | 4:5 portrait | 1600 × 2000 |
| Archival/modern pairs (route, then/now) | 3:2 or 4:5 | 1200 × 800+ |
| Gallery images | varies (3:2, 4:5, 1:1, 16:9, 2:3) | 1200px on the long edge |
| Partner logos | any, shown in a 3:2 box | SVG preferred, or 800×533 PNG |
| Social preview (`/images/og/social-preview.jpg`) | 1200 × 630 | required for link previews |

### Favicon

`src/app/favicon.ico` is still the Next.js default placeholder — replace it
with a real favicon before launch.

## Adding a gallery photo

Add an entry to the `seed` array in `src/data/gallery.ts` (subject, category,
year, location) — the grid, the aspect-ratio rotation, and the lightbox all
pick it up automatically. Categories are defined in `GALLERY_CATEGORIES` in
the same file.

## Adding a sponsor/partner

Add an entry to the `PARTNERS` array in `src/data/partners.ts` with the
correct `tier` (`"Presenting Partner"`, `"Community Partners"`, `"Cultural /
Historical Partners"`, or `"Hospitality & Tourism Partners"`). The `/partners`
page groups and renders by tier automatically.

## Changing the accent color

All color tokens live in `src/app/globals.css`, in the `:root` block at the
top of the file. The gold accent is deliberately split into **two shades** —
this isn't arbitrary, it's what keeps small gold text/labels readable against
both the dark and light sections:

- `--color-accent` — the everyday accent (text, borders, dots, underlines).
  It's a bright, saturated gold that clears ~9:1 contrast against
  `--color-ink`, well past WCAG AA.
- `--color-accent-fill` — the deep antique-gold/bronze used for solid
  button/pill backgrounds (white text sits on top of this one, so it can
  afford to be darker).

Large accent display text (numerals, marks — text-xl and up) uses the
`.text-metallic-gold` / `.text-metallic-gold-on-light` utility classes
instead of a flat `text-accent` color, for the brushed-foil sheen. Both are
defined next to the color tokens in `globals.css`, driven by the
`--gradient-gold-metallic*` custom properties — change the gradient stops
there to adjust the sheen. Small text stays a flat color on purpose; a
gradient just reads as banding at that size.

If you change either, re-check contrast against both `--color-ink` (dark
sections) and `--color-paper` (light sections) before shipping — a contrast
checker like WebAIM's is enough. `Eyebrow` (`src/components/ui/Eyebrow.tsx`)
takes a `tone="dark" | "light"` prop for exactly this reason; keep passing
the right tone if you add new instances.

## Design system

- **Fonts**: Anton (display/headlines), Source Serif 4 (long-form body
  copy), Inter (UI/labels/nav) — loaded via `next/font/google` in
  `src/app/layout.tsx`.
- **Layout tokens**: `--content-max`, `--prose-max`, `--section-pad-y`,
  `--edge-pad-x` in `globals.css` control the editorial grid site-wide.
- **Reusable components** live in `src/components/ui/` — `PhotoPlaceholder`,
  `ArchiveImage`, `EditorialCollage` (four collage layouts: `CollageHugePlusTwo`,
  `CollageStaggeredThree`, `CollageVerticalWithMark`, `CollageOverlapDate`),
  `ThenNow`, `PhotoStrip`, `QuoteBlock`, `TimelineEntry`, `RouteStop`,
  `SectionIntro`, `EventCTA`, `Spotlight`, `Reveal`, `Button`, `Eyebrow`.
  Reach for these instead of writing new one-off markup where they fit.

## Deploying

This is a standard Next.js App Router project — it deploys to Vercel with no
extra configuration (`vercel deploy` or connect the repo in the Vercel
dashboard). For any other Node host, `npm run build && npm run start` serves
the production build.

Before launching:

- [ ] Replace every `PhotoRef` placeholder with real photography
- [ ] Resolve every `[CONTENT TO VERIFY]` / `[DATE TO VERIFY]` /
      `[VERIFY HISTORICAL DETAIL]` tag in `src/data/`
- [ ] Add real quotations to `src/data/quotes.ts` (or remove the sections
      that reference them)
- [ ] Fill in `src/data/event.ts` with confirmed logistics
- [ ] Add real partner names/logos to `src/data/partners.ts`
- [ ] Replace `src/app/favicon.ico` and add `/public/images/og/social-preview.jpg`
- [ ] Update `SITE.url` in `src/data/site.ts` to the production domain
