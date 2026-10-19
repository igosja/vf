import { cn } from "@/lib/utils";

/** The dot-and-label key under a chart. `color` is a background class, such as `bg-emerald-500`. */
export function ChartLegend({ items, className }: { items: { label: string; color: string }[]; className?: string }) {
	return (
		<ul className={cn("flex flex-wrap items-center justify-center gap-x-4", className)}>
			{items.map((item) => (
				<li key={item.label} className="flex items-center gap-2 text-xs">
					<i className={cn("size-2 rounded-full", item.color)} />
					{item.label}
				</li>
			))}
		</ul>
	);
}
