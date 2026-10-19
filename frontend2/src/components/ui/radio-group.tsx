import * as React from "react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn("grid gap-3", className)} {...props} />;
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				// The ::before circle is the hover halo, the same one the checkbox has.
				"peer aria-invalid:-400 relative grid size-4.5 shrink-0 place-content-center rounded-full border-[1.5px] border-foreground transition-colors duration-300 before:absolute before:-inset-px before:scale-50 before:rounded-full before:ring-primary/15 before:transition before:duration-200 hover:before:scale-100 hover:before:ring-10 focus:border-emphasis-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary hover:focus-visible:before:ring-0 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-primary",
				className
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" className="size-2 rounded-full bg-primary" />
		</RadioGroupPrimitive.Item>
	);
}

export { RadioGroup, RadioGroupItem };
