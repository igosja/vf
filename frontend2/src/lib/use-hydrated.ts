import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False on the server and during hydration, true once the page runs in the
 * browser. Pages are prerendered at build time, so anything that depends on
 * the current date or time waits for this, or the HTML would carry the build
 * date and fail to hydrate.
 */
export function useHydrated() {
	return useSyncExternalStore(
		subscribe,
		() => true,
		() => false
	);
}
