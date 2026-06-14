import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "About | Criyx",
  description:
    "Learn what Criyx builds and how its automation systems support lead capture, CRM workflows, follow-up, and analytics.",
};

const operatingSignals = [
  "Conversations -> qualification",
  "Routing -> follow-up",
  "CRM -> reporting",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="site-section-warm relative z-10 px-6 pb-18 pt-34 md:px-14 md:pb-22 md:pt-40">
        <div
          className="mx-auto grid w-full max-w-[118rem] gap-12"
          data-reveal="card"
          data-scroll-section="drift-right"
        >
          <div className="grid gap-8 border-b border-white/8 pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#d6b9ab]">
                About Criyx
              </p>
            </div>

            <div>
              <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,6.8rem)] font-light leading-[0.96] tracking-[-0.05em] text-[#f4f6fa]">
                AI automation systems built for businesses that need cleaner execution.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d4c0b7] md:text-[1.08rem] md:leading-9">
                Criyx builds the operating layer behind lead capture,
                qualification, routing, CRM updates, follow-up, and reporting
                so demand does not break down between channels and handoffs.
              </p>
            </div>
          </div>

          <div
            className="grid gap-10 md:grid-cols-[1.16fr_0.84fr] md:gap-12"
            data-scroll-frame
            data-scroll-depth="1"
          >
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4rem]">
                The work is designed for companies that already have demand but
                need faster response, tighter operations, and less manual drag.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="max-w-xl text-base leading-7 text-[#d4c0b7] md:text-[1.06rem] md:leading-8">
                The goal is not a disconnected AI demo. The goal is a system
                that sits inside the actual workflow and makes revenue movement
                more predictable.
              </p>
              <div className="space-y-3 border-l border-white/10 pl-5 text-sm uppercase tracking-[0.22em] text-[#b58f82]">
                {operatingSignals.map((signal) => (
                  <div key={signal}>{signal}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        intro="Built for operators who need stronger response systems behind demand."
        title="If the workflow feels fragmented, that is usually the right place to start."
        body="We map the current flow, identify the handoff gaps, and define the first automation layer worth building."
      />
    </SiteShell>
  );
}
