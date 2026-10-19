import { ChevronRight } from "lucide-react";
import { Collapsible } from "radix-ui";

import type { NavItem } from "@/data/navigation";
import { NavLink, useLocation } from "@/lib/router";
import { cn } from "@/lib/utils";

/** A link is current on its own page and on the pages under it, such as an AI Agent chat. */
export const matchesPath = (to: string, pathname: string) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`));

/** The links of one section, shared by the desktop flyout and the mobile drawer. */
export function NavList({ items, onNavigate }: { items: NavItem[]; onNavigate?: (to: string) => void }) {
	const { pathname } = useLocation();

	return (
		<ul className="space-y-px">
			{items.map((item) => {
				if ("children" in item) {
					const active = item.children.some((child) => child.to === pathname);

					return (
						<Collapsible.Root asChild key={item.label} defaultOpen={active}>
							<li className="group/sub">
								<Collapsible.Trigger
									className={cn(
										"relative flex h-10 w-full items-center gap-3 rounded-full px-4 text-left whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:bg-accent xl:hover:bg-sidebar-accent",
										active && "bg-primary/10 text-primary hover:bg-primary/10"
									)}
								>
									<item.icon className="size-5" />
									{item.label}
									<ChevronRight className="ml-auto size-3.5 transition-transform duration-300 group-data-[state=open]/sub:rotate-90" />
								</Collapsible.Trigger>

								<Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
									<ul className="pt-px pb-4 pl-9">
										{item.children.map((child) => (
											<li key={child.to}>
												<NavLink
													to={child.to}
													onClick={() => onNavigate?.(child.to)}
													className={({ isActive }) =>
														cn(
															"block rounded-full px-3 py-1 whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:text-primary",
															isActive && "text-primary"
														)
													}
												>
													{child.label}
												</NavLink>
											</li>
										))}
									</ul>
								</Collapsible.Content>
							</li>
						</Collapsible.Root>
					);
				}

				return (
					<li key={item.to}>
						<NavLink
							to={item.to}
							end={item.to === "/"}
							onClick={() => onNavigate?.(item.to)}
							className={({ isActive }) =>
								cn(
									"flex h-10 items-center gap-3 rounded-full px-4 whitespace-nowrap text-emphasis-foreground transition-colors duration-300 hover:bg-accent xl:hover:bg-sidebar-accent",
									isActive && "bg-primary/10 text-primary hover:bg-primary/10"
								)
							}
						>
							<item.icon className="size-5" />
							{item.label}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
