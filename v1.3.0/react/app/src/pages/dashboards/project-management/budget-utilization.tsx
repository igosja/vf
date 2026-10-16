import { CircleDollarSign, Download, Info, Printer } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { BUDGET_UTILIZATION } from "@/data/project-management";

export function BudgetUtilization() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
						<CircleDollarSign />
					</span>
					Budget Utilization
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton className="hidden sm:grid">
						<Download />
						<span className="sr-only">Download</span>
					</IconButton>
					<IconButton className="hidden sm:grid">
						<Printer />
						<span className="sr-only">Print</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 h-66">
				<Bar
					options={{
						maintainAspectRatio: false,
						indexAxis: "y",
						layout: { padding: { left: -5 } },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: { ...theme.ticks(), callback: (label) => `${label}K` } },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: {
							legend: { display: false },
							tooltip: { ...theme.tooltip, callbacks: { label: (item) => `${item.formattedValue}K` } },
						},
					}}
					data={{
						labels: BUDGET_UTILIZATION.labels,
						datasets: [
							{
								label: "Current Utilization",
								data: BUDGET_UTILIZATION.current,
								backgroundColor: CHART_COLORS.cyan,
								categoryPercentage: 0.15,
								borderWidth: 0,
								borderRadius: 10,
							},
							{
								label: "Proposed Budget",
								data: BUDGET_UTILIZATION.proposed,
								backgroundColor: alpha(CHART_COLORS.cyan, 0.3),
								categoryPercentage: 0.3,
								borderWidth: 0,
								borderRadius: 10,
								grouped: false,
							},
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Actual Budget", color: "bg-cyan-500/25" },
					{ label: "Current Utilization", color: "bg-cyan-500" },
				]}
			/>
		</Card>
	);
}
