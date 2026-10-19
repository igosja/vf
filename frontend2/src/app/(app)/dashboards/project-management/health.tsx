import { CalendarCheck, ChartPie, CircleAlert, CircleCheck, CircleDollarSign, CircleEllipsis, Clock, HeartPulse, Info, OctagonAlert } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export function Health() {
	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-pink-400/15 text-pink-400 sm:grid">
						<HeartPulse />
					</span>
					Health
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="-mt-3">
				<div className="mt-3 flex items-center">
					<div className="w-28 shrink-0">
						<div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-emerald-500">
							<Clock />
							Time
						</div>
					</div>
					<div className="-mb-3 ml-2 flex-1 border-b pb-3">30% ahead of schedule</div>
					<CalendarCheck className="ml-3 hidden size-5 text-emerald-500 sm:block" />
				</div>

				<div className="mt-3 flex items-center">
					<div className="w-28 shrink-0">
						<div className="inline-flex items-center gap-1.5 rounded-lg bg-red-400/15 px-2.5 py-1.5 text-red-400">
							<CircleEllipsis />
							Workload
						</div>
					</div>
					<div className="-mb-3 ml-2 flex-1 border-b pb-3">5 tasks overdue</div>
					<OctagonAlert className="ml-3 hidden size-5 text-red-400 sm:block" />
				</div>

				<div className="mt-3 flex items-center">
					<div className="w-28 shrink-0">
						<div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400/15 px-2.5 py-1.5 text-amber-500">
							<CircleCheck />
							Tasks
						</div>
					</div>
					<div className="-mb-3 ml-2 flex-1 border-b pb-3">23 tasks to be completed</div>
					<CircleAlert className="ml-3 hidden size-5 text-amber-500 sm:block" />
				</div>

				<div className="mt-3 flex items-center">
					<div className="w-28 shrink-0">
						<div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-emerald-500">
							<ChartPie />
							Progress
						</div>
					</div>
					<div className="-mb-3 ml-2 flex-1 border-b pb-3">76% completed</div>
					<CalendarCheck className="ml-3 hidden size-5 text-emerald-500 sm:block" />
				</div>

				<div className="mt-3 flex items-center">
					<div className="w-28 shrink-0">
						<div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-emerald-500">
							<CircleDollarSign />
							Budget
						</div>
					</div>
					<div className="ml-2 flex-1">10.43% under budget</div>
					<CircleCheck className="ml-3 hidden size-5 text-emerald-500 sm:block" />
				</div>
			</div>
		</Card>
	);
}
