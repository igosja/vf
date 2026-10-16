import {
	Archive,
	ArrowDownWideNarrow,
	ArrowLeft,
	Calendar,
	CircleCheck,
	CircleEllipsis,
	Download,
	Forward,
	Heart,
	Image,
	Images,
	LayoutGrid,
	MapPin,
	Plus,
	Presentation,
	Share2,
	Trash2,
	Upload,
	Video,
} from "lucide-react";
import { useState } from "react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { Lightbox, lightboxAction } from "@/components/common/lightbox";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PHOTO_GROUPS } from "@/data/photos";
import { cn } from "@/lib/utils";

const ALBUMS = ["Textures & Patterns", "Business & Work", "Fashion", "Food & Drink", "Arts & Culture", "Travel", "Architecture"];

function PhotosSidebar() {
	return (
		<SecondarySidebar
			title="Photos"
			action={
				<ActionButton>
					<Upload />
					Upload Photo
				</ActionButton>
			}
		>
			<SecondarySidebarLabel>Library</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink active>
					<Images />
					Everything
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Video />
					Videos
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Share2 />
					Sharing
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Heart />
					Favourites
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Trash2 />
					Deleted Photos
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Albums</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{ALBUMS.map((album) => (
					<SecondarySidebarLink key={album}>
						<Image />
						{album}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>
		</SecondarySidebar>
	);
}

/** Every photo has an id of its group and position, since the same picture can sit in two groups. */
const idsOf = (group: number) => PHOTO_GROUPS[group].photos.map((_, index) => `${group}-${index}`);

/** The viewer pages through every group in order; each group starts at its offset. */
const ALL_PHOTOS = PHOTO_GROUPS.flatMap((group) => group.photos);
const offsets = PHOTO_GROUPS.map((_, group) => PHOTO_GROUPS.slice(0, group).reduce((sum, item) => sum + item.photos.length, 0));

export default function Photos() {
	const [selected, setSelected] = useState<string[]>([]);
	const [viewing, setViewing] = useState({ open: false, index: 0 });
	const selecting = selected.length > 0;

	const select = (ids: string[], checked: boolean) =>
		setSelected((current) => (checked ? [...current.filter((id) => !ids.includes(id)), ...ids] : current.filter((id) => !ids.includes(id))));

	return (
		<div className="flex items-start">
			<PhotosSidebar />

			<div className="min-w-0 flex-1 pb-4">
				<ContentHeader menu={!selecting}>
					{selecting ? (
						<div className="flex flex-1 items-center gap-2">
							<IconButton onClick={() => setSelected([])}>
								<ArrowLeft />
								<span className="sr-only">Clear selection</span>
							</IconButton>
							<div>
								{String(selected.length).padStart(2, "0")}
								<span className="hidden pl-2 sm:inline">Selected</span>
							</div>
							<nav className="mr-2 ml-auto flex gap-2">
								<IconButton>
									<Plus />
									<span className="sr-only">Add to album</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<Heart />
									<span className="sr-only">Favourite</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<Forward />
									<span className="sr-only">Share</span>
								</IconButton>
								<IconButton>
									<Trash2 />
									<span className="sr-only">Delete</span>
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
											<Download />
											Download
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Heart />
											Favorite
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Calendar />
											Edit Date and Time
										</DropdownMenuItem>
										<DropdownMenuItem>
											<MapPin />
											Edit Location
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Archive />
											Archive
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</nav>
						</div>
					) : (
						<>
							<SearchField className="w-full max-w-140" placeholder="Search Photos..." aria-label="Search photos" shortcut />
							<div className="mr-2 ml-auto flex gap-2">
								<IconButton>
									<CircleCheck />
									<span className="sr-only">Select</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<LayoutGrid />
									<span className="sr-only">Thumbnail size</span>
								</IconButton>
								<IconButton>
									<Presentation />
									<span className="sr-only">Slideshow</span>
								</IconButton>
								<IconButton className="hidden sm:grid">
									<ArrowDownWideNarrow />
									<span className="sr-only">Sort</span>
								</IconButton>
							</div>
						</>
					)}
				</ContentHeader>

				<div className="flex flex-col gap-4">
					{PHOTO_GROUPS.map((group, groupIndex) => {
						const ids = idsOf(groupIndex);

						return (
							<Card key={group.date} className="p-5">
								<div className="mb-4 flex items-center gap-3">
									{selecting && (
										<Checkbox
											checked={ids.every((id) => selected.includes(id))}
											onCheckedChange={(checked) => select(ids, checked === true)}
											aria-label={`Select every photo from ${group.date}`}
											className="ms-3"
										/>
									)}
									<div className="font-medium text-emphasis-foreground">{group.date}</div>
									<div className="hidden text-xs text-muted-foreground sm:block">
										{group.location} - {group.photos.length} Photos
									</div>
								</div>

								<div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
									{group.photos.map((photo, index) => {
										const id = ids[index];
										const checked = selected.includes(id);

										return (
											<div
												key={id}
												className={cn(
													"group/photo relative",
													selecting &&
														"before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:rounded-xl before:bg-linear-to-b before:from-black/50 before:to-transparent"
												)}
											>
												<button
													type="button"
													onClick={() =>
														selecting ? select([id], !checked) : setViewing({ open: true, index: offsets[groupIndex] + index })
													}
													className="block w-full rounded-xl outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
												>
													<img
														className="aspect-4/3 w-full cursor-pointer rounded-xl object-cover"
														src={photo}
														alt={`Photo ${index + 1} from ${group.date}`}
													/>
												</button>
												<Checkbox
													checked={checked}
													onCheckedChange={(value) => select([id], value === true)}
													aria-label="Select photo"
													className={cn(
														"absolute top-0 left-0 m-3 border-white transition-opacity group-hover/photo:opacity-100 focus-visible:opacity-100",
														!selecting && "opacity-0"
													)}
												/>
											</div>
										);
									})}
								</div>
							</Card>
						);
					})}
				</div>
			</div>

			<Lightbox
				photos={ALL_PHOTOS}
				open={viewing.open}
				index={viewing.index}
				onOpenChange={(open) => setViewing((current) => ({ ...current, open }))}
				actions={
					<>
						<IconButton className={lightboxAction}>
							<Heart />
							<span className="sr-only">Favourite</span>
						</IconButton>
						<IconButton className={lightboxAction}>
							<Forward />
							<span className="sr-only">Share</span>
						</IconButton>
						<IconButton className={lightboxAction}>
							<Download />
							<span className="sr-only">Download</span>
						</IconButton>
						<IconButton className={lightboxAction}>
							<Trash2 />
							<span className="sr-only">Delete</span>
						</IconButton>
					</>
				}
			/>

			<ActionButton floating>
				<Upload />
				<span className="hidden md:inline">Upload Photo</span>
			</ActionButton>
		</div>
	);
}
