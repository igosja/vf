"use client";

import { ChartColumn, CircleEllipsis, CirclePlay, EyeOff, Image, MapPin, MessageSquareText, OctagonAlert, Share, Smile, ThumbsUp } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { POSTS, USER, type Post } from "@/data/user";

import { UserAbout } from "../user-about";
import { UserCover } from "../user-cover";
import { UserHeader } from "../user-header";

function TimelinePost({ post }: { post: Post }) {
	return (
		<Card>
			<div className="mb-5 flex items-center gap-4">
				<img className="avatar-mask size-9" src={USER.avatar} alt="" />
				<div className="flex-1">
					<div className="text-emphasis-foreground">{USER.shortName}</div>
					<div className="text-sm text-muted-foreground">{post.time}</div>
				</div>
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<IconButton className="self-start">
							<CircleEllipsis />
							<span className="sr-only">More</span>
						</IconButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<OctagonAlert />
							Report
						</DropdownMenuItem>
						<DropdownMenuItem>
							<EyeOff />
							Hide
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Share />
							Share
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="mb-5 flex flex-col gap-5">
				{post.text.map((text) => (
					<p key={text}>{text}</p>
				))}
				{post.image && <img src={post.image} className="w-full rounded-lg" alt="" />}
				{post.video && <iframe className="aspect-video w-full rounded-lg" src={post.video} title="Video" allowFullScreen />}
			</div>

			<div className="mb-5 flex divide-x overflow-hidden rounded-full border">
				<button type="button" className="flex h-10 flex-1 items-center justify-center gap-2 transition-colors hover:bg-accent">
					<ThumbsUp />
					Like
				</button>
				<button type="button" className="flex h-10 flex-1 items-center justify-center gap-2 transition-colors hover:bg-accent">
					<MessageSquareText />
					Comment
				</button>
				<button type="button" className="flex h-10 flex-1 items-center justify-center gap-2 transition-colors hover:bg-accent">
					<Share />
					Share
				</button>
			</div>

			{post.comments.map((comment) => (
				<div key={comment.name} className="mb-2 flex items-start gap-4">
					<a href="#" className="shrink-0">
						<img src={comment.avatar} className="avatar-mask size-9" alt="" />
					</a>
					<div className="flex-1">
						<a href="#">{comment.name}</a>
						<p className="mb-1">{comment.comment}</p>
						<div className="mx-3 text-right text-xs text-muted-foreground">{comment.time}</div>
					</div>
				</div>
			))}

			<div className="flex items-start gap-4">
				<img className="avatar-mask size-9" src={USER.avatar} alt="" />
				<Textarea placeholder="Write a comment..." aria-label="Write a comment" />
			</div>
		</Card>
	);
}

export default function UserTimeline() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<UserHeader title="User Timeline" page="Timeline" />
			<UserCover />

			<div className="items-start gap-4 lg:flex">
				<UserAbout />

				<div className="flex min-w-0 flex-1 flex-col gap-4">
					<Card className="p-0">
						<textarea
							className="block min-h-16 w-full resize-none bg-transparent p-5 outline-none placeholder:text-muted-foreground"
							placeholder="What's on your mind..."
							aria-label="New post"
						/>

						<nav className="-mb-1 flex items-center p-4">
							<IconButton>
								<Image />
								<span className="sr-only">Photo</span>
							</IconButton>
							<IconButton>
								<CirclePlay />
								<span className="sr-only">Video</span>
							</IconButton>
							<IconButton>
								<Smile />
								<span className="sr-only">Emoji</span>
							</IconButton>
							<IconButton>
								<MapPin />
								<span className="sr-only">Location</span>
							</IconButton>
							<IconButton>
								<ChartColumn />
								<span className="sr-only">Poll</span>
							</IconButton>

							<Button size="sm" className="ml-auto px-3">
								Submit
							</Button>
						</nav>
					</Card>

					{POSTS.map((post) => (
						<TimelinePost key={post.time} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}
