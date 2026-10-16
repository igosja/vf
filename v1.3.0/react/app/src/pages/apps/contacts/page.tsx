import {
	Archive,
	ArrowDownWideNarrow,
	ArrowLeft,
	CircleEllipsis,
	Download,
	Info,
	PencilLine,
	Printer,
	Star,
	Tag,
	Trash2,
	UserCog,
	UserRoundPlus,
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
import { CONTACTS, type Contact } from "@/data/contacts";

import { ContactPreview } from "./preview";
import { ContactsSidebar } from "./sidebar";

/** Print, download, delete, hide and label: the actions on a selection or an open contact. */
function ContactActions() {
	return (
		<>
			<IconButton>
				<Printer />
				<span className="sr-only">Print</span>
			</IconButton>
			<IconButton>
				<Download />
				<span className="sr-only">Download</span>
			</IconButton>
			<IconButton>
				<Trash2 />
				<span className="sr-only">Delete</span>
			</IconButton>
			<IconButton className="hidden sm:grid">
				<Archive />
				<span className="sr-only">Hide</span>
			</IconButton>
			<IconButton className="hidden sm:grid">
				<Tag />
				<span className="sr-only">Label</span>
			</IconButton>
		</>
	);
}

export default function Contacts() {
	const [selected, setSelected] = useState<string[]>([]);
	const [preview, setPreview] = useState<Contact | null>(null);

	const toggle = (email: string, checked: boolean) => setSelected((current) => (checked ? [...current, email] : current.filter((item) => item !== email)));
	const close = () => {
		setSelected([]);
		setPreview(null);
	};

	return (
		<div className="flex items-start">
			<ContactsSidebar />

			<div className="min-w-0 flex-1 pb-4">
				<ContentHeader menu={!preview && selected.length === 0}>
					{preview ? (
						<div className="flex flex-1 items-center gap-2 pr-2">
							<IconButton onClick={close} className="mr-3">
								<ArrowLeft />
								<span className="sr-only">Go back</span>
							</IconButton>
							<div className="ml-auto flex gap-2">
								<ContactActions />
							</div>
						</div>
					) : selected.length > 0 ? (
						<div className="flex flex-1 items-center gap-2 pr-2">
							<Checkbox
								className="mr-1 ml-7 hidden xl:grid"
								checked={selected.length === CONTACTS.length}
								onCheckedChange={(checked) => setSelected(checked === true ? CONTACTS.map((item) => item.email) : [])}
								aria-label="Select all"
							/>
							<div className="pl-7 xl:pl-0">
								{String(selected.length).padStart(2, "0")}
								<span className="hidden pl-2 sm:inline">Selected</span>
							</div>
							<div className="ml-auto flex gap-2">
								<ContactActions />
							</div>
							<div className="mx-2 hidden h-5 w-px bg-input/25 sm:block" />
							<IconButton onClick={close}>
								<X />
								<span className="sr-only">Close</span>
							</IconButton>
						</div>
					) : (
						<>
							<SearchField className="w-full max-w-140" placeholder="Search Contacts..." aria-label="Search contacts" shortcut />
							<nav className="mr-2 ml-auto flex gap-2">
								<IconButton className="hidden sm:grid">
									<Download />
									<span className="sr-only">Download</span>
								</IconButton>
								<IconButton>
									<ArrowDownWideNarrow />
									<span className="sr-only">Sort</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<UserCog />
									<span className="sr-only">Manage</span>
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

				{preview ? (
					<ContactPreview contact={preview} />
				) : (
					<Card className="p-0">
						<div className="flex items-center border-b px-5 pt-4 pb-3.5 text-xs text-muted-foreground">
							Total 328 Contacts - 45 duplicates found.
							<nav className="ms-auto hidden items-center gap-2 sm:flex">
								<a href="#" className="hover:underline">
									Fix Duplicates
								</a>
								<a href="#" className="hover:underline">
									Ignore
								</a>
							</nav>
						</div>

						{CONTACTS.map((contact) => (
							<div
								key={contact.email}
								className="group/row flex items-center gap-4 border-b px-5 transition-colors last:border-b-0 hover:bg-accent/30"
							>
								<div className="py-2">
									<ListRowAvatar
										src={contact.avatar}
										initial={contact.initial}
										color={contact.color}
										label={contact.name}
										checked={selected.includes(contact.email)}
										onCheckedChange={(checked) => toggle(contact.email, checked)}
									/>
								</div>

								<button
									type="button"
									onClick={() => setPreview(contact)}
									className="flex min-w-0 flex-1 items-center gap-6 overflow-hidden py-2 text-left"
								>
									<div className="min-w-0 items-center gap-3 truncate md:flex">
										<div className="truncate font-medium text-emphasis-foreground md:w-60">{contact.name}</div>
										<div className="truncate md:w-60">{contact.email}</div>
									</div>
									<div className="hidden truncate md:w-60 xl:block">{contact.job}</div>
									<div className="hidden truncate md:w-60 2xl:block">{contact.company}</div>
								</button>

								<div className="-mr-2 flex gap-1.5">
									<IconButton className="hidden opacity-0 transition group-hover/row:opacity-100 sm:grid">
										<PencilLine />
										<span className="sr-only">Edit</span>
									</IconButton>
									<IconButton className="hidden opacity-0 transition group-hover/row:opacity-100 sm:grid">
										<Star />
										<span className="sr-only">Favourite</span>
									</IconButton>
									<IconButton>
										<CircleEllipsis />
										<span className="sr-only">More</span>
									</IconButton>
								</div>
							</div>
						))}
					</Card>
				)}
			</div>

			<ActionButton floating>
				<UserRoundPlus />
				<span className="hidden md:inline">Create New</span>
			</ActionButton>
		</div>
	);
}
