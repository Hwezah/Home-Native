"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

/** True once the page has scrolled past `offset` px. */
export function useScrolled(offset = 12) {
  return useSyncExternalStore(subscribe, () => window.scrollY > offset, () => false);
}
