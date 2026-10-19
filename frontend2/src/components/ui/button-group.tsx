import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Neighbours share a border and only the outer corners stay round. Inside a
// group every child takes the field radius, so buttons and fields line up.
const buttonGroupVariants = cva(
	"flex w-fit items-stretch *:rounded-full *:focus-within:relative *:focus-within:z-10 *:focus:relative *:focus:z-10 has-[>[data-slot=button-group]]:gap-2 [&>input]:flex-1",
	{
		variants: {
			orientation: {
				horizontal: "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",
				vertical: "flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
			},
		},
		defaultVariants: {
			orientation: "horizontal",
		},
	}
);

function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
	return (
		<div role="group" data-slot="button-group" data-orientation={orientation} className={cn(buttonGroupVariants({ orientation }), className)} {...props} />
	);
}

/** A text or icon addon at either end of, or between, the controls in a group. */
function ButtonGroupText({ className, asChild = false, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : "div";

	return (
		<Comp
			data-slot="button-group-text"
			className={cn(
				"flex shrink-0 items-center gap-2 border border-input px-3.5 text-sm whitespace-nowrap text-foreground [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

function ButtonGroupSeparator({ className, orientation = "vertical", ...props }: React.ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation}
			className={cn("relative z-1 m-0! self-stretch bg-input data-[orientation=vertical]:h-auto", className)}
			{...props}
		/>
	);
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
