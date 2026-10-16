import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import { useEffect, useRef } from "react";

import "@/styles/jsvectormap.css";
import { cn } from "@/lib/utils";

/**
 * A world map that fills its parent less a side margin, at a 2:1 ratio, and
 * refits when the parent resizes. `options` go to jsvectormap as they are, so
 * keep them in a constant outside the component: a new object remounts the map.
 */
export function VectorMap({ options, className }: { options: Record<string, unknown>; className?: string }) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current!;
		const parent = element.parentElement!;
		let width = 0;

		const fit = () => {
			if (parent.offsetWidth === width) return false;
			width = parent.offsetWidth;
			const size = width - (width < 550 ? 50 : 120);
			element.style.width = `${size}px`;
			element.style.height = `${size / 2}px`;
			return true;
		};

		fit();
		const map = new jsVectorMap({ selector: element, map: "world", draggable: false, zoomButtons: false, zoomOnScroll: false, ...options });
		const observer = new ResizeObserver(() => fit() && map.updateSize());
		observer.observe(parent);

		return () => {
			observer.disconnect();
			map.destroy();
			// destroy() leaves the drawn map behind; clear it so a remount starts clean.
			element.replaceChildren();
		};
	}, [options]);

	return <div ref={ref} className={cn("mx-auto", className)} />;
}
