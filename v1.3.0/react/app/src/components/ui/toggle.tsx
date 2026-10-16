import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-lg text-sm whitespace-nowrap text-foreground outline-primary transition-colors duration-300 hover:bg-accent hover:text-emphasis-foreground focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-emphasis-foreground [&_svg]:pointer-events-none",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				outline: "border border-input bg-transparent",
			},
			size: {
				default: "h-10 min-w-10 px-2.5",
				sm: "h-8 min-w-8 px-2",
				lg: "h-12 min-w-12 px-3",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
	return <TogglePrimitive.Root data-slot="toggle" className={cn(toggleVariants({ variant, size, className }))} {...props} />;
}

export { Toggle, toggleVariants };
