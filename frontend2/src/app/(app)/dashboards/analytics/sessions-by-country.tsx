import { Compass, Info } from "lucide-react";
import { Bar } from "react-chartjs-2";

import { CHART_COLORS, useChartTheme } from "@/components/charts/use-chart-theme";
import { VectorMap } from "@/components/charts/vector-map";
import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { SESSIONS_BY_COUNTRY, SESSIONS_BY_COUNTRY_MAP } from "@/data/analytics";

const SESSIONS_MAP = {
	regionStyle: {
		initial: { fill: "INITIAL_FILL", fillOpacity: 1, stroke: "transparent", strokeWidth: 1 },
		hover: { fillOpacity: 0.95 },
	},
	series: { regions: [{ attributes: Object.fromEntries(Object.keys(SESSIONS_BY_COUNTRY_MAP).map((code) => [code, CHART_COLORS.amber])) }] },
};

const thousands = (item: { formattedValue: string }) => `${item.formattedValue}K`;

export function SessionsByCountry() {
	const theme = useChartTheme();

	return (
		<Card>
			<CardHeader className="mb-8">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
						<Compass />
					</span>
					Sessions by Country
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<VectorMap options={SESSIONS_MAP} className="mb-5" />

			<div className="h-52">
				<Bar
					options={{
						maintainAspectRatio: false,
						indexAxis: "y",
						scales: {
							x: { border: { display: false }, grid: theme.grid, ticks: { ...theme.ticks(), callback: (label) => `${label}K` } },
							y: { border: { display: false }, grid: theme.grid, ticks: theme.ticks() },
						},
						plugins: { legend: { display: false }, tooltip: { ...theme.tooltip, callbacks: { label: thousands } } },
					}}
					data={{
						labels: SESSIONS_BY_COUNTRY.labels,
						datasets: [
							{
								label: "Sessions",
								data: SESSIONS_BY_COUNTRY.sessions,
								backgroundColor: CHART_COLORS.amber,
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
