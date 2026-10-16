import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The browser's own select, restyled. The wrapper carries the corner radius so
 * a button group can square off the inner corners; the select inherits it.
 */
function NativeSelect({ className, size = "default", ...props }: Omit<React.ComponentProps<"select">, "size"> & { size?: "sm" | "default" }) {
	return (
		<div data-slot="native-select-wrapper" className="relative w-full rounded-sm">
			<select
				data-slot="native-select"
				data-size={size}
				className={cn(
					"h-10 w-full min-w-0 appearance-none rounded-[inherit] border border-input bg-transparent py-2 pr-10 pl-3.5 text-sm text-foreground transition duration-150 ease-in-out outline-none disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-50 data-[size=sm]:h-8 data-[size=sm]:py-1 data-[size=sm]:pl-3",
					"focus:border-primary focus:ring-1 focus:ring-primary",
					"aria-invalid:border-red-400 aria-invalid:focus:ring-red-400",
					className
				)}
				{...props}
			/>
			<svg
				width="10"
				height="5"
				viewBox="0 0 10 5"
				aria-hidden="true"
				data-slot="native-select-icon"
				className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 fill-muted-foreground"
			>
				<path d="M5 5L0.669874 0.500001L9.33013 0.5L5 5Z" />
			</svg>
		</div>
	);
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
	return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup(props: React.ComponentProps<"optgroup">) {
	return <optgroup data-slot="native-select-optgroup" {...props} />;
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
