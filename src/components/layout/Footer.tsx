import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal-line bg-ink">
      <div className="container-edit grid grid-cols-1 gap-10 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-white">{SITE.name}</p>
          <p className="mt-2 font-sans text-sm text-muted">Miami, Florida</p>
          <p className="font-serif mt-6 max-w-sm text-sm leading-relaxed text-muted-strong">
            Produced through the {SITE.producedBy}. History. Movement. Miami.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-muted">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-muted-strong transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-muted">Connect</p>
          <ul className="mt-4 space-y-2.5 font-sans text-sm text-muted-strong">
            <li>
              <a
                href="https://www.instagram.com/miamiathletic"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/MiamiAthleticAssociation"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="mailto:miamiathleticassociation@gmail.com"
                className="transition-colors hover:text-accent"
              >
                miamiathleticassociation@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-line py-6">
        <div className="container-edit flex flex-col gap-2 font-sans text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.fullName}. {SITE.producedBy}.
          </p>
          <p>History. Movement. Miami.</p>
        </div>
      </div>
    </footer>
  );
}
