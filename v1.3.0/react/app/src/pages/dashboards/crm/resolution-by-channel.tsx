import { Info, Share2 } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { RESOLUTION_BY_CHANNEL } from "@/data/crm";

export function ResolutionByChannel() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-2">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-pink-400/15 text-pink-400 sm:grid">
						<Share2 />
					</span>
					Resolution by Channel
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="h-66">
				<Bar
					options={{
						maintainAspectRatio: false,
						indexAxis: "y",
						layout: { padding: { bottom: -5 } },
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: {
							legend: { display: false },
							tooltip: { ...theme.tooltip, callbacks: { label: (item) => `${item.formattedValue}K` } },
						},
					}}
					data={{
						labels: RESOLUTION_BY_CHANNEL.labels,
						datasets: [
							{
								label: "Resolved",
								data: RESOLUTION_BY_CHANNEL.resolved,
								backgroundColor: [
									CHART_COLORS.emerald,
									CHART_COLORS.purple,
									CHART_COLORS.cyan,
									CHART_COLORS.sky,
									CHART_COLORS.amber,
									CHART_COLORS.red,
									CHART_COLORS.teal,
								],
								barThickness: 3,
								borderWidth: 0,
								borderRadius: 10,
							},
						],
					}}
				/>
			</div>
		</Card>
	);
}
