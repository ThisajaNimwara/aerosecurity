import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NAV_OVERLAY } from "@/lib/site";

type NavOverlayProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
};

export function NavOverlay({ open, onClose, onNavigate }: NavOverlayProps) {
  const reduced = useReducedMotion() ?? false;
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="nav-overlay"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto overscroll-contain bg-menu text-menu-fg"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sticky top-0 z-10 flex items-start justify-end bg-menu px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-2 sm:px-10 sm:pt-8 lg:px-16">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="group flex min-h-11 items-center gap-2.5 py-2 text-menu-fg transition-opacity duration-150 hover:opacity-55"
            >
              <span
                aria-hidden="true"
                className="font-sans text-xl font-semibold leading-none tracking-tight sm:text-2xl"
              >
                X
              </span>
              <span className="font-sans text-sm font-semibold uppercase tracking-[0.32em] sm:text-base">
                Close
              </span>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col px-6 pt-6 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-10 sm:pt-4 sm:pb-16 lg:px-16 lg:pt-6"
            aria-label="Full site navigation"
          >
            <ul className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
              {NAV_OVERLAY.map((item, i) => (
                <li key={item.id}>
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.4,
                      delay: reduced ? 0 : 0.04 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => onNavigate(item.href)}
                      className="group block min-h-11 text-left"
                    >
                      <span className="inline-flex items-baseline gap-x-1 font-sans text-[clamp(2.35rem,8.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-menu-fg transition-opacity duration-150 group-hover:opacity-55">
                        {item.label}
                        {item.subs?.length ? (
                          <sup
                            aria-hidden="true"
                            className="relative -top-2 ml-0.5 align-super font-sans text-[0.38em] font-medium tracking-normal text-menu-fg/45 sm:-top-3"
                          >
                            {item.subs.length}
                          </sup>
                        ) : null}
                      </span>
                      {item.note ? (
                        <span className="mt-2 block font-sans text-sm font-normal tracking-[-0.01em] text-menu-muted sm:text-base lg:text-lg">
                          ({item.note})
                        </span>
                      ) : null}
                      {item.subs?.length ? (
                        <span className="sr-only">{`(${item.subs.length} sub-items)`}</span>
                      ) : null}
                    </button>

                    {item.subs?.length ? (
                      <ul className="mt-5 flex flex-col gap-3.5 pl-0 sm:mt-6 sm:gap-4 sm:pl-1 lg:mt-7">
                        {item.subs.map((sub) => (
                          <li key={sub.label}>
                            <button
                              type="button"
                              onClick={() => onNavigate(sub.href)}
                              className="group flex min-h-11 w-full items-start gap-3 py-0.5 text-left font-sans text-[0.95rem] leading-relaxed font-normal text-menu-muted hover:text-menu-fg sm:gap-3.5 sm:text-lg lg:text-xl"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-0.5 shrink-0 text-menu-muted/70 transition-colors duration-150 group-hover:text-primary sm:mt-1"
                              >
                                {"\u21B3"}
                              </span>
                              <span className="text-pretty">{sub.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
