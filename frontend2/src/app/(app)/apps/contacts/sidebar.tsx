import { Clock, Download, Folder, Heart, Printer, SquareUser, Trash2, Upload, UserRoundPlus, Users } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";

const GROUPS = [
	{ label: "Most Important", color: "text-emerald-500" },
	{ label: "Work", color: "text-amber-500" },
	{ label: "Family", color: "text-sky-500" },
	{ label: "Projects", color: "text-red-400" },
	{ label: "Recent Leads", color: "text-purple-400" },
];

export function ContactsSidebar() {
	return (
		<SecondarySidebar
			title="Contacts"
			action={
				<ActionButton>
					<UserRoundPlus />
					Create New
				</ActionButton>
			}
		>
			<SecondarySidebarLabel className="mb-3">My Contacts</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink active>
					<SquareUser />
					All Contacts
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Heart />
					Favourites
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Clock />
					Frequently Contacted
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Users />
					Duplicates
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Trash2 />
					Deleted Contacts
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel className="mb-3">Groups</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{GROUPS.map((group) => (
					<SecondarySidebarLink key={group.label}>
						<Folder className={group.color} />
						{group.label}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>

			<SecondarySidebarLabel className="mb-3">Actions</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink>
					<Upload />
					Import
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Download />
					Export
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Printer />
					Print
				</SecondarySidebarLink>
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}
