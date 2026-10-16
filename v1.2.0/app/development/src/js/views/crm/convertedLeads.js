import Chart from "chart.js/auto";
import { chartGradient, CHART_TOOLTIP, chartTicks, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-converted-leads");
let convertedLeadsChart;

export const convertedLeads = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Helper function for chart gradient fill
	const gradientBg = (context, colorStart, colorEnd) => {
		const chart = context.chart;
		const { ctx, chartArea } = chart;
		return chartArea ? chartGradient(ctx, chartArea, 0.75, colorStart, colorEnd) : null;
	};

	// Chart data
	const CHART_DATA = {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
		datasets: [
			{
				label: "Receieved",
				data: [109, 106, 105, 106, 108, 109, 106, 109, 107, 105, 105, 105, 105, 108, 105, 107, 106, 109, 107],
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(16, 185, 129, 0.25)", "rgba(16, 185, 129, 0"),
				borderColor: COLORS.green,
				borderWidth: 1.25,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: COLORS.green,
				pointBorderColor: COLORS.green,
				pointHoverBorderColor: COLORS.green,
				pointHoverBackgroundColor: COLORS.green,
			},
			{
				label: "Converted",
				data: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 115, 111],
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(254, 168, 76, 0.1)", "rgba(254, 168, 76, 0)"),
				borderColor: COLORS.orange,
				borderWidth: 1.25,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: COLORS.orange,
				pointBorderColor: COLORS.orange,
				pointHoverBorderColor: COLORS.orange,
				pointHoverBackgroundColor: COLORS.orange,
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "line",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			interaction: {
				mode: "index",
				intersect: false,
			},
			layout: {
				padding: {
					left: "-5",
					bottom: "-5",
				},
			},
			scales: {
				x: {
					border: {
						display: false,
					},
					grid: {
						...CHART_GRID,
					},
					ticks: {
						...chartTicks(),
						maxTicksLimit: 12,
					},
				},
				y: {
					border: {
						display: false,
					},
					grid: {
						...CHART_GRID,
					},
					min: 100,
					max: 120,
					ticks: {
						...chartTicks(),
						maxTicksLimit: 6,
						callback: (label) => {
							return label + "K";
						},
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					...CHART_TOOLTIP,
				},
			},
		},
	};

	// Chart init
	if (CHART_WRAPPER) {
		convertedLeadsChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const convertedLeadsUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(convertedLeadsChart);
		});
	}
};
