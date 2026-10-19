import { Info, Send } from "lucide-react";
import { Line } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, areaGradient, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { SENT_VS_NOT_SENT } from "@/data/email-marketing";

export function SentVsNotSent() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
						<Send />
					</span>
					Sent vs Not Sent
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-5 h-66">
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: theme.ticks() },
							y: {
								min: 0,
								max: 200,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 6, callback: (label) => `${label}K` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: SENT_VS_NOT_SENT.labels,
						datasets: [
							{
								label: "Not Sent",
								data: SENT_VS_NOT_SENT.notSent,
								fill: true,
								backgroundColor: (context) => areaGradient(context, 0.75, alpha(CHART_COLORS.emerald, 0.25), alpha(CHART_COLORS.emerald, 0)),
								borderColor: CHART_COLORS.emerald,
								borderWidth: 1.25,
								tension: 0.4,
								pointRadius: 0,
								pointHoverBackgroundColor: CHART_COLORS.emerald,
							},
							{
								label: "Sent",
								data: SENT_VS_NOT_SENT.sent,
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
					{ label: "Sent", color: "bg-amber-400" },
					{ label: "Not Sent", color: "bg-emerald-500" },
				]}
			/>
		</Card>
	);
}
