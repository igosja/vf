import { Reply, SendHorizontal, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TODO_ACTIVITY, TODO_COMMENTS, type TodoComment } from "@/data/todo-lists";
import { USER } from "@/data/user";
import { useIsMac } from "@/lib/platform";
import { cn } from "@/lib/utils";

const count = (comments: TodoComment[]): number => comments.reduce((sum, comment) => sum + 1 + count(comment.replies ?? []), 0);

/** One comment: avatar, name and time, the text in a bubble, then like and reply. Replies sit indented under it. */
function Comment({ comment }: { comment: TodoComment }) {
	const [liked, setLiked] = useState(false);

	return (
		<div className="flex items-start gap-3">
			<img src={comment.avatar} className="avatar-mask size-9 shrink-0" alt="" />
			<div className="min-w-0 flex-1">
				<div className="mb-1 flex items-baseline gap-2">
					<span className="font-medium text-emphasis-foreground">{comment.author}</span>
					<span className="text-xs text-muted-foreground">{comment.time}</span>
				</div>
				<div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">{comment.text}</div>
				<div className="mt-1.5 mb-4 flex gap-1 text-xs">
					<button
						type="button"
						aria-pressed={liked}
						onClick={() => setLiked(!liked)}
						className={cn(
							"flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							liked && "text-sky-500 hover:text-sky-500"
						)}
					>
						<ThumbsUp className={cn("size-3.5", liked && "fill-current")} />
						{comment.likes + (liked ? 1 : 0)}
					</button>
					<button
						type="button"
						className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
					>
						<Reply className="size-3.5" />
						Reply
					</button>
				</div>

				{comment.replies?.map((reply) => (
					<Comment key={reply.id} comment={reply} />
				))}
			</div>
		</div>
	);
}

/** The task's discussion and a box to add to it. New comments stay until the dialog closes. */
export function Comments() {
	const [comments, setComments] = useState(TODO_COMMENTS);
	const [draft, setDraft] = useState("");
	const isMac = useIsMac();

	const post = () => {
		const text = draft.trim();
		if (!text) return;
		setComments((list) => [...list, { id: Date.now(), author: USER.shortName, avatar: USER.avatar, time: "Just now", text, likes: 0 }]);
		setDraft("");
	};

	return (
		<>
			<div className="mb-5 border-b pb-2 text-sm text-muted-foreground">Total {count(comments)} comments</div>

			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}

			<form
				className="mt-2 flex items-start gap-3"
				onSubmit={(event) => {
					event.preventDefault();
					post();
				}}
			>
				<img src={USER.avatar} className="avatar-mask size-9 shrink-0" alt="" />
				<div className="flex-1">
					<Textarea
						value={draft}
						onChange={(event) => setDraft(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
								event.preventDefault();
								post();
							}
						}}
						placeholder="Write a comment..."
						aria-label="Write a comment"
					/>
					<div className="mt-2 flex items-center justify-between">
						<span className="text-xs text-muted-foreground">{isMac ? "⌘" : "Ctrl"} + Enter to send</span>
						<Button type="submit" size="sm" disabled={!draft.trim()}>
							<SendHorizontal className="size-4" />
							Comment
						</Button>
					</div>
				</div>
			</form>
		</>
	);
}

/** The task's history, newest first, as a timeline of icon tiles joined by a line. */
export function Activity() {
	return (
		<>
			<div className="mb-5 border-b pb-2 text-sm text-muted-foreground">Total {TODO_ACTIVITY.length} activities</div>

			<ol>
				{TODO_ACTIVITY.map((item) => (
					<li
						key={item.id}
						className="relative flex gap-4 pb-6 before:absolute before:top-9 before:bottom-1 before:left-4 before:w-px before:bg-input/50 last:pb-0 last:before:hidden"
					>
						<span className={cn("grid avatar-mask size-8 shrink-0 place-items-center bg-current/15", item.color)}>
							<item.icon className="size-4" />
						</span>
						<div className="min-w-0 flex-1 pt-1">
							<p>
								<span className="font-medium text-emphasis-foreground">{item.actor}</span> {item.action}
								{item.target && <span className="font-medium text-emphasis-foreground"> {item.target}</span>}
							</p>
							<div className="mt-0.5 text-xs text-muted-foreground">{item.time}</div>
						</div>
					</li>
				))}
			</ol>
		</>
	);
}
