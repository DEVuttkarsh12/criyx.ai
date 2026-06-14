import AutomationCoreHero from "@/components/AutomationCoreHero";
import AutomationStory from "@/components/AutomationStory";
import ScrollOrchestrator from "@/components/ScrollOrchestrator";
import SiteNav from "@/components/SiteNav";
import { CAL_LINK } from "@/lib/site-data";

const services = [
  {
    id: "01",
    title: "WhatsApp AI Automation",
    copy:
      "Lead capture, instant reply logic, routing, reminders, and escalation flows designed around how people already message.",
  },
  {
    id: "02",
    title: "Voice AI Agents",
    copy:
      "Inbound and outbound voice systems for confirmations, qualification, reminders, and operational coverage.",
  },
  {
    id: "03",
    title: "CRM Automation",
    copy:
      "Contact updates, status changes, pipeline hygiene, and internal handoffs without manual admin work.",
  },
  {
    id: "04",
    title: "Lead Qualification Systems",
    copy:
      "AI-led question flows, scoring logic, segmentation, and booking readiness built into the revenue path.",
  },
  {
    id: "05",
    title: "AI Marketing Agents",
    copy:
      "Campaign support systems that respond, organize demand, and keep early-stage conversations moving.",
  },
  {
    id: "06",
    title: "Business Analytics Agent",
    copy:
      "Reporting layers that combine activity, pipeline movement, and conversion signals into a usable decision view.",
  },
];

const processSteps = [
  "Discover",
  "Design Automation",
  "Build System",
  "Test & Launch",
  "Optimize",
];

const faqs = [
  {
    question: "What does Criyx build?",
    answer:
      "Criyx builds AI automation systems around lead capture, messaging, CRM workflows, qualification, booking flows, and analytics. The goal is an operational system, not a disconnected demo.",
  },
  {
    question: "Can it connect with WhatsApp?",
    answer:
      "Yes. WhatsApp can be part of the intake, qualification, reminder, routing, and escalation flow depending on the business model and tooling setup.",
  },
  {
    question: "Can it connect with CRM?",
    answer:
      "Yes. Criyx can connect automation into CRM workflows so records, lead states, notes, and follow-up triggers stay current automatically.",
  },
  {
    question: "Do you build voice agents?",
    answer:
      "Yes. Voice agents can be used for inbound triage, confirmations, reminders, and repeatable communication tasks with clear handoff rules.",
  },
  {
    question: "How long does an automation system take?",
    answer:
      "Timeline depends on scope, systems involved, and how much custom logic is required. Smaller flows can move quickly; broader multi-step systems take longer because the handoffs need to be designed properly.",
  },
  {
    question: "Can it be customized for each business?",
    answer:
      "Yes. The systems are built around the actual workflow, team structure, channels, and conversion path of the business rather than a one-size-fits-all template.",
  },
];

