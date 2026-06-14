"use client";

import { useEffect, useState } from "react";

import { SplineScene } from "@/components/ui/splite";

type AutomationCoreHeroProps = {
  calLink: string;
};

export default function AutomationCoreHero({
  calLink,
}: AutomationCoreHeroProps) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handlePointerMove(event: MouseEvent) {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setPointer({ x, y });
    }

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    function updateScroll() {
      const nextProgress = Math.min(window.scrollY / 520, 1);
      setScrollProgress(nextProgress);
      frame = 0;
    }

    function handleScroll() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScroll);
    }

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const visualTransform = {
    transform: `
      translate3d(${pointer.x * 18}px, ${pointer.y * 14}px, 0)
      rotateY(${pointer.x * 10}deg)
      rotateX(${pointer.y * -8}deg)
    `,
    transformStyle: "preserve-3d" as const,
  };

  const heroTransform = {
    transform: `
      perspective(1800px)
      translate3d(0, ${scrollProgress * -42}px, 0)
      rotateX(${scrollProgress * 14}deg)
      scale(${1 - scrollProgress * 0.05})
    `,
    transformOrigin: "center top",
    opacity: 1 - scrollProgress * 0.18,
    willChange: "transform, opacity",
  };

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[calc(100vh-102px)] items-end px-6 pb-18 pt-8 md:px-14 md:pb-24"
    >
      <div
        className="mx-auto grid w-full max-w-[118rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        style={heroTransform}
      >
        <div className="relative z-10 max-w-5xl">
          <div className="mb-6 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.32em] text-[#FFF8EC]/48">
            <span className="h-px w-14 bg-[#D6A84F]/48" />
            <span>Automation Core</span>
          </div>

          <h1 className="max-w-5xl text-[clamp(4.1rem,10vw,8.9rem)] font-light leading-[0.92] tracking-[-0.07em]">
            AI Systems
            <br />
            That Run
            <br />
            Your Business
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-pretty text-lg leading-8 text-[#FFF8EC]/76 md:text-[1.2rem] md:leading-9">
              Criyx builds AI automation systems across conversations, leads,
              CRM, follow-ups, bookings, and analytics so revenue operations
              keep moving without manual drag.
            </p>

            <a
              href={calLink}
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.16)] transition hover:bg-[#D6A84F]"
            >
              Schedule Your Call
            </a>
          </div>

          <a
            href="#positioning"
            className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-[#FFF8EC]/46 transition hover:text-[#D6A84F]"
          >
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04]">
              <span className="h-2 w-2 rounded-full bg-[#D6A84F] shadow-[0_0_18px_rgba(214,168,79,0.65)]" />
            </span>
            <span>Scroll to enter the system</span>
          </a>
        </div>

        <div className="relative min-h-[33rem] lg:min-h-[42rem]">
          <div
            className="absolute inset-x-0 bottom-[10%] top-[2%] overflow-hidden transition-transform duration-150 ease-out"
            style={visualTransform}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="relative z-10 h-full w-full scale-[1.22] lg:scale-[1.28]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
