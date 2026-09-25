import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { THREAT_NODES } from "@/lib/site";
import { palette } from "@/lib/palette";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/landing/section-label";
import { Reveal } from "@/components/landing/reveal";
import { ZuluClock } from "@/components/landing/zulu-clock";

type Status = "secure" | "watch" | "alert";

type LogLine = {
  id: number;
  time: string;
  action: "BLOCK" | "ALLOW" | "WATCH" | "SCAN";
  src: string;
  dst: string;
  proto: string;
  sig: string;
};

const ACTORS = [
  "UAV-04",
  "UAV-12",
  "ISL-07",
  "ISL-19",
  "GND-ALPHA",
  "GND-BRAVO",
  "SAT-K",
  "LEO-12",
  "RF-9",
  "HITL-RANGE",
  "POLAR-GATE",
];
const PROTOS = ["CCSDS", "MAVLINK", "S-BAND", "OPT-ISL", "1553B", "SPACEWIRE"];
const SIGS = ["APT.ORBIT.7", "RF.INJECT.3", "MAV.SPOOF", "BUS.REPLAY", "KEY.DRIFT", "—"];

function stamp(date = new Date()) {
  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  const s = String(date.getUTCSeconds()).padStart(2, "0");
  const ms = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${h}:${m}:${s}.${ms}`;
}

let logSeq = 100;
function makeLog(): LogLine {
  const roll = Math.random();
  const action: LogLine["action"] =
    roll > 0.72 ? "BLOCK" : roll > 0.5 ? "WATCH" : roll > 0.22 ? "ALLOW" : "SCAN";
  return {
    id: logSeq++,
    time: stamp(),
    action,
    src: ACTORS[Math.floor(Math.random() * ACTORS.length)] ?? "UAV-04",
    dst: ACTORS[Math.floor(Math.random() * ACTORS.length)] ?? "ISL-07",
    proto: PROTOS[Math.floor(Math.random() * PROTOS.length)] ?? "CCSDS",
    sig: action === "ALLOW" || action === "SCAN" ? "—" : (SIGS[Math.floor(Math.random() * SIGS.length)] ?? "—"),
  };
}

function statusColor(status: Status) {
  if (status === "alert") return palette.primary;
  if (status === "watch") return palette.muted;
  return palette.signal;
}

function actionClass(action: LogLine["action"]) {
  if (action === "BLOCK") return "text-primary";
  if (action === "WATCH") return "text-muted";
  return "text-signal";
}

const PATHS = [
  "M 108 318 C 180 250, 280 230, 352 148",
  "M 168 214 C 260 160, 360 120, 430 78",
  "M 248 292 C 340 240, 430 200, 512 168",
  "M 318 42 C 380 90, 470 140, 556 268",
  "M 168 214 C 240 260, 400 250, 512 168",
];

const STATIC_LOGS: LogLine[] = [
  { id: 1, time: "13:41:02.118", action: "ALLOW", src: "GND-ALPHA", dst: "UAV-12", proto: "MAVLINK", sig: "—" },
  { id: 2, time: "13:41:02.441", action: "SCAN", src: "POLAR-GATE", dst: "ISL-07", proto: "OPT-ISL", sig: "—" },
  { id: 3, time: "13:41:03.002", action: "BLOCK", src: "RF-9", dst: "ISL-19", proto: "S-BAND", sig: "RF.INJECT.3" },
  { id: 4, time: "13:41:03.510", action: "WATCH", src: "LEO-12", dst: "SAT-K", proto: "CCSDS", sig: "KEY.DRIFT" },
  { id: 5, time: "13:41:04.088", action: "ALLOW", src: "HITL-RANGE", dst: "GND-BRAVO", proto: "1553B", sig: "—" },
  { id: 6, time: "13:41:04.672", action: "BLOCK", src: "UAV-04", dst: "ISL-07", proto: "MAVLINK", sig: "MAV.SPOOF" },
  { id: 7, time: "13:41:05.201", action: "SCAN", src: "SAT-K", dst: "LEO-12", proto: "SPACEWIRE", sig: "—" },
  { id: 8, time: "13:41:05.844", action: "WATCH", src: "RF-9", dst: "GND-ALPHA", proto: "S-BAND", sig: "BUS.REPLAY" },
  { id: 9, time: "13:41:06.333", action: "ALLOW", src: "UAV-12", dst: "GND-BRAVO", proto: "MAVLINK", sig: "—" },
  { id: 10, time: "13:41:06.901", action: "BLOCK", src: "LEO-12", dst: "ISL-19", proto: "CCSDS", sig: "APT.ORBIT.7" },
  { id: 11, time: "13:41:07.414", action: "SCAN", src: "POLAR-GATE", dst: "SAT-K", proto: "OPT-ISL", sig: "—" },
  { id: 12, time: "13:41:08.002", action: "ALLOW", src: "HITL-RANGE", dst: "UAV-04", proto: "1553B", sig: "—" },
  { id: 13, time: "13:41:08.560", action: "WATCH", src: "ISL-07", dst: "LEO-12", proto: "OPT-ISL", sig: "KEY.DRIFT" },
  { id: 14, time: "13:41:09.118", action: "BLOCK", src: "RF-9", dst: "UAV-12", proto: "S-BAND", sig: "RF.INJECT.3" },
];

export function ThreatMap() {
  const reduced = useReducedMotion();
  const [lines, setLines] = useState<LogLine[]>(STATIC_LOGS);
  const [selected, setSelected] = useState<string | null>("leo-12");

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setLines((prev) => [...prev.slice(-16), makeLog()]);
    }, 850);
    return () => window.clearInterval(id);
  }, [reduced]);

  const selectedNode = THREAT_NODES.find((n) => n.id === selected);

  return (
    <section className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel index="04" label="Telemetry" />
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            Real-time threat telemetry.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            A live picture of the fleet, the constellation, and the hostile
            spectrum — fused into one operator surface.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="border border-border bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="pulse-dot size-1.5 rounded-full bg-signal" />
                <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                  Live · SRC SPACE/C2
                </span>
              </div>
              <div className="flex items-center gap-4 font-mono text-micro uppercase tracking-[0.14em] text-dim">
                <span>
                  Events 24h <span className="tabular-nums text-fg">14,204</span>
                </span>
                <span>
                  Blocked <span className="tabular-nums text-primary">2,881</span>
                </span>
                <ZuluClock className="tabular-nums text-muted" />
              </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
              <div className="relative min-h-[320px] overflow-hidden border-b border-border lg:border-r lg:border-b-0">
                <svg
                  viewBox="0 0 640 380"
                  className="h-full w-full"
                  role="img"
                  aria-label="Tactical threat map with orbital and flight paths"
                >
                  <defs>
                    <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path
                        d="M 32 0 L 0 0 0 32"
                        fill="none"
                        stroke={palette.border}
                        strokeWidth="0.6"
                      />
                    </pattern>
                  </defs>
                  <rect width="640" height="380" fill={palette.bg} />
                  <rect width="640" height="380" fill="url(#map-grid)" />

                  {[80, 160, 240, 320].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="640"
                      y1={y}
                      y2={y}
                      stroke={palette.border}
                      strokeDasharray="2 10"
                      opacity="0.5"
                    />
                  ))}

                  <ellipse
                    cx="330"
                    cy="180"
                    rx="240"
                    ry="92"
                    fill="none"
                    stroke={palette.signal}
                    strokeOpacity="0.28"
                    transform="rotate(-16 330 180)"
                  />
                  <ellipse
                    cx="330"
                    cy="180"
                    rx="190"
                    ry="64"
                    fill="none"
                    stroke={palette.primary}
                    strokeOpacity="0.28"
                    transform="rotate(22 330 180)"
                  />
                  <ellipse
                    cx="330"
                    cy="180"
                    rx="270"
                    ry="118"
                    fill="none"
                    stroke={palette.muted}
                    strokeOpacity="0.18"
                    transform="rotate(8 330 180)"
                  />

                  {PATHS.map((d) => (
                    <path
                      key={d}
                      d={d}
                      fill="none"
                      stroke={palette.signal}
                      strokeOpacity="0.45"
                      strokeWidth="1"
                    />
                  ))}

                  <text
                    x="24"
                    y="28"
                    fill={palette.muted}
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="9"
                    letterSpacing="1.4"
                  >
                    THEATER · INDOPAC / LEO BELT
                  </text>

                  {THREAT_NODES.map((node) => {
                    const color = statusColor(node.status);
                    const isSel = selected === node.id;
                    return (
                      <g
                        key={node.id}
                        onClick={() => setSelected(node.id)}
                        className="cursor-pointer"
                      >
                        {node.status === "alert" ? (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="12"
                            fill="none"
                            stroke={color}
                            className="origin-center animate-ping"
                            style={{ transformBox: "fill-box", transformOrigin: "center" }}
                          />
                        ) : null}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isSel ? 6 : 4}
                          fill={color}
                          stroke={palette.bg}
                          strokeWidth="1"
                        />
                        <text
                          x={node.x + 10}
                          y={node.y - 8}
                          fill={isSel ? palette.fg : palette.muted}
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="8"
                          letterSpacing="0.8"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
                <div className="scan-sweep pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-transparent via-signal/10 to-transparent" />
                <div className="absolute right-3 bottom-3 flex gap-3 font-mono text-micro uppercase tracking-[0.14em] text-dim">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-signal" /> Secure
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-muted" /> Watch
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Alert
                  </span>
                </div>
              </div>

              <div className="flex min-h-[280px] flex-col bg-bg">
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <span className="font-mono text-micro uppercase tracking-[0.16em] text-muted">
                    firewall / block log
                  </span>
                  <span className="font-mono text-micro text-signal">
                    {selectedNode ? selectedNode.label : "ALL NODES"}
                  </span>
                </div>
                <div className="flex-1 overflow-hidden px-4 py-3">
                  <ul className="space-y-1.5 font-mono text-2xs leading-5">
                    <AnimatePresence initial={false}>
                      {lines.slice(-12).map((line) => (
                        <motion.li
                          key={line.id}
                          initial={reduced ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="flex flex-wrap gap-x-2 text-dim"
                        >
                          <span className="tabular-nums text-muted">{line.time}</span>
                          <span className={cn("w-10", actionClass(line.action))}>
                            {line.action}
                          </span>
                          <span className="text-muted">
                            {line.src} → {line.dst}
                          </span>
                          <span>{line.proto}</span>
                          <span className="text-fg/80">{line.sig}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
                {selectedNode ? (
                  <div className="border-t border-border px-4 py-3 font-mono text-micro uppercase tracking-[0.14em] text-muted">
                    Node {selectedNode.label} · {selectedNode.status} · uplink encrypted
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
