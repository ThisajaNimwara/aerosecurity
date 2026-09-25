import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/landing/hero";
import { ProductMatrix } from "@/components/landing/product-matrix";
import { Solutions } from "@/components/landing/solutions";
import { ThreatMap } from "@/components/landing/threat-map";
import { Research } from "@/components/landing/research";
import { About } from "@/components/landing/about";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <Hero />
      <ProductMatrix />
      <Solutions />
      <ThreatMap />
      <Research />
      <About />
    </PageShell>
  );
}
