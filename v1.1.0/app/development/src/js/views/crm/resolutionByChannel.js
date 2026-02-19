import "jsvectormap/dist/maps/world.js";
import Chart from "chart.js/auto";
import { reloadChart, CHART_TOOLTIP, chartTicks, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-resolution-by-channel");
let resolutionByChannelChart;

export const resolutionByChannel = () => {
	const CHART_DATA = {
		labels: ["Email", "Phone", "Twitter", "Facebook", "Web", "In Person", "Mobile App"],
		datasets: [
			{
				label: "Sessions",
				data: [83, 44, 32, 53, 62, 23, 42],
				backgroundColor: [COLORS.green, COLORS.purple, COLORS.cyan, COLORS.blue, COLORS.orange, COLORS.red, COLORS.teal],
				barThickness: 3,
				borderWidth: 0,
				borderRadius: 10,
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
					left: 0,
					bottom: -5,
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
							return label;
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
		resolutionByChannelChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const resolutionByChannelUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(resolutionByChannelChart);
		});
	}
};
