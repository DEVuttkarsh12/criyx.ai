import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Criyx",
  description:
    "Read common questions about Criyx automation systems, integrations, timelines, and customization.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="site-section-warm relative z-10 px-6 pb-18 pt-34 md:px-14 md:pb-24 md:pt-40">
        <div
          className="mx-auto w-full max-w-[118rem]"
          data-reveal="card"
          data-scroll-section="drift-right"
        >
          <div className="grid gap-12 border-b border-white/8 pb-14 md:grid-cols-[0.56fr_1.44fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                FAQ
              </p>
            </div>
            <div>
              <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,6.8rem)] font-light leading-[0.96] tracking-[-0.05em] text-[#f4f6fa]">
                Clear answers before the system gets built.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c1c7d0] md:text-[1.08rem] md:leading-9">
                The scope, integrations, and deployment logic should be
                concrete before any build starts.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4" data-scroll-frame data-scroll-depth="1">
            {FAQS.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-[1.35rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] px-6 py-5"
                data-reveal="zoom"
                data-delay={String(index * 80)}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl font-light text-[#f4f6fa] marker:content-none md:text-[1.8rem]">
                  <span>{item.question}</span>
                  <span className="text-[#b6bec9] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl border-t border-white/8 pt-5 text-base leading-7 text-[#b9c0ca] md:text-[1.03rem] md:leading-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        intro="Built for operators who want the first system decision to be correct before development starts."
        title="Schedule a focused call and we will identify the first automation moves worth building."
        body="We map the workflow, define where automation should sit, and build the operating layer around how your business actually runs."
      />
    </SiteShell>
  );
}
