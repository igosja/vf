import Chart from "chart.js/auto";
import { reloadChart, CHART_TOOLTIP, CHART_GRID, chartTicks } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-user-acquisition");
let userAcquisitionChart;

export const userAcquisition = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	const CHART_DATA = {
		labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10", "17/10"],
		datasets: [
			{
				label: "Organic Search",
				data: [13, 23, 30, 8, 13, 27, 54, 60],
				backgroundColor: COLORS.blue,
				borderRadius: 5,
				hoverOffset: 0,
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 1.5,
				barThickness: 7,
			},
			{
				label: "Paid Search",
				data: [25, 20, 20, 40, 32, 10, 20, 72],
				backgroundColor: COLORS.green,
				borderRadius: 5,
				hoverOffset: 0,
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 1.5,
				barThickness: 7,
			},
			{
				label: "Direct",
				data: [20, 45, 20, 28, 10, 50, 45, 30],
				backgroundColor: COLORS.cyan,
				borderRadius: 5,
				hoverOffset: 0,
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 1.5,
				barThickness: 7,
			},
			{
				label: "Others",
				data: [10, 20, 35, 40, 12, 30, 18, 43],
				backgroundColor: COLORS.orange,
				borderRadius: 5,
				hoverOffset: 0,
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 1.5,
				barThickness: 7,
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
					left: -3,
					bottom: 0,
				},
			},
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
						display: false,
					},
					ticks: {
						...chartTicks(0),
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
						padding: 2,
						...chartTicks(),
					},
				},
			},
		},
	};

	if (CHART_WRAPPER) {
		userAcquisitionChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	let list = "";
	const WRAPPER = document.getElementById("list-user-acquisition");
	const DATA = [
		{
			source: "Organic Search",
			color: "bg-primary",
			visits: 243.2,
			percentage: 32.4,
			opacity: 1,
			up: true,
		},
		{
			source: "Paid Search",
			color: "bg-success",
			visits: 142.5,
			percentage: 66.1,
			opacity: 0.6,
			up: true,
		},
		{
			source: "Direct",
			color: "bg-info",
			visits: 78.2,
			percentage: 10.9,
			opacity: 0.3,
			up: false,
		},
		{
			source: "Others",
			color: "bg-warning",
			visits: 32.5,
			percentage: 54.1,
			opacity: 0.1,
			up: false,
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="d-flex align-items-start">
						<i class="w-2.5 h-2.5 mt-1.5 rounded-circle me-3 ${item.color}"></i>

                        <div class="flex-grow-1 d-flex align-items-center flex-wrap">
							<div class="flex-grow-1 text-body-emphasis">${item.source}</div>

							<div class="fs-5 fw-medium text-end w-12 text-body-emphasis">${item.visits}</div>

							<div class="ms-4 d-none d-sm-flex align-items-center justify-content-end w-14 ${item.up ? "text-success" : "text-danger"}">
								${item.percentage}%

								<i class="ph fs-5 ms-1 ${item.up ? "ph-arrow-circle-up" : "ph-arrow-circle-down"}"></i>
							</div>

							<div class="progress w-100 my-4 h-0.5" role="progressbar" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100">
								<div class="progress-bar ${item.color}" style="width: ${item.percentage}%"></div>
							</div>
						</div>
                    </div>`;

			WRAPPER.innerHTML = list;
		});
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const userAcquisitionChartUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(userAcquisitionChart);
		});
	}
};
