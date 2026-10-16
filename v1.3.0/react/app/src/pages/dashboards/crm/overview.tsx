import { CalendarCheck, CircleArrowUp, Handshake, LifeBuoy, UserRoundPlus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Overview() {
	return (
		<div className="mb-4 grid grid-cols-1 gap-4 leading-none sm:grid-cols-2 lg:grid-cols-4">
			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
					<CalendarCheck className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-cyan-500">32</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							2.32%
						</Badge>
					</div>
					Appointments
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-sky-500/15 text-sky-500 sm:grid">
					<UserRoundPlus className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-sky-500">324</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							8.07%
						</Badge>
					</div>
					New leads today
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
					<Handshake className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-emerald-500">98</div>
						<Badge variant="destructive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							5.32%
						</Badge>
					</div>
					Opened Deals
				</div>
			</Card>

			<Card className="flex-row gap-4 p-5">
				<span className="hidden avatar-mask size-10.5 shrink-0 place-items-center bg-red-400/15 text-red-400 sm:grid">
					<LifeBuoy className="size-5.5" />
				</span>
				<div className="flex-1 text-emphasis-foreground">
					<div className="mb-1 flex items-center">
						<div className="mr-2 mb-1 text-lg leading-none font-medium text-red-400">452</div>
						<Badge variant="positive" className="-mt-1 ml-auto">
							<CircleArrowUp />
							33.47%
						</Badge>
					</div>
					Support Requests
				</div>
			</Card>
		</div>
	);
}
