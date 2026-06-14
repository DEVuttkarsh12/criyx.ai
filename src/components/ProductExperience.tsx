import Link from "next/link";
import type { ReactNode } from "react";

import ScrollOrchestrator from "@/components/ScrollOrchestrator";
import SiteNav from "@/components/SiteNav";
import {
  CAL_LINK,
  PRODUCT_PAGES,
  type ProductPageDefinition,
} from "@/lib/site-data";

type ProductExperienceProps = {
  product: ProductPageDefinition;
};

type SectionFrameProps = {
  children: ReactNode;
  mode: "drift-right" | "drift-left" | "float" | "lift";
  className?: string;
};

function SectionFrame({ children, mode, className = "" }: SectionFrameProps) {
  return (
    <section
      className={`site-section-warm relative z-10 px-6 py-24 md:px-14 md:py-32 ${className}`}
      data-reveal="card"
      data-scroll-section={mode}
    >
      <div
        className="mx-auto w-full max-w-[118rem]"
        data-scroll-frame
        data-scroll-depth="1"
      >
        {children}
      </div>
    </section>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
      <a
        href={CAL_LINK}
        className="inline-flex w-fit items-center justify-center rounded-full border border-[#aab4c4]/24 bg-[#242a33] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#edf2f8] shadow-[0_0_30px_rgba(87,101,121,0.18)] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d]"
      >
        Discuss This System
      </a>
      <Link
        href="/products"
        className="inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#d7dce4]/56 transition hover:text-white"
      >
        <span className="h-px w-14 bg-white/24" />
        <span>Browse all products</span>
      </Link>
    </div>
  );
}

function HeroShell({
  product,
  rightContent,
  rightReveal = "right",
}: {
  product: ProductPageDefinition;
  rightContent: ReactNode;
  rightReveal?: "left" | "right" | "zoom";
}) {
  return (
    <section className="site-section-warm relative z-10 overflow-hidden px-6 pb-20 pt-34 md:px-14 md:pb-28 md:pt-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(196,214,233,0.12),transparent_26%),radial-gradient(circle_at_78%_30%,rgba(124,149,180,0.14),transparent_24%),linear-gradient(180deg,rgba(10,12,17,0.16),rgba(10,12,17,0.54))]" />
        <div className="absolute inset-x-[26%] top-[12%] h-[26rem] rounded-full bg-white/5 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,17,0.7)_0%,rgba(10,12,17,0.26)_44%,rgba(10,12,17,0.66)_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[118rem] gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div data-reveal="left">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b6bec9]">
            {product.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7.25rem)] font-light leading-[0.94] tracking-[-0.06em] text-[#f4f6fa]">
            {product.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c1c7d0] md:text-[1.18rem] md:leading-9">
            {product.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {product.industrySignals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#d7dce4]"
              >
                {signal}
              </div>
            ))}
          </div>

          <HeroActions />
        </div>

        <div className="relative min-h-[30rem]" data-reveal={rightReveal} data-delay="120">
          {rightContent}
        </div>
      </div>
    </section>
  );
}

