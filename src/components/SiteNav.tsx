"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { MAIN_NAV_LINKS, PRODUCT_PAGES } from "@/lib/site-data";

type SiteNavProps = {
  calLink: string;
};

export default function SiteNav({ calLink }: SiteNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!productsOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [productsOpen]);

  const productNavActive = pathname.startsWith("/products");

  return (
    <nav
      className="absolute inset-x-0 top-0 z-40 px-6 pt-5 md:px-14 md:pt-7"
      data-reveal="zoom"
    >
      <div ref={navRef} className="mx-auto w-full max-w-[118rem]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3 md:gap-4">
            <Image
              src="/criyx-logo.avif"
              alt="Criyx logo"
              width={44}
              height={44}
              className="h-9 w-9 object-contain md:h-10 md:w-10"
              priority
            />
            <span className="text-[1.35rem] font-semibold leading-none tracking-tight text-[#f4f6fa] md:text-[1.55rem]">
              Criyx
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-9 text-[0.8rem] uppercase tracking-[0.24em] text-[#c1c7d0] md:flex">
            {MAIN_NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                className={`transition ${
                  isActiveLink(item.href) ? "text-white" : "hover:text-white"
                }`}
                href={item.href}
                onClick={() => setProductsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onFocusCapture={() => setProductsOpen(true)}
              onBlurCapture={(event) => {
                if (
                  event.relatedTarget instanceof Node &&
                  event.currentTarget.contains(event.relatedTarget)
                ) {
                  return;
                }

                setProductsOpen(false);
              }}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-2.5 rounded-[0.8rem] px-3 py-2 transition ${
                  productNavActive ? "text-white" : "hover:text-white"
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="menu"
                onClick={() => setProductsOpen((open) => !open)}
              >
                <span>Our Products</span>
                <span
                  className={`text-[0.64rem] transition ${
                    productsOpen ? "translate-y-px rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-1/2 top-full mt-4 w-[21rem] -translate-x-1/2 rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,28,0.96),rgba(10,12,17,0.92))] p-3 text-left shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl transition duration-200 ${
                  productsOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/products"
                  className="block rounded-[1rem] border border-white/6 px-4 py-3 transition hover:border-white/12 hover:bg-white/[0.04]"
                  onClick={() => setProductsOpen(false)}
                >
                  <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                    Overview
                  </span>
                  <span className="mt-1 block text-sm font-medium normal-case tracking-normal text-[#f4f6fa]">
                    View all product systems
                  </span>
                </Link>

                <div className="mt-3 space-y-2">
                  {PRODUCT_PAGES.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block rounded-[1rem] px-4 py-3 transition hover:bg-white/[0.04]"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="block text-[0.78rem] font-medium normal-case tracking-normal text-[#f4f6fa]">
                        {product.navLabel}
                      </span>
                      <span className="mt-1 block text-[0.68rem] normal-case leading-5 tracking-normal text-[#8f97a3]">
                        {product.teaser}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href={calLink}
            className="ml-auto shrink-0 rounded-[0.95rem] border border-[#aab4c4]/24 bg-[#242a33] px-4.5 py-3 text-[0.76rem] uppercase tracking-[0.18em] text-[#edf2f8] transition hover:border-[#c5cfdd]/36 hover:bg-[#2b323d] md:ml-8 md:px-6 md:text-[0.86rem]"
          >
            Schedule Call
          </a>
        </div>

        <div className="mt-4 flex items-center gap-4 overflow-x-auto text-[0.74rem] uppercase tracking-[0.22em] text-[#c1c7d0] md:hidden">
          {MAIN_NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              className={`shrink-0 transition ${
                isActiveLink(item.href) ? "text-white" : "hover:text-white"
              }`}
              href={item.href}
              onClick={() => setProductsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className={`inline-flex shrink-0 items-center gap-2 rounded-[0.8rem] px-3 py-2 transition ${
              productNavActive ? "text-white" : "hover:text-white"
            }`}
            aria-expanded={productsOpen}
            aria-controls="mobile-products-menu"
            onClick={() => setProductsOpen((open) => !open)}
          >
            <span>Our Products</span>
            <span
              className={`text-[0.62rem] transition ${
                productsOpen ? "translate-y-px rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        </div>

        <div
          id="mobile-products-menu"
          className={`md:hidden ${
            productsOpen ? "mt-4 block" : "hidden"
          }`}
        >
          <div className="grid gap-2 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,28,0.96),rgba(10,12,17,0.92))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
            <Link
              href="/products"
              className="rounded-[1rem] border border-white/6 px-4 py-3 transition hover:border-white/12 hover:bg-white/[0.04]"
              onClick={() => setProductsOpen(false)}
            >
              <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-[#8f97a3]">
                Overview
              </span>
              <span className="mt-1 block text-sm font-medium normal-case tracking-normal text-[#f4f6fa]">
                View all product systems
              </span>
            </Link>

            {PRODUCT_PAGES.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="rounded-[1rem] px-4 py-3 transition hover:bg-white/[0.04]"
                onClick={() => setProductsOpen(false)}
              >
                <span className="block text-[0.78rem] font-medium normal-case tracking-normal text-[#f4f6fa]">
                  {product.navLabel}
                </span>
                <span className="mt-1 block text-[0.68rem] normal-case leading-5 tracking-normal text-[#8f97a3]">
                  {product.teaser}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
