import { addDays } from "date-fns";
import { Info, Magnet } from "lucide-react";
import { Line } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LEAD_SOURCES, LEADS_SOURCES } from "@/data/crm";
import { cn } from "@/lib/utils";

const daily = (values: number[]) => values.map((y, i) => ({ x: addDays(LEADS_SOURCES.start, i).getTime(), y }));

const sourceLine = (label: string, values: number[], color: string) => ({
	label,
	data: daily(values),
	borderColor: color,
	borderWidth: 1.5,
	tension: 0.4,
	pointRadius: 0,
	pointHoverBackgroundColor: color,
});

export function LeadsSources() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-red-400/15 text-red-400 sm:grid">
						<Magnet />
					</span>
					Leads Sources
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-9 h-66">
				<Line
					options={{
						maintainAspectRatio: false,
						interaction: { mode: "index", intersect: false },
						layout: { padding: { left: -5 } },
						scales: {
							x: { type: "time", border: { display: false }, grid: { display: false }, ticks: { ...theme.ticks(), maxTicksLimit: 8 } },
							y: {
								min: 0,
								max: 200,
								border: { display: false },
								grid: theme.grid,
								ticks: { ...theme.ticks(), maxTicksLimit: 10, callback: (label) => `${label}K` },
							},
						},
						plugins: { legend: { display: false }, tooltip: theme.tooltip },
					}}
					data={{
						datasets: [
							sourceLine("Advertisements", LEADS_SOURCES.advertisements, CHART_COLORS.emerald),
							sourceLine("Cold Calls", LEADS_SOURCES.coldCalls, CHART_COLORS.purple),
							sourceLine("Custom Referrals", LEADS_SOURCES.customReferrals, CHART_COLORS.sky),
							sourceLine("Employee Referrals", LEADS_SOURCES.employeeReferrals, CHART_COLORS.red),
							sourceLine("Others", LEADS_SOURCES.others, CHART_COLORS.amber),
						],
					}}
				/>
			</div>

			{LEAD_SOURCES.map((item) => (
				<div key={item.label} className="flex items-start">
					<i className={cn("mt-1.5 mr-3 size-2.5 shrink-0 rounded-full bg-current", item.color)} />
					<div className="flex flex-1 flex-wrap items-center">
						<div className="flex-1 text-emphasis-foreground">{item.label}</div>
						<Trend up={item.up} iconEnd className="hidden justify-end sm:flex">
							{item.change}%
						</Trend>
						<div className="w-12 text-right text-base text-emphasis-foreground">{item.percentage}%</div>
						<Progress value={item.percentage} aria-label={item.label} className={cn("my-4 h-0.5", item.color)} />
					</div>
				</div>
			))}
		</Card>
	);
}
