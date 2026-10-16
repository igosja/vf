import "chartjs-adapter-moment";
import { Chart } from "chart.js";
import { CHART_TOOLTIP, reloadChart } from "../../vendors/chart";
import { COLORS, cssVar } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-visits-source");
let visitsBySourceChart;

export const visitsBySource = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------
	// Chart data
	const CHART_DATA = {
		labels: ["Google", "Direct", "Bing", "Yahoo", "Others"],
		datasets: [
			{
				data: [23981, 16342, 9736, 7632, 5374],
				backgroundColor: [COLORS.blue, COLORS.green, COLORS.purple, COLORS.cyan, COLORS.orange],
				borderWidth: 4,
				borderColor: cssVar("--bs-chart-pie-border-color"),
				hoverOffset: 1,
				hoverBorderWidth: 0,
				borderRadius: 5,
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "doughnut",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
			cutout: 85,
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

	// Init chart
	if (CHART_WRAPPER) {
		visitsBySourceChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	const WRAPPER = document.getElementById("list-visits-source");
	let list = "";
	const DATA = [
		{
			source: "Google",
			visits: 23981,
			percentage: 52.6,
			className: "bg-primary",
			up: true,
		},
		{
			source: "Direct",
			visits: 16342,
			percentage: 31.3,
			className: "bg-success",
			up: true,
		},
		{
			source: "Bing",
			visits: 9736,
			percentage: 10.5,
			className: "bg-purple",
			up: false,
		},
		{
			source: "Yahoo",
			visits: 5687,
			percentage: 7.1,
			className: "bg-warning",
			up: false,
		},
		{
			source: "Others",
			visits: 7632,
			percentage: 17.2,
			className: "bg-info",
			up: false,
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="d-flex align-items-start">
                        <i class="${item.className} w-2.5 h-2.5 mt-1.5 rounded-circle me-3"></i>

                        <div class="flex-grow-1 d-flex align-items-center flex-wrap">
							<div class="flex-grow-1 text-body-emphasis">${item.source}</div>

							<div class="fs-5 fw-medium text-end w-12 text-body-emphasis">${item.visits}</div>

							<div class="ms-4 d-none d-sm-flex align-items-center justify-content-end w-14 ${item.up ? "text-success" : "text-danger"}">
								${item.percentage}%

								<i class="ph fs-5 ms-1 ${item.up ? "ph-arrow-circle-up" : "ph-arrow-circle-down"}"></i>
							</div>

							<div class="progress w-100 my-4 h-0.5" role="progressbar" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100">
								<div class="progress-bar ${item.className}" style="width: ${item.percentage}%"></div>
							</div>
						</div>
                    </div>`;

			WRAPPER.innerHTML = list;
		});
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const visitsBySourceUpdate = () => {
	const updateBorderColors = () => {
		visitsBySourceChart.data.datasets[0].borderColor = cssVar("--bs-chart-pie-border-color");
	};

	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(visitsBySourceChart, updateBorderColors());
		});
	}
};
