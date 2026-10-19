import { ArrowLeft } from "lucide-react";
import { useEffect, type ComponentProps, type ReactNode } from "react";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";

/**
 * The page's own sidebar on the app pages: mail folders, contact groups,
 * calendar events. A column beside the content on xl, a drawer below it whose
 * back button returns to the site menu. `action` is the page's primary button;
 * the drawer leaves it out, since the page floats its own copy, unless
 * `drawerAction` keeps it there for a page that floats none.
 */
export function SecondarySidebar({
	title,
	action,
	drawerAction,
	children,
}: {
	title: string;
	action?: ReactNode;
	drawerAction?: boolean;
	children: ReactNode;
}) {
	const { setOpen, secondaryOpen, setSecondaryOpen, setHasSecondary } = useSidebar();

	useEffect(() => {
		setHasSecondary(true);
		return () => {
			setHasSecondary(false);
			setSecondaryOpen(false);
		};
	}, [setHasSecondary, setSecondaryOpen]);

	const back = () => {
		setSecondaryOpen(false);
		setOpen(true);
	};

	return (
		<>
			<aside data-slot="secondary-sidebar" className="sticky top-0 hidden h-screen w-72 shrink-0 px-1 xl:block print:hidden">
				<div className="no-scrollbar h-full overflow-y-auto p-6">
					<h2 className={cn("text-base leading-tight font-medium", !action && "mb-8")}>{title}</h2>
					{action && <div className="sticky top-0 z-1 -mx-1.5 mb-4 bg-linear-to-t from-transparent to-background to-20% py-3">{action}</div>}
					{children}
				</div>
			</aside>

			<Sheet open={secondaryOpen} onOpenChange={setSecondaryOpen}>
				<SheetContent
					side="left"
					showCloseButton={false}
					className="inset-y-2 left-2 h-auto w-72 gap-0 overflow-visible rounded-2xl border-0 bg-sidebar p-0 xl:hidden"
				>
					<SheetDescription className="sr-only">{title} options</SheetDescription>

					<div className="no-scrollbar h-full overflow-y-auto p-6">
						<div className="-mt-2 mb-6 flex items-center gap-2">
							<button
								type="button"
								onClick={back}
								className="-ml-2 grid avatar-mask size-8 place-items-center text-emphasis-foreground transition-colors duration-300 hover:bg-accent"
							>
								<ArrowLeft className="size-5" />
								<span className="sr-only">Back to menu</span>
							</button>
							<SheetTitle className="text-base font-medium text-emphasis-foreground">{title}</SheetTitle>
						</div>
						{drawerAction && action && (
							<div className="sticky top-0 z-1 -mx-1.5 mb-4 bg-linear-to-t from-transparent to-sidebar to-20% py-3">{action}</div>
						)}
						{children}
					</div>

					<SheetClose className="absolute inset-y-0 -right-3.5 my-auto h-20 w-1.5 rounded-full bg-card hover:opacity-85">
						<span className="sr-only">Close sidebar</span>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</>
	);
}

export function SecondarySidebarLabel({ className, ...props }: ComponentProps<"div">) {
	return <div className={cn("mb-2 text-sm leading-none text-muted-foreground", className)} {...props} />;
}

export function SecondarySidebarNav({ className, ...props }: ComponentProps<"nav">) {
	return <nav className={cn("-mx-3 mb-5 flex flex-col gap-px font-medium", className)} {...props} />;
}

/** A pill link. `badge` is a count at the end of the row. */
export function SecondarySidebarLink({ active, badge, className, children, ...props }: ComponentProps<"button"> & { active?: boolean; badge?: number }) {
	return (
		<button
			type="button"
			aria-current={active ? "page" : undefined}
			className={cn(
				"flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-left text-emphasis-foreground transition-colors duration-300 hover:bg-accent",
				active && "bg-primary/10 text-primary hover:bg-primary/10",
				className
			)}
			{...props}
		>
			{children}
			{badge !== undefined && <span className="ml-auto text-xs font-medium text-foreground">{badge}</span>}
		</button>
	);
}
