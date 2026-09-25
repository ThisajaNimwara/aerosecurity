import { useEffect, useId, useRef } from "react";

export const CAL_LINK = "thisaja-nimwara-c7txlo/30min";
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

type CalApi = ((...args: unknown[]) => void) & {
  q?: unknown[];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
};

function installCalStub(): CalApi {
  const w = window as Window & { Cal?: CalApi };
  if (w.Cal) return w.Cal;

  const push = (api: CalApi, args: IArguments | unknown[]) => {
    api.q = api.q ?? [];
    api.q.push(args);
  };

  const cal = function Cal() {
    const fn = cal as CalApi;
    const args = arguments as unknown as unknown[];
    if (!fn.loaded) {
      fn.ns = {};
      fn.q = fn.q ?? [];
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      fn.loaded = true;
    }
    if (args[0] === "init") {
      const api = function nsApi() {
        push(api as CalApi, arguments);
      } as CalApi;
      api.q = [];
      const namespace = args[1];
      if (typeof namespace === "string") {
        fn.ns = fn.ns ?? {};
        fn.ns[namespace] = fn.ns[namespace] ?? api;
        push(fn.ns[namespace]!, args);
        push(fn, ["initNamespace", namespace]);
      } else {
        push(fn, args);
      }
      return;
    }
    push(fn, args);
  } as CalApi;

  cal.ns = {};
  cal.q = [];
  w.Cal = cal;
  return cal;
}

export function CalEmbed() {
  const rawId = useId().replace(/:/g, "");
  const ns = `briefing_${rawId}`;
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const cal = installCalStub();
    cal("init", ns, { origin: "https://app.cal.com" });
    const api = cal.ns?.[ns];
    api?.("inline", {
      elementOrSelector: host,
      calLink: CAL_LINK,
      layout: "month_view",
      config: {
        layout: "month_view",
        theme: "dark",
        "ui.color-scheme": "dark",
      },
    });
    api?.("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        dark: {
          "cal-brand": "#d92d20",
          "cal-bg": "#090a0f",
          "cal-bg-muted": "#14151c",
          "cal-bg-emphasis": "#1a1b24",
          "cal-border": "#2a2b35",
          "cal-border-emphasis": "#2a2b35",
          "cal-text": "#f8f9fa",
          "cal-text-muted": "#a0aec0",
          "cal-text-emphasis": "#f8f9fa",
        },
      },
    });
  }, [ns]);

  return (
    <div className="border border-border bg-bg">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg">
            Clearance briefing
          </p>
          <p className="mt-1 font-mono text-micro uppercase tracking-[0.14em] text-dim">
            30 min · Encrypted channel · Dark terminal
          </p>
        </div>
        <a
          href={`${CAL_URL}?theme=dark`}
          target="_blank"
          rel="noreferrer"
          className="tactical-hit shrink-0 font-mono text-micro uppercase tracking-[0.14em] text-signal"
        >
          Open in Cal.com
        </a>
      </div>
      <div
        ref={hostRef}
        className="min-h-[720px] w-full bg-bg sm:min-h-[780px]"
        data-cal-namespace={ns}
      />
    </div>
  );
}
