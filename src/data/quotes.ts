export type Quote = {
  id: string;
  text: string; // "[QUOTE PLACEHOLDER]" until an exact, sourced quotation is approved
  attribution: string;
  context?: string;
  year?: string;
};

// Do not invent quotations. Every entry stays a visible placeholder until a
// real, sourced quote is supplied — see brief section 17 & 37.
export const QUOTES: Quote[] = [
  {
    id: "quote-story-01",
    text: "[QUOTE PLACEHOLDER — TO BE SOURCED AND APPROVED]",
    attribution: "[ATTRIBUTION TO VERIFY]",
    context: "On training in Miami",
  },
  {
    id: "quote-story-02",
    text: "[QUOTE PLACEHOLDER — TO BE SOURCED AND APPROVED]",
    attribution: "[ATTRIBUTION TO VERIFY]",
    context: "On the 1964 championship",
    year: "1964",
  },
  {
    id: "quote-about-01",
    text: "[QUOTE PLACEHOLDER — TO BE SOURCED AND APPROVED]",
    attribution: "Kevin Krueger",
    context: "On why the American X History Tour exists",
  },
];
