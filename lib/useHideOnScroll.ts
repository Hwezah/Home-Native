"use client";

import { useEffect, useState } from "react";

/** True once scrollY > threshold and the user is scrolling down; false on scroll up. */
export function useHideOnScroll(threshold = 160, paused = false) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (!paused) setHidden(y > lastY && y > threshold);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, paused]);

  return hidden && !paused;
}
