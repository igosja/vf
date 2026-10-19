import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DayPicker, type DayButton } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({ className, classNames, showOutsideDays = true, fixedWeeks = true, components, ...props }: React.ComponentProps<typeof DayPicker>) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			fixedWeeks={fixedWeeks}
			className={cn("p-3 text-xs font-medium text-foreground", className)}
			classNames={{
				months: "relative flex flex-col gap-6 sm:flex-row",
				month: "w-64",
				month_caption: "mb-2 flex h-9 items-center px-3 text-sm font-normal text-emphasis-foreground",
				nav: "absolute top-0.5 right-0 z-1 flex",
				button_previous:
					"grid avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
				button_next:
					"grid avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
				month_grid: "w-full border-collapse",
				weekdays: "flex",
				weekday: "flex h-6 flex-1 items-center justify-center font-normal",
				week: "flex",
				day: "flex-1 p-0",
				// The band runs behind the edge days too, so it meets their rounded outer corners.
				range_start: "rounded-l-sm bg-primary/20",
				range_end: "rounded-r-sm bg-primary/20",
				range_middle: "bg-primary/20",
				hidden: "invisible",
				...classNames,
			}}
			components={{
				Chevron: ({ orientation }) => (orientation === "left" ? <ArrowLeft /> : <ArrowRight />),
				DayButton: CalendarDayButton,
				...components,
			}}
			{...props}
		/>
	);
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
	const ref = React.useRef<HTMLButtonElement>(null);
	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);

	const edge = modifiers.selected && !modifiers.range_middle;

	return (
		<button
			ref={ref}
			data-today={(modifiers.today && !modifiers.selected) || undefined}
			data-outside={(modifiers.outside && !modifiers.selected) || undefined}
			data-range-start={modifiers.range_start || undefined}
			data-range-end={modifiers.range_end || undefined}
			data-range-middle={modifiers.range_middle || undefined}
			data-edge={edge || undefined}
			className={cn(
				"flex h-9 w-full items-center justify-center rounded-sm outline-none hover:bg-accent focus-visible:bg-sky-500/15 data-edge:bg-sky-500 data-edge:font-normal data-edge:text-white data-outside:text-muted-foreground data-range-end:rounded-l-none data-range-middle:rounded-none data-range-middle:bg-transparent data-range-start:rounded-r-none data-today:bg-muted data-today:text-emphasis-foreground",
				className
			)}
			{...props}
		/>
	);
}

export { Calendar, CalendarDayButton };
