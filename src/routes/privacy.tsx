import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/landing/page-header";
import { Reveal } from "@/components/landing/reveal";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

const SECTIONS = [
  {
    title: "What we collect",
    body: "Briefing requests are handled through the Cal.com scheduler on the Contact page (name, work email, and meeting notes). This marketing surface does not use third-party advertising pixels.",
  },
  {
    title: "How we use it",
    body: "Contact data is used to open a secure follow-up path with a specialist. We do not sell it. Program work, if it proceeds, moves onto a cleared system that is not this website.",
  },
  {
    title: "CUI and classified material",
    body: "Do not submit CUI, classified, or export-controlled technical data through the public scheduler. If a program requires it, we will open a channel that is built for that handling.",
  },
  {
    title: "Retention",
    body: "Marketing-surface requests are deleted after triage or after 18 months, whichever is sooner, unless a contract requires otherwise.",
  },
] as const;

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        index="06"
        label="Legal"
        title="Privacy."
        intro="This is the unclassified marketing surface. It is not a system of record for program data."
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
