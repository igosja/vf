/** Events fall in the current month, so the calendar never opens on an empty page. */
const month = (() => {
	const now = new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
})();

export type CalendarEvent = {
	id: string;
	title: string;
	start: string;
	allDay?: boolean;
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
	{ id: "1", title: "Deserunt aliuipsit", start: `${month}-07T02:00:00`, allDay: true },
	{ id: "2", title: "Exercitation quis", start: `${month}-04T18:30:00`, allDay: true },
	{ id: "3", title: "Amet pariatur cillum", start: `${month}-06T12:00:00` },
	{ id: "4", title: "Laborum voluptate", start: `${month}-06T08:00:00` },
	{ id: "5", title: "Fugiat dolor commodo", start: `${month}-09`, allDay: true },
	{ id: "6", title: "Eiusmod adipisicing dolor", start: `${month}-10`, allDay: true },
	{ id: "7", title: "Cilliom dendoom lowers", start: `${month}-10T10:30:00`, allDay: true },
	{ id: "8", title: "Veniam deserunt cupidatat", start: `${month}-14T07:30:00` },
	{ id: "9", title: "Adipisicing pariatur magna", start: `${month}-19` },
	{ id: "10", title: "Fugiat ullamco commodo", start: `${month}-19`, allDay: true },
	{ id: "11", title: "Consectetur", start: `${month}-19T07:30:00` },
	{ id: "12", title: "Reprehenderis", start: `${month}-23`, allDay: true },
	{ id: "13", title: "Consequat adipisicing", start: `${month}-25` },
	{ id: "14", title: "Pariatur esse", start: `${month}-28` },
	{ id: "15", title: "Ipsum dollar", start: `${month}-28`, allDay: true },
];
