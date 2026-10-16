export const BUDGET_EXPENSES = {
	labels: [
		"Q2 19",
		"Q3 19",
		"Q4 19",
		"Q1 20",
		"Q2 20",
		"Q3 20",
		"Q4 20",
		"Q1 21",
		"Q2 21",
		"Q3 21",
		"Q4 21",
		"Q1 22",
		"Q2 22",
		"Q3 22",
		"Q4 22",
		"Q1 23",
		"Q2 23",
		"Q3 23",
		"Q4 23",
	],
	expense: [114, 110, 110, 106, 108, 109, 106, 115, 110, 108, 108, 110, 105, 108, 105, 107, 106, 116, 107],
	budget: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 112, 111],
};

export const BUDGET_UTILIZATION = {
	labels: ["#3243", "#4546", "#3001", "#6079", "#9943", "#1930"],
	current: [83, 5, 69.25, 53, 0, 28],
	proposed: [70, 70, 70, 70, 70, 70],
};

export const PROJECTS_BY_STATUS = {
	labels: ["In Progress", "Completed", "Overdue", "On Hold", "Cancelled", "Planned"],
	projects: [96, 64, 35, 76, 14, 109],
};

/** One row per status. `color` is a text class; the dot takes it. */
export type StatusRow = {
	status: string;
	change: number;
	projects: number;
	percentage: number;
	up: boolean;
	color: string;
};

export const PROJECT_STATUSES: StatusRow[] = [
	{ status: "In Progress", change: 23.61, projects: 96, percentage: 24.3, up: true, color: "text-sky-500" },
	{ status: "Completed", change: 2.35, projects: 64, percentage: 16.2, up: true, color: "text-emerald-500" },
	{ status: "Overdue", change: 8.54, projects: 35, percentage: 8.8, up: false, color: "text-amber-500" },
	{ status: "On Hold", change: 3.22, projects: 76, percentage: 19.2, up: true, color: "text-cyan-500" },
	{ status: "Cancelled", change: 33.25, projects: 16, percentage: 4.1, up: false, color: "text-red-400" },
	{ status: "Planned", change: 0.83, projects: 4.1, percentage: 27.6, up: true, color: "text-purple-400" },
];

export type OverdueProject = {
	task: string;
	daysPassed: number;
	assignee: string;
	deadline: string;
};

export const OVERDUE_PROJECTS: OverdueProject[] = [
	{ task: "Gather stakeholder requirements for features.", daysPassed: 2, assignee: "John", deadline: "2023-09-01" },
	{ task: "Create wireframes and UI/UX concepts.", daysPassed: 5, assignee: "Emma", deadline: "2023-09-05" },
	{ task: "Develop backend and APIs.", daysPassed: 8, assignee: "Olivia", deadline: "2023-09-08" },
	{ task: "Code frontend and integrate APIs.", daysPassed: 10, assignee: "Michael", deadline: "2023-09-15" },
	{ task: "Perform unit testing and resolve errors.", daysPassed: 14, assignee: "Sophia", deadline: "2023-09-10" },
	{ task: "Conduct cross-browser compatibility testing.", daysPassed: 20, assignee: "Daniel", deadline: "2023-09-18" },
	{ task: "Deploy to production server.", daysPassed: 25, assignee: "Liam", deadline: "2023-09-20" },
	{ task: "Perform user acceptance testing.", daysPassed: 30, assignee: "Ava", deadline: "2023-09-25" },
];

export const TICKETS_REOPENED = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
	tickets: [105, 105, 105, 107, 105, 107, 106, 106, 107, 107, 107, 109, 107, 109, 106, 107, 106, 106, 109],
};

export type CurrentTask = {
	project: string;
	task: string;
	risk: "At Risk" | "On Track" | "Planned" | "Delayed";
	endDate: string;
	assignee: string;
	completion: number;
};

export const CURRENT_TASKS: CurrentTask[] = [
	{ project: "Website Redesign", task: "Develop User Registration Module", risk: "At Risk", endDate: "09-05", assignee: "John Smith", completion: 65 },
	{ project: "Mobile App Launch", task: "Design UI Mockups for Mobile App", risk: "On Track", endDate: "09-08", assignee: "Emily Brown", completion: 52 },
	{ project: "Software Upgrade", task: "Conduct User Acceptance Testing (UAT)", risk: "On Track", endDate: "09-12", assignee: "QA Team", completion: 73 },
	{ project: "Quarterly Report", task: "Prepare Project Status Report", risk: "On Track", endDate: "09-14", assignee: "Project Manager", completion: 41 },
	{
		project: "Marketing Campaign",
		task: "Review and Approve Marketing Materials",
		risk: "On Track",
		endDate: "09-18",
		assignee: "Marketing Team",
		completion: 62,
	},
	{
		project: "Code Optimization",
		task: "Code Refactoring for Performance Optimization",
		risk: "Planned",
		endDate: "09-20",
		assignee: "Development Team",
		completion: 76,
	},
	{
		project: "Employee Training",
		task: "Plan and Schedule Team Training Session",
		risk: "At Risk",
		endDate: "09-23",
		assignee: "Training Coordinator",
		completion: 58,
	},
	{
		project: "Documentation",
		task: "Update Documentation for New Feature Release",
		risk: "Delayed",
		endDate: "09-25",
		assignee: "Technical Writer",
		completion: 67,
	},
	{ project: "Budget Planning", task: "Finalize Budget Proposal for Q4", risk: "On Track", endDate: "09-28", assignee: "Finance Team", completion: 49 },
	{ project: "Client Engagement", task: "Conduct Client Feedback Session", risk: "Planned", endDate: "09-30", assignee: "Account Manager", completion: 71 },
];

export const PLANNED_VS_ACTUAL = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
	planned: [96, 64, 35, 76, 45, 109, 80, 50, 100],
	billable: [45, 50, 30, 60, 30, 70, 40, 10, 60],
	actual: [80, 78, 50, 64, 40, 87, 90, 40, 70],
};
