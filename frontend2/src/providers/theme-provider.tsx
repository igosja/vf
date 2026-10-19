"use client";

import { createContext, use, useCallback, useSyncExternalStore, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
	/** What the visitor picked, including "system". */
	theme: Theme;
	/** The scheme actually on screen. */
	resolvedTheme: "light" | "dark";
	setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "color-mode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs in <head> before first paint, so a dark-mode visitor never sees a flash
 * of the light theme. Kept in sync with `readTheme` and `resolve` below.
 */
export const THEME_SCRIPT = `(function(){try{var m=localStorage.getItem("${STORAGE_KEY}");var d=m==="dark"||(m!=="light"&&matchMedia("${DARK_QUERY}").matches);document.documentElement.classList.add(d?"dark":"light")}catch(e){}})();`;

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): Theme {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		return saved === "light" || saved === "dark" ? saved : "system";
	} catch {
		return "system";
	}
}

function resolve(theme: Theme) {
	if (theme !== "system") return theme;
	return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

// Runs before subscribers re-render, not in an effect: the charts re-read the
// CSS variables while they render, so the class must already be on <html>.
function applyClass(resolved: "light" | "dark") {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
}

/*
 * The theme lives outside React: in localStorage and the OS setting. A small
 * external store lets the server render "system" and the browser pick up the
 * real value right after hydration, without a mismatch.
 */
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

function subscribe(listener: () => void) {
	listeners.add(listener);
	const query = window.matchMedia(DARK_QUERY);
	// Follow the operating system while the visitor has not picked a side.
	const onChange = () => {
		if (readTheme() !== "system") return;
		applyClass(resolve("system"));
		notify();
	};
	query.addEventListener("change", onChange);
	return () => {
		listeners.delete(listener);
		query.removeEventListener("change", onChange);
	};
}

const getTheme = () => readTheme();
const getResolved = () => resolve(readTheme());

export function ThemeProvider({ children }: { children: ReactNode }) {
	const theme = useSyncExternalStore(subscribe, getTheme, () => "system" as Theme);
	const resolvedTheme = useSyncExternalStore(subscribe, getResolved, () => "light" as const);

	const setTheme = useCallback((next: Theme) => {
		try {
			if (next === "system") localStorage.removeItem(STORAGE_KEY);
			else localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// Storage blocked: the choice lasts until the page reloads.
		}
		applyClass(resolve(next));
		notify();
	}, []);

	return <ThemeContext value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
	const context = use(ThemeContext);
	if (!context) throw new Error("useTheme must be used inside ThemeProvider");
	return context;
}
