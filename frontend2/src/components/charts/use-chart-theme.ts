import "chartjs-adapter-date-fns";
import {
	ArcElement,
	BarController,
	BarElement,
	CategoryScale,
	Chart,
	DoughnutController,
	Filler,
	LinearScale,
	LineController,
	LineElement,
	PieController,
	PointElement,
	ScatterController,
	TimeScale,
	Tooltip,
	type ChartArea,
} from "chart.js";
import { useMemo } from "react";

import { useTheme } from "@/providers/theme-provider";

// Controllers are registered too, so a bar chart can carry a line dataset.
Chart.register(
	ArcElement,
	BarController,
	BarElement,
	CategoryScale,
	DoughnutController,
	Filler,
	LinearScale,
	LineController,
	LineElement,
	PieController,
	PointElement,
	ScatterController,
	TimeScale,
	Tooltip
);

const isServer = typeof document === "undefined";

/** Empty on the server: charts draw on a canvas in the browser only, so nothing there reads it. */
const cssVar = (name: string) => (isServer ? "" : getComputedStyle(document.documentElement).getPropertyValue(name).trim());

/** next/font gives Figtree a generated family name, published on <html> as --font-figtree. */
const font = () => ({ family: cssVar("--font-figtree") || "Figtree", size: 10 });

let probe: CanvasRenderingContext2D | undefined;

/**
 * A palette colour from the stylesheet as `rgb(r g b)`. Tailwind writes its
 * colours in oklch, which Chart.js cannot parse when it works out hover
 * shades, so one pixel of canvas converts them.
 */
export function paletteColor(name: string) {
	if (isServer) return "rgb(0 0 0)";
	probe ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
	probe.clearRect(0, 0, 1, 1);
	probe.fillStyle = cssVar(name);
	probe.fillRect(0, 0, 1, 1);
	const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
	return `rgb(${r} ${g} ${b})`;
}

/**
 * The categorical palette, read once from Tailwind's own colours: these never
 * change with the colour mode. Each key names the hue its utilities use, so
 * `CHART_COLORS.amber` is the same colour as `bg-amber-400`.
 */
export const CHART_COLORS = {
	sky: paletteColor("--color-sky-500"),
	indigo: paletteColor("--color-indigo-400"),
	purple: paletteColor("--color-purple-400"),
	pink: paletteColor("--color-pink-400"),
	red: paletteColor("--color-red-400"),
	amber: paletteColor("--color-amber-400"),
	lime: paletteColor("--color-lime-500"),
	emerald: paletteColor("--color-emerald-500"),
	teal: paletteColor("--color-teal-500"),
	cyan: paletteColor("--color-cyan-500"),
};

/** A palette colour at `amount` opacity: `rgb(r g b)` becomes `rgb(r g b / amount)`. */
export const alpha = (color: string, amount: number) => color.replace(/\)$/, ` / ${amount})`);

/** A vertical fade under a line, from `start` near the top to `end` at the base. */
export function areaGradient(context: { chart: Chart }, stop: number, start: string, end: string) {
	const { ctx, chartArea } = context.chart as { ctx: CanvasRenderingContext2D; chartArea?: ChartArea };
	if (!chartArea) return undefined;

	const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
	gradient.addColorStop(0, end);
	gradient.addColorStop(stop, start);
	return gradient;
}

/**
 * Canvas colours cannot follow a CSS variable on their own, so they are read
 * from the stylesheet and read again whenever the colour mode flips.
 */
export function useChartTheme() {
	const { resolvedTheme: mode } = useTheme();

	return useMemo(() => {
		const muted = cssVar("--muted-foreground");
		const FONT = font();

		return {
			mode,
			tooltip: {
				titleFont: { ...FONT, weight: "normal" as const },
				bodyFont: FONT,
				titleColor: cssVar("--tooltip-foreground"),
				bodyColor: cssVar("--tooltip-foreground"),
				backgroundColor: cssVar("--tooltip"),
				titleMarginBottom: 3,
				padding: 10,
				cornerRadius: 6,
				displayColors: false,
				caretSize: 0,
			},
			ticks: (padding = 8, align: "inner" | "center" = "inner") => ({
				font: FONT,
				color: muted,
				padding,
				align,
				autoSkip: true,
				maxRotation: 0,
			}),
			grid: {
				drawTicks: false,
				color: cssVar("--muted"),
			},
			pieBorder: cssVar("--card"),
		};
		// `mode` is the trigger: the variables read above change when it does.
	}, [mode]);
}
