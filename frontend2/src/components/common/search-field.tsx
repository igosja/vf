import { Search } from "lucide-react";
import { useEffect, useRef, type ComponentProps } from "react";

import { useIsMac } from "@/lib/platform";
import { cn } from "@/lib/utils";

/**
 * The pill search field. `shortcut` shows the ⌘K hint and focuses the field on
 * that key, for the one search a page header holds.
 */
export function SearchField({ className, shortcut, ...props }: ComponentProps<"input"> & { shortcut?: boolean }) {
	const input = useRef<HTMLInputElement>(null);
	const isMac = useIsMac();

	useEffect(() => {
		if (!shortcut) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
			if ((isMac ? event.metaKey : event.ctrlKey) && event.key === "k") {
				event.preventDefault();
				input.current?.focus();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [shortcut, isMac]);

	return (
		<label
			className={cn(
				"flex h-11 items-center rounded-full border-1 border-secondary bg-secondary px-4 transition-colors duration-250 focus-within:border-input focus-within:bg-transparent",
				className
			)}
		>
			<Search className="size-4.5 text-emphasis-foreground" />
			<input
				ref={input}
				type="text"
				className="h-full min-w-0 flex-1 bg-transparent pl-3 text-sm text-emphasis-foreground outline-none placeholder:text-foreground"
				{...props}
			/>
			{shortcut && <span className="hidden text-xs font-medium text-emphasis-foreground md:block">{isMac ? "⌘K" : "Ctrl K"}</span>}
		</label>
	);
}
