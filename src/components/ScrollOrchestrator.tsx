"use client";

import { useEffect } from "react";

export default function ScrollOrchestrator() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay;

          if (delay) {
            element.style.setProperty("--reveal-delay", `${delay}ms`);
          }

          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
