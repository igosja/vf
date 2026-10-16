import { CircleCheck, CircleMinus } from "lucide-react";

import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PLANS, type Plan } from "@/data/pricing";
import { cn } from "@/lib/utils";

/** One plan: its name and price, the features with the ones it lacks faded out, and the call to action. */
function PlanCard({ plan }: { plan: Plan }) {
	return (
		<Card className="w-72 shrink-0 p-5 xl:w-auto xl:flex-1">
			<div className="mb-5 text-center text-emphasis-foreground">
				<div className="mb-2 text-xs uppercase">{plan.name}</div>
				<div className="text-xl">{plan.price}</div>
			</div>

			<ul className="mb-1 flex flex-col gap-4">
				{plan.features.map((feature, index) => {
					const included = index < plan.included;
					const Icon = included ? CircleCheck : CircleMinus;

					return (
						<li key={feature} className={cn("flex items-start gap-3", !included && "text-muted-foreground opacity-50")}>
							<Icon className={cn("size-5", included && "text-sky-500")} />
							{feature}
						</li>
					);
				})}
			</ul>

			<div className="mt-auto pt-4 text-center">
				<Button variant="theme" className="mb-2 px-8">
					Get Started
				</Button>
				<div className="text-xs text-muted-foreground">30 days free trial</div>
			</div>
		</Card>
	);
}

function Section({ title, description }: { title: string; description: string }) {
	return (
		<div className="py-5 xl:px-2">
			<h3 className="mb-3 text-base">{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default function PricingTables() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Pricing Table" breadcrumb={["Miscellaneous", "Samples Pages"]} />

			<Section title="Three columns" description="Sample pricing table with a three column layout." />
			<div className="mx-auto mb-10 flex max-w-250 gap-2 overflow-x-auto">
				{PLANS.slice(0, 3).map((plan) => (
					<PlanCard key={plan.name} plan={plan} />
				))}
			</div>

			<Section title="Four columns" description="Sample pricing table with a four column layout." />
			<div className="flex gap-2 overflow-x-auto">
				{PLANS.map((plan) => (
					<PlanCard key={plan.name} plan={plan} />
				))}
			</div>
		</div>
	);
}
