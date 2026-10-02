"use client";

import { useEffect } from "react";
import { playTick } from "@/lib/audio";

/**
 * Very quiet dial-knob tick.
 * - Mouse: on primary-button press (instant feedback).
 * - Touch / pen: only on a real tap (`click`), never when a finger lands to scroll.
 */
export function ClickSound() {
  useEffect(() => {
    let lastType = "mouse";
    const onDown = (e: PointerEvent) => {
      lastType = e.pointerType;
      if (e.pointerType === "mouse" && e.button === 0) playTick();
    };
    const onClick = (e: MouseEvent) => {
      if (lastType !== "mouse" && e.detail > 0) playTick();
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("click", onClick, { capture: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("click", onClick, { capture: true });
    };
  }, []);
  return null;
}
