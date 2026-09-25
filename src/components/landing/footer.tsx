import { type FormEvent, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPLIANCE } from "@/lib/site";
import { WORK_EMAIL_ERROR, isWorkEmail } from "@/lib/work-email";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Insights", href: "/insights" },
      { label: "Documentation", href: "docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about#careers" },
      { label: "Partnerships", href: "/about#investments" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Export Control", href: "/export" },
    ],
  },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isWorkEmail(email)) {
      setError(WORK_EMAIL_ERROR);
      toast.error("Work email required.", { description: WORK_EMAIL_ERROR });
      return;
    }
    setError(null);
    toast.success("Channel opened.", {
      description: "A specialist will respond on a secure path.",
    });
    setEmail("");
  }

  async function onLink(href: string) {
    if (href === "docs") {
      toast("Controlled document", {
        description: "Full documentation is available under NDA / CUI handling.",
      });
      return;
    }
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
    <footer className="border-t border-border">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold tracking-[-0.03em] text-fg sm:text-3xl">
            Secure your most critical assets today.
          </h2>
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-[400px] shrink-0 flex-col gap-2 lg:ml-auto"
            noValidate
          >
            <div className="flex w-full max-w-[400px] flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="[ WORK EMAIL ]"
                aria-label="Work email"
                aria-invalid={error ? true : undefined}
                className="w-full max-w-[400px] placeholder:uppercase placeholder:tracking-[0.08em]"
              />
              <Button type="submit" className="shrink-0">
                Initiate
              </Button>
            </div>
            {error ? (
              <p className="font-mono text-micro leading-relaxed text-primary">{error}</p>
            ) : (
              <p className="font-mono text-micro uppercase tracking-[0.12em] text-dim">
                Official domain only · no Gmail / Yahoo
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-mono text-sm text-fg">
            <span className="text-signal">{"<"}</span> aerosecurity.space{" "}
            <span className="text-signal">{"/>"}</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Dual-use cybersecurity for commercial LEO constellations and defense
            unmanned systems. R&D in Colombo, Sri Lanka. Corporate entity in the
            United States.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {COMPLIANCE.map((badge) => (
              <span
                key={badge}
                className="border border-border px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-dim"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-micro uppercase tracking-[0.18em] text-muted">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => onLink(link.href)}
                    className="tactical-hit text-sm text-fg/80 hover:text-signal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono text-micro uppercase tracking-[0.14em] text-dim">
            © 2026 aerosecurity.space
          </p>
          <p className="font-mono text-micro uppercase tracking-[0.14em] text-dim">
            Unclassified marketing surface
          </p>
        </div>
      </div>
    </footer>
  );
}
