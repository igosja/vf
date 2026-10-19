"use client";

import {
	Archive,
	ArrowDownWideNarrow,
	ArrowLeft,
	CircleEllipsis,
	Clock,
	Info,
	MailOpen,
	OctagonAlert,
	Paperclip,
	PenLine,
	RotateCw,
	SquareCheckBig,
	Tag,
	Trash2,
	X,
} from "lucide-react";
import { useState } from "react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { ListRowAvatar } from "@/components/common/list-row-avatar";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MAIL_THREAD, MAILS } from "@/data/mail";
import { cn } from "@/lib/utils";

import { MailSidebar } from "./sidebar";
import { MailThread } from "./thread";

function Divider() {
	return <div className="mx-2 hidden h-5 w-px bg-input/25 md:block" />;
}

/** Archive, spam, delete, mark, snooze, task and label: the actions on a selection or an open mail. */
function MailActions() {
	return (
		<>
			<IconButton>
				<Archive />
				<span className="sr-only">Archive</span>
			</IconButton>
			<IconButton>
				<OctagonAlert />
				<span className="sr-only">Spam</span>
			</IconButton>
			<IconButton>
				<Trash2 />
				<span className="sr-only">Delete</span>
			</IconButton>
			<Divider />
			<IconButton className="hidden sm:grid">
				<MailOpen />
				<span className="sr-only">Mark as unread</span>
			</IconButton>
			<IconButton className="hidden md:grid">
				<Clock />
				<span className="sr-only">Schedule</span>
			</IconButton>
			<IconButton className="hidden md:grid">
				<SquareCheckBig />
				<span className="sr-only">Add to task</span>
			</IconButton>
			<Divider />
			<IconButton className="hidden md:grid">
				<Tag />
				<span className="sr-only">Add label</span>
			</IconButton>
			<IconButton>
				<CircleEllipsis />
				<span className="sr-only">More</span>
			</IconButton>
		</>
	);
}

export default function Mail() {
	const [selected, setSelected] = useState<number[]>([]);
	const [open, setOpen] = useState(false);

	const toggle = (index: number, checked: boolean) => setSelected((current) => (checked ? [...current, index] : current.filter((item) => item !== index)));
	const close = () => {
		setSelected([]);
		setOpen(false);
	};

	return (
		<div className="flex items-start">
			<MailSidebar />

			<div className="min-w-0 flex-1 pb-4">
				<ContentHeader menu={!open && selected.length === 0}>
					{open ? (
						<div className="flex flex-1 items-center gap-2 pr-2">
							<IconButton onClick={close} className="mr-3">
								<ArrowLeft />
								<span className="sr-only">Go back</span>
							</IconButton>
							<h2 className="hidden text-base font-medium xl:block">{MAIL_THREAD.subject}</h2>
							<div className="ml-auto flex items-center gap-2">
								<MailActions />
							</div>
						</div>
					) : selected.length > 0 ? (
						<div className="flex flex-1 items-center gap-2">
							<Checkbox
								className="mr-1 ml-8 hidden xl:grid"
								checked={selected.length === MAILS.length}
								onCheckedChange={(checked) => setSelected(checked === true ? MAILS.map((_, index) => index) : [])}
								aria-label="Select all"
							/>
							<div className="pl-8 xl:pl-0">
								{String(selected.length).padStart(2, "0")}
								<span className="hidden pl-2 sm:inline">Selected</span>
							</div>
							<div className="ml-auto flex items-center gap-2">
								<MailActions />
								<div className="mx-2 h-5 w-px bg-input/25" />
								<IconButton onClick={close} className="mr-1">
									<X />
									<span className="sr-only">Close</span>
								</IconButton>
							</div>
						</div>
					) : (
						<>
							<SearchField className="w-full max-w-140" placeholder="Search Mail..." aria-label="Search mail" shortcut />
							<nav className="mr-2 ml-auto flex gap-2">
								<IconButton className="hidden sm:grid">
									<RotateCw />
									<span className="sr-only">Reload</span>
								</IconButton>
								<IconButton>
									<ArrowDownWideNarrow />
									<span className="sr-only">Sort</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<Clock />
									<span className="sr-only">Schedule</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<Info />
									<span className="sr-only">Info</span>
								</IconButton>
								<IconButton>
									<CircleEllipsis />
									<span className="sr-only">More</span>
								</IconButton>
							</nav>
						</>
					)}
				</ContentHeader>

				{open ? (
					<MailThread />
				) : (
					<Card className="p-0">
						<div className="flex items-center border-b px-5 pt-4 pb-3.5 text-xs text-muted-foreground">
							Inbox - 20 messages, 8 unread.
							<nav className="ms-auto hidden items-center gap-2 sm:flex">
								<a href="#" className="hover:underline">
									Mark all as read
								</a>
								<a href="#" className="hover:underline">
									Filter
								</a>
							</nav>
						</div>

						{MAILS.map((mail, index) => (
							<div key={index} className="group/row flex items-center gap-4 border-b px-6 transition-colors last:border-b-0 hover:bg-accent/30">
								<div className="relative py-2">
									{mail.unread && <i className="absolute inset-y-0 left-0 my-auto -ml-2 size-1 rounded-full bg-primary" />}
									<ListRowAvatar
										src={mail.avatar}
										initial={mail.initial}
										color={mail.color}
										label={mail.subject}
										checked={selected.includes(index)}
										onCheckedChange={(checked) => toggle(index, checked)}
									/>
								</div>

								<button
									type="button"
									onClick={() => setOpen(true)}
									className="flex min-w-0 flex-1 items-center gap-4 overflow-hidden py-2 text-left"
								>
									<div className="min-w-0 flex-1 items-center gap-3 truncate md:flex">
										<div className={cn("flex shrink-0 items-center gap-3 md:w-40", mail.unread && "font-bold text-emphasis-foreground")}>
											<div className="truncate">{mail.from}</div>
											<div className="ml-auto text-xs font-normal text-muted-foreground md:hidden">{mail.time.short}</div>
										</div>
										<div className={cn("truncate text-sm", mail.unread && "font-medium text-emphasis-foreground")}>{mail.subject}</div>
									</div>

									{mail.attachment && <Paperclip className="hidden text-muted-foreground md:block" />}

									<div className="ml-auto hidden text-xs text-muted-foreground md:block">{mail.time.short}</div>
								</button>
							</div>
						))}
					</Card>
				)}
			</div>

			<ActionButton floating>
				<PenLine />
				<span className="hidden md:inline">Compose Mail</span>
			</ActionButton>
		</div>
	);
}
