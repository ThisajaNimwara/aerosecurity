import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="font-mono text-2xs text-signal">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span className="font-mono text-2xs uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
    </div>
  );
}
