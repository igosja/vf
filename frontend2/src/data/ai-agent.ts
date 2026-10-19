import { CalendarCheck, CalendarPlus, ChartLine, CirclePlus, Code, FolderPlus, GraduationCap, PenTool, type LucideIcon } from "lucide-react";

export type Chat = {
	id: number;
	title: string;
	starred?: boolean;
};

export const CHATS: Chat[] = [
	{ id: 1, title: "Q3 sales performance summary", starred: true },
	{ id: 2, title: "Onboarding email sequence for new users", starred: true },
	{ id: 3, title: "Refactor dashboard chart components" },
	{ id: 4, title: "Customer churn analysis by plan" },
	{ id: 5, title: "Product launch checklist" },
	{ id: 6, title: "Explain OAuth 2.0 refresh tokens" },
	{ id: 7, title: "Weekly team standup notes" },
	{ id: 8, title: "Pricing page copy ideas" },
	{ id: 9, title: "Fix flexbox overflow in sidebar" },
	{ id: 10, title: "Quarterly OKRs draft" },
	{ id: 11, title: "Translate support macros to Spanish" },
	{ id: 12, title: "Compare Postgres vs MySQL for analytics" },
	{ id: 13, title: "Job description for senior designer" },
	{ id: 14, title: "Summarize customer interview transcripts" },
];

export type SearchType = "chat" | "project" | "image" | "scheduled" | "action";

/** Everything the search palette finds besides chats. Actions carry their own icon. */
export type SearchItem = {
	type: SearchType;
	title: string;
	meta?: string;
	icon?: LucideIcon;
};

export const SEARCH_ITEMS: SearchItem[] = [
	{ type: "project", title: "Marketing site redesign", meta: "8 chats" },
	{ type: "project", title: "Q4 planning", meta: "5 chats" },
	{ type: "project", title: "Customer research", meta: "12 chats" },
	{ type: "image", title: "Logo concepts for Materia", meta: "4 images" },
	{ type: "image", title: "Isometric office hero illustration", meta: "2 images" },
	{ type: "image", title: "Product mockup on a desk", meta: "3 images" },
	{ type: "scheduled", title: "Morning brief", meta: "Daily, 8:00 AM" },
	{ type: "scheduled", title: "Weekly metrics digest", meta: "Mondays, 9:00 AM" },
	{ type: "scheduled", title: "Competitor news roundup", meta: "Fridays, 4:00 PM" },
	{ type: "action", title: "New chat", icon: CirclePlus },
	{ type: "action", title: "New project", icon: FolderPlus },
	{ type: "action", title: "Schedule a task", icon: CalendarPlus },
];

export const PROJECTS = [
	{ name: "Marketing site redesign", color: "text-sky-500" },
	{ name: "Q4 planning", color: "text-emerald-500" },
	{ name: "Customer research", color: "text-amber-500" },
];

export type Suggestion = {
	label: string;
	icon: LucideIcon;
	prompts: string[];
};

export const SUGGESTIONS: Suggestion[] = [
	{
		label: "Write",
		icon: PenTool,
		prompts: [
			"Draft a follow-up email to a client after a demo call",
			"Write release notes for our latest dashboard update",
			"Create a short bio for my LinkedIn profile",
			"Turn these bullet points into a project update",
		],
	},
	{
		label: "Learn",
		icon: GraduationCap,
		prompts: [
			"Explain how JSON Web Tokens work",
			"What's the difference between OKRs and KPIs?",
			"Teach me the basics of cohort analysis",
			"How does a CDN speed up a website?",
		],
	},
	{
		label: "Code",
		icon: Code,
		prompts: [
			"Write a debounce function in JavaScript",
			"Convert this CSS to Tailwind utility classes",
			"Explain this regular expression step by step",
			"Write a SQL query for monthly active users",
		],
	},
	{
		label: "Analyze",
		icon: ChartLine,
		prompts: [
			"Find trends in last month's sales data",
			"Summarize the key points from a PDF report",
			"Compare our pricing with three competitors",
			"Spot anomalies in this traffic report",
		],
	},
	{
		label: "Plan",
		icon: CalendarCheck,
		prompts: [
			"Plan a two-week sprint for a small team",
			"Create a launch checklist for a new feature",
			"Build an agenda for a quarterly review meeting",
			"Outline a 30-60-90 day plan for a new hire",
		],
	},
];

/** The reply streamed in after a new message. Numbered lines become a list and **text** turns bold. */
export const DEMO_REPLY = [
	"Good question. Here's how I'd approach it:",
	"1. **Clarify the goal.** Decide what a good result looks like before starting, so you can measure progress against it.",
	"2. **Gather the inputs.** Pull together the data, documents or context you already have. Gaps usually show up here.",
	"3. **Draft, then refine.** Get a rough version done quickly, then iterate on the parts that matter most.",
	"Want me to go deeper on any of these steps, or turn this into a checklist?",
];
