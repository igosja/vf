import { useEffect } from "react";
import { useNavigation } from "react-router";

import { Logo } from "@/components/common/logo";
import { cn } from "@/lib/utils";

/**
 * The page loader again, for client-side navigation: each page is its own
 * chunk, so moving between pages can wait on a download. The 150ms delay keeps
 * it from flashing when the chunk is already cached.
 */
export function RouteLoader() {
	const loading = useNavigation().state === "loading";

	return (
		<div
			role="status"
			aria-label="Loading"
			aria-hidden={!loading}
			className={cn(
				"fixed inset-0 z-100 grid place-items-center bg-background/50 backdrop-blur-sm transition-opacity duration-300",
				loading ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
			)}
		>
			<div className="relative grid size-24 place-items-center">
				<Logo />
				<div className="absolute size-20 animate-spin rounded-full border-2 border-emphasis-foreground border-r-transparent" />
			</div>
		</div>
	);
}

/**
 * Fades out the loader in index.html. It stays up until the window has
 * loaded, fonts and images included, so the first page never shows half drawn.
 * Every layout route calls this once.
 */
export function usePageLoader() {
	useEffect(() => {
		const loader = document.getElementById("page-loader");
		if (!loader) return;
		let timer = 0;
		const hide = () => {
			loader.dataset.hiding = "";
			timer = window.setTimeout(() => loader.remove(), 500);
		};
		if (document.readyState === "complete") hide();
		else window.addEventListener("load", hide, { once: true });
		return () => {
			window.removeEventListener("load", hide);
			window.clearTimeout(timer);
		};
	}, []);
}
