"use client";

import { BadgeCheck, ChevronDown, ChevronRight, ExternalLink, Inbox, Plus, ShieldAlert } from "lucide-react";

import { Avatar } from "@/components/common/avatar";
import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";

const PEOPLE = [
	{ username: "alexmorgan", avatar: "/img/team/1.jpg", email: "alex@example.com" },
	{ username: "samlee", avatar: "/img/team/2.jpg", email: "sam@example.com" },
	{ username: "jordankim", avatar: "/img/team/3.jpg", email: "jordan@example.com" },
];

const MODELS = [
	{ name: "Atlas Small", description: "Everyday tasks and UI generation.", image: "/img/gallery/6.jpg" },
	{ name: "Atlas Large", description: "Advanced thinking or reasoning.", image: "/img/gallery/7.jpg" },
	{ name: "Atlas Mini", description: "Open Source model for everyone.", image: "/img/gallery/8.jpg" },
];

const MUSIC = [
	{ title: "Midnight City Lights", artist: "Neon Dreams", album: "Electric Nights", duration: "3:45", image: "/img/gallery/9.jpg" },
	{ title: "Coffee Shop Conversations", artist: "The Morning Brew", album: "Urban Stories", duration: "4:05", image: "/img/gallery/10.jpg" },
	{ title: "Digital Rain", artist: "Cyber Symphony", album: "Binary Beats", duration: "3:30", image: "/img/gallery/11.jpg" },
];

