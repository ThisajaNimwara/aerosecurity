import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";

export const Route = createFileRoute("/terms")({ component: TermsPage });

const SECTIONS = [
  {
    title: "Use of this site",
    body: "This site is an unclassified marketing surface for aerosecurity.space. It does not grant a license to any software, model, or documentation described here. Capability names and architecture sketches are descriptive, not a specification.",
  },
  {
    title: "No operational reliance",
    body: "Telemetry, threat-map events, and statistics shown on this site are demonstrations. They are not a live operational feed and must not be used for flight, targeting, or incident response.",
  },
  {
    title: "Export",
    body: "Some products described here may be subject to the ITAR or EAR. Access by foreign persons may require authorization. See Export Control.",
  },
  {
    title: "Limitation",
    body: "To the extent permitted by law, aerosecurity.space provides this site as-is. Program terms, if any, live in a separately executed agreement.",
  },
] as const;

function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        index="07"
        label="Legal"
        title="Terms of use."
        intro="Unclassified marketing only. Operational use requires a contract and a cleared channel."
      />
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="flex flex-col gap-10 border-t border-border pt-12">
          {SECTIONS.map((s) => (
            <Reveal key={s.title}>
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-fg">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
