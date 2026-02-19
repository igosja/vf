import Chart from "chart.js/auto";
import { chartTicks, CHART_TOOLTIP, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS, cssVar, rgb } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-outbound-calls");
let outboundCallsChart;

export const outboundCalls = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Chart data
	const CHART_DATA = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "This Year",
				data: [128, 117, 145, 180, 225, 100, 89],
				barThickness: 5,
				borderRadius: 10,
				backgroundColor: COLORS.teal,
				borderWidth: 0,
			},
			{
				label: "Last Year",
				data: [100, 80, 180, 134, 180, 90, 65],
				barThickness: 5,
				borderRadius: 10,
				backgroundColor: rgb(COLORS.teal, 0.25),
				borderWidth: 0,
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "bar",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: -5,
					right: 1,
					bottom: -5,
				},
			},
			indexAxis: "x",
			elements: {
				bar: {
					borderWidth: 0,
				},
			},
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
				},
				tooltip: {
					...CHART_TOOLTIP,
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

	// Init chart
	if (CHART_WRAPPER) {
		outboundCallsChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const outboundCallsUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(outboundCallsChart);
		});
	}
};
