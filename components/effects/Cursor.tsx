"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.2,.7,.2,1)";
const HOT = "a,button,[role=button],[data-hn-drag]";

/** Green ring + dot cursor with a click pulse. Mouse only; taps show the ring briefly. */
export function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine) document.documentElement.classList.add("hn-cursor");

    const mk = (css: string) => {
      const d = document.createElement("div");
      d.setAttribute("aria-hidden", "true");
      d.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:9999;border-radius:50%;" + css;
      document.body.appendChild(d);
      return d;
    };
    const ring = mk(
      `width:64px;height:64px;margin:-32px 0 0 -32px;border:1.25px solid #4C7A43;will-change:transform;opacity:0;` +
        `transition:width .35s ${EASE},height .35s ${EASE},margin .35s ${EASE},opacity .3s,background .35s`,
    );
    const dot = mk("width:6px;height:6px;margin:-3px 0 0 -3px;background:#4C7A43;opacity:0;will-change:transform;transition:opacity .3s");

    let mx = -100, my = -100, rx = -100, ry = -100, dx = -100, dy = -100;
    let last = performance.now();
    let raf = 0;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const loop = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const k = reduced ? 1 : 1 - Math.pow(0.0018, dt / 1000);
      const kd = reduced ? 1 : 1 - Math.pow(0.000001, dt / 1000);
      rx += (mx - rx) * k; ry += (my - ry) * k;
      dx += (mx - dx) * kd; dy += (my - dy) * kd;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      dot.style.transform = `translate3d(${dx}px,${dy}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const size = (s: number) => {
      ring.style.width = ring.style.height = s + "px";
      ring.style.margin = `${-s / 2}px 0 0 ${-s / 2}px`;
    };
    const isHot = (t: EventTarget | null) => t instanceof Element && !!t.closest(HOT);

    const pulse = (x: number, y: number) => {
      if (reduced) return;
      const p = mk("width:64px;height:64px;margin:-32px 0 0 -32px;border:1px solid #4C7A43");
      const base = `translate3d(${x}px,${y}px,0)`;
      p.animate(
        [{ transform: base + " scale(.4)", opacity: 1 }, { transform: base + " scale(2.6)", opacity: 0 }],
        { duration: 750, easing: EASE },
      ).onfinish = () => p.remove();
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      if (e.pointerType === "mouse") { ring.style.opacity = "1"; dot.style.opacity = "1"; }
      const hot = isHot(e.target);
      size(hot ? 104 : 64);
      ring.style.background = hot ? "rgba(76,122,67,.12)" : "transparent";
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        mx = rx = dx = e.clientX; my = ry = dy = e.clientY;
        ring.style.opacity = "1"; dot.style.opacity = "1";
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => { ring.style.opacity = "0"; dot.style.opacity = "0"; }, 700);
      }
      size(40);
      pulse(e.clientX, e.clientY);
    };
    const onUp = (e: PointerEvent) => size(isHot(e.target) ? 104 : 64);
    const onLeave = () => { ring.style.opacity = "0"; dot.style.opacity = "0"; };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hideTimer);
      ring.remove();
      dot.remove();
      document.documentElement.classList.remove("hn-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
