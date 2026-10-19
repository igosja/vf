export type InvoiceParty = {
	name: string;
	address: string;
	phone: string;
	email: string;
};

export type InvoiceLine = {
	description: string;
	quantity: number;
	amount: string;
};

/** The sample invoice. `summary` runs under the lines, from the subtotal down to the total. */
export const INVOICE = {
	number: "43125-002",
	date: "5th August 2024",
	total: "$1,835.19",
	billTo: {
		name: "Catherine D Williams",
		address: "4587 Tree Frog Lane, Conyers, Georgia",
		phone: "770-483-9707",
		email: "catherine@meantinc.com",
	} satisfies InvoiceParty,
	billFrom: {
		name: "Abacaus Apple Inc",
		address: "2810 D Street, Center Line, Michigan",
		phone: "586-497-1825",
		email: "sales@abacaus-apple.app",
	} satisfies InvoiceParty,
	lines: [
		{ description: "Samsung Galaxy S22 Ultra", quantity: 1, amount: "$1,399.00" },
		{ description: "Apple AirPods Pro", quantity: 1, amount: "$299.00" },
		{ description: "Mophie Charge Stream Pad Plus", quantity: 1, amount: "$99.00" },
	] satisfies InvoiceLine[],
	summary: [
		{ label: "Subtotal", amount: "$1,797.00" },
		{ label: "Discounts (5%)", amount: "-$89.85" },
		{ label: "Tax (7.5%)", amount: "$128.04" },
	],
	terms: "Customers are eligible to initiate exchanges or request refunds for products within a 14-day window, provided that the specified conditions are precisely met. To qualify for this service, the product must be in its original, unopened packaging, accompanied by the original receipt or proof of purchase. Additionally, the item must be in pristine, unused condition.",
};
