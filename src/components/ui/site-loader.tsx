"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const LOADER_DURATION_MS = 2800;
const LOADER_EXIT_DURATION_MS = 420;

type SiteLoaderProps = {
  children: React.ReactNode;
};

export function SiteLoader({ children }: SiteLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    if (phase !== "done") {
      return;
    }

    document.documentElement.dataset.criyxLoader = "done";
    window.dispatchEvent(new CustomEvent("criyx:loader-complete"));
  }, [phase]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setProgress(100);
        setPhase("done");
      });

      return () => {
        window.cancelAnimationFrame(reducedMotionFrame);
      };
    }

    const start = performance.now();
    let frame = 0;
    let doneTimer = 0;

    const tick = (time: number) => {
      const elapsed = time - start;
      const rawProgress = Math.min(elapsed / LOADER_DURATION_MS, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      setProgress(Math.round(easedProgress * 100));

      if (rawProgress < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      setProgress(100);
      setPhase("exiting");
      doneTimer = window.setTimeout(() => {
        setPhase("done");
      }, LOADER_EXIT_DURATION_MS);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const barStyle = useMemo(
    () => ({
      width: `${progress}%`,
    }),
    [progress]
  );

  const isOverlayVisible = phase !== "done";
  const isContentVisible = phase === "done";
  const isExiting = phase === "exiting";

  return (
    <>
      <div
        className={`relative z-10 flex min-h-full flex-col transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isContentVisible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-8 opacity-0 blur-md"
        }`}
      >
        {children}
      </div>

      {isOverlayVisible ? (
        <div
          className={`fixed inset-0 z-[130] overflow-hidden bg-[radial-gradient(circle_at_20%_16%,rgba(255,185,128,0.14),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(97,10,10,0.3),transparent_26%),linear-gradient(180deg,#090000_0%,#1a0202_48%,#090000_100%)] transition-opacity duration-[420ms] ease-out ${
            isExiting ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,185,128,0.08),transparent_24%),radial-gradient(circle_at_78%_68%,rgba(130,13,13,0.12),transparent_22%)]" />
          <div className="absolute left-[12%] top-[16%] h-56 w-56 rounded-full bg-[rgba(255,185,128,0.1)] blur-[130px]" />
          <div className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-[rgba(95,9,9,0.14)] blur-[150px]" />

          <div className="relative flex min-h-screen items-center justify-center px-6 py-8">
            <div
              className={`relative w-full max-w-[28rem] transition-[opacity,transform,filter] duration-[420ms] ease-out ${
                isExiting
                  ? "translate-y-2 scale-[0.985] opacity-0 blur-sm"
                  : "translate-y-0 scale-100 opacity-100 blur-0"
              }`}
            >
              <div className="absolute left-1/2 top-[2.8rem] h-36 w-36 -translate-x-1/2 rounded-full bg-[rgba(255,214,176,0.38)] blur-[48px] md:h-44 md:w-44" />
              <div className="absolute left-1/2 top-[3.8rem] h-24 w-52 -translate-x-1/2 rounded-full bg-[rgba(255,140,95,0.28)] blur-[48px] md:w-64" />
              <div className="absolute left-1/2 top-[2rem] h-48 w-48 -translate-x-1/2 rounded-full border border-[rgba(255,214,176,0.16)] opacity-60 blur-[2px] md:h-56 md:w-56" />

              <div className="relative flex flex-col items-center">
                <Image
                  src="/criyx-logo.avif"
                  alt="Criyx logo"
                  width={180}
                  height={180}
                  className="relative h-28 w-28 object-contain drop-shadow-[0_0_36px_rgba(255,214,176,0.52)] md:h-36 md:w-36"
                  priority
                />

                <div className="mt-14 w-full">
                  <div className="h-[3px] overflow-hidden rounded-full bg-white/10 md:h-[4px]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#ffddb9_0%,#ffb980_36%,#ff8757_68%,#7d0c0c_100%)] shadow-[0_0_24px_rgba(255,185,128,0.5)] transition-[width] duration-200 ease-out"
                      style={barStyle}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.34em] text-[#d0b0a2] md:text-[0.78rem]">
                    <span>Loading</span>
                    <span className="font-[var(--font-geist-mono)] text-[0.88rem] text-[#f4f6fa] md:text-[0.96rem]">
                      {String(progress).padStart(2, "0")}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
