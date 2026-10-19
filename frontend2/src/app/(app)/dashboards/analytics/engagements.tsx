import { Dumbbell, Info, TrendingUp } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export function Engagements() {
	return (
		<Card>
			<CardHeader className="mb-6">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-red-400/15 text-red-400 sm:grid">
						<Dumbbell />
					</span>
					Engagements
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="flex items-center border-b py-3">
				<div className="flex-1">
					<h4 className="mb-1 text-lg">4.970</h4>
					<div className="text-muted-foreground">Daily page views per visitor</div>
				</div>
				<div className="flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-2 text-base font-medium text-emerald-500">
					2.5%
					<TrendingUp className="size-4" />
				</div>
			</div>

			<div className="flex items-center border-b py-3">
				<div className="flex-1">
					<h4 className="mb-1 text-lg">8.375</h4>
					<div className="text-muted-foreground">Daily page views per visitor</div>
				</div>
				<div className="flex items-center gap-2 rounded-lg bg-red-400/15 px-3 py-2 text-base font-medium text-red-400">
					3.2%
					<TrendingUp className="size-4" />
				</div>
			</div>

			<div className="flex items-center pt-3">
				<div className="flex-1">
					<h4 className="mb-1 text-lg">65.3%</h4>
					<div className="text-muted-foreground">Average bounce rate</div>
				</div>
				<div className="flex items-center gap-2 rounded-lg bg-amber-400/15 px-3 py-2 text-base font-medium text-amber-500">
					0.1%
					<TrendingUp className="size-4" />
				</div>
			</div>
		</Card>
	);
}
