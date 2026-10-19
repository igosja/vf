import { Activity, Download, Info } from "lucide-react";
import { Line } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCT_ENGAGEMENT } from "@/data/saas";

/** A filled line that fades from its own colour to nothing. */
const line = (label: string, data: number[], color: string) => ({
	label,
	data,
	fill: true,
	backgroundColor: (context: Parameters<typeof areaGradient>[0]) => areaGradient(context, 0.75, alpha(color, 0.2), alpha(color, 0)),
	borderColor: color,
	borderWidth: 1.5,
	tension: 0.4,
	pointRadius: 0,
	pointHoverRadius: 4,
	pointBackgroundColor: color,
});

export function ProductEngagement() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-pink-400/15 text-pink-400 sm:grid">
						<Activity />
					</span>
					Product Engagement
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
				</CardAction>
			</CardHeader>

			<div className="mb-6 grid grid-cols-2 gap-3 leading-tight md:grid-cols-4">
				<div className="flex flex-col rounded-xl border px-4 py-3">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Daily active users
						<i className="ml-auto size-2 shrink-0 rounded-full bg-pink-400" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emphasis-foreground">1,284</div>
				</div>
				<div className="flex flex-col rounded-xl border px-4 py-3">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Monthly active users
						<i className="ml-auto size-2 shrink-0 rounded-full bg-sky-500" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emphasis-foreground">2,906</div>
				</div>
				<div className="hidden flex-col rounded-xl border px-4 py-3 md:flex">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Stickiness (DAU/MAU)
						<i className="ml-auto size-2 shrink-0 rounded-full bg-emerald-500" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emerald-500">44%</div>
				</div>
				<div className="hidden flex-col rounded-xl border px-4 py-3 md:flex">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Avg. session
						<i className="ml-auto size-2 shrink-0 rounded-full bg-amber-400" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emphasis-foreground">18m 42s</div>
				</div>
			</div>

			<div className="mb-5 h-52">
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5, bottom: -5 } },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: { ...theme.ticks(), maxTicksLimit: 8 } },
							y: {
								min: 0,
								border: { display: false },
								grid: theme.grid,
								ticks: {
									...theme.ticks(),
									maxTicksLimit: 5,
									callback: (label) => (Number(label) >= 1000 ? `${Number(label) / 1000}K` : label),
								},
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: PRODUCT_ENGAGEMENT.labels,
						datasets: [
							line("Daily active users", PRODUCT_ENGAGEMENT.daily, CHART_COLORS.pink),
							line("Weekly active users", PRODUCT_ENGAGEMENT.weekly, CHART_COLORS.sky),
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Daily active users", color: "bg-pink-400" },
					{ label: "Weekly active users", color: "bg-sky-500" },
				]}
			/>
		</Card>
	);
}
