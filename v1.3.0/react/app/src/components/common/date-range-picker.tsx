import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DateRangePicker({ defaultValue, className }: { defaultValue: DateRange; className?: string }) {
	const [range, setRange] = useState<DateRange | undefined>(defaultValue);

	return (
		<Popover>
			<PopoverTrigger
				className={cn(
					"flex h-9 items-center gap-2 rounded-full border-[1.5px] border-sky-500 px-4 text-xs text-sky-500 transition-colors hover:bg-sky-500/10 data-[state=open]:bg-sky-500/10",
					className
				)}
			>
				<CalendarDays />
				{range?.from ? format(range.from, "MM/dd/yyyy") : "Start"}
				<span>-</span>
				{range?.to ? format(range.to, "MM/dd/yyyy") : "End"}
			</PopoverTrigger>
			<PopoverContent align="start" className="w-auto p-0">
				<Calendar mode="range" selected={range} onSelect={setRange} defaultMonth={range?.from} />
			</PopoverContent>
		</Popover>
	);
}
