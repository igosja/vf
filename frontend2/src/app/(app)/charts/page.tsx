"use client";

import type { ReactNode } from "react";
import { Bar, Doughnut, Line, Pie, Scatter } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { ContentHeader } from "@/components/layout/content-header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BAR_SERIES, CHART_LABELS, LINE_SERIES, PIE_SERIES, SCATTER_SERIES } from "@/data/charts";

function ChartCard({ title, legend, children }: { title: string; legend: { label: string; color: string }[]; children: ReactNode }) {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<div className="mb-5 h-72">{children}</div>
			<ChartLegend items={legend} />
		</Card>
	);
}

/** The two-month key most charts here share. Pass whole class names, so Tailwind sees them. */
const twoMonths = (january: string, february: string) => [
	{ label: "January", color: january },
	{ label: "February", color: february },
];

export default function Charts() {
	const theme = useChartTheme();

	// Shared by every chart with axes. `horizontal` swaps which axis carries the grid.
	const axes = ({ stacked = false, horizontal = false } = {}) => ({
		maintainAspectRatio: false,
		indexAxis: horizontal ? ("y" as const) : ("x" as const),
		interaction: { mode: "index" as const, intersect: false },
		plugins: { legend: { display: false }, tooltip: theme.tooltip },
		scales: {
			x: {
				stacked,
				border: { display: false },
				grid: horizontal ? theme.grid : { display: false },
				ticks: theme.ticks(horizontal ? 8 : 0, horizontal ? "center" : "inner"),
			},
			y: { stacked, border: { display: false }, grid: horizontal ? { display: false } : theme.grid, ticks: theme.ticks() },
		},
	});

	const bars = (color: string, stacked = false) => [
		{
			label: "January",
			data: BAR_SERIES.january,
			backgroundColor: stacked ? color : alpha(color, 0.3),
			borderRadius: 4,
			maxBarThickness: 14,
		},
		{
			label: "February",
			data: BAR_SERIES.february,
			backgroundColor: stacked ? alpha(color, 0.3) : color,
			borderRadius: 4,
			maxBarThickness: 14,
		},
	];

	const lines = (color: string, tension: number) => [
		{ label: "January", data: LINE_SERIES.january, borderColor: alpha(color, 0.3), borderWidth: 2, pointRadius: 0, tension },
		{ label: "February", data: LINE_SERIES.february, borderColor: color, borderWidth: 2, pointRadius: 0, tension },
	];

	const pie = {
		maintainAspectRatio: false,
		plugins: { legend: { display: false }, tooltip: theme.tooltip },
	};

	const pieData = {
		labels: PIE_SERIES.labels,
		datasets: [
			{
				data: PIE_SERIES.data,
				backgroundColor: [CHART_COLORS.sky, CHART_COLORS.teal, CHART_COLORS.purple, CHART_COLORS.amber],
				borderColor: theme.pieBorder,
				borderWidth: 3,
			},
		],
	};

	const pieLegend = [
		{ label: "Jan", color: "bg-sky-500" },
		{ label: "Feb", color: "bg-teal-500" },
		{ label: "Mar", color: "bg-purple-400" },
		{ label: "Apr", color: "bg-amber-400" },
	];

	return (
		<>
			<ContentHeader title="Charts" breadcrumb={["Miscellaneous", "Charts and Maps"]} toc />

			<div className="mx-auto grid max-w-300 gap-4 pb-4 lg:grid-cols-2">
				<ChartCard title="Bar Chart" legend={twoMonths("bg-cyan-500/25", "bg-cyan-500")}>
					<Bar options={axes()} data={{ labels: CHART_LABELS, datasets: bars(CHART_COLORS.cyan) }} />
				</ChartCard>

				<ChartCard title="Horizontal Bar Chart" legend={twoMonths("bg-purple-400/30", "bg-purple-400")}>
					<Bar options={axes({ horizontal: true })} data={{ labels: CHART_LABELS, datasets: bars(CHART_COLORS.purple) }} />
				</ChartCard>

				<ChartCard title="Stacked Bar Chart" legend={twoMonths("bg-lime-500", "bg-lime-500/30")}>
					<Bar options={axes({ stacked: true })} data={{ labels: CHART_LABELS, datasets: bars(CHART_COLORS.lime, true) }} />
				</ChartCard>

				<ChartCard title="Stacked Horizontal Bar Chart" legend={twoMonths("bg-emerald-500", "bg-emerald-500/30")}>
					<Bar options={axes({ stacked: true, horizontal: true })} data={{ labels: CHART_LABELS, datasets: bars(CHART_COLORS.emerald, true) }} />
				</ChartCard>

				<ChartCard title="Line Chart" legend={twoMonths("bg-sky-500/30", "bg-sky-500")}>
					<Line options={axes()} data={{ labels: CHART_LABELS, datasets: lines(CHART_COLORS.sky, 0) }} />
				</ChartCard>

				<ChartCard title="Curved Line Chart" legend={twoMonths("bg-teal-500/25", "bg-teal-500")}>
					<Line options={axes()} data={{ labels: CHART_LABELS, datasets: lines(CHART_COLORS.teal, 0.4) }} />
				</ChartCard>

				<ChartCard title="Area Chart" legend={[{ label: "January", color: "bg-cyan-500" }]}>
					<Line
						options={axes()}
						data={{
							labels: CHART_LABELS,
							datasets: [
								{
									label: "January",
									data: LINE_SERIES.january,
									fill: true,
									borderColor: CHART_COLORS.cyan,
									backgroundColor: (context) => areaGradient(context, 1, alpha(CHART_COLORS.cyan, 0.25), alpha(CHART_COLORS.cyan, 0)),
									borderWidth: 2,
									pointRadius: 0,
									tension: 0.4,
								},
							],
						}}
					/>
				</ChartCard>

				<ChartCard title="Scatter Chart" legend={twoMonths("bg-amber-400/25", "bg-amber-400")}>
					<Scatter
						options={{
							maintainAspectRatio: false,
							plugins: { legend: { display: false }, tooltip: theme.tooltip },
							scales: {
								x: { border: { display: false }, grid: { display: false }, ticks: theme.ticks(0) },
								y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
							},
						}}
						data={{
							datasets: [
								{ label: "January", data: SCATTER_SERIES.january, backgroundColor: alpha(CHART_COLORS.amber, 0.3), pointRadius: 5 },
								{ label: "February", data: SCATTER_SERIES.february, backgroundColor: CHART_COLORS.amber, pointRadius: 5 },
							],
						}}
					/>
				</ChartCard>

				<ChartCard title="Pie Chart" legend={pieLegend}>
					<Pie options={pie} data={pieData} />
				</ChartCard>

				<ChartCard title="Doughnut Chart" legend={pieLegend}>
					<Doughnut options={{ ...pie, cutout: "70%" }} data={pieData} />
				</ChartCard>
			</div>
		</>
	);
}
