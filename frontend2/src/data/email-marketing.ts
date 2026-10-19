import { BadgeCheck, Ban, CircleX, MailOpen, OctagonAlert, Pointer, SendHorizontal, TriangleAlert, type LucideIcon } from "lucide-react";

/** One overview card. `color` is a text class; the icon tile, the figure and the bar take it. */
export type EmailStat = {
	label: string;
	value: string;
	icon: LucideIcon;
	color: string;
	change: number;
	up: boolean;
	progress?: number;
};

export const EMAIL_STATS: EmailStat[] = [
	{ label: "Email Sent", value: "2,932", icon: SendHorizontal, color: "text-emerald-500", change: 0.07, up: false, progress: 72 },
	{ label: "Successful Deliveries", value: "2,309", icon: BadgeCheck, color: "text-amber-500", change: 2.24, up: true, progress: 90 },
	{ label: "Opened Emails", value: "1,736", icon: MailOpen, color: "text-cyan-500", change: 5.98, up: true, progress: 58 },
	{ label: "Total Clicks", value: "14,473", icon: Pointer, color: "text-sky-500", change: 41.68, up: true, progress: 38 },
	{ label: "Abuse Reports", value: "375", icon: Ban, color: "text-red-400", change: 23.47, up: true },
	{ label: "Unsubscribes", value: "983", icon: OctagonAlert, color: "text-pink-400", change: 35.78, up: false },
	{ label: "Unique Unsubscribes", value: "88", icon: TriangleAlert, color: "text-pink-400", change: 20.07, up: false },
	{ label: "Failed Deliveries", value: "956", icon: CircleX, color: "text-red-400", change: 5.01, up: true },
];

export const DELIVERED_VS_OPEN = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18", "19", "20"],
	opened: [75, 54, 145, 110, 145, 35, 135, 100, 30, 60, 70, 90, 100, 80, 180, 134, 180, 70, 225, 150, 35],
	delivered: [100, 80, 180, 134, 180, 70, 225, 150, 35, 100, 120, 160, 120, 145, 200, 145, 200, 135, 230, 180, 60],
};

export const CAMPAIGN_SALES = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
	transactions: [109, 106, 105, 106, 108, 109, 106, 109, 107, 105, 105, 105, 105, 108, 105, 107, 106, 109, 107],
	revenue: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 115, 111],
};

export type DeviceShare = {
	device: "Desktop" | "Mobile" | "Tablet";
	percentage: number;
	opens: number;
	color: string;
};

export const OPEN_RATE_BY_DEVICE: DeviceShare[] = [
	{ device: "Desktop", percentage: 62, opens: 12453, color: "text-cyan-500" },
	{ device: "Mobile", percentage: 30, opens: 4853, color: "text-purple-400" },
	{ device: "Tablet", percentage: 8, opens: 983, color: "text-amber-500" },
];

export type CampaignResult = {
	campaign: string;
	clicks: number;
	conversions: number;
	revenue: number;
};

export const CAMPAIGN_PERFORMANCE: CampaignResult[] = [
	{ campaign: "Weekly Newsletter", clicks: 1200, conversions: 80, revenue: 1500 },
	{ campaign: "Summer Promo", clicks: 800, conversions: 40, revenue: 1000 },
	{ campaign: "Google Ads Campaign", clicks: 1500, conversions: 120, revenue: 2000 },
	{ campaign: "Daily Customer Update", clicks: 500, conversions: 30, revenue: 750 },
	{ campaign: "Content Marketing", clicks: 1000, conversions: 60, revenue: 900 },
	{ campaign: "Event Sponsorship", clicks: 300, conversions: 20, revenue: 400 },
	{ campaign: "VIP Announcement", clicks: 1100, conversions: 70, revenue: 1300 },
	{ campaign: "Special Offers", clicks: 850, conversions: 45, revenue: 1050 },
	{ campaign: "Social Media Campaign", clicks: 1600, conversions: 110, revenue: 1900 },
	{ campaign: "New Product Launch", clicks: 700, conversions: 50, revenue: 800 },
	{ campaign: "Monthly Newsletter", clicks: 1200, conversions: 80, revenue: 1500 },
	{ campaign: "Winter Promo", clicks: 800, conversions: 40, revenue: 1000 },
	{ campaign: "Facebook Ads Campaign", clicks: 1500, conversions: 120, revenue: 2000 },
];

