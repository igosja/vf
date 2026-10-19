"use client";

import { useEffect } from "react";

import { Logo } from "@/components/common/logo";

/**
 * The page loader again, for client-side navigation: Next.js shows it from the
 * route group's `loading.tsx` while the next page streams in. The 150ms delay
 * keeps it from flashing when the page is already prefetched.
 */
export function RouteLoader() {
	return (
		<div role="status" aria-label="Loading" className="route-loader fixed inset-0 z-100 grid place-items-center bg-background/50 backdrop-blur-sm">
			<div className="relative grid size-24 place-items-center">
				<Logo />
				<div className="absolute size-20 animate-spin rounded-full border-2 border-emphasis-foreground border-r-transparent" />
			</div>
		</div>
	);
}

/**
 * Fades out the loader from the root layout. It stays up until the window has
 * loaded, fonts and images included, so the first page never shows half drawn.
 * Every layout calls this once.
 */
export function usePageLoader() {
	useEffect(() => {
		const loader = document.getElementById("page-loader");
		if (!loader) return;
		let timer = 0;
		const hide = () => {
			loader.dataset.hiding = "";
			// Hidden, not removed: React owns the node and would trip over it on the next render.
			timer = window.setTimeout(() => (loader.style.display = "none"), 500);
		};
		if (document.readyState === "complete") hide();
		else window.addEventListener("load", hide, { once: true });
		return () => {
			window.removeEventListener("load", hide);
			window.clearTimeout(timer);
		};
	}, []);
}
