import { Building2, Info } from "lucide-react";
import { Doughnut } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { INDUSTRIES, LEADS_BY_INDUSTRY } from "@/data/crm";
import { cn } from "@/lib/utils";

export function LeadsByIndustry() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<Building2 />
					</span>
					Leads by Industry
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-9 h-66">
				<Doughnut
					options={{
						maintainAspectRatio: false,
						animation: false,
						cutout: 80,
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: LEADS_BY_INDUSTRY.labels,
						datasets: [
							{
								data: LEADS_BY_INDUSTRY.leads,
								backgroundColor: [CHART_COLORS.sky, CHART_COLORS.teal, CHART_COLORS.purple, CHART_COLORS.cyan, CHART_COLORS.amber],
								borderWidth: 3,
								borderColor: theme.pieBorder,
								hoverOffset: 1,
								hoverBorderWidth: 0,
								borderRadius: 5,
							},
						],
					}}
				/>
			</div>

			{INDUSTRIES.map((item) => (
				<div key={item.label} className="flex items-start">
					<i className={cn("mt-1.5 mr-3 size-2.5 shrink-0 rounded-full bg-current", item.color)} />
					<div className="flex flex-1 flex-wrap items-center">
						<div className="flex-1 text-emphasis-foreground">{item.label}</div>
						<Trend up={item.up} iconEnd className="hidden justify-end sm:flex">
							{item.change}%
						</Trend>
						<div className="w-12 text-right text-base text-emphasis-foreground">{item.percentage}%</div>
						<Progress value={item.percentage} aria-label={item.label} className={cn("my-4 h-0.5", item.color)} />
					</div>
				</div>
			))}
		</Card>
	);
}
