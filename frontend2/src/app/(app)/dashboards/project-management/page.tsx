"use client";

import { CirclePlus, Grid2x2, Info } from "lucide-react";

import { DateRangePicker } from "@/components/common/date-range-picker";
import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

import { BudgetExpenses } from "./budget-expenses";
import { BudgetUtilization } from "./budget-utilization";
import { CurrentTasks } from "./current-tasks";
import { Health } from "./health";
import { OverdueProjects } from "./overdue-projects";
import { Overview } from "./overview";
import { PlannedVsActual } from "./planned-vs-actual";
import { ProjectsByStatus } from "./projects-by-status";
import { TicketsReopened } from "./tickets-reopened";

export default function ProjectManagement() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Project Management">
				<DateRangePicker className="ml-auto hidden md:flex" defaultValue={{ from: new Date(2023, 6, 10), to: new Date(2023, 6, 13) }} />

				<div className="ml-auto flex gap-1.5 md:ml-4">
					<IconButton>
						<CirclePlus />
						<span className="sr-only">Add</span>
					</IconButton>
					<IconButton>
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton>
						<Grid2x2 />
						<span className="sr-only">Customize</span>
					</IconButton>
				</div>
			</ContentHeader>

			<Overview />

			<div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<BudgetExpenses />
				<BudgetUtilization />
			</div>

			<div className="columns-1 gap-4 *:mb-4 *:break-inside-avoid lg:columns-2 2xl:columns-3">
				<ProjectsByStatus />
				<Health />
				<OverdueProjects />
				<TicketsReopened />
				<CurrentTasks />
				<PlannedVsActual />
			</div>
		</div>
	);
}
