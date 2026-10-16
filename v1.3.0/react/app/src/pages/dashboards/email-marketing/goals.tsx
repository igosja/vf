import { CircleCheck, Flag, Info } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Goals() {
	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-emerald-500/15 text-emerald-500 sm:grid">
						<Flag />
					</span>
					Monthly Goals
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="mb-8">
				<div className="mb-5 flex items-end gap-5">
					<div className="flex-1">
						<div className="mb-1 flex items-end">
							Time Passed:
							<span className="ml-auto text-sm">100%</span>
						</div>
						<Progress value={100} aria-label="Time passed" className="h-2 text-emerald-500" />
					</div>
					<CircleCheck className="text-emerald-500" />
				</div>

				<div className="mb-5 flex items-end gap-5">
					<div className="flex-1">
						<div className="mb-1 flex items-end">
							Sent:
							<span className="ml-auto text-sm">4220/5000</span>
						</div>
						<Progress value={84} aria-label="Sent" className="h-2 text-amber-500" />
					</div>
					<CircleCheck className="text-muted-foreground opacity-50" />
				</div>

				<div className="mb-5 flex items-end gap-5">
					<div className="flex-1">
						<div className="mb-1 flex items-end">
							Clicks:
							<span className="ml-auto text-sm">2984/5000</span>
						</div>
						<Progress value={60} aria-label="Clicks" className="h-2 text-cyan-500" />
					</div>
					<CircleCheck className="text-muted-foreground opacity-50" />
				</div>

				<div className="flex items-end gap-5">
					<div className="flex-1">
						<div className="mb-1 flex items-end">
							Subscribes:
							<span className="ml-auto text-sm">2451/5000</span>
						</div>
						<Progress value={49} aria-label="Subscribes" className="h-2" />
					</div>
					<CircleCheck className="text-muted-foreground opacity-50" />
				</div>
			</div>

			<p className="text-sm">
				Accumulated Goals for the Specified Months. Each bar visually represents both the set target and the current achievement, allowing easy
				comparison and tracking of progress.
			</p>
		</Card>
	);
}
