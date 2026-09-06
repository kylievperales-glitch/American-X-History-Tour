# Fact-check checklist

Every item below is currently marked as unverified in the site's content
files (`src/data/*.ts`). Nothing here was invented — these are placeholders
intentionally left for a human (you or Kevin Krueger) to confirm against a
real source before launch. Check items off as you verify or correct them,
then update the corresponding line in the data file.

**Recommended sources**, roughly in order of authority for this content:
1. **Kevin Krueger / Miami Athletic Association** — anything specific to
   this event: route stops, mile distances, dates, addresses, sponsorship
   details. This is his material; verify against his notes/article directly
   rather than a secondary source.
2. **Historic Hampton House** — for anything about the Hampton House itself;
   they publish their own vetted history.
3. **Miami Herald archives** (especially February 1964 coverage) and
   **HistoryMiami Museum** — for the Clay/Liston fight and Miami's
   segregation-era context.
4. **Published Ali biographies** (e.g., David Remnick's *King of the World*)
   — for the Clay→Ali transformation and broader biographical facts.

Do not substitute a plausible-sounding fact for a verified one — an
incorrect date/address on a civil-rights-history site is worse than a
visible placeholder.

---

## The Story page (`src/data/story.ts`)

- [x] **Chapter 01 — Coming to Miami**: Clay's move to Miami — timing, circumstances — verified
- [x] **Chapter 02 — The 5th Street Gym**: Dundee/gym details — verified
- [x] **Chapter 03 — A Divided City**: segregation-era claims about the Hampton House and Black travel in Miami — verified
- [x] **Chapter 04 — February 25, 1964**: fight details, underdog framing — verified
- [x] **Chapter 05 — Cassius Clay → Muhammad Ali**: timing and framing of the name change/NOI announcement — verified
- [x] **Chapter 06 — The Legacy** — verified (still a broad/general claim, not sharpened with specifics)

## Timeline (`src/data/timeline.ts`)

- [x] **1960 — Olympic Gold**: exact medal/event details — verified
- [x] **Early 1960s — Clay Comes to Miami**: date range — verified
- [x] **Early 1960s — Training at the 5th Street Gym** — verified
- [x] **Early 1960s — A Divided City**: Hampton House / Green Book claims — verified
- [x] **Feb 25, 1964 — Clay vs. Liston** — verified
- [x] **1964 — Cassius Clay Becomes Muhammad Ali** — verified
- [x] **2015 — Preserving the Hampton House** — verified
- [ ] **`[DATE TO VERIFY]` — The American X History Tour Begins**: needs an actual launch date — ask Kevin

## The Route (`src/data/route.ts`)

- [ ] Mile markers per stop — not yet confirmed at all
- [x] **Stop 01 — Historic Hampton House**: description — verified
- [x] **Stop 02 — Brownsville**: description — verified
- [x] **Stop 03 — Clay's Brownsville Home** — verified (address placeholder removed; description now says "the residence connected to Clay's time living in Miami" without naming a specific address)
- [ ] **Stop 04 — Wynwood / Miami**: description
- [x] **Stop 05 — Venetian Causeway Crossing**: description — verified
- [x] **Stop 06 — Miami Beach Convention Center / Muhammad Ali Way**: description — verified

(5th Street Gym is no longer a route stop — it remains as historical content on the Story and Timeline pages.)
- [ ] Distance options — currently placeholder "4 miles" / "9 miles", ask Kevin to confirm these are still accurate

## Event logistics (`src/data/event.ts`)

All of these are pure placeholders — none are historical claims, they're
just current-year event details Kevin needs to supply:
- [ ] Event date
- [ ] Start time
- [ ] Start location
- [ ] Finish location
- [ ] 4-mile option details
- [ ] 9-mile option details
- [ ] Registration URL
- [ ] Cost

## Partners (`src/data/partners.ts`)

- [ ] **RunAdic**: what exactly is their role on the tour (timing? course operations? something else)? Currently just labeled "Event partner."

## Quotes (`src/data/quotes.ts`)

All three are placeholder text — **do not publish a quote without a named,
dated source**:
- [ ] Quote on training in Miami — needs text + attribution
- [ ] Quote on the 1964 championship — needs text + attribution
- [ ] Quote from Kevin Krueger on why the tour exists — needs text (get this directly from him)

---

Once a section is verified, edit the corresponding value in `src/data/*.ts`
directly and remove the `[…VERIFY…]` bracket text — the site will pick up
the change automatically on next build/refresh.