export const SENT_VS_NOT_SENT = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
	notSent: [100, 80, 100, 75, 95, 80, 100, 85, 110, 80, 110],
	sent: [160, 130, 160, 110, 150, 120, 165, 130, 170, 110, 160],
};

export const CAMPAIGN_REACH = {
	labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
	impressions: [100, 150, 180, 100, 240, 150, 200, 140, 145, 160, 220, 180, 100, 150, 190],
	views: [50, 100, 120, 50, 180, 100, 150, 100, 100, 130, 170, 150, 90, 120, 150],
	clicks: [10, 30, 40, 10, 60, 20, 40, 10, 20, 20, 50, 20, 10, 30, 40],
};

/** A map marker. The dot's strength and size follow `clicks`. */
export type EngagementMarker = {
	name: string;
	coords: [number, number];
	clicks: number;
};

export const ENGAGEMENT_MARKERS: EngagementMarker[] = [
	{ name: "United States", coords: [37.0902, -95.7129], clicks: 6732 },
	{ name: "Canada", coords: [56.1304, -106.3468], clicks: 3120 },
	{ name: "Mexico", coords: [23.6345, -102.5528], clicks: 2650 },
	{ name: "Cuba", coords: [21.5218, -77.7812], clicks: 1240 },
	{ name: "Jamaica", coords: [18.1096, -77.2975], clicks: 980 },
	{ name: "France", coords: [46.603354, 1.888334], clicks: 2985 },
	{ name: "Germany", coords: [51.1657, 10.4515], clicks: 3241 },
	{ name: "Italy", coords: [41.8719, 12.5675], clicks: 2210 },
	{ name: "Spain", coords: [40.4637, -3.7492], clicks: 1980 },
	{ name: "Greece", coords: [39.0742, 21.8243], clicks: 860 },
	{ name: "China", coords: [35.8617, 104.1954], clicks: 3982 },
	{ name: "India", coords: [20.5937, 78.9629], clicks: 3560 },
	{ name: "Japan", coords: [36.2048, 138.2529], clicks: 4532 },
	{ name: "South Korea", coords: [35.9078, 127.7669], clicks: 2430 },
	{ name: "Indonesia", coords: [-0.7893, 113.9213], clicks: 1870 },
	{ name: "South Africa", coords: [-30.5595, 22.9375], clicks: 1320 },
	{ name: "Nigeria", coords: [9.082, 8.6753], clicks: 940 },
	{ name: "Egypt", coords: [26.8206, 30.8025], clicks: 1150 },
	{ name: "Kenya", coords: [-0.0236, 37.9062], clicks: 610 },
	{ name: "Algeria", coords: [28.0339, 1.6596], clicks: 480 },
	{ name: "Brazil", coords: [-14.235, -51.9253], clicks: 2280 },
	{ name: "Argentina", coords: [-38.4161, -63.6167], clicks: 1060 },
	{ name: "Peru", coords: [-9.19, -75.0152], clicks: 540 },
	{ name: "Colombia", coords: [4.5709, -74.2973], clicks: 720 },
	{ name: "Australia", coords: [-25.2744, 133.7751], clicks: 2870 },
	{ name: "United Arab Emirates", coords: [23.4241, 53.8478], clicks: 1690 },
	{ name: "Saudi Arabia", coords: [23.8859, 45.0792], clicks: 1410 },
	{ name: "Russia", coords: [61.524, 105.3188], clicks: 2040 },
	{ name: "Mongolia", coords: [46.8625, 103.8467], clicks: 320 },
];

export type CountryRow = {
	flag: string;
	country: string;
	count: number;
	percentage: number;
	change: number;
	up: boolean;
};

export const GEOGRAPHICAL_ENGAGEMENTS: CountryRow[] = [
	{ flag: "/img/flags/us.svg", country: "United States of America", count: 6732, percentage: 44, change: 4.58, up: true },
	{ flag: "/img/flags/japan.svg", country: "Japan", count: 4532, percentage: 32, change: 0.43, up: true },
	{ flag: "/img/flags/england.svg", country: "United Kingdom", count: 4487, percentage: 24, change: 5.43, up: false },
	{ flag: "/img/flags/china.svg", country: "China", count: 3982, percentage: 19, change: 21.54, up: true },
	{ flag: "/img/flags/germany.svg", country: "Germany", count: 3241, percentage: 16, change: 10.32, up: false },
	{ flag: "/img/flags/france.svg", country: "France", count: 2985, percentage: 9, change: 0.54, up: true },
];
