import { Hourglass, Info } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECT_STATUSES, PROJECTS_BY_STATUS } from "@/data/project-management";
import { cn } from "@/lib/utils";

/** One colour per status bar. */
const STATUS_COLORS = [CHART_COLORS.sky, CHART_COLORS.emerald, CHART_COLORS.amber, CHART_COLORS.cyan, CHART_COLORS.red, CHART_COLORS.purple];

export function ProjectsByStatus() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<Hourglass />
					</span>
					Projects by Status
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 h-66">
				<Bar
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
						labels: PROJECTS_BY_STATUS.labels,
						datasets: [
							{
								label: "Projects",
								data: PROJECTS_BY_STATUS.projects,
								backgroundColor: (context) =>
									areaGradient(context, 0.75, alpha(STATUS_COLORS[context.dataIndex], 0.25), alpha(STATUS_COLORS[context.dataIndex], 0)),
								borderColor: (context) =>
									areaGradient(context, 0.75, alpha(STATUS_COLORS[context.dataIndex], 0.9), alpha(STATUS_COLORS[context.dataIndex], 0.5)),
								borderRadius: 5,
								borderWidth: 1.25,
							},
						],
					}}
				/>
			</div>

			<div className="-mb-2">
				{PROJECT_STATUSES.map((item) => (
					<div key={item.status} className="group flex items-center">
						<i className={cn("mr-3 size-2.5 shrink-0 rounded-full bg-current", item.color)} />
						<div className="flex flex-1 items-center border-b py-3 group-last:border-b-0">
							<div className="flex-1">{item.status}</div>
							<Trend up={item.up} iconEnd className="hidden justify-end sm:flex">
								{item.change}
							</Trend>
							<div className="w-12 text-right text-base font-medium text-emphasis-foreground">{item.projects}</div>
							<div className="w-16 text-right text-base font-medium">{item.percentage}%</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}
