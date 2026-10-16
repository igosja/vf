import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";

/**
 * Radix wraps the content in a `display: table` box so it can measure both
 * axes. That box shrinks to fit and breaks truncation and grid widths, so it is
 * made a block: these areas only scroll vertically. The root is a flex column
 * so the viewport also scrolls when the area only has a max height, or sits in
 * a flex column that caps it. `viewportRef` reaches the element that actually
 * scrolls; `scrollbarClassName` styles the scrollbar.
 */
function ScrollArea({
	className,
	children,
	viewportRef,
	scrollbarClassName,
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & { viewportRef?: React.Ref<HTMLDivElement>; scrollbarClassName?: string }) {
	return (
		<ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative flex flex-col overflow-hidden", className)} {...props}>
			<ScrollAreaPrimitive.Viewport
				ref={viewportRef}
				data-slot="scroll-area-viewport"
				className="min-h-0 w-full flex-auto rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 [&>div]:block!"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar className={scrollbarClassName} />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}

function ScrollBar({ className, orientation = "vertical", ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cn(
				"flex touch-none p-px transition-colors select-none",
				orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent py-2.5",
				orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent px-2.5",
				className
			)}
			{...props}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb data-slot="scroll-area-thumb" className="relative flex-1 rounded-full bg-secondary" />
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	);
}

export { ScrollArea, ScrollBar };
