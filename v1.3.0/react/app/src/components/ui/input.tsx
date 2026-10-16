import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"h-10 w-full min-w-0 rounded-sm border border-input bg-transparent px-3.5 py-2 text-sm text-foreground transition duration-150 ease-in-out outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
				"file:mr-3.5 file:-ml-3.5 file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3.5 file:pt-px file:text-foreground",
				"focus:border-primary focus:ring-1 focus:ring-primary",
				"aria-invalid:border-red-400 aria-invalid:focus:ring-red-400",
				className
			)}
			{...props}
		/>
	);
}

export { Input };
