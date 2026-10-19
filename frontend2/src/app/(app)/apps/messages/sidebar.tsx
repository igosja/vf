import { MessageSquareText, Hash } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { Avatar } from "@/components/common/avatar";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { CHANNELS, DIRECT_CONTACTS } from "@/data/channel";

export function MessagesSidebar() {
	return (
		<SecondarySidebar
			title="Messages"
			action={
				<ActionButton>
					<MessageSquareText />
					New Message
				</ActionButton>
			}
		>
			<SecondarySidebarLabel>Channels</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{CHANNELS.map((channel, index) => (
					<SecondarySidebarLink key={channel} active={index === 0}>
						<Hash />
						{channel}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Direct Messages</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{DIRECT_CONTACTS.map((person) => (
					<SecondarySidebarLink key={person.name}>
						<Avatar src={person.avatar} initial={person.initial} color={person.color} className="size-5.5 text-xs" />
						<span className="truncate">{person.name}</span>
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}
