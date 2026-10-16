import Chart from "chart.js/auto";
import { chartGradient, CHART_TOOLTIP, chartTicks, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-tickets-reopened");
let ticketsReopenedChart;

export const ticketsReopened = () => {
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
				label: "Tickets",
				data: [105, 105, 105, 107, 105, 107, 106, 106, 107, 107, 107, 109, 107, 109, 106, 107, 106, 106, 109],
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
				},
			},
			scales: {
				x: {
					border: {
						display: false,
					},
					grid: {
						display: false,
					},
					ticks: {
						...chartTicks(0),
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
					min: 80,
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
		ticketsReopenedChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const ticketsReopenedUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(ticketsReopenedChart);
		});
	}
};
