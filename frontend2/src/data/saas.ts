import { CreditCard, Globe, Rocket, UserPlus, type LucideIcon } from "lucide-react";

/** Monthly MRR changes in thousands of dollars. Churn is negative. */
export const MRR_MOVEMENT = {
	labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
	new: [6.2, 5.8, 7.1, 6.6, 7.9, 8.4, 7.2, 8.8, 9.1, 8.3, 9.6, 10.2],
	expansion: [2.1, 2.4, 2.0, 2.8, 3.1, 2.9, 3.4, 3.0, 3.6, 3.9, 3.5, 4.1],
	churned: [-2.8, -3.1, -2.5, -3.4, -2.9, -3.6, -3.2, -2.7, -3.8, -3.3, -2.9, -3.1],
};

/** The last 30 days, with weekday peaks and weekend dips. */
export const PRODUCT_ENGAGEMENT = {
	labels: Array.from({ length: 30 }, (_, i) => `Oct ${i + 1}`),
	daily: [
		1080, 1120, 1150, 1010, 820, 790, 1105, 1160, 1190, 1205, 1060, 850, 830, 1150, 1190, 1210, 1230, 1090, 880, 860, 1190, 1230, 1250, 1260, 1120, 900,
		885, 1240, 1275, 1284,
	],
	weekly: [
		2010, 2030, 2050, 2045, 2040, 2060, 2080, 2100, 2120, 2135, 2140, 2150, 2160, 2180, 2200, 2215, 2230, 2240, 2245, 2250, 2270, 2290, 2310, 2320, 2330,
		2335, 2345, 2365, 2380, 2395,
	],
};

/** Share of each monthly cohort still subscribed, by month since signup. */
export type Cohort = {
	cohort: string;
	customers: number;
	retention: number[];
};

export const COHORT_RETENTION: Cohort[] = [
	{ cohort: "Apr 2026", customers: 412, retention: [100, 88, 81, 77, 74, 72] },
	{ cohort: "May 2026", customers: 438, retention: [100, 90, 83, 79, 76] },
	{ cohort: "Jun 2026", customers: 465, retention: [100, 89, 84, 80] },
	{ cohort: "Jul 2026", customers: 491, retention: [100, 91, 86] },
	{ cohort: "Aug 2026", customers: 503, retention: [100, 92] },
	{ cohort: "Sep 2026", customers: 527, retention: [100] },
];

export type Subscription = {
	avatar: string;
	name: string;
	company: string;
	plan: string;
	billing: "Monthly" | "Yearly";
	status: "Active" | "Trial" | "Past due" | "Canceled";
	mrr: number;
};

export const RECENT_SUBSCRIPTIONS: Subscription[] = [
	{ avatar: "/img/contacts/2.jpg", name: "Harper Collins", company: "Brightwave Labs", plan: "Business", billing: "Yearly", status: "Active", mrr: 468 },
	{ avatar: "/img/contacts/5.jpg", name: "Liam Turner", company: "Northpeak", plan: "Pro", billing: "Monthly", status: "Trial", mrr: 0 },
	{ avatar: "/img/contacts/8.jpg", name: "Sofia Martinez", company: "Cloudnest", plan: "Enterprise", billing: "Yearly", status: "Active", mrr: 1275 },
	{ avatar: "/img/contacts/11.jpg", name: "Ethan Brooks", company: "Pixelforge", plan: "Starter", billing: "Monthly", status: "Past due", mrr: 36 },
	{ avatar: "/img/contacts/14.jpg", name: "Ava Richardson", company: "Lumen Health", plan: "Pro", billing: "Monthly", status: "Active", mrr: 290 },
	{ avatar: "/img/contacts/16.jpg", name: "Noah Fischer", company: "Quantly", plan: "Business", billing: "Monthly", status: "Canceled", mrr: 0 },
];

/** One plan. `color` is a text class for its dot; the chart takes the same colours in order. */
export type Plan = {
	plan: string;
	price: number;
	subscribers: number;
	color: string;
};

export const PLAN_MIX: Plan[] = [
	{ plan: "Starter", price: 12, subscribers: 1420, color: "text-cyan-500" },
	{ plan: "Pro", price: 29, subscribers: 1126, color: "text-sky-500" },
	{ plan: "Business", price: 39, subscribers: 548, color: "text-purple-400" },
	{ plan: "Enterprise", price: 85, subscribers: 154, color: "text-amber-500" },
];

export type FunnelStep = {
	step: string;
	icon: LucideIcon;
	count: number;
};

export const TRIAL_FUNNEL: FunnelStep[] = [
	{ step: "Website visitors", icon: Globe, count: 48200 },
	{ step: "Sign-ups", icon: UserPlus, count: 6120 },
	{ step: "Trials started", icon: Rocket, count: 3240 },
	{ step: "Paid conversions", icon: CreditCard, count: 920 },
];

/** One churn reason. `color` is a text class; the bar takes it. */
export type ChurnReason = {
	reason: string;
	percentage: number;
	color: string;
};

export const CHURN_REASONS: ChurnReason[] = [
	{ reason: "Too expensive", percentage: 34, color: "text-red-400" },
	{ reason: "Missing features", percentage: 22, color: "text-amber-500" },
	{ reason: "Switched to a competitor", percentage: 18, color: "text-purple-400" },
	{ reason: "No longer needed", percentage: 15, color: "text-sky-500" },
	{ reason: "Poor support experience", percentage: 6, color: "text-teal-500" },
	{ reason: "Other", percentage: 5, color: "text-input" },
];
