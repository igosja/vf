import { ClipboardList, Plus, X } from "lucide-react";
import type { ReactNode } from "react";

import { Avatar } from "@/components/common/avatar";
import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CHANNEL_FILES, CHANNEL_MEMBERS } from "@/data/channel";
import { cn } from "@/lib/utils";

const PERMISSIONS = [
	{ id: "new-members", label: "New Members", description: "Allow new members to join without invitation" },
	{ id: "clipboard", label: "Clipboard", description: "Allow members to copy contents" },
	{ id: "voice-calls", label: "Voice Calls", description: "Allow members to make voice calls" },
	{ id: "video-calls", label: "Video Calls", description: "Allow members to make video calls" },
];

function AboutRow({ label, children }: { label: string; children: ReactNode }) {
	return (
		<div className="mb-4 border-b pb-4">
			<div className="mb-2 flex items-center text-sm text-muted-foreground">
				{label}
				<button type="button" className="ml-auto text-sky-500">
					Edit
				</button>
			</div>
			{children}
		</div>
	);
}

function ListButton({ className, children }: { className?: string; children: ReactNode }) {
	return (
		<button type="button" className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-accent", className)}>
			{children}
		</button>
	);
}

/** The channel's about, members, files and preferences, opened from the header. */
export function ChannelDetails() {
	return (
		// Capped at the window height: the tab row stays put and the tab content scrolls under it.
		<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0">
			<DialogTitle className="sr-only">Channel details</DialogTitle>
			<DialogDescription className="sr-only">About, members, files and preferences of the General channel</DialogDescription>

			<Tabs defaultValue="about" className="min-h-0 flex-1">
				<div className="flex shrink-0 items-center">
					<TabsList className="p-5">
						<TabsTrigger value="about">About</TabsTrigger>
						<TabsTrigger value="members">Members</TabsTrigger>
						<TabsTrigger value="files">Files</TabsTrigger>
						<TabsTrigger value="preferences">Preferences</TabsTrigger>
					</TabsList>
					<DialogClose asChild>
						<IconButton className="mr-4 ml-auto shrink-0">
							<X />
							<span className="sr-only">Close</span>
						</IconButton>
					</DialogClose>
				</div>

				<ScrollArea className="min-h-0 flex-1">
					<div className="px-6 pb-6">
						<TabsContent value="about">
							<AboutRow label="Channel Name">General</AboutRow>
							<AboutRow label="Description">
								Pariatur culpa ex ea ipsum irure. Sint labore aliqua sunt nulla aliqua laborum qui adipisicing laborum cupidatat. Aute consequat
								duis sunt anim aliqua esse reprehenderit do pariatur Lorem ullamco excepteur. Ea tempor ut anim proident voluptate proident
								nostrud ullamco. Laboris esse velit aliqua in culpa Lorem ut fugiat aliqua excepteur in exercitation velit consectetur.
							</AboutRow>
							<div className="mb-8">
								<div className="mb-2 text-sm text-muted-foreground">Created by</div>
								Malinda Hollaway on 23/10/2020
							</div>
							<Button variant="destructive" className="w-full">
								Leave Channel
							</Button>
						</TabsContent>

						<TabsContent value="members">
							<SearchField className="mb-3 h-11 border-accent bg-accent" placeholder="Search members..." aria-label="Search members" />
							<div className="-mx-2">
								<ListButton>
									<span className="grid avatar-mask size-7 place-items-center bg-secondary">
										<Plus className="size-4" />
									</span>
									<span className="text-sm text-muted-foreground">Add Member</span>
								</ListButton>
								{CHANNEL_MEMBERS.map((member) => (
									<ListButton key={member.display}>
										<Avatar src={member.avatar} className="size-7" />
										<span className="flex flex-1 items-center leading-none">
											<span className="text-emphasis-foreground">{member.display}</span>
											<i className={cn("mx-2 size-3 rounded-full border-2", member.online ? "border-emerald-500" : "border-secondary")} />
											<span className="hidden text-sm text-muted-foreground sm:block">{member.name}</span>
										</span>
									</ListButton>
								))}
							</div>
						</TabsContent>

						<TabsContent value="files">
							<SearchField className="mb-3 h-11 border-accent bg-accent" placeholder="Search files..." aria-label="Search files" />
							<div className="-mx-2">
								<ListButton>
									<span className="grid avatar-mask size-8 place-items-center bg-secondary">
										<Plus className="size-4" />
									</span>
									<span className="text-sm text-muted-foreground">Add Files</span>
								</ListButton>
								{CHANNEL_FILES.map((file) => (
									<ListButton key={file.name} className="py-3">
										{file.image ? (
											<img src={file.image} className="avatar-mask size-8 object-cover" alt="" />
										) : (
											file.icon && (
												<span className="grid avatar-mask size-8 place-items-center bg-secondary">
													<file.icon />
												</span>
											)
										)}
										<span className="flex-1 leading-none">
											<span className="mb-2 block text-emphasis-foreground">{file.name}</span>
											<span className="block text-xs text-muted-foreground">
												by {file.owner} on {file.date}
											</span>
										</span>
									</ListButton>
								))}
							</div>
						</TabsContent>

						<TabsContent value="preferences">
							{PERMISSIONS.map((item) => (
								<div key={item.id} className="mb-4 flex items-center gap-3 border-b pb-4">
									<div className="flex-1">
										<Label htmlFor={item.id} className="mb-1 text-emphasis-foreground">
											{item.label}
										</Label>
										<div className="text-sm text-muted-foreground">{item.description}</div>
									</div>
									<Switch id={item.id} />
								</div>
							))}
							<div className="mb-4 flex items-center gap-3 border-b pb-4">
								<div className="flex-1 text-emphasis-foreground">Copy member names</div>
								<IconButton>
									<ClipboardList />
									<span className="sr-only">Copy</span>
								</IconButton>
							</div>
							<div className="mb-8 flex items-center gap-3">
								<div className="flex-1 text-emphasis-foreground">Copy member email addresses</div>
								<IconButton>
									<ClipboardList />
									<span className="sr-only">Copy</span>
								</IconButton>
							</div>
							<Button variant="destructive" className="w-full">
								Archive channel for everyone
							</Button>
						</TabsContent>
					</div>
				</ScrollArea>
			</Tabs>
		</DialogContent>
	);
}
