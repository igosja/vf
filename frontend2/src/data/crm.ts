export const LEADS_GENERATION_RATE = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
	current: [128, 117, 145, 180, 225, 150, 135, 100, 128, 60, 70],
	last: [100, 80, 180, 134, 180, 70, 225, 150, 35, 100, 120],
};

export const CONVERTED_LEADS = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
	converted: [109, 106, 105, 106, 108, 109, 106, 109, 107, 105, 105, 105, 105, 108, 105, 107, 106, 109, 107],
	received: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 115, 111],
};

export type Rainmaker = {
	avatar: string;
	name: string;
	totalSales: number;
	dealsClosed: number;
	performance: number;
};

export const TOP_RAINMAKERS: Rainmaker[] = [
	{ avatar: "/img/contacts/11.jpg", name: "John Smith", totalSales: 1200000, dealsClosed: 45, performance: 10.5 },
	{ avatar: "/img/contacts/12.jpg", name: "Jane Johnson", totalSales: 950000, dealsClosed: 50, performance: 7.2 },
	{ avatar: "/img/contacts/13.jpg", name: "Michael Williams", totalSales: 850000, dealsClosed: 38, performance: 8.1 },
	{ avatar: "/img/contacts/14.jpg", name: "Emily Davis", totalSales: 780000, dealsClosed: 42, performance: 9.5 },
	{ avatar: "/img/contacts/15.jpg", name: "David Brown", totalSales: 720000, dealsClosed: 40, performance: 8.9 },
	{ avatar: "/img/contacts/16.jpg", name: "Mary Miller", totalSales: 650000, dealsClosed: 35, performance: 7.8 },
	{ avatar: "/img/contacts/10.jpg", name: "Robert Wilson", totalSales: 620000, dealsClosed: 30, performance: 6.5 },
];

/** Daily leads in thousands, one value per day from `start` (local time). */
export const LEADS_SOURCES = {
	start: "2023-08-12T00:00",
	advertisements: [172, 165, 178, 169, 161, 175, 180, 167, 163, 171, 177, 166, 174, 162, 168, 179, 170, 164, 176, 173],
	coldCalls: [141, 135, 148, 132, 144, 138, 150, 136, 143, 131, 147, 139, 134, 145, 137, 149, 133, 142, 140, 146],
	customReferrals: [92, 85, 98, 81, 94, 88, 100, 83, 96, 90, 87, 99, 82, 93, 86, 97, 84, 91, 95, 89],
	employeeReferrals: [55, 51, 58, 53, 60, 52, 57, 54, 59, 50, 56, 53, 58, 51, 55, 60, 52, 57, 54, 56],
	others: [36, 31, 39, 33, 37, 30, 38, 34, 35, 32, 40, 31, 36, 33, 39, 30, 37, 34, 38, 32],
};

/** A ranked row with a share bar. `color` is a text class; the dot and the bar both take it. */
export type ShareRow = {
	label: string;
	percentage: number;
	change: number;
	up: boolean;
	color: string;
};

export const LEAD_SOURCES: ShareRow[] = [
	{ label: "Advertisements", percentage: 58, change: 23.1, up: false, color: "text-emerald-500" },
	{ label: "Cold Calls", percentage: 41, change: 1.2, up: true, color: "text-purple-400" },
	{ label: "Custom Referrals", percentage: 30, change: 43.2, up: false, color: "text-sky-500" },
	{ label: "Employee Referrals", percentage: 21, change: 9.83, up: false, color: "text-red-400" },
	{ label: "Others", percentage: 9, change: 21.43, up: true, color: "text-amber-500" },
];

/** Leads per country, for the map. Countries listed here take the solid fill. */
export const LEADS_DISTRIBUTION_MAP: Record<string, number> = {
	US: 500,
	RU: 490,
	BR: 450,
	ZA: 400,
	IN: 350,
	AE: 300,
	AU: 260,
	SG: 250,
	FR: 200,
	ES: 190,
	PL: 150,
	SE: 120,
	ID: 110,
	JP: 90,
	EG: 45,
};

export type CountryRow = {
	flag: string;
	country: string;
	count: number;
	percentage: number;
	change: number;
	up: boolean;
};

export const LEADS_DISTRIBUTION: CountryRow[] = [
	{ flag: "/img/flags/us.svg", country: "United States of America", count: 6732, percentage: 44, change: 4.58, up: true },
	{ flag: "/img/flags/japan.svg", country: "Japan", count: 4532, percentage: 32, change: 0.43, up: true },
	{ flag: "/img/flags/england.svg", country: "United Kingdom", count: 4487, percentage: 24, change: 5.43, up: false },
	{ flag: "/img/flags/china.svg", country: "China", count: 3982, percentage: 19, change: 21.54, up: true },
	{ flag: "/img/flags/germany.svg", country: "Germany", count: 3241, percentage: 16, change: 10.32, up: false },
	{ flag: "/img/flags/france.svg", country: "France", count: 2985, percentage: 9, change: 0.54, up: true },
];

export const LEADS_BY_INDUSTRY = {
	labels: ["Software and Technology", "Energy", "Project Development", "Consultant", "Others"],
	leads: [23981, 16342, 9736, 7632, 4535],
};

export const INDUSTRIES: ShareRow[] = [
	{ label: "Software and Technology", percentage: 43, change: 52.6, up: true, color: "text-sky-500" },
	{ label: "Energy", percentage: 37, change: 31.3, up: true, color: "text-teal-500" },
	{ label: "Project Development", percentage: 32, change: 10.5, up: false, color: "text-purple-400" },
	{ label: "Consultant", percentage: 19, change: 17.2, up: false, color: "text-cyan-500" },
	{ label: "Miscellaneous", percentage: 12, change: 23.1, up: false, color: "text-amber-500" },
];

export type Opportunity = {
	avatar: string;
	name: string;
	qualified: number;
	won: number;
	value: number;
};

export const OPPORTUNITIES: Opportunity[] = [
	{ avatar: "/img/contacts/1.jpg", name: "John Doe", qualified: 45, won: 62, value: 657321 },
	{ avatar: "/img/contacts/2.jpg", name: "Jane Smith", qualified: 36, won: 27, value: 576099 },
	{ avatar: "/img/contacts/3.jpg", name: "Michael Johnson", qualified: 59, won: 25, value: 498567 },
	{ avatar: "/img/contacts/4.jpg", name: "Emily Brown", qualified: 68, won: 45, value: 310393 },
	{ avatar: "/img/contacts/5.jpg", name: "David Lee", qualified: 29, won: 54, value: 125478 },
	{ avatar: "/img/contacts/6.jpg", name: "Sarah Wilson", qualified: 64, won: 63, value: 98563 },
	{ avatar: "/img/contacts/7.jpg", name: "Alex Martinez", qualified: 48, won: 22, value: 83476 },
	{ avatar: "/img/contacts/8.jpg", name: "Jessica Taylor", qualified: 20, won: 45, value: 80986 },
	{ avatar: "/img/contacts/9.jpg", name: "William Anderson", qualified: 56, won: 37, value: 78965 },
	{ avatar: "/img/contacts/10.jpg", name: "Olivia Harris", qualified: 43, won: 40, value: 50093 },
];

export const RESOLUTION_BY_CHANNEL = {
	labels: ["Email", "Phone", "Twitter", "Facebook", "Web", "In Person", "Mobile App"],
	resolved: [83, 44, 32, 53, 62, 23, 42],
};

export const OUTBOUND_CALLS = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	current: [128, 117, 145, 180, 225, 100, 89],
	last: [100, 80, 180, 134, 180, 90, 65],
};
