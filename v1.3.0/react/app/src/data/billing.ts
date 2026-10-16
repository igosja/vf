export type InvoiceStatus = "Paid" | "Pending" | "Failed";

export type BillingInvoice = {
	id: string;
	date: string;
	description: string;
	amount: number;
	status: InvoiceStatus;
};

export const BILLING_HISTORY: BillingInvoice[] = [
	{ id: "INV-2026-010", date: "Oct 12, 2026", description: "Pro Plan · Monthly", amount: 49, status: "Pending" },
	{ id: "INV-2026-009", date: "Sep 12, 2026", description: "Pro Plan · Monthly", amount: 49, status: "Paid" },
	{ id: "INV-2026-008", date: "Aug 28, 2026", description: "Extra storage · 50 GB", amount: 10, status: "Paid" },
	{ id: "INV-2026-007", date: "Aug 12, 2026", description: "Pro Plan · Monthly", amount: 49, status: "Failed" },
	{ id: "INV-2026-006", date: "Jul 12, 2026", description: "Pro Plan · Monthly", amount: 49, status: "Paid" },
	{ id: "INV-2026-005", date: "Jun 20, 2026", description: "2 additional seats", amount: 24, status: "Paid" },
	{ id: "INV-2026-004", date: "Jun 12, 2026", description: "Pro Plan · Monthly", amount: 49, status: "Paid" },
	{ id: "INV-2026-003", date: "May 12, 2026", description: "Upgrade from Starter to Pro", amount: 32.5, status: "Paid" },
	{ id: "INV-2026-002", date: "Apr 12, 2026", description: "Starter Plan · Monthly", amount: 19, status: "Paid" },
	{ id: "INV-2026-001", date: "Mar 12, 2026", description: "Starter Plan · Monthly", amount: 19, status: "Paid" },
];

/** The plan's usage meters. `color` tints the bar. */
export const PLAN_USAGE = [
	{ label: "Team seats", used: "8 of 10", value: 80, color: "text-sky-500" },
	{ label: "Storage", used: "64 of 100 GB", value: 64, color: "text-emerald-500" },
	{ label: "API requests", used: "92k of 100k", value: 92, color: "text-amber-500" },
];

/** The account the history prints under and the card shows. */
export const BILLING_ACCOUNT = {
	company: "Abacaus Apple Inc",
	cardholder: "Catherine Williams",
	card: "4242",
	expiry: "08/28",
	email: "billing@abacaus-apple.app",
	address: "2810 D Street, Center Line, Michigan 48015",
	taxId: "US EIN 47-2938105",
};
