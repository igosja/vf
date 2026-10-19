import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
	return <div role="list" data-slot="item-group" className={cn("flex flex-col gap-4", className)} {...props} />;
}

/** A row of media, text and actions. As a link it lights up on hover. */
const itemVariants = cva(
	"group/item flex flex-wrap items-center rounded-xl border border-transparent text-sm outline-primary transition-colors focus-visible:outline-2 [a]:hover:bg-accent",
	{
		variants: {
			variant: {
				default: "",
				outline: "border-input/50",
				muted: "bg-muted",
			},
			size: {
				default: "gap-4 p-4",
				sm: "gap-2.5 px-4 py-3",
				xs: "gap-2 px-3 py-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Item({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : "div";

	return <Comp data-slot="item" data-variant={variant} data-size={size} className={cn(itemVariants({ variant, size, className }))} {...props} />;
}

/** The leading icon, avatar or image. It sits at the top when the item has a description. */
const itemMediaVariants = cva(
	"flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
	{
		variants: {
			variant: {
				default: "",
				icon: "avatar-mask size-9 bg-secondary text-emphasis-foreground [&_svg:not([class*='size-'])]:size-4.5",
				image: "size-10 overflow-hidden rounded-lg [&_img]:size-full [&_img]:object-cover",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

function ItemMedia({ className, variant = "default", ...props }: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
	return <div data-slot="item-media" data-variant={variant} className={cn(itemMediaVariants({ variant, className }))} {...props} />;
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="item-content" className={cn("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className)} {...props} />;
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="item-title" className={cn("flex w-fit items-center gap-2 font-medium text-emphasis-foreground", className)} {...props} />;
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
	return <p data-slot="item-description" className={cn("line-clamp-2 text-muted-foreground", className)} {...props} />;
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="item-actions" className={cn("flex items-center gap-2", className)} {...props} />;
}

/** A full-width row above the content, such as a cover image. */
function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="item-header" className={cn("flex basis-full items-center justify-between gap-2", className)} {...props} />;
}

export { Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemTitle, ItemDescription, ItemHeader };
