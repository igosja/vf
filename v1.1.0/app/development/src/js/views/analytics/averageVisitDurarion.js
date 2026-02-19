import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import { chartGradient, CHART_TOOLTIP, CHART_GRID, chartTicks, reloadChart } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-visit-duration");
let visitDurationChart;

export const averageVisitDuration = () => {
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
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
		datasets: [
			{
				label: "Current Month",
				data: [100, 80, 100, 75, 95, 80, 100, 85, 110, 80, 110],
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
				label: "Last Month",
				data: [160, 130, 160, 110, 150, 120, 165, 130, 170, 110, 160],
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
					},
				},
				y: {
					border: {
						display: false,
					},
					grid: {
						...CHART_GRID,
					},
					min: 0,
					max: 250,
					ticks: {
						...chartTicks(),
						maxTicksLimit: 6,
						callback: (label) => {
							return label + "s";
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
		visitDurationChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const visitDurationUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(visitDurationChart);
		});
	}
};
