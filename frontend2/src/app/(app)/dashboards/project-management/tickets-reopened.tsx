import { Info, Ticket } from "lucide-react";
import { Line } from "react-chartjs-2";

import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKETS_REOPENED } from "@/data/project-management";

export function TicketsReopened() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
						<Ticket />
					</span>
					Tickets Reopened
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 grid grid-cols-3 gap-2 leading-none">
				<div className="rounded-lg border px-3 py-2">
					<div className="text-base font-medium text-emphasis-foreground">202</div>
					<div className="text-sm text-muted-foreground">Reopened</div>
				</div>
				<div className="rounded-lg border px-3 py-2">
					<div className="text-base font-medium text-emphasis-foreground">9.85%</div>
					<div className="text-sm text-muted-foreground">Percentage</div>
				</div>
				<div className="rounded-lg border px-3 py-2">
					<Trend iconEnd className="text-base font-medium">
						3.54%
					</Trend>
					<div className="text-sm text-muted-foreground">vs. Previous</div>
				</div>
			</div>

			<div className="mb-1 h-40">
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5 } },
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: { ...theme.ticks(0), maxTicksLimit: 12 } },
							y: {
								min: 80,
								max: 120,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 6, callback: (label) => `${label}K` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: TICKETS_REOPENED.labels,
						datasets: [
							{
								label: "Tickets",
								data: TICKETS_REOPENED.tickets,
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.emerald, 0.25), alpha(CHART_COLORS.emerald, 0)),
								borderColor: CHART_COLORS.emerald,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.emerald,
							},
						],
					}}
				/>
			</div>
		</Card>
	);
}
