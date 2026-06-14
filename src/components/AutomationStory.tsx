"use client";

import { useEffect, useMemo, useState } from "react";

const storySteps = [
  {
    node: "Capture",
    title: "Demand enters one controlled intake layer",
    summary: "Lead enters from ad, website, Instagram, or WhatsApp",
    description:
      "Every inbound source lands inside the same operating surface, so the business captures demand with source context, campaign attribution, and a usable starting state instead of channel-by-channel chaos.",
    support:
      "The system standardizes what arrived, where it came from, and what should happen next before a human needs to touch it.",
    signal: "Source mapped",
  },
  {
    node: "Reply",
    title: "AI responds while intent is still high",
    summary: "AI replies instantly",
    description:
      "The first response happens immediately with approved messaging, relevant context, and a clear next step, which protects speed-to-lead without forcing the team into constant inbox duty.",
    support:
      "This is where lost momentum gets recovered: the business looks responsive even when the team is occupied elsewhere.",
    signal: "Response live",
  },
  {
    node: "Qualify",
    title: "Qualification starts before sales time is spent",
    summary: "AI asks qualifying questions",
    description:
      "The workflow gathers fit, urgency, need, and readiness directly in the conversation so the business can separate early curiosity from actual buying intent with less manual back-and-forth.",
    support:
      "By the time someone steps in, the conversation already carries the information needed for a sharper handoff.",
    signal: "Intent captured",
  },
  {
    node: "Score",
    title: "Lead priority becomes operationally clear",
    summary: "Lead score is created",
    description:
      "Answers, behavior, timing, and source quality roll into a score that helps the team know which conversations deserve immediate attention and which should stay in nurture.",
    support:
      "Scoring is not just a number. It is a routing decision layer that reduces guesswork under pressure.",
    signal: "Priority ranked",
  },
  {
    node: "CRM",
    title: "The CRM stays current without admin drag",
    summary: "CRM updates automatically",
    description:
      "Records, notes, status changes, and lead context sync into the CRM automatically, so pipeline visibility improves without relying on someone to patch the system after every conversation.",
    support:
      "That means cleaner records, better reporting, and less silent revenue leakage caused by stale data.",
    signal: "Records synced",
  },
  {
    node: "Follow-up",
    title: "Follow-up runs on timing, not memory",
    summary: "Follow-up sequence starts",
    description:
      "Reminder logic, nurture sequences, and reactivation prompts begin the moment the lead changes state, which keeps conversations moving even when the team is focused on delivery or closing work.",
    support:
      "Follow-up becomes a system behavior instead of a task somebody hopes to remember later.",
    signal: "Sequence armed",
  },
  {
    node: "Booked",
    title: "The handoff happens when the lead is ready",
    summary: "Call gets booked",
    description:
      "Once the signal is strong enough, the system pushes the conversation into scheduling so booked calls arrive with better context, better timing, and a higher chance of converting.",
    support:
      "The calendar stops filling with low-intent noise and starts reflecting genuinely prepared conversations.",
    signal: "Meeting locked",
  },
  {
    node: "Analytics",
    title: "Reporting closes the operational loop",
    summary: "Dashboard updates",
    description:
      "Performance data updates in one place so the business can see response speed, qualification quality, booked meetings, and conversion movement without stitching reports together manually.",
    support:
      "That visibility is what makes the system optimizable instead of mysterious.",
    signal: "Insight visible",
  },
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
        { x: "13%", y: "19%" },
        { x: "35%", y: "32%" },
        { x: "54%", y: "22%" },
        { x: "70%", y: "36%" },
        { x: "73%", y: "62%" },
        { x: "50%", y: "72%" },
        { x: "28%", y: "65%" },
        { x: "15%", y: "47%" },
      ].map((node, index) => ({
        ...node,
        label: storySteps[index].node,
        signal: storySteps[index].signal,
        active: index <= activeStep,
      })),
    [activeStep]
  );
  const activeStory = storySteps[activeStep];

  return (
    <section
      id="automation-flow"
      className="site-section-warm relative z-10 px-6 py-32 md:px-14 md:py-40"
      data-reveal="card"
      data-scroll-section="float"
    >
      <div
        className="mx-auto w-full max-w-[118rem]"
        data-scroll-frame
        data-scroll-depth="0.92"
        data-scroll-rotate="0.9"
      >
        <div className="grid gap-10 border-b border-white/8 pb-16 md:grid-cols-[0.55fr_1.45fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Scroll Story
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] text-[#f4f6fa] md:text-[4.3rem]">
              From Lead to Revenue
              <span className="text-[#8f97a3]"> — Fully Automated</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#b9c0ca] md:text-[1.08rem] md:leading-8">
              A calm view of how the system moves from first contact into
              qualification, routing, booking, and reporting without fragmented
              handoffs.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-7rem)]">
            <div
              className="relative h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(197,214,233,0.08),transparent_24%),linear-gradient(180deg,rgba(20,24,31,0.96),rgba(10,12,16,0.88))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl md:h-[34rem] md:p-8 lg:h-full"
              data-reveal="left"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
              <div className="absolute left-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_left,rgba(207,214,224,0.14),transparent_72%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.18]" />
              <div className="absolute inset-x-[10%] top-[12%] bottom-[19%] rounded-[1.65rem] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
              <div className="absolute inset-x-[13%] top-[16%] bottom-[23%] rounded-[1.35rem] border border-white/6" />

              <div className="relative z-10 flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-[#97a2b1]">
                    Live Flow Canvas
                  </p>
                  <p className="mt-1 text-sm text-[#d6dde7]">
                    One system surface coordinating inbound demand.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#7f8a98]">
                    Active stage
                  </p>
                  <p className="mt-1 font-[var(--font-geist-mono)] text-xl text-[#f4f6fa]">
                    0{activeStep + 1}/08
                  </p>
                </div>
              </div>

              <svg
                viewBox="0 0 560 560"
                className="absolute inset-[12%] h-[76%] w-[76%]"
                aria-hidden="true"
              >
                <path
                  d="M124 112C173 93 237 119 269 170C305 228 367 236 422 226C462 219 477 249 470 292C461 346 422 387 360 403C286 422 214 426 166 390C117 354 109 300 123 252C144 178 104 145 124 112Z"
                  fill="none"
                  stroke="rgba(244,246,250,0.11)"
                  strokeWidth="1.2"
                />
                <path
                  d="M151 140C206 115 244 142 284 182C336 234 401 224 444 254C480 280 460 336 420 370C371 412 287 414 212 395C145 378 126 321 144 270C164 214 130 169 151 140Z"
                  fill="none"
                  stroke="rgba(207,214,224,0.24)"
                  strokeWidth="1.3"
                  strokeDasharray="8 12"
                />
                <path
                  d="M132 188C192 166 250 181 287 227C324 272 374 285 418 290"
                  fill="none"
                  stroke="rgba(145,171,201,0.28)"
                  strokeWidth="1.2"
                  strokeDasharray="5 10"
                />
              </svg>

              {nodeStates.map((node, index) => (
                <div
                  key={node.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-3"
                  style={{ left: node.x, top: node.y }}
                >
                  <div
                    className={`h-3.5 w-3.5 rounded-full transition duration-500 ${
                      node.active
                        ? "bg-[#d9dee7] shadow-[0_0_22px_rgba(207,214,224,0.52)]"
                        : "bg-white/20"
                    }`}
                  />
                  <div
                    className={`min-w-[8.8rem] rounded-[1rem] border px-3 py-2 transition duration-500 ${
                      node.active
                        ? "border-white/16 bg-[rgba(20,24,29,0.84)] text-[#dce2eb] shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
                        : "border-white/8 bg-[rgba(10,12,15,0.34)] text-[#8f97a3]"
                    }`}
                  >
                    <div className="text-[0.6rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[0.72rem] uppercase tracking-[0.24em]">
                      {node.label}
                    </div>
                    <div className="mt-1 text-[0.68rem] tracking-[0.02em] text-[#aab3bf]">
                      {node.signal}
                    </div>
                  </div>
                  {index < nodeStates.length - 1 ? (
                    <div
                      className={`absolute left-[calc(100%+0.75rem)] top-1/2 h-px w-14 -translate-y-1/2 transition duration-500 ${
                        index < activeStep
                          ? "bg-[linear-gradient(90deg,rgba(207,214,224,0.62),rgba(143,169,198,0.18))]"
                          : "bg-white/10"
                      }`}
                    />
                  ) : null}
                </div>
              ))}

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,18,24,0.88),rgba(9,12,16,0.72))] p-5 backdrop-blur-md">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8f97a3]">
                      Current transition
                    </p>
                    <p className="mt-3 max-w-xl text-2xl font-light leading-8 text-[#f4f6fa]">
                      {activeStory.summary}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-[#c8d1dc]">
                    {activeStory.signal}
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a8b1bc]">
                  {activeStory.support}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#7f8a98]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d9dee7] shadow-[0_0_16px_rgba(217,222,231,0.4)]" />
                  <span>System route progressing in real time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20 lg:space-y-24">
            {storySteps.map((step, index) => (
              <article
                key={step.summary}
                data-story-step={index}
                className="grid min-h-[62vh] content-center border-t border-white/8 pt-8 first:border-t-0 first:pt-0"
                data-reveal={index % 2 === 0 ? "right" : "left"}
                data-delay={String(index * 60)}
              >
                <div className="grid gap-5 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#b6bec9]">
                    0{index + 1}
                  </div>
                  <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] px-6 py-6 shadow-[0_18px_48px_rgba(0,0,0,0.18)] md:px-8 md:py-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-[#c7d0da]">
                        {step.node}
                      </span>
                      <span className="text-[0.68rem] uppercase tracking-[0.26em] text-[#7f8a98]">
                        {step.signal}
                      </span>
                    </div>
                    <h3 className="mt-5 max-w-4xl text-3xl font-light leading-[1.08] text-[#f4f6fa] md:text-[3.3rem]">
                      {step.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-[#b9c0ca] md:text-[1.04rem] md:leading-8">
                      {step.description}
                    </p>
                    <p className="mt-5 max-w-2xl border-l border-white/10 pl-4 text-sm leading-6 text-[#98a3b0] md:text-[0.98rem] md:leading-7">
                      {step.support}
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
