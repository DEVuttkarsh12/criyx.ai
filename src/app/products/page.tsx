import Link from "next/link";
import type { Metadata } from "next";

import ScrollOrchestrator from "@/components/ScrollOrchestrator";
import SiteNav from "@/components/SiteNav";
import { CAL_LINK, PRODUCT_PAGES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Products | Criyx",
  description:
    "Explore Criyx product systems across voice, marketing, content, WhatsApp, and exhibition workflows.",
};

export default function ProductsPage() {
  return (
    <main className="site-surface relative min-h-screen overflow-x-clip bg-transparent text-[#f4f6fa]">
      <ScrollOrchestrator />
      <SiteNav calLink={CAL_LINK} />

      <section className="site-section-warm relative z-10 overflow-hidden px-6 pb-22 pt-34 md:px-14 md:pb-30 md:pt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(196,214,233,0.12),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(124,149,180,0.14),transparent_22%),linear-gradient(180deg,rgba(10,12,17,0.14),rgba(10,12,17,0.52))]" />
          <div className="absolute inset-x-[26%] top-[12%] h-[28rem] rounded-full bg-white/5 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,17,0.7)_0%,rgba(10,12,17,0.24)_44%,rgba(10,12,17,0.66)_100%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[118rem] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-reveal="left">
            <p className="text-xs uppercase tracking-[0.32em] text-[#b6bec9]">
              Our Products
            </p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7.15rem)] font-light leading-[0.94] tracking-[-0.06em] text-[#f4f6fa]">
              Focused AI systems for the parts of the business that need real movement.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c1c7d0] md:text-[1.18rem] md:leading-9">
              Each product page breaks down one system surface in the Criyx
              stack so the scope, workflow, and deployment logic stay concrete.
            </p>
          </div>

          <div
            className="grid gap-4 md:grid-cols-2"
            data-reveal="right"
            data-delay="120"
          >
            {PRODUCT_PAGES.slice(0, 4).map((product, index) => (
              <div
                key={product.slug}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,31,0.88),rgba(10,12,16,0.78))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
                data-reveal="zoom"
                data-delay={String(index * 80)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  {product.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-light leading-[1.12] text-[#f4f6fa]">
                  {product.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#b9c0ca]">
                  {product.teaser}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="site-section-warm relative z-10 px-6 py-24 md:px-14 md:py-32"
        data-reveal="card"
        data-scroll-section="drift-right"
      >
        <div
          className="mx-auto w-full max-w-[118rem] border-t border-white/8 pt-14 md:pt-18"
          data-scroll-frame
          data-scroll-depth="1"
        >
          <div className="grid gap-10 md:grid-cols-[0.48fr_1.52fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Product Stack
              </p>
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4.15rem]">
                Product pages that stay inside the same motion and system language as the main site.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCT_PAGES.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:border-white/16 hover:bg-white/[0.06]"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 70)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  {product.eyebrow}
                </p>
                <h3 className="mt-5 text-3xl font-light leading-[1.08] text-[#f4f6fa]">
                  {product.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.industrySignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-[#d7dce4]"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
                <div className="mt-8 text-xs uppercase tracking-[0.26em] text-[#d7dce4]/56 transition group-hover:text-white">
                  View product page
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                If one of these systems is the right entry point, we can map the
                wider automation stack around it.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.2fr_auto] md:items-end md:gap-14">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8f97a3]">
                  Next step
                </p>
                <h2 className="mt-4 text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4.1rem]">
                  Choose the product surface. We will map the system around it.
                </h2>
              </div>

              <a
                href={CAL_LINK}
                className="inline-flex w-fit rounded-full border border-[#aab4c4]/24 bg-[#242a33] px-8 py-3.5 text-sm font-medium text-[#edf2f8] shadow-[0_0_30px_rgba(87,101,121,0.18)] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d]"
              >
                Schedule Your Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
