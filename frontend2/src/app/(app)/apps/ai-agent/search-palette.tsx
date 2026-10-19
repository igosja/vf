import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CirclePlus, CornerDownLeft, Folder, History, Image, MessageCircle, X, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SEARCH_ITEMS, type SearchItem, type SearchType } from "@/data/ai-agent";
import { useNavigate } from "@/lib/router";
import { cn } from "@/lib/utils";

import { useChatActions } from "./chat-actions";

const TYPES: Record<SearchType, { label: string; icon: LucideIcon }> = {
	chat: { label: "Chats", icon: MessageCircle },
	project: { label: "Projects", icon: Folder },
	image: { label: "Images", icon: Image },
	scheduled: { label: "Scheduled", icon: History },
	action: { label: "Actions", icon: CirclePlus },
};

/** The pills, in the order Left and Right step through them. Actions have no pill. */
const FILTERS: ("all" | SearchType)[] = ["all", "chat", "project", "image", "scheduled"];

type Result = SearchItem & { starred?: boolean; to?: string };

function Key({ children }: { children: ReactNode }) {
	return <span className="grid h-5 min-w-5 place-items-center rounded-sm border px-1 leading-none">{children}</span>;
}

/** Searches chats, projects, images and scheduled tasks. Opened from the header search or ⌘K. */
export function SearchPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
	const navigate = useNavigate();
	const { chats } = useChatActions();
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
	const [active, setActive] = useState(0);
	const results = useRef<HTMLDivElement>(null);

	const items: Result[] = [
		...chats.map((chat) => ({ type: "chat" as const, title: chat.title, starred: chat.starred, to: "/apps/ai-agent/chat" })),
		...SEARCH_ITEMS.map((item) => (item.title === "New chat" ? { ...item, to: "/apps/ai-agent" } : item)),
	];
	const ofType = (type: SearchType) => items.filter((item) => item.type === type);

	const text = query.trim().toLowerCase();
	const groups: [string, Result[]][] = (
		filter === "all" && !text
			? [
					["Starred", ofType("chat").filter((item) => item.starred)] as [string, Result[]],
					[
						"Recents",
						ofType("chat")
							.filter((item) => !item.starred)
							.slice(0, 5),
					] as [string, Result[]],
					["Actions", ofType("action")] as [string, Result[]],
				]
			: (filter === "all" ? (Object.keys(TYPES) as SearchType[]) : [filter]).map(
					(type) => [TYPES[type].label, ofType(type).filter((item) => item.title.toLowerCase().includes(text))] as [string, Result[]]
				)
	).filter(([, list]) => list.length > 0);
	const flat = groups.flatMap(([, list]) => list);

	// A new query or filter starts back at the first result.
	useEffect(() => setActive(0), [query, filter]);

	useEffect(() => {
		if (!open) return;
		setQuery("");
		setFilter("all");
	}, [open]);

	useEffect(() => {
		results.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
	}, [active]);

	const choose = (item: Result | undefined) => {
		if (!item) return;
		onOpenChange(false);
		if (item.to) navigate(item.to);
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			if (flat.length) setActive((active + (event.key === "ArrowDown" ? 1 : -1) + flat.length) % flat.length);
		} else if (event.key === "Enter") {
			event.preventDefault();
			choose(flat[active]);
		} else if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && !query) {
			event.preventDefault();
			const step = event.key === "ArrowRight" ? 1 : -1;
			setFilter(FILTERS[(FILTERS.indexOf(filter) + step + FILTERS.length) % FILTERS.length]);
		}
	};

	let index = 0;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent showCloseButton={false} className="top-4 translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-200 md:top-16">
				<DialogTitle className="sr-only">Search</DialogTitle>
				<DialogDescription className="sr-only">Search chats, projects and more</DialogDescription>

				<div className="border-b px-6 pt-5 pb-4">
					<div className="mb-4 flex items-center gap-4">
						<input
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							onKeyDown={onKeyDown}
							placeholder="Search"
							aria-label="Search chats, projects and more"
							autoComplete="off"
							className="min-w-0 flex-1 bg-transparent text-xl text-emphasis-foreground outline-none placeholder:text-muted-foreground"
						/>
						<DialogClose asChild>
							<IconButton>
								<X />
								<span className="sr-only">Close</span>
							</IconButton>
						</DialogClose>
					</div>

					<nav className="-mx-6 no-scrollbar flex gap-px overflow-x-auto px-4 text-sm">
						{FILTERS.map((item) => (
							<button
								key={item}
								type="button"
								onClick={() => setFilter(item)}
								aria-pressed={filter === item}
								className={cn(
									"shrink-0 rounded-full px-4 py-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-muted",
									filter === item && "bg-sky-500/10 text-sky-500 hover:bg-sky-500/10"
								)}
							>
								{item === "all" ? "All" : TYPES[item].label}
							</button>
						))}
					</nav>
				</div>

				<ScrollArea viewportRef={results} className="max-h-112">
					<div className="p-3">
						{groups.length === 0 ? (
							<div className="py-12 text-center text-muted-foreground">No results for "{query.trim()}"</div>
						) : (
							groups.map(([label, list]) => (
								<div key={label} className="mb-3">
									<div className="px-3 pt-2 pb-1.5 text-xs text-muted-foreground">{label}</div>
									{list.map((item) => {
										const position = index++;
										const Icon = item.icon ?? TYPES[item.type].icon;

										return (
											<button
												key={`${item.type}-${item.title}`}
												type="button"
												data-index={position}
												onMouseMove={() => position !== active && setActive(position)}
												onClick={() => choose(item)}
												className={cn(
													"flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-emphasis-foreground",
													position === active && "bg-muted"
												)}
											>
												<Icon className="size-5 text-muted-foreground" />
												<span className="flex-1 truncate">{item.title}</span>
												{item.meta && <span className="text-xs whitespace-nowrap text-muted-foreground">{item.meta}</span>}
												<CornerDownLeft className={cn("text-muted-foreground", position !== active && "opacity-0")} />
											</button>
										);
									})}
								</div>
							))
						)}
					</div>
				</ScrollArea>

				<div className="hidden items-center gap-6 border-t px-6 py-3 text-xs text-muted-foreground md:flex">
					<span className="flex items-center gap-2">
						Close <Key>Esc</Key>
					</span>
					<span className="flex items-center gap-2">
						Change type
						<span className="flex gap-1">
							<Key>
								<ArrowLeft className="size-3" />
							</Key>
							<Key>
								<ArrowRight className="size-3" />
							</Key>
						</span>
					</span>
					<span className="flex items-center gap-2">
						Navigate
						<span className="flex gap-1">
							<Key>
								<ArrowUp className="size-3" />
							</Key>
							<Key>
								<ArrowDown className="size-3" />
							</Key>
						</span>
					</span>
					<span className="ml-auto flex items-center gap-2">
						Open
						<Key>
							<CornerDownLeft className="size-3" />
						</Key>
					</span>
				</div>
			</DialogContent>
		</Dialog>
	);
}
