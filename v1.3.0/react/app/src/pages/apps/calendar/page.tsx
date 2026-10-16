import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ArrowLeft, ArrowRight, LayoutGrid, Plus, RectangleHorizontal, Rows3 } from "lucide-react";
import { useRef, useState } from "react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";
import { SecondarySidebar, SecondarySidebarLabel } from "@/components/layout/sidebar/secondary-sidebar";
import { Calendar } from "@/components/ui/calendar";
import { CALENDAR_EVENTS } from "@/data/calendar";
import { cn } from "@/lib/utils";

const VIEWS = [
	{ view: "dayGridMonth", label: "Month", icon: LayoutGrid },
	{ view: "timeGridWeek", label: "Week", icon: Rows3 },
	{ view: "timeGridDay", label: "Day", icon: RectangleHorizontal },
];

export default function CalendarPage() {
	const calendarRef = useRef<FullCalendar>(null);
	const [title, setTitle] = useState("");
	const [view, setView] = useState("dayGridMonth");
	// The small calendar follows the month the big one shows, and picking a day moves the big one there.
	const [selected, setSelected] = useState<Date>(new Date());
	const [month, setMonth] = useState<Date>(new Date());

	const api = () => calendarRef.current?.getApi();

	return (
		<div className="flex items-start">
			<SecondarySidebar
				title="Calendar"
				action={
					<ActionButton>
						<Plus />
						Create Event
					</ActionButton>
				}
			>
				<Calendar
					mode="single"
					required
					selected={selected}
					onSelect={(day) => {
						setSelected(day);
						api()?.gotoDate(day);
					}}
					month={month}
					onMonthChange={setMonth}
					className="-mx-3 -mt-3 mb-1"
					classNames={{ month: "w-full" }}
				/>

				<SecondarySidebarLabel>Current Events</SecondarySidebarLabel>
				<div className="-mx-2">
					{CALENDAR_EVENTS.slice(0, 10).map((event) => (
						<a key={event.id} href="#" className="mb-0.5 flex items-center gap-3 rounded-lg p-2 text-foreground transition-colors hover:bg-accent">
							<i className={cn("h-8 w-1 shrink-0 rounded-lg", event.allDay ? "bg-primary" : "bg-transparent")} />
							<div className="min-w-0 flex-1">
								<div className="mb-0.5 truncate font-medium text-emphasis-foreground">{event.title}</div>
								<div className="text-xs text-muted-foreground">{event.start}</div>
							</div>
						</a>
					))}
				</div>
			</SecondarySidebar>

			<div className="flex h-screen min-w-0 flex-1 flex-col pb-4">
				<ContentHeader title={title}>
					<div className="ml-auto flex items-center gap-2">
						<IconButton onClick={() => api()?.prev()}>
							<ArrowLeft />
							<span className="sr-only">Previous</span>
						</IconButton>
						<IconButton onClick={() => api()?.next()}>
							<ArrowRight />
							<span className="sr-only">Next</span>
						</IconButton>
						{VIEWS.map((item, index) => (
							<IconButton
								key={item.view}
								aria-pressed={view === item.view}
								onClick={() => api()?.changeView(item.view)}
								className={cn(index === 0 && "ml-6", item.view === "timeGridDay" && "hidden sm:grid", view === item.view && "bg-accent")}
							>
								<item.icon />
								<span className="sr-only">{item.label} view</span>
							</IconButton>
						))}
					</div>
				</ContentHeader>

				<div className="calendar min-h-0 flex-1">
					<FullCalendar
						ref={calendarRef}
						plugins={[dayGridPlugin, timeGridPlugin]}
						initialView="dayGridMonth"
						headerToolbar={false}
						dayMaxEventRows
						views={{ dayGrid: { dayMaxEventRows: 4 } }}
						events={CALENDAR_EVENTS}
						height="100%"
						datesSet={(info) => {
							setTitle(info.view.title);
							setView(info.view.type);
							setMonth(info.view.currentStart);
						}}
					/>
				</div>
			</div>

			<ActionButton floating>
				<Plus />
				<span className="hidden md:inline">Create New</span>
			</ActionButton>
		</div>
	);
}
