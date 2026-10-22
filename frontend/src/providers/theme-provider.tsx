"use client";

import React, {createContext, use, useSyncExternalStore} from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "color-mode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

export const THEME_SCRIPT = `(function(){try{var m=localStorage.getItem("${STORAGE_KEY}");var d=m==="dark"||(m!=="light"&&matchMedia("${DARK_QUERY}").matches);document.documentElement.classList.add(d?"dark":"light")}catch(e){}})();`;

const ThemeContext = createContext<ThemeContextValue | null>(null);

const readTheme = (): Theme => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === "light" || saved === "dark" ? saved : "system";
    } catch {
        return "system";
    }
};

const resolve = (theme: Theme) => {
    if (theme !== "system") {
        return theme;
    }

    return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
};

const applyClass = (resolved: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
};

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    const query = window.matchMedia(DARK_QUERY);
    const onChange = () => {
        if (readTheme() !== "system") {
            return;
        }
        applyClass(resolve("system"));
        notify();
    };
    query.addEventListener("change", onChange);

    return () => {
        listeners.delete(listener);
        query.removeEventListener("change", onChange);
    };
};

const getTheme = () => readTheme();
const getResolved = () => resolve(readTheme());

const ThemeProvider: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const theme = useSyncExternalStore(subscribe, getTheme, () => "system" as Theme);
    const resolvedTheme = useSyncExternalStore(subscribe, getResolved, () => "light" as const);

    // No useCallback: the React Compiler memoizes it.
    const setTheme = (next: Theme) => {
        try {
            if (next === "system") {
                localStorage.removeItem(STORAGE_KEY);
            } else {
                localStorage.setItem(STORAGE_KEY, next);
            }
        } catch {
            // Storage blocked: the choice lasts until the page reloads.
        }
        applyClass(resolve(next));
        notify();
    };

    return <ThemeContext value={{theme, resolvedTheme, setTheme}}>{children}</ThemeContext>;
};

export const useTheme = () => {
    const context = use(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
};

export default ThemeProvider;
