import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * The app pages' primary action: Compose Mail, Upload File, Create New. It
 * tops the page sidebar on xl and floats over the content below it, where
 * `floating` pins it to the corner.
 */
export function ActionButton({ className, floating, ...props }: ComponentProps<"button"> & { floating?: boolean }) {
	return (
		<button
			type="button"
			className={cn(
				"inline-flex h-11.5 shrink-0 items-center gap-2 rounded-xl bg-action px-4 text-sm text-action-foreground transition hover:brightness-95",
				floating && "fixed right-4 bottom-18 z-12 sm:right-6 sm:bottom-6 xl:hidden print:hidden",
				className
			)}
			{...props}
		/>
	);
}
