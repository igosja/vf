import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import { chartGradient, generateTimeSeriesData, CHART_TOOLTIP, chartTicks, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-sales-history");
let salesHistoryChart;

export const salesHistory = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Helper function for chart gradient fill
	const gradientBg = (context, colorStart, colorEnd) => {
		const chart = context.chart;
		const { ctx, chartArea } = chart;
		return chartArea ? chartGradient(ctx, chartArea, 0.9, colorStart, colorEnd) : null;
	};

	// Chart data
	const LAST_MONTH_DATA = generateTimeSeriesData(new Date("12 Aug 2023").getTime(), 19, {
		min: 105,
		max: 109,
	});

	const CURRENT_MONTH_DATA = generateTimeSeriesData(new Date("12 Aug 2023").getTime(), 19, {
		min: 110,
		max: 115,
	});

	const CHART_DATA = {
		datasets: [
			{
				label: "Current Month",
				data: CURRENT_MONTH_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(38, 198, 218, 0.2)", "rgba(38, 198, 218, 0)"),
				borderColor: COLORS.cyan,
				borderWidth: 1.25,
				tension: 0.35,
				pointRadius: 0,
				pointBackgroundColor: COLORS.cyan,
				pointBorderColor: COLORS.cyan,
				pointHoverBorderColor: COLORS.cyan,
				pointHoverBackgroundColor: COLORS.cyan,
			},
			{
				label: "Last Month",
				data: LAST_MONTH_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(254, 168, 76, 0.3)", "rgba(254, 168, 76, 0)"),
				borderColor: "#fea84c",
				borderWidth: 1.25,
				tension: 0.35,
				pointRadius: 0,
				pointBackgroundColor: "#fea84c",
				pointBorderColor: "#fea84c",
				pointHoverBorderColor: "#fea84c",
				pointHoverBackgroundColor: "#fea84c",
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
					left: -5,
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
					type: "time",
					distribution: "linear",
					ticks: {
						...chartTicks(),
						maxTicksLimit: 8,
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
						maxTicksLimit: 7,
						padding: 8,
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
		salesHistoryChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const salesHistoryUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(salesHistoryChart);
		});
	}
};
