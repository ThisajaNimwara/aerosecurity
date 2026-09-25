import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";
import { SolutionsCanvas } from "@/components/landing/solutions-canvas";
import { Button } from "@/components/ui/button";
import { SOLUTION_DETAILS } from "@/lib/site";
import { useGoContact } from "@/lib/go-contact";

export const Route = createFileRoute("/solutions")({ component: SolutionsPage });

function SolutionsPage() {
  const goContact = useGoContact();
  const navigate = useNavigate();

  return (
    <PageShell>
      <PageHeader
        index="02"
        label="Solutions"
        title="Seven capabilities. One control plane."
        intro="Dual-use cybersecurity for commercial LEO constellations and defense unmanned systems. Every product ships from the same EDR core — hardened for the specific bus, radio, or airframe it rides on."
      />
      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 sm:pb-32">
        <Reveal>
          <SolutionsCanvas />
        </Reveal>

        <ol className="mt-16 flex flex-col">
          {SOLUTION_DETAILS.map((cap) => {
            const Icon = cap.icon;
            return (
              <li
                key={cap.id}
                id={cap.id}
                className="scroll-mt-28 border-t border-border py-14 sm:py-16"
              >
                <Reveal>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 items-center justify-center border border-border bg-surface text-primary">
                          <Icon className="size-5" strokeWidth={1.6} />
                        </span>
                        <span className="font-mono text-micro tabular-nums tracking-[0.16em] text-dim">
                          {cap.index} / 07
                        </span>
                      </div>
                      <span className="font-mono text-micro uppercase tracking-[0.16em] text-signal">
                        {cap.kicker}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.025em] text-fg sm:text-3xl lg:text-4xl">
                        {cap.nav}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                        {cap.body}
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                      {cap.specs.map((spec) => (
                        <div key={spec.k} className="bg-surface px-5 py-4">
                          <dt className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                            {spec.k}
                          </dt>
                          <dd className="mt-1 font-mono text-sm text-fg">{spec.v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="grid gap-8 lg:grid-cols-3">
                      <div>
                        <h3 className="font-mono text-micro uppercase tracking-[0.18em] text-muted">
                          Threat
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg/85">{cap.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-mono text-micro uppercase tracking-[0.18em] text-muted">
                          Control
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg/85">{cap.control}</p>
                      </div>
                      <div>
                        <h3 className="font-mono text-micro uppercase tracking-[0.18em] text-muted">
                          Fit
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg/85">{cap.fit}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {cap.platforms.map((p) => (
                          <span
                            key={p}
                            className="border border-border px-2.5 py-1 font-mono text-micro uppercase tracking-[0.12em] text-dim"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" onClick={goContact}>
                        Brief this capability
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal>
          <div className="mt-6 flex flex-col gap-4 border border-border bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base text-fg">
              Not sure which layer you need? A specialist will map the stack to the vehicle.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                void navigate({ to: "/contact" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Open a channel
            </Button>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
