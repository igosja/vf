import { ChevronDown, ChevronRight, List } from "lucide-react";
import { Fragment, useEffect, useState, type ReactNode } from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/providers/sidebar-provider";

import { MenuIcon } from "./nav-bar/nav-bar";

/**
 * The sticky bar at the top of every page: drawer toggle, title, page actions.
 * `breadcrumb` lists the trail ending at the current page. `toc` adds a
 * Navigate menu that jumps to each card on the page. App pages leave out the
 * title and fill the bar with a search field and actions instead, and turn
 * `menu` off while a selection or preview takes the bar over.
 */
export function ContentHeader({
	title,
	breadcrumb,
	toc,
	menu = true,
	children,
}: {
	title?: string;
	breadcrumb?: string[];
	toc?: boolean;
	menu?: boolean;
	children?: ReactNode;
}) {
	const { openDrawer } = useSidebar();

	return (
		<header className="sticky top-0 z-7 flex h-16 items-center gap-4 bg-linear-to-t from-transparent to-background to-20% sm:pr-2 print:hidden">
			{menu && (
				<button
					type="button"
					onClick={openDrawer}
					className="hidden avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-accent sm:grid xl:hidden"
				>
					<MenuIcon />
					<span className="sr-only">Open sidebar</span>
				</button>
			)}

			{title && <h2 className="text-base font-medium xl:pl-2">{title}</h2>}

			{breadcrumb && (
				<nav aria-label="Breadcrumb" className="ml-6 hidden text-sm sm:block">
					<ol className="flex items-center">
						{breadcrumb.map((item, index) =>
							index < breadcrumb.length - 1 ? (
								<Fragment key={item}>
									<li>
										<a href="#" className="text-foreground">
											{item}
										</a>
									</li>
									<li aria-hidden="true" className="px-2 text-muted-foreground">
										<ChevronRight className="size-3" />
									</li>
								</Fragment>
							) : (
								<li key={item} aria-current="page" className="text-muted-foreground">
									{item}
								</li>
							)
						)}
					</ol>
				</nav>
			)}

			{children}

			{toc && <PageNav />}
		</header>
	);
}

/** Lists every card title on the page. Each card is given an id from its title so the links can jump to it. */
function PageNav() {
	const [sections, setSections] = useState<{ id: string; label: string }[]>([]);

	useEffect(() => {
		// Only the page's own cards; a card shown inside another, as a sample, stays out.
		const titles = [...document.querySelectorAll<HTMLElement>("main [data-slot=card-title]")].filter(
			(title) => !title.closest("[data-slot=card]")?.parentElement?.closest("[data-slot=card]")
		);
		setSections(
			titles.map((title) => {
				const label = title.textContent ?? "";
				const id = label.trim().replace(/\s+/g, "-").toLowerCase();
				title.closest("[data-slot=card]")?.setAttribute("id", id);
				return { id, label };
			})
		);
	}, []);

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger className="ml-auto flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm text-emphasis-foreground transition-colors duration-300 hover:bg-accent data-[state=open]:bg-accent">
				<List />
				Navigate
				<ChevronDown className="size-3.5" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{sections.map((section) => (
					<DropdownMenuItem key={section.id} asChild>
						<a href={`#${section.id}`}>{section.label}</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
