"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-section]")
    );

    if (!sections.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => {
        const frames = Array.from(
          section.querySelectorAll<HTMLElement>("[data-scroll-frame]")
        );

        frames.forEach((frame) => {
          frame.style.transform = "";
          frame.style.opacity = "";
        });
      });
      return;
    }

    let frame = 0;

    const updateMotion = () => {
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const rawProgress =
          (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const progress = clamp(rawProgress, 0, 1);
        const centeredProgress = progress * 2 - 1;
        const focus = 1 - clamp(Math.abs(centeredProgress), 0, 1);

        const motionStyle = section.dataset.scrollSection ?? "lift";

        let shiftX = 0;
        let shiftY = centeredProgress * -34;
        let tiltX = centeredProgress * -4.4;
        let tiltY = 0;
        let scaleBoost = focus * 0.018;

        switch (motionStyle) {
          case "drift-right":
            shiftX = centeredProgress * -24;
            shiftY = centeredProgress * -30;
            tiltX = centeredProgress * -3.6;
            tiltY = centeredProgress * 3.4;
            scaleBoost = focus * 0.014;
            break;
          case "drift-left":
            shiftX = centeredProgress * 24;
            shiftY = centeredProgress * -28;
            tiltX = centeredProgress * -3.2;
            tiltY = centeredProgress * -3.6;
            scaleBoost = focus * 0.014;
            break;
          case "float":
            shiftX = centeredProgress * 14;
            shiftY = centeredProgress * -38;
            tiltX = centeredProgress * -5.2;
            tiltY = centeredProgress * 2.2;
            scaleBoost = focus * 0.02;
            break;
          case "lift":
          default:
            shiftX = centeredProgress * -8;
            shiftY = centeredProgress * -34;
            tiltX = centeredProgress * -4.4;
            tiltY = centeredProgress * 1.8;
            scaleBoost = focus * 0.018;
            break;
        }

        const frames = Array.from(
          section.querySelectorAll<HTMLElement>("[data-scroll-frame]")
        );

        frames.forEach((frameElement) => {
          const depth = Number(frameElement.dataset.scrollDepth ?? "1");
          const rotation = Number(frameElement.dataset.scrollRotate ?? "1");
          const frameScale = 1 + scaleBoost * depth;
          const frameOpacity = 0.84 + focus * 0.16;

          frameElement.style.transform = `
            perspective(1800px)
            translate3d(${(shiftX * depth).toFixed(2)}px, ${(shiftY * depth).toFixed(2)}px, 0)
            rotateX(${(tiltX * rotation).toFixed(2)}deg)
            rotateY(${(tiltY * rotation).toFixed(2)}deg)
            scale(${frameScale.toFixed(3)})
          `;
          frameElement.style.opacity = frameOpacity.toFixed(3);
        });
      });

      frame = 0;
    };

    const requestMotionUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);

    return () => {
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
