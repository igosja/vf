import { CircleEllipsis, Copy, Forward, Hand, Pin, Share, Smile, Trash2 } from "lucide-react";

import { Avatar } from "@/components/common/avatar";
import { IconButton } from "@/components/common/icon-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CONVERSATION } from "@/data/channel";

/** One message line. Hovering it shows react, forward, pin and a menu of the rest. */
function Message({ text }: { text: string }) {
	return (
		<div className="group/message relative rounded-lg px-1.5 py-0.5 transition-colors hover:bg-accent/50">
			{text}
			<div className="absolute top-0 right-2 z-3 -mt-9 hidden rounded-2xl border bg-card p-1 text-emphasis-foreground group-hover/message:flex has-data-[state=open]:flex">
				<IconButton>
					<Smile />
					<span className="sr-only">React</span>
				</IconButton>
				<IconButton>
					<Forward />
					<span className="sr-only">Forward</span>
				</IconButton>
				<IconButton>
					<Pin />
					<span className="sr-only">Pin</span>
				</IconButton>
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<IconButton>
							<CircleEllipsis />
							<span className="sr-only">More</span>
						</IconButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Copy />
							Copy Message
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Hand />
							Follow Message
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Trash2 />
							Delete
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Share />
							Share
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

/** The channel's messages, grouped by day and then by author. */
export function Conversation() {
	return (
		<div className="px-5 pb-5">
			{CONVERSATION.map((day) => (
				<div key={day.day}>
					<div className="relative -mx-5 mt-10 mb-5 text-center">
						<i className="absolute inset-x-0 top-1/2 h-px bg-accent" />
						<span className="relative inline-flex h-8 items-center rounded-full bg-accent px-4 text-xs text-emphasis-foreground">{day.day}</span>
					</div>

					{day.groups.map((group, index) => (
						<div key={index} className="mb-3 flex items-start gap-3">
							<Avatar src={group.author.avatar} initial={group.author.initial} color={group.author.color} className="size-9" />
							<div className="min-w-0 flex-1">
								<div className="ml-1.5 font-bold text-emphasis-foreground">{group.author.name}</div>
								{group.messages.map((text) => (
									<Message key={text} text={text} />
								))}
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
