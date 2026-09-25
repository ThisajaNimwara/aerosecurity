import { useEffect, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZuluClock } from "@/components/landing/zulu-clock";
import { NavOverlay } from "@/components/landing/nav-overlay";
import { SystemStatus } from "@/components/landing/system-status";
import { NAV } from "@/lib/site";
import { useGoContact } from "@/lib/go-contact";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goContact = useGoContact();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function go(href: string) {
    setOpen(false);
    const [path, hash] = href.split("#");
    await navigate({ to: path || "/", hash: hash || undefined });
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled && !open
          ? "border-border bg-bg/75 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="/"
          className="tactical-hit font-mono text-xs tracking-[0.08em] text-fg sm:text-sm"
          onClick={(e) => {
            e.preventDefault();
            go("/");
          }}
        >
          <span className="text-signal">{"<"}</span>{" "}
          <span className="hidden sm:inline">aerosecurity.space</span>
          <span className="sm:hidden">aero</span>{" "}
          <span className="text-signal">{"/>"}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.filter((item) => item.id !== "contact").map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.href);
                }}
                className={cn(
                  "group relative flex h-11 items-center px-3 font-mono text-2xs uppercase tracking-[0.18em] transition-colors duration-150",
                  isActive
                    ? "text-fg"
                    : "text-muted hover:bg-signal hover:text-bg",
                )}
              >
                <span
                  className={cn(
                    "mr-1 text-signal transition-opacity duration-150 group-hover:text-bg",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                >
                  [
                </span>
                {item.label}
                <span
                  className={cn(
                    "ml-1 text-signal transition-opacity duration-150 group-hover:text-bg",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                >
                  ]
                </span>
                <span
                  className={cn(
                    "absolute top-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-signal transition-opacity duration-150",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <SystemStatus />
          <span className="hidden font-mono text-micro tabular-nums text-dim xl:inline">
            <ZuluClock />
          </span>
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              setOpen(false);
              goContact();
            }}
          >
            Request Clearance
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <NavOverlay open={open} onClose={() => setOpen(false)} onNavigate={go} />
    </header>
  );
}
