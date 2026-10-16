import type { ComponentProps, ReactNode } from "react";
import { NavLink } from "react-router";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SECTIONS = [
	{ label: "About", to: "/user/profile" },
	{ label: "Timeline", to: "/user/timeline" },
	{ label: "Connections", to: "/user/connections" },
	{ label: "Photos", to: "/user/photos" },
	{ label: "Events", to: "/pages/coming-soon" },
	{ label: "Bookmarks", to: "/pages/coming-soon" },
	{ label: "Activity Log", to: "/pages/coming-soon" },
];

const pill = "shrink-0 rounded-full px-4 py-2.5 whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:bg-muted";
const activePill = "bg-sky-500/10 text-sky-500 hover:bg-sky-500/10";

/** The cover photo and section links at the top of the user pages. `children` adds a second row of filters under a rule. */
export function UserCover({ children }: { children?: ReactNode }) {
	return (
		<Card className="mb-4 p-0">
			<div className="p-2 pb-0">
				<img className="h-64 w-full rounded-t-lg rounded-b-sm object-cover" src="/img/misc/cover.jpeg" alt="" />
			</div>
			<nav className="no-scrollbar flex gap-px overflow-x-auto p-2 font-medium">
				{SECTIONS.map((section) => (
					<NavLink key={section.label} to={section.to} end className={({ isActive }) => cn(pill, isActive && activePill)}>
						{section.label}
					</NavLink>
				))}
			</nav>
			{children && <nav className="no-scrollbar flex gap-px overflow-x-auto border-t p-2 text-sm">{children}</nav>}
		</Card>
	);
}

/** One filter in the cover's second row. */
export function UserCoverFilter({ active, className, ...props }: ComponentProps<"a"> & { active?: boolean }) {
	return <a href="#" className={cn(pill, active && activePill, className)} {...props} />;
}
