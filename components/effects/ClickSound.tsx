"use client";

import { useEffect } from "react";
import { playTick } from "@/lib/audio";

/** Plays a very quiet dial-knob tick on every pointerdown. */
export function ClickSound() {
  useEffect(() => {
    const onDown = () => playTick();
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);
  return null;
}
