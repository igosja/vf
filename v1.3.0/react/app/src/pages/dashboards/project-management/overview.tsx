import { CircleArrowDown, CircleArrowUp, CircleDollarSign, ListPlusIcon, PiggyBank, Receipt } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Overview() {
	return (
		<div className="mb-4 grid grid-cols-1 gap-4 leading-none sm:grid-cols-2 lg:grid-cols-4">
			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-amber-400/15 text-amber-500 sm:grid">
					<ListPlusIcon className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-amber-500">687</div>
						<Badge variant="destructive" className="-mt-1 ml-auto">
							<CircleArrowDown />
							2.01%
						</Badge>
					</div>
					Total Projects
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
					<Receipt className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-emerald-500">$284.92K</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							8.98%
						</Badge>
					</div>
					Total Expenses
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
					<CircleDollarSign className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-sky-500">28.35%</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							13.45%
						</Badge>
					</div>
					Budget Spent
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
					<PiggyBank className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-cyan-500">$982.12K</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							0.54%
						</Badge>
					</div>
					Total Budget
				</div>
			</Card>
		</div>
	);
}
