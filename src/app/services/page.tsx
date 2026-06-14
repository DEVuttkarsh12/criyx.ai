import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";
import { PROCESS_STEPS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Criyx",
  description:
    "Explore the automation services Criyx builds across WhatsApp, voice, CRM, qualification, marketing, and analytics workflows.",
};

const processCopy = [
  "Audit the current workflow, handoffs, channels, and operational bottlenecks.",
  "Define where automation, AI agents, and business logic should sit.",
  "Implement the system across the tools and touchpoints that matter.",
  "Test live conditions, edge cases, and launch behavior before scale.",
  "Refine based on usage, reporting, and ongoing operational feedback.",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="site-section-warm relative z-10 px-6 pb-18 pt-34 md:px-14 md:pb-24 md:pt-40">
        <div
          className="mx-auto w-full max-w-[118rem]"
          data-reveal="card"
          data-scroll-section="drift-left"
        >
          <div className="grid gap-10 border-b border-white/8 pb-14 md:grid-cols-[0.64fr_1.36fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Services
              </p>
            </div>
            <div>
              <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,6.8rem)] font-light leading-[0.96] tracking-[-0.05em] text-[#f4f6fa]">
                Systems built around the parts of the business that actually move revenue.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c1c7d0] md:text-[1.08rem] md:leading-9">
                Each service is designed as an operating layer, not a loose
                automation fragment.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-0" data-scroll-frame data-scroll-depth="1">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-6 border-b border-white/8 py-8 md:grid-cols-[0.14fr_0.96fr_0.9fr] md:items-start md:gap-10 md:py-10"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 70)}
              >
                <div className="text-xs uppercase tracking-[0.28em] text-[#b6bec9]">
                  {service.id}
                </div>
                <h2 className="max-w-2xl text-3xl font-light leading-[1.08] text-[#f4f6fa] md:text-[2.8rem]">
                  {service.title}
                </h2>
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="max-w-xl text-base leading-7 text-[#b9c0ca] md:text-[1.03rem] md:leading-8">
                    {service.copy}
                  </p>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#7c8591]">
                    Module 0{index + 1}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="site-section-warm relative z-10 px-6 py-28 md:px-14 md:py-36"
        data-reveal="card"
        data-scroll-section="lift"
      >
        <div
          className="mx-auto w-full max-w-[118rem] border-t border-white/8 pt-14 md:pt-18"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-12 md:grid-cols-[0.62fr_1.38fr] md:pt-0">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#f4f6fa] md:text-[4rem]">
                Calm execution from discovery to optimization.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step}
                  className="relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6"
                  data-reveal="zoom"
                  data-delay={String(index * 90)}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/14" />
                  <p className="text-xs uppercase tracking-[0.26em] text-[#b6bec9]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-2xl font-light leading-[1.14] text-[#f4f6fa]">
                    {step}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-[#b9c0ca]">
                    {processCopy[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        intro="Built for teams that need the right automation surface mapped before anything gets built."
        title="Choose the system pressure point. We will design the operating layer around it."
      />
    </SiteShell>
  );
}
