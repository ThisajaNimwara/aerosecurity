import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MARKETS } from "@/lib/site";
import { SectionLabel } from "@/components/landing/section-label";
import { Reveal, Stagger, StaggerItem } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function Solutions() {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel index="03" label="Solutions" />
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            Built for commercial LEO and defense UAS.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map((item) => (
            <StaggerItem key={item.index}>
              <article className="h-full border border-border bg-surface p-5 transition-[border-color] duration-150 hover:border-fg/30">
                <span className="font-mono text-micro text-signal">{item.index}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.12}>
          <Button
            variant="outline"
            className="mt-8"
            onClick={() => {
              void navigate({ to: "/solutions" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            All seven capabilities
            <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
