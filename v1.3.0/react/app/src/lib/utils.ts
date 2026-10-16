import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes, resolving conflicts so a caller-supplied
 * `className` always wins over a component's own defaults.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const KB = 1024;
const MB = KB * 1024;

/** Bytes below 1KB read as a raw count; the design shows two decimals above it. */
export function formatSize(bytes: number) {
	if (bytes < KB) return `${bytes} bytes`;
	if (bytes < MB) return `${(bytes / KB).toFixed(2)} KB`;
	return `${(bytes / MB).toFixed(2)} MB`;
}
