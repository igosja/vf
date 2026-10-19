import type { ComponentProps } from "react";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A change figure with its arrow, green when it went up and red when it went
 * down. `positive` overrides the colour where a rise is bad news, and
 * `iconEnd` puts a smaller arrow after the figure, as the list rows have it.
 */
export function Trend({
	up = true,
	positive = up,
	iconEnd = false,
	className,
	children,
	...props
}: ComponentProps<"div"> & { up?: boolean; positive?: boolean; iconEnd?: boolean }) {
	const Arrow = up ? CircleArrowUp : CircleArrowDown;

	return (
		<div className={cn("flex items-center gap-1 text-sm", positive ? "text-emerald-500" : "text-red-400", className)} {...props}>
			{!iconEnd && <Arrow />}
			{children}
			{iconEnd && <Arrow className="size-4" />}
		</div>
	);
}
