import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { Logo } from "@/components/common/logo";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { NAVIGATION } from "@/data/navigation";
import { Link, useLocation } from "@/lib/router";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";

import { matchesPath, NavList } from "./nav-list";

/** Grace period before the flyout closes, so overshooting its edge is forgiven. */
const CLOSE_DELAY = 60;
/** Switching sections fades the old links out, pauses, then brings the new ones in. */
const SWAP_OUT = 200;
const SWAP_GAP = 60;
const SWAP_IN = 200;

const sectionOf = (pathname: string) =>
	NAVIGATION.findIndex((section) =>
		section.items.some((item) => ("children" in item ? item.children.some((child) => child.to === pathname) : matchesPath(item.to, pathname)))
	);

export function Sidebar() {
	const { pathname } = useLocation();
	const { open: drawerOpen, setOpen: setDrawerOpen, hasSecondary, setSecondaryOpen } = useSidebar();

	const [previewing, setPreviewing] = useState<number | null>(null);
	const [switching, setSwitching] = useState(false);
	const closeTimer = useRef<number>(undefined);
	const lists = useRef<(HTMLDivElement | null)[]>([]);
	const triggers = useRef<(HTMLButtonElement | null)[]>([]);

	const current = sectionOf(pathname);

	const show = (index: number) => {
		window.clearTimeout(closeTimer.current);
		if (index === previewing) return;

		const isSwitch = previewing !== null;
		setSwitching(isSwitch);
		setPreviewing(index);

		// The new links slide a few pixels in the direction the pointer travelled.
		if (isSwitch && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			const direction = index > previewing ? 1 : -1;
			lists.current[index]?.animate([{ transform: `translateY(${direction * 6}px)` }, { transform: "none" }], {
				duration: SWAP_IN,
				delay: SWAP_OUT + SWAP_GAP,
				easing: "ease-out",
				fill: "backwards",
			});
		}
	};

	const hide = () => {
		window.clearTimeout(closeTimer.current);
		setPreviewing(null);
	};

	// In the drawer, the current page's link opens the page's own sidebar when it has one.
	const onDrawerNavigate = (to: string) => {
		setDrawerOpen(false);
		if (to === pathname && hasSecondary) setSecondaryOpen(true);
	};

	// A route change closes the flyout behind it.
	useEffect(hide, [pathname]);
	useEffect(() => () => window.clearTimeout(closeTimer.current), []);

	const onTriggerKeyDown = (event: KeyboardEvent, index: number) => {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			const step = event.key === "ArrowDown" ? 1 : -1;
			triggers.current[(index + step + NAVIGATION.length) % NAVIGATION.length]?.focus();
		} else if (event.key === "Enter" || event.key === " " || event.key === "ArrowRight") {
			event.preventDefault();
			show(index);
			lists.current[index]?.querySelector<HTMLElement>("a, button")?.focus();
		}
	};

	return (
		<>
			{/* Desktop: icon rail plus one flyout panel shared by every section. */}
			<aside
				className="fixed inset-y-0 left-0 z-9 hidden w-24 xl:block print:hidden"
				onMouseEnter={() => window.clearTimeout(closeTimer.current)}
				onMouseLeave={() => (closeTimer.current = window.setTimeout(hide, CLOSE_DELAY))}
				onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && hide()}
				onKeyDown={(event) => event.key === "Escape" && hide()}
			>
				{/* Above the panel, so the panel slides out from behind it. */}
				<div className="relative z-20 flex h-full flex-col bg-sidebar">
					<Link to="/" className="mb-4 flex justify-center pt-6 pb-2" aria-label="Home">
						<Logo />
					</Link>

					<nav className="flex flex-col" aria-label="Main">
						{NAVIGATION.map((section, index) => {
							const highlighted = previewing === null ? index === current : index === previewing;

							return (
								<button
									key={section.label}
									ref={(el) => {
										triggers.current[index] = el;
									}}
									type="button"
									aria-expanded={previewing === index}
									aria-controls={`sidebar-section-${index}`}
									onMouseEnter={() => show(index)}
									onFocus={() => show(index)}
									onKeyDown={(event) => onTriggerKeyDown(event, index)}
									className={cn(
										"group/rail flex flex-col items-center py-3 text-xs leading-none font-medium text-emphasis-foreground transition-colors duration-200 outline-none",
										highlighted && "text-primary"
									)}
								>
									<span className="relative isolate mb-2 inline-flex">
										<span
											className={cn(
												"absolute -inset-x-4 -inset-y-1 -z-10 scale-80 rounded-full bg-primary/10 opacity-0 transition duration-200 group-hover/rail:scale-100 group-hover/rail:opacity-100",
												highlighted && "scale-100 opacity-100"
											)}
										/>
										<section.icon className="size-5.5" />
									</span>
									{section.label}
								</button>
							);
						})}
					</nav>
				</div>

				{/* transition-all, so visibility waits out the fade and slide on the way out too. */}
				<div
					className={cn(
						"invisible absolute inset-y-0 left-24 z-10 w-56 -translate-x-5 rounded-r-2xl border-x border-sidebar-border bg-sidebar opacity-0 shadow-lg transition-all duration-200 ease-in",
						previewing !== null && "visible translate-x-0 opacity-100 duration-300 ease-out"
					)}
				>
					{NAVIGATION.map((section, index) => (
						<div
							key={section.label}
							id={`sidebar-section-${index}`}
							ref={(el) => {
								lists.current[index] = el;
							}}
							className={cn(
								"invisible absolute inset-0 no-scrollbar overflow-y-auto px-3 py-6 opacity-0 transition-all duration-200 ease-in",
								previewing === index && "visible opacity-100 ease-out",
								previewing === index && switching && "delay-260"
							)}
						>
							<NavList items={section.items} />
						</div>
					))}
				</div>
			</aside>

			{/* Below xl: the same sections stacked in a drawer. */}
			<Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
				<SheetContent
					side="left"
					showCloseButton={false}
					className="inset-y-2 left-2 h-auto w-72 gap-0 overflow-visible rounded-2xl border-0 bg-card p-0 xl:hidden"
				>
					<SheetTitle className="sr-only">Menu</SheetTitle>
					<SheetDescription className="sr-only">Site navigation</SheetDescription>

					<div className="no-scrollbar h-full overflow-y-auto p-6">
						<Link to="/" onClick={() => setDrawerOpen(false)} className="-mt-2 mb-6 flex items-center gap-3 text-emphasis-foreground">
							<Logo />
							<span className="text-lg font-medium">Materia</span>
						</Link>

						{NAVIGATION.map((section) => (
							<div key={section.label} className="py-3">
								<div className="mb-2 text-xs font-medium text-muted-foreground">{section.label}</div>
								<div className="-mx-4">
									<NavList items={section.items} onNavigate={onDrawerNavigate} />
								</div>
							</div>
						))}
					</div>

					<SheetClose className="absolute inset-y-0 -right-3.5 my-auto h-20 w-1.5 rounded-full bg-card hover:opacity-85">
						<span className="sr-only">Close sidebar</span>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</>
	);
}
