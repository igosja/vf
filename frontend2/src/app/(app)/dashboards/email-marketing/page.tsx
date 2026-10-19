"use client";

import { CirclePlus, Grid2x2, Info } from "lucide-react";

import { DateRangePicker } from "@/components/common/date-range-picker";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

import { CampaignPerformance } from "./campaign-performance";
import { CampaignReach } from "./campaign-reach";
import { CampaignSales } from "./campaign-sales";
import { DeliveredVsOpen } from "./delivered-vs-open";
import { GeographicalEngagements } from "./geographical-engagements";
import { Goals } from "./goals";
import { MarketingFunnel } from "./marketing-funnel";
import { OpenRateByDevice } from "./open-rate-by-device";
import { Overview } from "./overview";
import { SentVsNotSent } from "./sent-vs-not-sent";

export default function EmailMarketing() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Email Marketing">
				<DateRangePicker className="ml-auto hidden md:flex" defaultValue={{ from: new Date(2023, 6, 10), to: new Date(2023, 6, 13) }} />

				<div className="ml-auto flex gap-1.5 md:ml-4">
					<IconButton>
						<CirclePlus />
						<span className="sr-only">Add</span>
					</IconButton>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton>
						<Grid2x2 />
						<span className="sr-only">Customize</span>
					</IconButton>
				</div>
			</ContentHeader>

			<Overview />

			<div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<DeliveredVsOpen />
				<CampaignSales />
			</div>

			<div className="columns-1 gap-4 *:mb-4 *:break-inside-avoid lg:columns-2 2xl:columns-3">
				<OpenRateByDevice />
				<CampaignPerformance />
				<MarketingFunnel />
				<Goals />
				<SentVsNotSent />
				<CampaignReach />
				<GeographicalEngagements />
			</div>
		</div>
	);
}
