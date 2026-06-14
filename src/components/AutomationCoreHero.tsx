"use client";

import { useEffect, useRef, useState } from "react";

import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

type AutomationCoreHeroProps = {
  calLink: string;
};

const HERO_ROBOT_SCENE_URL =
  "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
const HERO_HEADLINE = "AI Systems\nThat Run\nYour Business";
const TYPEWRITER_STEP_MS = 65;
const LOADER_DONE_DATA_ATTRIBUTE = "done";
const HERO_THOUGHTS = [
  {
    text: "You are my favorite human today.",
    positionClassName:
      "left-[12%] top-[14%] max-w-[13rem] lg:left-[16%] lg:top-[18%]",
    delay: "0s",
  },
  {
    text: "Welcome to Criyx.",
    positionClassName:
      "right-[10%] top-[18%] max-w-[11rem] lg:right-[14%] lg:top-[20%]",
    delay: "1.7s",
  },
  {
    text: "Feel free to explore.",
    positionClassName:
      "left-[16%] bottom-[20%] max-w-[12rem] lg:left-[20%] lg:bottom-[24%]",
    delay: "3.4s",
  },
  {
    text: "Automation layer is thinking ahead.",
    positionClassName:
      "right-[12%] bottom-[14%] max-w-[15rem] lg:right-[16%] lg:bottom-[22%]",
    delay: "5.1s",
  },
];

