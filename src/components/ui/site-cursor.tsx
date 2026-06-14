"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, summary, input, textarea, select, label, [role="button"]';

export function SiteCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const orbit = orbitRef.current;

    if (!cursor || !ring || !dot || !orbit) {
      return;
    }

    let frame = 0;
    let orbitAngle = 0;
    let isVisible = false;
    let isInteractive = false;
    let isPressed = false;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: pointer.x, y: pointer.y };

    const render = () => {
      current.x += (pointer.x - current.x) * 0.18;
      current.y += (pointer.y - current.y) * 0.18;
      orbitAngle += isInteractive ? 0.12 : 0.08;

      const orbitX = Math.cos(orbitAngle) * (isInteractive ? 15 : 11);
      const orbitY = Math.sin(orbitAngle) * (isInteractive ? 15 : 11);

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      cursor.style.opacity = isVisible ? "1" : "0";
      ring.style.transform = `translate3d(-50%, -50%, 0) scale(${
        isPressed ? 0.74 : isInteractive ? 1.38 : 1
      })`;
      dot.style.transform = `translate3d(-50%, -50%, 0) scale(${
        isPressed ? 0.72 : isInteractive ? 1.16 : 1
      })`;
      orbit.style.transform = `translate3d(calc(-50% + ${orbitX}px), calc(-50% + ${orbitY}px), 0) scale(${
        isPressed ? 0.92 : 1
      })`;

      frame = window.requestAnimationFrame(render);
    };

    const setInteractiveState = (target: EventTarget | null) => {
      const element =
        target instanceof Element
          ? target.closest(INTERACTIVE_SELECTOR)
          : null;

      isInteractive = Boolean(element);
      cursor.dataset.interactive = isInteractive ? "true" : "false";
    };

    const handleMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      isVisible = true;
      setInteractiveState(event.target);
    };

    const handleDown = () => {
      isPressed = true;
    };

    const handleUp = () => {
      isPressed = false;
    };

    const handleLeave = () => {
      isVisible = false;
      isPressed = false;
      cursor.dataset.interactive = "false";
    };

    const handleEnter = () => {
      isVisible = true;
    };

    frame = window.requestAnimationFrame(render);
    document.documentElement.classList.add("has-custom-cursor");
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden md:block"
      data-interactive="false"
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-white/30 bg-[radial-gradient(circle,rgba(214,227,242,0.06),rgba(214,227,242,0.01)_68%,transparent)] shadow-[0_0_32px_rgba(163,184,208,0.18)] transition-transform duration-200 ease-out"
      />
      <div
        ref={orbitRef}
        className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-[#dbe5f0] shadow-[0_0_20px_rgba(219,229,240,0.5)] transition-transform duration-150 ease-out"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)] transition-transform duration-150 ease-out"
      />
    </div>
  );
}
