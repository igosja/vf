import { Gauge, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { CAMPAIGN_PERFORMANCE } from "@/data/email-marketing";

export function CampaignPerformance() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
						<Gauge />
					</span>
					Campaign Performance
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="flex h-10 items-center justify-between rounded-lg px-3 text-sm text-muted-foreground">
				<div className="flex-1">Campaign</div>
				<div className="hidden w-20 text-right sm:block">Clicks</div>
				<div className="w-16 shrink-0 text-right sm:ml-2 sm:w-20">Conversions</div>
				<div className="w-20 shrink-0 text-right sm:ml-2">Revenue</div>
			</div>

			{CAMPAIGN_PERFORMANCE.map((item) => (
				<div key={item.campaign} className="flex h-11 items-center justify-between rounded-lg px-3 odd:bg-muted">
					<div className="flex-1 truncate">{item.campaign}</div>
					<div className="hidden w-20 text-right sm:block">{item.clicks}</div>
					<div className="w-16 shrink-0 text-right sm:ml-2 sm:w-20">{item.conversions}</div>
					<div className="w-20 shrink-0 text-right sm:ml-2">${item.revenue.toLocaleString()}</div>
				</div>
			))}
		</Card>
	);
}
