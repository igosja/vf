import { ChartColumn, Download, Info, Printer } from "lucide-react";
import { Chart } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { MRR_MOVEMENT } from "@/data/saas";

const NET = MRR_MOVEMENT.new.map((value, i) => +(value + MRR_MOVEMENT.expansion[i] + MRR_MOVEMENT.churned[i]).toFixed(1));

const bar = (label: string, data: number[], color: string) => ({
	type: "bar" as const,
	label,
	data,
	backgroundColor: color,
	// The object form rounds every segment, not only the ends of the stack.
	borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
	borderSkipped: false,
	// A clear 1px border insets every segment, which leaves 2px between stacked neighbours.
	borderWidth: 1,
	borderColor: "transparent",
	categoryPercentage: 0.5,
	// 2px wider to make up for the inset, so the visible bar stays 10px.
	maxBarThickness: 12,
	stack: "mrr",
	order: 2,
});

export function MrrMovement() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<ChartColumn />
					</span>
					MRR Movement
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

			<div className="mb-6 grid grid-cols-2 gap-3 leading-tight md:grid-cols-4">
				<div className="flex flex-col rounded-xl border px-4 py-3">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Net new MRR
						<i className="ml-auto size-2 shrink-0 rounded-full bg-amber-400" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emphasis-foreground">+$11.2K</div>
				</div>
				<div className="flex flex-col rounded-xl border px-4 py-3">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						New business
						<i className="ml-auto size-2 shrink-0 rounded-full bg-emerald-500" />
					</div>
					<div className="mt-auto text-lg leading-tight text-emerald-500">+$10.2K</div>
				</div>
				<div className="hidden flex-col rounded-xl border px-4 py-3 md:flex">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Expansion revenue
						<i className="ml-auto size-2 shrink-0 rounded-full bg-sky-500" />
					</div>
					<div className="mt-auto text-lg leading-tight text-sky-500">+$4.1K</div>
				</div>
				<div className="hidden flex-col rounded-xl border px-4 py-3 md:flex">
					<div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
						Churned revenue
						<i className="ml-auto size-2 shrink-0 rounded-full bg-red-400" />
					</div>
					<div className="mt-auto text-lg leading-tight text-red-400">-$3.1K</div>
				</div>
			</div>

			<div className="mb-5 h-66">
				<Chart
					type="bar"
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5, bottom: -5 } },
						scales: {
							x: { stacked: true, border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
							y: {
								stacked: true,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 7, callback: (label) => `$${label}K` },
							},
						},
						plugins: {
							legend: { display: false },
							tooltip: {
								...theme.tooltip,
								callbacks: {
									label: (item) => {
										const value = item.raw as number;
										return `${item.dataset.label}: ${value < 0 ? "-" : ""}$${Math.abs(value)}K`;
									},
								},
							},
						},
					}}
					data={{
						labels: MRR_MOVEMENT.labels,
						datasets: [
							{
								type: "line",
								label: "Net new MRR",
								data: NET,
								borderColor: CHART_COLORS.amber,
								borderWidth: 1.5,
								tension: 0.4,
								pointRadius: 0,
								pointHoverRadius: 4,
								pointBackgroundColor: CHART_COLORS.amber,
								order: 1,
							},
							bar("New", MRR_MOVEMENT.new, CHART_COLORS.emerald),
							bar("Expansion", MRR_MOVEMENT.expansion, CHART_COLORS.sky),
							bar("Churned", MRR_MOVEMENT.churned, CHART_COLORS.red),
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "New", color: "bg-emerald-500" },
					{ label: "Expansion", color: "bg-sky-500" },
					{ label: "Churned", color: "bg-red-400" },
					{ label: "Net new MRR", color: "bg-amber-400" },
				]}
			/>
		</Card>
	);
}
