import { Braces, CirclePlay, File, FileArchive, FileText, Grid2x2, Headset, Newspaper, Presentation, Type, type LucideIcon } from "lucide-react";

export type Folder = {
	name: string;
	files: string;
};

export const FOLDERS: Folder[] = [
	{ name: "Spread Sheets", files: "312" },
	{ name: "Documents", files: "4532" },
	{ name: "Downloaded Files", files: "15876" },
	{ name: "2023 Projects", files: "40" },
	{ name: "RAW Pictures", files: "543" },
	{ name: "Video Scripts", files: "07" },
	{ name: "Development", files: "4353" },
	{ name: "Blog Articles", files: "34" },
];

/**
 * A file shows a thumbnail when it has an `image`, else its type `icon` on a
 * tile tinted with `color`, a text class the tile reads through currentColor.
 */
export type FileItem = {
	name: string;
	size: string;
	date: string;
	image?: string;
	icon?: LucideIcon;
	color?: string;
};

export const FILES: FileItem[] = [
	{ name: "package.json", size: "229 bytes", date: "18/07/2024 11:32:41", icon: Braces, color: "text-amber-500" },
	{ name: "cover_letter.doc", size: "32 kb", date: "21/02/2024 08:48:13", icon: Newspaper, color: "text-sky-500" },
	{ name: "recording_09-10.mp3", size: "2.32 mb", date: "10/02/2024 11:25:08", icon: Headset, color: "text-emerald-500" },
	{ name: "wallpaper-widescreen.jpg", size: "900 kb", date: "23/03/2024 11:59:33", image: "/img/gallery/thumbs/2.jpg" },
	{ name: "screenshot-98731.jpg", size: "653 kb", date: "17/02/2024 03:30:34", image: "/img/gallery/thumbs/1.jpg" },
	{ name: "animation-trailer.mp4", size: "43.86 mb", date: "07/05/2024 15:56:40", icon: CirclePlay, color: "text-pink-400" },
	{ name: "instructions.pdf", size: "205.5 kb", date: "25/12/2024 11:17:53", icon: FileText, color: "text-red-400" },
	{ name: "signup-list.xls", size: "987.23 kb", date: "18/01/2024 21:10:54", icon: Grid2x2, color: "text-purple-400" },
	{ name: "sample-preview.jpg", size: "2.34 mb", date: "18/12/2024 23:04:12", image: "/img/gallery/thumbs/13.jpg" },
	{ name: "detailed-notes.txt", size: "54.5 kb", date: "05/11/2024 11:31:34", icon: Type, color: "text-indigo-500" },
	{ name: "presentation.ppt", size: "10.12 mb", date: "30/09/2024 17:50:53", icon: Presentation, color: "text-cyan-500" },
	{ name: "sample-icons.zip", size: "98.44 mb", date: "08/01/2024 07:09:13", icon: FileArchive, color: "text-foreground" },
	{ name: "data-list.yaml", size: "763.54 kb", date: "31/05/2024 02:52:29", icon: File, color: "text-lime-500" },
	{ name: "photoshop-output.jpg", size: "635 kb", date: "30/01/2024 00:54:57", image: "/img/gallery/thumbs/19.jpg" },
	{ name: "736183293836100.jpg", size: "75 kb", date: "13/03/2024 17:24:03", image: "/img/gallery/thumbs/24.jpg" },
	{ name: "00928921221212993283.jpg", size: "75 kb", date: "29/03/2024 11:47:12", image: "/img/gallery/thumbs/18.jpg" },
	{ name: "quarterly-report.pdf", size: "1.84 mb", date: "02/04/2024 09:15:22", icon: FileText, color: "text-red-400" },
	{ name: "team-offsite.jpg", size: "1.12 mb", date: "14/04/2024 16:42:08", image: "/img/gallery/thumbs/5.jpg" },
	{ name: "podcast-episode-12.mp3", size: "38.6 mb", date: "22/04/2024 07:30:51", icon: Headset, color: "text-emerald-500" },
	{ name: "tsconfig.json", size: "612 bytes", date: "03/05/2024 13:08:44", icon: Braces, color: "text-amber-500" },
	{ name: "product-demo.mp4", size: "128.4 mb", date: "11/05/2024 18:21:36", icon: CirclePlay, color: "text-pink-400" },
	{ name: "mountain-sunrise.jpg", size: "2.05 mb", date: "19/05/2024 05:47:19", image: "/img/gallery/thumbs/8.jpg" },
	{ name: "budget-2024.xls", size: "412.8 kb", date: "27/05/2024 10:55:03", icon: Grid2x2, color: "text-purple-400" },
	{ name: "meeting-minutes.doc", size: "48 kb", date: "04/06/2024 14:12:27", icon: Newspaper, color: "text-sky-500" },
	{ name: "brand-assets.zip", size: "212.3 mb", date: "12/06/2024 08:39:50", icon: FileArchive, color: "text-foreground" },
	{ name: "city-night.jpg", size: "967 kb", date: "20/06/2024 22:03:14", image: "/img/gallery/thumbs/11.jpg" },
	{ name: "pitch-deck.ppt", size: "15.7 mb", date: "28/06/2024 11:26:58", icon: Presentation, color: "text-cyan-500" },
	{ name: "changelog.txt", size: "8.2 kb", date: "06/07/2024 17:44:31", icon: Type, color: "text-indigo-500" },
];
