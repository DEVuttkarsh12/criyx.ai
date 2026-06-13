"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    eyebrow: "01 / Web experiences",
    title: "Websites and funnels built to look sharp, load fast, and convert cleanly.",
    copy: "From branded landing pages to multi-page business sites, we design and build web experiences that feel premium and stay practical for growth.",
    points: ["Landing pages", "Business websites", "Conversion flows"],
    meta: "Brand-first presence",
    overview:
      "Web work designed for companies that need more than a pretty front-end: clear positioning, credible visuals, strong performance, and conversion-ready structure.",
    outcomes: [
      "Stronger first impression and brand trust",
      "Better conversion from paid or organic traffic",
      "Cleaner handoff from marketing into leads or bookings",
    ],
    subservices: [
      {
        name: "Landing pages",
        detail:
          "High-conviction campaign pages built for launches, paid traffic, offers, and fast-moving acquisition goals.",
      },
      {
        name: "Business websites",
        detail:
          "Full company sites with service pages, brand systems, clear navigation, and a visual tone that feels properly premium.",
      },
      {
        name: "Lead capture and booking flows",
        detail:
          "Forms, qualification logic, booking steps, and CTAs that route real interest into the right next action.",
      },
    ],
  },
  {
    id: "02",
    eyebrow: "02 / Apps and platforms",
    title: "Custom web apps and product interfaces built around real workflows.",
    copy: "Internal tools, client portals, dashboards, and user-facing apps designed to feel polished while solving actual operational problems.",
    points: ["Dashboards", "Portals", "Product UI"],
    meta: "Operational product design",
    overview:
      "Application work for teams that need something purpose-built: a system with logins, workflows, views, approvals, and interfaces tuned to the job.",
    outcomes: [
      "Fewer broken workflows across tools and spreadsheets",
      "Sharper interfaces for staff or customers",
      "Product logic built around the business instead of generic SaaS limits",
    ],
    subservices: [
      {
        name: "Internal dashboards",
        detail:
          "Operational views for teams handling leads, tasks, reporting, approvals, and day-to-day execution.",
      },
      {
        name: "Client or customer portals",
        detail:
          "Secure interfaces where users can log in, view data, track progress, and complete actions without friction.",
      },
      {
        name: "Custom product flows",
        detail:
          "Feature flows, onboarding paths, admin layers, and account logic designed around your exact use case.",
      },
    ],
  },
  {
    id: "03",
    eyebrow: "03 / AI and automations",
    title: "Advanced automations that remove repetitive work without breaking the human workflow.",
    copy: "We connect apps, build logic layers, and create AI-assisted systems that reduce manual drag across intake, follow-up, routing, and reporting.",
    points: ["AI workflows", "Process automation", "Cross-tool logic"],
    meta: "Advanced operations layer",
    overview:
      "Automation systems for teams that are tired of manual copy-paste work, inconsistent follow-up, and fragile operations living across disconnected tools.",
    outcomes: [
      "Less manual effort across repetitive processes",
      "More reliable execution across channels and tools",
      "AI support where it actually improves throughput",
    ],
    subservices: [
      {
        name: "AI workflow design",
        detail:
          "Prompted decision layers, structured task logic, and AI-assisted steps that support the operation instead of distracting it.",
      },
      {
        name: "Cross-platform automation",
        detail:
          "Connections between forms, CRMs, sheets, messaging tools, calendars, and internal systems with real business logic in between.",
      },
      {
        name: "Advanced process orchestration",
        detail:
          "Multi-step flows for approvals, escalations, reminders, routing, and operational handoffs across teams.",
      },
    ],
  },
  {
    id: "04",
    eyebrow: "04 / AI agents and communication systems",
    title: "WhatsApp, voice, and AI agent systems that handle real conversations.",
    copy: "We build conversation layers for lead qualification, inbound response, reminders, confirmations, and support paths with human escalation built in.",
    points: ["WhatsApp agents", "Voice AI", "Human handoff"],
    meta: "Conversation infrastructure",
    overview:
      "Communication systems for businesses that want faster response times and better consistency across messaging and call-based customer touchpoints.",
    outcomes: [
      "Quicker response across inbound inquiries",
      "Better qualification before a rep steps in",
      "Lower communication overhead for the team",
    ],
    subservices: [
      {
        name: "WhatsApp agents",
        detail:
          "AI-driven lead qualification, FAQ handling, routing, and booking support inside messaging flows people already use.",
      },
      {
        name: "Voice systems",
        detail:
          "Inbound triage, outbound reminders, and confirmation calls that reduce repetitive phone work while preserving escalation paths.",
      },
      {
        name: "Conversation handoff design",
        detail:
          "Clear transitions from AI to human with captured context, tags, urgency signals, and owner-ready summaries.",
      },
    ],
  },
  {
    id: "05",
    eyebrow: "05 / Custom software and data systems",
    title: "Custom software, backend logic, and reporting systems built around how the business actually runs.",
    copy: "When off-the-shelf tools are too limiting, we build the custom layers underneath: software, backend processes, dashboards, and internal logic.",
    points: ["Custom software", "Backend systems", "Reporting layers"],
    meta: "Built for your operation",
    overview:
      "Software development for companies that need a tailored system, whether that means a standalone internal tool, a backend workflow, or a full custom operating layer.",
    outcomes: [
      "Less dependence on mismatched off-the-shelf tools",
      "Systems shaped to the real business model",
      "Cleaner reporting and logic across departments",
    ],
    subservices: [
      {
        name: "Custom internal software",
        detail:
          "Purpose-built tools for teams managing operations, service delivery, approvals, or customer workflows.",
      },
      {
        name: "Backend process systems",
        detail:
          "Data flows, background jobs, integrations, and business rules that hold the operation together under the interface.",
      },
      {
        name: "Analytics and reporting infrastructure",
        detail:
          "Dashboards and reporting layers that bring activity, performance, and conversion data into one usable decision surface.",
      },
    ],
  },
];

