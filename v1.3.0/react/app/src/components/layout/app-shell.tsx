import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/providers/sidebar-provider";

import { NavBar } from "./nav-bar/nav-bar";
import { RouteLoader, usePageLoader } from "./route-loader";
import { Sidebar } from "./sidebar/sidebar";

export function AppShell() {
	usePageLoader();

	// The page scrolls inside the scroll area, not the window, so a new page starts it back at the top.
	const { pathname } = useLocation();
	const viewport = useRef<HTMLDivElement>(null);
	useEffect(() => {
		viewport.current?.scrollTo(0, 0);
	}, [pathname]);

	return (
		<TooltipProvider>
			<SidebarProvider>
				<Sidebar />
				{/* The page scrolls here rather than in the window, so every backdrop covers
				    its scrollbar. The scrollbar runs down the right edge under the see-through
				    nav bar: above the page, below the nav bar and the panel backdrops. */}
				<ScrollArea viewportRef={viewport} className="h-screen print:h-auto" scrollbarClassName="z-9 print:hidden">
					{/* A page with its own sidebar sits that sidebar flush against the rail. Printed, the page fills the sheet. */}
					<main className="px-4 pb-14 sm:pe-17 sm:pb-0 xl:pl-28.5 xl:has-data-[slot=secondary-sidebar]:pl-24 print:p-0">
						<Outlet />
					</main>
				</ScrollArea>
				<NavBar />
				<RouteLoader />
				<Toaster />
			</SidebarProvider>
		</TooltipProvider>
	);
}
