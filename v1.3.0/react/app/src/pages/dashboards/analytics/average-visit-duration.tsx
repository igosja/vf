import { Clock, Info } from "lucide-react";
import { Line } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { AVERAGE_VISIT_DURATION } from "@/data/analytics";

export function AverageVisitDuration() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-emerald-500/20 text-emerald-500 sm:grid">
						<Clock />
					</span>
					Average Visit Duration
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 h-66">
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
							y: {
								min: 0,
								max: 250,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 6, callback: (label) => `${label}s` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: AVERAGE_VISIT_DURATION.labels,
						datasets: [
							{
								label: "Current Month",
								data: AVERAGE_VISIT_DURATION.current,
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.emerald, 0.25), alpha(CHART_COLORS.emerald, 0)),
								borderColor: CHART_COLORS.emerald,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.emerald,
							},
							{
								label: "Last Month",
								data: AVERAGE_VISIT_DURATION.last,
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.amber, 0.1), alpha(CHART_COLORS.amber, 0)),
								borderColor: CHART_COLORS.amber,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.amber,
							},
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Current month", color: "bg-amber-400" },
					{ label: "Last month", color: "bg-emerald-500" },
				]}
			/>
		</Card>
	);
}
