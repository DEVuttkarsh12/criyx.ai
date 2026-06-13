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
        className="relative z-10 px-6 py-28 md:px-14 md:py-36"
      >
        <div className="ml-2 max-w-6xl md:ml-8">
          <div className="grid gap-16 md:grid-cols-[0.78fr_1.22fr] md:gap-20">
            <div className="md:pt-10">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D6A84F]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4.2rem]">
                Build the workflow, ship the system, keep improving it.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#FFF8EC]/62 md:text-lg md:leading-8">
                A delivery model built to stay sharp under real operating
                pressure: practical upfront mapping, clean implementation, and
                refinement once the system is live.
              </p>

              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-[#FFF8EC]/36">
                <span className="h-px w-16 bg-[#D6A84F]/45" />
                <span>Structured delivery</span>
              </div>
            </div>

            <div className="relative pl-0 md:pl-12">
              <div className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(214,168,79,0.45),rgba(255,248,236,0.08)_18%,rgba(255,248,236,0.02)_100%)] md:block" />

              <div className="grid gap-6 md:gap-7">
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
                    className={`group relative overflow-hidden border-t border-white/10 pt-6 text-[#FFF8EC]/74 md:pt-7 ${
                      index === 1 ? "md:ml-10" : ""
                    } ${index === 2 ? "md:ml-20" : ""}`}
                  >
                    <div className="absolute left-0 top-0 hidden h-px w-24 bg-[#D6A84F]/50 md:block" />
                    <div className="absolute -left-[3.05rem] top-7 hidden h-3 w-3 rounded-full border border-[#D6A84F]/60 bg-[#0B0604] shadow-[0_0_18px_rgba(214,168,79,0.3)] md:block" />

                    <div className="flex items-start justify-between gap-6">
                      <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">
                          Step 0{index + 1}
                        </p>
                        <p className="mt-4 text-2xl font-light leading-snug text-[#FFF8EC] md:text-[2.2rem]">
                          {step.title}
                        </p>
                      </div>

                      <div className="hidden text-sm tracking-[0.24em] text-[#FFF8EC]/24 transition duration-300 group-hover:text-[#D6A84F]/78 md:block">
                        0{index + 1}
                      </div>
                    </div>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#FFF8EC]/58 md:text-[1.02rem] md:leading-8">
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
        className="relative z-10 px-6 pb-28 md:px-14 md:pb-36"
      >
        <div className="ml-2 max-w-4xl border-t border-[#FFF8EC]/14 pt-10 md:ml-8">
          <h2 className="text-4xl font-light leading-tight text-[#FFF8EC] md:text-6xl">
            Ready to put AI into the parts of the business that actually move
            revenue?
          </h2>
          <a
            href={CAL_LINK}
            className="mt-8 inline-flex rounded-full border border-[#D6A84F]/30 bg-[#FFF8EC] px-7 py-3 text-sm font-medium text-[#080402] shadow-[0_0_30px_rgba(214,168,79,0.18)] transition hover:bg-[#D6A84F]"
          >
            Schedule Your Call
          </a>
        </div>
      </section>
    </main>
  );
}
