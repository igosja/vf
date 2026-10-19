import { Info, Phone } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { OUTBOUND_CALLS } from "@/data/crm";

export function OutboundCalls() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-teal-500/15 text-teal-500 sm:grid">
						<Phone />
					</span>
					Outbound Calls
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="h-66 md:mb-5">
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
						labels: OUTBOUND_CALLS.labels,
						datasets: [
							{ label: "This Week", data: OUTBOUND_CALLS.current, backgroundColor: CHART_COLORS.teal },
							{ label: "Last Week", data: OUTBOUND_CALLS.last, backgroundColor: alpha(CHART_COLORS.teal, 0.25) },
						].map((dataset) => ({ ...dataset, barThickness: 5, borderRadius: 10, borderWidth: 0 })),
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Current week", color: "bg-teal-500" },
					{ label: "Last week", color: "bg-teal-500/25" },
				]}
			/>
		</Card>
	);
}
