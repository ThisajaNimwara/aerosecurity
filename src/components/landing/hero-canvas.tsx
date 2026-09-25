import { useEffect, useState, type ComponentType } from "react";
import { HeroFallback } from "@/components/landing/hero-fallback";

export function HeroCanvas() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let alive = true;
    void import("./hero-scene")
      .then((mod) => {
        if (alive) setScene(() => mod.HeroScene);
      })
      .catch(() => {
        /* keep SVG fallback */
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {Scene ? <Scene /> : <HeroFallback />}
    </div>
  );
}
