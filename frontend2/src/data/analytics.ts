/** A ranked row with a share bar. `color` is a text class; the dot and the bar both take it. */
export type SourceRow = {
	source: string;
	visits: number;
	percentage: number;
	up: boolean;
	color: string;
};

export const USER_ACQUISITION = {
	labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10", "17/10"],
	organic: [13, 23, 30, 8, 13, 27, 54, 60],
	paid: [25, 20, 20, 40, 32, 10, 20, 72],
	direct: [20, 45, 20, 28, 10, 50, 45, 30],
	others: [10, 20, 35, 40, 12, 30, 18, 43],
};

export const USER_ACQUISITION_SOURCES: SourceRow[] = [
	{ source: "Organic Search", visits: 243.2, percentage: 32.4, up: true, color: "text-sky-500" },
	{ source: "Paid Search", visits: 142.5, percentage: 66.1, up: true, color: "text-emerald-500" },
	{ source: "Direct", visits: 78.2, percentage: 10.9, up: false, color: "text-cyan-500" },
	{ source: "Others", visits: 32.5, percentage: 54.1, up: false, color: "text-amber-500" },
];

export const ACTIVE_USERS = {
	labels: [
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"21:00",
		"22:00",
		"23:00",
		"24:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
	],
	users: [100, 50, 105, 50, 240, 55, 110, 48, 145, 50, 99, 54, 200, 50, 190, 60, 95, 60, 170, 50, 200, 60, 190, 57, 90, 20, 60, 200, 90],
};

export type ActivePage = {
	page: string;
	users: number;
	percentage: number;
	up: boolean;
};

export const ACTIVE_PAGES: ActivePage[] = [
	{ page: "/index.html", users: 1480, percentage: 78, up: true },
	{ page: "/downloads/mobile.html", users: 1143, percentage: 69, up: true },
	{ page: "/pricing.html", users: 964, percentage: 56, up: false },
	{ page: "/blog/how-to-configure.html", users: 542, percentage: 35, up: true },
	{ page: "/products/design.html", users: 234, percentage: 18, up: false },
];

/** Sessions per country, for the map. Countries listed here take the solid fill. */
export const SESSIONS_BY_COUNTRY_MAP: Record<string, number> = {
	US: 500,
	RU: 480,
	ZA: 400,
	IN: 350,
	AE: 300,
	AU: 260,
	BR: 255,
	SG: 250,
	FR: 200,
	ES: 190,
	PL: 150,
	SE: 120,
	ID: 110,
	JP: 90,
	EG: 45,
};

export const SESSIONS_BY_COUNTRY = {
	labels: ["USA", "China", "England", "Japan", "Canada", "France"],
	sessions: [83, 44, 32, 53, 62, 23],
};

export type DeviceShare = {
	device: "Desktop" | "Mobile" | "Tablet";
	percentage: number;
	sessions: number;
	color: string;
};

export const DEVICE_SESSIONS: DeviceShare[] = [
	{ device: "Desktop", percentage: 66, sessions: 8564, color: "text-cyan-500" },
	{ device: "Mobile", percentage: 30, sessions: 2435, color: "text-purple-400" },
	{ device: "Tablet", percentage: 4, sessions: 321, color: "text-amber-500" },
];

export const AVERAGE_VISIT_DURATION = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
	current: [100, 80, 100, 75, 95, 80, 100, 85, 110, 80, 110],
	last: [160, 130, 160, 110, 150, 120, 165, 130, 170, 110, 160],
};

export type BrowserRate = {
	browser: string;
	icon: string;
	rate: number;
	percentage: number;
	up: boolean;
	color: string;
};

export const BROWSER_BOUNCE_RATE: BrowserRate[] = [
	{ browser: "Google Chrome", icon: "/img/browsers/chrome.svg", rate: 22443, percentage: 81, up: false, color: "text-emerald-500" },
	{ browser: "Apple Safari", icon: "/img/browsers/safari.svg", rate: 18312, percentage: 54, up: true, color: "text-cyan-500" },
	{ browser: "Mozilla Firefox", icon: "/img/browsers/firefox.svg", rate: 16234, percentage: 43, up: true, color: "text-amber-500" },
	{ browser: "Microsoft Edge", icon: "/img/browsers/edge.svg", rate: 12956, percentage: 32, up: false, color: "text-sky-500" },
	{ browser: "Opera", icon: "/img/browsers/opera.svg", rate: 10090, percentage: 25, up: false, color: "text-red-400" },
	{ browser: "Internet Explorer", icon: "/img/browsers/ie.svg", rate: 8354, percentage: 18, up: false, color: "text-cyan-500" },
	{ browser: "Samsung Internet", icon: "/img/browsers/samsung.svg", rate: 7856, percentage: 15, up: true, color: "text-indigo-500" },
];

export const VISITS_BY_SOURCE = {
	labels: ["Google", "Direct", "Bing", "Yahoo", "Others"],
	visits: [23981, 16342, 9736, 7632, 5374],
};

export const VISIT_SOURCES: SourceRow[] = [
	{ source: "Google", visits: 23981, percentage: 52.6, up: true, color: "text-sky-500" },
	{ source: "Direct", visits: 16342, percentage: 31.3, up: true, color: "text-emerald-500" },
	{ source: "Bing", visits: 9736, percentage: 10.5, up: false, color: "text-purple-400" },
	{ source: "Yahoo", visits: 5687, percentage: 7.1, up: false, color: "text-amber-500" },
	{ source: "Others", visits: 7632, percentage: 17.2, up: false, color: "text-cyan-500" },
];
