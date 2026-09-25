import { useNavigate } from "@tanstack/react-router";
import { SOLUTION_DETAILS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CornerFrame } from "@/components/landing/corner-frame";
import { SectionLabel } from "@/components/landing/section-label";
import { Reveal, Stagger, StaggerItem } from "@/components/landing/reveal";

export function ProductMatrix() {
  const navigate = useNavigate();

  return (
    <section id="platform" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel index="02" label="Platform" />
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            The product matrix.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Dual-use for commercial LEO constellations and defense unmanned
            systems. Seven capabilities, one control plane — engineered in
            Colombo, operated through our U.S. entity.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-6" delay={0.08}>
          {SOLUTION_DETAILS.map((cap) => {
            const Icon = cap.icon;
            const featured = cap.index === "01";
            return (
              <StaggerItem key={cap.index} className={cn(cap.span)}>
                <button
                  type="button"
                  onClick={() =>
                    void navigate({ to: "/solutions", hash: cap.id }).then(() => {
                      window.setTimeout(() => {
                        document
                          .getElementById(cap.id)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 80);
                    })
                  }
                  className="block h-full w-full text-left"
                >
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden border border-border bg-surface p-5 transition-[transform,border-color,box-shadow] duration-200 ease-out sm:p-6",
                      "hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-card-hover)]",
                      featured && "min-h-[280px] lg:min-h-[360px]",
                    )}
                  >
                    <div
                      className="card-scan pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden
                    />
                    <CornerFrame />
                    <div className="relative flex items-start justify-between gap-3">
                      <span className="flex size-9 items-center justify-center border border-border bg-bg text-muted transition-colors duration-200 group-hover:border-primary group-hover:text-primary">
                        <Icon className="size-4" strokeWidth={1.6} />
                      </span>
                      <span className="font-mono text-micro tabular-nums tracking-[0.14em] text-dim">
                        {cap.index} // 07
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "relative mt-5 font-semibold tracking-[-0.02em] text-fg",
                        featured ? "text-2xl sm:text-3xl" : "text-lg",
                      )}
                    >
                      {cap.title}
                    </h3>
                    <p
                      className={cn(
                        "relative mt-3 leading-relaxed text-muted",
                        featured ? "max-w-md text-base" : "text-sm",
                      )}
                    >
                      {cap.body}
                    </p>
                    {featured ? (
                      <p className="relative mt-auto pt-8 font-mono text-micro uppercase tracking-[0.16em] text-signal">
                        {cap.kicker}
                      </p>
                    ) : null}
                  </article>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
