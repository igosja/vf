import { Earth, Info } from "lucide-react";

import { alpha, CHART_COLORS, paletteColor } from "@/components/charts/use-chart-theme";
import { VectorMap } from "@/components/charts/vector-map";
import { IconButton } from "@/components/common/icon-button";
import { Trend } from "@/components/common/trend";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ENGAGEMENT_MARKERS, GEOGRAPHICAL_ENGAGEMENTS } from "@/data/email-marketing";

const MOST_CLICKS = Math.max(...ENGAGEMENT_MARKERS.map((marker) => marker.clicks));

/** A shade darker than the map's amber, so the dots stand out on it. */
const MARKER = paletteColor("--color-amber-600");

/** The busier the country, the stronger and larger its dot: 25 to 90% opacity, 3 to 10px radius. */
const markerStyle = (clicks: number) => {
	const share = clicks / MOST_CLICKS;
	return { fill: alpha(MARKER, +(0.25 + 0.65 * share).toFixed(2)), r: Math.round(3 + 7 * share) };
};

const ENGAGEMENT_MAP = {
	regionStyle: {
		initial: { fill: alpha(CHART_COLORS.amber, 0.25), fillOpacity: 1, stroke: "transparent", strokeWidth: 1 },
		hover: { fillOpacity: 1 },
	},
	markerStyle: { hover: { fill: alpha(MARKER, 0.9) } },
	markers: ENGAGEMENT_MARKERS.map((marker) => ({
		name: marker.name,
		coords: marker.coords,
		style: { initial: { strokeWidth: 1, stroke: alpha(MARKER, 0.4), ...markerStyle(marker.clicks) } },
	})),
};

export function GeographicalEngagements() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
						<Earth />
					</span>
					Geographical Engagements
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<VectorMap options={ENGAGEMENT_MAP} className="mb-5" />

			{GEOGRAPHICAL_ENGAGEMENTS.map((item) => (
				<div key={item.country} className="group flex items-start">
					<img className="mr-4 w-6 rounded-full" src={item.flag} alt="" />
					<div className="mb-2 flex flex-1 items-center border-b pb-2 group-last:mb-0 group-last:border-b-0 group-last:pb-0">
						<div className="flex-1">
							<div className="text-emphasis-foreground">{item.country}</div>
							<span className="text-xs text-muted-foreground">{item.count} Clicks</span>
						</div>
						<Trend up={item.up} className="ml-auto justify-end">
							{item.change}%
						</Trend>
						<div className="w-12 text-right text-base text-emphasis-foreground">{item.percentage}%</div>
					</div>
				</div>
			))}
		</Card>
	);
}