export default function AutomationCoreHero({
  calLink,
}: AutomationCoreHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5, active: false });
  const [visibleHeadlineLength, setVisibleHeadlineLength] = useState(() => {
    const loaderAlreadyComplete =
      typeof document !== "undefined" &&
      document.documentElement.dataset.criyxLoader === LOADER_DONE_DATA_ATTRIBUTE;

    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        loaderAlreadyComplete)
    ) {
      return HERO_HEADLINE.length;
    }

    return 0;
  });
  const [headlineStarted, setHeadlineStarted] = useState(() => {
    const loaderAlreadyComplete =
      typeof document !== "undefined" &&
      document.documentElement.dataset.criyxLoader === LOADER_DONE_DATA_ATTRIBUTE;

    return (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        loaderAlreadyComplete)
    );
  });

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

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const updatePointer = (clientX: number, clientY: number, active: boolean) => {
      const rect = section.getBoundingClientRect();
      const x = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      const y = Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1);

      setPointer({ x, y, active });
      frame = 0;
    };

    const handleMove = (event: PointerEvent) => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() =>
        updatePointer(event.clientX, event.clientY, true)
      );
    };

    const handleLeave = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }

      setPointer((current) => ({ ...current, active: false }));
    };

    section.addEventListener("pointermove", handleMove, { passive: true });
    section.addEventListener("pointerleave", handleLeave);

    return () => {
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let interval = 0;

    const startTypewriter = () => {
      setHeadlineStarted(true);
      setVisibleHeadlineLength(0);

      interval = window.setInterval(() => {
        setVisibleHeadlineLength((current) => {
          if (current >= HERO_HEADLINE.length) {
            window.clearInterval(interval);
            return current;
          }

          return current + 1;
        });
      }, TYPEWRITER_STEP_MS);
    };

    const handleLoaderComplete = () => {
      startTypewriter();
    };

    window.addEventListener("criyx:loader-complete", handleLoaderComplete);

    return () => {
      window.removeEventListener("criyx:loader-complete", handleLoaderComplete);
      window.clearInterval(interval);
    };
  }, []);

  const heroTransform = {
    transform: `
      perspective(1800px)
      translate3d(0, ${scrollProgress * -32}px, 0)
      rotateX(${scrollProgress * 8}deg)
      scale(${1 - scrollProgress * 0.03})
    `,
    transformOrigin: "center top",
    opacity: 1 - scrollProgress * 0.12,
    willChange: "transform, opacity",
  };

  const pointerShiftX = (pointer.x - 0.5) * 36;
  const pointerShiftY = (pointer.y - 0.5) * 28;
  const glowX = 50 + (pointer.x - 0.5) * 22;
  const glowY = 18 + (pointer.y - 0.5) * 18;
  const headlineText = HERO_HEADLINE.slice(0, visibleHeadlineLength);
  const isHeadlineTyping = visibleHeadlineLength < HERO_HEADLINE.length;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="site-section-warm relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-22 pt-24 md:px-14 md:pb-28 md:pt-28"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-[background] duration-300"
          style={{
            background: `
              radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 187, 129, 0.22), transparent 22%),
              radial-gradient(circle at 74% 24%, rgba(111, 12, 12, 0.2), transparent 24%),
              radial-gradient(circle at 28% 78%, rgba(74, 7, 7, 0.22), transparent 26%),
              linear-gradient(180deg, rgba(33,5,5,0.08), rgba(12,1,1,0.4))
            `,
          }}
        />
        <div className="absolute left-[-8%] top-[4%] h-[24rem] w-[24rem] rounded-full bg-[rgba(255,185,128,0.08)] blur-[150px]" />
        <div className="absolute right-[-4%] top-[12%] h-[22rem] w-[24rem] rounded-full bg-[rgba(98,10,10,0.16)] blur-[150px]" />
        <div className="absolute inset-x-[18%] top-[10%] h-[28rem] rounded-full bg-[rgba(255,214,176,0.07)] blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,1,1,0.78)_0%,rgba(20,2,2,0.22)_42%,rgba(13,1,1,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,8,8,0.06)_0%,rgba(18,2,2,0.18)_46%,rgba(16,1,1,0.42)_84%,rgba(12,1,1,0.1)_100%)]" />
        <div className="absolute inset-x-[10%] bottom-[-10%] h-[18rem] bg-[radial-gradient(ellipse_at_center,rgba(255,181,120,0.2)_0%,rgba(84,9,9,0.16)_34%,rgba(12,1,1,0.02)_58%,transparent_76%)] blur-[68px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(9,0,0,0)_0%,rgba(16,1,1,0.3)_42%,rgba(16,1,1,0.74)_100%)]" />
        <div className="absolute inset-x-[14%] bottom-[-5rem] h-28 rounded-full bg-[rgba(255,185,128,0.14)] blur-[60px]" />
      </div>

      <div
        className="relative mx-auto grid w-full max-w-[118rem] items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]"
        style={heroTransform}
      >
        <div className="relative z-10 flex min-h-[40rem] items-center lg:pr-8">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.32em] text-[#d7dce4]/52">
              <span className="h-px w-14 bg-white/28" />
              <span>Automation Core</span>
            </div>

            <h1
              className={`max-w-5xl whitespace-pre-line text-[clamp(4.1rem,10vw,8.9rem)] font-light leading-[0.92] tracking-[-0.07em] text-[#f4f6fa] transition-[opacity,transform,filter] duration-[720ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                headlineStarted
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-6 opacity-0 blur-sm"
              }`}
            >
              {headlineText}
              <span
                className={`typewriter-caret ${
                  isHeadlineTyping ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </h1>

            <div className="mt-8 flex max-w-3xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-pretty text-lg leading-8 text-[#c1c7d0] md:text-[1.2rem] md:leading-9">
                Criyx builds AI automation systems across conversations, leads,
                CRM, follow-ups, bookings, and analytics so revenue operations
                keep moving without manual drag.
              </p>

              <a
                href={calLink}
                className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#aab4c4]/24 bg-[#242a33] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#edf2f8] shadow-[0_0_30px_rgba(87,101,121,0.18)] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d]"
              >
                Schedule Your Call
              </a>
            </div>

            <a
              href="#positioning"
              className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-[#d7dce4]/48 transition hover:text-white"
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04]">
                <span className="h-2 w-2 rounded-full bg-[#d8dee8] shadow-[0_0_18px_rgba(216,222,232,0.4)]" />
              </span>
              <span>Scroll to enter the system</span>
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[34rem] items-center justify-center lg:min-h-[42rem]">
          {HERO_THOUGHTS.map((thought) => (
            <div
              key={thought.text}
              className={`hero-thought-bubble pointer-events-none absolute z-20 hidden rounded-[1.3rem] border border-[rgba(255,210,184,0.14)] bg-[linear-gradient(180deg,rgba(37,8,8,0.86),rgba(16,2,2,0.78))] px-4 py-3 text-sm leading-6 text-[#f1ddd3] shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:block ${thought.positionClassName}`}
              style={{ animationDelay: thought.delay }}
            >
              {thought.text}
              <span className="hero-thought-tail" aria-hidden="true" />
            </div>
          ))}

          <div
            className="absolute inset-x-[20%] top-[22%] h-40 rounded-full blur-[120px] transition-transform duration-300"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 187, 129, 0.26), rgba(126, 17, 17, 0.1) 64%, transparent 80%)",
              transform: `translate3d(${pointerShiftX * 0.4}px, ${pointerShiftY * 0.35}px, 0)`,
            }}
          />
          <div
            className="relative aspect-square w-full max-w-[34rem] md:max-w-[38rem] lg:max-w-[42rem]"
            style={{
              transform: `
                perspective(1600px)
                rotateX(${(0.5 - pointer.y) * 5}deg)
                rotateY(${(pointer.x - 0.5) * 8}deg)
                translate3d(${pointerShiftX * 0.75}px, ${pointerShiftY * 0.6}px, 0)
              `,
              transition: pointer.active
                ? "transform 120ms ease-out"
                : "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              className="absolute inset-[16%] rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 209, 172, 0.2), rgba(126, 16, 16, 0.1) 42%, transparent 72%)",
                transform: `translate3d(${pointerShiftX * 0.14}px, ${pointerShiftY * 0.12}px, 0)`,
              }}
            />
            <div
              className="absolute inset-[5%] rounded-[2.6rem] border border-transparent bg-transparent shadow-none backdrop-blur-0"
              style={{
                transform: `translate3d(${pointerShiftX * 0.06}px, ${pointerShiftY * 0.05}px, 0)`,
              }}
            >
              <InteractiveRobotSpline
                scene={HERO_ROBOT_SCENE_URL}
                className="absolute inset-0 h-full w-full overflow-hidden rounded-[2.6rem]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,219,188,0.12),transparent_24%),linear-gradient(180deg,rgba(46,8,8,0.03),rgba(18,2,2,0.08))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
