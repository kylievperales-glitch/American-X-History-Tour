// The tour is produced by the Miami Athletic Association, with two
// confirmed partners: RunAdic and The Historic Hampton House. Keep this
// list to real, confirmed organizations only — do not add placeholder
// tiers/entries speculatively. When a new partner is confirmed, add an
// entry to PARTNERS below; there's no need for a tier system until the
// roster is large enough to warrant grouping.

export const ORGANIZER = {
  name: "Miami Athletic Association",
  role: "Produces and organizes the American X History Tour of Miami.",
  logoLabel: "LOGO_MAA",
  logoSrc: "/images/partners/miami-athletic-association.png",
  logoAspect: "1000 / 1002", // matches the source file's actual pixel dimensions
};

export type Partner = {
  id: string;
  name: string;
  role: string;
  logoLabel: string;
  logoSrc?: string | null; // real logo image once supplied; renders the placeholder box when null/absent
  logoAspect?: string; // CSS aspect-ratio value matching the logo file's real dimensions, so its card isn't stretched/letterboxed to a generic shape
  logoMaxWidth?: string; // Tailwind max-w-* class for the logo card; wider for landscape logos so their rendered height matches a square logo's, keeping cards in the grid visually level
  href?: string; // optional internal link to related content on this site
  linkLabel?: string;
};

export const PARTNERS: Partner[] = [
  {
    id: "runadic",
    name: "RunAdic",
    role: "Event partner. [ROLE DETAIL TO VERIFY]",
    logoLabel: "LOGO_RUNADIC",
    logoSrc: "/images/partners/runadic.png",
    logoAspect: "970 / 972",
  },
  {
    id: "hampton-house",
    name: "The Historic Hampton House",
    role: "Cultural and historical partner — a stop on the route and central to the story the tour tells.",
    logoLabel: "LOGO_HAMPTON_HOUSE",
    logoSrc: "/images/partners/historic-hampton-house.png",
    logoAspect: "374 / 198",
    logoMaxWidth: "max-w-[530px]",
    href: "/route#hampton-house",
    linkLabel: "See the Hampton House on the route",
  },
];

export const SPONSORSHIP_CONTACT = {
  email: "miamiathleticassociation@gmail.com",
};
