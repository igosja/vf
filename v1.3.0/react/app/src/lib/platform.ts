/**
 * Static for the lifetime of the page, so it is a module constant rather than a hook.
 * Nothing here can change and trigger a re-render.
 */
export const isMac = /mac/i.test((navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform ?? navigator.platform ?? "");
