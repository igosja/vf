"use client";

/**
 * A thin layer that keeps the template's react-router API (`Link to`, `NavLink`,
 * `useNavigate`, `useLocation`) on top of the Next.js App Router, so the pages
 * ported from the Vite version work unchanged.
 */
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState, type ComponentProps, type ReactNode } from "react";

type To = string;

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & { to: To };

export function Link({ to, ...props }: LinkProps) {
	return <NextLink href={to} {...props} />;
}

type NavLinkRenderProps = { isActive: boolean };

type NavLinkProps = Omit<LinkProps, "className" | "children" | "style"> & {
	/** Only match the exact path, not its children. */
	end?: boolean;
	className?: string | ((props: NavLinkRenderProps) => string | undefined);
	style?: React.CSSProperties | ((props: NavLinkRenderProps) => React.CSSProperties | undefined);
	children?: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
};

function matches(pathname: string, to: string, end?: boolean) {
	const target = to.length > 1 ? to.replace(/\/+$/, "") : to;
	if (pathname === target) return true;
	if (end || target === "/") return false;
	return pathname.startsWith(`${target}/`);
}

export function NavLink({ to, end, className, style, children, ...props }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = matches(pathname, to, end);
	const state = { isActive };

	return (
		<NextLink
			href={to}
			aria-current={isActive ? "page" : undefined}
			className={typeof className === "function" ? className(state) : className}
			style={typeof style === "function" ? style(state) : style}
			{...props}
		>
			{typeof children === "function" ? children(state) : children}
		</NextLink>
	);
}

/*
 * react-router can carry `state` along with a navigation. The App Router has no
 * such thing, so the state for the next page is parked here and read once by
 * `useLocation` on that page. A reload starts without it, as in react-router.
 */
let pendingState: unknown = null;

type NavigateOptions = { replace?: boolean; state?: unknown; scroll?: boolean };

export function useNavigate() {
	const router = useRouter();
	const pathname = usePathname();

	return useCallback(
		(to: To | number, options: NavigateOptions = {}) => {
			if (typeof to === "number") {
				if (to < 0) router.back();
				else router.forward();
				return;
			}
			pendingState = options.state ?? null;
			const href = to === "." ? pathname : to;
			// Navigating to the current page only to drop its state: nothing to load.
			if (href === pathname && to === ".") return;
			if (options.replace) router.replace(href, { scroll: options.scroll });
			else router.push(href, { scroll: options.scroll });
		},
		[router, pathname]
	);
}

export function useLocation() {
	const pathname = usePathname();
	// Taken once, when the page mounts, then cleared for the next navigation.
	const [state] = useState(() => {
		const value = pendingState;
		pendingState = null;
		return value;
	});
	return { pathname, state };
}
