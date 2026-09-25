import { createFileRoute } from "@tanstack/react-router";
import { Building2, Radio, ShieldCheck, Timer } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";
import { CalEmbed } from "@/components/landing/cal-embed";
import { COMPLIANCE } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const CHANNELS = [
  {
    icon: ShieldCheck,
    title: "Cleared channel",
    body: "Every briefing routes to a specialist over an authenticated path — no cold inboxes.",
  },
  {
    icon: Timer,
    title: "30-minute slot",
    body: "Pick a time on the dark-mode scheduler. Official-domain attendees only.",
  },
  {
    icon: Radio,
    title: "Active programs",
    body: "Already under contract? Use your existing program liaison instead of this calendar.",
  },
] as const;

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        index="05"
        label="Contact"
        title="Open a secure channel."
        intro="Book a 30-minute clearance briefing. Dual-use coverage for commercial LEO constellations and defense unmanned systems — R&D in Colombo, Sri Lanka; corporate entity in the United States."
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <CalEmbed />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              {CHANNELS.map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 border-b border-border pb-6 last:border-b-0 last:pb-0"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-surface text-primary">
                    <c.icon className="size-4.5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-fg">
                      {c.title}
                    </h2>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-2">
                <p className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                  Compliance
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {COMPLIANCE.map((badge) => (
                    <span
                      key={badge}
                      className="border border-border px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-fg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="mt-4 grid gap-px border border-border bg-border">
                <div className="bg-surface px-5 py-4">
                  <dt className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.16em] text-dim">
                    <Building2 className="size-3.5" />
                    Primary R&D
                  </dt>
                  <dd className="mt-1 text-sm text-fg">Colombo, Sri Lanka</dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                    Corporate entity
                  </dt>
                  <dd className="mt-1 text-sm text-fg">United States</dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                    Engineering & security
                  </dt>
                  <dd className="mt-1 text-sm text-fg">Colombo, Sri Lanka</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
