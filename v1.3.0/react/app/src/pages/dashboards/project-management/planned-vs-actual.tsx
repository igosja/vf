import { CalendarCheck, Info } from "lucide-react";
import { Chart } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { PLANNED_VS_ACTUAL } from "@/data/project-management";

export function PlannedVsActual() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<CalendarCheck />
					</span>
					Planned vs Actual
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 h-66">
				<Chart
					type="bar"
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5 } },
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: theme.ticks(0, "center") },
							y: {
								min: 0,
								max: 120,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), callback: (label) => `${label}K` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: PLANNED_VS_ACTUAL.labels,
						datasets: [
							{
								type: "bar",
								label: "Planned",
								data: PLANNED_VS_ACTUAL.planned,
								backgroundColor: alpha(CHART_COLORS.sky, 0.25),
								borderRadius: 5,
								borderWidth: 0,
								grouped: false,
								categoryPercentage: 0.5,
								maxBarThickness: 20,
							},
							{
								type: "line",
								label: "Billable Hours",
								data: PLANNED_VS_ACTUAL.billable,
								borderColor: CHART_COLORS.amber,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 2,
								pointBackgroundColor: CHART_COLORS.amber,
								pointBorderColor: CHART_COLORS.amber,
							},
							{
								type: "bar",
								label: "Actual",
								data: PLANNED_VS_ACTUAL.actual,
								backgroundColor: CHART_COLORS.sky,
								borderRadius: 5,
								borderWidth: 0,
								categoryPercentage: 0.25,
								maxBarThickness: 10,
							},
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Planned", color: "bg-sky-500/25" },
					{ label: "Actual", color: "bg-sky-500" },
					{ label: "Billable Hours", color: "bg-amber-400" },
				]}
			/>
		</Card>
	);
}
