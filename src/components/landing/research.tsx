import { FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { RESEARCH } from "@/lib/site";
import { toast } from "sonner";
import { SectionLabel } from "@/components/landing/section-label";
import { Reveal, Stagger, StaggerItem } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function Research() {
  const navigate = useNavigate();

  return (
    <section id="research" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel index="05" label="Insights" />
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            Technical reports, released under control.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Selected findings from the HITL range and on-orbit observation
            campaigns. Full papers ship over a cleared channel.
          </p>
        </Reveal>
        <Stagger className="mt-10 divide-y divide-border border border-border">
          {RESEARCH.slice(0, 3).map((paper) => (
            <StaggerItem key={paper.id}>
              <button
                type="button"
                onClick={() =>
                  toast("Document queued", {
                    description: `${paper.id} is available under NDA.`,
                  })
                }
                className="flex w-full flex-col gap-2 bg-surface px-4 py-5 text-left transition-colors duration-150 hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
              >
                <span className="flex size-9 shrink-0 items-center justify-center border border-border text-muted">
                  <FileText className="size-4" />
                </span>
                <span className="font-mono text-micro tracking-[0.12em] text-signal">
                  {paper.id}
                </span>
                <span className="flex-1 text-sm font-medium text-fg sm:text-base">
                  {paper.title}
                </span>
                <span className="font-mono text-micro text-dim">{paper.pages}</span>
                <span className="font-mono text-micro tabular-nums text-muted">
                  {paper.date}
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <Button
            variant="outline"
            className="mt-8"
            onClick={() => {
              void navigate({ to: "/insights" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Papers and press
            <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
