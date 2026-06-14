import Image from "next/image";
import AutomationCoreHero from "@/components/AutomationCoreHero";
import AutomationStory from "@/components/AutomationStory";
import HeroGradient from "@/components/HeroGradient";
import ScrollOrchestrator from "@/components/ScrollOrchestrator";

const CAL_LINK = "https://cal.com/your-link-here";

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
    <main className="relative min-h-screen overflow-x-clip bg-[#030201] text-[#FFF8EC]">
      <ScrollOrchestrator />
      <HeroGradient />

      <nav
        className="relative z-20 px-6 pt-5 md:px-14 md:pt-7"
        data-reveal="zoom"
      >
        <div className="mx-auto flex w-full max-w-[118rem] items-center py-3 md:py-4">
          <a href="#top" className="flex items-center gap-4">
            <Image
              src="/criyx-logo.avif"
              alt="Criyx logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-[1.6rem] font-semibold leading-none tracking-tight">
              Criyx
            </span>
          </a>

          <div className="ml-auto hidden items-center gap-10 text-sm uppercase tracking-[0.24em] text-[#FFF8EC]/64 md:flex">
            <a className="transition hover:text-[#D6A84F]" href="#positioning">
              About
            </a>
            <a className="transition hover:text-[#D6A84F]" href="#services">
              Services
            </a>
            <a
              className="transition hover:text-[#D6A84F]"
              href="#automation-flow"
            >
              Flow
            </a>
            <a className="transition hover:text-[#D6A84F]" href="#faq">
              FAQ
            </a>
          </div>

          <a
            href={CAL_LINK}
            className="ml-auto rounded-full border border-[#D6A84F]/24 bg-[#FFF8EC]/8 px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-[#FFF8EC] transition hover:bg-[#FFF8EC] hover:text-[#080402] md:ml-10"
          >
            Schedule Call
          </a>
        </div>
      </nav>

      <AutomationCoreHero calLink={CAL_LINK} />

      <section
        id="positioning"
        className="relative z-10 px-6 py-24 md:px-14 md:py-32"
        data-reveal="card"
      >
        <div className="mx-auto grid w-full max-w-[118rem] gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.7fr_1.3fr] md:items-start md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
              What Criyx Builds
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#FFF8EC] md:text-[4rem]">
                Criyx builds automated business systems across conversations,
                leads, CRM, follow-ups, and analytics.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="max-w-xl text-base leading-7 text-[#FFF8EC]/62 md:text-[1.06rem] md:leading-8">
                The work is designed for companies that already have demand but
                need cleaner execution, faster response, and a stronger
                operating layer behind revenue.
              </p>
              <div className="space-y-3 border-l border-white/10 pl-5 text-sm uppercase tracking-[0.22em] text-[#FFF8EC]/42">
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
        className="relative z-10 px-6 py-24 md:px-14 md:py-34"
        data-reveal="card"
      >
        <div className="mx-auto w-full max-w-[118rem]">
          <div className="grid gap-10 border-b border-white/8 pb-14 md:grid-cols-[0.64fr_1.36fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
                Services
              </p>
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#FFF8EC] md:text-[4.2rem]">
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
                <div className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">
                  {service.id}
                </div>
                <h3 className="max-w-2xl text-3xl font-light leading-[1.08] text-[#FFF8EC] md:text-[2.8rem]">
                  {service.title}
                </h3>
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="max-w-xl text-base leading-7 text-[#FFF8EC]/58 md:text-[1.03rem] md:leading-8">
                    {service.copy}
                  </p>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#FFF8EC]/28">
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
        className="relative z-10 px-6 py-28 md:px-14 md:py-36"
        data-reveal="card"
      >
        <div className="mx-auto w-full max-w-[118rem]">
          <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.62fr_1.38fr] md:pt-18">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4rem]">
                Calm execution from discovery to optimization.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.06),rgba(255,248,236,0.015))] p-6"
                  data-reveal="zoom"
                  data-delay={String(index * 90)}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/14" />
                  <p className="text-xs uppercase tracking-[0.26em] text-[#D6A84F]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-2xl font-light leading-[1.14] text-[#FFF8EC]">
                    {step}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-[#FFF8EC]/54">
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
        className="relative z-10 px-6 py-28 md:px-14 md:py-34"
        data-reveal="card"
      >
        <div className="mx-auto w-full max-w-[118rem]">
          <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.56fr_1.44fr] md:pt-18">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4rem]">
                Clear answers before the system gets built.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.35rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,248,236,0.05),rgba(255,248,236,0.015))] px-6 py-5"
                  data-reveal="zoom"
                  data-delay={String(faqs.indexOf(item) * 80)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl font-light text-[#FFF8EC] marker:content-none md:text-[1.8rem]">
                    <span>{item.question}</span>
                    <span className="text-[#D6A84F] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-3xl border-t border-white/8 pt-5 text-base leading-7 text-[#FFF8EC]/58 md:text-[1.03rem] md:leading-8">
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
        className="relative z-10 px-6 pt-12 pb-18 md:px-14 md:pt-18 md:pb-24"
        data-reveal="card"
      >
        <div className="mx-auto w-full max-w-[118rem] border-t border-white/8 pt-14 md:pt-18">
          <div className="grid gap-12 md:grid-cols-[0.62fr_1.38fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#D6A84F]">
                Final CTA
              </p>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#FFF8EC]/58">
                Built for operators who need a sharper system behind demand, not
                more noise in front of it.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.07),rgba(255,248,236,0.02))] px-8 py-10 backdrop-blur-md md:px-12 md:py-14">
              <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
              <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(214,168,79,0.12),transparent_74%)]" />

              <div className="grid gap-10 md:grid-cols-[1.12fr_0.88fr] md:gap-12">
                <div>
                  <h2 className="max-w-4xl text-4xl font-light leading-[1.03] text-[#FFF8EC] md:text-[4.25rem]">
                    Ready to build your AI growth system?
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#FFF8EC]/62 md:text-[1.05rem] md:leading-8">
                    We map the workflow, design the automation layer, and build
                    the operating system around the business instead of around a
                    generic tool stack.
                  </p>
                </div>

                <div className="grid content-end gap-6 md:pl-8">
                  <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#FFF8EC]/38">
                      Next step
                    </p>
                    <p className="mt-3 text-lg font-light leading-7 text-[#FFF8EC]">
                      Schedule a focused call and we will map where automation
                      should sit first.
                    </p>
                  </div>

                  <a
                    href={CAL_LINK}
                    className="inline-flex w-fit rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-8 py-3.5 text-sm font-medium text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.16)] transition hover:bg-[#D6A84F]"
                  >
                    Schedule Your Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[#FFF8EC]/42 md:mt-20 md:flex-row md:items-center md:justify-between">
            <div>Criyx</div>
            <div>AI automation systems for revenue operations</div>
          </footer>
        </div>
      </section>
    </main>
  );
}
