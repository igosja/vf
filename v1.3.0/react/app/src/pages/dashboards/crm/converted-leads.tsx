import { BadgeCheck, Download, Info, Printer } from "lucide-react";
import { Line } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { CONVERTED_LEADS } from "@/data/crm";

export function ConvertedLeads() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
						<BadgeCheck />
					</span>
					Converted Leads
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
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5, bottom: -5 } },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: { ...theme.ticks(), maxTicksLimit: 12 } },
							y: {
								min: 100,
								max: 120,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 6, callback: (label) => `${label}K` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: CONVERTED_LEADS.labels,
						datasets: [
							{
								label: "Converted",
								data: CONVERTED_LEADS.converted,
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.emerald, 0.25), alpha(CHART_COLORS.emerald, 0)),
								borderColor: CHART_COLORS.emerald,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.emerald,
							},
							{
								label: "Received",
								data: CONVERTED_LEADS.received,
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
					{ label: "Received", color: "bg-amber-400" },
					{ label: "Converted", color: "bg-emerald-500" },
				]}
			/>
		</Card>
	);
}
