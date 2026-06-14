import { CAL_LINK } from "@/lib/site-data";

type ContactSectionProps = {
  intro: string;
  title: string;
  body?: string;
};

export default function ContactSection({
  intro,
  title,
  body,
}: ContactSectionProps) {
  return (
    <section
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
              {intro}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.2fr_auto] md:items-end md:gap-14">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8f97a3]">
                Next step
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4.25rem]">
                {title}
              </h2>
              {body ? (
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#b9c0ca] md:text-[1.05rem] md:leading-8">
                  {body}
                </p>
              ) : null}
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
  );
}
