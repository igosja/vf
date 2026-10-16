import Chart from "chart.js/auto";
import { CHART_TOOLTIP, reloadChart } from "../../vendors/chart";
import { COLORS, cssVar } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-plan-mix");
let planMixChart;

const DATA = [
  { plan: "Starter", price: 12, subscribers: 1420, color: COLORS.cyan, className: "bg-info" },
  { plan: "Pro", price: 29, subscribers: 1126, color: COLORS.blue, className: "bg-primary" },
  { plan: "Business", price: 39, subscribers: 548, color: COLORS.purple, className: "bg-purple" },
  {
    plan: "Enterprise",
    price: 85,
    subscribers: 154,
    color: COLORS.orange,
    className: "bg-warning",
  },
];

export const planMix = () => {
  const TOTAL_MRR = DATA.reduce((sum, item) => sum + item.price * item.subscribers, 0);

  //---------------------------------------------------------
  // Chart
  //---------------------------------------------------------
  const CHART_CONFIG = {
    type: "doughnut",
    data: {
      labels: DATA.map((item) => item.plan),
      datasets: [
        {
          data: DATA.map((item) => item.price * item.subscribers),
          backgroundColor: DATA.map((item) => item.color),
          borderWidth: 2,
          borderColor: cssVar("--bs-chart-pie-border-color"),
          hoverOffset: 1,
          hoverBorderWidth: 0,
          borderRadius: 5,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      animation: false,
      cutout: "68%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          ...CHART_TOOLTIP,
          callbacks: {
            label: (item) => ` $${item.raw.toLocaleString()} MRR`,
          },
        },
      },
    },
  };

  if (CHART_WRAPPER) {
    planMixChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
  }

  //---------------------------------------------------------
  // List
  //---------------------------------------------------------
  const LIST_WRAPPER = document.getElementById("list-plan-mix");

  if (LIST_WRAPPER) {
    LIST_WRAPPER.innerHTML = DATA.map((item, index) => {
      const mrr = item.price * item.subscribers;
      const share = Math.round((mrr / TOTAL_MRR) * 100);

      return `<div class="d-flex align-items-center gap-3 ${index !== DATA.length - 1 ? "mb-4" : ""}">
                <i class="${item.className} w-2.5 h-2.5 rounded-circle flex-shrink-0"></i>
                <div class="flex-grow-1 text-body-emphasis">
                  ${item.plan}
                  <span class="fs-8 text-body-secondary ms-1">$${item.price}/seat</span>
                </div>
                <div class="fs-7 text-body-secondary d-none d-sm-block">${item.subscribers.toLocaleString()} subs</div>
                <div class="fs-5 text-body-emphasis w-12 text-end">${share}%</div>
              </div>`;
    }).join("");
  }
};

// Reload chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const planMixUpdate = () => {
  const updateBorderColors = () => {
    planMixChart.data.datasets[0].borderColor = cssVar("--bs-chart-pie-border-color");
  };

  if (CHART_WRAPPER) {
    setTimeout(() => {
      reloadChart(planMixChart, updateBorderColors());
    });
  }
};
