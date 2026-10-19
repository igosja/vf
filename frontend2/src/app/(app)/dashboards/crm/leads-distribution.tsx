import { Earth, Info } from "lucide-react";

import { CHART_COLORS } from "@/components/charts/use-chart-theme";
import { VectorMap } from "@/components/charts/vector-map";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { LEADS_DISTRIBUTION, LEADS_DISTRIBUTION_MAP } from "@/data/crm";

const LEADS_MAP = {
	regionStyle: {
		initial: { fill: "INITIAL_FILL", fillOpacity: 1, stroke: "transparent", strokeWidth: 1 },
		hover: { fillOpacity: 0.95 },
	},
	series: { regions: [{ attributes: Object.fromEntries(Object.keys(LEADS_DISTRIBUTION_MAP).map((code) => [code, CHART_COLORS.amber])) }] },
};

export function LeadsDistribution() {
	return (
		<Card>
			<CardHeader className="mb-8">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
						<Earth />
					</span>
					Leads Distribution by Country
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<VectorMap options={LEADS_MAP} className="mb-6" />

			<div className="mb-2">
				{LEADS_DISTRIBUTION.map((item) => (
					<div key={item.country} className="group flex items-start">
						<img className="mr-4 w-6 rounded-full" src={item.flag} alt="" />
						<div className="mb-2 flex flex-1 items-center border-b pb-2 group-last:mb-0 group-last:border-b-0 group-last:pb-0">
							<div className="flex-1">
								<div className="text-emphasis-foreground">{item.country}</div>
								<span className="text-sm text-muted-foreground">{item.count} Leads</span>
							</div>
							<Trend up={item.up} className="ml-auto justify-end">
								{item.change}%
							</Trend>
							<div className="w-12 text-right text-base text-emphasis-foreground">{item.percentage}%</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}
