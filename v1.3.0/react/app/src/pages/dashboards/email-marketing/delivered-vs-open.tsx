import { Download, Info, MailOpen, Printer } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { DELIVERED_VS_OPEN } from "@/data/email-marketing";

export function DeliveredVsOpen() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-teal-500/15 text-teal-500 sm:grid">
						<MailOpen />
					</span>
					Delivered vs Open
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
				<Bar
					options={{
						maintainAspectRatio: false,
						layout: { padding: { left: -5, right: 1 } },
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: { ...theme.ticks(0), maxTicksLimit: 10 } },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						labels: DELIVERED_VS_OPEN.labels,
						datasets: [
							{
								label: "Opened",
								data: DELIVERED_VS_OPEN.opened,
								backgroundColor: CHART_COLORS.teal,
								categoryPercentage: 0.25,
								borderRadius: 15,
								borderWidth: 0,
								grouped: false,
								maxBarThickness: 6,
							},
							{
								label: "Delivered",
								data: DELIVERED_VS_OPEN.delivered,
								backgroundColor: alpha(CHART_COLORS.teal, 0.25),
								categoryPercentage: 0.5,
								borderRadius: 15,
								borderWidth: 0,
								maxBarThickness: 12,
							},
						],
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Opened", color: "bg-teal-500" },
					{ label: "Delivered", color: "bg-teal-500/25" },
				]}
			/>
		</Card>
	);
}
