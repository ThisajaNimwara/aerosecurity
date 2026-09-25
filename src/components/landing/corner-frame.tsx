import { cn } from "@/lib/utils";

export function CornerFrame({
  className,
  active = false,
}: {
  className?: string;
  active?: boolean;
}) {
  const tick = cn(
    "absolute h-2.5 w-2.5 border-border transition-colors duration-150",
    active && "border-primary",
  );
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <span className={cn(tick, "top-0 left-0 border-t border-l")} />
      <span className={cn(tick, "top-0 right-0 border-t border-r")} />
      <span className={cn(tick, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(tick, "right-0 bottom-0 border-b border-r")} />
    </div>
  );
}
