import Chart from "chart.js/auto";
import { reloadChart, CHART_TOOLTIP, chartTicks, CHART_GRID } from "../../vendors/chart";
import { COLORS, cssVar } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-budget-utilization");
let budgetUtilizationChart;

export const budgetUtilization = () => {
	// ----------------------------------------------
	// Chart
	// ----------------------------------------------
	const CHART_DATA = {
		labels: ["#3243", "#4546", "#3001", "#6079", "#9943", "#1930"],
		datasets: [
			{
				label: "Current Utilization",
				data: [83, 5, 69.25, 53, 0, 28],
				backgroundColor: COLORS.cyan,
				categoryPercentage: 0.15,
				borderWidth: 0,
				borderRadius: 10,
			},
			{
				label: "Proposed Budget",
				data: [70, 70, 70, 70, 70, 70],
				backgroundColor: "rgba(38, 198, 218, 0.3)",
				categoryPercentage: 0.3,
				borderWidth: 0,
				borderRadius: 10,
				grouped: false,
			},
		],
	};
	const CHART_CONFIG = {
		type: "bar",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: -5,
					bottom: 0,
				},
			},
			responsive: true,
			indexAxis: "y",
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
				},
				tooltip: {
					...CHART_TOOLTIP,
					callbacks: {
						label: (tooltipItem, data) => {
							return tooltipItem.formattedValue + "K";
						},
					},
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
						callback: (label, index, labels) => {
							return label + "K";
						},
					},
				},
				y: {
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
			},
		},
	};

	if (CHART_WRAPPER) {
		budgetUtilizationChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const budgetUtilizationUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(budgetUtilizationChart);
		});
	}
};
