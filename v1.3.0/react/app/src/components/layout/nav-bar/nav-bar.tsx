import {
	AppWindow,
	Bell,
	CheckCheck,
	CircleCheck,
	CircleDollarSign,
	CircleUser,
	Clock,
	Eraser,
	LogOut,
	MessageSquareText,
	Monitor,
	Moon,
	Plus,
	Search,
	Settings,
	Sun,
} from "lucide-react";
import type { ComponentProps } from "react";

import { Avatar } from "@/components/common/avatar";
import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DIRECT_MESSAGES } from "@/data/messages";
import { NOTIFICATIONS } from "@/data/notifications";
import { RECENT_SEARCHES } from "@/data/search";
import { TODO_DATA } from "@/data/todo-lists";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";
import { useTheme, type Theme } from "@/providers/theme-provider";

import { NavPanel } from "./nav-panel";

const TODO_LABEL_VARIANT: Record<string, ComponentProps<typeof Badge>["variant"]> = {
	bug: "destructive",
	"priority:severe": "destructive",
	documentation: "positive",
	feature: "default",
	"version 2.0": "default",
	design: "default",
	discussion: "caution",
	security: "caution",
	blocked: "secondary",
	obsolete: "secondary",
};

const LANGUAGES = [
	{ label: "Japanese", flag: "/img/flags/japan.svg" },
	{ label: "German", flag: "/img/flags/germany.svg" },
	{ label: "Chinese", flag: "/img/flags/china.svg" },
	{ label: "French", flag: "/img/flags/france.svg" },
];

function NavButton({ className, ...props }: ComponentProps<"button">) {
	return (
		<button
			type="button"
			className={cn(
				"grid avatar-mask size-9 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none data-[state=open]:bg-accent [&_svg]:size-5",
				className
			)}
			{...props}
		/>
	);
}

function Count({ value }: { value: string }) {
	return (
		<span className="pointer-events-none absolute -top-0.5 left-1/2 flex h-4 items-center rounded-xl bg-red-400 px-1 text-[0.7rem] leading-none font-medium text-white dark:text-black">
			{value}
		</span>
	);
}

/** Read items come first in this list on purpose: they are the threads still waiting on a reply. */
const sortedMessages = [...DIRECT_MESSAGES.filter((item) => item.read), ...DIRECT_MESSAGES.filter((item) => !item.read)];
const sortedNotifications = [...NOTIFICATIONS.filter((item) => !item.read), ...NOTIFICATIONS.filter((item) => item.read)];

