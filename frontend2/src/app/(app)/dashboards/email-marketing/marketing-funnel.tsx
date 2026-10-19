import { AppWindow, CircleCheck, CircleDollarSign, Funnel, Info, Pointer, SendHorizontal, TrendingUp } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketingFunnel() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
						<Funnel />
					</span>
					Email Marketing Funnel
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="flex h-24 items-end rounded-t-lg bg-primary/10 px-5 pb-2">
				<SendHorizontal className="mr-3.5" />
				<div>Total Sent</div>
				<div className="ml-auto">98.2%</div>
				<div className="ml-5">10,982</div>
			</div>
			<div className="flex h-20 items-end bg-primary/25 px-5 pb-2">
				<CircleCheck className="mr-3.5" />
				<div>Delivered</div>
				<div className="ml-auto">75.1%</div>
				<div className="ml-5">9,721</div>
			</div>
			<div className="flex h-16 items-end bg-primary/50 px-5 pb-2">
				<AppWindow className="mr-3.5" />
				<div>Opens</div>
				<div className="ml-auto">59.8%</div>
				<div className="ml-5">7,212</div>
			</div>
			<div className="flex h-10 items-center rounded-b-lg bg-primary px-5 text-white">
				<Pointer className="mr-3.5" />
				<div>Clicks</div>
				<div className="ml-auto">34.5%</div>
				<div className="ml-5">4,943</div>
			</div>
			<div className="mt-3 flex items-center pl-5">
				<CircleDollarSign className="mr-3.5" />
				<div>Total Conversion Rate</div>
				<div className="text-md ml-auto flex items-center gap-2 rounded-lg bg-emerald-500/15 px-2 py-1 font-medium text-emerald-500">
					62.5%
					<TrendingUp className="size-4" />
				</div>
			</div>
		</Card>
	);
}