export default function ServicesRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService =
    services.find((service) => service.id === selectedServiceId) ?? null;

  useEffect(() => {
    let frame = 0;
    let maxTranslate = 0;
    let scrollableDistance = 1;

    function measureRail() {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) {
        return;
      }

      maxTranslate = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      scrollableDistance = Math.max(maxTranslate, 1);
      setSectionHeight(`${window.innerHeight + scrollableDistance}px`);
    }

    function updateRailPosition() {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) {
        return;
      }

      const sectionTop = section.getBoundingClientRect().top;
      const rawProgress = -sectionTop / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;
    }

    function requestUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        measureRail();
        updateRailPosition();
      });
    }

    measureRail();
    updateRailPosition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedServiceId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  return (
    <>
      <section
        id="systems"
        ref={sectionRef}
        className="relative z-10 pt-8 md:pt-12"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-14 md:py-32">
          <div className="ml-2 w-full md:ml-8">
            <div className="mb-8 max-w-4xl md:mb-10">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D6A84F]">
                Systems we build
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[1.02] text-[#FFF8EC] md:max-w-5xl md:text-[4.25rem]">
                Services designed around revenue operations, not demos.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#FFF8EC]/56 md:text-lg md:leading-8">
                Web, apps, software, AI systems, and advanced automations built
                as one operating layer instead of disconnected projects.
              </p>
            </div>

            <div
              ref={viewportRef}
              className="w-[calc(100vw-4rem)] overflow-hidden md:w-[calc(100vw-11rem)]"
            >
              <div ref={trackRef} className="flex gap-6 will-change-transform">
                {services.map((service) => (
                  <article
                    key={service.eyebrow}
                    className="group relative isolate min-h-[430px] w-[calc(100vw-4rem)] flex-none overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.08),rgba(255,248,236,0.03))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:border-white/16 hover:bg-[linear-gradient(180deg,rgba(255,248,236,0.1),rgba(255,248,236,0.04))] md:min-h-[450px] md:w-[calc(100vw-11rem)] md:p-10"
                    onClick={() => setSelectedServiceId(service.id)}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,236,0.06),rgba(255,248,236,0.015)_22%,rgba(255,248,236,0)_48%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-white/22" />
                    <div className="absolute left-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_left,rgba(214,168,79,0.14),transparent_72%)]" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[#D6A84F]">
                              {service.eyebrow}
                            </p>
                            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#FFF8EC]/40 md:text-sm">
                              {service.meta}
                            </p>
                          </div>

                          <div className="text-sm tracking-[0.24em] text-[#FFF8EC]/34">
                            {service.id}
                          </div>
                        </div>

                        <h3 className="mt-10 max-w-4xl text-4xl font-light leading-[0.95] text-[#FFF8EC] md:max-w-[56rem] md:text-[4.35rem]">
                          {service.title}
                        </h3>
                      </div>

                      <div className="mt-10 border-t border-white/8 pt-7">
                        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end">
                          <p className="max-w-2xl text-lg leading-8 text-[#FFF8EC]/68 md:text-xl md:leading-9">
                            {service.copy}
                          </p>

                          <div className="flex flex-wrap gap-3 md:justify-end">
                            {service.points.map((point) => (
                              <span
                                key={point}
                                className="border border-white/12 bg-white/[0.045] px-4 py-2.5 text-sm uppercase tracking-[0.16em] text-[#FFF8EC]/72"
                              >
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-5 text-sm uppercase tracking-[0.18em] text-[#FFF8EC]/42">
                          <span>Open service brief</span>
                          <span className="transition duration-300 group-hover:text-[#D6A84F]">
                            View details
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedService ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 p-6 backdrop-blur-md md:p-10">
          <button
            type="button"
            aria-label="Close service details"
            className="absolute inset-0"
            onClick={() => setSelectedServiceId(null)}
          />

          <div className="relative z-10 max-h-[92vh] w-full max-w-7xl overflow-auto rounded-[8px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,248,236,0.08),rgba(255,248,236,0.03))] p-7 shadow-[0_40px_140px_rgba(0,0,0,0.36)] backdrop-blur-2xl md:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
            <div className="absolute left-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_left,rgba(214,168,79,0.15),transparent_72%)]" />

            <div className="relative flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
                  {selectedService.eyebrow}
                </p>
                <h3 className="mt-4 max-w-4xl text-4xl font-light leading-[0.96] text-[#FFF8EC] md:text-6xl">
                  {selectedService.title}
                </h3>
              </div>

              <button
                type="button"
                className="rounded-[8px] border border-white/12 bg-white/[0.05] px-4 py-2 text-sm uppercase tracking-[0.18em] text-[#FFF8EC]/72 transition hover:border-white/20 hover:bg-white/[0.07]"
                onClick={() => setSelectedServiceId(null)}
              >
                Close
              </button>
            </div>

            <div className="relative mt-12 grid gap-12 border-t border-white/8 pt-10 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#FFF8EC]/42">
                  Overview
                </p>
                <p className="mt-4 max-w-xl text-lg leading-8 text-[#FFF8EC]/72 md:text-xl md:leading-9">
                  {selectedService.overview}
                </p>

                <div className="mt-12">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#FFF8EC]/42">
                    Outcomes
                  </p>
                  <div className="mt-5 grid gap-4">
                    {selectedService.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-4 text-base leading-7 text-[#FFF8EC]/72"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#FFF8EC]/42">
                  Sub-services
                </p>
                <div className="mt-5 grid gap-5">
                  {selectedService.subservices.map((subservice, index) => (
                    <div
                      key={subservice.name}
                      className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-xl font-light leading-7 text-[#FFF8EC] md:text-2xl">
                          {subservice.name}
                        </h4>
                        <span className="text-xs tracking-[0.22em] text-[#D6A84F]/78">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-base leading-7 text-[#FFF8EC]/66">
                        {subservice.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
