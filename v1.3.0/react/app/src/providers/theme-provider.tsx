import { createContext, use, useEffect, useState, type ReactNode } from "react";

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

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): Theme {
	const saved = localStorage.getItem(STORAGE_KEY);
	return saved === "light" || saved === "dark" ? saved : "system";
}

function resolve(theme: Theme) {
	if (theme !== "system") return theme;
	return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

// Runs before the state update, not in an effect: the charts re-read the CSS
// variables while they render, so the class must already be on <html>.
function applyClass(resolved: "light" | "dark") {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	// index.html already put the class on <html> before first paint.
	const [theme, setThemeState] = useState<Theme>(readTheme);
	const [resolvedTheme, setResolvedTheme] = useState(() => resolve(theme));

	// Follow the operating system while the visitor has not picked a side.
	useEffect(() => {
		if (theme !== "system") return;
		const query = window.matchMedia(DARK_QUERY);
		const onChange = () => {
			const next = resolve("system");
			applyClass(next);
			setResolvedTheme(next);
		};
		query.addEventListener("change", onChange);
		return () => query.removeEventListener("change", onChange);
	}, [theme]);

	const setTheme = (next: Theme) => {
		if (next === "system") localStorage.removeItem(STORAGE_KEY);
		else localStorage.setItem(STORAGE_KEY, next);
		const resolved = resolve(next);
		applyClass(resolved);
		setThemeState(next);
		setResolvedTheme(resolved);
	};

	return <ThemeContext value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
	const context = use(ThemeContext);
	if (!context) throw new Error("useTheme must be used inside ThemeProvider");
	return context;
}
