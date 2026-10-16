import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"block field-sizing-content min-h-16 w-full resize-none rounded-sm border border-input bg-transparent px-3.5 py-2 text-sm text-foreground transition duration-150 ease-in-out outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
				"focus:border-primary focus:ring-1 focus:ring-primary",
				"aria-invalid:border-red-400 aria-invalid:focus:ring-red-400",
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };
