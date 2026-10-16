import Chart from "chart.js/auto";
import { chartTicks, CHART_TOOLTIP, CHART_GRID, reloadChart } from "../../vendors/chart";
import { COLORS } from "../../utils";

const CHART_WRAPPER = document.getElementById("chart-mrr-movement");
let mrrMovementChart;

export const mrrMovement = () => {
  //---------------------------------------------------------
  // Chart
  //---------------------------------------------------------

  // Monthly MRR changes in $K
  const NEW = [6.2, 5.8, 7.1, 6.6, 7.9, 8.4, 7.2, 8.8, 9.1, 8.3, 9.6, 10.2];
  const EXPANSION = [2.1, 2.4, 2.0, 2.8, 3.1, 2.9, 3.4, 3.0, 3.6, 3.9, 3.5, 4.1];
  const CHURNED = [-2.8, -3.1, -2.5, -3.4, -2.9, -3.6, -3.2, -2.7, -3.8, -3.3, -2.9, -3.1];
  const NET = NEW.map((value, i) => +(value + EXPANSION[i] + CHURNED[i]).toFixed(1));

  const bar = (label, data, color) => ({
    label,
    data,
    backgroundColor: color,
    // Object form rounds every segment, not just the ends of the stack
    borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
    borderSkipped: false,
    borderWidth: 0,
    categoryPercentage: 0.5,
    maxBarThickness: 10,
    stack: "mrr",
    order: 2,
  });

  const CHART_DATA = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        type: "line",
        label: "Net new MRR",
        data: NET,
        borderColor: COLORS.orange,
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: COLORS.orange,
        pointHoverBackgroundColor: COLORS.orange,
        order: 1,
      },
      bar("New", NEW, COLORS.green),
      bar("Expansion", EXPANSION, COLORS.blue),
      bar("Churned", CHURNED, COLORS.red),
    ],
  };

  // Chart config
  const CHART_CONFIG = {
    type: "bar",
    data: CHART_DATA,
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
          callbacks: {
            label: (item) => `${item.dataset.label}: ${item.raw < 0 ? "-" : ""}$${Math.abs(item.raw)}K`,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
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
          stacked: true,
          border: {
            display: false,
          },
          grid: {
            ...CHART_GRID,
          },
          ticks: {
            ...chartTicks(),
            maxTicksLimit: 7,
            callback: (label) => `$${label}K`,
          },
        },
      },
    },
  };

  // Init chart
  if (CHART_WRAPPER) {
    mrrMovementChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
  }
};

// Reload chart to match dark/light mode when switched
// This function will be used in `colorMode.js`
export const mrrMovementUpdate = () => {
  if (CHART_WRAPPER) {
    setTimeout(() => {
      reloadChart(mrrMovementChart);
    });
  }
};
