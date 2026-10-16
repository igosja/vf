import { AppWindow, Info, Users } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ACTIVE_PAGES, ACTIVE_USERS } from "@/data/analytics";

const thousands = (item: { formattedValue: string }) => `${item.formattedValue}K`;

export function ActiveUsers() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-4">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-teal-500/15 text-teal-500 sm:grid">
						<Users />
					</span>
					Active Users
				</CardTitle>
				<Trend positive={false} className="mr-3 hidden sm:flex">
					23.65%
				</Trend>
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

			<div className="mb-5 h-66">
				<Bar
					options={{
						maintainAspectRatio: false,
						scales: {
							x: { border: { display: false }, grid: { display: false }, ticks: theme.ticks(0, "center") },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: { legend: { display: false }, tooltip: { ...theme.tooltip, callbacks: { label: thousands } } },
					}}
					data={{
						labels: ACTIVE_USERS.labels,
						datasets: [
							{
								label: "Users",
								data: ACTIVE_USERS.users,
								backgroundColor: CHART_COLORS.emerald,
								barThickness: 3,
								borderWidth: 0,
								borderRadius: 10,
							},
						],
					}}
				/>
			</div>

			<div className="pt-px">
				{ACTIVE_PAGES.map((item) => (
					<div key={item.page} className="flex items-center border-b py-2.5 last:border-b-0">
						<div className="flex-1 text-emphasis-foreground">{item.page}</div>
						<div className="text-base font-medium text-emphasis-foreground">{item.users}</div>
						<Trend up={item.up} iconEnd className="ml-4 hidden w-14 justify-end sm:flex">
							{item.percentage}%
						</Trend>
					</div>
				))}
			</div>
		</Card>
	);
}
