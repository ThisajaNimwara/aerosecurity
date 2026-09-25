import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";

export const Route = createFileRoute("/export")({ component: ExportPage });

const SECTIONS = [
  {
    title: "Jurisdiction",
    body: "AeroSecurity is a U.S. corporate entity with primary R&D in Colombo, Sri Lanka. Certain technical data related to spacecraft, military unmanned vehicles, and associated electronic warfare may be controlled under the ITAR (22 CFR 120–130) or the EAR.",
  },
  {
    title: "This website",
    body: "Copy on this marketing surface is reviewed as unclassified and not export-controlled. It is not a substitute for a commodity jurisdiction or classification request.",
  },
  {
    title: "CUI handling",
    body: "Do not transmit CUI, technical data, or source through the public scheduler. If a program requires it, we will open a channel built for that handling after identity is established.",
  },
  {
    title: "Foreign persons",
    body: "Access to controlled technical data by foreign persons may require a license or other authorization. We do not grant that access from this site.",
  },
] as const;

function ExportPage() {
  return (
    <PageShell>
      <PageHeader
        index="08"
        label="Legal"
        title="Export control."
        intro="Some of what we build is dual-use. This page is the unclassified notice, not a classification."
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
