"use client";

import { useEffect, useState } from "react";

const labels = [
  { text: "Lead Captured", top: "11%", left: "6%", depth: 0.7 },
  { text: "AI Reply Sent", top: "20%", right: "4%", depth: 1 },
  { text: "CRM Updated", top: "44%", left: "2%", depth: 0.55 },
  { text: "Follow-up Started", top: "57%", right: "10%", depth: 0.85 },
  { text: "Call Booked", bottom: "14%", left: "12%", depth: 0.75 },
  { text: "Analytics Synced", bottom: "4%", right: "7%", depth: 0.65 },
];

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

    function handleScroll() {
      const progress = Math.min(window.scrollY / 420, 1);
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroTransform = {
    transform: `translate3d(0, ${scrollProgress * 56}px, 0) scale(${
      1 - scrollProgress * 0.035
    })`,
    opacity: 1 - scrollProgress * 0.48,
  };

  const visualTransform = {
    transform: `translate3d(${pointer.x * 18}px, ${pointer.y * 16}px, 0)`,
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
              className="inline-flex w-fit shrink-0 rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-7 py-3.5 text-sm font-medium text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.16)] transition hover:bg-[#D6A84F]"
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
            className="absolute inset-x-0 bottom-[14%] top-[2%] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,248,236,0.06),rgba(255,248,236,0.015))] backdrop-blur-[2px]"
            style={visualTransform}
          >
            <div className="absolute left-[14%] top-[18%] h-[17rem] w-[17rem] rounded-full bg-[radial-gradient(circle,rgba(214,168,79,0.18),rgba(214,168,79,0.03)_42%,transparent_72%)] blur-2xl" />
            <div className="absolute right-[10%] top-[16%] h-[12rem] w-[12rem] rounded-full bg-[radial-gradient(circle,rgba(224,90,20,0.18),rgba(224,90,20,0.03)_40%,transparent_72%)] blur-2xl" />

            <div className="absolute inset-[11%] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,6,4,0.34),rgba(9,6,4,0.08))]">
              <svg
                viewBox="0 0 720 520"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="core-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(214,168,79,0.25)" />
                    <stop offset="50%" stopColor="rgba(255,248,236,0.55)" />
                    <stop offset="100%" stopColor="rgba(224,90,20,0.32)" />
                  </linearGradient>
                  <filter id="core-glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M110 355C175 258 274 236 363 262C452 288 541 223 607 155"
                  stroke="url(#core-line)"
                  strokeWidth="1.4"
                  fill="none"
                  strokeDasharray="4 10"
                  opacity="0.8"
                />
                <path
                  d="M127 186C220 126 321 118 418 171C515 224 572 308 590 390"
                  stroke="rgba(255,248,236,0.18)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M164 278C248 311 330 336 437 321C545 306 585 243 603 188"
                  stroke="rgba(214,168,79,0.2)"
                  strokeWidth="1.1"
                  fill="none"
                />

                <circle cx="360" cy="260" r="82" fill="rgba(214,168,79,0.08)" />
                <circle
                  cx="360"
                  cy="260"
                  r="114"
                  stroke="rgba(255,248,236,0.12)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="360"
                  cy="260"
                  r="156"
                  stroke="rgba(214,168,79,0.14)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="8 14"
                />
                <circle cx="360" cy="260" r="26" fill="rgba(255,248,236,0.9)" />
                <circle
                  cx="360"
                  cy="260"
                  r="40"
                  fill="none"
                  stroke="rgba(224,90,20,0.36)"
                  strokeWidth="1.5"
                />

                {[
                  { cx: 182, cy: 182 },
                  { cx: 538, cy: 156 },
                  { cx: 577, cy: 318 },
                  { cx: 193, cy: 371 },
                  { cx: 318, cy: 115 },
                  { cx: 474, cy: 408 },
                ].map((node) => (
                  <g key={`${node.cx}-${node.cy}`}>
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="10"
                      fill="rgba(3,2,1,0.48)"
                      stroke="rgba(255,248,236,0.14)"
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="4"
                      fill="rgba(214,168,79,0.9)"
                      filter="url(#core-glow)"
                    />
                  </g>
                ))}

                <g filter="url(#core-glow)">
                  <circle r="5" fill="#FFD89A">
                    <animateMotion
                      dur="5.8s"
                      repeatCount="indefinite"
                      path="M110 355C175 258 274 236 363 262C452 288 541 223 607 155"
                    />
                  </circle>
                </g>
              </svg>

              {labels.map((label) => {
                const shiftX = pointer.x * 20 * label.depth;
                const shiftY = pointer.y * 16 * label.depth;

                return (
                  <div
                    key={label.text}
                    className="absolute rounded-full border border-white/12 bg-[rgba(10,7,5,0.46)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#FFF8EC]/72 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                    style={{
                      ...label,
                      transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                    }}
                  >
                    {label.text}
                  </div>
                );
              })}

              <div className="absolute bottom-[10%] left-[10%] right-[10%] flex items-center justify-between border-t border-white/8 pt-5 text-[0.7rem] uppercase tracking-[0.3em] text-[#FFF8EC]/34">
                <span>Automation Core</span>
                <span>Live orchestration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
