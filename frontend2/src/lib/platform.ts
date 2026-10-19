import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function detectMac() {
	const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
	return /mac/i.test(nav.userAgentData?.platform ?? nav.platform ?? "");
}

/**
 * Whether the visitor is on a Mac, for ⌘ versus Ctrl shortcuts. The server
 * cannot know, so it renders the Ctrl variant and the browser corrects it
 * right after hydration without a mismatch.
 */
export function useIsMac() {
	return useSyncExternalStore(subscribe, detectMac, () => false);
}
