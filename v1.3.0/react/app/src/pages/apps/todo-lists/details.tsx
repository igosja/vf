import { CalendarDays, Clock, Tag, X } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FILES } from "@/data/file-manager";
import { SUB_TASKS, type TodoItem } from "@/data/todo-lists";
import { cn } from "@/lib/utils";

import { Activity, Comments } from "./discussion";

/** A task's sub tasks, files, comments and activity, opened from the list. */
export function TodoDetails({ item }: { item: TodoItem }) {
	const [done, setDone] = useState<number[]>([]);

	return (
		// Capped at the window height: the title and close button stay put and the rest scrolls under them.
		<DialogContent showCloseButton={false} className="flex max-h-11/12 flex-col gap-0 p-0 sm:max-w-2xl">
			<div className="flex shrink-0 items-start gap-4 p-8 pb-0">
				<div className="flex-1">
					<DialogTitle className="mb-2 text-base leading-tight font-medium text-emphasis-foreground">{item.title}</DialogTitle>
					<DialogDescription className="mb-3 text-sm text-foreground">{item.description}</DialogDescription>

					<div className="flex flex-wrap gap-1">
						<span className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs">
							<CalendarDays className="size-4" />
							{item.due.date}
						</span>
						<span className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs">
							<Clock className="size-4" />
							{item.due.time}
						</span>
						<span className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs capitalize">
							<Tag className="size-4" />
							{item.label}
						</span>
					</div>
				</div>

				<DialogClose asChild>
					<IconButton className="-mt-2 -mr-2">
						<X />
						<span className="sr-only">Close</span>
					</IconButton>
				</DialogClose>
			</div>

			<ScrollArea className="min-h-0 flex-1">
				<div className="p-8">
					<Tabs defaultValue="sub-tasks">
						<TabsList className="mb-6 -ml-2">
							<TabsTrigger value="sub-tasks">Sub Tasks</TabsTrigger>
							<TabsTrigger value="files">Files</TabsTrigger>
							<TabsTrigger value="comments">Comments</TabsTrigger>
							<TabsTrigger value="activity">Activity</TabsTrigger>
						</TabsList>

						<div className="mb-8">
							<TabsContent value="sub-tasks">
								<div className="mb-5 border-b pb-2 text-sm text-muted-foreground">Total {SUB_TASKS.length} sub tasks</div>
								{SUB_TASKS.map((task, index) => (
									<label key={task} className="flex items-start gap-3">
										<Checkbox
											className="mt-0.5"
											checked={done.includes(index)}
											onCheckedChange={(checked) =>
												setDone((current) => (checked === true ? [...current, index] : current.filter((item) => item !== index)))
											}
										/>
										<span
											className={cn(
												"flex-1 pb-3 transition-colors",
												index < SUB_TASKS.length - 1 && "mb-3 border-b",
												done.includes(index) && "line-through opacity-75"
											)}
										>
											{task}
										</span>
									</label>
								))}
							</TabsContent>

							<TabsContent value="files">
								<div className="mb-1 border-b pb-2 text-sm text-muted-foreground">Total 23 files</div>
								<div className="-ml-3">
									{FILES.slice(0, 5).map((file) => (
										<a
											key={file.name}
											href="#"
											className="flex items-center gap-3 rounded-lg p-3 text-foreground transition-colors hover:bg-accent"
										>
											{file.image ? (
												<img className="avatar-mask size-9 object-cover" src={file.image} alt="" />
											) : (
												file.icon && (
													<span className="grid avatar-mask size-9 place-items-center bg-secondary text-emphasis-foreground">
														<file.icon />
													</span>
												)
											)}
											<div className="flex-1 leading-none">
												<div className="mb-2 text-emphasis-foreground">{file.name}</div>
												<div className="flex text-sm text-muted-foreground">
													Added on {file.date}
													<span className="ml-auto hidden sm:inline">{file.size}</span>
												</div>
											</div>
										</a>
									))}
								</div>
							</TabsContent>

							<TabsContent value="comments">
								<Comments />
							</TabsContent>

							<TabsContent value="activity">
								<Activity />
							</TabsContent>
						</div>
					</Tabs>

					<DialogClose asChild>
						<Button className="w-full">Mark as completed</Button>
					</DialogClose>
				</div>
			</ScrollArea>
		</DialogContent>
	);
}
