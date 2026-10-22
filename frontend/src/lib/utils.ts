import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Merges Tailwind classes, resolving conflicts so a caller-supplied
 * `className` always wins over a component's own defaults.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
