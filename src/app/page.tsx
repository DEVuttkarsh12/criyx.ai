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
        <div className="relative ml-2 max-w-6xl rounded-[10px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,236,0.08),rgba(255,248,236,0.03))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:ml-8 md:p-12">
          <div className="absolute left-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_left,rgba(214,168,79,0.14),transparent_72%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/16" />

          <div className="relative grid gap-14 md:grid-cols-[0.82fr_1.18fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D6A84F]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#FFF8EC] md:text-[4.15rem]">
                Build the workflow, ship the system, keep improving it.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#FFF8EC]/62 md:text-lg md:leading-8">
                A compact delivery model built to keep execution clear: we map
                the operation, install the right AI layer, then refine the
                system with reporting and live feedback.
              </p>
            </div>

            <div className="grid gap-5 text-[#FFF8EC]/74">
              {[
                {
                  title: "Map the current intake, sales, and follow-up flow.",
                  detail:
                    "We start with the real operating sequence so the system fits how the team already works.",
                },
                {
                  title:
                    "Build the AI layer around the handoffs your team already uses.",
                  detail:
                    "Automation, agents, and logic are added where they reduce friction instead of creating another tool to manage.",
                },
                {
                  title:
                    "Launch with clear reporting so each week gets sharper.",
                  detail:
                    "Once live, the system is tuned using performance visibility, edge cases, and actual conversion behaviour.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="group rounded-[8px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-white/16 hover:bg-white/[0.05] md:p-7"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">
                        Step 0{index + 1}
                      </p>
                      <p className="mt-4 text-2xl font-light leading-snug text-[#FFF8EC] md:text-[2rem]">
                        {step.title}
                      </p>
                    </div>

                    <div className="mt-1 text-sm tracking-[0.24em] text-[#FFF8EC]/28 transition duration-300 group-hover:text-[#D6A84F]/78">
                      0{index + 1}
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl border-t border-white/8 pt-5 text-base leading-7 text-[#FFF8EC]/60">
                    {step.detail}
                  </p>
                </div>
              ))}
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
