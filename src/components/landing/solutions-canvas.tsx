import { useEffect, useState, type ComponentType } from "react";
import { CornerFrame } from "@/components/landing/corner-frame";
import { COMPLIANCE } from "@/lib/site";
import { palette } from "@/lib/palette";

function HangarFallback() {
  return (
    <svg
      viewBox="0 0 720 400"
      className="h-full w-full opacity-70"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="none" stroke={palette.signal} strokeWidth="1">
        <rect x="70" y="40" width="580" height="300" opacity="0.35" />
        <line x1="70" y1="340" x2="650" y2="340" />
        <polygon points="250,210 360,170 470,210 430,230 290,230" stroke={palette.primary} />
        <rect x="330" y="188" width="60" height="18" />
        <circle cx="180" cy="230" r="28" />
        <line x1="152" y1="230" x2="208" y2="230" />
        <line x1="180" y1="202" x2="180" y2="258" />
        <rect x="520" y="90" width="44" height="28" />
        <rect x="500" y="98" width="22" height="12" />
        <rect x="564" y="98" width="22" height="12" />
      </g>
    </svg>
  );
}

export function SolutionsCanvas() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let alive = true;
    const timer = window.setTimeout(() => {
      void import("./solutions-scene")
        .then((mod) => {
          if (alive) setScene(() => mod.SolutionsScene);
        })
        .catch(() => {
          /* keep SVG fallback */
        });
    }, 120);
    return () => {
      alive = false;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden border border-border bg-bg">
      <CornerFrame />
      <div className="relative aspect-[16/10] min-h-[280px] w-full touch-none md:min-h-[420px]">
        {Scene ? <Scene /> : <HangarFallback />}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between px-4 py-3 sm:px-5">
        <p className="font-mono text-micro uppercase tracking-[0.16em] text-signal">
          Asset bay // dual-use
        </p>
        <p className="font-mono text-micro uppercase tracking-[0.16em] text-dim">
          Drag to orbit
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 sm:px-5">
        <p className="font-mono text-micro uppercase tracking-[0.14em] text-dim">
          UAV · UAS · LEO bus
        </p>
        <div className="flex flex-wrap gap-2">
          {COMPLIANCE.map((badge) => (
            <span
              key={badge}
              className="border border-border px-2 py-1 font-mono text-micro uppercase tracking-[0.12em] text-dim"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