function RelatedProducts({
  currentSlug,
  relatedProducts,
}: {
  currentSlug: string;
  relatedProducts: ProductPageDefinition[];
}) {
  return (
    <SectionFrame mode="float">
      <div className="border-t border-white/8 pt-14 md:pt-18">
        <div className="grid gap-10 md:grid-cols-[0.56fr_1.44fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Related Products
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.02] text-[#f4f6fa] md:text-[4rem]">
              Other systems in the Criyx stack.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedProducts.map((related, index) => (
              <Link
                key={related.slug}
                href={`/products/${related.slug}`}
                className={`rounded-[1.5rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6 transition hover:border-white/16 hover:bg-white/[0.06] ${
                  related.slug === currentSlug ? "pointer-events-none opacity-60" : ""
                }`}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  {related.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-light leading-[1.12] text-[#f4f6fa]">
                  {related.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#b9c0ca]">
                  {related.teaser}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/8 pt-8 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8f97a3]">
              Next Step
            </p>
            <p className="mt-4 text-lg leading-8 text-[#c1c7d0]">
              If this is one piece of a larger automation stack, we can map the
              wider workflow and decide where this agent should sit.
            </p>
          </div>
          <a
            href={CAL_LINK}
            className="inline-flex w-fit rounded-full border border-[#aab4c4]/24 bg-[#242a33] px-8 py-3.5 text-sm font-medium text-[#edf2f8] shadow-[0_0_30px_rgba(87,101,121,0.18)] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d]"
          >
            Schedule Your Call
          </a>
        </div>
      </div>
    </SectionFrame>
  );
}

function VoiceAgentLayout({ product }: { product: ProductPageDefinition }) {
  return (
    <>
      <HeroShell
        product={product}
        rightContent={
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,31,0.92),rgba(10,12,16,0.84))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.16]" />
            <div className="relative z-10 rounded-[1.45rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-md">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-[#97a2b1]">
                Call Surface
              </p>
              <h2 className="mt-3 text-2xl font-light leading-[1.12] text-[#f4f6fa] md:text-[2.4rem]">
                {product.heroPanelTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca] md:text-[1.03rem] md:leading-8">
                {product.heroPanelCopy}
              </p>
            </div>

            <div className="relative z-10 mt-6 grid gap-4 md:grid-cols-[0.84fr_1.16fr]">
              <div className="rounded-[1.35rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Live Signals
                </p>
                <div className="mt-5 space-y-3">
                  {product.industrySignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-white/8 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#d7dce4]"
                    >
                      {signal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {product.workflow.map((step, index) => (
                  <div
                    key={step.stage}
                    className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-5"
                  >
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                      Stage 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-light text-[#f4f6fa]">
                      {step.stage}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#b9c0ca]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />

      <SectionFrame mode="drift-right">
        <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[0.52fr_1.48fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Ideal Fit
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {product.fit.map((item, index) => (
              <article
                key={item}
                className="rounded-[1.55rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Fit 0{index + 1}
                </p>
                <p className="mt-5 text-base leading-7 text-[#c1c7d0]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame mode="drift-left">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.48fr_1.52fr] md:items-start md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Capabilities
            </p>
          </div>
          <div className="space-y-4">
            {product.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="grid gap-6 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 md:grid-cols-[0.18fr_0.82fr]"
                data-reveal="zoom"
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Module 0{index + 1}
                </p>
                <div>
                  <h3 className="text-2xl font-light leading-[1.12] text-[#f4f6fa]">
                    {capability.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[#b9c0ca]">
                    {capability.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

function MarketingAgentLayout({ product }: { product: ProductPageDefinition }) {
  return (
    <>
      <HeroShell
        product={product}
        rightReveal="zoom"
        rightContent={
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,31,0.9),rgba(10,12,16,0.82))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Response Model
              </p>
              <h2 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                {product.heroPanelTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                {product.heroPanelCopy}
              </p>
            </div>

            <div className="grid gap-4">
              {product.workflow.map((step, index) => (
                <div
                  key={step.stage}
                  className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Flow 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-light text-[#f4f6fa]">
                    {step.stage}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#b9c0ca]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <SectionFrame mode="drift-left">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.46fr_1.54fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Capability Stack
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <article
              className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7"
              data-reveal="left"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Prime Layer
              </p>
              <h3 className="mt-4 text-3xl font-light leading-[1.08] text-[#f4f6fa]">
                {product.capabilities[0]?.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                {product.capabilities[0]?.copy}
              </p>
            </article>

            <div className="grid gap-5">
              {product.capabilities.slice(1).map((capability, index) => (
                <article
                  key={capability.title}
                  className="rounded-[1.55rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6"
                  data-reveal="right"
                  data-delay={String(index * 90)}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Module 0{index + 2}
                  </p>
                  <h3 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#b9c0ca]">
                    {capability.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame mode="float">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.58fr_1.42fr] md:items-start md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Best For
            </p>
          </div>
          <div className="space-y-4">
            {product.fit.map((item, index) => (
              <div
                key={item}
                className="grid gap-4 rounded-[1.5rem] border border-white/9 bg-[rgba(255,255,255,0.03)] p-5 md:grid-cols-[auto_1fr] md:items-start"
                data-reveal="zoom"
                data-delay={String(index * 90)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[0.72rem] uppercase tracking-[0.22em] text-[#d7dce4]">
                  0{index + 1}
                </div>
                <p className="text-base leading-7 text-[#c1c7d0]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

function ContentAgentLayout({ product }: { product: ProductPageDefinition }) {
  return (
    <>
      <HeroShell
        product={product}
        rightContent={
          <div className="grid gap-4">
            <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,31,0.92),rgba(10,12,16,0.84))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Editorial Engine
              </p>
              <h2 className="mt-4 text-[2.2rem] font-light leading-[1.08] text-[#f4f6fa]">
                {product.heroPanelTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                {product.heroPanelCopy}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {product.industrySignals.map((signal, index) => (
                <div
                  key={signal}
                  className={`rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-5 ${
                    index === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Signal 0{index + 1}
                  </p>
                  <p className="mt-4 text-lg font-light text-[#f4f6fa]">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <SectionFrame mode="drift-right">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.45fr_0.85fr_0.7fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Workflow
            </p>
          </div>
          <div className="space-y-5">
            {product.workflow.map((step, index) => (
              <article
                key={step.stage}
                className="rounded-[1.6rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-6"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Stage 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                  {step.stage}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>

          <div
            className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            data-reveal="zoom"
            data-delay="160"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Best For
            </p>
            <div className="mt-5 space-y-4">
              {product.fit.map((item, index) => (
                <div key={item} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Fit 0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#c1c7d0]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame mode="drift-left">
        <div className="border-t border-white/8 pt-14 md:pt-18">
          <div className="grid gap-10 md:grid-cols-[0.52fr_1.48fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Production Modules
              </p>
            </div>
            <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4rem]">
              Different surfaces for drafting, repurposing, and publishing support.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
            <article
              className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.022))] p-7"
              data-reveal="left"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Core Module
              </p>
              <h3 className="mt-5 text-3xl font-light leading-[1.08] text-[#f4f6fa]">
                {product.capabilities[0]?.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-[#b9c0ca]">
                {product.capabilities[0]?.copy}
              </p>
            </article>

            <div className="grid gap-5">
              {product.capabilities.slice(1).map((capability, index) => (
                <article
                  key={capability.title}
                  className="rounded-[1.5rem] border border-white/9 bg-[rgba(255,255,255,0.03)] p-6"
                  data-reveal="right"
                  data-delay={String(index * 90)}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Module 0{index + 2}
                  </p>
                  <h3 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#b9c0ca]">
                    {capability.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

function WhatsAppAgentLayout({ product }: { product: ProductPageDefinition }) {
  return (
    <>
      <HeroShell
        product={product}
        rightContent={
          <div className="rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,28,0.94),rgba(10,12,16,0.88))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
            <div className="rounded-[1.6rem] border border-white/8 bg-[rgba(6,11,9,0.46)] p-5">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Messaging Surface
              </p>
              <h2 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                {product.heroPanelTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                {product.heroPanelCopy}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {product.workflow.map((step, index) => (
                <div
                  key={step.stage}
                  className={`max-w-[82%] rounded-[1.4rem] border border-white/8 px-5 py-4 text-sm leading-6 ${
                    index % 2 === 0
                      ? "bg-[#162319] text-[#dce6de]"
                      : "ml-auto bg-[rgba(255,255,255,0.05)] text-[#d8dee8]"
                  }`}
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    {step.stage}
                  </p>
                  <p className="mt-2">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <SectionFrame mode="float">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.54fr_1.46fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Capability Grid
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
            {product.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className={`rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
                data-reveal={index === 2 ? "zoom" : index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Module 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                  {capability.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame mode="drift-right">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.42fr_0.78fr_0.8fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Good Match
            </p>
          </div>
          <div className="space-y-4">
            {product.fit.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.45rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5"
                data-reveal="left"
                data-delay={String(index * 90)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Fit 0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#c1c7d0]">{item}</p>
              </div>
            ))}
          </div>
          <div
            className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,18,0.9),rgba(10,12,16,0.82))] p-6"
            data-reveal="right"
            data-delay="140"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
              Messaging Signals
            </p>
            <div className="mt-5 grid gap-3">
              {product.industrySignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-full border border-white/8 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#d7dce4]"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

function ExhibitionAgentLayout({ product }: { product: ProductPageDefinition }) {
  return (
    <>
      <HeroShell
        product={product}
        rightReveal="zoom"
        rightContent={
          <div className="grid gap-4">
            <div className="rounded-[1.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,31,0.94),rgba(10,12,16,0.86))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Event Surface
              </p>
              <h2 className="mt-4 text-[2.1rem] font-light leading-[1.08] text-[#f4f6fa]">
                {product.heroPanelTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                {product.heroPanelCopy}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {product.workflow.map((step, index) => (
                <div
                  key={step.stage}
                  className="rounded-[1.35rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Stage 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-light text-[#f4f6fa]">
                    {step.stage}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#b9c0ca]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <SectionFrame mode="drift-left">
        <div className="border-t border-white/8 pt-14 md:pt-18">
          <div className="grid gap-10 md:grid-cols-[0.48fr_1.52fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Booth Workflow
              </p>
            </div>
            <h2 className="max-w-5xl text-4xl font-light leading-[1.03] text-[#f4f6fa] md:text-[4rem]">
              Designed for on-floor capture, post-event sorting, and fast follow-up.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-5">
              {product.capabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6"
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  data-delay={String(index * 90)}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Module 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-light text-[#f4f6fa]">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#b9c0ca]">
                    {capability.copy}
                  </p>
                </article>
              ))}
            </div>

            <div
              className="rounded-[1.9rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              data-reveal="zoom"
              data-delay="120"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
                Right Fit
              </p>
              <div className="mt-5 space-y-4">
                {product.fit.map((item, index) => (
                  <div key={item} className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                      Fit 0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#c1c7d0]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame mode="float">
        <div className="grid gap-10 border-t border-white/8 pt-14 md:grid-cols-[0.5fr_1.5fr] md:pt-18">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b6bec9]">
              Event Signals
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {product.industrySignals.map((signal, index) => (
              <div
                key={signal}
                className="rounded-[1.55rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-delay={String(index * 80)}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                  Signal 0{index + 1}
                </p>
                <p className="mt-4 text-2xl font-light text-[#f4f6fa]">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

function renderProductLayout(product: ProductPageDefinition) {
  switch (product.slug) {
    case "ai-voice-agent":
      return <VoiceAgentLayout product={product} />;
    case "ai-marketing-agent":
      return <MarketingAgentLayout product={product} />;
    case "ai-content-agent":
      return <ContentAgentLayout product={product} />;
    case "whatsapp-agent":
      return <WhatsAppAgentLayout product={product} />;
    case "exhibition-agent":
      return <ExhibitionAgentLayout product={product} />;
    default:
      return <VoiceAgentLayout product={product} />;
  }
}

export default function ProductExperience({
  product,
}: ProductExperienceProps) {
  const relatedProducts = PRODUCT_PAGES.filter(
    (entry) => entry.slug !== product.slug
  ).slice(0, 3);

  return (
    <main className="site-surface relative min-h-screen overflow-x-clip bg-transparent text-[#f4f6fa]">
      <ScrollOrchestrator />
      <SiteNav calLink={CAL_LINK} />
      {renderProductLayout(product)}
      <RelatedProducts
        currentSlug={product.slug}
        relatedProducts={relatedProducts}
      />
    </main>
  );
}
