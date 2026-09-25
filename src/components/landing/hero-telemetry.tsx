import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import { TELEMETRY_ROWS } from "@/lib/site";

function randomHexLine() {
  return Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase(),
  ).join(" ");
}

const STATIC_HEX = [
  "7F 4A 9C 21 00 FF 6A 10",
  "12 B0 44 19 D9 2D 20 AA",
  "0E 91 C3 08 5A 77 BE 4C",
  "A3 F4 7B 12 90 01 6E D8",
  "55 0C 2F 88 13 46 9B E1",
  "C0 17 3D 6A FE 04 29 5B",
];

export function HeroTelemetry() {
  const [visible, setVisible] = useState(0);
  const [hexLines, setHexLines] = useState<string[]>(STATIC_HEX);
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (reduced) {
      setVisible(TELEMETRY_ROWS.length);
      return;
    }
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: TELEMETRY_ROWS.length,
      duration: TELEMETRY_ROWS.length * 0.16,
      ease: "none",
      onUpdate: () => setVisible(Math.floor(obj.n)),
    });
    return () => {
      tween.kill();
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setHexLines((prev) => [...prev.slice(1), randomHexLine()]);
    }, 220);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <aside
      className="hidden w-[min(100%,280px)] shrink-0 border border-border bg-bg/70 p-4 backdrop-blur-sm lg:block"
      aria-label="Live telemetry"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-micro uppercase tracking-[0.18em] text-muted">
          SYS / AERO.SEC
        </span>
        <span className="font-mono text-micro text-signal">v4.2.1</span>
      </div>
      <div className="mb-3 h-px bg-border" />
      <ul ref={listRef} className="space-y-1.5">
        {TELEMETRY_ROWS.map((row, i) => (
          <li
            key={row.id}
            className="flex items-center justify-between font-mono text-2xs tabular-nums text-muted"
            style={{ opacity: i < visible ? 1 : 0.15 }}
          >
            <span>
              {row.id}. {row.name}
            </span>
            <span className="text-signal">[{row.status}]</span>
          </li>
        ))}
      </ul>
      <div className="my-3 h-px bg-border" />
      <pre className="font-mono text-micro leading-5 text-signal/70">
        {hexLines.join("\n")}
      </pre>
      <div className="mt-3 flex items-center justify-between font-mono text-micro uppercase tracking-[0.14em] text-dim">
        <span>CRC</span>
        <span className="text-signal">OK</span>
      </div>
    </aside>
  );
}
