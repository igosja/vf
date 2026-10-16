import {
	Archive,
	CalendarCheck,
	CalendarDays,
	CircleEllipsis,
	Clock,
	FileVideo,
	Flag,
	Info,
	Paperclip,
	Plus,
	Settings,
	SquareCheckBig,
	Trash2,
} from "lucide-react";
import { useState } from "react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TODO_DATA, type TodoItem } from "@/data/todo-lists";
import { cn } from "@/lib/utils";

import { TodoDetails } from "./details";

const LISTS = [
	{ label: "Pending Emails", count: 23 },
	{ label: "Leads" },
	{ label: "Marketing", count: 45 },
	{ label: "Pending Tests", count: 20 },
	{ label: "Project Management", count: 34 },
	{ label: "App Development", count: 12 },
	{ label: "Work" },
	{ label: "Personal" },
];

function TodoSidebar() {
	return (
		<SecondarySidebar
			title="Todo Lists"
			action={
				<ActionButton>
					<Plus />
					Create New
				</ActionButton>
			}
		>
			<SecondarySidebarLabel>Filters</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink active>
					<SquareCheckBig />
					Everything
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<CalendarCheck />
					Today
				</SecondarySidebarLink>
				<SecondarySidebarLink badge={29}>
					<Clock />
					Upcoming
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Flag />
					Important
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Archive />
					Archive
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Trash2 />
					Deleted Lists
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Lists</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{LISTS.map((list) => (
					<SecondarySidebarLink key={list.label} badge={list.count}>
						<FileVideo />
						{list.label}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}

export default function TodoLists() {
	const [completed, setCompleted] = useState(() => TODO_DATA.filter((item) => item.completed).map((item) => item.id));
	const [open, setOpen] = useState<TodoItem>(TODO_DATA[0]);

	return (
		<Dialog>
			<div className="flex items-start">
				<TodoSidebar />

				<div className="min-w-0 flex-1 pb-4">
					<ContentHeader>
						<SearchField className="w-full max-w-140" placeholder="Search Todo..." aria-label="Search todo" shortcut />
						<div className="mr-2 ml-auto flex gap-2">
							<IconButton className="hidden sm:grid">
								<Info />
								<span className="sr-only">Info</span>
							</IconButton>
							<IconButton className="hidden sm:grid">
								<Settings />
								<span className="sr-only">Settings</span>
							</IconButton>
							<IconButton>
								<CircleEllipsis />
								<span className="sr-only">More</span>
							</IconButton>
						</div>
					</ContentHeader>

					<Card className="p-0">
						<div className="flex items-center border-b px-5 pt-4 pb-3.5 text-xs text-muted-foreground">
							214 Tasks completed in total.
							<nav className="ms-auto hidden items-center gap-2 sm:flex">
								<a href="#" className="hover:underline">
									Show Completed
								</a>
								<a href="#" className="hover:underline">
									Archive Stale
								</a>
							</nav>
						</div>

						{TODO_DATA.map((item) => {
							const done = completed.includes(item.id);

							return (
								<div key={item.id} className="flex items-center border-b transition-colors last:border-b-0 hover:bg-accent/30">
									<i className={cn("mr-3 ml-4 h-5 w-1 shrink-0 rounded-lg opacity-75", item.color)} />
									<Checkbox
										className="mr-4"
										checked={done}
										onCheckedChange={(checked) =>
											setCompleted((current) => (checked === true ? [...current, item.id] : current.filter((id) => id !== item.id)))
										}
										aria-label={`Mark "${item.title}" done`}
									/>
									<DialogTrigger
										onClick={() => setOpen(item)}
										className={cn(
											"flex min-w-0 flex-1 items-center py-3.5 pr-6 text-left transition-colors",
											done && "line-through opacity-75"
										)}
									>
										<span className="flex-1 truncate">{item.title}</span>
										{item.due.date && (
											<span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
												<CalendarDays className="size-4" />
												{item.due.date}
											</span>
										)}
										{item.files.length > 0 && (
											<span className="ml-4 hidden items-center gap-1 text-xs text-muted-foreground lg:flex">
												<Paperclip className="size-4" />
												{item.files.length} {item.files.length > 1 ? "Attachments" : "Attachment"}
											</span>
										)}
									</DialogTrigger>
								</div>
							);
						})}
					</Card>
				</div>

				<ActionButton floating>
					<Plus />
					<span className="hidden md:inline">Create New</span>
				</ActionButton>
			</div>

			<TodoDetails key={open.id} item={open} />
		</Dialog>
	);
}
