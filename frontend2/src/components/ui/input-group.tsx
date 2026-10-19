import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/** One bordered field with icons, text or buttons inside it, before, after, above or below the control. */
function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-group"
			role="group"
			className={cn(
				"group/input-group relative flex h-10 w-full min-w-0 items-center rounded-sm border border-input transition duration-150 ease-in-out outline-none has-[>textarea]:h-auto",

				// Variants based on alignment.
				"has-[>[data-align=inline-start]]:[&>input]:pl-2",
				"has-[>[data-align=inline-end]]:[&>input]:pr-2",
				"has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
				"has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

				// Focus and error states.
				"has-[[data-slot=input-group-control]:focus]:border-primary has-[[data-slot=input-group-control]:focus]:ring-1 has-[[data-slot=input-group-control]:focus]:ring-primary",
				"has-[[data-slot][aria-invalid=true]]:border-red-400 has-[[data-slot][aria-invalid=true]]:ring-red-400",
				"data-[disabled=true]:opacity-50",
				className
			)}
			{...props}
		/>
	);
}

const inputGroupAddonVariants = cva(
	"flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>svg:not([class*='size-'])]:size-4",
	{
		variants: {
			align: {
				"inline-start": "order-first pl-3.5 has-[>button]:-ml-1.5 has-[>kbd]:-ml-1",
				"inline-end": "order-last pr-3.5 has-[>button]:-mr-1.5 has-[>kbd]:-mr-1",
				"block-start": "order-first w-full justify-start px-3.5 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
				"block-end": "order-last w-full justify-start px-3.5 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3",
			},
		},
		defaultVariants: {
			align: "inline-start",
		},
	}
);

function InputGroupAddon({ className, align = "inline-start", ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
	return (
		<div
			role="group"
			data-slot="input-group-addon"
			data-align={align}
			className={cn(inputGroupAddonVariants({ align }), className)}
			onClick={(event) => {
				// A click on the addon's text or icon focuses the field, the way a label would.
				if ((event.target as HTMLElement).closest("button")) return;
				event.currentTarget.parentElement?.querySelector("input")?.focus();
			}}
			{...props}
		/>
	);
}

const inputGroupButtonVariants = cva("flex items-center gap-2 text-sm", {
	variants: {
		size: {
			xs: "h-6 gap-1 px-2.5 [&>svg:not([class*='size-'])]:size-3.5",
			sm: "h-8 gap-1.5 px-3",
			"icon-xs": "size-6 p-0 [&>svg:not([class*='size-'])]:size-3.5",
			"icon-sm": "size-8 p-0",
		},
	},
	defaultVariants: {
		size: "xs",
	},
});

function InputGroupButton({
	className,
	type = "button",
	variant = "ghost",
	size = "xs",
	...props
}: Omit<React.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>) {
	return <Button type={type} data-size={size} variant={variant} className={cn(inputGroupButtonVariants({ size }), className)} {...props} />;
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			className={cn("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className)}
			{...props}
		/>
	);
}

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
	return (
		<Input
			data-slot="input-group-control"
			className={cn("h-full flex-1 rounded-none border-0 bg-transparent focus:ring-0 aria-invalid:focus:ring-0", className)}
			{...props}
		/>
	);
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<Textarea
			data-slot="input-group-control"
			className={cn("flex-1 resize-none rounded-none border-0 bg-transparent py-3 focus:ring-0 aria-invalid:focus:ring-0", className)}
			{...props}
		/>
	);
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea };
