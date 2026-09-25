import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FACTS } from "@/lib/site";
import { SectionLabel } from "@/components/landing/section-label";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <SectionLabel index="06" label="About" />
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            Forged for aerospace. Secured for the future.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            aerosecurity.space designs the cyber-physical control plane for
            vehicles that cannot fail in the air. We sit at the intersection of
            embedded systems, RF, and orbital mesh networking — shipping software
            that assumes a hostile spectrum.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            The platform is dual-use by design: the same EDR agent that hardens
            a commercial LEO constellation also secures defense unmanned systems
            on the edge. Primary R&D in Colombo, Sri Lanka; corporate entity in
            the United States.
          </p>
          <Button
            variant="outline"
            className="mt-8"
            onClick={() => {
              void navigate({ to: "/about" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Who we are
            <ArrowRight />
          </Button>
        </Reveal>
        <Reveal delay={0.12}>
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
  );
}
