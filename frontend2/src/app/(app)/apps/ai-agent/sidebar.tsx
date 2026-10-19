import { CircleEllipsis, Clock, Folder, Image, Library, PencilLine, Plus, Puzzle, Share2, Star, Trash2 } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { Chat } from "@/data/ai-agent";
import { Link, useNavigate } from "@/lib/router";
import { cn } from "@/lib/utils";

import { useChatActions } from "./chat-actions";

/** A chat link whose options menu shows on hover. */
function ChatItem({ chat, active }: { chat: Chat; active: boolean }) {
	const { openDialog, toggleStar } = useChatActions();

	return (
		<div className="group/chat relative has-data-[state=open]:z-1">
			<Link
				to="/apps/ai-agent/chat"
				aria-current={active ? "page" : undefined}
				className={cn(
					"flex w-full rounded-full px-3 py-2.5 text-emphasis-foreground transition-colors duration-300 group-hover/chat:pr-8 group-has-data-[state=open]/chat:pr-8",
					active ? "bg-primary/10 text-sky-500" : "group-hover/chat:bg-sidebar-accent group-has-data-[state=open]/chat:bg-sidebar-accent"
				)}
			>
				<span className="truncate">{chat.title}</span>
			</Link>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger className="absolute top-1/2 right-2 grid -translate-y-1/2 place-items-center text-emphasis-foreground opacity-0 transition-opacity group-hover/chat:opacity-50 hover:opacity-100! focus-visible:opacity-100 data-[state=open]:opacity-100">
					<CircleEllipsis className="size-5" />
					<span className="sr-only">Options for {chat.title}</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onSelect={() => toggleStar(chat)}>
						<Star />
						{chat.starred ? "Unstar" : "Star"}
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => openDialog("rename", chat)}>
						<PencilLine />
						Rename
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => openDialog("project", chat)}>
						<Folder />
						Add to project
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => openDialog("share", chat)}>
						<Share2 />
						Share
					</DropdownMenuItem>
					<DropdownMenuItem variant="destructive" onSelect={() => openDialog("delete", chat)}>
						<Trash2 />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

/** Library links, then starred and recent chats. `activeId` marks the chat open on the page. */
export function AiAgentSidebar({ activeId }: { activeId?: number }) {
	const navigate = useNavigate();
	const { chats } = useChatActions();

	return (
		<SecondarySidebar
			title="AI Agent"
			drawerAction
			action={
				<ActionButton onClick={() => navigate("/apps/ai-agent")}>
					<Plus />
					New Chat
				</ActionButton>
			}
		>
			<SecondarySidebarNav>
				<SecondarySidebarLink>
					<Image />
					Images
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Folder />
					Projects
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Library />
					Library
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Clock />
					Scheduled
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Puzzle />
					Plugins
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Starred</SecondarySidebarLabel>
			<SecondarySidebarNav className="font-normal">
				{chats
					.filter((chat) => chat.starred)
					.map((chat) => (
						<ChatItem key={chat.id} chat={chat} active={chat.id === activeId} />
					))}
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Recents</SecondarySidebarLabel>
			<SecondarySidebarNav className="font-normal">
				{chats
					.filter((chat) => !chat.starred)
					.map((chat) => (
						<ChatItem key={chat.id} chat={chat} active={chat.id === activeId} />
					))}
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}
