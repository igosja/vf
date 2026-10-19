import { Clock, File, Flag, Folder, Inbox, Info, PenLine, Send, Star, Trash2 } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";

const CATEGORIES = [
	{ label: "Promotions", color: "text-emerald-500" },
	{ label: "Social", color: "text-amber-500" },
	{ label: "Work", color: "text-sky-500" },
	{ label: "Updates", color: "text-red-400" },
	{ label: "Forums", color: "text-purple-400" },
	{ label: "Conversations", color: "text-cyan-500" },
];

export function MailSidebar() {
	return (
		<SecondarySidebar
			title="Mail"
			action={
				<ActionButton>
					<PenLine />
					Compose Mail
				</ActionButton>
			}
		>
			<SecondarySidebarLabel>Mailboxes</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink active>
					<Inbox />
					Inbox
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Star />
					Starred
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Clock />
					Scheduled
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Flag />
					Important
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Send />
					Sent
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<File />
					Draft
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Info />
					Spam
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Trash2 />
					Trash
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Categories</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{CATEGORIES.map((category) => (
					<SecondarySidebarLink key={category.label}>
						<Folder className={category.color} />
						{category.label}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}
