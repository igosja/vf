"use client";

import { BookUser, BrushCleaning, CalendarCheck, File, FileSearch, FileText, Image, Mail, SquareCheck, TextSearch } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { SecondarySidebar, SecondarySidebarLabel, SecondarySidebarLink, SecondarySidebarNav } from "@/components/layout/sidebar/secondary-sidebar";
import { SEARCH_HISTORY, SEARCH_RESULTS } from "@/data/search";

const AREAS = [
	{ label: "Everything", icon: FileSearch },
	{ label: "Documents", icon: FileText },
	{ label: "Files", icon: File },
	{ label: "Contacts", icon: BookUser },
	{ label: "Photos", icon: Image },
	{ label: "Mail", icon: Mail },
	{ label: "Todo Lists", icon: SquareCheck },
	{ label: "Events", icon: CalendarCheck },
];

const QUERY = /\b(sales|leads|sale|lead)\b/gi;

/** The title with every word of the query marked. */
function Highlight({ text }: { text: string }) {
	return text.split(QUERY).map((part, index) =>
		index % 2 ? (
			<mark key={index} className="bg-amber-400/50 text-black">
				{part}
			</mark>
		) : (
			part
		)
	);
}

function SearchResultsSidebar() {
	const [area, setArea] = useState(AREAS[0].label);
	const [history, setHistory] = useState(SEARCH_HISTORY);

	return (
		<SecondarySidebar title="Search Results">
			<SecondarySidebarLabel>Result Areas</SecondarySidebarLabel>
			<SecondarySidebarNav>
				{AREAS.map((item) => (
					<SecondarySidebarLink key={item.label} active={area === item.label} onClick={() => setArea(item.label)}>
						<item.icon />
						{item.label}
					</SecondarySidebarLink>
				))}
			</SecondarySidebarNav>

			<SecondarySidebarLabel className="mb-1 flex items-center leading-normal">
				<span className="flex-1">Recent Searches</span>
				{history.length > 0 && (
					<IconButton className="-mr-2" onClick={() => setHistory([])}>
						<BrushCleaning />
						<span className="sr-only">Clear recent searches</span>
					</IconButton>
				)}
			</SecondarySidebarLabel>
			<div className="-mx-3 flex flex-col gap-1 text-emphasis-foreground">
				{history.map((item) => (
					<a key={item} href="#" className="rounded-full px-3 py-1 text-emphasis-foreground transition-colors hover:bg-accent">
						{item}
					</a>
				))}
				{history.length === 0 && <p className="px-2 text-muted-foreground">No recent searches</p>}
			</div>
		</SecondarySidebar>
	);
}

export default function SearchResults() {
	return (
		<div className="flex items-start">
			<SearchResultsSidebar />

			<div className="min-w-0 flex-1 pb-4">
				<ContentHeader>
					<div className="xl:px-2">
						<span className="hidden md:inline">89 Search results for </span>
						<span className="font-medium text-emphasis-foreground">"Sales leads"</span>
					</div>

					<div className="-mr-2 ml-auto flex items-center">
						<Button variant="ghost" className="hidden sm:inline-flex">
							<TextSearch />
							Advanced Search
						</Button>
					</div>
				</ContentHeader>

				<div className="flex flex-col gap-2">
					{SEARCH_RESULTS.map((item) => (
						<a key={item.path} href="#" className="rounded-2xl bg-card px-4 py-3">
							<div className="mb-1 truncate font-medium text-foreground">
								<Highlight text={item.title} />
							</div>
							<div className="truncate text-xs text-muted-foreground">{item.path}</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
