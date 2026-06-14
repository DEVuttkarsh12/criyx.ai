import type { Metadata } from "next";

import AutomationStory from "@/components/AutomationStory";
import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Flow | Criyx",
  description:
    "See how the Criyx automation flow moves from first lead capture into qualification, CRM updates, follow-up, booking, and analytics.",
};

export default function FlowPage() {
  return (
    <SiteShell>
      <section className="site-section-warm relative z-10 px-6 pb-8 pt-34 md:px-14 md:pt-40">
        <div
          className="mx-auto grid w-full max-w-[118rem] gap-8 border-b border-white/8 pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end"
          data-reveal="card"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Flow
            </p>
          </div>
          <div>
            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,6.8rem)] font-light leading-[0.96] tracking-[-0.05em] text-[#f4f6fa]">
              One view of how demand becomes a booked, tracked, and usable workflow.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c1c7d0] md:text-[1.08rem] md:leading-9">
              This page isolates the operational sequence so the movement from
              first contact to reporting stays easy to understand.
            </p>
          </div>
        </div>
      </section>

      <AutomationStory />

      <ContactSection
        intro="Best suited for teams that know leads are coming in but do not trust the current handoff path."
        title="If the flow is where revenue leaks, we can map it and rebuild it properly."
      />
    </SiteShell>
  );
}
