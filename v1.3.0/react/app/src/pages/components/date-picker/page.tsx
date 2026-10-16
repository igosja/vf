import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerPage() {
	const [date, setDate] = useState<Date>();
	const [range, setRange] = useState<DateRange | undefined>({ from: new Date(2026, 9, 10), to: new Date(2026, 9, 24) });
	const [inlineDate, setInlineDate] = useState<Date | undefined>(new Date());

	return (
		<>
			<ContentHeader title="Date Picker" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Date" description="A button that opens a calendar in a popover.">
					<Field className="max-w-xs">
						<FieldLabel htmlFor="date-single">Date</FieldLabel>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									id="date-single"
									variant="outline"
									data-empty={!date}
									className="justify-start rounded-sm px-3.5 data-[empty=true]:text-muted-foreground"
								>
									<CalendarDays />
									{date ? format(date, "PPP") : "Pick a date"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar mode="single" selected={date} onSelect={setDate} />
							</PopoverContent>
						</Popover>
					</Field>
				</ExampleCard>

				<ExampleCard title="Date range" description="Two months side by side, so a range can cross the end of a month.">
					<Field className="max-w-xs">
						<FieldLabel htmlFor="date-range">Date range</FieldLabel>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									id="date-range"
									variant="outline"
									data-empty={!range?.from}
									className="justify-start rounded-sm px-3.5 data-[empty=true]:text-muted-foreground"
								>
									<CalendarDays />
									{range?.from
										? range.to
											? `${format(range.from, "LLL dd, y")} - ${format(range.to, "LLL dd, y")}`
											: format(range.from, "LLL dd, y")
										: "Pick a date range"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar mode="range" defaultMonth={range?.from} selected={range} onSelect={setRange} numberOfMonths={2} />
							</PopoverContent>
						</Popover>
						<FieldDescription>Pick the first day, then the last.</FieldDescription>
					</Field>
				</ExampleCard>

				<ExampleCard title="Inline" description="The calendar on its own, always open.">
					<Calendar mode="single" selected={inlineDate} onSelect={setInlineDate} className="w-fit rounded-lg border" />
				</ExampleCard>
			</div>
		</>
	);
}
