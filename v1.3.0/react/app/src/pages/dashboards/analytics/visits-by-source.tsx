import { Info, GlobeCode } from "lucide-react";
import { Doughnut } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { VISIT_SOURCES, VISITS_BY_SOURCE } from "@/data/analytics";
import { cn } from "@/lib/utils";

export function VisitsBySource() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="grid avatar-mask size-8 place-items-center bg-emerald-500/15 text-emerald-500">
						<GlobeCode />
					</span>
					Visits by Source
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="relative mb-7 h-66">
				<Doughnut
					options={{
						maintainAspectRatio: false,
						animation: false,
						cutout: 85,
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: VISITS_BY_SOURCE.labels,
						datasets: [
							{
								data: VISITS_BY_SOURCE.visits,
								backgroundColor: [CHART_COLORS.sky, CHART_COLORS.emerald, CHART_COLORS.purple, CHART_COLORS.cyan, CHART_COLORS.amber],
								borderWidth: 4,
								borderColor: theme.pieBorder,
								hoverOffset: 1,
								hoverBorderWidth: 0,
								borderRadius: 5,
							},
						],
					}}
				/>
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
					<div className="text-xl font-medium text-emphasis-foreground">781K</div>
					<div className="text-muted-foreground">Total Sessions</div>
				</div>
			</div>

			{VISIT_SOURCES.map((item) => (
				<div key={item.source} className="flex items-start">
					<i className={cn("mt-1.5 mr-3 size-2.5 shrink-0 rounded-full bg-current", item.color)} />
					<div className="flex flex-1 flex-wrap items-center">
						<div className="flex-1 text-emphasis-foreground">{item.source}</div>
						<div className="w-12 text-right text-base font-medium text-emphasis-foreground">{item.visits}</div>
						<Trend up={item.up} iconEnd className="ml-4 hidden w-16 justify-end sm:flex">
							{item.percentage}%
						</Trend>
						<Progress value={item.percentage} aria-label={item.source} className={cn("my-3 h-0.5", item.color)} />
					</div>
				</div>
			))}
		</Card>
	);
}