export default function ItemPage() {
	return (
		<>
			<ContentHeader title="Item" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A title and description with an action, and a whole row as a link.">
					<div className="flex flex-col gap-6">
						<Item variant="outline">
							<ItemContent>
								<ItemTitle>Basic Item</ItemTitle>
								<ItemDescription>A simple item with title and description.</ItemDescription>
							</ItemContent>
							<ItemActions>
								<Button variant="outline" size="sm">
									Action
								</Button>
							</ItemActions>
						</Item>
						<Item variant="outline" size="sm" asChild>
							<a href="#">
								<ItemMedia>
									<BadgeCheck className="size-5" />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>Your profile has been verified.</ItemTitle>
								</ItemContent>
								<ItemActions>
									<ChevronRight className="size-4" />
								</ItemActions>
							</a>
						</Item>
					</div>
				</ExampleCard>

				<ExampleCard title="Variant" description="Default, outline and muted.">
					<div className="flex flex-col gap-6">
						{(
							[
								{ variant: "default", title: "Default Variant", description: "Transparent background with no border." },
								{ variant: "outline", title: "Outline Variant", description: "Outlined style with a visible border." },
								{ variant: "muted", title: "Muted Variant", description: "Muted background for secondary content." },
							] as const
						).map((item) => (
							<Item key={item.variant} variant={item.variant}>
								<ItemMedia variant="icon">
									<Inbox />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>{item.title}</ItemTitle>
									<ItemDescription>{item.description}</ItemDescription>
								</ItemContent>
							</Item>
						))}
					</div>
				</ExampleCard>

				<ExampleCard title="Size" description="Default, sm and xs, for denser lists.">
					<div className="flex flex-col gap-6">
						{(
							[
								{ size: "default", title: "Default Size", description: "The standard size for most use cases." },
								{ size: "sm", title: "Small Size", description: "A compact size for dense layouts." },
								{ size: "xs", title: "Extra Small Size", description: "The most compact size available." },
							] as const
						).map((item) => (
							<Item key={item.size} variant="outline" size={item.size}>
								<ItemMedia variant="icon">
									<Inbox />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>{item.title}</ItemTitle>
									<ItemDescription>{item.description}</ItemDescription>
								</ItemContent>
							</Item>
						))}
					</div>
				</ExampleCard>

				<ExampleCard title="Icon" description="The icon media variant puts the icon on a tile.">
					<Item variant="outline">
						<ItemMedia variant="icon">
							<ShieldAlert />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>Security Alert</ItemTitle>
							<ItemDescription>New login detected from unknown device.</ItemDescription>
						</ItemContent>
						<ItemActions>
							<Button size="sm" variant="outline">
								Review
							</Button>
						</ItemActions>
					</Item>
				</ExampleCard>

				<ExampleCard title="Avatar" description="A person's avatar, or a stack of them, as the media.">
					<div className="flex flex-col gap-6">
						<Item variant="outline">
							<ItemMedia>
								<Avatar src="/img/team/3.jpg" className="size-10" />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Jordan Kim</ItemTitle>
								<ItemDescription>Last seen 5 months ago</ItemDescription>
							</ItemContent>
							<ItemActions>
								<Button size="icon-sm" variant="outline" aria-label="Invite">
									<Plus />
								</Button>
							</ItemActions>
						</Item>
						<Item variant="outline">
							<ItemMedia>
								<div className="flex -space-x-2">
									{PEOPLE.map((person) => (
										<Avatar key={person.username} src={person.avatar} className="grayscale" />
									))}
								</div>
							</ItemMedia>
							<ItemContent>
								<ItemTitle>No Team Members</ItemTitle>
								<ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
							</ItemContent>
							<ItemActions>
								<Button size="sm" variant="outline">
									Invite
								</Button>
							</ItemActions>
						</Item>
					</div>
				</ExampleCard>

				<ExampleCard title="Image" description="The image media variant crops a picture into the media slot.">
					<ItemGroup>
						{MUSIC.map((song) => (
							<Item key={song.title} variant="outline" asChild role="listitem">
								<a href="#">
									<ItemMedia variant="image">
										<img src={song.image} alt={song.title} className="grayscale" />
									</ItemMedia>
									<ItemContent>
										<ItemTitle className="line-clamp-1">
											{song.title} - <span className="font-normal text-muted-foreground">{song.album}</span>
										</ItemTitle>
										<ItemDescription>{song.artist}</ItemDescription>
									</ItemContent>
									<ItemContent className="text-center">
										<ItemDescription>{song.duration}</ItemDescription>
									</ItemContent>
								</a>
							</Item>
						))}
					</ItemGroup>
				</ExampleCard>

				<ExampleCard title="Group" description="ItemGroup stacks items as a list.">
					<ItemGroup>
						{PEOPLE.map((person) => (
							<Item key={person.username} variant="outline">
								<ItemMedia>
									<Avatar src={person.avatar} className="grayscale" />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>{person.username}</ItemTitle>
									<ItemDescription>{person.email}</ItemDescription>
								</ItemContent>
								<ItemActions>
									<Button variant="ghost" size="icon" aria-label="Add">
										<Plus />
									</Button>
								</ItemActions>
							</Item>
						))}
					</ItemGroup>
				</ExampleCard>

				<ExampleCard title="Header" description="ItemHeader sits above the content across the full width.">
					<ItemGroup className="grid grid-cols-3 gap-4">
						{MODELS.map((model) => (
							<Item key={model.name} variant="outline">
								<ItemHeader>
									<img src={model.image} alt={model.name} className="aspect-square w-full rounded-lg object-cover" />
								</ItemHeader>
								<ItemContent>
									<ItemTitle>{model.name}</ItemTitle>
									<ItemDescription>{model.description}</ItemDescription>
								</ItemContent>
							</Item>
						))}
					</ItemGroup>
				</ExampleCard>

				<ExampleCard title="Link" description="With asChild, a link becomes the item and lights up on hover.">
					<div className="flex flex-col gap-4">
						<Item asChild>
							<a href="#">
								<ItemContent>
									<ItemTitle>Visit our documentation</ItemTitle>
									<ItemDescription>Learn how to get started with our components.</ItemDescription>
								</ItemContent>
								<ItemActions>
									<ChevronRight className="size-4" />
								</ItemActions>
							</a>
						</Item>
						<Item variant="outline" asChild>
							<a href="#" target="_blank" rel="noopener noreferrer">
								<ItemContent>
									<ItemTitle>External resource</ItemTitle>
									<ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
								</ItemContent>
								<ItemActions>
									<ExternalLink className="size-4" />
								</ItemActions>
							</a>
						</Item>
					</div>
				</ExampleCard>

				<ExampleCard title="Dropdown" description="Items inside a dropdown menu, for a richer pick list.">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								Select <ChevronDown />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-60" align="start">
							<DropdownMenuGroup>
								{PEOPLE.map((person) => (
									<DropdownMenuItem key={person.username} className="p-0">
										<Item size="xs" className="w-full">
											<ItemMedia>
												<Avatar src={person.avatar} className="grayscale" />
											</ItemMedia>
											<ItemContent className="gap-0">
												<ItemTitle>{person.username}</ItemTitle>
												<ItemDescription>{person.email}</ItemDescription>
											</ItemContent>
										</Item>
									</DropdownMenuItem>
								))}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</ExampleCard>
			</div>
		</>
	);
}
