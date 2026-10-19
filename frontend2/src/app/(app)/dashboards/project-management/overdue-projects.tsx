import { AlarmClock, Info, OctagonAlert } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { OVERDUE_PROJECTS } from "@/data/project-management";
import { cn } from "@/lib/utils";

export function OverdueProjects() {
	return (
		<Card>
			<CardHeader className="mb-7">
				<CardTitle className="-mt-0.5 flex items-center gap-3">
					<span className="hidden avatar-mask size-8 place-items-center bg-amber-400/25 text-amber-500 sm:grid">
						<AlarmClock />
					</span>
					Overdue Projects
				</CardTitle>
				<CardAction>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
				</CardAction>
			</CardHeader>

			{OVERDUE_PROJECTS.map((item) => {
				const late = item.daysPassed > 10;
				return (
					<div key={item.task} className="group flex items-start leading-none">
						<div
							className={cn(
								"mr-3 grid size-10 shrink-0 place-content-center rounded-lg border",
								late ? "border-red-400/50 text-red-400" : "border-amber-400/50 text-amber-500"
							)}
						>
							{item.daysPassed}D
						</div>
						<div className="mb-4 min-w-0 flex-1 border-b pb-4 group-last:mb-0 group-last:border-b-0 group-last:pb-0">
							<div className="mb-1 truncate">{item.task}</div>
							<div className="flex items-center gap-1 text-xs text-muted-foreground">
								<span className="rounded-sm border px-2 py-1">Assignee: {item.assignee}</span>
								<span className="rounded-sm border px-2 py-1">Deadline: {item.deadline}</span>
							</div>
						</div>
						<OctagonAlert className={cn("mt-2 ml-3 hidden sm:block", late ? "text-red-400" : "text-amber-500")} />
					</div>
				);
			})}
		</Card>
	);
}
