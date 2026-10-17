// The tour is produced by the Miami Athletic Association. Partners are split
// into `current` (involved in the 2027 Xperience) and `past` (involved in
// previous Xperiences — do not imply they're confirmed for 2027). Keep this
// list to real, confirmed organizations only — do not add placeholder
// entries or sponsorship levels speculatively.

export const ORGANIZER = {
  name: "Miami Athletic Association",
  role: "Produces and organizes the American X History Tour of Miami.",
  logoLabel: "LOGO_MAA",
  logoSrc: "/images/partners/miami-athletic-association.png",
  logoAspect: "1000 / 1002", // matches the source file's actual pixel dimensions
};

export type PartnerGroup = "current" | "past";

export type Partner = {
  id: string;
  name: string;
  group: PartnerGroup;
  label: string; // small kicker shown above the name, e.g. "2027 Partner"
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
    group: "current",
    // Change to "2027 Title Sponsor" once that status is confirmed.
    label: "2027 Partner",
    role: "RunAdic supports registration and event participation for the 2027 American X History Xperience.",
    logoLabel: "LOGO_RUNADIC",
    logoSrc: "/images/partners/runadic.png",
    logoAspect: "970 / 972",
  },
  {
    id: "hampton-house",
    name: "The Historic Hampton House",
    group: "past",
    label: "Past & Historical Partner",
    role: "The Historic Hampton House has played an important role in previous American X History Xperiences and remains central to the historical story the tour tells.",
    logoLabel: "LOGO_HAMPTON_HOUSE",
    logoSrc: "/images/partners/historic-hampton-house.png",
    logoAspect: "374 / 198",
    logoMaxWidth: "max-w-[530px]",
    href: "/route#hampton-house",
    linkLabel: "See the Hampton House on past routes",
  },
];

export const SPONSORSHIP_CONTACT = {
  email: "miamiathleticassociation@gmail.com",
};
