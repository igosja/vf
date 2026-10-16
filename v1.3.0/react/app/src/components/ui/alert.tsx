import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** A tinted message box. The icon, title and text take the variant's colour; an icon gets its own column. */
const alertVariants = cva(
	"relative grid w-full grid-cols-[0_1fr] items-start gap-y-1 rounded-xl px-4 py-3.5 has-data-[slot=alert-action]:pr-24 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 [&>svg]:mt-px [&>svg]:size-4.5",
	{
		variants: {
			variant: {
				default: "bg-primary/10 text-primary",
				destructive: "bg-red-400/10 text-red-400",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
	return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="alert-title" className={cn("col-start-2 font-medium", className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="alert-description" className={cn("col-start-2 [&_a]:font-medium [&_a]:text-current [&_a]:underline", className)} {...props} />;
}

/** A button pinned to the top right corner. */
function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="alert-action" className={cn("absolute top-2.5 right-3", className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
