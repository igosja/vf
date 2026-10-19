import { cn } from "@/lib/utils";

/** A pulsing block that holds a place while content loads. */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="skeleton" className={cn("animate-pulse rounded-lg bg-secondary", className)} {...props} />;
}

export { Skeleton };
