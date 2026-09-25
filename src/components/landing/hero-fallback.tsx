import { palette } from "@/lib/palette";

/** Static wireframe satellite used while WebGL boots (and as a no-WebGL fallback). */
export function HeroFallback() {
  return (
    <svg
      viewBox="0 0 640 420"
      className="h-full w-full opacity-70"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        fill="none"
        stroke={palette.signal}
        strokeWidth="1"
        transform="translate(360 210) rotate(-18)"
      >
        <rect x="-48" y="-28" width="96" height="56" />
        <rect x="-200" y="-42" width="132" height="84" />
        <rect x="68" y="-42" width="132" height="84" />
        <line x1="-68" y1="0" x2="-200" y2="0" />
        <line x1="48" y1="0" x2="68" y2="0" />
        <line x1="-200" y1="-14" x2="-68" y2="-14" />
        <line x1="-200" y1="14" x2="-68" y2="14" />
        <line x1="68" y1="-14" x2="200" y2="-14" />
        <line x1="68" y1="14" x2="200" y2="14" />
        <circle cx="0" cy="-78" r="22" stroke={palette.primary} />
        <line x1="0" y1="-28" x2="0" y2="-56" />
        <line x1="0" y1="28" x2="0" y2="70" />
        <polygon points="-10,70 10,70 0,92" />
        <ellipse cx="0" cy="0" rx="150" ry="58" opacity="0.45" />
        <ellipse cx="0" cy="0" rx="190" ry="78" opacity="0.25" />
      </g>
    </svg>
  );
}
