import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";
import { useGoContact } from "@/lib/go-contact";
import { CAREERS, COMPLIANCE, FACTS, PARTNERSHIPS } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

const MANATEL_URL = "https://manatel.com";

const STEPS = [
  {
    n: "01",
    title: "Instrument the vehicle",
    body: "The EDR agent compiles into the flight image and watches the buses the vehicle already has — 1553, SpaceWire, MAVLink, proprietary RF.",
  },
  {
    n: "02",
    title: "Bind the fleet",
    body: "CEMP puts every airframe or bird into a signed enclave so policy, patches, and containment share one control plane.",
  },
  {
    n: "03",
    title: "Prove it on the metal",
    body: "The HITL range runs adversary emulation against the same radios and software that fly, before the image ever leaves the hangar.",
  },
  {
    n: "04",
    title: "Seal and fly",
    body: "Pre-flight hardening fails closed. On-device agents keep classifying when the ground loop is denied.",
  },
] as const;

function AboutPage() {
  const goContact = useGoContact();

  return (
    <PageShell>
      <PageHeader
        index="03"
        label="About"
        title="Forged for aerospace. Secured for the future."
        intro="A 2026 dual-use control plane for commercial LEO constellations and defense unmanned systems — engineered in Colombo, Sri Lanka, with a U.S. corporate entity."
      />

      <section id="who-we-are" className="scroll-mt-28 border-t border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              Who we are
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              aerosecurity.space was founded in 2026 by embedded, RF, and
              offensive-security engineers who had watched classical EDR fail the
              first time it met a real-time budget. We assume a hostile spectrum
              and design as if the neighbor on the mesh is already compromised.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Primary R&D sits in Colombo, Sri Lanka. The corporate entity is in
              the United States. The platform is dual-use by design: the same
              agent that hardens a commercial LEO constellation also secures
              defense unmanned systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {COMPLIANCE.map((badge) => (
                <span
                  key={badge}
                  className="border border-border px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-fg"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
              {FACTS.map((fact) => (
                <div key={fact.k} className="bg-surface px-5 py-4">
                  <dt className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                    {fact.k}
                  </dt>
                  <dd className="mt-1 text-sm text-fg">{fact.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="what-we-do" className="scroll-mt-28 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Dual-use cybersecurity for commercial space companies and defense
              operators worldwide. The same agent that rides a NASA cFS stack on
              orbit hardens a tactical UAV fleet on the edge. Four moves, one
              platform.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" delay={0.06}>
            {STEPS.map((step) => (
              <StaggerItem key={step.n}>
                <article className="h-full border border-border bg-surface p-6">
                  <span className="font-mono text-micro text-signal">{step.n}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="careers" className="scroll-mt-28 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              Careers
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Recruitment is managed via Manatel.com. Open roles rotate with
              program needs — tell us where you fit and the Manatel desk routes
              it internally.
            </p>
          </Reveal>
          <ul className="mt-10 divide-y divide-border border border-border">
            {CAREERS.map((job) => (
              <li key={job.id} className="bg-surface px-5 py-6 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-micro uppercase tracking-[0.14em] text-dim">
                      {job.site} · {job.type}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{job.body}</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 self-start" asChild>
                    <a href={MANATEL_URL} target="_blank" rel="noreferrer">
                      Apply on Manatel
                    </a>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="investments" className="scroll-mt-28 border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              Investments and partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              We work with primes, commercial space operators, and strategic
              investors building for a contested spectrum. If you are evaluating
              the platform for a program, a partnership, or a funding round,
              request a secure channel.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3" delay={0.06}>
            {PARTNERSHIPS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="h-full border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <Button className="mt-8" onClick={goContact}>
              Request a secure briefing
            </Button>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
