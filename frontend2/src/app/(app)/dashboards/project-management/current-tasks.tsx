import { Info, SquareCheck } from "lucide-react";
import type { ComponentProps } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { CURRENT_TASKS, type CurrentTask } from "@/data/project-management";

const RISK_VARIANT: Record<CurrentTask["risk"], ComponentProps<typeof Badge>["variant"]> = {
	"At Risk": "destructive",
	"On Track": "positive",
	Planned: "default",
	Delayed: "caution",
};

export function CurrentTasks() {
	return (
		<Card>
			<CardHeader className="mb-4">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-cyan-500/15 text-cyan-500 sm:grid">
						<SquareCheck />
					</span>
					Current Tasks
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			<div className="flex items-center justify-between py-3 text-sm text-muted-foreground">
				<div className="shrink-0 sm:w-40">Project</div>
				<div className="shrink-0 px-3 sm:w-16">Risk</div>
				<div className="hidden w-24 shrink-0 px-3 text-right sm:block">End Date</div>
				<div className="hidden w-14 shrink-0 ps-3 text-right sm:block">Done</div>
			</div>

			<div className="-mb-2">
				{CURRENT_TASKS.map((item) => (
					<div key={item.project} className="flex items-center justify-between border-t py-2.5">
						<div className="shrink-0 sm:w-40">{item.project}</div>
						<div className="shrink-0 px-3 sm:w-16">
							<Badge variant={RISK_VARIANT[item.risk]}>{item.risk}</Badge>
						</div>
						<div className="hidden w-24 shrink-0 ps-3 text-right sm:block">{item.endDate}</div>
						<div className="hidden w-14 shrink-0 ps-3 text-right sm:block">{item.completion}%</div>
					</div>
				))}
			</div>
		</Card>
	);
}
