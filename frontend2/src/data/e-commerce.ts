/** Daily values in thousands, one per day from `start` (local time). */
export type DailySeries = {
	start: string;
	current: number[];
	last: number[];
};

export const SALES_HISTORY: DailySeries = {
	start: "2023-08-12T00:00",
	current: [112, 111, 113, 115, 110, 110, 114, 110, 112, 114, 110, 114, 111, 110, 110, 113, 113, 110, 111],
	last: [105, 109, 108, 105, 109, 105, 106, 109, 105, 109, 109, 108, 105, 106, 105, 109, 106, 107, 108],
};

export const STORE_SESSIONS: DailySeries = {
	start: "2023-08-12T00:00",
	current: [44, 57, 43, 58, 49, 57, 66, 61, 45, 43, 58, 58, 60, 46, 51, 43, 57, 62, 42],
	last: [48, 31, 49, 36, 45, 47, 43, 40, 44, 48, 44, 41, 39, 37, 35, 37, 32, 48, 39],
};

export type RecentOrder = {
	order: number;
	date: string;
	status: "Paid" | "Failed" | "Pending";
	fulfillment: "Fulfilled" | "Unfulfilled";
	quantity: number;
	currency: string;
	total: string;
};

export const RECENT_ORDERS: RecentOrder[] = [
	{ order: 96474, date: "12/12/2023", status: "Paid", fulfillment: "Unfulfilled", quantity: 1, currency: "USD", total: "$29.69" },
	{ order: 96475, date: "12/12/2023", status: "Failed", fulfillment: "Unfulfilled", quantity: 2, currency: "USD", total: "$59.38" },
	{ order: 96476, date: "12/12/2023", status: "Pending", fulfillment: "Unfulfilled", quantity: 1, currency: "USD", total: "$29.69" },
	{ order: 96477, date: "12/12/2023", status: "Paid", fulfillment: "Unfulfilled", quantity: 7, currency: "EUR", total: "$2389.00" },
	{ order: 96478, date: "12/12/2023", status: "Paid", fulfillment: "Unfulfilled", quantity: 1, currency: "EUR", total: "$7.11" },
	{ order: 96479, date: "12/12/2023", status: "Paid", fulfillment: "Unfulfilled", quantity: 3, currency: "USD", total: "$45.99" },
	{ order: 96480, date: "12/12/2023", status: "Paid", fulfillment: "Fulfilled", quantity: 12, currency: "USD", total: "$542.79" },
	{ order: 96481, date: "12/12/2023", status: "Paid", fulfillment: "Fulfilled", quantity: 1, currency: "AUD", total: "$99.99" },
	{ order: 96482, date: "12/12/2023", status: "Paid", fulfillment: "Fulfilled", quantity: 2, currency: "USD", total: "$15.00" },
	{ order: 96483, date: "12/13/2023", status: "Paid", fulfillment: "Fulfilled", quantity: 1, currency: "USD", total: "$8.00" },
	{ order: 96484, date: "12/14/2023", status: "Pending", fulfillment: "Unfulfilled", quantity: 3, currency: "USD", total: "$22.50" },
];

export type TopProduct = {
	image: string;
	name: string;
	orders: number;
	sales: string;
	up: boolean;
	percentage: number;
	category: string;
};

export const TOP_PRODUCTS: TopProduct[] = [
	{
		image: "/img/products/1.jpg",
		name: "Hempthon Professional Makeup Setting Oil, 60ml",
		orders: 4532,
		sales: "$12,924.00",
		up: false,
		percentage: 9.43,
		category: "Skin Care",
	},
	{
		image: "/img/products/2.jpg",
		name: "Fenton Shaker Bottle for Protein Mixes BPA-Free Leak Proof 750ml",
		orders: 4487,
		sales: "$11,324.67",
		up: true,
		percentage: 12.43,
		category: "Sports Nutrition",
	},
	{
		image: "/img/products/3.jpg",
		name: "Bioskep Simple Hydrating Light Daily Face Moisturizer, 125ml",
		orders: 3982,
		sales: "$10,924.00",
		up: false,
		percentage: 32.38,
		category: "Men's Grooming",
	},
	{
		image: "/img/products/4.jpg",
		name: "Fantasi Shaving Foam, DEEP Smooth Shave Antibacterial, 200ml",
		orders: 3241,
		sales: "$8,093.21",
		up: true,
		percentage: 8.23,
		category: "Men's Grooming",
	},
	{
		image: "/img/products/5.jpg",
		name: "Davids Perfume Cool Water for women, 250ml",
		orders: 2985,
		sales: "$7,653.63",
		up: true,
		percentage: 24.54,
		category: "Perfumes",
	},
	{
		image: "/img/products/6.jpg",
		name: "Turmeric Healing Night Beauty Balm for Dark Spots, 40gm",
		orders: 2543,
		sales: "$7,012.93",
		up: false,
		percentage: 2.43,
		category: "Skin Care",
	},
	{
		image: "/img/products/7.jpg",
		name: "ChoicePerfect Boost 10% Azelaic Acid Booster, 1oz Tube",
		orders: 2134,
		sales: "$6,837.90",
		up: true,
		percentage: 4.56,
		category: "Hair Care",
	},
	{
		image: "/img/products/8.jpg",
		name: "NaturesRed 100% Pure Organic Lipstick, 10ml",
		orders: 424,
		sales: "$1,857.10",
		up: true,
		percentage: 22.32,
		category: "Skin Care",
	},
];
