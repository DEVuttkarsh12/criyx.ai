import Image from "next/image";
import HeroGradient from "@/components/HeroGradient";
import ServicesRail from "@/components/ServicesRail";

const CAL_LINK = "https://cal.com/your-link-here";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030201] text-[#FFF8EC]">
      <HeroGradient />

      <nav className="relative z-10 flex items-center px-6 py-4 md:px-14 md:py-6">
        <div className="ml-2 flex items-center gap-4 md:ml-8">
          <Image
            src="/criyx-logo.avif"
            alt="Criyx logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <div className="text-[1.7rem] font-semibold leading-none tracking-tight">
            Criyx
          </div>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-lg text-[#FFF8EC]/72 md:flex">
          <a className="transition hover:text-[#D6A84F]" href="#systems">
            Systems
          </a>
          <a className="transition hover:text-[#D6A84F]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[#D6A84F]" href="#contact">
            Contact
          </a>
        </div>

        <a
          href={CAL_LINK}
          className="ml-auto mr-2 border border-[#D6A84F]/35 bg-[#FFF8EC]/12 px-7 py-3 text-lg text-[#FFF8EC] transition hover:bg-[#FFF8EC] hover:text-[#080402] md:mr-8"
        >
          Schedule Call
        </a>
      </nav>

      <section className="relative z-10 flex min-h-[calc(100vh-98px)] items-end px-6 pb-20 pt-8 md:px-14 md:pb-28">
        <div className="ml-2 max-w-5xl md:ml-8">
          <h1 className="max-w-5xl text-[clamp(4.3rem,11vw,8.8rem)] font-light leading-[0.96] tracking-[-0.065em]">
            AI Systems
            <br />
            That Run
            <br />
            Your Business
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-pretty text-lg leading-8 text-[#FFF8EC]/76 md:text-xl md:leading-9">
              We build practical AI systems for growing teams: WhatsApp agents,
              voice workflows, CRM automation, lead qualification, and analytics
              that keep operations moving.
            </p>

            <a
              href={CAL_LINK}
              className="w-fit shrink-0 rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-6 py-3 text-sm font-medium text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.18)] transition hover:bg-[#D6A84F]"
            >
              Schedule Your Call
            </a>
          </div>
        </div>
      </section>

      <ServicesRail />

      <section
        id="process"
        className="relative z-10 px-6 py-28 md:px-10 md:py-36 xl:px-14"
      >
        <div className="mx-auto w-full max-w-[118rem]">
          <div className="grid items-start gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] md:gap-18 xl:gap-20">
            <div className="md:pt-12 md:pr-4 xl:pr-8">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D6A84F]">
                Process
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4.45rem]">
                Build the workflow, ship the system, keep improving it.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#FFF8EC]/62 md:text-[1.05rem] md:leading-8">
                A delivery model built to stay sharp under real operating
                pressure: practical upfront mapping, clean implementation, and
                refinement once the system is live.
              </p>

              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-[#FFF8EC]/36">
                <span className="h-px w-16 bg-[#D6A84F]/45" />
                <span>Structured delivery</span>
              </div>
            </div>

            <div className="relative pl-0 md:pl-16 xl:pl-20">
              <div className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(214,168,79,0.45),rgba(255,248,236,0.08)_18%,rgba(255,248,236,0.02)_100%)] md:block" />

              <div className="grid gap-10 md:gap-12">
                {[
                  {
                    title: "Map the current intake, sales, and follow-up flow.",
                    detail:
                      "We begin with the actual sequence of conversations, handoffs, and bottlenecks so the system fits the business instead of forcing a new operating habit.",
                  },
                  {
                    title:
                      "Build the AI layer around the handoffs your team already uses.",
                    detail:
                      "Automation, agents, and software logic are introduced where they remove friction, speed up execution, and preserve the points where human judgement still matters.",
                  },
                  {
                    title:
                      "Launch with clear reporting so each week gets sharper.",
                    detail:
                      "Once live, the system is tuned through reporting, exception handling, and real usage patterns so performance improves rather than drifting over time.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="group relative overflow-hidden border-t border-white/10 pt-7 text-[#FFF8EC]/74 md:pt-9"
                  >
                    <div className="absolute left-0 top-0 hidden h-px w-28 bg-[#D6A84F]/50 md:block" />
                    <div className="absolute -left-[3.6rem] top-8 hidden h-3 w-3 rounded-full border border-[#D6A84F]/60 bg-[#0B0604] shadow-[0_0_18px_rgba(214,168,79,0.3)] md:block" />

                    <div className="flex items-start justify-between gap-8">
                      <div className="max-w-[48rem]">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">
                          Step 0{index + 1}
                        </p>
                        <p className="mt-4 max-w-[19ch] text-2xl font-light leading-[1.18] text-[#FFF8EC] md:text-[2.45rem]">
                          {step.title}
                        </p>
                      </div>

                      <div className="hidden w-10 shrink-0 pt-1 text-right text-sm tracking-[0.24em] text-[#FFF8EC]/24 transition duration-300 group-hover:text-[#D6A84F]/78 md:block">
                        0{index + 1}
                      </div>
                    </div>

                    <p className="mt-6 max-w-[43rem] text-base leading-7 text-[#FFF8EC]/58 md:text-[1.06rem] md:leading-8">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 px-6 pt-14 pb-28 md:px-14 md:pt-24 md:pb-36"
      >
        <div className="mx-auto w-full max-w-[118rem] border-t border-[#FFF8EC]/12 pt-14 md:pt-20">
          <div className="grid items-start gap-14 md:grid-cols-[0.62fr_1.38fr] md:gap-20">
            <div className="md:pt-6 md:pr-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D6A84F]">
                Contact
              </p>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#FFF8EC]/58 md:text-[1.02rem] md:leading-8">
                If the business already has traction, the next step is usually
                system quality, not more noise.
              </p>

              <div className="mt-14 hidden gap-7 border-t border-white/8 pt-9 md:grid">
                {[
                  "Systems designed around real ops",
                  "Clear launch scope and delivery path",
                  "Built for revenue-facing workflows",
                ].map((point) => (
                  <div
                    key={point}
                    className="text-sm uppercase tracking-[0.2em] text-[#FFF8EC]/36"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[14px] border border-white/9 bg-[linear-gradient(180deg,rgba(255,248,236,0.08),rgba(255,248,236,0.02))] p-8 shadow-[0_34px_120px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-14">
              <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
              <div className="absolute right-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_right,rgba(214,168,79,0.12),transparent_74%)]" />
              <div className="absolute inset-y-0 right-[30%] w-px bg-[linear-gradient(180deg,transparent,rgba(255,248,236,0.06),transparent)] md:block" />

              <div className="relative grid items-start gap-12 md:grid-cols-[1.08fr_0.92fr] md:gap-14">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#FFF8EC]/34">
                    Start the right system
                  </p>
                  <h2 className="mt-4 max-w-5xl text-4xl font-light leading-[1.04] text-[#FFF8EC] md:text-[4.2rem]">
                    Ready to put AI into the parts of the business that actually
                    move revenue?
                  </h2>

                  <p className="mt-7 max-w-[40rem] text-base leading-7 text-[#FFF8EC]/64 md:text-[1.06rem] md:leading-8">
                    We design the workflow, build the system, and make sure it
                    performs in the real operating environment your team works
                    in every day.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      ["01", "Workflow strategy"],
                      ["02", "AI system build"],
                      ["03", "Launch refinement"],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-4"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-[#D6A84F]">
                          {label}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[#FFF8EC]/68">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/8 pt-8 md:border-l-0 md:border-t-0 md:pt-1">
                  <div className="grid gap-7 md:pl-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#D6A84F]">
                        Engagement focus
                      </p>
                      <p className="mt-3 max-w-md text-base leading-7 text-[#FFF8EC]/62">
                        Best fit for teams that already have demand and now need
                        cleaner systems, faster execution, and sharper follow-up.
                      </p>
                    </div>

                    <div className="rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.05),rgba(255,248,236,0.02))] p-6">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#FFF8EC]/38">
                        Next step
                      </p>
                      <p className="mt-3 text-lg font-light leading-7 text-[#FFF8EC]">
                        Book a focused call and we will map where AI should sit
                        in the workflow first.
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[#FFF8EC]/54">
                        Clear scope, practical recommendations, and the right
                        first system to install.
                      </p>
                    </div>

                    <a
                      href={CAL_LINK}
                      className="inline-flex w-fit rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-8 py-3.5 text-sm font-medium text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.18)] transition hover:bg-[#D6A84F]"
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
