const FEATURES = [
	"Curabitur tempus porttitor ornare",
	"Nascetur ridiculus muses",
	"Integer posuere erat aante vehicula",
	"Nulla vitae elit libero",
	"Ultricies vehicula elit magna",
	"Praesent commodo magna consectetur",
];

/** A pricing plan. `features` lists every feature; the first `included` of them come with the plan. */
export type Plan = {
	name: string;
	price: string;
	features: string[];
	included: number;
};

export const PLANS: Plan[] = [
	{ name: "Standard", price: "$39.99", features: FEATURES, included: 2 },
	{ name: "Premium", price: "$39.99", features: FEATURES, included: 4 },
	{ name: "Enterprise", price: "$199.99", features: FEATURES, included: 6 },
	{ name: "Custom", price: "$1999.99+", features: FEATURES, included: 6 },
];
