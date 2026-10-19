"use client";

import {
	ArrowDownWideNarrow,
	Calendar,
	CircleArrowOutUpRight,
	CircleCheck,
	CirclePlus,
	Clock,
	FileArchive,
	FileAudio,
	FileImage,
	Files,
	FileText,
	FileVideo,
	Folder,
	HardDrive,
	LayoutGrid,
	Rows3,
	Share2,
	Trash2,
} from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FILES, FOLDERS } from "@/data/file-manager";
import { cn } from "@/lib/utils";

function FileManagerSidebar() {
	return (
		<SecondarySidebar
			title="File Manager"
			action={
				<ActionButton>
					<CirclePlus />
					Upload File
				</ActionButton>
			}
		>
			<SecondarySidebarLabel>Local Drive</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink active>
					<Files />
					All files and folders
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Share2 />
					Shared with me
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Clock />
					Recently Added
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<CircleArrowOutUpRight />
					Transfers
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Calendar />
					Scheduled
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<Trash2 />
					Deleted files
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel>Favorites</SecondarySidebarLabel>
			<SecondarySidebarNav>
				<SecondarySidebarLink>
					<FileAudio />
					Audio and Music
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<FileVideo />
					Videos
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<FileImage />
					Pictures
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<FileText />
					Documents
				</SecondarySidebarLink>
				<SecondarySidebarLink>
					<FileArchive />
					Archives
				</SecondarySidebarLink>
			</SecondarySidebarNav>

			<SecondarySidebarLabel className="mb-4">Storage Information</SecondarySidebarLabel>
			<div className="flex items-start gap-3">
				<HardDrive className="size-5" />
				<div className="flex-1">
					<div className="mb-3 text-sm text-emphasis-foreground">82.2GB of 1000 GB used</div>
					<Progress value={25} aria-label="Storage used" className="mb-2" />
					<a href="#" className="text-xs">
						Upgrade Storage
					</a>
				</div>
			</div>
		</SecondarySidebar>
	);
}

export default function FileManager() {
	return (
		<div className="flex items-start">
			<FileManagerSidebar />

			<div className="min-w-0 flex-1 pb-4">
				<ContentHeader>
					<SearchField className="w-full max-w-140" placeholder="Search Files..." aria-label="Search files" shortcut />

					<div className="mr-3 ml-auto flex gap-1.5">
						<IconButton>
							<CircleCheck />
							<span className="sr-only">Select</span>
						</IconButton>
						<IconButton className="hidden sm:grid">
							<Rows3 />
							<span className="sr-only">List view</span>
						</IconButton>
						<IconButton className="hidden sm:grid">
							<LayoutGrid />
							<span className="sr-only">Grid view</span>
						</IconButton>
						<IconButton>
							<ArrowDownWideNarrow />
							<span className="sr-only">Sort</span>
						</IconButton>
					</div>
				</ContentHeader>

				<Card className="p-5">
					<div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6">
						{FOLDERS.map((folder) => (
							<button
								key={folder.name}
								type="button"
								className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3 text-left transition-colors duration-300 hover:bg-secondary"
							>
								<div className="min-w-0 flex-1">
									<div className="mb-0.5 truncate text-emphasis-foreground">{folder.name}</div>
									<div className="text-xs text-muted-foreground">{folder.files} Files</div>
								</div>
								<Folder className="hidden size-5 lg:block" />
							</button>
						))}
					</div>

					<div className="my-5 flex items-center text-sm leading-none text-muted-foreground">
						3562 Files
						<i className="mt-1 ml-4 h-px flex-1 bg-muted" />
					</div>

					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6">
						{FILES.map((file) => (
							<button
								key={file.name}
								type="button"
								className="rounded-lg bg-muted p-1.5 text-left transition-colors duration-300 hover:bg-secondary"
							>
								{file.image ? (
									<img className="h-24 w-full rounded-sm object-cover" src={file.image} alt="" />
								) : (
									file.icon && (
										<div className={cn("grid h-24 place-items-center rounded-sm bg-current/20", file.color)}>
											<span className="grid avatar-mask size-8 place-items-center bg-current">
												<file.icon className="text-white dark:text-black" />
											</span>
										</div>
									)
								)}
								<div className="p-2">
									<div className="mb-0.5 truncate text-emphasis-foreground">{file.name}</div>
									<div className="text-xs text-muted-foreground">{file.size}</div>
								</div>
							</button>
						))}
					</div>
				</Card>
			</div>

			<ActionButton floating>
				<CirclePlus />
				<span className="hidden md:inline">Upload File</span>
			</ActionButton>
		</div>
	);
}
