import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/landing/hero-canvas";
import { HeroTelemetry } from "@/components/landing/hero-telemetry";
import { useGoContact } from "@/lib/go-contact";
import { useUi } from "@/lib/ui-store";
import { COMPLIANCE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const goContact = useGoContact();
  const setDocsOpen = useUi((s) => s.setDocsOpen);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          "bg-linear-to-r from-bg from-15% via-bg/80 to-bg/25",
          "md:from-20% md:via-bg/70",
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-0 radial-mesh" />
      <div className="pointer-events-none absolute inset-0 z-0 tactical-grid opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-20 pb-16 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:pt-24">
        <div
          className="max-w-3xl"
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        >
          <p className="mb-5 font-mono text-2xs uppercase tracking-[0.22em] text-signal">
            Aerospace · Defense · Cyber
          </p>
          <h1 className="text-display leading-[0.95] font-semibold tracking-[-0.045em] text-fg uppercase">
            Operational intelligence for next-gen aerospace.
          </h1>
          <h2 className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Dual-use cybersecurity for commercial LEO constellations and defense
            unmanned systems — hardening fleets, satellite links, and embedded
            real-time flight controls against sophisticated cyber threats.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto" onClick={goContact}>
              Deploy Platform
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setDocsOpen(true)}
            >
              <FileText />
              View Documentation
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {[
              { k: "Endpoints", v: "14k+" },
              { k: "Median detect", v: "180ms" },
              { k: "Constellations", v: "11" },
              { k: "Uplink integrity", v: "99.99%" },
            ].map((stat) => (
              <div key={stat.k} className="bg-bg/80 px-3 py-3 sm:px-4">
                <dt className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
                  {stat.k}
                </dt>
                <dd className="mt-1 font-mono text-sm tabular-nums text-fg">{stat.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            {COMPLIANCE.map((badge) => (
              <span
                key={badge}
                className="border border-border bg-bg/70 px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-dim"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <HeroTelemetry />
      </div>
    </section>
  );
}