export default function Home() {
  return (
    <main className="site-surface relative min-h-screen overflow-x-clip bg-transparent text-[#f4f6fa]">
      <ScrollOrchestrator />
      <SiteNav calLink={CAL_LINK} />

      <AutomationCoreHero calLink={CAL_LINK} />

      <section
        id="positioning"
        className="site-section-warm relative z-20 -mt-22 px-6 pt-14 pb-24 md:-mt-30 md:px-14 md:pt-16 md:pb-32"
        data-reveal="card"
        data-scroll-section="drift-right"
      >
        <div className="pointer-events-none absolute inset-x-[18%] top-[-3.25rem] h-24 rounded-full bg-[rgba(255,185,128,0.18)] blur-[48px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,185,128,0.08)_0%,rgba(48,6,6,0.12)_44%,rgba(14,2,2,0)_100%)] blur-[14px]" />
        <div
          className="mx-auto grid w-full max-w-[118rem] gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.7fr_1.3fr] md:items-start md:pt-18"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d6b9ab]">
              What Criyx Builds
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4rem]">
                Criyx builds automated business systems across conversations,
                leads, CRM, follow-ups, and analytics.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="max-w-xl text-base leading-7 text-[#d4c0b7] md:text-[1.06rem] md:leading-8">
                The work is designed for companies that already have demand but
                need cleaner execution, faster response, and a stronger
                operating layer behind revenue.
              </p>
              <div className="space-y-3 border-l border-white/10 pl-5 text-sm uppercase tracking-[0.22em] text-[#b58f82]">
                <div>Conversations → qualification</div>
                <div>Routing → follow-up</div>
                <div>CRM → reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="site-section-warm relative z-10 px-6 py-24 md:px-14 md:py-34"
        data-reveal="card"
        data-scroll-section="drift-left"
      >
        <div
          className="mx-auto w-full max-w-[118rem]"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-10 border-b border-white/8 pb-14 md:grid-cols-[0.64fr_1.36fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Services
              </p>
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4.2rem]">
                Systems built around the parts of the business that actually
                move revenue.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-0">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-6 border-b border-white/8 py-8 md:grid-cols-[0.14fr_0.96fr_0.9fr] md:items-start md:gap-10 md:py-10"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 70)}
              >
                <div className="text-xs uppercase tracking-[0.28em] text-[#b6bec9]">
                  {service.id}
                </div>
                <h3 className="max-w-2xl text-3xl font-light leading-[1.08] text-[#f4f6fa] md:text-[2.8rem]">
                  {service.title}
                </h3>
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

      <AutomationStory />

      <section
        id="process"
        className="site-section-warm relative z-10 px-6 py-28 md:px-14 md:py-36"
        data-reveal="card"
        data-scroll-section="lift"
      >
        <div
          className="mx-auto w-full max-w-[118rem]"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.62fr_1.38fr] md:pt-18">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#f4f6fa] md:text-[4rem]">
                Calm execution from discovery to optimization.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {processSteps.map((step, index) => (
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
                    {
                      [
                        "Audit the current workflow, handoffs, channels, and operational bottlenecks.",
                        "Define where automation, AI agents, and business logic should sit.",
                        "Implement the system across the tools and touchpoints that matter.",
                        "Test live conditions, edge cases, and launch behavior before scale.",
                        "Refine based on usage, reporting, and ongoing operational feedback.",
                      ][index]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="site-section-warm relative z-10 px-6 py-28 md:px-14 md:py-34"
        data-reveal="card"
        data-scroll-section="drift-right"
      >
        <div
          className="mx-auto w-full max-w-[118rem]"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.56fr_1.44fr] md:pt-18">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#f4f6fa] md:text-[4rem]">
                Clear answers before the system gets built.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.35rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] px-6 py-5"
                  data-reveal="zoom"
                  data-delay={String(faqs.indexOf(item) * 80)}
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
        </div>
      </section>

      <section
        id="contact"
        className="site-section-warm relative z-10 px-6 pt-12 pb-18 md:px-14 md:pt-18 md:pb-24"
        data-reveal="card"
        data-scroll-section="float"
      >
        <div
          className="mx-auto w-full max-w-[118rem] border-t border-white/8 pt-14 md:pt-18"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-12 md:grid-cols-[0.54fr_1.46fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Contact
              </p>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#b9c0ca]">
                Built for operators who need faster response, cleaner handoffs,
                and a stronger automation layer behind demand.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.2fr_auto] md:items-end md:gap-14">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8f97a3]">
                  Next step
                </p>
                <h2 className="mt-4 text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4.25rem]">
                  Ready to build your AI growth system?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#b9c0ca] md:text-[1.05rem] md:leading-8">
                  We map the workflow, define where automation should sit, and
                  build the operating layer around the way your business
                  actually runs.
                </p>
                <p className="mt-6 text-lg font-light leading-7 text-[#f4f6fa]">
                  Schedule a focused call and we will identify the first
                  automation moves worth building.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 md:items-end">
                <a
                  href={CAL_LINK}
                  className="inline-flex w-fit rounded-full border border-[#aab4c4]/24 bg-[#242a33] px-8 py-3.5 text-sm font-medium text-[#edf2f8] shadow-[0_0_30px_rgba(87,101,121,0.18)] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d]"
                >
                  Schedule Your Call
                </a>
                <p className="max-w-xs text-sm leading-6 text-[#8f97a3] md:text-right">
                  Focused strategy call. Clear system map. No generic pitch.
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[#8f97a3] md:mt-20 md:flex-row md:items-center md:justify-between">
            <div>Criyx</div>
            <div>AI automation systems for revenue operations</div>
          </footer>
        </div>
      </section>
    </main>
  );
}
