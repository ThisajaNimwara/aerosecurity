import { useEffect, useState } from "react";

function formatZulu(date: Date) {
  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  const s = String(date.getUTCSeconds()).padStart(2, "0");
  return `${h}:${m}:${s} Z`;
}

export function ZuluClock({ className }: { className?: string }) {
  const [label, setLabel] = useState("00:00:00 Z");

  useEffect(() => {
    const tick = () => setLabel(formatZulu(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time dateTime={label} className={className}>
      {label}
    </time>
  );
}
