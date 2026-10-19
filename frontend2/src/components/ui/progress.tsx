import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * A thin bar, then a small gap, then the rest of the track. The bar takes the
 * text colour, so `text-emerald-500` colours it.
 */
function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
	return (
		<ProgressPrimitive.Root
			data-slot="progress"
			className={cn("flex h-1 w-full gap-0.75 text-sky-500 after:flex-1 after:rounded-lg after:bg-secondary after:content-['']", className)}
			value={value}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot="progress-indicator"
				className="h-full rounded-lg bg-current transition-[width]"
				style={{ width: `${value || 0}%` }}
			/>
		</ProgressPrimitive.Root>
	);
}

export { Progress };
