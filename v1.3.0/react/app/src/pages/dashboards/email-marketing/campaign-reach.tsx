import { BadgeCheck, Info } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { ChartLegend } from "@/components/charts/chart-legend";
import { alpha, CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { CAMPAIGN_REACH } from "@/data/email-marketing";

export function CampaignReach() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<BadgeCheck />
					</span>
					Campaigns Reach
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
						scales: {
							x: {
								stacked: true,
								border: { display: false },
								grid: { display: false },
								ticks: { ...theme.ticks(0, "center"), maxTicksLimit: 10 },
							},
							y: {
								stacked: true,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 6, callback: (label) => `${label}K` },
							},
						},
						plugins: {
							legend: { display: false },
							tooltip: { ...theme.tooltip, callbacks: { label: (item) => `${item.formattedValue}K` } },
						},
					}}
					data={{
						labels: CAMPAIGN_REACH.labels,
						datasets: [
							{ label: "Impressions", data: CAMPAIGN_REACH.impressions, backgroundColor: alpha(CHART_COLORS.sky, 0.25) },
							{ label: "Views", data: CAMPAIGN_REACH.views, backgroundColor: alpha(CHART_COLORS.sky, 0.75) },
							{ label: "Clicks", data: CAMPAIGN_REACH.clicks, backgroundColor: CHART_COLORS.amber },
						].map((dataset) => ({ ...dataset, categoryPercentage: 0.25, borderWidth: 0, borderRadius: 5 })),
					}}
				/>
			</div>

			<ChartLegend
				items={[
					{ label: "Impressions", color: "bg-sky-500/25" },
					{ label: "Views", color: "bg-sky-500/75" },
					{ label: "Clicks", color: "bg-amber-400" },
				]}
			/>
		</Card>
	);
}
