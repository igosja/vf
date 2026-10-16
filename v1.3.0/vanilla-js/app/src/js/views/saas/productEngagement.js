import Chart from "chart.js/auto";
import { chartGradient, chartTicks, CHART_TOOLTIP, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS, rgb } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-product-engagement");
let productEngagementChart;

export const productEngagement = () => {
  //---------------------------------------------------------
  // Chart
  //---------------------------------------------------------

  // Helper function for chart gradient fill
  const gradientBg = (context, colorStart, colorEnd) => {
    const { ctx, chartArea } = context.chart;
    return chartArea ? chartGradient(ctx, chartArea, 0.75, colorStart, colorEnd) : null;
  };

  const line = (label, data, color) => ({
    label,
    data,
    fill: true,
    backgroundColor: (context) => gradientBg(context, rgb(color, 0.2), rgb(color, 0)),
    borderColor: color,
    borderWidth: 1.5,
    tension: 0.4,
    pointRadius: 0,
    pointHoverRadius: 4,
    pointBackgroundColor: color,
    pointHoverBackgroundColor: color,
  });

  // Last 30 days, weekday peaks and weekend dips
  const DAYS = Array.from({ length: 30 }, (_, i) => `Oct ${i + 1}`);
  const DAU = [
    1080, 1120, 1150, 1010, 820, 790, 1105, 1160, 1190, 1205, 1060, 850, 830, 1150, 1190, 1210, 1230,
    1090, 880, 860, 1190, 1230, 1250, 1260, 1120, 900, 885, 1240, 1275, 1284,
  ];
  const WAU = [
    2010, 2030, 2050, 2045, 2040, 2060, 2080, 2100, 2120, 2135, 2140, 2150, 2160, 2180, 2200, 2215,
    2230, 2240, 2245, 2250, 2270, 2290, 2310, 2320, 2330, 2335, 2345, 2365, 2380, 2395,
  ];

  const CHART_CONFIG = {
    type: "line",
    data: {
      labels: DAYS,
      datasets: [line("Daily active users", DAU, COLORS.pink), line("Weekly active users", WAU, COLORS.blue)],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      layout: {
        padding: {
          left: -5,
          bottom: -5,
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
          min: 0,
          ticks: {
            ...chartTicks(),
            maxTicksLimit: 5,
            callback: (label) => (label >= 1000 ? `${label / 1000}K` : label),
          },
        },
      },
    },
  };

  if (CHART_WRAPPER) {
    productEngagementChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
  }
};

// Reload chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const productEngagementUpdate = () => {
  if (CHART_WRAPPER) {
    setTimeout(() => {
      reloadChart(productEngagementChart);
    });
  }
};
