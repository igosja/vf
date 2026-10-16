import { ChartPie, Download, Info, Printer } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { LEADS_GENERATION_RATE } from "@/data/crm";

export function LeadsGenerationRate() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<ChartPie />
					</span>
					Leads Generation Rate
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
						layout: { padding: { left: -5, right: 1, bottom: -5 } },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: LEADS_GENERATION_RATE.labels,
						datasets: [
							{ label: "This Year", data: LEADS_GENERATION_RATE.current, backgroundColor: CHART_COLORS.sky },
							{ label: "Last Year", data: LEADS_GENERATION_RATE.last, backgroundColor: alpha(CHART_COLORS.sky, 0.25) },
						].map((dataset) => ({ ...dataset, borderRadius: 10, borderWidth: 0, categoryPercentage: 0.5, maxBarThickness: 10 })),
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Current year", color: "bg-sky-500" },
					{ label: "Last year", color: "bg-sky-500/25" },
				]}
			/>
		</Card>
	);
}