export function NavBar() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const { openDrawer } = useSidebar();

	return (
		// From sm up the column is see-through and lets the pointer through to the
		// page scrollbar beneath it; only the buttons themselves catch clicks.
		<aside className="fixed inset-x-0 bottom-0 z-10 flex h-14 bg-popover px-1 shadow-lg sm:pointer-events-none sm:inset-x-auto sm:top-0 sm:right-0 sm:h-full sm:w-17 sm:flex-col sm:bg-transparent sm:px-0 sm:shadow-none print:hidden">
			<ul className="flex w-full flex-row-reverse items-center justify-around *:pointer-events-auto sm:mt-3 sm:flex-col sm:justify-start sm:gap-5">
				<li>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<NavButton className="size-11">
								<img className="avatar-mask size-9" src="/img/contacts/2.jpg" alt="Your profile" />
							</NavButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="left" align="start">
							<DropdownMenuItem>
								<CircleUser />
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CircleDollarSign />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings />
								Settings
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LogOut />
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>

				<li className="hidden sm:block">
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<NavButton>
								<img className="size-5 rounded-full" src="/img/flags/england.svg" alt="English" />
							</NavButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="left" align="start">
							{LANGUAGES.map((language) => (
								<DropdownMenuItem key={language.label}>
									<img className="size-5 rounded-full" src={language.flag} alt="" />
									{language.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</li>

				<li>
					<NavPanel
						title="Search"
						trigger={
							<NavButton>
								<Search />
								<span className="sr-only">Search</span>
							</NavButton>
						}
						actions={
							<>
								<IconButton>
									<Eraser />
									<span className="sr-only">Clear recent searches</span>
								</IconButton>
								<IconButton>
									<Settings />
									<span className="sr-only">Settings</span>
								</IconButton>
							</>
						}
					>
						<SearchField className="-mx-1 mb-5 border-accent bg-accent" placeholder="Enter a keyword" aria-label="Search" autoFocus />

						<div className="mb-1 text-sm text-muted-foreground">Recent Searches</div>

						<div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
							{RECENT_SEARCHES.map((item) => (
								<button key={item} type="button" className="flex w-full items-center gap-2 px-6 py-2.5 text-left hover:bg-accent">
									<Clock className="-ml-0.5 size-4.5" />
									{item}
								</button>
							))}
						</div>
					</NavPanel>
				</li>

				<li className="relative">
					<NavPanel
						title="Notifications"
						trigger={
							<NavButton className="relative overflow-visible">
								<Bell />
								<span className="sr-only">Notifications</span>
							</NavButton>
						}
						actions={
							<>
								<IconButton>
									<CheckCheck />
									<span className="sr-only">Mark all as read</span>
								</IconButton>
								<IconButton>
									<AppWindow />
									<span className="sr-only">Open notifications</span>
								</IconButton>
							</>
						}
					>
						<div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
							{sortedNotifications.map((item, index) => (
								<a key={index} href="#" className="flex items-center gap-4 px-6 py-2.5 text-foreground hover:bg-accent">
									<span className={cn("grid avatar-mask size-8 shrink-0 place-items-center text-white dark:text-black", item.color)}>
										<item.icon className="size-4.5" />
									</span>
									<span className="flex-1">
										<span className={cn("block text-sm", item.read ? "text-foreground" : "font-medium text-emphasis-foreground")}>
											{item.title}
										</span>
										<span className="block text-xs text-muted-foreground">{item.time}</span>
									</span>
									{!item.read && <i className="mb-5 size-1.5 rounded-full bg-primary" />}
								</a>
							))}
						</div>
					</NavPanel>
					<Count value="99+" />
				</li>

				<li className="relative hidden sm:block">
					<NavPanel
						title="Direct Messages"
						trigger={
							<NavButton>
								<MessageSquareText />
								<span className="sr-only">Direct messages</span>
							</NavButton>
						}
						actions={
							<>
								<IconButton>
									<Plus />
									<span className="sr-only">New message</span>
								</IconButton>
								<IconButton>
									<AppWindow />
									<span className="sr-only">Open messages</span>
								</IconButton>
							</>
						}
					>
						<div className="-mx-6 no-scrollbar flex-1 overflow-y-auto">
							{sortedMessages.map((item) => (
								<a key={item.sender} href="#" className="flex items-center gap-3 px-6 py-2.5 text-foreground hover:bg-accent">
									<Avatar src={item.avatar} initial={item.initial} color={item.color} alt={item.sender} />
									<span className="flex-1">
										<span className={cn("block text-sm", item.read ? "font-medium text-emphasis-foreground" : "text-foreground")}>
											{item.message}
										</span>
										<span className="block text-xs text-muted-foreground">{item.time}</span>
									</span>
									{item.read && <i className="mb-4 size-1.5 rounded-full bg-primary" />}
								</a>
							))}
						</div>
					</NavPanel>
					<Count value="12" />
				</li>

				<li className="hidden sm:block">
					<NavPanel
						title="Ongoing Tasks"
						trigger={
							<NavButton>
								<CircleCheck />
								<span className="sr-only">Tasks</span>
							</NavButton>
						}
						actions={
							<>
								<IconButton>
									<AppWindow />
									<span className="sr-only">Open tasks</span>
								</IconButton>
								<IconButton>
									<Settings />
									<span className="sr-only">Settings</span>
								</IconButton>
							</>
						}
					>
						<div className="-mx-6 no-scrollbar flex-1 overflow-y-auto pt-2">
							{TODO_DATA.slice(0, 8).map((item) => (
								<label key={item.id} className="flex gap-3 px-6 py-1">
									<Checkbox className="mt-0.5" />
									<span className="min-w-0 flex-1 pb-3.5">
										<span className="mb-1 block truncate text-sm text-emphasis-foreground">{item.title}</span>
										<span className="flex items-center text-muted-foreground">
											<Badge variant={TODO_LABEL_VARIANT[item.label]} className="truncate">
												{item.label}
											</Badge>
											{item.due.date && (
												<>
													<span className="mx-2">-</span>
													<span className="text-xs">{item.due.date}</span>
												</>
											)}
											<span className="mx-2">-</span>
											<span className="text-xs font-medium">{item.priority}</span>
										</span>
									</span>
								</label>
							))}
						</div>
					</NavPanel>
				</li>

				<li>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<NavButton className="relative overflow-hidden">
								<Sun
									className={cn("absolute transition duration-300", resolvedTheme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0")}
								/>
								<Moon
									className={cn(
										"absolute transition duration-300",
										resolvedTheme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0"
									)}
								/>
								<span className="sr-only">Colour mode</span>
							</NavButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="left" align="start">
							<DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as Theme)}>
								<DropdownMenuRadioItem value="light">
									<Sun />
									Light
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="dark">
									<Moon />
									Dark
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="system">
									<Monitor />
									System
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>

				<li className="sm:hidden">
					<NavButton onClick={openDrawer}>
						<MenuIcon />
						<span className="sr-only">Open sidebar</span>
					</NavButton>
				</li>
			</ul>
		</aside>
	);
}

export function MenuIcon() {
	return (
		<svg width="15" height="12" viewBox="0 0 16 13" fill="none" className="pointer-events-none">
			<path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
