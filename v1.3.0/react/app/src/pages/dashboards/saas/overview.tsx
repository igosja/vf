import { CircleArrowDown, CircleArrowUp, CircleDollarSign, Receipt, UserMinus, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Overview() {
	return (
		<div className="mb-4 grid grid-cols-1 gap-4 leading-none sm:grid-cols-2 xl:grid-cols-4">
			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
					<CircleDollarSign className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-cyan-500">$84,156</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							6.4%
						</Badge>
					</div>
					Monthly recurring revenue
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
					<Users className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-sky-500">3,248</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							4.1%
						</Badge>
					</div>
					Active subscribers
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-red-400/15 text-red-400 sm:grid">
					<UserMinus className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-red-400">2.1%</div>
						{/* Churn falling is good news, so the badge is green while the arrow points down. */}
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowDown />
							0.3%
						</Badge>
					</div>
					Monthly churn rate
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
					<Receipt className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-emerald-500">$25.91</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							1.8%
						</Badge>
					</div>
					Avg. revenue per user
				</div>
			</Card>
		</div>
	);
}
