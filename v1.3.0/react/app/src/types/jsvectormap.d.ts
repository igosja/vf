// jsvectormap ships without types. These cover the parts the maps use.
declare module "jsvectormap" {
	export default class jsVectorMap {
		constructor(options: { selector: HTMLElement; map: string } & Record<string, unknown>);
		updateSize(): void;
		destroy(): void;
	}
}

// Registers the world map on the global the library sets up.
declare module "jsvectormap/dist/maps/world.js";
