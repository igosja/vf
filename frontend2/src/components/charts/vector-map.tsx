"use client";

import dynamic from "next/dynamic";

/**
 * jsvectormap draws straight into the DOM and touches `window` as soon as it
 * loads, so the map only ever loads in the browser.
 */
export const VectorMap = dynamic(() => import("./vector-map-client").then((module) => module.VectorMap), { ssr: false });

/** The same map with every extra projection registered (USA, Spain, Canada), for the Maps page. */
export const VectorMapWithAllMaps = dynamic(
	async () => {
		// The map files register on the global jsvectormap sets up, so they load before the component.
		await import("./maps");
		return (await import("./vector-map-client")).VectorMap;
	},
	{ ssr: false }
);
