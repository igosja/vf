import { CircleDollarSign, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { OPPORTUNITIES } from "@/data/crm";

export function Opportunities() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-purple-400/15 text-purple-400 sm:grid">
						<CircleDollarSign />
					</span>
					Opportunities
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="flex h-10 items-center justify-between rounded-lg px-3 text-sm text-muted-foreground">
				<div className="flex-1">Employee Name</div>
				<div className="hidden w-20 text-right sm:block">Qualified</div>
				<div className="w-10 shrink-0 text-right sm:w-20">Won</div>
				<div className="w-20 shrink-0 text-right sm:ml-2">Value</div>
			</div>

			{OPPORTUNITIES.map((item) => (
				<div key={item.name} className="flex h-12 items-center justify-between rounded-lg px-3 odd:bg-muted">
					<img className="mr-3 avatar-mask size-7 shrink-0" src={item.avatar} alt="" />
					<div className="flex-1 truncate">{item.name}</div>
					<div className="hidden w-20 text-right sm:block">{item.qualified}</div>
					<div className="w-10 shrink-0 text-right sm:w-20">{item.won}</div>
					<div className="w-20 shrink-0 text-right sm:ml-2">${item.value.toLocaleString()}</div>
				</div>
			))}
		</Card>
	);
}
