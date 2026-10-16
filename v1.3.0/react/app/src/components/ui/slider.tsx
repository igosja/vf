import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * A thick track with a slim bar for a handle. Each handle is a card-coloured
 * block, so it cuts a gap into the track on either side of the bar.
 */
function Slider({ className, defaultValue, value, min = 0, max = 100, "aria-label": ariaLabel, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
	const values = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max];

	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			aria-label={ariaLabel}
			className={cn("relative flex h-4 w-full touch-none items-center select-none data-disabled:opacity-50", className)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className="relative h-4 grow overflow-hidden rounded-xl bg-secondary after:absolute after:top-1.5 after:right-1.5 after:size-1 after:rounded-full after:bg-primary"
			>
				<SliderPrimitive.Range data-slot="slider-range" className="absolute h-full rounded-lg bg-primary" />
			</SliderPrimitive.Track>
			{values.map((_, index) => (
				<SliderPrimitive.Thumb
					data-slot="slider-thumb"
					key={index}
					// A lone thumb takes the slider's name. Radix names the two thumbs of a range itself.
					{...(values.length === 1 && { "aria-label": ariaLabel })}
					className="group/thumb grid h-10 w-3.5 cursor-pointer place-content-center bg-card outline-none"
				>
					<span className="block h-10 w-1 rounded-lg bg-primary transition-[width] duration-100 group-focus-visible/thumb:outline-2 group-focus-visible/thumb:outline-offset-2 group-focus-visible/thumb:outline-primary group-active/thumb:w-0.5" />
				</SliderPrimitive.Thumb>
			))}
		</SliderPrimitive.Root>
	);
}

export { Slider };
