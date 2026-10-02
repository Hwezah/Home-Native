"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

/**
 * Floating light / dark switch, bottom-right: a white sun square and a black moon square;
 * the active one is outlined in the brand accent. The outline is driven by the <html data-theme>
 * attribute in CSS, so it is correct on first paint (before React hydrates).
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const base =
    "flex h-11 w-11 cursor-pointer items-center justify-center border-2 border-transparent p-0 transition-[border-color,transform] duration-300 hover:scale-105 mp:h-8 mp:w-8 mp:border-[1.5px] [&_svg]:mp:size-4";
  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="fixed bottom-5 right-5 z-[35] flex shadow-[0_6px_24px_rgba(0,0,0,.18)] mp:bottom-3 mp:right-3"
    >
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
        className={cn(base, "theme-btn-light bg-white text-[#111]")}
      >
        <Sun size={20} strokeWidth={1.25} />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={cn(base, "theme-btn-dark bg-[#111] text-white")}
      >
        <Moon size={20} strokeWidth={1.25} />
      </button>
    </div>
  );
}
