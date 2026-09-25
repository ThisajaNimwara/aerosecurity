import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LEVELS = [
  { id: "Normal", tone: "text-signal", dot: "bg-signal text-signal" },
  { id: "Medium", tone: "text-warn", dot: "bg-warn text-warn" },
  { id: "High", tone: "text-primary", dot: "bg-primary text-primary" },
  { id: "Escalated", tone: "text-primary", dot: "bg-primary text-primary" },
  { id: "Aborted", tone: "text-dim", dot: "bg-dim text-dim" },
] as const;

export function SystemStatus({ compact = false }: { compact?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer = 0;
    const tick = () => {
      const wait = reduced ? 10000 : 5000 + Math.floor(Math.random() * 5000);
      timer = window.setTimeout(() => {
        setIndex((n) => (n + 1) % LEVELS.length);
        tick();
      }, wait);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, []);

  const level = LEVELS[index] ?? LEVELS[0];

  return (
    <div
      className="hidden items-center gap-2 border border-border bg-surface/80 px-2.5 py-1.5 md:flex"
      aria-live="polite"
      title="Simulated tactical status feed"
    >
      <span className={cn("pulse-dot size-1.5 rounded-full", level.dot)} />
      <span className="font-mono text-micro uppercase tracking-[0.16em] text-muted">
        {compact ? "Status" : "System Status"}:{" "}
        <span className={cn("tabular-nums", level.tone)}>{level.id}</span>
      </span>
    </div>
  );
}
