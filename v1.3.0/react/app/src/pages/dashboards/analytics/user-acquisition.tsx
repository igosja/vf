import { AppWindow, Handshake, Info } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { USER_ACQUISITION, USER_ACQUISITION_SOURCES } from "@/data/analytics";
import { cn } from "@/lib/utils";

const thousands = (item: { formattedValue: string }) => `${item.formattedValue}K`;

export function UserAcquisition() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-2">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<Handshake />
					</span>
					User Acquisition
				</CardTitle>
				<Trend className="mr-3 hidden sm:flex">33.47%</Trend>
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

			<div className="mb-10 h-66">
				<Bar
					options={{
						maintainAspectRatio: false,
						layout: { padding: { left: -3 } },
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: theme.ticks(0) },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: { legend: { display: false }, tooltip: { ...theme.tooltip, callbacks: { label: thousands } } },
					}}
					data={{
						labels: USER_ACQUISITION.labels,
						// A clear border insets each bar, which leaves a gap between neighbours.
						datasets: [
							{ label: "Organic Search", data: USER_ACQUISITION.organic, backgroundColor: CHART_COLORS.sky },
							{ label: "Paid Search", data: USER_ACQUISITION.paid, backgroundColor: CHART_COLORS.emerald },
							{ label: "Direct", data: USER_ACQUISITION.direct, backgroundColor: CHART_COLORS.cyan },
							{ label: "Others", data: USER_ACQUISITION.others, backgroundColor: CHART_COLORS.amber },
						].map((dataset) => ({ ...dataset, borderRadius: 5, borderWidth: 1.5, borderColor: "transparent", barThickness: 7 })),
					}}
				/>
			</div>

			{USER_ACQUISITION_SOURCES.map((item) => (
				<div key={item.source} className="flex items-start">
					<i className={cn("mt-1.5 mr-3 size-2.5 shrink-0 rounded-full bg-current", item.color)} />
					<div className="flex flex-1 flex-wrap items-center">
						<div className="flex-1 text-emphasis-foreground">{item.source}</div>
						<div className="w-12 text-right text-base font-medium text-emphasis-foreground">{item.visits}</div>
						<Trend up={item.up} iconEnd className="ml-4 hidden w-14 justify-end sm:flex">
							{item.percentage}%
						</Trend>
						<Progress value={item.percentage} aria-label={item.source} className={cn("my-3 h-0.5", item.color)} />
					</div>
				</div>
			))}
		</Card>
	);
}
