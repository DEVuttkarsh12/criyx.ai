"use client";

import { useEffect, useMemo, useState } from "react";

const storySteps = [
  "Lead enters from ad, website, Instagram, or WhatsApp",
  "AI replies instantly",
  "AI asks qualifying questions",
  "Lead score is created",
  "CRM updates automatically",
  "Follow-up sequence starts",
  "Call gets booked",
  "Dashboard updates",
];

export default function AutomationStory() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-story-step]")
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Number(a.target.getAttribute("data-story-step")) -
              Number(b.target.getAttribute("data-story-step"))
          );

        if (visible[0]) {
          setActiveStep(Number(visible[0].target.getAttribute("data-story-step")));
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.3,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const nodeStates = useMemo(
    () =>
      [
        { label: "Sources", x: "13%", y: "19%" },
        { label: "Reply", x: "35%", y: "32%" },
        { label: "Qualify", x: "54%", y: "22%" },
        { label: "Score", x: "70%", y: "36%" },
        { label: "CRM", x: "73%", y: "62%" },
        { label: "Follow-up", x: "50%", y: "72%" },
        { label: "Booked", x: "28%", y: "65%" },
        { label: "Analytics", x: "15%", y: "47%" },
      ].map((node, index) => ({
        ...node,
        active: index <= activeStep,
      })),
    [activeStep]
  );

  return (
    <section
      id="automation-flow"
      className="relative z-10 px-6 py-32 md:px-14 md:py-40"
    >
      <div className="mx-auto w-full max-w-[118rem]">
        <div className="grid gap-10 border-b border-white/8 pb-16 md:grid-cols-[0.55fr_1.45fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
              Scroll Story
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4.3rem]">
              From Lead to Revenue
              <span className="text-[#FFF8EC]/54"> — Fully Automated</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#FFF8EC]/62 md:text-[1.08rem] md:leading-8">
              A calm view of how the system moves from first contact into
              qualification, routing, booking, and reporting without fragmented
              handoffs.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-7rem)]">
            <div className="relative h-[28rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.07),rgba(255,248,236,0.015))] p-6 backdrop-blur-md md:h-[34rem] md:p-8 lg:h-full">
              <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
              <div className="absolute left-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_left,rgba(214,168,79,0.14),transparent_72%)]" />
              <div className="absolute inset-x-[14%] top-[14%] bottom-[14%] rounded-[1.5rem] border border-white/7" />

              <svg
                viewBox="0 0 560 560"
                className="absolute inset-[10%] h-[80%] w-[80%]"
                aria-hidden="true"
              >
                <path
                  d="M124 112C173 93 237 119 269 170C305 228 367 236 422 226C462 219 477 249 470 292C461 346 422 387 360 403C286 422 214 426 166 390C117 354 109 300 123 252C144 178 104 145 124 112Z"
                  fill="none"
                  stroke="rgba(255,248,236,0.11)"
                  strokeWidth="1.2"
                />
                <path
                  d="M151 140C206 115 244 142 284 182C336 234 401 224 444 254C480 280 460 336 420 370C371 412 287 414 212 395C145 378 126 321 144 270C164 214 130 169 151 140Z"
                  fill="none"
                  stroke="rgba(214,168,79,0.24)"
                  strokeWidth="1.3"
                  strokeDasharray="8 12"
                />
              </svg>

              {nodeStates.map((node, index) => (
                <div
                  key={node.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-3"
                  style={{ left: node.x, top: node.y }}
                >
                  <div
                    className={`h-3 w-3 rounded-full transition duration-500 ${
                      node.active
                        ? "bg-[#FFD89A] shadow-[0_0_20px_rgba(214,168,79,0.85)]"
                        : "bg-white/20"
                    }`}
                  />
                  <div
                    className={`rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] transition duration-500 ${
                      node.active
                        ? "border-[#D6A84F]/28 bg-[rgba(19,12,8,0.6)] text-[#FFF8EC]/82"
                        : "border-white/8 bg-[rgba(10,7,5,0.3)] text-[#FFF8EC]/42"
                    }`}
                  >
                    {node.label}
                  </div>
                  {index < nodeStates.length - 1 ? (
                    <div
                      className={`absolute left-[calc(100%+0.75rem)] top-1/2 h-px w-12 -translate-y-1/2 transition duration-500 ${
                        index < activeStep ? "bg-[#D6A84F]/54" : "bg-white/10"
                      }`}
                    />
                  ) : null}
                </div>
              ))}

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.25rem] border border-white/8 bg-[rgba(8,6,5,0.42)] p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-[#FFF8EC]/36">
                  Current transition
                </p>
                <p className="mt-3 max-w-xl text-2xl font-light leading-8 text-[#FFF8EC]">
                  {storySteps[activeStep]}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-20 lg:space-y-24">
            {storySteps.map((step, index) => (
              <article
                key={step}
                data-story-step={index}
                className="grid min-h-[62vh] content-center border-t border-white/8 pt-8 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-5 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="max-w-4xl text-3xl font-light leading-[1.08] text-[#FFF8EC] md:text-[3.3rem]">
                      {step}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#FFF8EC]/58 md:text-[1.04rem] md:leading-8">
                      {[
                        "Every source can route into the same system layer, so demand arrives with structure instead of channel-specific chaos.",
                        "Response happens immediately with brand-safe messaging, context awareness, and zero waiting for a human queue.",
                        "The system qualifies intent, urgency, and fit before the team needs to step in.",
                        "Scoring logic turns replies into a usable priority signal for sales or operations.",
                        "Records, notes, and status fields sync into the CRM automatically, without manual patchwork.",
                        "Reminder logic, nurture sequences, and follow-up timing begin as soon as the lead state changes.",
                        "Booking happens once intent is clear, so calls are higher quality and better prepared.",
                        "Reporting closes the loop, making throughput, conversion, and response quality visible in one place.",
                      ][index]}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
