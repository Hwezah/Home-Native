"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";
export const THEME_KEY = "hn-theme";

/**
 * Runs in <head> before first paint: applies the saved theme, or the device setting on a first
 * visit, so the page never flashes the wrong colours. Kept tiny and dependency-free.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`;

const EVENT = "hn-theme-change";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

type ThemeContextValue = { theme: Theme; setTheme: (t: Theme) => void; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The DOM attribute (set by themeInitScript) is the source of truth; the server renders "light".
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as Theme);

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* private mode — theme still applies for this visit */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);
  const toggleTheme = useCallback(() => setTheme(readTheme() === "dark" ? "light" : "dark"), [setTheme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
