import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";
import { PRESS, RESEARCH } from "@/lib/site";
import { useGoContact } from "@/lib/go-contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights")({ component: InsightsPage });

function InsightsPage() {
  const [openPaper, setOpenPaper] = useState<string | null>(null);
  const [openPress, setOpenPress] = useState<string | null>(PRESS[0]?.id ?? null);
  const goContact = useGoContact();

  return (
    <PageShell>
      <PageHeader
        index="04"
        label="Insights"
        title="Research from the range and the orbit."
        intro="Technical reports and press from the HITL range and on-orbit observation campaigns. Full papers ship over a cleared channel."
      />

      <section id="papers" className="scroll-mt-28 border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              Research papers
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Abstracts are unclassified. The rest is queued under NDA.
            </p>
          </Reveal>
          <ul className="mt-8 divide-y divide-border border border-border">
            {RESEARCH.map((paper) => {
              const open = openPaper === paper.id;
              return (
                <li key={paper.id} className="bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpenPaper(open ? null : paper.id)}
                    className="flex w-full flex-col gap-2 px-4 py-5 text-left transition-colors duration-150 hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                    aria-expanded={open}
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
                  {open ? (
                    <div className="border-t border-border px-4 py-5 sm:px-6">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted">
                        {paper.abstract}
                      </p>
                      <Button
                        size="sm"
                        className="mt-4"
                        onClick={() =>
                          toast("Document queued", {
                            description: `${paper.id} is available under NDA.`,
                          })
                        }
                      >
                        Request under NDA
                      </Button>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="press" className="scroll-mt-28 border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
              Press releases
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Unclassified statements. Program details stay on a cleared line.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-col gap-3">
            {PRESS.map((item) => {
              const open = openPress === item.id;
              return (
                <li key={item.id} className="border border-border bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpenPress(open ? null : item.id)}
                    className="flex w-full flex-col gap-2 px-5 py-5 text-left sm:px-6"
                    aria-expanded={open}
                  >
                    <span className="font-mono text-micro tabular-nums tracking-[0.14em] text-dim">
                      {item.date}
                    </span>
                    <span className="text-lg font-semibold tracking-[-0.02em] text-fg">
                      {item.title}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{item.dek}</span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border px-5 py-5 text-sm leading-relaxed text-muted sm:px-6">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Reveal delay={0.08}>
            <p className="mt-8 text-sm text-muted">
              Media inquiries go through the same cleared channel as program work.
            </p>
            <Button className="mt-4" variant="outline" onClick={goContact}>
              Media desk
            </Button>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
