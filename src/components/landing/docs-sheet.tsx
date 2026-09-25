import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUi } from "@/lib/ui-store";

const SNIPPET = `{
  "enclave": "cemp",
  "fleet": "uav-indo-7",
  "patchWindow": "pre-flight",
  "policy": {
    "edr": "inline",
    "isl": "zero-trust",
    "rfDpi": true
  }
}`;

export function DocsSheet() {
  const open = useUi((s) => s.docsOpen);
  const setOpen = useUi((s) => s.setDocsOpen);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-border bg-bg shadow-[var(--shadow-card)] focus:outline-none">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div>
              <Dialog.Title className="font-mono text-xs uppercase tracking-[0.18em] text-fg">
                Platform documentation
              </Dialog.Title>
              <Dialog.Description className="mt-1 font-mono text-micro text-dim">
                AEROSECURITY PLATFORM · v4.2.1 · UNCLASSIFIED
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close documentation">
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <h3 className="font-mono text-micro uppercase tracking-[0.16em] text-signal">
              GET /v1/fleet/policy
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Retrieve the active CEMP policy for a fleet enclave. Authorization
              requires a clearance-bound bearer token rotated every 15 minutes
              via the ground HSM.
            </p>
            <pre className="mt-5 overflow-x-auto border border-border bg-surface p-4 font-mono text-2xs leading-6 text-signal">
              {`Authorization: Bearer <clearance-token>
X-Aero-Enclave: cemp
X-Aero-Class: CUI`}
            </pre>
            <pre className="mt-3 overflow-x-auto border border-border bg-surface p-4 font-mono text-2xs leading-6 text-fg/90">
              {SNIPPET}
            </pre>
            <h3 className="mt-8 font-mono text-micro uppercase tracking-[0.16em] text-signal">
              Agent install · RTOS
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The EDR agent is a single C99 compilation unit targeting NASA cFS,
              VxWorks 7, and RTEMS 6. Worst-case execution stays inside the
              allotted telemetry minor frame.
            </p>
            <ol className="mt-4 space-y-2 font-mono text-2xs text-muted">
              <li>01  ·  Link libaero_edr.a into the flight image</li>
              <li>02  ·  Register the watchdog on the 1553 / SpaceWire bus</li>
              <li>03  ·  Seal the binary with the pre-flight hardening pipeline</li>
            </ol>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
