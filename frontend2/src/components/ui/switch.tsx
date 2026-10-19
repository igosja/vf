import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				"peer group/switch relative inline-flex h-6 w-10 shrink-0 items-center rounded-full border-[1.5px] border-foreground px-1 transition-colors duration-300 focus:border-emphasis-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-400 data-[state=checked]:border-primary data-[state=checked]:bg-primary",
				className
			)}
			{...props}
		>
			{/* The hover halo is its own element so it keeps its size while the thumb grows. */}
			<span
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 -left-0.5 size-6 -translate-y-1/2 scale-125 rounded-full bg-muted-foreground/20 opacity-0 transition duration-200 ease-spring group-hover/switch:opacity-100 group-data-[state=checked]/switch:translate-x-4"
			/>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className="pointer-events-none block size-3 rounded-full bg-foreground transition duration-200 ease-spring group-active/switch:scale-150 data-[state=checked]:translate-x-4 data-[state=checked]:scale-150 data-[state=checked]:bg-popover group-active/switch:data-[state=checked]:scale-170"
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
