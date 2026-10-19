import { ClipboardCopy, House, Mail, MessageSquareText, NotebookText, PhoneCall, Smartphone, type LucideIcon } from "lucide-react";

import { Avatar } from "@/components/common/avatar";
import { IconButton } from "@/components/common/icon-button";
import { Card } from "@/components/ui/card";
import type { Contact } from "@/data/contacts";

function Detail({ icon: Icon, label, value, copy = true }: { icon: LucideIcon; label: string; value: string; copy?: boolean }) {
	return (
		<div className="flex items-start gap-5 border-b pb-4 not-last:mb-4 last:border-b-0 last:pb-0">
			<span className="grid avatar-mask size-10.5 shrink-0 place-items-center bg-accent">
				<Icon className="size-5" />
			</span>
			<div className="min-w-0 flex-1">
				<div className="mb-1 text-sm text-muted-foreground">{label}</div>
				<div className={copy ? "font-medium text-emphasis-foreground" : "text-emphasis-foreground"}>{value}</div>
			</div>
			{copy && (
				<IconButton onClick={() => navigator.clipboard?.writeText(value)}>
					<ClipboardCopy />
					<span className="sr-only">Copy {label}</span>
				</IconButton>
			)}
		</div>
	);
}

/** One contact's details, shown in place of the list. */
export function ContactPreview({ contact }: { contact: Contact }) {
	const handle = `@${contact.name.toLowerCase().replace(/\s+/g, "")}`;

	return (
		<Card className="mx-auto w-full max-w-150 p-2">
			<div className="rounded-lg p-5 text-center">
				<Avatar src={contact.avatar} initial={contact.initial} color={contact.color} className="mx-auto mb-4 size-32 text-4xl" />
				<h2 className="text-lg font-bold">{contact.name}</h2>
				<div>
					{contact.job}, {contact.company}
				</div>
			</div>

			<div className="p-5">
				<Detail icon={Smartphone} label="Mobile Phone" value={contact.phone} />
				<Detail icon={PhoneCall} label="Home Phone" value="543-769-0002" />
				<Detail icon={Mail} label="Email Address" value={contact.email} />
				<Detail icon={MessageSquareText} label="Message" value={handle} />
				<Detail icon={House} label="Address" value={contact.address} />
				<Detail icon={NotebookText} label="Notes" value={contact.notes} copy={false} />
			</div>
		</Card>
	);
}
