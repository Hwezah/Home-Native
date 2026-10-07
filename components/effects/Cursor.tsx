"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.2,.7,.2,1)";
const HOT = "a,button,[role=button],[data-hn-drag]";

/**
 * Green ring + dot cursor with a click pulse.
 *
 * - Mouse: ring follows with smoothing; grows over links/buttons; shrinks + pulses on a
 *   primary-button press. The animation loop sleeps once the ring has caught up, so an
 *   idle or scrolling page costs nothing. Hover state is re-checked on scroll.
 * - Touch / pen: nothing happens on touch-down (that is where scrolls start). Only a real
 *   tap — a `click` — shows the ring + pulse at the tap point for 700ms. Scrolls never do.
 */
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
      `width:64px;height:64px;margin:-32px 0 0 -32px;border:1.25px solid var(--brand-mid);will-change:transform;opacity:0;` +
        `transition:width .35s ${EASE},height .35s ${EASE},margin .35s ${EASE},opacity .3s,background-color .35s`,
    );
    const dot = mk("width:6px;height:6px;margin:-3px 0 0 -3px;background:var(--brand-mid);opacity:0;will-change:transform;transition:opacity .3s");

    let mx = -100, my = -100, rx = -100, ry = -100, dx = -100, dy = -100;
    let last = 0;
    let raf = 0;
    let size = 64;
    let hot = false;
    let pressed = false;
    let lastType = "mouse";
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const place = () => {
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      dot.style.transform = `translate3d(${dx}px,${dy}px,0)`;
    };

    // Smoothing loop — runs only while the ring is still catching up.
    const loop = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const k = reduced ? 1 : 1 - Math.pow(0.0018, dt / 1000);
      const kd = reduced ? 1 : 1 - Math.pow(0.000001, dt / 1000);
      rx += (mx - rx) * k; ry += (my - ry) * k;
      dx += (mx - dx) * kd; dy += (my - dy) * kd;
      place();
      if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1 && Math.abs(mx - dx) < 0.1 && Math.abs(my - dy) < 0.1) {
        rx = dx = mx; ry = dy = my;
        place();
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const wake = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    // Only touch the DOM when the visual state actually changes.
    const setSize = (s: number) => {
      if (s === size) return;
      size = s;
      ring.style.width = ring.style.height = s + "px";
      ring.style.margin = `${-s / 2}px 0 0 ${-s / 2}px`;
    };
    const setHot = (h: boolean) => {
      hot = h;
      if (!pressed) setSize(h ? 104 : 64);
      ring.style.backgroundColor = h ? "color-mix(in srgb, var(--brand-mid) 12%, transparent)" : "transparent";
    };
    const isHot = (el: Element | null) => !!el?.closest(HOT);
    const show = (on: boolean) => {
      ring.style.opacity = dot.style.opacity = on ? "1" : "0";
    };

    const pulse = (x: number, y: number) => {
      if (reduced) return;
      const p = mk("width:64px;height:64px;margin:-32px 0 0 -32px;border:1px solid var(--brand-mid)");
      const base = `translate3d(${x}px,${y}px,0)`;
      p.animate(
        [{ transform: base + " scale(.4)", opacity: 1 }, { transform: base + " scale(2.6)", opacity: 0 }],
        { duration: 750, easing: EASE },
      ).onfinish = () => p.remove();
    };

    // ── Mouse ──
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      lastType = "mouse";
      mx = e.clientX; my = e.clientY;
      show(true);
      const h = isHot(e.target as Element);
      if (h !== hot) setHot(h);
      wake();
    };
    const onDown = (e: PointerEvent) => {
      lastType = e.pointerType;
      if (e.pointerType !== "mouse" || e.button !== 0) return; // ignore touch-down, middle/right buttons
      pressed = true;
      setSize(40);
      pulse(e.clientX, e.clientY);
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !pressed) return;
      pressed = false;
      setSize(hot ? 104 : 64);
    };
    // Content moves under a still mouse while scrolling — refresh hover state (once per frame).
    let scrollQueued = false;
    const onScroll = () => {
      if (lastType !== "mouse" || scrollQueued || mx < 0) return;
      scrollQueued = true;
      requestAnimationFrame(() => {
        scrollQueued = false;
        const h = isHot(document.elementFromPoint(mx, my));
        if (h !== hot) setHot(h);
      });
    };
    const onLeave = () => show(false);

    // ── Touch / pen: real taps only ──
    const onClick = (e: MouseEvent) => {
      if (lastType === "mouse" || e.detail === 0) return; // mouse handled above; detail 0 = keyboard
      mx = rx = dx = e.clientX; my = ry = dy = e.clientY;
      place();
      show(true);
      pulse(e.clientX, e.clientY);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => show(false), 700);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick, { capture: true, passive: true });
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
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick, { capture: true });
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
