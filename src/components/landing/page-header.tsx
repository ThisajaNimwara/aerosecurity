import { SectionLabel } from "@/components/landing/section-label";
import { Reveal } from "@/components/landing/reveal";

export function PageHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-32 pb-8 sm:px-6 sm:pt-40 sm:pb-10">
      <Reveal>
        <SectionLabel index={index} label={label} />
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
