import { Info, Star } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { TOP_RAINMAKERS } from "@/data/crm";

export function TopRainmakers() {
	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-red-400/15 text-red-400 sm:grid">
						<Star />
					</span>
					Top Rainmakers
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			{TOP_RAINMAKERS.map((item) => (
				<div key={item.name} className="mb-5 flex items-center gap-4 last:mb-2">
					<img className="avatar-mask size-9" src={item.avatar} alt="" />
					<div className="flex-1">
						<div className="mb-1">{item.name}</div>
						<div className="text-xs text-emerald-500">
							<span className="inline-block rounded border border-emerald-500/25 px-1.5 py-0.5">Deals Closed: {item.dealsClosed}</span>
							<span className="ml-0.5 hidden rounded border border-emerald-500/25 px-2 py-0.5 sm:inline-block">
								Performance: {item.performance}
							</span>
						</div>
					</div>
					<div className="text-base">${item.totalSales.toLocaleString("en-US")}</div>
				</div>
			))}
		</Card>
	);
}
