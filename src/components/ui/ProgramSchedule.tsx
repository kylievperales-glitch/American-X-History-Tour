import type { ProgramSlot } from "@/data/event";
import { PROGRAM_STATUS_LABEL } from "@/data/event";
import { cn } from "@/lib/cn";

// The 2027 program as a time-ruled list. Tentative slots carry a visible
// status tag ("Planned" solid gold outline, "Possible" dashed + muted) so
// nothing unconfirmed reads as a fixed part of the day.

export function ProgramSchedule({
  slots,
  note,
  className,
}: {
  slots: ProgramSlot[];
  note?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ol className="divide-y divide-charcoal-line border-y border-charcoal-line">
        {slots.map((slot) => (
          <li
            key={slot.time}
            className={cn(
              "grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8",
              slot.status === "possible" && "opacity-80",
            )}
          >
            <p className="font-display text-metallic-gold text-lg tracking-[0.04em] sm:text-xl">
              {slot.time}
            </p>
            <div>
              <ul className="space-y-3">
                {slot.items.map((item) => (
                  <li key={item.title}>
                    <p className="font-display text-xl text-white sm:text-2xl">{item.title}</p>
                    {item.detail && (
                      <p className="font-serif mt-1 text-base text-muted-strong">{item.detail}</p>
                    )}
                  </li>
                ))}
              </ul>
              {slot.status && (
                <span
                  className={cn(
                    "mt-4 inline-block px-3 py-1 font-sans text-[10px] uppercase tracking-[0.16em]",
                    slot.status === "planned"
                      ? "border border-accent text-accent"
                      : "border border-dashed border-muted text-muted-strong",
                  )}
                >
                  {PROGRAM_STATUS_LABEL[slot.status]}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-5 font-sans text-xs uppercase tracking-[0.14em] text-muted">{note}</p>
      )}
    </div>
  );
}
