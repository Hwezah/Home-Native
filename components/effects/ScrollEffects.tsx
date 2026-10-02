"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL =
  "main section h1, main section h2, main section h3, main section p, main section a[data-m-btn], main [data-reveal], footer [data-reveal]";

/**
 * Page-wide scroll reveals + parallax, re-scanned on every route change.
 * - Reveal: fade/rise once at 12% visibility, staggered .09s per sibling (cap 4).
 * - Parallax: [data-parallax="speed"] inside an overflow-hidden parent.
 * Both are skipped under prefers-reduced-motion.
 */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Reveal ──
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) => !el.closest("[data-hero], aside, header, [data-no-reveal]") && !el.classList.contains("hn-rev"),
    );
    targets.forEach((el) => el.classList.add("hn-rev"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const el = en.target as HTMLElement;
          const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains("hn-rev"));
          el.style.transitionDelay = Math.min(Math.max(sibs.indexOf(el), 0), 4) * 0.09 + "s";
          el.classList.add("is-in");
          io.unobserve(el);
          // Clear the delay so later hover transitions on the element are not slowed.
          setTimeout(() => (el.style.transitionDelay = ""), 1500);
        }
      },
      { threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));

    // ── Parallax ──
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const r = parent.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax ?? "") || 0.3;
        const off = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
