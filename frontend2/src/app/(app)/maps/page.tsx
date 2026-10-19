"use client";

import { CHART_COLORS } from "@/components/charts/use-chart-theme";
import { VectorMapWithAllMaps as VectorMap } from "@/components/charts/vector-map";
import { ContentHeader } from "@/components/layout/content-header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

/** Each map, its projection and its fill. Kept outside the component, since a new options object redraws the map. */
const MAPS = [
	{ title: "World", map: "world", fill: CHART_COLORS.sky },
	{ title: "World - Mercator", map: "world_merc", fill: CHART_COLORS.emerald },
	{ title: "USA - Miller", map: "us_mill_en", fill: CHART_COLORS.cyan },
	{ title: "USA - Mercator", map: "us_merc_en", fill: CHART_COLORS.red },
	{ title: "USA - Lambert Conformal Conic", map: "us_lcc_en", fill: CHART_COLORS.amber },
	{ title: "USA - Albers Equal Area", map: "us_aea_en", fill: CHART_COLORS.purple },
	{ title: "Spain", map: "spain", fill: CHART_COLORS.indigo },
	{ title: "Canada", map: "canada", fill: CHART_COLORS.lime },
].map((item) => ({ ...item, options: { map: item.map, regionStyle: { initial: { fill: item.fill } } } }));

export default function Maps() {
	return (
		<>
			<ContentHeader title="Maps" breadcrumb={["Miscellaneous", "Charts and Maps", "Maps"]} toc />

			<div className="mx-auto grid max-w-300 gap-4 pb-4 lg:grid-cols-2">
				{MAPS.map((item) => (
					<Card key={item.map}>
						<CardHeader className="mb-5">
							<CardTitle>{item.title}</CardTitle>
						</CardHeader>
						<div>
							<VectorMap options={item.options} />
						</div>
					</Card>
				))}
			</div>
		</>
	);
}
