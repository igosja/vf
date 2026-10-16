import { ChevronDown, CircleEllipsis, Info, MessageSquareText } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { RichTextEditor } from "@/components/common/rich-text-editor";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CHANNEL_MEMBERS } from "@/data/channel";

import { ChannelDetails } from "./channel-details";
import { Conversation } from "./conversation";
import { MessagesSidebar } from "./sidebar";

export default function Messages() {
	return (
		<Dialog>
			<div className="flex items-start">
				<MessagesSidebar />

				<div className="min-w-0 flex-1">
					<ContentHeader>
						<SearchField className="w-full max-w-140" placeholder="Search Messages..." aria-label="Search messages" shortcut />

						<DialogTrigger className="ml-auto hidden h-8 items-center gap-1.5 rounded-lg px-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-accent sm:flex">
							General
							<ChevronDown className="size-3.5" />
						</DialogTrigger>

						<div className="hidden items-center gap-0.5 p-1 md:flex">
							{CHANNEL_MEMBERS.slice(0, 5).map((member) => (
								<img key={member.display} className="avatar-mask size-5.5" src={member.avatar} alt={member.name} />
							))}
							<span className="mx-2 text-xs font-medium text-emphasis-foreground">42</span>
						</div>

						<div className="mr-3 ml-auto flex gap-1.5 sm:ml-0">
							<DialogTrigger asChild>
								<IconButton className="sm:hidden">
									<Info />
									<span className="sr-only">Channel details</span>
								</IconButton>
							</DialogTrigger>
							<IconButton>
								<CircleEllipsis />
								<span className="sr-only">More</span>
							</IconButton>
						</div>
					</ContentHeader>

					<Card className="p-0">
						<Conversation />

						{/* The reply box stays in view at the bottom of the window while the conversation scrolls. */}
						<div className="sticky bottom-14 z-5 bg-background pb-2.5 sm:bottom-0">
							<div className="rounded-b-2xl bg-card p-2 pt-0">
								<RichTextEditor className="rounded-xl border-2 border-transparent bg-muted transition-colors focus-within:border-border focus-within:bg-card" />
							</div>
						</div>
					</Card>
				</div>

				<ActionButton floating>
					<MessageSquareText />
					<span className="hidden md:inline">New Message</span>
				</ActionButton>
			</div>

			<ChannelDetails />
		</Dialog>
	);
}
