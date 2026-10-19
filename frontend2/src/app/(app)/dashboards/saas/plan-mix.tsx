import { Info, Layers } from "lucide-react";
import { Doughnut } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { PLAN_MIX } from "@/data/saas";
import { cn } from "@/lib/utils";

const MRR = PLAN_MIX.map((item) => item.price * item.subscribers);
const TOTAL_MRR = MRR.reduce((sum, value) => sum + value, 0);

export function PlanMix() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-2">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-purple-400/15 text-purple-400 sm:grid">
						<Layers />
					</span>
					Plan Mix
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="relative mb-8 h-52">
				<Doughnut
					options={{
						maintainAspectRatio: false,
						animation: false,
						cutout: "68%",
						plugins: {
							legend: { display: false },
							tooltip: { ...theme.tooltip, callbacks: { label: (item) => ` $${(item.raw as number).toLocaleString("en-US")} MRR` } },
						},
					}}
					data={{
						labels: PLAN_MIX.map((item) => item.plan),
						datasets: [
							{
								data: MRR,
								backgroundColor: [CHART_COLORS.cyan, CHART_COLORS.sky, CHART_COLORS.purple, CHART_COLORS.amber],
								borderWidth: 2,
								borderColor: theme.pieBorder,
								hoverOffset: 1,
								hoverBorderWidth: 0,
								borderRadius: 5,
							},
						],
					}}
				/>
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center leading-none">
					<div className="mb-1.5 text-xl text-emphasis-foreground">$84.2K</div>
					<div className="text-xs text-muted-foreground">MRR</div>
				</div>
			</div>

			{PLAN_MIX.map((item, i) => (
				<div key={item.plan} className="mb-4 flex items-center gap-3 last:mb-0">
					<i className={cn("size-2.5 shrink-0 rounded-full bg-current", item.color)} />
					<div className="flex-1 text-emphasis-foreground">
						{item.plan}
						<span className="ml-1 text-xs text-muted-foreground">${item.price}/seat</span>
					</div>
					<div className="hidden text-sm text-muted-foreground sm:block">{item.subscribers.toLocaleString("en-US")} subs</div>
					<div className="w-12 text-right text-base text-emphasis-foreground">{Math.round((MRR[i] / TOTAL_MRR) * 100)}%</div>
				</div>
			))}
		</Card>
	);
}
