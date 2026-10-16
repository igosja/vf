import { addDays } from "date-fns";
import { AppWindow, Info } from "lucide-react";
import { Line } from "react-chartjs-2";

import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { STORE_SESSIONS, type DailySeries } from "@/data/e-commerce";

const points = (series: DailySeries, values: number[]) => values.map((y, i) => ({ x: addDays(series.start, i).getTime(), y }));

export function StoreSessions() {
	const theme = useChartTheme();

	const options = {
		maintainAspectRatio: false,
		interaction: { mode: "index" as const, intersect: false },
		layout: { padding: { left: -5 } },
		scales: {
			x: { type: "time" as const, border: { display: false }, grid: theme.grid, ticks: { ...theme.ticks(), maxTicksLimit: 8 } },
			y: {
				min: 0,
				max: 100,
				border: { display: false },
				grid: theme.grid,
				ticks: { ...theme.ticks(), maxTicksLimit: 8, callback: (label: string | number) => `${label}K` },
			},
		},
		plugins: { legend: { display: false }, tooltip: theme.tooltip },
	};

	return (
		<Card>
			<CardHeader className="mb-4">
				<CardTitle>Store Sessions</CardTitle>
				<Trend up={false}>9.39%</Trend>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton>
						<AppWindow />
						<span className="sr-only">Open</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="h-66">
				<Line
					options={options}
					data={{
						datasets: [
							{
								label: "Current Month",
								data: points(STORE_SESSIONS, STORE_SESSIONS.current),
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.emerald, 0.15), alpha(CHART_COLORS.emerald, 0)),
								borderColor: CHART_COLORS.emerald,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.emerald,
							},
							{
								label: "Last Month",
								data: points(STORE_SESSIONS, STORE_SESSIONS.last),
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.amber, 0.3), alpha(CHART_COLORS.amber, 0)),
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
		</Card>
	);
}
