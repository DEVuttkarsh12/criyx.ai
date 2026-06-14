"use client";

import { useEffect, useRef } from "react";

type VantaFogEffect = {
  destroy: () => void;
};

export function VantaFogBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaFogEffect | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const initFog = async () => {
      if (!containerRef.current || effectRef.current) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const [{ default: FOG }, THREE] = await Promise.all([
        import("vanta/dist/vanta.fog.min"),
        import("three"),
      ]);

      if (isCancelled || !containerRef.current) {
        return;
      }

      effectRef.current = FOG({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0xcad7e6,
        midtoneColor: 0x7387a6,
        lowlightColor: 0x131926,
        baseColor: 0x090b10,
        blurFactor: 0.72,
        speed: 0.9,
        zoom: 0.62,
        scale: 1,
        scaleMobile: 1,
      });
    };

    void initFog();

    return () => {
      isCancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,140,166,0.24),transparent_34%),linear-gradient(180deg,#0a0c10_0%,#0d1016_46%,#090b10_100%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,16,0.22),rgba(9,11,16,0.66))]" />
      <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-[rgba(186,204,226,0.08)] blur-[130px]" />
      <div className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-[rgba(115,135,166,0.08)] blur-[150px]" />
    </div>
  );
}
