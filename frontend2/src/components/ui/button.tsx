import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-2 rounded-full border text-sm whitespace-nowrap outline-primary transition-colors duration-150 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-65 [&_svg]:pointer-events-none",
	{
		variants: {
			variant: {
				default: "border-primary bg-primary text-primary-foreground hover:brightness-110",
				theme: "border-[1.5px] border-primary text-primary hover:bg-primary/10 active:bg-primary/10",
				outline: "border-input text-foreground hover:bg-accent active:bg-accent dark:border-input",
				secondary: "border-secondary bg-secondary text-emphasis-foreground hover:bg-secondary/70",
				ghost: "border-transparent text-foreground hover:bg-accent",
				destructive: "border-red-400 bg-red-400 text-white hover:bg-red-400/90",
				link: "border-transparent text-link underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-5",
				sm: "h-8 gap-1.5 px-3.5",
				lg: "h-12 px-6",
				icon: "size-10",
				"icon-sm": "size-8",
				"icon-lg": "size-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	return <Comp data-slot="button" data-variant={variant} data-size={size} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
